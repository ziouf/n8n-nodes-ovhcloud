/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cronDeleteDelete.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('hosting cronDeleteDelete operation', () => {
	describe('description', () => {
		it('should return service name and cron id parameters', () => {
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
				displayName: 'Cron ID',
				name: 'cronId',
				type: 'number',
				default: 0,
				required: true,
			});
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

		it('should call the correct API endpoint', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'cronId') return 123;
				return undefined;
			});

			await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpDelete).toHaveBeenCalledWith('/hosting/web/myservice.ovh/cron/123');
		});
	});
});
