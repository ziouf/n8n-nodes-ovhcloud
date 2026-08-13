/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './customerUserPost.operation';

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

describe('customerUserPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, username and optional fields', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[1]).toMatchObject({
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
			});
			expect(result[3]).toMatchObject({
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
			});
			expect(result[3].typeOptions).toEqual({ password: true });
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

		it('should add customer user via POST with all parameters', async () => {
			const mockData = { taskId: 42 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'username':
							return 'user1';
						case 'email':
							return 'user1@example.com';
						case 'password':
							return 'secret';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/horizonView/service1/dedicatedHorizon/customerUser',
				{ username: 'user1', email: 'user1@example.com', password: 'secret' },
			);
			expect(result).toEqual([mockData]);
		});

		it('should add customer user via POST with only required username', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'username':
							return 'user1';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/horizonView/service1/dedicatedHorizon/customerUser',
				{ username: 'user1' },
			);
		});
	});
});
