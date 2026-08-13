/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './blacklistDeleteDelete.operation';

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

describe('blacklistDeleteDelete.operation', () => {
	describe('description', () => {
		it('should return serviceName and phoneNumber parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
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

		it('should remove from blacklist via DELETE', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'sms123';
					case 'phoneNumber':
						return '+33612345678';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/sms/sms123/blacklists/+33612345678');
			expect(result).toEqual([{ phoneNumber: '+33612345678', unblacklisted: true }]);
		});
	});
});
