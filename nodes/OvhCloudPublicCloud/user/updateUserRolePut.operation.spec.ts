/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './updateUserRolePut.operation';

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

describe('user updateUserRolePut operation', () => {
	describe('description', () => {
		it('should return required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(3);
			expect(result[1]).toMatchObject({ name: 'userId', required: true });
			expect(result[2]).toMatchObject({ name: 'rolesIds', required: true });
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

		it('should update the user roles via PUT', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | string[] | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'userId':
							return 'userid';
						case 'rolesIds':
							return ['role1', 'role2'];
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/user/userid/role',
				{ rolesIds: ['role1', 'role2'] },
			);
			expect(result).toEqual([mockData]);
		});
	});
});
