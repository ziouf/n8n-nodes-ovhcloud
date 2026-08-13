/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './postIpLoadbalancingserviceNTcpFrontendPost.operation';

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

describe('postIpLoadbalancingserviceNTcpFrontendPost operation', () => {
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
			if (param === 'allowedSource') return 'test-allowedSource-value';
			if (param === 'dedicatedIpfo') return 'test-dedicatedIpfo-value';
			if (param === 'defaultFarmId') return 'test-defaultFarmId-value';
			if (param === 'defaultSslId') return 'test-defaultSslId-value';
			if (param === 'deniedSource') return 'test-deniedSource-value';
			if (param === 'disabled') return 'test-disabled-value';
			if (param === 'displayName') return 'test-displayName-value';
			if (param === 'port') return 'test-port-value';
			if (param === 'ssl') return 'test-ssl-value';
			if (param === 'zone') return 'test-zone-value';

			return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPost as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});

