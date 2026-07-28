/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './envVarSetCreate.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('envVarSetCreate.operation', () => {
	describe('description', () => {
		it('should return service name, key and value parameters', () => {
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
				displayName: 'Key',
				name: 'key',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Value',
				name: 'value',
				type: 'string',
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

		it('should set env var via POST with key and value in query string', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName'
					? 'myservice.ovh'
					: param === 'key'
						? 'MY_VAR'
						: param === 'value'
							? 'myval'
							: undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/env/set',
				{},
				{ name: 'MY_VAR', value: 'myval' },
			);
		});

		it('should work with service name from list mode', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any =>
				param === 'serviceName'
					? 'service-from-list.ovh'
					: param === 'key'
						? 'OTHER_VAR'
						: param === 'value'
							? 'otherval'
							: undefined,
			);

			await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/service-from-list.ovh/env/set',
				{},
				{ name: 'OTHER_VAR', value: 'otherval' },
			);
		});
	});
});
