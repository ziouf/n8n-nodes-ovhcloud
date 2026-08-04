/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './copyGetGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('copyGetGet.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(3);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "databaseName", "copyId"]));
			});
		});

		describe('execute', () => {
			it('should call GET /hosting/web/database/{serviceName}/{databaseName}/copy/{copyId}', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'databaseName' ? 'mydb' : p === 'copyId' ? '3f2f1e1e-4a3a-4b4b-8c8c-1d1d1d1d1d1d' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(ApiClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(`/hosting/web/database/myservice.ovh/mydb/copy/3f2f1e1e-4a3a-4b4b-8c8c-1d1d1d1d1d1d`);
			});
		});
});
