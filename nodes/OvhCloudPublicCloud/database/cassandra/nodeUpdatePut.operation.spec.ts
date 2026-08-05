/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './nodeUpdatePut.operation';

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

describe('cassandra nodeUpdatePut operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: { publicCloudOperation: ['cassandraNodeUpdatePut'] } });
			expect(result).toHaveLength(4);
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
			const mockData = { id: 'node-123' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'clusterId') return 'cluster-123';
				if (param === 'nodeId') return 'node-456';
				if (param === 'flavorName') return 'b2-7';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/cassandra/cluster-123/node/node-456',
				{ flavorName: 'b2-7' },
			);
			expect(result).toMatchObject([{ id: 'node-123' }]);
		});
	});
});
