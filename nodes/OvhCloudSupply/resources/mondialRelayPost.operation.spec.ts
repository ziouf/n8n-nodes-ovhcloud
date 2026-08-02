/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './mondialRelayPost.operation';

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

describe('mondialRelayPost.operation', () => {
	describe('description', () => {
		it('should return country, address, city and zipcode parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[0]).toMatchObject({
				displayName: 'Country',
				name: 'country',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Address',
				name: 'address',
				type: 'string',
				default: '',
			});
			expect(result[2]).toMatchObject({
				displayName: 'City',
				name: 'city',
				type: 'string',
				default: '',
			});
			expect(result[3]).toMatchObject({
				displayName: 'Zip Code',
				name: 'zipcode',
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

		it('should find MondialRelay points via POST with all parameters', async () => {
			const mockData = { status: 'ok', result: { relayPoints: [{ id: 'relay1' }] } };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					switch (param) {
						case 'country':
							return 'fr';
						case 'address':
							return '12 Rue de la République';
						case 'city':
							return 'Paris';
						case 'zipcode':
							return '75002';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/supply/mondialRelay', {
				country: 'fr',
				address: '12 Rue de la République',
				city: 'Paris',
				zipcode: '75002',
			});
			expect(result).toEqual([mockData]);
		});

		it('should find MondialRelay points via POST with only required country', async () => {
			const mockData = { status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					switch (param) {
						case 'country':
							return 'de';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/supply/mondialRelay', { country: 'de' });
		});
	});
});
