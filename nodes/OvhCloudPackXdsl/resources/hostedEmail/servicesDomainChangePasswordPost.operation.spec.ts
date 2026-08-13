/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './servicesDomainChangePasswordPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('servicesDomainChangePasswordPost.operation', () => {
	describe('description', () => {
		it('should return packName, domain and password parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Pack Xdsl Service Name',
				name: 'packName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
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

		it('should change the Hosted Email password via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'domain':
							return 'domain1.com';
						case 'password':
							return 'newsecret123';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/pack/xdsl/packabcd-ovh/hostedEmail/services/domain1.com/changePassword',
				{ password: 'newsecret123' },
			);
			expect(result[0]).toMatchObject({
				packName: 'packabcd-ovh',
				domain: 'domain1.com',
				success: true,
			});
		});

		it('should encode special characters in packName and domain', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'pack abcd';
					switch (param) {
						case 'packName':
							return 'pack abcd';
						case 'domain':
							return 'domain 1.com';
						case 'password':
							return 'newsecret123';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/pack/xdsl/pack%20abcd/hostedEmail/services/domain%201.com/changePassword',
				{ password: 'newsecret123' },
			);
		});
	});
});
