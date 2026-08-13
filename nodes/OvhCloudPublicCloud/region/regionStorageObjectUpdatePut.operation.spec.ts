/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './regionStorageObjectUpdatePut.operation';

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

describe('region regionStorageObjectUpdatePut operation', () => {
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
								if (param === 'key') return 'test-key-value';
								if (param === 'name') return 'test-name-value';
								if (param === 'legalHold') return 'test-legalHold';
								if (param === 'retention') return 'test-retention';
								if (param === 'restore') return 'test-restore';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/storage/test-name-value/object/test-key-value',
				expect.objectContaining({
										legalHold: 'test-legalHold',
					retention: 'test-retention',
					restore: 'test-restore'
				})
			);
			expect(result).toBeDefined();
		});
	});
});
