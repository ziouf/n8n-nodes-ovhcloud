import { createHash } from 'crypto';
import type { IHttpRequestOptions } from 'n8n-workflow';

/**
 * Type definition for OVH API credentials used in n8n nodes.
 *
 * Contains all required fields for OVH API authentication:
 * - endpoint: The API base URL (e.g., `eu.api.ovh.com/1.0`)
 * - appKey: Application key from OVH API application
 * - appSecret: Application secret from OVH API application
 * - consumerKey: Consumer key (token) authorized with specific permissions
 * - [key: string]: unknown - Additional custom fields may be stored
 *
 * @see OvhCloudApi.credentials.ts for the credential type definition
 * @see CredentialHolder for the credential management and signing implementation
 */
export interface OvhCredentialsType {
	endpoint: string;
	appKey: string;
	appSecret: string;
	consumerKey: string;
	[key: string]: unknown;
}

/**
 * Helper class for managing OVH API credentials and request signing in n8n nodes.
 *
 * Implements the OVH signature authentication algorithm as documented at:
 * https://help.ovhcloud.com/csm/en-manage-ovhcloud-api-tokens?id=kb_article_view&sysparm_article=KB0042784
 *
 * The signature is generated using SHA1 hash of the following fields (concatenated with '+'):
 * - Application Secret
 * - Consumer Key
 * - HTTP Method
 * - Full Request URL (including query parameters)
 * - Request Body (JSON stringified for POST/PUT requests)
 * - Current Unix Timestamp
 *
 * The signature ensures request integrity and prevents replay attacks.
 * The timestamp is valid for 5 minutes according to OVH API policy.
 *
 * @see OvhCredentialsType for the credential data structure
 * @see OvhCloudApi.credentials.ts for the credential type definition
 * @see https://help.ovhcloud.com/csm/en-manage-ovhcloud-api-tokens?id=kb_article_view&sysparm_article=KB0042784 OVH API Authentication
 *
 * @example
 * ```typescript
 * const credentials = new CredentialHolder(rawCredentials);
 * const signedRequest = credentials.sign({
 *   method: 'GET',
 *   url: '/vps',
 *   qs: { orderBy: 'serviceId' }
 * });
 * ```
 */
export class CredentialHolder implements OvhCredentialsType {
	endpoint: string;
	appKey: string;
	appSecret: string;
	consumerKey: string;
	[key: string]: unknown;

	/**
	 * Creates a new CredentialHolder instance from raw credentials.
	 *
	 * @param credentials - Raw credential object with OVH API credentials
	 */
	constructor(credentials: OvhCredentialsType) {
		this.endpoint = credentials.endpoint;
		this.appKey = credentials.appKey;
		this.appSecret = credentials.appSecret;
		this.consumerKey = credentials.consumerKey;
		for (const key in credentials) {
			if (
				Object.prototype.hasOwnProperty.call(credentials, key) &&
				!['endpoint', 'appKey', 'appSecret', 'consumerKey'].includes(key)
			) {
				this[key] = credentials[key];
			}
		}
	}

	/**
	 * Signs an HTTP request using the OVH signature algorithm.
	 *
	 * Adds the following authentication headers to the request:
	 * - `X-Ovh-Application`: Application key
	 * - `X-Ovh-Consumer`: Consumer key (token)
	 * - `X-Ovh-Timestamp`: Current Unix timestamp (5-minute validity)
	 * - `X-Ovh-Signature`: SHA1 signature in format `$1$<hex>`
	 *
	 * The signature ensures request integrity and prevents replay attacks.
	 * The timestamp is valid for 5 minutes according to OVH API policy.
	 *
	 * @param requestOptions - HTTP request options containing method, URL, body, and query parameters
	 * @returns The modified request options with authentication headers and base URL added
	 * @throws Error if credential fields are missing or malformed
	 */
	sign(requestOptions: IHttpRequestOptions): IHttpRequestOptions {
		const { endpoint, appKey, appSecret, consumerKey } = this;
		const { url: path, qs = {}, headers = {} } = requestOptions;
		const baseURL = `https://${endpoint}`;
		const searchParams = new URLSearchParams(qs as Record<string, string>).toString();
		const url = [baseURL, path, Object.keys(qs).length ? '?' + searchParams : ''].join('');
		const method = requestOptions.method || 'GET';
		const body =
			typeof requestOptions.body === 'object'
				? JSON.stringify(requestOptions.body)
				: (requestOptions.body as string) || '';
		const ts = Math.floor(Date.now() / 1000);
		const signatureFields = [appSecret, consumerKey, method, url, body, ts];

		headers['Content-Type'] = 'application/json';
		headers['X-Ovh-Application'] = appKey;
		headers['X-Ovh-Consumer'] = consumerKey;
		headers['X-Ovh-Timestamp'] = ts.toString();
		headers['X-Ovh-Signature'] =
			'$1$' + createHash('sha1').update(signatureFields.join('+')).digest('hex');

		return Object.assign({}, requestOptions, { baseURL, headers });
	}
}
