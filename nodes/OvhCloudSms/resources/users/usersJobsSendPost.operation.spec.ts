/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './usersJobsSendPost.operation';

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

describe('usersJobsSendPost.operation', () => {
	describe('description', () => {
		it('should return the operation parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
			expect(result[0]).toMatchObject({
				name: 'login',
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

		it('should call the correct POST endpoint', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 1 });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'login':
						return 'sms-user';
					case 'serviceName':
						return 'sms-123';
					case 'charset':
						return '';
					case 'class':
						return '';
					case 'coding':
						return '';
					case 'differedPeriod':
						return 0;
					case 'message':
						return 'Hello SMS';
					case 'noStopClause':
						return false;
					case 'priority':
						return '';
					case 'receivers':
						return '';
					case 'receiversDocumentUrl':
						return '';
					case 'receiversSlotId':
						return '';
					case 'sender':
						return '';
					case 'senderForResponse':
						return false;
					case 'tag':
						return '';
					case 'validityPeriod':
						return 0;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/sms/sms-123/users/sms-user/jobs', {"message":"Hello SMS"});
			expect(result).toEqual([{ id: 1 }]);
		});
	});
});
