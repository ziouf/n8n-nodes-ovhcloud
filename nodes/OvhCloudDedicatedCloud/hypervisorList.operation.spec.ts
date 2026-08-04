/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './hypervisorList.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('hypervisorList.operation', () => {
	describe('description', () => {
		it('should return pccZone, returnAll and limit parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'PCC Zone',
				name: 'pccZone',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Return All',
				name: 'returnAll',
				type: 'boolean',
				description: 'Whether to return all results or only up to a given limit',
				default: false,
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

		it('should list hypervisors via GET and respect limit', async () => {
			const mockData = [{ shortName: 'hgr-01' }, { shortName: 'hgr-02' }];
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'pccZone') return 'eu-west-1a';
				if (param === 'returnAll') return false;
				if (param === 'limit') return 1;
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicatedCloud/location/eu-west-1a/hypervisor',
				{},
			);
			expect(result).toMatchObject([{ shortName: 'hgr-01' }]);
		});
	});
});
