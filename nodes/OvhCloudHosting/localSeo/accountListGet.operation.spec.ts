/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './accountListGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue(['123']),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('localSeo.accountListGet.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should list Local SEO accounts via GET without query when email is empty', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'email') return '';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/localSeo/account',
				{},
			);
			expect(result).toMatchObject([{ id: '123' }]);
		});

		it('should pass the email query parameter when provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'email') return 'john@example.com';
				return undefined;
			});

			await execute.call(mockExecuteFunctions, 0);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/myservice.ovh/localSeo/account', {
				email: 'john@example.com',
			});
		});
	});
});
