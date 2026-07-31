/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './poolListGet.operation';

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

describe('poolListGet.operation', () => {
	describe('description', () => {
		it('should return domainName parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
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

		it('should list pools via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(['pool-1', 'pool-2']);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'domainName') return 'example.com';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/dnsZone/example.com/pool');
			expect(result).toEqual([{ poolId: 'pool-1' }, { poolId: 'pool-2' }]);
		});
	});
});
