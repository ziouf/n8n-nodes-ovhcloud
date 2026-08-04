/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './changeConfigurationPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue({}),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('ovhConfig.changeConfigurationPost.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should change the configuration via POST with the body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'id') return 123;
				if (param === 'container') return 'stable64';
				if (param === 'engineName') return 'php';
				if (param === 'engineVersion') return '8.1';
				if (param === 'environment') return 'production';
				if (param === 'httpFirewall') return 'security';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/ovhConfig/123/changeConfiguration',
				{
					container: 'stable64',
					engineName: 'php',
					engineVersion: '8.1',
					environment: 'production',
					httpFirewall: 'security',
				},
			);
			expect(result).toMatchObject([{}]);
		});

		it('should send an empty body when no value is provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'id') return 123;
				return '';
			});

			await execute.call(mockExecuteFunctions, 0);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/ovhConfig/123/changeConfiguration',
				{},
			);
		});
	});
});
