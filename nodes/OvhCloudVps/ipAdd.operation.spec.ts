/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './ipAdd.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('ipAdd.operation', () => {
	describe('description', () => {
		it('should return serviceName and ipAddress parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'VPS Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: {},
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'IP Address',
				name: 'ipAddress',
				type: 'string',
				default: '',
				required: true,
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

		it('should add failover IP via POST', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'vps1234567.ovh.net';
						case 'ipAddress':
							return '8.8.8.8';
						default:
							return '';
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/vps/vps1234567.ovh.net/ips', {
				ip: '8.8.8.8',
			});
		});
	});
});
