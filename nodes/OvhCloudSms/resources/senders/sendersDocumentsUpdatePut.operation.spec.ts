/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './sendersDocumentsUpdatePut.operation';

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

describe('sendersDocumentsUpdatePut.operation', () => {
	describe('description', () => {
		it('should return the operation parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
			expect(result[0]).toMatchObject({
				name: 'documentID',
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

		it('should call the correct PUT endpoint', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ id: 1 });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'documentID':
						return '550e8400-e29b-41d4-a716-446655440000';
					case 'sender':
						return '+33600000000';
					case 'serviceName':
						return 'sms-123';
					case 'description':
						return '';
					case 'name':
						return '';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/sms/sms-123/senders/%2B33600000000/documents/550e8400-e29b-41d4-a716-446655440000', {});
			expect(result).toEqual([{ id: 1 }]);
		});
	});
});
