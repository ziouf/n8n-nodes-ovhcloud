/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './phonebooksPhonebookContactListGet.operation';

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

describe('phonebooksPhonebookContactListGet.operation', () => {
	describe('description', () => {
		it('should return the operation parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
			expect(result[0]).toMatchObject({
				name: 'bookKey',
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
					case 'bookKey':
						return 'book-1';
					case 'serviceName':
						return 'sms-123';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/sms/sms-123/phonebooks/book-1/phonebookContact');
			expect(result).toEqual([{ id: 1 }, { id: 2 }]);
		});
	});
});
