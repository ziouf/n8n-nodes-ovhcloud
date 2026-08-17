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
 *
 * Extended for Vague 1: listWithdrawals, listRefunds, listReverseBills, listCorrectiveInvoices
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
	executeListWithdrawals,
	descriptionListWithdrawals,
	WITHDRAWAL_FILTERS,
	executeListRefunds,
	descriptionListRefunds,
	REFUND_FILTERS,
	executeListReverseBills,
	descriptionListReverseBills,
	REVERSE_BILL_FILTERS,
	executeListCorrectiveInvoices,
	descriptionListCorrectiveInvoices,
	CORRECTIVE_INVOICE_FILTERS,
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
			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/deposit');
			// Second call should be /me/deposit/dep1
			expect(mockClient.httpGet).toHaveBeenNthCalledWith(2, '/me/deposit/dep1');
			expect(result).toEqual([{ id: 'dep1' }]);
		});

		it('should handle empty deposit list', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockResolvedValue([]);

			const result = await executeListDeposits.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/deposit');
			expect(result).toEqual([]);
		});
	});

	// ─── executeListDeposits — with date filter ────────────────────────────

	describe('executeListDeposits — with date filter', () => {
		it('should pass date.from to the API when set', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { dateRange: [{ from: '2026-01-01T00:00:00Z' }] };
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
					if (key === 'filters') return { dateRange: [{ from: `item-${idx}` }] };
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
					return { ids: [{ orderId: 0 }] };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListDeposits.call(mockExecuteFunctions);

			// The qs should be undefined because all filters are default/empty
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/deposit');
		});

		it('should include orderId when it is non-zero', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { ids: [{ orderId: 12345 }] };
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

// ================================================================
// listWithdrawals
// ================================================================

describe('listWithdrawals', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	describe('WITHDRAWAL_FILTERS', () => {
		it('should have exactly 3 definitions', () => {
			expect(WITHDRAWAL_FILTERS).toHaveLength(3);
		});

		it('should define date.from, date.to, and orderId query params', () => {
			const queryParams = WITHDRAWAL_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('date.from');
			expect(queryParams).toContain('date.to');
			expect(queryParams).toContain('orderId');
		});

		it('should group from/to under dateRange and orderId under ids', () => {
			const groups = WITHDRAWAL_FILTERS.map((f) => f.group);
			expect(groups).toContain('dateRange');
			expect(groups).toContain('ids');
		});
	});

	describe('descriptionListWithdrawals', () => {
		it('should return a fixedCollection property named "filters"', () => {
			const props = descriptionListWithdrawals({});
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('filters');
			expect(props[0].type).toBe('fixedCollection');
		});

		it('should contain dateRange and ids groups', () => {
			const props = descriptionListWithdrawals({});
			const collection = props[0] as any;
			const optionNames = collection.options.map((o: any) => o.name);
			expect(optionNames).toContain('dateRange');
			expect(optionNames).toContain('ids');
		});
	});

	describe('executeListWithdrawals — no filters', () => {
		it('should call /me/withdrawal with undefined qs', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/withdrawal') return ['w1'];
				if (url === '/me/withdrawal/w1') return { id: 'w1' };
				return {};
			});

			const result = await executeListWithdrawals.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/withdrawal');
			expect(mockClient.httpGet).toHaveBeenNthCalledWith(2, '/me/withdrawal/w1');
			expect(result).toEqual([{ id: 'w1' }]);
		});
	});

	describe('executeListWithdrawals — with filters', () => {
		it('should pass date.from and orderId to the API', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { dateRange: [{ from: '2026-01-01T00:00:00Z' }], ids: [{ orderId: 5 }] };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListWithdrawals.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/withdrawal', {
				'date.from': '2026-01-01T00:00:00Z',
				orderId: 5,
			});
		});
	});

	describe('executeListWithdrawals — multi-item', () => {
		it('should resolve filters using the provided itemIndex', async () => {
			mockClient.httpGet.mockResolvedValue([]);
			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx?: number) => {
					if (key === 'filters') return { dateRange: [{ from: `item-${idx}` }] };
					return {};
				});

			await executeListWithdrawals.call(mockExecuteFunctions, 2);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 2, {});
		});
	});
});

