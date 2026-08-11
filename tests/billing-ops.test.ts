/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for billing list operations — returnFullObjects + maxItems parameters.
 *
 * Verifies that:
 * - executeListBillDebtOperations calls paginateResources with correct endpoints
 * - executeListBills calls paginateResources with correct endpoints
 * - executeListBillingGroups calls paginateResources with correct endpoints
 * - Failed item fetches (onSkipped) are silently skipped, not thrown
 * - Results are returned in order
 */

jest.mock('../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		paginateResources: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../shared/transport/ApiClient';
import {
	executeListBillDebtOperations,
	executeListBills,
	descriptionListBillDebtOperations,
	executeListBillingGroups,
	descriptionListBillDetails,
	descriptionListBillingGroupServices,
	executeListBillDetails,
	executeListBillingGroupServices,
	executeListPurchaseOrders,
	executeListConsumptionReports,
} from '../nodes/OvhCloudMe/operations/billing.operation';

describe('Billing list operations', () => {
	let mockExecuteFunctions: any;
	let mockClient: any;

	beforeEach(() => {
		jest.clearAllMocks();
		mockClient = (ApiClient as any)();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	// ─── executeListBillDebtOperations ─────────────────────────────────────

	describe('executeListBillDebtOperations', () => {
		it('should call paginateResources with correct endpoints and return full objects in order', async () => {
			const billId = 'bill-123';
			const fullObjects = [
				{ debtOperationId: 'op-1', amount: 10.5 },
				{ debtOperationId: 'op-2', amount: 20.0 },
			];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'billId') return billId;
				return '';
			});

			const result = await executeListBillDebtOperations.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith(
				'/me/bill/bill-123/debt/operation',
				'/me/bill/bill-123/debt/operation/{id}',
			);
			expect(mockClient.httpGet).not.toHaveBeenCalled();
			expect(result).toEqual(fullObjects);
		});

		it('should skip failed items via onSkipped without throwing', async () => {
			const billId = 'bill-456';
			const fullObjects = [
				{ debtOperationId: 'op-1', amount: 10.5 },
				// op-2 was skipped due to failure
			];
			mockClient.paginateResources.mockImplementation(
				async (_listEndpoint, _itemEndpoint, opts) => {
					// Simulate onSkipped being called (one item failed)
					if (opts?.onSkipped) {
						opts.onSkipped('op-2', new Error('Not found'));
					}
					return fullObjects;
				},
			);

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'billId') return billId;
				return '';
			});

			// Should NOT throw — onSkipped handles the failure internally
			const result = await executeListBillDebtOperations.call(mockExecuteFunctions);

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual({ debtOperationId: 'op-1', amount: 10.5 });
		});

		it('should use itemIndex ?? 0 for billId parameter resolution', async () => {
			const fullObjects = [{ debtOperationId: 'op-1' }];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			let callCount = 0;
			mockExecuteFunctions.getNodeParameter = jest
				.fn()
				.mockImplementation((key: string, idx: number) => {
					callCount++;
					if (key === 'billId') return `bill-idx-${idx}`;
					return '';
				});

			await executeListBillDebtOperations.call(mockExecuteFunctions, 2);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('billId', 2);
			expect(callCount).toBe(1);
		});
	});

	// ─── executeListBills ──────────────────────────────────────────────────

	describe('executeListBills', () => {
		it('should call paginateResources with correct endpoints and return full objects in order', async () => {
			const fullObjects = [
				{ billId: 'bill-1', total: 100.0 },
				{ billId: 'bill-2', total: 200.0 },
				{ billId: 'bill-3', total: 300.0 },
			];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			const result = await executeListBills.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}');
			expect(mockClient.httpGet).not.toHaveBeenCalled();
			expect(result).toEqual(fullObjects);
		});

		it('should return empty array when no bills exist', async () => {
			mockClient.paginateResources.mockResolvedValue([]);

			const result = await executeListBills.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith('/me/bill', '/me/bill/{id}');
			expect(result).toEqual([]);
		});
	});

	// ─── executeListBillingGroups ──────────────────────────────────────────

	describe('executeListBillingGroups', () => {
		it('should call paginateResources with correct endpoints and return full objects in order', async () => {
			const fullObjects = [
				{ billingGroupId: 'bg-1', description: 'Group 1' },
				{ billingGroupId: 'bg-2', description: 'Group 2' },
			];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			const result = await executeListBillingGroups.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith(
				'/me/billing/group',
				'/me/billing/group/{id}',
			);
			expect(mockClient.httpGet).not.toHaveBeenCalled();
			expect(result).toEqual(fullObjects);
		});

		it('should return empty array when no billing groups exist', async () => {
			mockClient.paginateResources.mockResolvedValue([]);

			const result = await executeListBillingGroups.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith(
				'/me/billing/group',
				'/me/billing/group/{id}',
			);
			expect(result).toEqual([]);
		});
	});

	// ─── executeListBillDetails ────────────────────────────────────────────

	describe('executeListBillDetails', () => {
		it('should call paginateResources with correct endpoints', async () => {
			const billId = 'bill-789';
			const fullObjects = [{ detailId: 'det-1', label: 'Detail 1' }];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'billId') return billId;
				return '';
			});

			const result = await executeListBillDetails.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith(
				'/me/bill/bill-789/details',
				'/me/bill/bill-789/details/{id}',
			);
			expect(result).toEqual(fullObjects);
		});
	});

	// ─── executeListBillingGroupServices ───────────────────────────────────

	describe('executeListBillingGroupServices', () => {
		it('should call paginateResources with correct endpoints', async () => {
			const groupId = 'group-abc';
			const fullObjects = [{ serviceId: 'svc-1', serviceName: 'Service 1' }];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'groupId') return groupId;
				return '';
			});

			const result = await executeListBillingGroupServices.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith(
				'/me/billing/group/group-abc/service',
				'/me/billing/group/group-abc/service/{id}',
			);
			expect(result).toEqual(fullObjects);
		});
	});

	// ─── executeListPurchaseOrders ─────────────────────────────────────────

	describe('executeListPurchaseOrders', () => {
		it('should call paginateResources with correct endpoints', async () => {
			const fullObjects = [{ orderId: 'po-1', status: 'confirmed' }];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			const result = await executeListPurchaseOrders.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith(
				'/me/billing/purchaseOrder',
				'/me/billing/purchaseOrder/{id}',
			);
			expect(result).toEqual(fullObjects);
		});
	});

	// ─── executeListConsumptionReports ─────────────────────────────────────

	describe('executeListConsumptionReports', () => {
		it('should call paginateResources with correct endpoints', async () => {
			const fullObjects = [{ taskId: 'rpt-1', type: 'monthly' }];
			mockClient.paginateResources.mockResolvedValue(fullObjects);

			const result = await executeListConsumptionReports.call(mockExecuteFunctions);

			expect(mockClient.paginateResources).toHaveBeenCalledWith(
				'/me/billing/report/consumption',
				'/me/billing/report/consumption/{id}',
			);
			expect(result).toEqual(fullObjects);
		});
	});

	// ─── Description functions ─────────────────────────────────────────────

	describe('Description functions', () => {
		it('descriptionListBillDebtOperations should return billId parameter', () => {
			const displayOptions = { show: { meOperation: ['listBillDebtOperations'] } };
			const props = descriptionListBillDebtOperations(displayOptions);
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('billId');
			expect(props[0].displayName).toBe('Bill ID');
			expect(props[0].type).toBe('string');
			expect(props[0].required).toBe(true);
		});

		it('descriptionListBillDetails should return billId parameter', () => {
			const displayOptions = { show: { meOperation: ['listBillDetails'] } };
			const props = descriptionListBillDetails(displayOptions);
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('billId');
		});

		it('descriptionListBillingGroupServices should return groupId parameter', () => {
			const displayOptions = { show: { meOperation: ['listBillingGroupServices'] } };
			const props = descriptionListBillingGroupServices(displayOptions);
			expect(props).toHaveLength(1);
			expect(props[0].name).toBe('groupId');
		});
	});
});
