import type {
	IDataObject,
	IHttpRequestOptions,
	IExecuteFunctions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';
import { createHash } from 'crypto';
import type { OvhCredentialsType } from './CredentialHolder';
import { CredentialHolder } from './CredentialHolder';
import { OvhCloudApiSecretName } from '../constants';

/**
 * Type alias for n8n functions context (execute or load options).
 *
 * Used to provide a unified interface for API calls regardless of whether
 * the code is running in an execute function or a load options function.
 */
type IFunctions = IExecuteFunctions | ILoadOptionsFunctions;

/**
 * Configuration options for paginating through a list endpoint and fetching
 * full resources for each ID.
 *
 * Extends {@link PaginationOptions} with callbacks only.
 */
export interface PaginateResourcesOptions extends PaginationOptions {
	onSkipped?: (id: string, error: unknown) => void;
}

/**
 * Configuration options for pagination.
 */
export interface PaginationOptions {
	/** Initial offset for pagination (default: 0) */
	offset?: number;
	/** Number of items per page (default: 100) */
	limit?: number;
	/** Maximum total items to fetch (default: 1000).
	 * Set higher for endpoints with many items, but be mindful of memory and API rate limits.
	 */
	maxItems?: number;
	query?: IDataObject;
}

/**
 * Configuration options for retry behavior.
 */
export interface RetryOptions {
	/** Maximum number of retry attempts (default: 3) */
	maxRetries?: number;
	/** Initial delay in milliseconds before first retry (default: 1000) */
	initialDelayMs?: number;
	/** Maximum delay in milliseconds between retries (default: 10000) */
	maxDelayMs?: number;
	/** Multiplier for exponential backoff (default: 2) */
	backoffMultiplier?: number;
}

/**
 * Default retry configuration.
 */
const DEFAULT_RETRY_OPTIONS: Required<RetryOptions> = {
	maxRetries: 3,
	initialDelayMs: 1000,
	maxDelayMs: 10000,
	backoffMultiplier: 2,
};

/**
 * API client wrapper for OVHcloud API requests in n8n nodes.
 *
 * Provides convenient HTTP methods (GET, POST, PUT, DELETE) that automatically:
 * - Retrieve credentials from the n8n context using `getCredentials()`
 * - Sign requests using the OVH signature algorithm via CredentialHolder
 * - Return parsed response data from the API
 * - Support pagination for list endpoints
 * - Retry transient errors (429, 5xx, network) with exponential backoff + jitter
 * - Support configurable timeout and retry with exponential backoff
 *
 * This client should be used for all OVH API calls in n8n nodes to ensure
 * consistent authentication and error handling.
 *
 * @see CredentialHolder for the credential signing implementation
 * @see OvhCloudApi.credentials.ts for the credential type definition
 * @see OvhCloudApi for the credential type class
 *
 * @example
 * ```typescript
 * const client = new ApiClient(this);
 *
 * // GET request
 * const services = await client.httpGet('/vps');
 *
 * // Paginated request
 * const allVps = await client.paginate('/vps', { limit: 50, maxItems: 500 });
 *
 * // Request with retry configuration
 * const result = await client.httpGet('/vps', undefined, {
 *   timeout: 30000,
 *   retries: { maxRetries: 5, initialDelayMs: 2000 }
 * });
 * ```
 */
export class ApiClient {
	/** The n8n function context providing access to credentials and helpers. */
	fn: IFunctions;

	/** Default retry configuration for all requests. */
	defaultRetryOptions: Required<RetryOptions>;

	/** Memoized credentials (resolved once per client instance). */
	private credentialsCache: CredentialHolder | undefined;

	/**
	 * Creates a new API client instance for the given n8n function context.
	 *
	 * @param fn - The n8n function context (execute or load options function)
	 * @param retryOptions - Default retry configuration for all requests
	 * @throws Error if credentials are not available in the context
	 */
	constructor(fn: IFunctions, retryOptions?: Partial<RetryOptions>) {
		this.fn = fn;
		this.defaultRetryOptions = { ...DEFAULT_RETRY_OPTIONS, ...retryOptions };
	}

	/**
	 * Retrieves and wraps the stored OVH API credentials.
	 *
	 * Credentials are resolved once per client instance and memoized, so that
	 * consecutive HTTP calls within a single execution reuse the same
	 * {@link CredentialHolder} instead of re-fetching them from the n8n context
	 * for every request.
	 *
	 * @returns A CredentialHolder instance with the current credentials
	 * @throws Error if the `ovhCloud-Api` credential is not configured
	 */
	private async getCredentials(): Promise<CredentialHolder> {
		if (this.credentialsCache) {
			return this.credentialsCache;
		}
		const rawCredentials = await this.fn.getCredentials(OvhCloudApiSecretName);
		this.credentialsCache = new CredentialHolder(rawCredentials as OvhCredentialsType);
		return this.credentialsCache;
	}

	/**
	 * Returns a credential-scoped identifier used for cache isolation.
	 *
	 * The scope is `endpoint|sha256(consumerKey)[:16]` — the raw consumer key
	 * is **never** exposed in the scope string.  Different consumer keys or
	 * endpoints produce different scopes, ensuring that cached list-search
	 * results from one credential never leak into another.
	 *
	 * @returns A deterministic scope string in the format `endpoint|16-hex-chars`
	 */
	public async getCredentialScope(): Promise<string> {
		const credentials = await this.getCredentials();
		const hash = createHash('sha256').update(credentials.consumerKey).digest('hex').slice(0, 16);
		return `${credentials.endpoint}|${hash}`;
	}

	private async request<T>(
		method: 'GET' | 'POST' | 'PUT' | 'DELETE',
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<T> {
		return this.requestWithRetry(async () => {
			const credentials = await this.getCredentials();
			return (await this.fn.helpers.httpRequest(
				credentials.sign({ method, url, body, qs, ...options }),
			)) as T;
		});
	}

	public async httpGet<T = unknown>(
		url: string,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<T> {
		return this.request('GET', url, undefined, qs, options);
	}

	/**
	 * Makes a POST request to the OVH API with automatic retry on transient errors.
	 */
	public async httpPost<T = unknown>(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<T> {
		return this.request('POST', url, body, qs, options);
	}

	/**
	 * Makes a PUT request to the OVH API with automatic retry on transient errors.
	 */
	public async httpPut<T = unknown>(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<T> {
		return this.request('PUT', url, body, qs, options);
	}

	/**
	 * Makes a DELETE request to the OVH API with automatic retry on transient errors.
	 */
	public async httpDelete<T = unknown>(
		url: string,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<T> {
		return this.request('DELETE', url, undefined, qs, options);
	}

	/**
	 * Waits for the specified number of milliseconds.
	 *
	 * @param ms - Number of milliseconds to wait
	 */
	private async delay(ms: number): Promise<void> {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	/**
	 * Extracts the HTTP status code from a variety of error shapes.
	 *
	 * Checks `code` (number), `httpCode` (string → parseInt), and
	 * `response.status` (number).  Returns `null` when none match.
	 */
	private getHttpStatus(error: unknown): number | null {
		if (!error || typeof error !== 'object') return null;
		const err = error as {
			code?: number | string;
			httpCode?: string;
			response?: { status?: number };
		};
		if (typeof err.code === 'number') return err.code;
		if (typeof err.httpCode === 'string') return parseInt(err.httpCode, 10);
		if (typeof err.response?.status === 'number') return err.response.status;
		return null;
	}

	/**
	 * Checks if an error is an HTTP 429 Rate Limit error.
	 *
	 * @param error - The error to check
	 * @returns true if the error is a 429 rate limit error
	 */
	private isRateLimitError(error: unknown): boolean {
		if (this.getHttpStatus(error) === 429) return true;
		// Residual check for { code: '429' } (string) — getHttpStatus returns NaN for string codes.
		if (error && typeof error === 'object') {
			const err = error as { code?: string };
			if (err.code === '429') return true;
		}
		return false;
	}

	/**
	 * Checks if an error is transient (suitable for automatic retry).
	 *
	 * A transient error is one that may resolve on retry:
	 * - HTTP 429 (Rate Limit) or 5xx (Server errors)
	 * - Network-level errors (ECONNRESET, ETIMEDOUT, etc.)
	 * - Messages containing 'socket hang up' or 'timeout'
	 *
	 * All other 4xx errors and unknown errors are considered non-transient.
	 *
	 * @param error - The error to check
	 * @returns true if the error is transient and may succeed on retry
	 */
	private isTransientError(error: unknown): boolean {
		const err = error as {
			code?: number | string;
			httpCode?: string;
			message?: string;
			response?: { status?: number };
		};

		// Check HTTP status code from various possible locations
		const httpStatus = this.getHttpStatus(error);

		if (httpStatus !== null) {
			if (httpStatus === 429 || (httpStatus >= 500 && httpStatus <= 599)) return true;
			// All other 4xx are non-transient
			if (httpStatus >= 400 && httpStatus < 500) return false;
		}

		// Check network-level error codes
		const networkErrors = [
			'ECONNRESET',
			'ETIMEDOUT',
			'ECONNABORTED',
			'ENOTFOUND',
			'EAI_AGAIN',
			'EHOSTUNREACH',
			'ENETUNREACH',
			'EPIPE',
		];
		if (typeof err.code === 'string' && networkErrors.includes(err.code)) return true;

		// Check message for known transient patterns
		if (typeof err.message === 'string') {
			const msgLower = err.message.toLowerCase();
			if (msgLower.includes('socket hang up') || msgLower.includes('timeout')) return true;
		}

		return false;
	}

	/**
	 * Extracts the delay from a 429 rate limit error.
	 *
	 * Checks for Retry-After header in the error response.
	 * Falls back to exponential backoff if not present.
	 *
	 * @param error - The 429 rate limit error
	 * @param fallbackDelay - Default delay in ms if no Retry-After header
	 * @returns Delay in milliseconds
	 */
	private getRateLimitDelay(error: unknown, fallbackDelay: number): number {
		if (error && typeof error === 'object' && 'response' in error) {
			const response = (error as { response?: { headers?: Record<string, string> } }).response;
			if (response?.headers) {
				const retryAfter = response.headers['retry-after'];
				if (retryAfter) {
					const seconds = parseInt(retryAfter, 10);
					if (!isNaN(seconds) && seconds > 0) {
						return Math.min(seconds * 1000, this.defaultRetryOptions.maxDelayMs);
					}
				}
				const ovhReset = response.headers['x-ratelimit-reset'];
				if (ovhReset) {
					const resetTime = parseInt(ovhReset, 10);
					if (!isNaN(resetTime) && resetTime > 0) {
						const waitMs = resetTime * 1000 - Date.now();
						if (waitMs > 0) {
							return Math.min(waitMs, this.defaultRetryOptions.maxDelayMs);
						}
					}
				}
			}
		}
		return fallbackDelay;
	}

	/**
	 * Executes an HTTP request with automatic retry on failure.
	 *
	 * Handles HTTP 429 Rate Limit errors specifically by respecting
	 * Retry-After and X-Ratelimit-Reset headers.
	 * Retries only transient errors (5xx, 429, network errors).
	 * Applies jitter to avoid thundering-herd on retry.
	 *
	 * Note: `isTransientError` never matches 4xx business errors, so retries
	 * are bounded to transient conditions only — safe for all HTTP verbs.
	 *
	 * @param requestFn - Async function that performs the HTTP request
	 * @param retryOptions - Retry configuration (overrides default)
	 * @returns The parsed response data
	 * @throws The last error if all retries are exhausted
	 */
	private async requestWithRetry<T>(
		requestFn: () => Promise<T>,
		retryOptions?: Partial<RetryOptions>,
	): Promise<T> {
		const options = { ...this.defaultRetryOptions, ...retryOptions };
		let lastError: unknown;
		let delayMs = options.initialDelayMs;

		for (let attempt = 0; attempt <= options.maxRetries; attempt++) {
			try {
				return await requestFn();
			} catch (error) {
				lastError = error;

				if (attempt >= options.maxRetries) {
					break;
				}

				if (!this.isTransientError(error)) {
					break;
				}

				if (this.isRateLimitError(error)) {
					delayMs = this.getRateLimitDelay(error, delayMs);
				} else {
					delayMs = Math.min(delayMs * (options.backoffMultiplier ?? 2), options.maxDelayMs);
				}

				const jitteredDelay = delayMs * (0.5 + Math.random() * 0.5);
				await this.delay(jitteredDelay);
			}
		}

		throw lastError;
	}

	/**
	 * Paginates through a list endpoint, fetching all items automatically.
	 *
	 * OVH API uses `offset` and `limit` query parameters for pagination.
	 * This method handles the sequential pagination loop and returns all
	 * items in a single array.
	 *
	 * @param endpoint - The API endpoint to paginate (e.g., '/vps')
	 * @param options - Pagination configuration
	 * @returns Array of all items from all pages
	 *
	 * @example
	 * ```typescript
	 * const allVps = await client.paginate('/vps', { limit: 50, maxItems: 500 });
	 * ```
	 */
	public async paginate<T = IDataObject>(
		endpoint: string,
		options?: PaginationOptions,
	): Promise<T[]> {
		const { offset = 0, limit = 100, maxItems = 1000 } = options ?? {};

		const allItems: T[] = [];
		let currentOffset = offset;

		while (allItems.length < maxItems) {
			const remaining = maxItems - allItems.length;
			const response = (await this.httpGet(endpoint, {
				...options?.query,
				offset: currentOffset,
				limit: Math.min(limit, remaining),
			})) as string[];
			const ids = Array.isArray(response) ? response : [];
			if (ids.length === 0) break;
			allItems.push(...(ids.slice(0, remaining) as unknown as T[]));
			if (ids.length < limit) break;
			currentOffset += limit;
		}

		return allItems;
	}

	/**
	 * Paginates through a list endpoint and fetches full resources for each ID.
	 *
	 * OVH API list endpoints often return arrays of IDs (strings).
	 * This method fetches all IDs via pagination, then fetches each resource
	 * by its ID endpoint to get the full object.
	 *
	 * Individual resource fetch failures are silently skipped (the resource is
	 * omitted from the result) so that one missing or deleted resource does not
	 * fail the entire call.  Use the `onSkipped` callback to track failures.
	 *
	 * @param listEndpoint - The list endpoint returning IDs (e.g., '/vps')
	 * @param itemEndpoint - The item endpoint template with {id} placeholder (e.g., '/vps/{id}')
	 * @param options - Pagination and resource-fetch configuration
	 * @returns Array of full resource objects (skipped resources omitted)
	 *
	 * @example
	 * ```typescript
	 * // Basic usage — same as before
	 * const allVps = await client.paginateResources('/vps', '/vps/{id}', { limit: 50 });
	 *
	 * // With skip tracking
	 * await client.paginateResources('/vps', '/vps/{id}', {
	 *   onSkipped: (id, error) => console.warn(`Skipped ${id}:`, error),
	 * });
	 * ```
	 */
	public async paginateResources<T = IDataObject>(
		listEndpoint: string,
		itemEndpoint: string,
		options?: PaginateResourcesOptions,
	): Promise<T[]> {
		const { onSkipped, ...paginateOpts } = options ?? {};
		const ids = await this.paginate<string>(listEndpoint, paginateOpts);

		const resources: T[] = [];
		for (const id of ids) {
			const itemEndpointUrl = itemEndpoint.replace('{id}', id);
			try {
				resources.push((await this.httpGet(itemEndpointUrl)) as T);
			} catch (error) {
				onSkipped?.(id, error);
			}
		}

		return resources;
	}
}


// WeakMap auto-GCs with the execution context — no manual cache clearing needed.
const clientCache = new WeakMap<object, ApiClient>();

/**
 * Factory mémoïsée : retourne un unique ApiClient par contexte d'exécution.
 *
 * Utilise un WeakMap keyed par `this` (IExecuteFunctions | ILoadOptionsFunctions)
 * pour garantir qu'un seul client est instancié par exécution n8n, évitant
 * les appels redondants à getCredentials() et le gaspillage de mémoire.
 * Le WeakMap garantit la libération automatique du client quand le contexte
 * n8n est détruit (fin d'exécution).
 *
 * @param fn - Contexte n8n (execute ou load options)
 * @returns L'ApiClient mémoïsé pour ce contexte
 */
export function getClient(fn: IExecuteFunctions | ILoadOptionsFunctions): ApiClient {
	if (!clientCache.has(fn)) {
		clientCache.set(fn, new ApiClient(fn));
	}
	return clientCache.get(fn)!;
}
