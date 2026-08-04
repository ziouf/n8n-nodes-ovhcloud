/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './envVarCreatePost.operation';

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

describe('envVarCreatePost.operation', () => {
	describe('description', () => {
		it('should return serviceName, key, type and value parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(4);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Key',
				name: 'key',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Type',
				name: 'type',
				type: 'options',
				// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
				default: 'string',
			});
			expect(result[3]).toMatchObject({
				displayName: 'Value',
				name: 'value',
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
				getInputData: jest.fn(() => [{ json: {} }]),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should POST the envVar endpoint with body', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ taskId: 99 });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'myservice.ovh';
					case 'key':
						return 'MY_VAR';
					case 'type':
						return 'string';
					case 'value':
						return 'secret-value';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/envVar', {
				key: 'MY_VAR',
				type: 'string',
				value: 'secret-value',
			});
			expect(result[0]).toMatchObject({ taskId: 99 });
		});
	});
});
