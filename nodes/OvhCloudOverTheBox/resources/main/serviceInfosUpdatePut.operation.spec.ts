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
		it('should return serviceName resourceLocator parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(8);
			expect(result[0]).toMatchObject({
				displayName: 'OverTheBox Service Name',
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
						case 'contactAdmin':
							return 'contactAdmin-v';
						case 'contactBilling':
							return 'contactBilling-v';
						case 'contactTech':
							return 'contactTech-v';
						case 'domain':
							return 'domain-v';
						case 'engagedUpTo':
							return 'engagedUpTo-v';
						case 'expiration':
							return 'expiration-v';
						case 'possibleRenewPeriod':
							return 'possibleRenewPeriod-v';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/overTheBox/svc-1/serviceInfos', {
				contactAdmin: 'contactAdmin-v',
				contactBilling: 'contactBilling-v',
				contactTech: 'contactTech-v',
				domain: 'domain-v',
				engagedUpTo: 'engagedUpTo-v',
				expiration: 'expiration-v',
				possibleRenewPeriod: 'possibleRenewPeriod-v',
			});

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
			expect(client.httpPut).toHaveBeenCalledWith('/overTheBox/svc%201/serviceInfos', {});
		});
	});
});
