/**
 * Tests for ApiClient pagination (now fully sequential).
 */

import type { IExecuteFunctions } from 'n8n-workflow';
import { ApiClient } from '../shared/transport/ApiClient';

function generatePageItems(prefix: string, count: number): string[] {
	return Array.from({ length: count }, (_, i) => `${prefix}-${String(i + 1).padStart(3, '0')}`);
}

describe('ApiClient pagination', () => {
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

	it('should fetch pages sequentially with identical results', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);

		let callCount = 0;

		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			
			
			callCount++;
			const currentCall = callCount;
			await new Promise((resolve) => setTimeout(resolve, 50));
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
		
	});

	it('should fetch pages sequentially', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);

		let callCount = 0;

		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			
			
			callCount++;
			const currentCall = callCount;
			await new Promise((resolve) => setTimeout(resolve, 50));
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
		
	});

	it('fetches pages sequentially', async () => {
		const pageA = generatePageItems('a', 100);
		const pageB = generatePageItems('b', 100);
		const pageC = generatePageItems('c', 50);

		let callCount = 0;

		const mockHttpRequest = jest.fn().mockImplementation(async () => {
			
			
			callCount++;
			const currentCall = callCount;
			await new Promise((resolve) => setTimeout(resolve, 50));
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
		
	});

	it('fetches resources sequentially', async () => {
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
		expect(mockHttpRequest).toHaveBeenCalledTimes(5);
	});
});
