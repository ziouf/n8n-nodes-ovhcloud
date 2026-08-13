/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './terminatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('terminatePost.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(2);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "id"]));
			});
		});

		describe('execute', () => {
			it('should call POST /hosting/web/{serviceName}/emailOption/7/terminate', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'id' ? 7 : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(getClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/emailOption/7/terminate`);
			});
		});
});
