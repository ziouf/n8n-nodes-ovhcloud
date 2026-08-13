/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './availableTypesGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue(['nodejs14']),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('runtime.availableTypesGet.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should list available runtime types via GET without query when language is empty', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'language') return '';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/runtimeAvailableTypes',
				{},
			);
			expect(result).toMatchObject([{ type: 'nodejs14' }]);
		});

		it('should pass the language query parameter when provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'language') return 'nodejs';
				return undefined;
			});

			await execute.call(mockExecuteFunctions, 0);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/runtimeAvailableTypes',
				{ language: 'nodejs' },
			);
		});
	});
});
