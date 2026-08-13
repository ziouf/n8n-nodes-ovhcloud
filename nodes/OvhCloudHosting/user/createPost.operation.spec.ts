/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './createPost.operation';

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

describe('user.createPost.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should create the user via POST with the user body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'login') return 'jdoe';
				if (param === 'home') return '/';
				if (param === 'password') return 'secret';
				if (param === 'sshState') return 'active';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/user', {
				home: '/',
				login: 'jdoe',
				password: 'secret',
				sshState: 'active',
			});
			expect(result).toMatchObject([{}]);
		});

		it('should omit sshState when not provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'login') return 'jdoe';
				if (param === 'home') return '/';
				if (param === 'password') return 'secret';
				if (param === 'sshState') return '';
				return undefined;
			});

			await execute.call(mockExecuteFunctions, 0);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/user', {
				home: '/',
				login: 'jdoe',
				password: 'secret',
			});
		});
	});
});
