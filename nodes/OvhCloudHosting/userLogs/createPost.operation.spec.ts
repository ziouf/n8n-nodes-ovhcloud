/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './createPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('createPost.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(5);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "login", "password", "description", "ownLogsId"]));
			});
		});

		describe('execute', () => {
			it('should call POST /hosting/web/{serviceName}/userLogs', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'login' ? 'mylog' : p === 'password' ? 'pass123' : p === 'description' ? 'My logs user' : p === 'ownLogsId' ? 0 : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(getClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/userLogs`, {description: 'My logs user', login: 'mylog', password: 'pass123'});
			});
		});
});
