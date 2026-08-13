/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './instanceInterfaceGetGet.operation';

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

describe('instance instanceInterfaceGetGet operation', () => {
	describe('description', () => {
		it('should return required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(3);
			expect(result[2]).toMatchObject({
				displayName: 'Interface ID',
				name: 'interfaceId',
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

		it('should get instance interface details via GET', async () => {
			const mockData = { id: 'int-1', macAddress: '00:11:22:33:44:55' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'instanceId') return 'test-instance-id';
					if (param === 'interfaceId') return 'test-interface-id';
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/instance/test-instance-id/interface/test-interface-id',
			);
			expect(result).toEqual([mockData]);
		});
	});
});
