/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceDeleteDelete.operation';

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

describe('rancher serviceDeleteDelete.operation', () => {
	describe('description', () => {
		it('should return project and rancherServiceId parameters', () => {
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
				displayName: 'Rancher Service ID',
				name: 'rancherServiceId',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});

		it('should have list and name modes for both locators', () => {
			const result = description({ show: {} });
			expect((result[0] as any).modes).toHaveLength(2);
			expect((result[1] as any).modes).toHaveLength(2);
		});

		it('should have correct searchListMethod for project locator', () => {
			const result = description({ show: {} });
			const projectProp = result[0] as any;
			const listMode = projectProp.modes.find((m: any) => m.name === 'list');
			expect(listMode.typeOptions.searchListMethod).toBe('getPublicCloudProjects');
		});

		it('should have correct searchListMethod for rancher service locator', () => {
			const result = description({ show: {} });
			const rancherProp = result[1] as any;
			const listMode = rancherProp.modes.find((m: any) => m.name === 'list');
			expect(listMode.typeOptions.searchListMethod).toBe('getPublicCloudRancherServices');
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

		it('should delete rancher service via DELETE', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({ ok: true });

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

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/rancher/a1b2c3d4-e5f6-7890-abcd-ef1234567890',
			);
			expect(result).toMatchObject([{ deleted: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890' }]);
		});

		it('should return deleted service id in result', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'rancherServiceId':
							return 'test-service-id';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(result[0].deleted).toBe('test-service-id');
		});
	});
});
