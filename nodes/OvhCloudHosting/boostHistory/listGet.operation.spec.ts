/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue(['2026-08-01T00:00:00+02:00']),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('boostHistory.listGet.operation', () => {
	describe('description', () => {
		it('should return service name and optional date parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({ name: 'serviceName', required: true });
			expect(result[1]).toMatchObject({ name: 'date', type: 'dateTime' });
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

		it('should list boost history via GET with no query when date is empty', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'date') return '';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/myservice.ovh/boostHistory', {});
			expect(result).toMatchObject([{ date: '2026-08-01T00:00:00+02:00' }]);
		});

		it('should pass the date as a query parameter when provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'date') return '2026-08-01T00:00:00+02:00';
				return undefined;
			});

			await execute.call(mockExecuteFunctions, 0);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/myservice.ovh/boostHistory', {
				date: '2026-08-01T00:00:00+02:00',
			});
		});
	});
});
