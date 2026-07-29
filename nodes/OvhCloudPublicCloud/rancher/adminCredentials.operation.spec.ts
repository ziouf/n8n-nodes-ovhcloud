/* eslint-disable @typescript-eslint/no-explicit-any */
import {
	descriptionGet,
	descriptionPost,
	executeGet,
	executePost,
} from './adminCredentials.operation';

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

describe('rancher adminCredentials.operation', () => {
	describe('descriptionGet', () => {
		it('should return project and rancher service parameters', () => {
			const result = descriptionGet({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Public Cloud Project',
				name: 'publicCloudProjectId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Rancher Service ID',
				name: 'rancherServiceId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});
	});

	describe('descriptionPost', () => {
		it('should return project and rancher service parameters', () => {
			const result = descriptionPost({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Public Cloud Project',
				name: 'publicCloudProjectId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Rancher Service ID',
				name: 'rancherServiceId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});
	});

	describe('executeGet', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should get admin credentials via GET', async () => {
			const mockData = { username: 'admin', password: 'secret123' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'rancherServiceId':
							return 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
						default:
							return '';
					}
				},
			);

			const result = await executeGet.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/rancher/a1b2c3d4-e5f6-7890-abcd-ef1234567890/adminCredentials',
			);
			expect(result).toMatchObject([mockData]);
		});
	});

	describe('executePost', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should reset admin credentials via POST', async () => {
			const mockData = { username: 'admin', password: 'newpassword456' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'rancherServiceId':
							return 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
						default:
							return '';
					}
				},
			);

			const result = await executePost.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/rancher/a1b2c3d4-e5f6-7890-abcd-ef1234567890/adminCredentials',
			);
			expect(result).toMatchObject([mockData]);
		});
	});
});
