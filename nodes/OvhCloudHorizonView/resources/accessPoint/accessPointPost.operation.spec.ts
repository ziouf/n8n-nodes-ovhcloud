/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './accessPointPost.operation';

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

describe('accessPointPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, poolType and optional parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				displayName: 'Horizon View Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Pool Type',
				name: 'poolType',
				type: 'options',
				default: 'hybridPool',
				required: true,
				options: [
					{ name: 'Hybrid Pool', value: 'hybridPool' },
					{ name: 'Private Pool', value: 'privatePool' },
					{ name: 'Public Pool', value: 'publicPool' },
				],
			});
			expect(result[1].options).toHaveLength(3);
			expect(result[2]).toMatchObject({
				displayName: 'Private Block',
				name: 'privateBlock',
				type: 'string',
				default: '',
			});
			expect(result[3]).toMatchObject({
				displayName: 'Private VLAN',
				name: 'privateVlan',
				type: 'number',
				default: 0,
			});
			expect(result[4]).toMatchObject({
				displayName: 'vRouter Pool Public IP',
				name: 'vrouterPoolPublicIp',
				type: 'string',
				default: '',
			});
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

		it('should add access point via POST with all parameters', async () => {
			const mockData = { id: 'urn:vcloud:loadbalancer:accessPoint1' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'poolType':
							return 'privatePool';
						case 'privateBlock':
							return '10.0.0.0/24';
						case 'privateVlan':
							return 100;
						case 'vrouterPoolPublicIp':
							return '203.0.113.10';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/horizonView/service1/accessPoint', {
				poolType: 'privatePool',
				privateBlock: '10.0.0.0/24',
				privateVlan: 100,
				vrouterPoolPublicIp: '203.0.113.10',
			});
			expect(result).toEqual([mockData]);
		});

		it('should add access point via POST with only required poolType', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'poolType':
							return 'publicPool';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/horizonView/service1/accessPoint', {
				poolType: 'publicPool',
			});
		});
	});
});
