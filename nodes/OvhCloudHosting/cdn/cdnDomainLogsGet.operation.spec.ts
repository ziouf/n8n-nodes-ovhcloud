/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnDomainLogsGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('hosting cdnDomainLogsGet operation', () => {
	describe('description', () => {
		it('should return serviceName, domain and date parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Domain',
				name: 'domain',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Date',
				name: 'date',
				type: 'dateTime',
				default: '',
			});
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				getInputData: jest.fn(() => [{ json: {} }]),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should GET the CDN domain logs endpoint with date query', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({ url: 'https://logs.example.com/archive.zip' });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					if (param === 'serviceName') return 'myservice.ovh';
					if (param === 'domain') return 'www.example.com';
					if (param === 'date') return '2026-08-01';
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/cdn/domain/www.example.com/logs',
				{ date: '2026-08-01' },
			);
			expect(result[0]).toMatchObject({ url: 'https://logs.example.com/archive.zip' });
		});

		it('should call with empty query when date is not set', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					if (param === 'serviceName') return 'myservice.ovh';
					if (param === 'domain') return 'www.example.com';
					return '';
				},
			);

			await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/cdn/domain/www.example.com/logs',
				{},
			);
		});
	});
});
