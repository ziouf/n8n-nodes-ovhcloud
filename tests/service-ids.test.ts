/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for getServiceIds — dynamic list search for OVH service IDs.
 *
 * Verifies that the method:
 * - Reads svcType from node parameters (with extractValue)
 * - Calls paginate with the correct routes query param
 * - Maps and filters results correctly
 */

import { getServiceIds } from '../shared/methods/getServiceIds.method';
import { createMockApiClient } from './helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

describe('getServiceIds', () => {
	let mockLoadOptionsFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockLoadOptionsFunctions = {
			getNodeParameter: jest.fn(),
		};
	});

	// Test 1: Basic usage — svcType as plain string, no filter
	it('should call paginate with routes query param and map results', async () => {
		mockClient.paginate.mockResolvedValue(['vps123', 'vps456']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn(
			(key: string, _index: number, opts?: Record<string, unknown>) => {
				if (key === 'svcType') {
					return opts?.extractValue ? 'vps123' : '/vps';
				}
				return '';
			},
		);

		const result = await getServiceIds.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/services', {
			maxItems: 1000,
			query: { routes: 'vps123' },
		});
		expect(result).toEqual({
			results: [
				{ name: 'vps123', value: 'vps123' },
				{ name: 'vps456', value: 'vps456' },
			],
		});
	});

	// Test 2: With client-side filter
	it('should filter results when filter text is provided', async () => {
		mockClient.paginate.mockResolvedValue(['vps123', 'vps456', 'host-789']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn(
			(key: string, _index: number, opts?: Record<string, unknown>) => {
				if (key === 'svcType') {
					return opts?.extractValue ? 'vps' : '/vps';
				}
				if (key === 'filter') {
					return 'vps123';
				}
				return '';
			},
		);

		const result = await getServiceIds.call(mockLoadOptionsFunctions);

		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'vps123', value: 'vps123' });
	});

	// Test 3: svcType as { value: 'x' } object (extractValue form)
	it('should handle svcType as object with value property', async () => {
		mockClient.paginate.mockResolvedValue(['host-abc']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn(
			(key: string, _index: number, opts?: Record<string, unknown>) => {
				if (key === 'svcType') {
					return opts?.extractValue ? 'hosting/web' : '/hosting/web';
				}
				return '';
			},
		);

		await getServiceIds.call(mockLoadOptionsFunctions);

		expect(mockClient.paginate).toHaveBeenCalledWith('/services', {
			maxItems: 1000,
			query: { routes: 'hosting/web' },
		});
	});

	// Test 4: Empty results
	it('should return empty results when paginate returns empty array', async () => {
		mockClient.paginate.mockResolvedValue([]);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn(
			(key: string, _index: number, opts?: Record<string, unknown>) => {
				if (key === 'svcType') {
					return opts?.extractValue ? '/vps' : '/vps';
				}
				return '';
			},
		);

		const result = await getServiceIds.call(mockLoadOptionsFunctions);

		expect(result).toEqual({ results: [] });
	});

	// Test 5: Case-insensitive filter
	it('should perform case-insensitive filtering', async () => {
		mockClient.paginate.mockResolvedValue(['VPS-123']);
		mockLoadOptionsFunctions.getNodeParameter = jest.fn(
			(key: string, _index: number, opts?: Record<string, unknown>) => {
				if (key === 'svcType') {
					return opts?.extractValue ? '/vps' : '/vps';
				}
				if (key === 'filter') {
					return 'vps-123';
				}
				return '';
			},
		);

		const result = await getServiceIds.call(mockLoadOptionsFunctions);

		expect(result.results).toHaveLength(1);
		expect(result.results[0]).toEqual({ name: 'VPS-123', value: 'VPS-123' });
	});
});
