/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './recallUpdatePut.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('recallUpdatePut.operation', () => {
	describe('description', () => {
		it('should return the correct number of parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				name: 'id',
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

		it('should call the correct API endpoint via PUT', async () => {
			const mockData = { id: 'resp-1', status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'id':
										return 12345;
									case 'reference':
										return 'sample-value';
									case 'referenceType':
										return "address";
									case 'profiberRequest':
										return true;
									case 'dedicatedfiberRequest':
										return true;
									default:
										return def ?? undefined;
								}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/connectivity/eligibility/recall/12345', { reference: 'sample-value', referenceType: 'address', profiberRequest: true, dedicatedfiberRequest: true });
			expect(result).toEqual([mockData]);
		});

		it('should omit empty optional parameters from the request', async () => {
			const mockData = { id: 'resp-2', status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'id':
										return 12345;
									case 'reference':
										return '';
									case 'referenceType':
										return '';
									case 'profiberRequest':
										return false;
									case 'dedicatedfiberRequest':
										return false;
									default:
										return def ?? undefined;
								}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/connectivity/eligibility/recall/12345', { profiberRequest: false, dedicatedfiberRequest: false });
		});
	});
});