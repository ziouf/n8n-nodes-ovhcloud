/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './ipRestrictionUpdatePut.operation';

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

describe('cassandra ipRestrictionUpdatePut operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({
				show: { publicCloudOperation: ['cassandraIpRestrictionUpdatePut'] },
			});
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
			const mockData = { ipBlock: '192.168.1.0/24', description: 'updated' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'clusterId') return 'cluster-123';
				if (param === 'ipBlock') return '192.168.1.0/24';
				if (param === 'description') return 'updated';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/database/cassandra/cluster-123/ipRestriction/192.168.1.0/24',
				{ description: 'updated' },
			);
			expect(result).toMatchObject([{ ipBlock: '192.168.1.0/24', description: 'updated' }]);
		});
	});
});
