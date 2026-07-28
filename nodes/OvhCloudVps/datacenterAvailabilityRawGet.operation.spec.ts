/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './datacenterAvailabilityRawGet.operation';

import type { IDataObject } from 'n8n-workflow';

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

describe('datacenterAvailabilityRawGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and zone parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({ displayName: 'VPS Service Name' });
			expect(result[1]).toMatchObject({ name: 'zone' });
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

		it('should get raw availability via GET with zone query', async () => {
			const mockData: IDataObject[] = [];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string =>
				param === 'serviceName' ? 'vps1234567.ovh.net' : param === 'zone' ? 'GRA' : '',
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/vps/vps1234567.ovh.net/datacenter/availabilities/raw',
				{ query: { zone: 'GRA' } },
			);
		});
	});
});
