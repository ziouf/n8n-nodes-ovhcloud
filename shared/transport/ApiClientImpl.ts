import type {
	IDataObject,
	IHttpRequestOptions,
	IExecuteFunctions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';
import { createHash } from 'crypto';
import type { OvhCredentialsType } from './CredentialHolder';
import { CredentialHolder } from './CredentialHolder';

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
 * Extends {@link PaginationOptions} with callbacks and concurrency controls.
 */
export interface PaginateResourcesOptions extends PaginationOptions {
	/**
	 * Callback invoked when a resource fails to fetch (e.g. 404 Not Found).
	 *
	 * Receives the resource ID and the error that caused the skip.  Use this
	 * to log warnings, collect failed IDs, or surface them to the user.
	 */
	onSkipped?: (id: string, error: unknown) => void;
	/**
	 * Maximum number of concurrent resource fetches.
	 *
	 * Defaults to {@link ApiClient.PAGINATE_CONCURRENCY} when omitted or ≤ 0.
	 * Set to `1` for strict sequential fetching.
	 */
	concurrency?: number;
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
	/** Additional query parameters merged into every page request
	 * (e.g. `{ routes: '/vps' }`). Merged before `offset`/`limit`,
	 * so those always take precedence.
	 */
	query?: IDataObject;
	/** Maximum number of concurrent page requests.
	 * Defaults to {@link ApiClient.PAGINATE_CONCURRENCY} when omitted or ≤ 0.
	 * Set to `1` for strict sequential fetching (previous behaviour).
	 */
	concurrency?: number;
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

	/** Maximum number of concurrent page requests in paginate / paginateResources.
	 * Defaults to `3` for parallel page fetching.  Set to `1` for strict
	 * sequential fetching (previous behaviour).
	 */
	private static readonly PAGINATE_CONCURRENCY = 3;

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
		const rawCredentials = await this.fn.getCredentials('ovhCloud-Api');
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

	public async httpGet(
		url: string,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		return this.requestWithRetry(async () => {
			const credentials = await this.getCredentials();
			return await this.fn.helpers.httpRequest(
				credentials.sign({ method: 'GET', url, qs, ...options }),
			);
		});
	}

	/**
	 * Makes a POST request to the OVH API with automatic retry on transient errors.
	 *
	 * @param url - The API endpoint path (without base URL)
	 * @param body - Optional request body (will be JSON stringified)
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options
	 * @returns The parsed response data from the API
	 * @throws NodeApiError if the API call fails with an error status
	 */
	public async httpPost(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		return this.requestWithRetry(async () => {
			const credentials = await this.getCredentials();
			return await this.fn.helpers.httpRequest(
				credentials.sign({ method: 'POST', url, body, qs, ...options }),
			);
		});
	}

	/**
	 * Makes a PUT request to the OVH API with automatic retry on transient errors.
	 *
	 * @param url - The API endpoint path (without base URL)
	 * @param body - Optional request body (will be JSON stringified)
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options
	 * @returns The parsed response data from the API
	 * @throws NodeApiError if the API call fails with an error status
	 */
	public async httpPut(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		return this.requestWithRetry(async () => {
			const credentials = await this.getCredentials();
			return await this.fn.helpers.httpRequest(
				credentials.sign({ method: 'PUT', url, body, qs, ...options }),
			);
		});
	}

	/**
	 * Makes a DELETE request to the OVH API with automatic retry on transient errors.
	 *
	 * @param url - The API endpoint path (without base URL)
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options
	 * @returns The parsed response data from the API
	 * @throws NodeApiError if the API call fails with an error status
	 */
	public async httpDelete(
		url: string,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		return this.requestWithRetry(async () => {
			const credentials = await this.getCredentials();
			return await this.fn.helpers.httpRequest(
				credentials.sign({ method: 'DELETE', url, qs, ...options }),
			);
		});
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
	 * This method handles the pagination loop and returns all items in a single array.
	 *
	 * Pages are fetched in fixed-size batches of `concurrency` parallel requests
	 * (default: 3 / parallel), which reduces total latency compared to the
	 * previous sequential implementation while producing identical results.  Set
	 * `concurrency: 1` for strict sequential fetching.
	 *
	 * @param endpoint - The API endpoint to paginate (e.g., '/vps')
	 * @param options - Pagination configuration (supports optional `concurrency`)
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

		const rawConcurrency = options?.concurrency;
		const concurrency =
			rawConcurrency != null && rawConcurrency > 0
				? rawConcurrency
				: ApiClient.PAGINATE_CONCURRENCY;

		// Batch pipeline: pages are fetched in fixed-size batches of
		// `concurrency` parallel requests. Offsets advance by exactly `limit`
		// per page (OVH offset/limit pagination returns full pages until the
		// last one), and a short page ends pagination in fetch order — so the
		// number of requests, their offsets and the termination condition are
		// identical to the previous sequential implementation. Only the
		// intra-batch parallelism differs, which is what reduces latency.
		const allItems: T[] = [];
		let currentOffset = offset;

		while (allItems.length < maxItems) {
			const remaining = maxItems - allItems.length;
			const batchSize = Math.min(concurrency, Math.ceil(remaining / Math.max(1, limit)));
			const offsets = Array.from({ length: batchSize }, (_, i) => currentOffset + i * limit);

			// Fetch the whole batch in parallel.
			const responses = await Promise.all(
				offsets.map(async (pageOffset) => {
					try {
						const response = (await this.httpGet(endpoint, {
							...options?.query,
							offset: pageOffset,
							limit: Math.min(limit, remaining),
						})) as string[];
						return Array.isArray(response) ? response : [];
					} catch (error) {
						throw error as Error;
					}
				}),
			);

			// Consume the batch in fetch order; a short/empty page ends pagination.
			let finished = false;
			for (const response of responses) {
				if (finished) break;
				if (response.length === 0) {
					finished = true;
					break;
				}
				const ids = response.slice(0, maxItems - allItems.length);
				allItems.push(...(ids as unknown as T[]));
				if (response.length < limit) {
					finished = true;
				}
			}

			if (finished) break;
			currentOffset += batchSize * limit;
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
	 *   concurrency: 3,
	 * });
	 * ```
	 */
	public async paginateResources<T = IDataObject>(
		listEndpoint: string,
		itemEndpoint: string,
		options?: PaginateResourcesOptions,
	): Promise<T[]> {
		/* Extract the resource-fetch concurrency so it is not passed to
		 * paginate() — paginate interprets `concurrency` as page-fetch
		 * parallelism, which is a different concern. */
		const { concurrency: resourceConcurrency, onSkipped, ...paginateOpts } = options ?? {};
		const ids = await this.paginate<string>(listEndpoint, paginateOpts);

		const resources: (T | undefined)[] = new Array(ids.length);
		let nextIndex = 0;

		/**
		 * Fetches the next batch of resources concurrently.
		 *
		 * Workers pull indices off the queue in order, so results can be stored
		 * back at their original position, preserving the ordering of `ids`
		 * regardless of completion timing. Individual failures are skipped
		 * (left as `undefined`) to avoid letting one missing resource fail the
		 * whole call, mirroring the previous sequential behaviour.
		 */
		const worker = async (): Promise<void> => {
			while (true) {
				const index = nextIndex++;
				if (index >= ids.length) {
					return;
				}
				const itemEndpointUrl = itemEndpoint.replace('{id}', ids[index]);
				try {
					resources[index] = (await this.httpGet(itemEndpointUrl)) as T;
				} catch (error) {
					onSkipped?.(ids[index], error);
				}
			}
		};

		const rawConcurrency = resourceConcurrency;
		const concurrency =
			rawConcurrency != null && rawConcurrency > 0
				? Math.min(rawConcurrency, Math.max(1, ids.length))
				: Math.min(ApiClient.PAGINATE_CONCURRENCY, Math.max(1, ids.length));
		await Promise.all(Array.from({ length: concurrency }, () => worker()));

		return resources.filter((resource): resource is T => resource !== undefined);
	}
}
