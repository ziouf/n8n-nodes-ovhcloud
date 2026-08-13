/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './databaseCreatePost.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../shared/transport/ApiClient';

describe('databaseCreatePost.operation', () => {
	describe('description', () => {
		it('should return service name, username and password parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Username',
				name: 'username',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
				required: true,
			});
		});

		it('should have list and name modes for service locator', () => {
			const result = description({ show: {} });
			expect(result[0].modes).toHaveLength(2);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should create database via POST with username and password in body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName'
					? 'myservice.ovh'
					: param === 'username'
						? 'dbuser'
						: param === 'password'
							? 'dbpass123'
							: undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/database/create', {
				username: 'dbuser',
				password: 'dbpass123',
			});
		});

		it('should work with service name from list mode', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName'
					? 'service-from-list.ovh'
					: param === 'username'
						? 'myuser'
						: param === 'password'
							? 'mypass'
							: undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/service-from-list.ovh/database/create',
				{ username: 'myuser', password: 'mypass' },
			);
		});
	});
});
