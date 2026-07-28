/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn() };;
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});
import { ApiClient } from '../../../shared/transport/ApiClient';

describe('resource/listGet.operation', () => {
	describe('description', () => {
		it('should return resourceName parameter', () => {
			const result = description();
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Resource Name',
				name: 'resourceName',
				type: 'string' as const,
				default: '',
				required: true,
			});
		});

		it('should have correct placeholder for resource name', () => {
			const result = description();
			expect(result[0].placeholder).toBe('myResourceName');
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

		it('should list web hosting resources via GET', async () => {
			const mockData = [{ name: 'myResource' }];
			(new ApiClient(mockExecuteFunctions) as any).httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue(undefined);

			await execute.call(mockExecuteFunctions);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith('/webhosting/resource');
		});

		it('should return resource data wrapped in array', async () => {
			const mockData = [{ name: 'myResource' }];
			(new ApiClient(mockExecuteFunctions) as any).httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue(undefined);

			await execute.call(mockExecuteFunctions);

			const result = (mockExecuteFunctions.helpers.returnJsonArray as jest.Mock).mock.calls[0][0];
			expect(result).toEqual([mockData]);
		});
	});
});