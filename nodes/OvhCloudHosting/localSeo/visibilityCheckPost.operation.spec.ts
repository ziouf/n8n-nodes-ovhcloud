/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './visibilityCheckPost.operation';

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

describe('localSeo.visibilityCheckPost.operation', () => {
	describe('description', () => {
		it('should return country, name, street and zip parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[0]).toMatchObject({
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: 'FR',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Street',
				name: 'street',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'Zip Code',
				name: 'zip',
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
				getInputData: jest.fn(() => [{ json: {} }]),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should POST the global visibilityCheck endpoint with body', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ searchData: { id: 123 } });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'country':
						return 'FR';
					case 'name':
						return 'My Shop';
					case 'street':
						return '1 rue de la Paix';
					case 'zip':
						return '75001';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/localSeo/visibilityCheck', {
				country: 'FR',
				name: 'My Shop',
				street: '1 rue de la Paix',
				zip: '75001',
			});
			expect(result[0]).toMatchObject({ searchData: { id: 123 } });
		});
	});
});
