/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './createPost.operation';

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

describe('backup createPost.operation', () => {
	describe('description', () => {
		it('should return 4 parameters (projectId, volumeId, snapshotId, backupTargetSpecName)', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);

			expect(result[0]).toMatchObject({
				displayName: 'Public Cloud Project',
				name: 'publicCloudProjectId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});

			expect(result[1]).toMatchObject({
				displayName: 'Source Volume ID (Optional)',
				name: 'volumeId',
				type: 'string',
				default: '',
			});

			expect(result[2]).toMatchObject({
				displayName: 'Source Snapshot ID (Optional)',
				name: 'snapshotId',
				type: 'string',
				default: '',
			});

			expect(result[3]).toMatchObject({
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

		it('should create backup from volume via POST', async () => {
			const mockData = { id: 'bkp-new' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'volumeId':
							return 'vol-id';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/blockStorage/backup',
				{ volumeId: 'vol-id' },
			);
			expect(result).toEqual([mockData]);
		});

		it('should throw error when neither volumeId nor snapshotId is provided', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						default:
							return '';
					}
				},
			);

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow(
				'Either volumeId or snapshotId is required to create a backup.',
			);
		});
	});
});
