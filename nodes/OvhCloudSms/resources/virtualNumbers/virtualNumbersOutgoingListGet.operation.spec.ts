/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './virtualNumbersOutgoingListGet.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('virtualNumbersOutgoingListGet.operation', () => {
	describe('description', () => {
		it('should return the operation parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
			expect(result[0]).toMatchObject({
				name: 'number',
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

		it('should call the correct GET endpoint', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([1, 2]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'number':
						return '+33600000000';
					case 'serviceName':
						return 'sms-123';
					case 'creationDatetimeFrom':
						return '';
					case 'creationDatetimeTo':
						return '';
					case 'deliveryReceipt':
						return 0;
					case 'differedDelivery':
						return 0;
					case 'ptt':
						return 0;
					case 'receiver':
						return '';
					case 'sender':
						return '';
					case 'tag':
						return '';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/sms/sms-123/virtualNumbers/%2B33600000000/outgoing', {});
			expect(result).toEqual([{ id: 1 }, { id: 2 }]);
		});
	});
});
