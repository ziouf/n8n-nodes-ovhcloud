/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './confirmTerminationPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('confirmTerminationPost.operation', () => {
	describe('description', () => {
		it('should return serviceName, token and termination parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				displayName: 'License Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'Token',
					name: 'token',
					type: 'string',
					default: '',
					required: true,
					typeOptions: { password: true },
				}),
			);
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

		it('should confirm license termination via POST with all parameters', async () => {
			const mockData = 'License terminated successfully';
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'license-1';
					switch (param) {
						case 'serviceName':
							return 'license-1';
						case 'token':
							return 'abc123';
						case 'commentary':
							return 'No longer needed';
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
			expect(client.httpPost).toHaveBeenCalledWith(
				'/license/worklight/license-1/confirmTermination',
				{
					token: 'abc123',
					commentary: 'No longer needed',
					futureUse: 'NOT_REPLACING_SERVICE',
					reason: 'NOT_NEEDED_ANYMORE',
				},
			);
			expect(result).toEqual([{ message: mockData }]);
		});

		it('should confirm license termination via POST with only the token', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue('License terminated successfully');

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'license-1';
					switch (param) {
						case 'serviceName':
							return 'license-1';
						case 'token':
							return 'abc123';
						case 'commentary':
							return '';
						case 'futureUse':
							return '';
						case 'reason':
							return '';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/license/worklight/license-1/confirmTermination',
				{ token: 'abc123' },
			);
		});

		it('should encode special characters in serviceName', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue('License terminated successfully');

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'license 1';
					switch (param) {
						case 'serviceName':
							return 'license 1';
						case 'token':
							return 'abc123';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/license/worklight/license%201/confirmTermination',
				{ token: 'abc123' },
			);
		});
	});
});
