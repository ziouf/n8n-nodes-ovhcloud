/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceUpdatePut.operation';

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

describe('rancher serviceUpdatePut.operation', () => {
	describe('description', () => {
		it('should return project, rancherServiceId and plan parameters', () => {
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
			expect(result[2]).toMatchObject({
				displayName: 'Plan',
				name: 'plan',
				type: 'string',
				default: '',
			});
		});

		it('should have list and name modes for both locators', () => {
			const result = description({ show: {} });
			expect((result[0] as any).modes).toHaveLength(2);
			expect((result[1] as any).modes).toHaveLength(2);
		});

		it('should have plan as optional parameter (not required)', () => {
			const result = description({ show: {} });
			const planProp = result[2] as any;
			expect(planProp.required).toBeUndefined();
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

		it('should update rancher service via PUT', async () => {
			const mockData = { id: 'rancher-123' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'rancherServiceId':
							return 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
						case 'plan':
							return 'premium';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/rancher/a1b2c3d4-e5f6-7890-abcd-ef1234567890',
				{ plan: 'premium' },
			);
			expect(result).toBeDefined();
		});

		it('should throw error when plan is missing', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'rancherServiceId':
							return 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
						case 'plan':
							return '';
						default:
							return '';
					}
				},
			);

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow(
				'Plan is required to update a Rancher service',
			);
		});
	});
});