// ================================================================
// listRefunds
// ================================================================

describe('listRefunds', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	describe('REFUND_FILTERS', () => {
		it('should have exactly 3 definitions', () => {
			expect(REFUND_FILTERS).toHaveLength(3);
		});

		it('should define date.from, date.to, and orderId query params', () => {
			const queryParams = REFUND_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('date.from');
			expect(queryParams).toContain('date.to');
			expect(queryParams).toContain('orderId');
		});
	});

	describe('descriptionListRefunds', () => {
		it('should return a fixedCollection property named "filters"', () => {
			const props = descriptionListRefunds({});
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('filters');
			expect(props[0].type).toBe('fixedCollection');
		});

		it('should contain dateRange and ids groups', () => {
			const props = descriptionListRefunds({});
			const collection = props[0] as any;
			const optionNames = collection.options.map((o: any) => o.name);
			expect(optionNames).toContain('dateRange');
			expect(optionNames).toContain('ids');
		});
	});

	describe('executeListRefunds — no filters', () => {
		it('should call /me/refund with undefined qs', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/refund') return ['r1'];
				if (url === '/me/refund/r1') return { id: 'r1' };
				return {};
			});

			const result = await executeListRefunds.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/refund');
			expect(result).toEqual([{ id: 'r1' }]);
		});
	});

	describe('executeListRefunds — with filters', () => {
		it('should pass date.from and orderId to the API', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { dateRange: [{ from: '2026-03-01T00:00:00Z' }], ids: [{ orderId: 42 }] };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListRefunds.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/refund', {
				'date.from': '2026-03-01T00:00:00Z',
				orderId: 42,
			});
		});
	});

	describe('executeListRefunds — multi-item', () => {
		it('should resolve filters using the provided itemIndex', async () => {
			mockClient.httpGet.mockResolvedValue([]);
			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx?: number) => {
					if (key === 'filters') return { dateRange: [{ from: `item-${idx}` }] };
					return {};
				});

			await executeListRefunds.call(mockExecuteFunctions, 3);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 3, {});
		});
	});
});

// ================================================================
// listReverseBills
// ================================================================

describe('listReverseBills', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	describe('REVERSE_BILL_FILTERS', () => {
		it('should have exactly 3 definitions', () => {
			expect(REVERSE_BILL_FILTERS).toHaveLength(3);
		});

		it('should define date.from, date.to, and orderId query params', () => {
			const queryParams = REVERSE_BILL_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('date.from');
			expect(queryParams).toContain('date.to');
			expect(queryParams).toContain('orderId');
		});
	});

	describe('descriptionListReverseBills', () => {
		it('should return a fixedCollection property named "filters"', () => {
			const props = descriptionListReverseBills({});
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('filters');
			expect(props[0].type).toBe('fixedCollection');
		});

		it('should contain dateRange and ids groups', () => {
			const props = descriptionListReverseBills({});
			const collection = props[0] as any;
			const optionNames = collection.options.map((o: any) => o.name);
			expect(optionNames).toContain('dateRange');
			expect(optionNames).toContain('ids');
		});
	});

	describe('executeListReverseBills — no filters', () => {
		it('should call /me/reverseBill with undefined qs', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/reverseBill') return ['rb1'];
				if (url === '/me/reverseBill/rb1') return { id: 'rb1' };
				return {};
			});

			const result = await executeListReverseBills.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/reverseBill');
			expect(result).toEqual([{ id: 'rb1' }]);
		});
	});

	describe('executeListReverseBills — with filters', () => {
		it('should pass date.from and orderId to the API', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { dateRange: [{ to: '2026-06-30T23:59:59Z' }], ids: [{ orderId: 7 }] };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListReverseBills.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/reverseBill', {
				'date.to': '2026-06-30T23:59:59Z',
				orderId: 7,
			});
		});
	});

	describe('executeListReverseBills — multi-item', () => {
		it('should resolve filters using the provided itemIndex', async () => {
			mockClient.httpGet.mockResolvedValue([]);
			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx?: number) => {
					if (key === 'filters') return { dateRange: [{ from: `item-${idx}` }] };
					return {};
				});

			await executeListReverseBills.call(mockExecuteFunctions, 1);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 1, {});
		});
	});
});

