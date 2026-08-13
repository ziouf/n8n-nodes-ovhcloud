/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for listDeposits operation — filter definitions, description, and execute logic.
 *
 * Verifies that:
 * - DEPOSIT_FILTERS contains the expected 3 definitions
 * - descriptionListDeposits returns a fixedCollection with dateRange and ids groups
 * - executeListDeposits calls /me/deposit with/without query params correctly
 * - Multi-item index resolution uses getNodeParameter('filters', itemIndex)
 * - Default values (orderId = 0) are skipped
 */

import { createMockApiClient } from './helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

import {
	executeListDeposits,
	descriptionListDeposits,
	DEPOSIT_FILTERS,
} from '../nodes/OvhCloudMe/operations/financial.operation';

describe('listDeposits', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	// ─── DEPOSIT_FILTERS ───────────────────────────────────────────────────

	describe('DEPOSIT_FILTERS', () => {
		it('should have exactly 3 definitions', () => {
			expect(DEPOSIT_FILTERS).toHaveLength(3);
		});

		it('should define date.from, date.to, and orderId query params', () => {
			const queryParams = DEPOSIT_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('date.from');
			expect(queryParams).toContain('date.to');
			expect(queryParams).toContain('orderId');
		});

		it('should group from/to under dateRange and orderId under ids', () => {
			const groups = DEPOSIT_FILTERS.map((f) => f.group);
			expect(groups).toContain('dateRange');
			expect(groups).toContain('ids');
		});
	});

	// ─── descriptionListDeposits ───────────────────────────────────────────

	describe('descriptionListDeposits', () => {
		it('should return a fixedCollection property named "filters"', () => {
			const props = descriptionListDeposits({});
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('filters');
			expect(props[0].type).toBe('fixedCollection');
		});

		it('should contain dateRange and ids groups in the fixedCollection options', () => {
			const props = descriptionListDeposits({});
			const collection = props[0] as any;
			const optionNames = collection.options.map((o: any) => o.name);
			expect(optionNames).toContain('dateRange');
			expect(optionNames).toContain('ids');
		});
	});

	// ─── executeListDeposits — no filters (non-regression) ────────────────

	describe('executeListDeposits — no filters', () => {
		it('should call /me/deposit with undefined qs and then fetch each deposit detail', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/deposit') return ['dep1'];
				if (url === '/me/deposit/dep1') return { id: 'dep1' };
				return {};
			});

			const result = await executeListDeposits.call(mockExecuteFunctions);

			// First call should be /me/deposit with undefined qs
			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/deposit', undefined);
			// Second call should be /me/deposit/dep1
			expect(mockClient.httpGet).toHaveBeenNthCalledWith(2, '/me/deposit/dep1');
			expect(result).toEqual([{ id: 'dep1' }]);
		});

		it('should handle empty deposit list', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockResolvedValue([]);

			const result = await executeListDeposits.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/deposit', undefined);
			expect(result).toEqual([]);
		});
	});

	// ─── executeListDeposits — with date filter ────────────────────────────

	describe('executeListDeposits — with date filter', () => {
		it('should pass date.from to the API when set', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { dateRange: { from: '2026-01-01T00:00:00Z' } };
				}
				return {};
			});
			mockClient.httpGet.mockImplementation(async (url: string, qs?: any) => {
				if (url === '/me/deposit') {
					expect(qs).toEqual({ 'date.from': '2026-01-01T00:00:00Z' });
					return ['dep1'];
				}
				if (url === '/me/deposit/dep1') return { id: 'dep1' };
				return {};
			});

			await executeListDeposits.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/deposit', {
				'date.from': '2026-01-01T00:00:00Z',
			});
		});
	});

	// ─── executeListDeposits — multi-item ──────────────────────────────────

	describe('executeListDeposits — multi-item', () => {
		it('should resolve filters using the provided itemIndex', async () => {
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/deposit') return ['dep1'];
				if (url === '/me/deposit/dep1') return { id: 'dep1' };
				return {};
			});

			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx?: number) => {
					if (key === 'filters') return { dateRange: { from: `item-${idx}` } };
					return {};
				});

			await executeListDeposits.call(mockExecuteFunctions, 2);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 2, {});
		});
	});

	// ─── executeListDeposits — skip defaults ───────────────────────────────

	describe('executeListDeposits — skip defaults', () => {
		it('should not include orderId when its value is the default (0)', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { ids: { orderId: 0 } };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListDeposits.call(mockExecuteFunctions);

			// The qs should be undefined because all filters are default/empty
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/deposit', undefined);
		});

		it('should include orderId when it is non-zero', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { ids: { orderId: 12345 } };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListDeposits.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/deposit', {
				orderId: 12345,
			});
		});
	});
});
