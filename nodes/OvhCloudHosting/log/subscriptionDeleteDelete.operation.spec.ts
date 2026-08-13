/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './subscriptionDeleteDelete.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('subscriptionDeleteDelete.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(2);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "subscriptionId"]));
			});
		});

		describe('execute', () => {
			it('should call DELETE /hosting/web/{serviceName}/log/subscription/{subscriptionId}', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'subscriptionId' ? '3f2f1e1e-4a3a-4b4b-8c8c-1d1d1d1d1d1d' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(getClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpDelete).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/log/subscription/3f2f1e1e-4a3a-4b4b-8c8c-1d1d1d1d1d1d`);
			});
		});
});
