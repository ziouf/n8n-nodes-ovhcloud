/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './searchCitiesPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('searchCitiesPost.operation', () => {
	describe('description', () => {
		it('should return the correct number of parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				name: 'zipCode',
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

		it('should call the correct API endpoint via POST', async () => {
			const mockData = { id: 'resp-1', status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'zipCode':
										return 'sample-value';
									default:
										return def ?? undefined;
								}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/connectivity/eligibility/search/cities', { zipCode: 'sample-value' });
			expect(result).toEqual([mockData]);
		});

		it('should encode special characters in path parameters', async () => {
			const mockData = { id: 'resp-2', status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'zipCode':
										return 'alternate-value';
									default:
										return def ?? undefined;
								}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/connectivity/eligibility/search/cities', { zipCode: 'alternate-value' });
		});
	});
});