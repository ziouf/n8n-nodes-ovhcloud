/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './corporationTypeGet.operation';

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

describe('corporationTypeGet.operation', () => {
	describe('description', () => {
		it('should return the country parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Country',
				name: 'country',
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

		it('should get corporation types for a country via GET', async () => {
			const mockData = ['SA', 'SAS', 'SARL'];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					if (param === 'country') return 'FR';
					return def ?? '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/newAccount/corporationType', { country: 'FR' });
			expect(result).toEqual(mockData);
		});
	});
});
