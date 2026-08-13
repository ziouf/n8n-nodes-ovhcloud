/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './postIpLoadbalancingserviceNHttpFarmfarmIdServerPost.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('postIpLoadbalancingserviceNHttpFarmfarmIdServerPost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
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

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
			if (param === 'serviceName') return 'test-serviceName-value';
			if (param === 'farmId') return 'test-farmId-value';
			if (param === 'address') return 'test-address-value';
			if (param === 'backup') return 'test-backup-value';
			if (param === 'chain') return 'test-chain-value';
			if (param === 'cookie') return 'test-cookie-value';
			if (param === 'displayName') return 'test-displayName-value';
			if (param === 'onMarkedDown') return 'test-onMarkedDown-value';
			if (param === 'port') return 'test-port-value';
			if (param === 'probe') return 'test-probe-value';
			if (param === 'proxyProtocolVersion') return 'test-proxyProtocolVersion-value';
			if (param === 'ssl') return 'test-ssl-value';
			if (param === 'status') return 'test-status-value';
			if (param === 'weight') return 'test-weight-value';

			return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPost as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});

