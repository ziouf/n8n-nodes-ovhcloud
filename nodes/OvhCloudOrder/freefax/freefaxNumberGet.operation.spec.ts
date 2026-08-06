/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './freefaxNumberGet.operation';

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

describe('freefaxNumberGet operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(1);
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

		it('should call the correct API endpoint', async () => {
			const mockData = { number: '+33123456789' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue((param: string): string | undefined => {
				if (param === 'organizationName') return 'test-org';
				if (param === 'number') return '+33123456789';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalled();
			expect(result).toMatchObject([mockData]);
		});
	});
});
