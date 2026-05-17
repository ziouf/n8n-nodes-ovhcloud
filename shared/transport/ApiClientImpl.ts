import type {
	IDataObject,
	IHttpRequestOptions,
	IExecuteFunctions,
	ILoadOptionsFunctions,
} from 'n8n-workflow';
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
 * Configuration options for pagination.
 */
export interface PaginationOptions {
	/** Initial offset for pagination (default: 0) */
	offset?: number;
	/** Number of items per page (default: 100) */
	limit?: number;
	/** Maximum total items to fetch (default: 10000) */
	maxItems?: number;
	/** API endpoint to paginate (default: same as request endpoint) */
	endpoint?: string;
}

/**
 * Result of a paginated request.
 */
export interface PaginatedResult<T> {
	/** Array of items from the current page */
	items: T[];
	/** Total number of items available */
	total: number;
	/** Current offset */
	offset: number;
	/** Number of items per page */
	limit: number;
	/** Whether there are more pages available */
	hasMore: boolean;
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
	 * @returns A CredentialHolder instance with the current credentials
	 * @throws Error if the `ovhCloud-Api` credential is not configured
	 */
	private async getCredentials(): Promise<CredentialHolder> {
		const rawCredentials = await this.fn.getCredentials('ovhCloud-Api');
		return new CredentialHolder(rawCredentials as OvhCredentialsType);
	}

	/**
	 * Makes a GET request to the OVH API.
	 *
	 * @param url - The API endpoint path (without base URL)
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options
	 * @returns The parsed response data from the API
	 * @throws NodeApiError if the API call fails with an error status
	 */
	public async httpGet(
		url: string,
		qs?: IDataObject,
		options?: IHttpRequestOptions,
	): Promise<unknown> {
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'GET', url, qs, ...options }),
		);
	}

	/**
	 * Makes a POST request to the OVH API.
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
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'POST', url, body, qs, ...options }),
		);
	}

	/**
	 * Makes a PUT request to the OVH API.
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
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'PUT', url, body, qs, ...options }),
		);
	}

	/**
	 * Makes a DELETE request to the OVH API.
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
		const credentials = await this.getCredentials();
		return await this.fn.helpers.httpRequest(
			credentials.sign({ method: 'DELETE', url, qs, ...options }),
		);
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
	 * Executes an HTTP request with automatic retry on failure.
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

				await this.delay(delayMs);
				delayMs = Math.min(delayMs * (options.backoffMultiplier ?? 2), options.maxDelayMs);
			}
		}

		throw lastError;
	}

	/**
	 * Makes a GET request with automatic retry.
	 *
	 * @param url - The API endpoint path
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options including retry config
	 * @returns The parsed response data
	 */
	public async httpGetWithRetry(
		url: string,
		qs?: IDataObject,
		options?: { retry?: Partial<RetryOptions> } & IHttpRequestOptions,
	): Promise<unknown> {
		const retryOptions = options?.retry;
		const httpOptions = { ...options };
		delete httpOptions.retry;
		return await this.requestWithRetry(
			() => this.httpGet(url, qs, httpOptions as IHttpRequestOptions),
			retryOptions,
		);
	}

	/**
	 * Makes a POST request with automatic retry.
	 *
	 * @param url - The API endpoint path
	 * @param body - Optional request body
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options including retry config
	 * @returns The parsed response data
	 */
	public async httpPostWithRetry(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: { retry?: Partial<RetryOptions> } & IHttpRequestOptions,
	): Promise<unknown> {
		const retryOptions = options?.retry;
		const httpOptions = { ...options };
		delete httpOptions.retry;
		return await this.requestWithRetry(
			() => this.httpPost(url, body, qs, httpOptions as IHttpRequestOptions),
			retryOptions,
		);
	}

	/**
	 * Makes a PUT request with automatic retry.
	 *
	 * @param url - The API endpoint path
	 * @param body - Optional request body
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options including retry config
	 * @returns The parsed response data
	 */
	public async httpPutWithRetry(
		url: string,
		body?: IDataObject,
		qs?: IDataObject,
		options?: { retry?: Partial<RetryOptions> } & IHttpRequestOptions,
	): Promise<unknown> {
		const retryOptions = options?.retry;
		const httpOptions = { ...options };
		delete httpOptions.retry;
		return await this.requestWithRetry(
			() => this.httpPut(url, body, qs, httpOptions as IHttpRequestOptions),
			retryOptions,
		);
	}

	/**
	 * Makes a DELETE request with automatic retry.
	 *
	 * @param url - The API endpoint path
	 * @param qs - Optional query parameters
	 * @param options - Additional HTTP request options including retry config
	 * @returns The parsed response data
	 */
	public async httpDeleteWithRetry(
		url: string,
		qs?: IDataObject,
		options?: { retry?: Partial<RetryOptions> } & IHttpRequestOptions,
	): Promise<unknown> {
		const retryOptions = options?.retry;
		const httpOptions = { ...options };
		delete httpOptions.retry;
		return await this.requestWithRetry(
			() => this.httpDelete(url, qs, httpOptions as IHttpRequestOptions),
			retryOptions,
		);
	}

	/**
	 * Paginates through a list endpoint, fetching all items automatically.
	 *
	 * OVH API uses `offset` and `limit` query parameters for pagination.
	 * This method handles the pagination loop and returns all items in a single array.
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
		const { offset = 0, limit = 100, maxItems = 10000 } = options ?? {};

		const allItems: T[] = [];
		let currentOffset = offset;

		while (allItems.length < maxItems) {
			const response = (await this.httpGet(endpoint, {
				offset: currentOffset,
				limit: Math.min(limit, maxItems - allItems.length),
			})) as string[];

			if (!Array.isArray(response) || response.length === 0) {
				break;
			}

			const ids = response.slice(0, maxItems - allItems.length);
			allItems.push(...(ids as unknown as T[]));

			if (response.length < limit) {
				break;
			}

			currentOffset += response.length;
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
	 * @param listEndpoint - The list endpoint returning IDs (e.g., '/vps')
	 * @param itemEndpoint - The item endpoint template with {id} placeholder (e.g., '/vps/{id}')
	 * @param options - Pagination configuration
	 * @returns Array of full resource objects
	 *
	 * @example
	 * ```typescript
	 * const allVps = await client.paginateResources('/vps', '/vps/{id}', { limit: 50 });
	 * ```
	 */
	public async paginateResources<T = IDataObject>(
		listEndpoint: string,
		itemEndpoint: string,
		options?: PaginationOptions,
	): Promise<T[]> {
		const ids = await this.paginate<string>(listEndpoint, options);

		const resources: T[] = [];
		for (const id of ids) {
			const itemEndpointUrl = itemEndpoint.replace('{id}', id);
			try {
				const resource = (await this.httpGet(itemEndpointUrl)) as T;
				resources.push(resource);
			} catch {
				continue;
			}
		}

		return resources;
	}

	/**
	 * Gets the count of items at an endpoint without fetching all items.
	 *
	 * Useful for checking how many items exist before deciding whether to paginate.
	 *
	 * @param endpoint - The API endpoint to count
	 * @param options - Optional pagination config with a small limit
	 * @returns Number of items at the endpoint
	 */
	public async getCount(endpoint: string, options?: PaginationOptions): Promise<number> {
		const result = await this.paginate(endpoint, {
			...options,
			limit: 1,
			maxItems: 1,
		});
		return result.length;
	}
}
