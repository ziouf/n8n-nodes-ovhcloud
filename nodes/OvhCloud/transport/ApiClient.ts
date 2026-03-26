/**
 * @brief OVHcloud API client for n8n nodes
 *
 * Provides a convenient wrapper for making authenticated HTTP requests to the OVHcloud API.
 * Automatically handles credential retrieval and request signing using the SHA1 signature algorithm.
 *
 * @details
 * - Reuses CredentialHolder for consistent authentication
 * - Provides typed HTTP methods (httpGet, httpPost, httpPut, httpDelete)
 * - Returns parsed response data from API calls
 * - Handles all OVH API endpoints (Europe, Canada, USA, SoYouStart, Kimsufi)
 *
 * @see CredentialHolder for credential management and signing
 * @see OvhCloudApi.credentials.ts for credential type definition
 * @see OvhCloudApi for credential configuration
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
export { ApiClient } from './ApiClientImpl';
