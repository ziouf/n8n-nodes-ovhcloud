/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './poolCreatePost.operation';

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

describe('poolCreatePost.operation', () => {
	describe('description', () => {
		it('should return domainName, name, isDefault parameters', () => {
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

		it('should create a pool via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue('pool-new');

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'name':
						return 'my-pool';
					case 'isDefault':
						return false;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/domain/dnsZone/example.com/pool', {
				name: 'my-pool',
				isDefault: false,
			});
			expect(result).toEqual([{ poolId: 'pool-new' }]);
		});
	});
});
