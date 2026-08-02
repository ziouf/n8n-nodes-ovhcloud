/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './confirmTerminationPost.operation';

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

describe('confirmTerminationPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, token and optional termination parameters', () => {
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
				displayName: 'Token',
				name: 'token',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				required: true,
			});
			expect(result[1].typeOptions).toEqual({ password: true });
			expect(result[2]).toMatchObject({
				displayName: 'Commentary',
				name: 'commentary',
				type: 'string',
				default: '',
			});
			expect(result[3]).toMatchObject({
				displayName: 'Future Use',
				name: 'futureUse',
				type: 'string',
				default: '',
			});
			expect(result[4]).toMatchObject({
				displayName: 'Reason',
				name: 'reason',
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

		it('should confirm termination via POST with token and optional fields', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'token':
							return 'token123';
						case 'commentary':
							return 'no longer needed';
						case 'futureUse':
							return 'replacement service';
						case 'reason':
							return 'not_needed_anymore';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/horizonView/service1/confirmTermination', {
				token: 'token123',
				commentary: 'no longer needed',
				futureUse: 'replacement service',
				reason: 'not_needed_anymore',
			});
			expect(result).toEqual([mockData]);
		});

		it('should confirm termination via POST with only required token', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'service1';
					switch (param) {
						case 'serviceName':
							return 'service1';
						case 'token':
							return 'token123';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/horizonView/service1/confirmTermination', {
				token: 'token123',
			});
		});
	});
});
