/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './regionStorageObjectListGet.operation';

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

describe('region regionStorageObjectListGet operation', () => {
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

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | undefined => {
								if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
								if (param === 'regionName') return 'GRA63';
								if (param === 'name') return 'test-name-value';
								if (param === 'delimiter') return 'test-delimiter-value';
								if (param === 'keyMarker') return 'test-keyMarker-value';
								if (param === 'limit') return 'test-limit-value';
								if (param === 'prefix') return 'test-prefix-value';
								if (param === 'versionIdMarker') return 'test-versionIdMarker-value';
								if (param === 'withVersions') return 'test-withVersions-value';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/storage/test-name-value/object',
				{ delimiter: 'test-delimiter-value', keyMarker: 'test-keyMarker-value', limit: 'test-limit-value', prefix: 'test-prefix-value', versionIdMarker: 'test-versionIdMarker-value', withVersions: 'test-withVersions-value' },
			);
			expect(result).toBeDefined();
		});
	});
});
