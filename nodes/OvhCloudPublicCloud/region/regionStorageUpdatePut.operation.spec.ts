/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './regionStorageUpdatePut.operation';

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

describe('region regionStorageUpdatePut operation', () => {
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

		it('should call the correct API endpoint with body', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | undefined => {
								if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
								if (param === 'regionName') return 'GRA63';
								if (param === 'name') return 'test-name-value';
								if (param === 'encryption') return 'test-encryption';
								if (param === 'lifecycle') return 'test-lifecycle';
								if (param === 'objectLock') return 'test-objectLock';
								if (param === 'replication') return 'test-replication';
								if (param === 'versioning') return 'test-versioning';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/storage/test-name-value',
				expect.objectContaining({
										encryption: 'test-encryption',
					lifecycle: 'test-lifecycle',
					objectLock: 'test-objectLock',
					replication: 'test-replication',
					versioning: 'test-versioning'
				})
			);
			expect(result).toBeDefined();
		});
	});
});
