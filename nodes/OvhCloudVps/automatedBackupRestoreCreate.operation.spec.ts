/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './automatedBackupRestoreCreate.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('automatedBackupRestoreCreate.operation', () => {
	describe('description', () => {
		it('should return only serviceName parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'VPS Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: {},
				required: true,
			});
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

		it('should restore VPS from backup via POST', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string =>
				param === 'serviceName' ? 'vps1234567.ovh.net' : '',
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/vps/vps1234567.ovh.net/automatedBackup/restore',
				{},
			);
		});
	});
});
