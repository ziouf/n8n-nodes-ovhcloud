/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceCreatePost.operation';

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

describe('rancher serviceCreatePost.operation', () => {
	describe('description', () => {
		it('should return project, plan and version parameters', () => {
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
				displayName: 'Plan',
				name: 'plan',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Version',
				name: 'version',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('should have list and name modes for project locator', () => {
			const result = description({ show: {} });
			const projectProp = result[0] as any;
			expect(projectProp.modes).toHaveLength(2);
			expect(projectProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
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

		it('should create rancher service via POST', async () => {
			const mockData = { id: 'rancher-123' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'plan':
							return 'standard';
						case 'version':
							return '2.9.x';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/rancher/create',
				{ plan: 'standard', version: '2.9.x' },
			);
			expect(result).toBeDefined();
		});

		it('should throw error when plan is missing', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'plan':
							return '';
						default:
							return '';
					}
				},
			);

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow(
				'Plan is required to create a Rancher service',
			);
		});
	});
});
