/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceInfosUpdatePut.operation';

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

describe('serviceInfosUpdatePut.operation', () => {
	describe('description', () => {
		it('should return serviceName and service information parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(8);
			expect(result[0]).toMatchObject({
				displayName: 'Cluster Hadoop Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Contact Admin',
				name: 'contactAdmin',
				type: 'string',
				default: '',
			});
			expect(result[7]).toMatchObject({
				displayName: 'Possible Renew Period',
				name: 'possibleRenewPeriod',
				type: 'string',
				default: '',
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

		it('should update service information via PUT with provided parameters', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						case 'contactAdmin':
							return 'admin@example.com';
						case 'contactBilling':
							return 'billing@example.com';
						case 'contactTech':
							return 'tech@example.com';
						case 'domain':
							return 'example.com';
						case 'engagedUpTo':
							return '2026-12-31';
						case 'expiration':
							return '2027-12-31';
						case 'possibleRenewPeriod':
							return '6,12';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/cluster/hadoop/cluster-12345/serviceInfos', {
				contactAdmin: 'admin@example.com',
				contactBilling: 'billing@example.com',
				contactTech: 'tech@example.com',
				domain: 'example.com',
				engagedUpTo: '2026-12-31',
				expiration: '2027-12-31',
				possibleRenewPeriod: '6,12',
			});
			expect(result[0]).toMatchObject({ serviceName: 'cluster-12345', success: true });
		});

		it('should send an empty body when no parameters are provided', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster-12345';
					switch (param) {
						case 'serviceName':
							return 'cluster-12345';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/cluster/hadoop/cluster-12345/serviceInfos', {});
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'cluster 1';
					switch (param) {
						case 'serviceName':
							return 'cluster 1';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/cluster/hadoop/cluster%201/serviceInfos', {});
		});
	});
});
