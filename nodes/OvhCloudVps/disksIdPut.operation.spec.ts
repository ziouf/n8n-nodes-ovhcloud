/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './disksIdPut.operation';

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

describe('disksIdPut.operation', () => {
	describe('description', () => {
		it('should return serviceName and diskId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'VPS Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: {},
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Disk ID',
				name: 'diskId',
				type: 'string',
				default: '',
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

		it('should update disk via PUT with diskId', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'vps1234567.ovh.net';
						case 'diskId':
							return 'primary';
						default:
							return '';
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/vps/vps1234567.ovh.net/storage/disk/primary',
				{},
			);
		});
	});
});
