/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userUpdatePut.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../shared/transport/ApiClient';

describe('userUpdatePut.operation', () => {
	describe('description', () => {
		it('should return service name and password parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
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

		it('should update user via POST with password in query string', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName'
					? 'myservice.ovh'
					: param === 'password'
						? 'newPassword123'
						: undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/user/update',
				{},
				{ userName: 'newPassword123' },
			);
		});

		it('should work with service name from list mode', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName'
					? 'service-from-list.ovh'
					: param === 'password'
						? 'abc123'
						: undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/service-from-list.ovh/user/update',
				{},
				{ userName: 'abc123' },
			);
		});
	});
});
