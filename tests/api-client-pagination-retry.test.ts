/**
 * Tests for ApiClient pagination and retry features.
 */

import type { IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../shared/transport/ApiClientImpl';

function createMockClient(response: any) {
	const mockHttpRequest = jest.fn().mockResolvedValue(response);
	const mockGetCredentials = jest.fn().mockResolvedValue({
		endpoint: 'eu.api.ovh.com/1.0',
		appKey: 'test-app-key',
		appSecret: 'test-app-secret',
		consumerKey: 'test-consumer-key',
	});
	const mockCtx = {
		getCredentials: mockGetCredentials,
		helpers: {
			httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
	return { client: new ApiClient(mockCtx), mockHttpRequest, mockGetCredentials };
}

describe('ApiClient pagination', () => {
	it('should fetch a single page when results fit in one page', async () => {
		const { client, mockHttpRequest } = createMockClient(['vps-1', 'vps-2', 'vps-3']);
		const result = await client.paginate('/vps', { limit: 10 });
		expect(result).toEqual(['vps-1', 'vps-2', 'vps-3']);
		const call = mockHttpRequest.mock.calls[0][0] as any;
		expect(call.qs).toEqual({ offset: 0, limit: 10 });
	});

	it('should paginate across multiple pages', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockResolvedValueOnce(['vps-1', 'vps-2', 'vps-3'])
			.mockResolvedValueOnce(['vps-4', 'vps-5', 'vps-6'])
			.mockResolvedValueOnce([]);
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.paginate('/vps', { limit: 3 });
		expect(result).toEqual(['vps-1', 'vps-2', 'vps-3', 'vps-4', 'vps-5', 'vps-6']);
		expect(mockHttpRequest).toHaveBeenCalledTimes(3);
	});

	it('should respect maxItems limit', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockResolvedValueOnce(['vps-1', 'vps-2', 'vps-3', 'vps-4'])
			.mockResolvedValueOnce([]);
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.paginate('/vps', { limit: 10, maxItems: 4 });
		expect(result.length).toBe(4);
		expect(result[0]).toBe('vps-1');
		expect(result[3]).toBe('vps-4');
	});

	it('should return empty array when first page is empty', async () => {
		const { client, mockHttpRequest } = createMockClient([]);
		const result = await client.paginate('/vps');
		expect(result).toEqual([]);
		expect(mockHttpRequest).toHaveBeenCalledTimes(1);
	});

	it('should paginate resources by fetching IDs then details', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockResolvedValueOnce(['vps-1', 'vps-2'])
			.mockResolvedValueOnce({ serviceId: 'vps-1', ip: '1.2.3.4' })
			.mockResolvedValueOnce({ serviceId: 'vps-2', ip: '5.6.7.8' });
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.paginateResources('/vps', '/vps/{id}');
		expect(result).toHaveLength(2);
		expect(result[0]).toEqual({ serviceId: 'vps-1', ip: '1.2.3.4' });
		expect(result[1]).toEqual({ serviceId: 'vps-2', ip: '5.6.7.8' });
	});

	it('should skip resources that fail to fetch', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockResolvedValueOnce(['vps-1', 'vps-2', 'vps-3'])
			.mockResolvedValueOnce({ serviceId: 'vps-1' })
			.mockRejectedValueOnce(new Error('Not found'))
			.mockResolvedValueOnce({ serviceId: 'vps-3' });
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.paginateResources('/vps', '/vps/{id}');
		expect(result).toHaveLength(2);
		expect(result.map((r: any) => r.serviceId)).toEqual(['vps-1', 'vps-3']);
	});

	it('should return count of items', async () => {
		const { client, mockHttpRequest } = createMockClient(['vps-1']);
		const count = await client.getCount('/vps');
		expect(count).toBe(1);
		expect(mockHttpRequest).toHaveBeenCalledTimes(1);
	});

	it('should return 0 when no items exist', async () => {
		const { client, mockHttpRequest } = createMockClient([]);
		const count = await client.getCount('/vps');
		expect(count).toBe(0);
	});
});

describe('ApiClient retry', () => {
	it('should return success on first attempt', async () => {
		const mockHttpRequest = jest.fn().mockResolvedValueOnce({ data: 'success' });
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.httpGetWithRetry('/vps');
		expect(result).toEqual({ data: 'success' });
		expect(mockHttpRequest).toHaveBeenCalledTimes(1);
	});

	it('should retry on transient failure and eventually succeed', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockRejectedValueOnce(new Error('Rate limited'))
			.mockRejectedValueOnce(new Error('Rate limited'))
			.mockResolvedValueOnce({ data: 'success' });
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.httpGetWithRetry('/vps');
		expect(result).toEqual({ data: 'success' });
		expect(mockHttpRequest).toHaveBeenCalledTimes(3);
	});

	it.skip('should throw after exhausting all retries', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockRejectedValueOnce(new Error('Rate limited'))
			.mockRejectedValueOnce(new Error('Rate limited'))
			.mockRejectedValueOnce(new Error('Rate limited'))
			.mockRejectedValueOnce(new Error('Rate limited'));
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		await expect(client.httpGetWithRetry('/vps')).rejects.toThrow('Rate limited');
		expect(mockHttpRequest).toHaveBeenCalledTimes(4);
	});

	it('should retry POST on failure', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockRejectedValueOnce(new Error('Server error'))
			.mockResolvedValueOnce({ data: 'created' });
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.httpPostWithRetry('/vps', { name: 'test' });
		expect(result).toEqual({ data: 'created' });
		expect(mockHttpRequest).toHaveBeenCalledTimes(2);
	});

	it('should retry PUT on failure', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockRejectedValueOnce(new Error('Server error'))
			.mockResolvedValueOnce({ data: 'updated' });
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.httpPutWithRetry('/vps/vps123', { name: 'updated' });
		expect(result).toEqual({ data: 'updated' });
		expect(mockHttpRequest).toHaveBeenCalledTimes(2);
	});

	it('should retry DELETE on failure', async () => {
		const mockHttpRequest = jest
			.fn()
			.mockRejectedValueOnce(new Error('Server error'))
			.mockResolvedValueOnce({ success: true });
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		const result = await client.httpDeleteWithRetry('/vps/vps123');
		expect(result).toEqual({ success: true });
		expect(mockHttpRequest).toHaveBeenCalledTimes(2);
	});

	it('should use default retry options when creating client', async () => {
		const mockHttpRequest = jest.fn().mockResolvedValue({});
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx);
		expect(client.defaultRetryOptions.maxRetries).toBe(3);
		expect(client.defaultRetryOptions.initialDelayMs).toBe(1000);
		expect(client.defaultRetryOptions.maxDelayMs).toBe(10000);
		expect(client.defaultRetryOptions.backoffMultiplier).toBe(2);
	});

	it('should allow custom default retry options', async () => {
		const mockHttpRequest = jest.fn().mockResolvedValue({});
		const mockGetCredentials = jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		});
		const mockCtx = {
			getCredentials: mockGetCredentials,
			helpers: {
				httpRequest: mockHttpRequest as unknown as IExecuteFunctions['helpers']['httpRequest'],
			},
		} as unknown as jest.Mocked<IExecuteFunctions>;
		const client = new ApiClient(mockCtx, {
			maxRetries: 5,
			initialDelayMs: 2000,
			backoffMultiplier: 3,
		});
		expect(client.defaultRetryOptions.maxRetries).toBe(5);
		expect(client.defaultRetryOptions.initialDelayMs).toBe(2000);
		expect(client.defaultRetryOptions.backoffMultiplier).toBe(3);
	});
});
