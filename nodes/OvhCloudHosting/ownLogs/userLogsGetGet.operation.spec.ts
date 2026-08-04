/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userLogsGetGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('userLogsGetGet.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(3);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "ownLogsId", "login"]));
			});
		});

		describe('execute', () => {
			it('should call GET /hosting/web/{serviceName}/ownLogs/3/userLogs/{login}', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'ownLogsId' ? 3 : p === 'login' ? 'mylog' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(ApiClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/ownLogs/3/userLogs/mylog`);
			});
		});
});
