/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './batchesCreatePost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('batchesCreatePost.operation', () => {
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

		it('should call the correct POST endpoint', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 1 });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'sms-123';
					case 'class':
						return '';
					case 'deferred':
						return '';
					case 'from':
						return '';
					case 'message':
						return 'Hello SMS';
					case 'name':
						return '';
					case 'noStop':
						return false;
					case 'senderForResponse':
						return false;
					case 'slotID':
						return '';
					case 'tag':
						return '';
					case 'to':
						return '+33600000000';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/sms/sms-123/batches', {"message":"Hello SMS","to":["+33600000000"]});
			expect(result).toEqual([{ id: 1 }]);
		});
	});
});
