/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './createPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn() };;
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});
import { ApiClient } from '../../../shared/transport/ApiClient';

describe('attachedDomain/createPost.operation', () => {
	describe('description', () => {
		it('should return resourceName parameter with displayOptions', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Web Hosting Resource Name',
				name: 'resourceName',
				type: 'string' as const,
				required: true,
			});
		});

		it('should have correct placeholder and description', () => {
			const result = description({ show: {} });
			expect(result[0].placeholder).toBe('myResourceName');
			expect((result[0] as any).description).toContain('web hosting resource');
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

		it('should create attached domain via POST', async () => {
			const mockData = { name: 'example.com' };
			(new ApiClient(mockExecuteFunctions) as any).httpPost.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/webhosting/resource/myResource/attachedDomain',
				{},
			);
		});

		it('should return created domain data wrapped in array', async () => {
			const mockData = { name: 'example.com' };
			(new ApiClient(mockExecuteFunctions) as any).httpPost.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const result = (mockExecuteFunctions.helpers.returnJsonArray as jest.Mock).mock.calls[0][0];
			expect(result).toEqual([mockData]);
		});
	});
});