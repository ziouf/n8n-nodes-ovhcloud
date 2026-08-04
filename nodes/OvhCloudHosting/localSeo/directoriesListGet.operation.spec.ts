/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './directoriesListGet.operation';

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

describe('localSeo.directoriesListGet.operation', () => {
	describe('description', () => {
		it('should return country and offer parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: 'FR',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Offer',
				name: 'offer',
				type: 'string',
				default: 'normal',
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

		it('should GET the global directoriesList endpoint with query params', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({ searchEngines: [], socialNetworks: [] });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'country') return 'FR';
				if (param === 'offer') return 'normal';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/localSeo/directoriesList', {
				country: 'FR',
				offer: 'normal',
			});
			expect(result[0]).toMatchObject({ searchEngines: [], socialNetworks: [] });
		});
	});
});
