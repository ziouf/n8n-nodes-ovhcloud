/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './subscriptionCreatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('subscriptionCreatePost.operation', () => {
		describe('description', () => {
			it('should return the expected parameters', () => {
				const result = description({ show: {} });
				expect(result.length).toBeGreaterThanOrEqual(3);
				expect(result.map((p) => p.name)).toEqual(expect.arrayContaining(["serviceName", "kind", "streamId"]));
			});
		});

		describe('execute', () => {
			it('should call POST /hosting/web/{serviceName}/log/subscription', async () => {
				const mockExecuteFunctions: any = {
					getNodeParameter: jest.fn(),
					helpers: { returnJsonArray: jest.fn((data) => data) },
				};
				mockExecuteFunctions.getNodeParameter.mockImplementation((p: string): any =>
						p === 'serviceName' ? 'myservice.ovh' : p === 'kind' ? 'audit' : p === 'streamId' ? '3f2f1e1e-4a3a-4b4b-8c8c-1d1d1d1d1d1d' : 'default-fallback',
					);
				await execute.call(mockExecuteFunctions, 0);
				expect(getClient).toHaveBeenCalled();
				const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(`/hosting/web/myservice.ovh/log/subscription`, {kind: 'audit', streamId: '3f2f1e1e-4a3a-4b4b-8c8c-1d1d1d1d1d1d'});
			});
		});
});
