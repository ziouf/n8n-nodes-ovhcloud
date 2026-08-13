/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './UserDeleteDelete.operation';

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

describe('opensearch UserDeleteDelete operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({'show': { publicCloudOperation: ['UserDeleteDelete'] }});
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
			client.httpDelete = jest.fn().mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
							if (param === 'clusterId') return 'test-cluster-id';
				if (param === 'serviceName') return 'test-service';
				if (param === 'userId') return 'test-user-id';
			},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalled();
			expect(result).toMatchObject([mockData]);
		});
	});
});
