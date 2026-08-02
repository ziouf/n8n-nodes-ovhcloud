/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './changeSessionTimeoutPost.operation';

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

describe('changeSessionTimeoutPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, accessPointId, expiration and onSingleAP parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[2]).toMatchObject({
				displayName: 'Expiration',
				name: 'expiration',
				type: 'number',
				default: 0,
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'On Single AP',
				name: 'onSingleAP',
				type: 'options',
				default: 'privateAccessPoint',
				options: [
					{ name: 'Private Access Point', value: 'privateAccessPoint' },
					{ name: 'Public Access Point', value: 'publicAccessPoint' },
				],
			});
			expect(result[3].options).toHaveLength(2);
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

		it('should change session timeout via POST with all parameters', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'accessPointId':
							return 'urn:vcloud:loadbalancer:accessPoint1';
						case 'expiration':
							return 180;
						case 'onSingleAP':
							return 'publicAccessPoint';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/horizonView/service1/accessPoint/urn%3Avcloud%3Aloadbalancer%3AaccessPoint1/changeSessionTimeout',
				{ expiration: 180, onSingleAP: 'publicAccessPoint' },
			);
			expect(result).toEqual([mockData]);
		});

		it('should change session timeout via POST with only required expiration', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'accessPointId':
							return 'urn:vcloud:loadbalancer:accessPoint1';
						case 'expiration':
							return 60;
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/horizonView/service1/accessPoint/urn%3Avcloud%3Aloadbalancer%3AaccessPoint1/changeSessionTimeout',
				{ expiration: 60 },
			);
		});
	});
});
