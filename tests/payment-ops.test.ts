/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for listBankAccounts operation — filter definitions, description, and execute logic.
 *
 * Verifies that:
 * - BANK_ACCOUNT_FILTERS contains the expected 1 definition with correct queryParam
 * - descriptionListBankAccounts returns a fixedCollection with status group
 * - executeListBankAccounts calls /me/paymentMean/bankAccount with/without query params correctly
 * - Multi-item index resolution uses getNodeParameter('filters', itemIndex)
 * - State filter values match the OVHcloud BankAccountStateEnum
 *
 * Extended for Vague 1: listOrders
 */

import { createMockApiClient } from './helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

import {
	executeListBankAccounts,
	descriptionListBankAccounts,
	BANK_ACCOUNT_FILTERS,
	executeListOrders,
	descriptionListOrders,
	ORDER_FILTERS,
} from '../nodes/OvhCloudMe/operations/payment.operation';

describe('listBankAccounts', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	// ─── BANK_ACCOUNT_FILTERS ──────────────────────────────────────────────

	describe('BANK_ACCOUNT_FILTERS', () => {
		it('should have exactly 1 definition', () => {
			expect(BANK_ACCOUNT_FILTERS).toHaveLength(1);
		});

		it('should define state as queryParam', () => {
			expect(BANK_ACCOUNT_FILTERS[0].queryParam).toBe('state');
		});

		it('should have the correct options matching BankAccountStateEnum', () => {
			const expectedOptions = [
				{ name: 'Blocked For Incidents', value: 'blockedForIncidents' },
				{ name: 'Pending Validation', value: 'pendingValidation' },
				{ name: 'Replaced', value: 'replaced' },
				{ name: 'Valid', value: 'valid' },
			];
			const actualOptions = BANK_ACCOUNT_FILTERS[0].options;
			expect(actualOptions).toHaveLength(4);
			expect(actualOptions).toEqual(expectedOptions);
		});

		it('should group under "status" with displayName "State"', () => {
			const filter = BANK_ACCOUNT_FILTERS[0];
			expect(filter.group).toBe('status');
			expect(filter.groupDisplayName).toBe('Status');
			expect(filter.name).toBe('value');
			expect(filter.displayName).toBe('State');
			expect(filter.type).toBe('options');
		});
	});

	// ─── descriptionListBankAccounts ───────────────────────────────────────

	describe('descriptionListBankAccounts', () => {
		it('should return a fixedCollection property named "filters"', () => {
			const props = descriptionListBankAccounts({});
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('filters');
			expect(props[0].type).toBe('fixedCollection');
		});

		it('should contain status group in the fixedCollection options', () => {
			const props = descriptionListBankAccounts({});
			const collection = props[0] as any;
			const optionNames = collection.options.map((o: any) => o.name);
			expect(optionNames).toContain('status');
		});

		it('should include displayOptions on the filters property', () => {
			const displayOptions = { show: { meOperation: ['listBankAccounts'] } };
			const props = descriptionListBankAccounts(displayOptions);
			expect((props[0] as any).displayOptions).toEqual(displayOptions);
		});
	});

	// ─── executeListBankAccounts — no filters (non-regression) ─────────────

	describe('executeListBankAccounts — no filters', () => {
		it('should call /me/paymentMean/bankAccount with undefined qs and then fetch each bank account detail', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/paymentMean/bankAccount') return ['42'];
				if (url === '/me/paymentMean/bankAccount/42') return { id: '42', state: 'valid' };
				return {};
			});

			const result = await executeListBankAccounts.call(mockExecuteFunctions);

			// First call should be /me/paymentMean/bankAccount with undefined qs
			expect(mockClient.httpGet).toHaveBeenNthCalledWith(
				1,
				'/me/paymentMean/bankAccount',
				undefined,
			);
			// Second call should be /me/paymentMean/bankAccount/42
			expect(mockClient.httpGet).toHaveBeenNthCalledWith(2, '/me/paymentMean/bankAccount/42');
			expect(result).toEqual([{ id: '42', state: 'valid' }]);
		});

		it('should handle empty bank account list', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockResolvedValue([]);

			const result = await executeListBankAccounts.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/paymentMean/bankAccount', undefined);
			expect(result).toEqual([]);
		});
	});

	// ─── executeListBankAccounts — with state filter ───────────────────────

	describe('executeListBankAccounts — with state filter', () => {
		it('should pass state=valid to the API when set', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { status: { value: 'valid' } };
				}
				return {};
			});
			mockClient.httpGet.mockImplementation(async (url: string, qs?: any) => {
				if (url === '/me/paymentMean/bankAccount') {
					expect(qs).toEqual({ state: 'valid' });
					return ['42'];
				}
				if (url === '/me/paymentMean/bankAccount/42') return { id: '42', state: 'valid' };
				return {};
			});

			await executeListBankAccounts.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/paymentMean/bankAccount', {
				state: 'valid',
			});
		});

		it('should pass state=blockedForIncidents to the API', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { status: { value: 'blockedForIncidents' } };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListBankAccounts.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/paymentMean/bankAccount', {
				state: 'blockedForIncidents',
			});
		});
	});

	// ─── executeListBankAccounts — multi-item ──────────────────────────────

	describe('executeListBankAccounts — multi-item', () => {
		it('should resolve filters using the provided itemIndex', async () => {
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/paymentMean/bankAccount') return ['42'];
				if (url === '/me/paymentMean/bankAccount/42') return { id: '42' };
				return {};
			});

			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx?: number) => {
					if (key === 'filters') return { status: { value: `item-${idx}` } };
					return {};
				});

			await executeListBankAccounts.call(mockExecuteFunctions, 2);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 2, {});
		});
	});

	// ─── executeListBankAccounts — skip empty/default values ───────────────

	describe('executeListBankAccounts — skip empty filter', () => {
		it('should not include state when the filter value is empty', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { status: { value: '' } };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListBankAccounts.call(mockExecuteFunctions);

			// The qs should be undefined because the filter value is empty
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/paymentMean/bankAccount', undefined);
		});

		it('should not include state when filters object is empty', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListBankAccounts.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/paymentMean/bankAccount', undefined);
		});
	});
});

