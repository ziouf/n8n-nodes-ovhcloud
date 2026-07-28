/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './automatedBackupReschedulePost.operation';

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

describe('automatedBackupReschedulePost.operation', () => {
	describe('description', () => {
		it('should return serviceName and backupId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({ displayName: 'VPS Service Name' });
			expect(result[1]).toMatchObject({ name: 'backupId' });
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

		it('should reschedule backup via POST', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string =>
				param === 'serviceName' ? 'vps1234567.ovh.net' : param === 'backupId' ? '1234567890' : '',
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/vps/vps1234567.ovh.net/automatedBackup/reschedule',
				{ id: '1234567890' },
			);
		});
	});
});
