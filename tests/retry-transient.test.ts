/**
 * Tests for transient error detection and retry behavior in ApiClient.
 *
 * Verifies that:
 * - httpGet retries automatically on transient errors (5xx, 429)
 * - httpGet does NOT retry on non-transient errors (4xx, unknown)
 * - httpPost does NOT retry by default (safety for destructive operations)
 * - Jitter is applied to retry delays
 * - Rate limit retry-after header is respected
 */

import type { IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../shared/transport/ApiClientImpl';

function createApiError(message: string, status: number, response?: unknown) {
	return Object.assign(new Error(message), { code: status, httpCode: String(status), response });
}

function createMockClient(response: unknown) {
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

describe('Transient error retry', () => {
	beforeEach(() => {
		jest.useFakeTimers();
	});

	afterEach(() => {
		jest.useRealTimers();
		jest.restoreAllMocks();
	});

	it('httpGet retries on 500 error then succeeds', async () => {
		const { client, mockHttpRequest } = createMockClient({ data: 'ok' });
		mockHttpRequest.mockRejectedValueOnce(createApiError('Server error', 500));

		const promise = client.httpGet('/vps');
		await jest.advanceTimersByTimeAsync(5000);
		const result = await promise;

		expect(mockHttpRequest).toHaveBeenCalledTimes(2);
		expect(result).toEqual({ data: 'ok' });
	});

	it('httpGet does NOT retry on 400 error', async () => {
		const { client, mockHttpRequest } = createMockClient({});
		mockHttpRequest.mockRejectedValue(
			Object.assign(new Error('Bad request'), { code: 400, httpCode: '400' }),
		);

		await expect(client.httpGet('/vps')).rejects.toThrow('Bad request');
		expect(mockHttpRequest).toHaveBeenCalledTimes(1);
	});

	it('httpGet does NOT retry on unknown error without code', async () => {
		const { client, mockHttpRequest } = createMockClient({});
		mockHttpRequest.mockRejectedValue(new Error('Unknown error'));

		await expect(client.httpGet('/vps')).rejects.toThrow('Unknown error');
		expect(mockHttpRequest).toHaveBeenCalledTimes(1);
	});

	it('httpPost does NOT retry by default on 500 (safety)', async () => {
		const { client, mockHttpRequest } = createMockClient({});
		mockHttpRequest.mockRejectedValue(createApiError('Server error', 500));

		await expect(client.httpPost('/vps', { name: 'test' })).rejects.toThrow('Server error');
		expect(mockHttpRequest).toHaveBeenCalledTimes(1);
	});

	it('applies jitter to retry delay', async () => {
		const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5);
		const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
		const { client, mockHttpRequest } = createMockClient({ data: 'ok' });

		mockHttpRequest.mockRejectedValueOnce(createApiError('Server error', 500));

		const promise = client.httpGet('/vps');
		await jest.advanceTimersByTimeAsync(5000);
		await promise;

		expect(mockHttpRequest).toHaveBeenCalledTimes(2);
		// delayMs after backoff = 1000 * 2 = 2000
		// jitteredDelay = 2000 * (0.5 + 0.5 * 0.5) = 2000 * 0.75 = 1500
		const retryCall = setTimeoutSpy.mock.calls.find(
			(call) => typeof call[1] === 'number' && call[1] > 0,
		);
		expect(retryCall).toBeDefined();
		expect(retryCall![1]).toBeGreaterThan(1400);
		expect(retryCall![1]).toBeLessThan(1600);

		randomSpy.mockRestore();
		setTimeoutSpy.mockRestore();
	});

	it('respects retry-after header on 429', async () => {
		const randomSpy = jest.spyOn(Math, 'random').mockReturnValue(0.9);
		const setTimeoutSpy = jest.spyOn(global, 'setTimeout');
		const { client, mockHttpRequest } = createMockClient({ data: 'ok' });

		mockHttpRequest.mockRejectedValueOnce(
			createApiError('Rate limited', 429, { headers: { 'retry-after': '1' } } as Record<
				string,
				unknown
			>),
		);

		const promise = client.httpGet('/vps');
		await jest.advanceTimersByTimeAsync(5000);
		await promise;

		expect(mockHttpRequest).toHaveBeenCalledTimes(2);
		// retry-after = 1s → delayMs = 1000
		// jitteredDelay = 1000 * (0.5 + 0.9 * 0.5) = 1000 * 0.95 = 950
		const retryCall = setTimeoutSpy.mock.calls.find(
			(call) => typeof call[1] === 'number' && call[1] > 0,
		);
		expect(retryCall).toBeDefined();
		expect(retryCall![1]).toBeGreaterThanOrEqual(950);
		expect(retryCall![1]).toBeLessThanOrEqual(1050);

		randomSpy.mockRestore();
		setTimeoutSpy.mockRestore();
	});
});
