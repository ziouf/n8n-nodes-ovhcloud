/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './backupDeleteDelete.operation';

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

describe('mongodb backupDeleteDelete operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({'show': {}});
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
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue(undefined);
			mockExecuteFunctions.getNodeParameter.mockReturnValue((param: string): string | undefined => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'serviceName') return 'test-service';
				if (param === 'backupId') return 'test-backup-id';
				if (param === 'userId') return 'test-user-id';
				if (param === 'nodeId') return 'test-node-id';
				if (param === 'subId') return 'test-sub-id';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalled();
			expect(result).toEqual([]);
		});
	});
});