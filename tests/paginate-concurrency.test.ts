/**
 * Tests for ApiClient pagination concurrency (batch-parallel fetching).
 */

import type { IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../shared/transport/ApiClientImpl';

function generatePageItems(prefix: string, count: number): string[] {
	return Array.from({ length: count }, (_, i) => `${prefix}-${String(i + 1).padStart(3, '0')}`);
}

describe('ApiClient pagination concurrency', () => {
	jest.setTimeout(10000);

	it('should produce identical results as sequential fetching', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);
		const expected = [...pageA, ...pageB, ...pageC];

		let callCount = 0;
		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			callCount++;
			if (callCount === 1) return pageA;
			if (callCount === 2) return pageB;
			if (callCount === 3) return pageC;
			return [];
		});
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

		const result = await client.paginate('/items', { limit: 100, maxItems: 1000 });
		expect(result).toHaveLength(250);
		expect(result).toEqual(expected);
	});

	it('should respect maxItems and stop after fetching enough pages', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);

		let callCount = 0;
		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			callCount++;
			if (callCount === 1) return pageA;
			if (callCount === 2) return pageB;
			if (callCount === 3) return pageC;
			return [];
		});
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

		const result = await client.paginate('/items', { limit: 100, maxItems: 150 });
		expect(result).toHaveLength(150);
		expect(result[0]).toBe('a-001');
		expect(result[99]).toBe('a-100');
		expect(result[100]).toBe('b-001');
		expect(result[149]).toBe('b-050');
	});

	it('should use concurrency for parallel page fetching', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);

		let inFlight = 0;
		let maxInFlight = 0;
		let callCount = 0;

		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			inFlight++;
			maxInFlight = Math.max(maxInFlight, inFlight);
			callCount++;
			const currentCall = callCount;
			await new Promise((resolve) => setTimeout(resolve, 50));
			inFlight--;
			if (currentCall === 1) return pageA;
			if (currentCall === 2) return pageB;
			if (currentCall === 3) return pageC;
			return [];
		});

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

		const result = await client.paginate('/items', {
			limit: 100,
			maxItems: 1000,
			concurrency: 2,
		});

		expect(result).toHaveLength(250);
		expect(result[0]).toBe('a-001');
		expect(result[99]).toBe('a-100');
		expect(result[100]).toBe('b-001');
		expect(result[149]).toBe('b-050');
		expect(result[249]).toBe('c-050');
		expect(maxInFlight).toBeGreaterThanOrEqual(2);
	});

	it('should behave sequentially when concurrency is 1', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);

		let inFlight = 0;
		let maxInFlight = 0;
		let callCount = 0;

		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			inFlight++;
			maxInFlight = Math.max(maxInFlight, inFlight);
			callCount++;
			const currentCall = callCount;
			await new Promise((resolve) => setTimeout(resolve, 50));
			inFlight--;
			if (currentCall === 1) return pageA;
			if (currentCall === 2) return pageB;
			if (currentCall === 3) return pageC;
			return [];
		});

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

		const result = await client.paginate('/items', {
			limit: 100,
			maxItems: 1000,
			concurrency: 1,
		});

		expect(result).toHaveLength(250);
		expect(result[0]).toBe('a-001');
		expect(result[99]).toBe('a-100');
		expect(result[100]).toBe('b-001');
		expect(result[149]).toBe('b-050');
		expect(result[249]).toBe('c-050');
		expect(maxInFlight).toBe(1);
	});

	it('fetches pages in parallel with the DEFAULT concurrency', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);

		let inFlight = 0;
		let maxInFlight = 0;
		let callCount = 0;

		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			inFlight++;
			maxInFlight = Math.max(maxInFlight, inFlight);
			callCount++;
			const currentCall = callCount;
			await new Promise((resolve) => setTimeout(resolve, 50));
			inFlight--;
			if (currentCall === 1) return pageA;
			if (currentCall === 2) return pageB;
			if (currentCall === 3) return pageC;
			return [];
		});

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

		const result = await client.paginate('/items', {
			limit: 100,
			maxItems: 1000,
		});

		expect(result).toHaveLength(250);
		expect(result[0]).toBe('a-001');
		expect(result[99]).toBe('a-100');
		expect(result[100]).toBe('b-001');
		expect(result[149]).toBe('b-050');
		expect(result[249]).toBe('c-050');
		expect(maxInFlight).toBeGreaterThanOrEqual(2);
	});

	it('fetches resources in parallel with the DEFAULT concurrency', async () => {
		let callCount = 0;
		const mockHttpRequest = jest.fn().mockImplementation(() => {
			callCount++;
			if (callCount === 1) return ['vps-1', 'vps-2', 'vps-3', 'vps-4'];
			const idx = callCount - 1;
			return { serviceId: `vps-${idx}` };
		});
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

		const result = await client.paginateResources('/vps', '/vps/{id}', { maxItems: 4 });
		expect(result).toHaveLength(4);
		expect(result.map((r: Record<string, unknown>) => r.serviceId)).toEqual([
			'vps-1',
			'vps-2',
			'vps-3',
			'vps-4',
		]);
		// Default concurrency is 3, so at least 2 resources should be fetched in parallel
		expect(mockHttpRequest).toHaveBeenCalledTimes(5);
	});
});
