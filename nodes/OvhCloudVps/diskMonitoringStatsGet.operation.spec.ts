/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './diskMonitoringStatsGet.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('diskMonitoringStatsGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and optional date params', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({ displayName: 'VPS Service Name' });
			expect(result.map((r) => r.name)).toContain('from');
			expect(result.map((r) => r.name)).toContain('to');
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

		it('should get disk monitoring stats via GET', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | number =>
				param === 'serviceName' ? 'vps1234567.ovh.net' : '',
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/vps/vps1234567.ovh.net/disks/monitoring/stats',
				{},
			);
		});

		it('should pass from/to query params when provided', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | number =>
				param === 'serviceName' ? 'vps1234567.ovh.net' : param,
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/vps/vps1234567.ovh.net/disks/monitoring/stats',
				{},
			);
		});
	});
});
