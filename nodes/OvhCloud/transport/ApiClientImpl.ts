import type { IDataObject, IHttpRequestOptions, IExecuteFunctions, ILoadOptionsFunctions  } from 'n8n-workflow';
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
 * API client wrapper for OVHcloud API requests in n8n nodes.
 *
 * Provides convenient HTTP methods (GET, POST, PUT, DELETE) that automatically:
 * - Retrieve credentials from the n8n context using `getCredentials()`
 * - Sign requests using the OVH signature algorithm via CredentialHolder
 * - Return parsed response data from the API
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
 * const client = new ApiClient(this); // 'this' is the execute function context
 *
 * // GET request
 * const services = await client.httpGet('/vps');
 *
 * // POST request with body
 * const snapshot = await client.httpPost('/vps/my-vps/snapshot', { description: 'Backup' });
 *
 * // GET request with query parameters
 * const disk = await client.httpGet('/vps/my-vps/disks/disk-123');
 * ```
 */
export class ApiClient {
	/** The n8n function context providing access to credentials and helpers. */
	fn: IFunctions;

	/**
	 * Creates a new API client instance for the given n8n function context.
	 *
	 * @param fn - The n8n function context (execute or load options function)
	 * @throws Error if credentials are not available in the context
	 */
	constructor(fn: IFunctions) {
		this.fn = fn;
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
}
