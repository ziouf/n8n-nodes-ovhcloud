/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './servicesPost.operation';

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

describe('servicesPost.operation', () => {
	describe('description', () => {
		it('should return packName, action, authInfo, domain and tld parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				displayName: 'Pack Xdsl Service Name',
				name: 'packName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Action',
				name: 'action',
				type: 'options',
				default: 'create',
				required: true,
				options: [
					{ name: 'Create', value: 'create' },
					{ name: 'Trade', value: 'trade' },
					{ name: 'Transfer', value: 'transfer' },
				],
			});
			expect(result[2]).toMatchObject({
				displayName: 'Auth Info',
				name: 'authInfo',
				type: 'string',
				typeOptions: { password: true },
				default: '',
			});
			expect(result[3]).toMatchObject({
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[4]).toMatchObject({
				displayName: 'TLD',
				name: 'tld',
				type: 'string',
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

		it('should activate a domain service via POST', async () => {
			const mockData = { taskId: 12345 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'action':
							return 'transfer';
						case 'authInfo':
							return 'auth-secret';
						case 'domain':
							return 'newdomain';
						case 'tld':
							return '.com';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/packabcd-ovh/domain/services', {
				action: 'transfer',
				domain: 'newdomain',
				tld: '.com',
				authInfo: 'auth-secret',
			});
			expect(result).toEqual([mockData]);
		});

		it('should send no authInfo when not provided', async () => {
			const mockData = { taskId: 67890 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'action':
							return 'create';
						case 'domain':
							return 'newdomain';
						case 'tld':
							return '.fr';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/packabcd-ovh/domain/services', {
				action: 'create',
				domain: 'newdomain',
				tld: '.fr',
			});
		});

		it('should encode special characters in packName', async () => {
			const mockData = { taskId: 1 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'pack abcd';
					switch (param) {
						case 'packName':
							return 'pack abcd';
						case 'action':
							return 'create';
						case 'domain':
							return 'newdomain';
						case 'tld':
							return '.com';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/pack%20abcd/domain/services', {
				action: 'create',
				domain: 'newdomain',
				tld: '.com',
			});
		});
	});
});
