/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './searchBuildingsPost.operation';

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

describe('searchBuildingsPost.operation', () => {
	describe('description', () => {
		it('should return the correct number of parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[0]).toMatchObject({
				name: 'hexacle',
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
									case 'hexacle':
										return 'sample-value';
									case 'streetCode':
										return 'sample-value';
									case 'streetAltCode':
										return 'sample-value';
									case 'streetNumber':
										return 'sample-value';
									default:
										return def ?? undefined;
								}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/connectivity/eligibility/search/buildings', { hexacle: 'sample-value', streetCode: 'sample-value', streetAltCode: 'sample-value', streetNumber: 'sample-value' });
			expect(result).toEqual([mockData]);
		});

		it('should omit empty optional parameters from the request', async () => {
			const mockData = { id: 'resp-2', status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'hexacle':
										return '';
									case 'streetCode':
										return '';
									case 'streetAltCode':
										return '';
									case 'streetNumber':
										return '';
									default:
										return def ?? undefined;
								}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/connectivity/eligibility/search/buildings', {});
		});
	});
});