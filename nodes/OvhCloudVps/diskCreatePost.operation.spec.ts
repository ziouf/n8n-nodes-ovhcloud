/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './diskCreatePost.operation';

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

describe('diskCreatePost.operation', () => {
	describe('description', () => {
		it('should return serviceName and sizeInGB parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({ displayName: 'VPS Service Name' });
			expect(result[1]).toMatchObject({ name: 'sizeInGB' });
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

		it('should create disk via POST', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | number =>
				param === 'serviceName' ? 'vps1234567.ovh.net' : param === 'sizeInGB' ? 50 : '',
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/vps/vps1234567.ovh.net/disks/create', {
				sizeInGB: 50,
			});
		});
	});
});
