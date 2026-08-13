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

describe('module.createPost.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should install a module via POST with the module body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'moduleId') return 42;
				if (param === 'adminName') return 'admin';
				if (param === 'adminPassword') return 'secret';
				if (param === 'domain') return 'example.com';
				if (param === 'language') return 'fr';
				if (param === 'path') return '/blog';
				if (param === 'dependencies') return '';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/module', {
				moduleId: 42,
				adminName: 'admin',
				adminPassword: 'secret',
				domain: 'example.com',
				language: 'fr',
				path: '/blog',
			});
			expect(result).toMatchObject([{}]);
		});

		it('should parse the dependencies JSON when provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'moduleId') return 42;
				if (param === 'dependencies') return '[{"type":"mysql","name":"mydb"}]';
				return '';
			});

			await execute.call(mockExecuteFunctions, 0);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/module', {
				moduleId: 42,
				dependencies: [{ type: 'mysql', name: 'mydb' }],
			});
		});
	});
});
