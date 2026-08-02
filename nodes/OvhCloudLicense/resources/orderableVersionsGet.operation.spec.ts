/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './orderableVersionsGet.operation';

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

describe('orderableVersionsGet.operation', () => {
	describe('description', () => {
		it('should return the ip parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'IP',
				name: 'ip',
				type: 'string',
				default: '',
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

		it('should get orderable WorkLight versions via GET', async () => {
			const mockData = [
				{
					serviceType: 'vps',
					orderableVersions: [{ version: 'VERSION-6.1U.1CPU' }],
				},
			];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '123.45.67.89';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/license/worklight/orderableVersions?ip=123.45.67.89',
			);
			expect(result).toEqual(mockData);
		});

		it('should encode special characters in the ip query param', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '12 3.45.67.89';
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/license/worklight/orderableVersions?ip=12%203.45.67.89',
			);
		});
	});
});
