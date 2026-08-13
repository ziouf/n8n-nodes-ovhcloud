/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './copyListGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('copyListGet.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(2);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "databaseName"]));
			});
		});

		describe('execute', () => {
			it('should call GET /hosting/web/database/{serviceName}/{databaseName}/copy', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'databaseName' ? 'mydb' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(getClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(`/hosting/web/database/myservice.ovh/mydb/copy`);
			});
		});
});
