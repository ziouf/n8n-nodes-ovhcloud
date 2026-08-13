/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './hypervisorGet.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../shared/transport/ApiClient';

describe('hypervisorGet.operation', () => {
	describe('description', () => {
		it('should return pccZone and shortName parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'PCC Zone',
				name: 'pccZone',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Short Name',
				name: 'shortName',
				type: 'string',
				default: '',
				required: true,
			});
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
			};
		});

		it('should get hypervisor details via GET', async () => {
			const mockData = { shortName: 'hgr-01' };
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'pccZone') return 'eu-west-1a';
				if (param === 'shortName') return 'hgr-01';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicatedCloud/location/eu-west-1a/hypervisor/hgr-01',
			);
			expect(result).toMatchObject([mockData]);
		});
	});
});
