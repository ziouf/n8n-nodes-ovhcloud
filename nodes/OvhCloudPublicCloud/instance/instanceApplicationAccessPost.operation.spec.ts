/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './instanceApplicationAccessPost.operation';

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

describe('instance instanceApplicationAccessPost operation', () => {
	describe('description', () => {
		it('should return project and sshKey parameters', () => {
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
				displayName: 'SSH Key',
				name: 'sshKey',
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

		it('should set application access via POST', async () => {
			const mockData = { status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'instanceId':
							return 'test-instance-id';
						case 'sshKey':
							return 'ssh-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/instance/test-instance-id/applicationAccess',
				{ sshKey: 'ssh-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' },
			);
			expect(result).toEqual([mockData]);
		});
	});
});
