/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userLogsChangePasswordPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('userLogsChangePasswordPost.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(4);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "ownLogsId", "login", "password"]));
			});
		});

		describe('execute', () => {
			it('should call POST /hosting/web/{serviceName}/ownLogs/3/userLogs/{login}/changePassword', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'ownLogsId' ? 3 : p === 'login' ? 'mylog' : p === 'password' ? 'newpass' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(getClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/ownLogs/3/userLogs/mylog/changePassword`, {password: 'newpass'});
			});
		});
});
