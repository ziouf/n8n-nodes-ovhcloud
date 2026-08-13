/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './outgoingListGet.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('outgoingListGet.operation', () => {
	describe('description', () => {
		it('should return the operation parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
			expect(result[0]).toMatchObject({
				name: 'serviceName',
				required: true,
			});
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should call the correct GET endpoint with no filters (qs=undefined)', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([1, 2]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'sms-123';
					case 'batchID':
						return '';
					case 'creationDatetimeFrom':
						return '';
					case 'creationDatetimeTo':
						return '';
					case 'deliveryReceipt':
						return 0;
					case 'differedDelivery':
						return 0;
					case 'messageID':
						return '';
					case 'ptt':
						return 0;
					case 'receiver':
						return '';
					case 'sender':
						return '';
					case 'tag':
						return '';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/sms/sms-123/outgoing', undefined);
			expect(result).toEqual([{ id: 1 }, { id: 2 }]);
		});

		it('should call the correct GET endpoint with filters applied', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([3, 4]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'sms-456';
					case 'batchID':
						return 'BATCH-001';
					case 'creationDatetimeFrom':
						return '2024-01-01T00:00:00Z';
					case 'creationDatetimeTo':
						return '2024-12-31T23:59:59Z';
					case 'deliveryReceipt':
						return 1;
					case 'differedDelivery':
						return 0;
					case 'messageID':
						return 'MSG-123';
					case 'ptt':
						return 0;
					case 'receiver':
						return '+33612345678';
					case 'sender':
						return 'MyBrand';
					case 'tag':
						return 'promo';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/sms/sms-456/outgoing', {
				batchID: 'BATCH-001',
				'creationDatetime.from': '2024-01-01T00:00:00Z',
				'creationDatetime.to': '2024-12-31T23:59:59Z',
				deliveryReceipt: 1,
				messageID: 'MSG-123',
				receiver: '+33612345678',
				sender: 'MyBrand',
				tag: 'promo',
			});
			expect(result).toEqual([{ id: 3 }, { id: 4 }]);
		});
	});
});
