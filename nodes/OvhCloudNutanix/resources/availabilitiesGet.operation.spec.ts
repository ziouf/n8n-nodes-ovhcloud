/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './availabilitiesGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('availabilitiesGet.operation', () => {
	describe('description', () => {
		it('should return 9 parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(9);
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

		it('should call the correct API endpoint via GET', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					switch (param) {
						case 'quantity':
							return 1;
						case 'erasureCoding':
							return false;
						case 'memory':
							return 'memory-v';
						case 'planCode':
							return 'planCode-v';
						case 'rackAwareness':
							return false;
						case 'redundancyFactor':
							return 0;
						case 'server':
							return 'server-v';
						case 'storage':
							return 'storage-v';
						case 'systemStorage':
							return 'systemStorage-v';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/nutanix/availabilities', {
				quantity: 1,
				erasureCoding: false,
				memory: 'memory-v',
				planCode: 'planCode-v',
				rackAwareness: false,
				redundancyFactor: 0,
				server: 'server-v',
				storage: 'storage-v',
				systemStorage: 'systemStorage-v',
			});

			expect(result).toEqual([mockData]);
		});
	});
});
