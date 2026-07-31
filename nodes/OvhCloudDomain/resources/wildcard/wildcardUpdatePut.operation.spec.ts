/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './wildcardUpdatePut.operation';

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

describe('wildcardUpdatePut.operation', () => {
	describe('description', () => {
		it('should return domainName and wildcardId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
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

		it('should update a wildcard via PUT', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ enabled: false });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'wildcardId':
						return 'wc-123';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/domain/dnsZone/example.com/wildcard/wc-123',
				{},
			);
			expect(result).toEqual([{ enabled: false }]);
		});
	});
});
