/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './statisticsGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('hosting statisticsGet operation', () => {
	describe('description', () => {
		it('should return service name, period, and type parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Period',
				name: 'period',
				type: 'options',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Type',
				name: 'type',
				type: 'options',
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

		it('should call the correct API endpoint with query params', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'period') return 'day';
				if (param === 'type') return 'bandwidth';
				return undefined;
			});

			await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/myservice.ovh/statistics', {
				period: 'day',
				type: 'bandwidth',
			});
		});
	});
});
