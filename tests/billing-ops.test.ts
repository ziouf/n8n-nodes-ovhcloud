/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Tests for billing list operations — sequential detail fetching.
 *
 * Verifies that:
 * - executeListBillDebtOperations calls httpGet for list + details
 * - executeListBills calls httpGet for list + details
 * - executeListBillingGroups calls httpGet for list + details
 * - executeListBillDetails calls httpGet for list + details
 * - executeListBillingGroupServices calls httpGet for list + details
 * - executeListPurchaseOrders calls httpGet for list + details
 * - executeListConsumptionReports calls httpGet for list + details
 * - Failed item fetches are silently skipped, not thrown
 * - Results are returned in order
 */

import { createMockApiClient } from './helpers/mockClient';

const mockClient = createMockApiClient();

jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

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

	beforeEach(() => {
		jest.clearAllMocks();
		mockExecuteFunctions = {
			getNodeParameter: jest.fn(),
			helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
		};
	});

	// ─── executeListBillDebtOperations ─────────────────────────────────────

	describe('executeListBillDebtOperations', () => {
		it('should call httpGet for list and details, return full objects in order', async () => {
			const billId = 'bill-123';
			const ids = ['op-1', 'op-2'];
			const fullObjects = [
				{ debtOperationId: 'op-1', amount: 10.5 },
				{ debtOperationId: 'op-2', amount: 20.0 },
			];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[1]);

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'billId') return billId;
				return '';
			});

			const result = await executeListBillDebtOperations.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-123/debt/operation');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-123/debt/operation/op-1');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-123/debt/operation/op-2');
			expect(result).toEqual(fullObjects);
		});

		it('should skip failed items without throwing', async () => {
			const billId = 'bill-456';
			const ids = ['op-1', 'op-2'];
			const fullObjects = [{ debtOperationId: 'op-1', amount: 10.5 }];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);
			mockClient.httpGet.mockRejectedValueOnce(new Error('Not found'));

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'billId') return billId;
				return '';
			});

			const result = await executeListBillDebtOperations.call(mockExecuteFunctions);

			expect(result).toHaveLength(1);
			expect(result[0]).toEqual({ debtOperationId: 'op-1', amount: 10.5 });
		});

		it('should use itemIndex ?? 0 for billId parameter resolution', async () => {
			const fullObjects = [{ debtOperationId: 'op-1' }];
			mockClient.httpGet.mockResolvedValueOnce(['op-1']);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);

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
		it('should call httpGet for list and details, return full objects in order', async () => {
			const ids = ['bill-1', 'bill-2', 'bill-3'];
			const fullObjects = [
				{ billId: 'bill-1', total: 100.0 },
				{ billId: 'bill-2', total: 200.0 },
				{ billId: 'bill-3', total: 300.0 },
			];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[1]);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[2]);

			const result = await executeListBills.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-1');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-2');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-3');
			expect(result).toEqual(fullObjects);
		});

		it('should return empty array when no bills exist', async () => {
			mockClient.httpGet.mockResolvedValueOnce([]);

			const result = await executeListBills.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill');
			expect(result).toEqual([]);
		});
	});

	// ─── executeListBillingGroups ──────────────────────────────────────────

	describe('executeListBillingGroups', () => {
		it('should call httpGet for list and details, return full objects in order', async () => {
			const ids = ['bg-1', 'bg-2'];
			const fullObjects = [
				{ billingGroupId: 'bg-1', description: 'Group 1' },
				{ billingGroupId: 'bg-2', description: 'Group 2' },
			];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[1]);

			const result = await executeListBillingGroups.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/group');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/group/bg-1');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/group/bg-2');
			expect(result).toEqual(fullObjects);
		});

		it('should return empty array when no billing groups exist', async () => {
			mockClient.httpGet.mockResolvedValueOnce([]);

			const result = await executeListBillingGroups.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/group');
			expect(result).toEqual([]);
		});
	});

	// ─── executeListBillDetails ────────────────────────────────────────────

	describe('executeListBillDetails', () => {
		it('should call httpGet for list and details', async () => {
			const billId = 'bill-789';
			const ids = ['det-1'];
			const fullObjects = [{ detailId: 'det-1', label: 'Detail 1' }];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'billId') return billId;
				return '';
			});

			const result = await executeListBillDetails.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-789/details');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/bill/bill-789/details/det-1');
			expect(result).toEqual(fullObjects);
		});
	});

	// ─── executeListBillingGroupServices ───────────────────────────────────

	describe('executeListBillingGroupServices', () => {
		it('should call httpGet for list and details', async () => {
			const groupId = 'group-abc';
			const ids = ['svc-1'];
			const fullObjects = [{ serviceId: 'svc-1', serviceName: 'Service 1' }];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);

			mockExecuteFunctions.getNodeParameter = jest.fn().mockImplementation((key: string) => {
				if (key === 'groupId') return groupId;
				return '';
			});

			const result = await executeListBillingGroupServices.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/group/group-abc/service');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/group/group-abc/service/svc-1');
			expect(result).toEqual(fullObjects);
		});
	});

	// ─── executeListPurchaseOrders ─────────────────────────────────────────

	describe('executeListPurchaseOrders', () => {
		it('should call httpGet for list and details', async () => {
			const ids = ['po-1'];
			const fullObjects = [{ orderId: 'po-1', status: 'confirmed' }];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);

			const result = await executeListPurchaseOrders.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/purchaseOrder');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/purchaseOrder/po-1');
			expect(result).toEqual(fullObjects);
		});
	});

	// ─── executeListConsumptionReports ─────────────────────────────────────

	describe('executeListConsumptionReports', () => {
		it('should call httpGet for list and details', async () => {
			const ids = ['rpt-1'];
			const fullObjects = [{ taskId: 'rpt-1', type: 'monthly' }];
			mockClient.httpGet.mockResolvedValueOnce(ids);
			mockClient.httpGet.mockResolvedValueOnce(fullObjects[0]);

			const result = await executeListConsumptionReports.call(mockExecuteFunctions);

			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/report/consumption');
			expect(mockClient.httpGet).toHaveBeenCalledWith('/me/billing/report/consumption/rpt-1');
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
