/**
 * Tests for the CredentialHolder class (CredentialHolder.ts).
 *
 * Verifies that the OVH API signature algorithm is correctly implemented,
 * including header generation, URL construction, body handling, and
 * timestamp management.
 */

import { createHash } from 'crypto';
import { CredentialHolder } from '../shared/transport/CredentialHolder';
import type { IHttpRequestOptions } from 'n8n-workflow';

describe('CredentialHolder', () => {
	const validCredentials = {
		endpoint: 'eu.api.ovh.com/1.0',
		appKey: 'test-app-key',
		appSecret: 'test-app-secret',
		consumerKey: 'test-consumer-key',
	};

	describe('constructor', () => {
		it('should correctly assign all credential fields', () => {
			const holder = new CredentialHolder(validCredentials);

			expect(holder.endpoint).toBe('eu.api.ovh.com/1.0');
			expect(holder.appKey).toBe('test-app-key');
			expect(holder.appSecret).toBe('test-app-secret');
			expect(holder.consumerKey).toBe('test-consumer-key');
		});

		it('should copy additional custom fields from credentials', () => {
			const credentialsWithExtras = {
				...validCredentials,
				customField: 'custom-value',
				anotherField: 42,
			};
			const holder = new CredentialHolder(credentialsWithExtras);

			expect((holder as Record<string, unknown>).customField).toBe('custom-value');
			expect((holder as Record<string, unknown>).anotherField).toBe(42);
		});

		it('should not include standard fields as custom properties', () => {
			const holder = new CredentialHolder(validCredentials);
			const keys = Object.keys(holder);

			// Standard fields should exist as own properties
			expect(keys).toContain('endpoint');
			expect(keys).toContain('appKey');
			expect(keys).toContain('appSecret');
			expect(keys).toContain('consumerKey');
		});
	});

	describe('sign()', () => {
		beforeEach(() => {
			jest.useFakeTimers();
			jest.setSystemTime(1704067200000); // 2024-01-01T00:00:00Z
		});

		afterEach(() => {
			jest.useRealTimers();
		});

		describe('GET request signing', () => {
			it('should add correct authentication headers for GET request', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
				});

				expect(result.headers).toBeDefined();
				expect(result.headers!['X-Ovh-Application']).toBe('test-app-key');
				expect(result.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
				expect(result.headers!['X-Ovh-Timestamp']).toBe('1704067200');
				expect(result.headers!['Content-Type']).toBe('application/json');
			});

			it('should generate correct SHA1 signature for GET request', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
				});

				// Expected signature fields: appSecret + consumerKey + method + url + body + timestamp
				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'GET',
					'https://eu.api.ovh.com/1.0/vps',
					'',
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});

			it('should include query parameters in the URL for signature', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
					qs: { orderBy: 'serviceId', status: 'active' },
				});

				// The signature should include query params in the URL
				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'GET',
					'https://eu.api.ovh.com/1.0/vps?orderBy=serviceId&status=active',
					'',
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});

			it('should set baseURL correctly', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
				});

				expect(result.baseURL).toBe('https://eu.api.ovh.com/1.0');
			});
		});

		describe('POST request signing', () => {
			it('should add correct authentication headers for POST request', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'POST',
					url: '/vps',
					body: { name: 'test-vps' },
				});

				expect(result.headers!['X-Ovh-Application']).toBe('test-app-key');
				expect(result.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
			});

			it('should include JSON-stringified body in signature', () => {
				const holder = new CredentialHolder(validCredentials);
				const body = { name: 'test-vps', description: 'Test' };
				const result = holder.sign({
					method: 'POST',
					url: '/vps',
					body,
				});

				const bodyJson = JSON.stringify(body);
				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'POST',
					'https://eu.api.ovh.com/1.0/vps',
					bodyJson,
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});

			it('should handle POST with query parameters', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'POST',
					url: '/vps',
					body: { name: 'test' },
					qs: { dryRun: 'true' },
				});

				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'POST',
					'https://eu.api.ovh.com/1.0/vps?dryRun=true',
					JSON.stringify({ name: 'test' }),
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});
		});

		describe('PUT request signing', () => {
			it('should add correct authentication headers for PUT request', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'PUT',
					url: '/vps/vps123',
					body: { displayName: 'updated' },
				});

				expect(result.headers!['X-Ovh-Application']).toBe('test-app-key');
				expect(result.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
			});

			it('should include JSON-stringified body in PUT signature', () => {
				const holder = new CredentialHolder(validCredentials);
				const body = { displayName: 'updated-name' };
				const result = holder.sign({
					method: 'PUT',
					url: '/vps/vps123',
					body,
				});

				const bodyJson = JSON.stringify(body);
				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'PUT',
					'https://eu.api.ovh.com/1.0/vps/vps123',
					bodyJson,
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});
		});

		describe('DELETE request signing', () => {
			it('should add correct authentication headers for DELETE request', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'DELETE',
					url: '/vps/vps123/snapshot',
				});

				expect(result.headers!['X-Ovh-Application']).toBe('test-app-key');
				expect(result.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
			});

			it('should generate correct signature for DELETE with query params', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'DELETE',
					url: '/vps/vps123/snapshot',
					qs: { force: 'true' },
				});

				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'DELETE',
					'https://eu.api.ovh.com/1.0/vps/vps123/snapshot?force=true',
					'',
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});
		});

		describe('different endpoints', () => {
			const endpoints = [
				{ name: 'Europe', value: 'eu.api.ovh.com/1.0' },
				{ name: 'Canada', value: 'ca.api.ovh.com/1.0' },
				{ name: 'USA', value: 'api.us.ovhcloud.com/1.0' },
				{ name: 'SoYouStart EU', value: 'eu.api.soyoustart.com/1.0' },
				{ name: 'Kimsufi EU', value: 'eu.api.kimsufi.com/1.0' },
			];

			it.each(endpoints)('should use correct baseURL for $name endpoint', ({ value }) => {
				const holder = new CredentialHolder({ ...validCredentials, endpoint: value });
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
				});

				expect(result.baseURL).toBe(`https://${value}`);
			});

			it.each(endpoints)('should include correct endpoint in signature for $name', ({ value }) => {
				const holder = new CredentialHolder({ ...validCredentials, endpoint: value });
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
				});

				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'GET',
					`https://${value}/vps`,
					'',
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});
		});

		describe('edge cases', () => {
			it('should default to GET method when method is not specified', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					url: '/vps',
				} as IHttpRequestOptions);

				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'GET',
					'https://eu.api.ovh.com/1.0/vps',
					'',
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});

			it('should handle empty query parameters object', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
					qs: {},
				});

				// URL should not have trailing '?' when qs is empty
				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'GET',
					'https://eu.api.ovh.com/1.0/vps',
					'',
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});

			it('should handle string body (already JSON stringified)', () => {
				const holder = new CredentialHolder(validCredentials);
				const bodyString = '{"name":"test-vps"}';
				const result = holder.sign({
					method: 'POST',
					url: '/vps',
					body: bodyString,
				});

				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'POST',
					'https://eu.api.ovh.com/1.0/vps',
					bodyString,
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});

			it('should handle null body as JSON "null" string (typeof null === "object")', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'POST',
					url: '/vps',
					body: null,
				} as unknown as IHttpRequestOptions);

				// In JavaScript, typeof null === 'object', so JSON.stringify(null) === 'null'
				const bodyJson = JSON.stringify(null);
				const expectedFields = [
					'test-app-secret',
					'test-consumer-key',
					'POST',
					'https://eu.api.ovh.com/1.0/vps',
					bodyJson,
					1704067200,
				];
				const expectedSignature =
					'$1$' + createHash('sha1').update(expectedFields.join('+')).digest('hex');

				expect(result.headers!['X-Ovh-Signature']).toBe(expectedSignature);
			});

			it('should preserve existing headers and add auth headers', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
					headers: { 'X-Custom-Header': 'custom-value' },
				});

				expect(result.headers!['X-Custom-Header']).toBe('custom-value');
				expect(result.headers!['X-Ovh-Application']).toBe('test-app-key');
			});

			it('should return a new object, not mutate the original', () => {
				const holder = new CredentialHolder(validCredentials);
				const original: IHttpRequestOptions = {
					method: 'GET',
					url: '/vps',
				};
				const result = holder.sign(original);

				expect(result).not.toBe(original);
				expect(original.baseURL).toBeUndefined();
			});

			it('should generate different signatures for different timestamps', () => {
				const holder = new CredentialHolder(validCredentials);

				const result1 = holder.sign({ method: 'GET', url: '/vps' });

				// Advance time by 1 second
				jest.advanceTimersByTime(1000);

				const result2 = holder.sign({ method: 'GET', url: '/vps' });

				expect(result1.headers!['X-Ovh-Signature']).not.toBe(result2.headers!['X-Ovh-Signature']);
				expect(result1.headers!['X-Ovh-Timestamp']).not.toBe(result2.headers!['X-Ovh-Timestamp']);
			});

			it('should generate different signatures for different HTTP methods', () => {
				const holder = new CredentialHolder(validCredentials);

				const getResult = holder.sign({ method: 'GET', url: '/vps' });
				const postResult = holder.sign({ method: 'POST', url: '/vps' });

				expect(getResult.headers!['X-Ovh-Signature']).not.toBe(
					postResult.headers!['X-Ovh-Signature'],
				);
			});

			it('should generate different signatures for different URLs', () => {
				const holder = new CredentialHolder(validCredentials);

				const result1 = holder.sign({ method: 'GET', url: '/vps' });
				const result2 = holder.sign({ method: 'GET', url: '/domain' });

				expect(result1.headers!['X-Ovh-Signature']).not.toBe(result2.headers!['X-Ovh-Signature']);
			});

			it('should generate different signatures for different bodies', () => {
				const holder = new CredentialHolder(validCredentials);

				const result1 = holder.sign({
					method: 'POST',
					url: '/vps',
					body: { name: 'vps1' },
				});
				const result2 = holder.sign({
					method: 'POST',
					url: '/vps',
					body: { name: 'vps2' },
				});

				expect(result1.headers!['X-Ovh-Signature']).not.toBe(result2.headers!['X-Ovh-Signature']);
			});
		});

		describe('signature format', () => {
			it('should prefix signature with $1$', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
				});

				expect(result.headers!['X-Ovh-Signature']).toMatch(/^\$1\$[a-f0-9]{40}$/);
			});

			it('should produce a 40-character hex hash (SHA1)', () => {
				const holder = new CredentialHolder(validCredentials);
				const result = holder.sign({
					method: 'GET',
					url: '/vps',
				});

				const signature = result.headers!['X-Ovh-Signature'] as string;
				const hash = signature.replace('$1$', '');

				expect(hash).toHaveLength(40);
				expect(hash).toMatch(/^[a-f0-9]+$/);
			});
		});
	});
});
