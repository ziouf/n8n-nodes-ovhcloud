/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './instanceReinstallPost.operation';

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

describe('instance instanceReinstallPost operation', () => {
	describe('description', () => {
		it('should return project, imageId and keepVolume parameters', () => {
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
				displayName: 'Image ID',
				name: 'imageId',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Keep Volume',
				name: 'keepVolume',
				type: 'boolean',
				default: false,
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

		it('should reinstall instance via POST', async () => {
			const mockData = { status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | boolean | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'instanceId':
							return 'test-instance-id';
						case 'imageId':
							return '6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b';
						case 'keepVolume':
							return false;
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/instance/test-instance-id/reinstall',
				{ imageId: '6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b', keepVolume: false },
			);
			expect(result).toEqual([mockData]);
		});
	});
});
