/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './offerCapabilitiesGet.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('offerCapabilitiesGet.operation', () => {
	describe('description', () => {
		it('should return the offer parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Offer',
				name: 'offer',
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

		it('should GET the offerCapabilities endpoint with offer query', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({ maxDump: 2, maxFtp: 5 });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'offer') return 'PERSO';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/offerCapabilities', {
				offer: 'PERSO',
			});
			expect(result[0]).toMatchObject({ maxDump: 2, maxFtp: 5 });
		});
	});
});
