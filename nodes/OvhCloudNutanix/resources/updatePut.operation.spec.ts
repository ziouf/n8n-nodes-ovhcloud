/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './updatePut.operation';

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

describe('updatePut.operation', () => {
	describe('description', () => {
		it('should return serviceName resourceLocator parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(18);
			expect(result[0]).toMatchObject({
				displayName: 'Nutanix Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
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

		it('should call the correct API endpoint via PUT', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'svc-1';
					switch (param) {
						case 'serviceName':
							return 'svc-1';
						case 'redeploycluster':
							return false;
						case 'scaleOut':
							return false;
						case 'controlPanelURL':
							return 'controlPanelURL-v';
						case 'dataserviceIp':
							return 'dataserviceIp-v';
						case 'erasureCoding':
							return true;
						case 'gatewayCidr':
							return 'gatewayCidr-v';
						case 'infraVlanNumber':
							return 1;
						case 'ipfo':
							return 'ipfo-v';
						case 'iplb':
							return 'iplb-v';
						case 'license':
							return 'license-v';
						case 'name':
							return 'name-v';
						case 'prismElementVip':
							return 'prismElementVip-v';
						case 'prismSecretId':
							return 'prismSecretId-v';
						case 'rackAwareness':
							return true;
						case 'redundancyFactor':
							return 2;
						case 'version':
							return 'version-v';
						case 'vrack':
							return 'vrack-v';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/nutanix/svc-1',
				{
					controlPanelURL: 'controlPanelURL-v',
					dataserviceIp: 'dataserviceIp-v',
					erasureCoding: true,
					gatewayCidr: 'gatewayCidr-v',
					infraVlanNumber: 1,
					ipfo: 'ipfo-v',
					iplb: 'iplb-v',
					license: 'license-v',
					name: 'name-v',
					prismElementVip: 'prismElementVip-v',
					prismSecretId: 'prismSecretId-v',
					rackAwareness: true,
					redundancyFactor: 2,
					version: 'version-v',
					vrack: 'vrack-v',
				},
				{ redeploycluster: false, scaleOut: false },
			);

			expect(result[0]).toMatchObject({ success: true });
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'svc 1';
					switch (param) {
						case 'serviceName':
							return 'svc 1';
						default:
							return undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/nutanix/svc%201', {}, {});
		});
	});
});
