/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './changePasswordPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('changePasswordPost.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(3);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "login", "password"]));
			});
		});

		describe('execute', () => {
			it('should call POST /hosting/web/{serviceName}/userLogs/{login}/changePassword', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'login' ? 'mylog' : p === 'password' ? 'newpass' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(ApiClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/userLogs/mylog/changePassword`, {password: 'newpass'});
			});
		});
});
