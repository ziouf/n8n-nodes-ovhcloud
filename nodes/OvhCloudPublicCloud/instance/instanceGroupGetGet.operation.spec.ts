/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './instanceGroupGetGet.operation';

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

describe('instance instanceGroupGetGet operation', () => {
	describe('description', () => {
		it('should return empty description', () => {
			const result = description();
			expect(result).toHaveLength(0);
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

		it('should get instance group details via GET', async () => {
			const mockData = { id: 'grp-1', name: 'web-servers' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'groupId') return 'test-group-id';
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/publicCloud/project/12345678-1234-1234-1234-1234567890ab/instance/group/test-group-id',
			);
			expect(result).toEqual([mockData]);
		});
	});
});
