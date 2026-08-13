/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './formGet.operation';

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

describe('formGet.operation', () => {
	describe('description', () => {
		it('should return the type parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Type',
				name: 'type',
				type: 'string',
				default: '',
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

		it('should get form characteristics without type', async () => {
			const mockData = [
				{
					keys: [{ key: 'email', required: true }],
					type: 'form',
				},
			];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(_param: string, _idx?: number, def?: any): any => def ?? '',
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/contact/form', {});
			expect(result).toEqual(mockData);
		});

		it('should pass type as query parameter when provided', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					if (param === 'type') return 'form';
					return def ?? '';
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/contact/form', { type: 'form' });
		});
	});
});
