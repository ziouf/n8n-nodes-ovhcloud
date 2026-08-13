/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './envVarUpdatePut.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('envVarUpdatePut.operation', () => {
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

		it('should PUT the envVar endpoint with the key segment in the URL', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ taskId: 42 });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'myservice.ovh';
					case 'key':
						return 'MY_VAR';
					case 'type':
						return 'password';
					case 'value':
						return 'new-value';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPut).toHaveBeenCalledWith('/hosting/web/myservice.ovh/envVar/MY_VAR', {
				key: 'MY_VAR',
				type: 'password',
				value: 'new-value',
			});
			expect(result[0]).toMatchObject({ taskId: 42 });
		});
	});
});
