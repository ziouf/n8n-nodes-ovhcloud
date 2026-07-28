/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './updatePut.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('backup updatePut.operation', () => {
	describe('description', () => {
		it('should return 3 parameters (projectId, backupId, backupTargetSpecName)', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);

			expect(result[0]).toMatchObject({
				displayName: 'Public Cloud Project',
				name: 'publicCloudProjectId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});

			expect(result[1]).toMatchObject({
				displayName: 'Backup ID',
				name: 'backupId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});

			expect(result[2]).toMatchObject({
				displayName: 'Backup Name (Optional)',
				name: 'backupTargetSpecName',
				type: 'string',
				default: '',
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

		it('should update backup via PUT', async () => {
			const mockData = { id: 'bkp-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'backupId':
							return 'bkp-id';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/blockStorage/backup/bkp-id',
				{},
			);
			expect(result).toEqual([mockData]);
		});

		it('should return the updated resource data in result array', async () => {
			const mockData = { id: 'updated-bkp' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'backupId':
							return 'updated-bkp';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(result[0].id).toBe('updated-bkp');
		});
	});
});