// ================================================================
// listCorrectiveInvoices
// ================================================================

describe('listCorrectiveInvoices', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	describe('CORRECTIVE_INVOICE_FILTERS', () => {
		it('should have exactly 4 definitions', () => {
			expect(CORRECTIVE_INVOICE_FILTERS).toHaveLength(4);
		});

		it('should define date.from, date.to, orderId, and category query params', () => {
			const queryParams = CORRECTIVE_INVOICE_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('date.from');
			expect(queryParams).toContain('date.to');
			expect(queryParams).toContain('orderId');
			expect(queryParams).toContain('category');
		});

		it('should include category options matching billing.CategoryEnum', () => {
			const categoryDef = CORRECTIVE_INVOICE_FILTERS.find((f) => f.queryParam === 'category');
			expect(categoryDef).toBeDefined();
			expect(categoryDef!.type).toBe('options');
			expect(categoryDef!.options).toHaveLength(7);
			const values = categoryDef!.options!.map((o) => o.value);
			expect(values).toContain('autorenew');
			expect(values).toContain('earlyrenewal');
			expect(values).toContain('purchase');
			expect(values).toContain('purchase-cloud');
			expect(values).toContain('purchase-servers');
			expect(values).toContain('purchase-telecom');
			expect(values).toContain('purchase-web');
		});
	});

	describe('descriptionListCorrectiveInvoices', () => {
		it('should return a fixedCollection property named "filters"', () => {
			const props = descriptionListCorrectiveInvoices({});
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('filters');
			expect(props[0].type).toBe('fixedCollection');
		});

		it('should contain dateRange, ids, and category groups', () => {
			const props = descriptionListCorrectiveInvoices({});
			const collection = props[0] as any;
			const optionNames = collection.options.map((o: any) => o.name);
			expect(optionNames).toContain('dateRange');
			expect(optionNames).toContain('ids');
			expect(optionNames).toContain('category');
		});
	});

	describe('executeListCorrectiveInvoices — no filters', () => {
		it('should call /me/correctiveInvoice with undefined qs', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/correctiveInvoice') return ['ci1'];
				if (url === '/me/correctiveInvoice/ci1') return { id: 'ci1' };
				return {};
			});

			const result = await executeListCorrectiveInvoices.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/correctiveInvoice');
			expect(result).toEqual([{ id: 'ci1' }]);
		});
	});

	describe('executeListCorrectiveInvoices — with filters', () => {
		it('should pass date.from, orderId, and category to the API', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return {
						dateRange: [{ from: '2026-01-01T00:00:00Z' }],
						ids: [{ orderId: 99 }],
						category: [{ value: 'purchase-cloud' }],
					};
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListCorrectiveInvoices.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/correctiveInvoice', {
				'date.from': '2026-01-01T00:00:00Z',
				orderId: 99,
				category: 'purchase-cloud',
			});
		});

		it('should skip default orderId (0)', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { ids: [{ orderId: 0 }] };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListCorrectiveInvoices.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/correctiveInvoice');
		});
	});

	describe('executeListCorrectiveInvoices — multi-item', () => {
		it('should resolve filters using the provided itemIndex', async () => {
			mockClient.httpGet.mockResolvedValue([]);
			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx?: number) => {
					if (key === 'filters') return { ids: [{ orderId: idx ?? 0 }] };
					return {};
				});

			await executeListCorrectiveInvoices.call(mockExecuteFunctions, 5);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 5, {});
		});
	});
});
