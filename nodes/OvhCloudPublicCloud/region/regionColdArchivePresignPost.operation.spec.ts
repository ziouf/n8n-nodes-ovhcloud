/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './regionColdArchivePresignPost.operation';

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

describe('region regionColdArchivePresignPost operation', () => {
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
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | undefined => {
								if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
								if (param === 'regionName') return 'GRA63';
								if (param === 'name') return 'test-name-value';
								if (param === 'expire') return 'test-expire';
								if (param === 'method') return 'test-method';
								if (param === 'object') return 'test-object';
								if (param === 'storageClass') return 'test-storageClass';
								if (param === 'versionId') return 'test-versionId';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/coldArchive/test-name-value/presign',
				expect.objectContaining({
										expire: 'test-expire',
					method: 'test-method',
					object: 'test-object',
					storageClass: 'test-storageClass',
					versionId: 'test-versionId'
				})
			);
			expect(result).toBeDefined();
		});
	});
});
