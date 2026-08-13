/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './addChildDomainPost.operation';

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

describe('addChildDomainPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, domainTrustId and required body parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(6);
			expect(result[0]).toMatchObject({
				displayName: 'Horizon View Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
								required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Domain Trust ID',
				name: 'domainTrustId',
				type: 'number',
				default: 0,
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'Active Directory IP',
				name: 'activeDirectoryIP',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[4]).toMatchObject({
				displayName: 'Passphrase',
				name: 'passphrase',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[4].typeOptions).toEqual({ password: true });
			expect(result[5]).toMatchObject({
				displayName: 'Service Account Password',
				name: 'serviceAccountPassword',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				required: true,
			});
			expect(result[5].typeOptions).toEqual({ password: true });
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

		it('should add child domain via POST', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'domainTrustId':
							return 12345;
						case 'domain':
							return 'child.example.com';
						case 'activeDirectoryIP':
							return '192.0.2.20';
						case 'passphrase':
							return 'passphrase';
						case 'serviceAccountPassword':
							return 'secret';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/horizonView/service1/domainTrust/12345/addChildDomain',
				{
					domain: 'child.example.com',
					activeDirectoryIP: '192.0.2.20',
					passphrase: 'passphrase',
					serviceAccountPassword: 'secret',
				},
			);
			expect(result).toEqual([mockData]);
		});
	});
});
