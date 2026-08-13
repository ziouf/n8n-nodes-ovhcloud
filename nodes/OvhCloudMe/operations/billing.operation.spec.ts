/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiClient } from '../../../shared/transport/ApiClient';
import { executeListBills, descriptionListBills, BILL_FILTERS } from './billing.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
		paginate: jest.fn(),
		paginateResources: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
		getClient: jest.fn(() => mockHttpClient),
	};
});

describe('billing.operation — listBills with filters', () => {
	let client: any;
	let mockExecuteFunctions: any;

	beforeEach(() => {
		jest.clearAllMocks();
		client = new ApiClient({} as any);
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: (data: unknown) => data },
		};
	});

	// ============================================================
	// BILL_FILTERS definition
	// ============================================================

	describe('BILL_FILTERS', () => {
		it('should define exactly 4 filter definitions', () => {
			expect(BILL_FILTERS).toHaveLength(4);
		});

		it('should have correct query parameter names', () => {
			const queryParams = BILL_FILTERS.map((f) => f.queryParam);
			expect(queryParams).toContain('date.from');
			expect(queryParams).toContain('date.to');
			expect(queryParams).toContain('orderId');
			expect(queryParams).toContain('category');
		});

		it('should have correct groups', () => {
			const groups = BILL_FILTERS.map((f) => f.group);
			expect(groups).toContain('dateRange');
			expect(groups).toContain('ids');
			expect(groups).toContain('category');
		});

		it('should have correct types', () => {
			const typeMap: Record<string, string> = {};
			for (const f of BILL_FILTERS) {
				typeMap[f.queryParam] = f.type;
			}
			expect(typeMap['date.from']).toBe('dateTime');
			expect(typeMap['date.to']).toBe('dateTime');
			expect(typeMap['orderId']).toBe('number');
			expect(typeMap['category']).toBe('options');
		});

		it('should have options for category filter', () => {
			const categoryDef = BILL_FILTERS.find((f) => f.queryParam === 'category');
			expect(categoryDef).toBeDefined();
			expect(categoryDef?.options).toHaveLength(7);
			const values = categoryDef?.options?.map((o) => o.value);
			expect(values).toContain('autorenew');
			expect(values).toContain('earlyrenewal');
			expect(values).toContain('purchase');
			expect(values).toContain('purchase-cloud');
			expect(values).toContain('purchase-servers');
			expect(values).toContain('purchase-telecom');
			expect(values).toContain('purchase-web');
		});

		it('should have default 0 for orderId', () => {
			const orderIdDef = BILL_FILTERS.find((f) => f.queryParam === 'orderId');
			expect(orderIdDef?.default).toBe(0);
		});
	});

	// ============================================================
	// descriptionListBills
	// ============================================================

	describe('descriptionListBills', () => {
		it('should return an array with one fixedCollection property', () => {
			const result = descriptionListBills({});
			expect(result).toHaveLength(1);
			expect(result[0].type).toBe('fixedCollection');
			expect(result[0].name).toBe('filters');
		});

		it('should include all three groups in the fixedCollection options', () => {
			const result = descriptionListBills({ show: {} }) as any;
			const collectionOptions = result[0].options as any[];
			const groupNames = collectionOptions.map((o: any) => o.name);
			expect(groupNames).toContain('dateRange');
			expect(groupNames).toContain('ids');
			expect(groupNames).toContain('category');
		});

		it('should set displayOptions on the returned property', () => {
			const result = descriptionListBills({ show: { meOperation: ['listBills'] } });
			expect(result[0].displayOptions).toEqual({ show: { meOperation: ['listBills'] } });
		});
	});

	// ============================================================
	// executeListBills — non-regression (no filters)
	// ============================================================

	describe('executeListBills', () => {
		it('should call paginateResources with correct endpoints and no query when filters are empty', async () => {
			const fullObjects = [
				{ billId: 'bill-1', total: 100.0 },
				{ billId: 'bill-2', total: 200.0 },
			];
			client.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') return {};
				return {};
			});

			const result = await executeListBills.call(mockExecuteFunctions, 0);

			expect(client.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}', {
				query: undefined,
			});
			expect(result).toEqual(fullObjects);
		});

		it('should call paginateResources with filters when provided', async () => {
			const fullObjects = [{ billId: 'bill-7', total: 50.0 }];
			client.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') {
					return {
						dateRange: { from: '2026-01-01T00:00:00Z', to: '2026-06-30T00:00:00Z' },
						ids: { orderId: 5 },
						category: { value: 'purchase' },
					};
				}
				return {};
			});

			const result = await executeListBills.call(mockExecuteFunctions, 0);

			expect(client.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}', {
				query: {
					'date.from': '2026-01-01T00:00:00Z',
					'date.to': '2026-06-30T00:00:00Z',
					orderId: 5,
					category: 'purchase',
				},
			});
			expect(result).toEqual([{ billId: 'bill-7', total: 50.0 }]);
		});

		it('should pass itemIndex to getNodeParameter', async () => {
			const fullObjects = [{ billId: 'bill-x' }];
			client.paginateResources.mockResolvedValue(fullObjects);

			const callArgs: [string, number?][] = [];
			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string, idx?: number) => {
				callArgs.push([key, idx]);
				return {};
			});

			await executeListBills.call(mockExecuteFunctions, 2);

			expect(
				callArgs.some(
					([key]) => key === 'filters' && callArgs.find(([k, i]) => k === 'filters' && i === 2),
				),
			).toBe(true);
		});

		it('should skip orderId when value is 0 (default)', async () => {
			const fullObjects = [{ billId: 'bill-0' }];
			client.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') {
					return {
						ids: { orderId: 0 },
					};
				}
				return {};
			});

			await executeListBills.call(mockExecuteFunctions, 0);

			expect(client.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}', {
				query: undefined,
			});
		});

		it('should return empty array when no bills exist', async () => {
			client.paginateResources.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') return {};
				return {};
			});

			const result = await executeListBills.call(mockExecuteFunctions, 0);

			expect(client.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}', {
				query: undefined,
			});
			expect(result).toEqual([]);
		});

		it('should handle partial filters (only date range)', async () => {
			const fullObjects = [{ billId: 'bill-date' }];
			client.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') {
					return {
						dateRange: { from: '2026-01-01T00:00:00Z' },
					};
				}
				return {};
			});

			await executeListBills.call(mockExecuteFunctions, 0);

			expect(client.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}', {
				query: {
					'date.from': '2026-01-01T00:00:00Z',
				},
			});
		});

		it('should skip empty dateRange values', async () => {
			const fullObjects = [{ billId: 'bill-empty' }];
			client.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') {
					return {
						dateRange: { from: '', to: '' },
					};
				}
				return {};
			});

			await executeListBills.call(mockExecuteFunctions, 0);

			expect(client.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}', {
				query: undefined,
			});
		});
	});
});
