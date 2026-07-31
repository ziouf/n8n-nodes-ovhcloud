/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './instanceSnapshotPost.operation';

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

describe('instance instanceSnapshotPost operation', () => {
	describe('description', () => {
		it('should return project and snapshotName parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(1);
			expect(result[0]).toMatchObject({
				displayName: 'Public Cloud Project',
				name: 'publicCloudProjectId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Snapshot Name',
				name: 'snapshotName',
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

		it('should create snapshot via POST', async () => {
			const mockData = { id: 'snap-123', name: 'my-snapshot' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'instanceId':
							return 'test-instance-id';
						case 'snapshotName':
							return 'my-snapshot';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/instance/test-instance-id/snapshot',
				{ snapshotName: 'my-snapshot' },
			);
			expect(result).toEqual([mockData]);
		});
	});
});
