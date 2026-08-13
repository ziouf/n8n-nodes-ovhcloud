/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './domainTrustPost.operation';

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

describe('domainTrustPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, required fields and optional dns parameters', () => {
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
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Active Directory IP',
				name: 'activeDirectoryIP',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'DNS 1',
				name: 'dns1',
				type: 'string',
				default: '',
			});
			expect(result[4]).toMatchObject({
				displayName: 'DNS 2',
				name: 'dns2',
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

		it('should add domain trust via POST with all parameters', async () => {
			const mockData = { domainTrustId: 12345 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'domain':
							return 'example.com';
						case 'activeDirectoryIP':
							return '192.0.2.10';
						case 'dns1':
							return '1.1.1.1';
						case 'dns2':
							return '8.8.8.8';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/horizonView/service1/domainTrust', {
				domain: 'example.com',
				activeDirectoryIP: '192.0.2.10',
				dns1: '1.1.1.1',
				dns2: '8.8.8.8',
			});
			expect(result).toEqual([mockData]);
		});

		it('should add domain trust via POST with only required fields', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'domain':
							return 'corp.example.com';
						case 'activeDirectoryIP':
							return '192.0.2.11';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/horizonView/service1/domainTrust', {
				domain: 'corp.example.com',
				activeDirectoryIP: '192.0.2.11',
			});
		});
	});
});
