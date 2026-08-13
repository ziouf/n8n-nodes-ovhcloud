/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnDomainStatisticsGet.operation';

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

describe('hosting cdnDomainStatisticsGet operation', () => {
	describe('description', () => {
		it('should return serviceName, domain and period parameters', () => {
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
				displayName: 'Period',
				name: 'period',
				type: 'options',
				// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
				default: 'day',
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

		it('should GET the CDN domain statistics endpoint with period query', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([{ name: 'requests', points: [] }]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'domain') return 'www.example.com';
				if (param === 'period') return 'week';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/cdn/domain/www.example.com/statistics',
				{ period: 'week' },
			);
			expect(result[0]).toMatchObject({ '0': { name: 'requests', points: [] } });
		});
	});
});
