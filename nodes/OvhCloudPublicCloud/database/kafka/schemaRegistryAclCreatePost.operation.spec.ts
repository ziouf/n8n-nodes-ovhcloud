/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './schemaRegistryAclCreatePost.operation';

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

describe('OPERATION_NAME_PLACEHOLDER operation', () => {
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

		it('should call the correct API endpoint, with body', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | number | boolean | undefined => {
										if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'clusterId') return 'clusterId-test-value';
					if (param === 'patternType') return 'patternType-test-value';
					if (param === 'host') return 'host-test-value';
					if (param === 'name') return 'name-test-value';
					if (param === 'operation') return 'operation-test-value';
					if (param === 'permissionType') return 'permissionType-test-value';
					if (param === 'principal') return 'principal-test-value';
					return undefined;
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/kafka/clusterId-test-value/schemaRegistryAcl',
				{"patternType":"patternType-test-value", "host":"host-test-value", "name":"name-test-value", "operation":"operation-test-value", "permissionType":"permissionType-test-value", "principal":"principal-test-value"}
			);
			expect(result).toMatchObject([mockData]);
		});
	});
});
