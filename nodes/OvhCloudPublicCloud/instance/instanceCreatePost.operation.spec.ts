/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './instanceCreatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('instance instanceCreatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
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
				displayName: 'Availability Zone',
				name: 'availabilityZone',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Flavor ID',
				name: 'flavorId',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'Image ID',
				name: 'imageId',
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

		it('should create instance via POST', async () => {
			const mockData = { id: 'new-instance-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | boolean | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'availabilityZone':
							return 'GRA63';
						case 'flavorId':
							return 's1-8-40';
						case 'imageId':
							return '6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/instance',
				{
					availabilityZone: 'GRA63',
					flavorId: 's1-8-40',
					imageId: '6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b',
				},
			);
			expect(result).toEqual([mockData]);
		});

		it('should include optional fields when provided', async () => {
			const mockData = { id: 'new-instance-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | boolean | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'availabilityZone':
							return 'GRA63';
						case 'flavorId':
							return 's1-8-40';
						case 'imageId':
							return '6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b';
						case 'networkId':
							return 'net-12345';
						case 'namePrefix':
							return 'web';
						case 'tags':
							return 'web,production';
						case 'userData':
							return '#!/bin/bash\necho hello';
						case 'volumeType':
							return 'ssd';
						default:
							return '';
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/instance',
				expect.objectContaining({
					networkId: 'net-12345',
					namePrefix: 'web',
					tags: ['web', 'production'],
					userData: '#!/bin/bash\necho hello',
					volumeType: 'ssd',
				}),
			);
		});
	});
});
