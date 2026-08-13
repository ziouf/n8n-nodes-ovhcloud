/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './sshListGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue(['mykey']),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('key.sshListGet.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should list SSH keys via GET', async () => {
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myservice.ovh');

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/myservice.ovh/key/ssh');
			expect(result).toMatchObject([{ keyName: 'mykey' }]);
		});
	});
});