// ================================================================
// listOrders
// ================================================================

describe('listOrders', () => {
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	describe('ORDER_FILTERS', () => {
		it('should have exactly 2 definitions', () => {
			expect(ORDER_FILTERS).toHaveLength(2);
		});

		it('should define date.from and date.to query params only (no orderId)', () => {
			const queryParams = ORDER_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('date.from');
			expect(queryParams).toContain('date.to');
			expect(queryParams).not.toContain('orderId');
		});

		it('should group both under dateRange', () => {
			const groups = ORDER_FILTERS.map((f) => f.group);
			expect(groups).toContain('dateRange');
			expect(groups).not.toContain('ids');
		});
	});

	describe('descriptionListOrders', () => {
		it('should return a fixedCollection property named "filters"', () => {
			const props = descriptionListOrders({});
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('filters');
			expect(props[0].type).toBe('fixedCollection');
		});

		it('should contain only dateRange group', () => {
			const props = descriptionListOrders({});
			const collection = props[0] as any;
			const optionNames = collection.options.map((o: any) => o.name);
			expect(optionNames).toContain('dateRange');
			expect(optionNames).not.toContain('ids');
		});
	});

	describe('executeListOrders — no filters', () => {
		it('should call /me/order with undefined qs', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockReturnValue({});
			mockClient.httpGet.mockImplementation(async (url: string) => {
				if (url === '/me/order') return ['ord1'];
				if (url === '/me/order/ord1') return { id: 'ord1' };
				return {};
			});

			const result = await executeListOrders.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenNthCalledWith(1, '/me/order', undefined);
			expect(result).toEqual([{ id: 'ord1' }]);
		});
	});

	describe('executeListOrders — with filters', () => {
		it('should pass date.from and date.to to the API', async () => {
			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'filters') {
					return { dateRange: { from: '2026-01-01T00:00:00Z', to: '2026-12-31T23:59:59Z' } };
				}
				return {};
			});
			mockClient.httpGet.mockResolvedValue([]);

			await executeListOrders.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/order', {
				'date.from': '2026-01-01T00:00:00Z',
				'date.to': '2026-12-31T23:59:59Z',
			});
		});
	});

	describe('executeListOrders — multi-item', () => {
		it('should resolve filters using the provided itemIndex', async () => {
			mockClient.httpGet.mockResolvedValue([]);
			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx?: number) => {
					if (key === 'filters') return { dateRange: { from: `item-${idx}` } };
					return {};
				});

			await executeListOrders.call(mockExecuteFunctions, 4);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 4, {});
		});
	});
});
