/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './regionVolumeDeleteDelete.operation';

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

describe('region regionVolumeDeleteDelete operation', () => {
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

		it('should call the correct DELETE API endpoint', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | undefined => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'regionName') return 'GRA63';
				if (param === 'shareId') return 'test-share-id';
				if (param === 'snapshotId') return 'test-snapshot-id';
				if (param === 'volumeId') return 'test-volume-id';
				if (param === 'backupWorkflowId') return 'test-backup-id';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/volume/test-volume-id',
			);
			expect(result).toMatchObject([{ deleted: 'test-volume-id' }]);
		});
	});
});
