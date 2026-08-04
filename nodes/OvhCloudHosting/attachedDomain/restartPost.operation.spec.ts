/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './restartPost.operation';

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

describe('attachedDomain.restartPost.operation', () => {
	describe('description', () => {
		it('should return service name and domain name parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({ name: 'serviceName', required: true });
			expect(result[1]).toMatchObject({
				displayName: 'Domain Name',
				name: 'domainName',
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

		it('should restart the virtual host via POST', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'domainName') return 'example.com';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/attachedDomain/example.com/restart',
				{},
			);
			expect(result).toMatchObject([{}]);
		});
	});
});
