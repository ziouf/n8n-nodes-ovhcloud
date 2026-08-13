/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './availabilitiesRawGet.operation';

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

describe('availabilitiesRawGet.operation', () => {
	describe('description', () => {
		it('should return 13 parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(13);
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
						case 'datacenters':
							return 'datacenters-v';
						case 'deploymentType':
							return 'deploymentType-v';
						case 'erasureCoding':
							return false;
						case 'excludeDatacenters':
							return false;
						case 'excludeRegions':
							return false;
						case 'memory':
							return 'memory-v';
						case 'planCode':
							return 'planCode-v';
						case 'redundancyFactor':
							return 0;
						case 'regions':
							return 'regions-v';
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
			expect(client.httpGet).toHaveBeenCalledWith('/nutanix/availabilities/raw', {
				quantity: 1,
				datacenters: 'datacenters-v',
				deploymentType: 'deploymentType-v',
				erasureCoding: false,
				excludeDatacenters: false,
				excludeRegions: false,
				memory: 'memory-v',
				planCode: 'planCode-v',
				redundancyFactor: 0,
				regions: 'regions-v',
				server: 'server-v',
				storage: 'storage-v',
				systemStorage: 'systemStorage-v',
			});

			expect(result).toEqual([mockData]);
		});
	});
});
