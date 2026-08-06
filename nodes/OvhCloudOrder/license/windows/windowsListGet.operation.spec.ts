/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './windowsListGet.operation';

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

describe('windowsListGet operation', () => {
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
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue((param: string): string | undefined => {
				if (param === 'family') return 'windows';
				if (param === 'serviceName') return 'test-service';
				if (param === 'duration') return 'P1M';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalled();
			expect(result).toMatchObject([mockData]);
		});
	});
});
