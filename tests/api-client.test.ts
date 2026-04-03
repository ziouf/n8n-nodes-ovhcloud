/**
 * Tests for the ApiClient wrapper (ApiClientImpl.ts).
 *
 * Verifies that the ApiClient correctly delegates HTTP calls
 * to the underlying n8n httpRequest helper with proper method
 * and body handling.
 */

import type { IExecuteFunctions, IHttpRequestOptions } from 'n8n-workflow';
import { ApiClient } from '../nodes/OvhCloud/transport/ApiClientImpl';

// Module-level mock so we can access .mock directly
const mockHttpRequest = jest.fn().mockResolvedValue({ data: 'mocked-response' });
const mockGetCredentials = jest.fn().mockResolvedValue({
	endpoint: 'eu.api.ovh.com/1.0',
	appKey: 'test-app-key',
	appSecret: 'test-app-secret',
	consumerKey: 'test-consumer-key',
});

function createMockExecuteFunctions(): jest.Mocked<IExecuteFunctions> {
	return {
		getCredentials: mockGetCredentials,
		helpers: {
			httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

describe('ApiClient', () => {
	let mockCtx: jest.Mocked<IExecuteFunctions>;
	let client: ApiClient;

	beforeEach(() => {
		jest.clearAllMocks();
		mockGetCredentials.mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		mockHttpRequest.mockResolvedValue({ data: 'mocked-response' });
		mockCtx = createMockExecuteFunctions();
		client = new ApiClient(mockCtx);
		jest.useFakeTimers();
		jest.setSystemTime(1704067200000); // 2024-01-01T00:00:00Z as milliseconds
	});

	afterEach(() => {
		jest.useRealTimers();
	});

	describe('httpGet', () => {
		it('should call the underlying request with GET method', async () => {
			await client.httpGet('/vps');

			expect(mockHttpRequest).toHaveBeenCalledTimes(1);
			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('GET');
		});

		it('should include query parameters in the signed request', async () => {
			await client.httpGet('/vps', { orderBy: 'serviceId' });

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('GET');
		});

		it('should return the response data', async () => {
			const result = await client.httpGet('/vps');
			expect(result).toEqual({ data: 'mocked-response' });
		});
	});

	describe('httpPost', () => {
		it('should call the underlying request with POST method', async () => {
			await client.httpPost('/vps', { name: 'test-vps' });

			expect(mockHttpRequest).toHaveBeenCalledTimes(1);
			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('POST');
		});

		it('should include body in the signed request', async () => {
			const body = { name: 'test-vps', description: 'Test VPS' };
			await client.httpPost('/vps', body);

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('POST');
		});

		it('should return the response data', async () => {
			const result = await client.httpPost('/vps', { name: 'test-vps' });
			expect(result).toEqual({ data: 'mocked-response' });
		});
	});

	describe('httpPut', () => {
		it('should call the underlying request with PUT method', async () => {
			await client.httpPut('/vps/vps123', { displayName: 'updated-name' });

			expect(mockHttpRequest).toHaveBeenCalledTimes(1);
			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('PUT');
		});

		it('should include body in the signed request', async () => {
			const body = { displayName: 'updated-name' };
			await client.httpPut('/vps/vps123', body);

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('PUT');
		});

		it('should return the response data', async () => {
			const result = await client.httpPut('/vps/vps123', { displayName: 'updated-name' });
			expect(result).toEqual({ data: 'mocked-response' });
		});
	});

	describe('httpDelete', () => {
		it('should call the underlying request with DELETE method', async () => {
			await client.httpDelete('/vps/vps123');

			expect(mockHttpRequest).toHaveBeenCalledTimes(1);
			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('DELETE');
		});

		it('should include query parameters in the signed request', async () => {
			await client.httpDelete('/vps/vps123', { force: 'true' });

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('DELETE');
		});

		it('should return the response data', async () => {
			const result = await client.httpDelete('/vps/vps123');
			expect(result).toEqual({ data: 'mocked-response' });
		});
	});

	describe('instantiation', () => {
		it('should be instantiated with a mock context', () => {
			expect(client).toBeInstanceOf(ApiClient);
			expect(client.fn).toBe(mockCtx);
		});
	});

	describe('error handling', () => {
		it('should propagate httpRequest errors from httpGet', async () => {
			mockHttpRequest.mockRejectedValue(new Error('Network error'));

			await expect(client.httpGet('/vps')).rejects.toThrow('Network error');
		});

		it('should propagate httpRequest errors from httpPost', async () => {
			mockHttpRequest.mockRejectedValue(new Error('Bad request'));

			await expect(client.httpPost('/vps', { name: 'test' })).rejects.toThrow('Bad request');
		});

		it('should propagate httpRequest errors from httpPut', async () => {
			mockHttpRequest.mockRejectedValue(new Error('Conflict'));

			await expect(client.httpPut('/vps/vps123', { name: 'test' })).rejects.toThrow('Conflict');
		});

		it('should propagate httpRequest errors from httpDelete', async () => {
			mockHttpRequest.mockRejectedValue(new Error('Not found'));

			await expect(client.httpDelete('/vps/vps123')).rejects.toThrow('Not found');
		});

		it('should propagate credential retrieval errors', async () => {
			mockGetCredentials.mockRejectedValue(new Error('Credentials not found'));

			await expect(client.httpGet('/vps')).rejects.toThrow('Credentials not found');
		});
	});

	describe('request signing verification', () => {
		it('should include OVH auth headers in httpGet request', async () => {
			await client.httpGet('/vps');

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.headers).toBeDefined();
			expect(callArgs.headers!['X-Ovh-Application']).toBe('test-app-key');
			expect(callArgs.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
			expect(callArgs.headers!['X-Ovh-Signature']).toMatch(/^\$1\$/);
			expect(callArgs.headers!['X-Ovh-Timestamp']).toBeDefined();
		});

		it('should include OVH auth headers in httpPost request', async () => {
			await client.httpPost('/vps', { name: 'test' });

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.headers!['X-Ovh-Application']).toBe('test-app-key');
			expect(callArgs.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
			expect(callArgs.headers!['X-Ovh-Signature']).toMatch(/^\$1\$/);
		});

		it('should include OVH auth headers in httpPut request', async () => {
			await client.httpPut('/vps/vps123', { name: 'test' });

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.headers!['X-Ovh-Application']).toBe('test-app-key');
			expect(callArgs.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
		});

		it('should include OVH auth headers in httpDelete request', async () => {
			await client.httpDelete('/vps/vps123');

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.headers!['X-Ovh-Application']).toBe('test-app-key');
			expect(callArgs.headers!['X-Ovh-Consumer']).toBe('test-consumer-key');
		});

		it('should set baseURL for all requests', async () => {
			await client.httpGet('/vps');

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.baseURL).toBe('https://eu.api.ovh.com/1.0');
		});
	});

	describe('optional parameters', () => {
		it('should pass additional options to httpGet', async () => {
			const options: Partial<IHttpRequestOptions> = { timeout: 5000 };
			await client.httpGet('/vps', undefined, options as IHttpRequestOptions);

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.timeout).toBe(5000);
		});

		it('should pass additional options to httpPost', async () => {
			const options: Partial<IHttpRequestOptions> = { timeout: 10000 };
			await client.httpPost('/vps', { name: 'test' }, undefined, options as IHttpRequestOptions);

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.timeout).toBe(10000);
		});

		it('should pass query parameters to httpPost', async () => {
			await client.httpPost('/vps', { name: 'test' }, { dryRun: 'true' });

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('POST');
		});

		it('should pass query parameters to httpPut', async () => {
			await client.httpPut('/vps/vps123', { name: 'test' }, { force: 'true' });

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.method).toBe('PUT');
		});

		it('should pass additional options to httpDelete', async () => {
			const options: Partial<IHttpRequestOptions> = { timeout: 3000 };
			await client.httpDelete('/vps/vps123', undefined, options as IHttpRequestOptions);

			const callArgs = mockHttpRequest.mock.calls[0][0] as IHttpRequestOptions;
			expect(callArgs.timeout).toBe(3000);
		});
	});
});
