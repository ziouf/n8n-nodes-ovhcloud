/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './sshCreatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue({}),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('key.sshCreatePost.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should create the SSH key via POST with the key body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'keyName') return 'mykey';
				if (param === 'key') return 'ssh-rsa AAAA';
				if (param === 'comment') return 'deploy key';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/key/ssh', {
				key: 'ssh-rsa AAAA',
				keyName: 'mykey',
				comment: 'deploy key',
			});
			expect(result).toMatchObject([{}]);
		});

		it('should omit the comment when empty', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'keyName') return 'mykey';
				if (param === 'key') return 'ssh-rsa AAAA';
				if (param === 'comment') return '';
				return undefined;
			});

			await execute.call(mockExecuteFunctions, 0);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith('/hosting/web/myservice.ovh/key/ssh', {
				key: 'ssh-rsa AAAA',
				keyName: 'mykey',
			});
		});
	});
});
