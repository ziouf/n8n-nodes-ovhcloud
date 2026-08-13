/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './aclCreatePost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../../shared/transport/ApiClient';

describe('aclCreatePost.operation', () => {
	describe('description', () => {
		it('should return the expected parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
			};
		});

		it('should call the correct endpoint', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'shareId') return 'share-1';
				if (param === 'accessLevel') return 'value';
				if (param === 'accessTo') return 'value';
				if (param === 'accessType') return 'value';
				if (param === 'status') return 'value';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 12345 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPost).toHaveBeenCalledWith('/storage/netapp/pcc-123-456-789/share/share-1/acl', { accessLevel: "value", accessTo: "value", accessType: "value", status: "value" });
		});
	});
});
