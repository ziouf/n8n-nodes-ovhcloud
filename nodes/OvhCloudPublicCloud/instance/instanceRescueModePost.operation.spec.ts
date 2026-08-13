/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './instanceRescueModePost.operation';

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

describe('instance instanceRescueModePost operation', () => {
	describe('description', () => {
		it('should return required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(2);
			expect(result[1]).toMatchObject({
				displayName: 'Instance ID',
				name: 'instanceId',
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

		it('should enable rescue mode via POST', async () => {
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
						case 'rescue':
							return true;
						case 'imageId':
							return '6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/instance/test-instance-id/rescueMode',
				{ rescue: true, imageId: '6b17b8d2-e4f2-4b5e-b2a1-3c9d8e7f6a5b' },
			);
			expect(result).toEqual([mockData]);
		});
	});
});
