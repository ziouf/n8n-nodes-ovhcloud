/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './poolUpdatePut.operation';

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

describe('poolUpdatePut.operation', () => {
	describe('description', () => {
		it('should return domainName, poolId, name, isDefault parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
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

		it('should update a pool via PUT', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ name: 'updated-pool' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'poolId':
						return 'pool-123';
					case 'name':
						return 'updated-pool';
					case 'isDefault':
						return true;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/domain/dnsZone/example.com/pool/pool-123', {
				name: 'updated-pool',
				isDefault: true,
			});
			expect(result).toEqual([{ name: 'updated-pool' }]);
		});
	});
});
