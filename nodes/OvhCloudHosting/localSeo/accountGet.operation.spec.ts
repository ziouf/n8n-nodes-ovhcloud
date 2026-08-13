/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './accountGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue({}),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('localSeo.accountGet.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should get the Local SEO account via GET', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'id') return 123;
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/localSeo/account/123',
			);
			expect(result).toMatchObject([{}]);
		});
	});
});
