/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './regionNetworkSubnetCreatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('region regionNetworkSubnetCreatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(1);
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
			const mockData = { id: 'test-id', name: 'test-resource' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | undefined => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'regionName') return 'GRA63';
				if (param === 'networkId') return 'test-networkId-id';
				if (param === 'cidr') return 'test-cidr-value';
				if (param === 'dhcp') return 'test-dhcp-value';
				if (param === 'ipVersion') return 'test-ipVersion-value';
				if (param === 'gatewayIp') return 'test-gatewayIp-value';
				if (param === 'name') return 'test-name-value';
				if (param === 'allocationPools') return 'test-allocationPools-value';
				if (param === 'dnsNameservers') return 'test-dnsNameservers-value';
				if (param === 'hostRoutes') return 'test-hostRoutes-value';
				if (param === 'subnetId') return 'test-subnetId-value';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/network/test-networkId-id/subnet', expect.any(Object));
			expect(result).toBeDefined();
		});
	});
});
