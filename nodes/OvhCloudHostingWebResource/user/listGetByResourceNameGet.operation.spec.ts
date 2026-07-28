/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listGetByResourceNameGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn() };;
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});
import { ApiClient } from '../../../shared/transport/ApiClient';

describe('user/listGetByResourceNameGet.operation', () => {
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

		it('should include displayOptions in the parameter when provided', () => {
			const result = description({ show: { webResourceOperation: ['sslListByResourceGet'] } });
			expect((result[0] as any).displayOptions.show.webResourceOperation).toEqual(['sslListByResourceGet']);
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

		it('should list users via GET', async () => {
			const mockData = [{ userName: 'user123' }];
			(new ApiClient(mockExecuteFunctions) as any).httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith(
				'/webhosting/resource/myResource/user',
			);
		});

		it('should return users wrapped in array', async () => {
			const mockData = [{ userName: 'user123' }];
			(new ApiClient(mockExecuteFunctions) as any).httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const result = (mockExecuteFunctions.helpers.returnJsonArray as jest.Mock).mock.calls[0][0];
			expect(result).toEqual([mockData]);
		});
	});
});