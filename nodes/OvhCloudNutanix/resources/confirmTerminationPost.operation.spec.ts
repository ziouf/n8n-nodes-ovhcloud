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
		it('should return serviceName resourceLocator parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(8);
			expect(result[1]).toMatchObject({
				displayName: 'Nutanix Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[1] as any;
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

		it('should call the correct API endpoint via POST', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'svc-1';
					switch (param) {
						case 'serviceName':
							return 'svc-1';
						case 'token':
							return 'token-v';
						case 'reason':
							return 'reason-v';
						case 'futureUse':
							return 'futureUse-v';
						case 'commentary':
							return 'commentary-v';
						case 'commentaryFutureUse':
							return 'commentaryFutureUse-v';
						case 'commentaryReason':
							return 'commentaryReason-v';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/nutanix/svc-1/confirmTermination', {
				token: 'token-v',
				reason: 'reason-v',
				futureUse: 'futureUse-v',
				commentary: 'commentary-v',
				commentaryFutureUse: 'commentaryFutureUse-v',
				commentaryReason: 'commentaryReason-v',
			});

			expect(result[0]).toMatchObject({ success: true });
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'svc 1';
					switch (param) {
						case 'serviceName':
							return 'svc 1';
						default:
							return undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/nutanix/svc%201/confirmTermination', {});
		});
	});
});
