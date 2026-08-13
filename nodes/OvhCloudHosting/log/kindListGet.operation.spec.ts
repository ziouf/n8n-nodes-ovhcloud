/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './kindListGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('kindListGet.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(1);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName"]));
			});
		});

		describe('execute', () => {
			it('should call GET /hosting/web/{serviceName}/log/kind', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(getClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/log/kind`);
			});
		});
});
