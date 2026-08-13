/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './confirmTerminationPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('confirmTerminationPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, token, commentary, futureUse and reason parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				displayName: 'Metrics Service Name',
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

		it('should confirm termination via POST with all parameters', async () => {
			const mockData = 'Service termination confirmed';
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'metrics-12345';
					switch (param) {
						case 'serviceName':
							return 'metrics-12345';
						case 'token':
							return 'termination-token';
						case 'commentary':
							return 'I do not need it anymore';
						case 'futureUse':
							return 'NOT_REPLACING_SERVICE';
						case 'reason':
							return 'NOT_NEEDED_ANYMORE';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/metrics/metrics-12345/confirmTermination', {
				token: 'termination-token',
				commentary: 'I do not need it anymore',
				futureUse: 'NOT_REPLACING_SERVICE',
				reason: 'NOT_NEEDED_ANYMORE',
			});
			expect(result).toEqual([{ message: 'Service termination confirmed' }]);
		});

		it('should confirm termination via POST with only required token', async () => {
			const mockData = 'Service termination confirmed';
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'metrics-12345';
					switch (param) {
						case 'serviceName':
							return 'metrics-12345';
						case 'token':
							return 'termination-token';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/metrics/metrics-12345/confirmTermination', {
				token: 'termination-token',
			});
		});
	});
});
