/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './getByNameGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn() };;
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});
import { ApiClient } from '../../../shared/transport/ApiClient';

describe('resource/getByNameGet.operation', () => {
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

		it('should include displayOptions in the parameter when provided', () => {
			const result = description({ show: { webResourceOperation: ['listGetResource'] } });
			expect((result[0] as any).displayOptions.show.webResourceOperation).toEqual(['listGetResource']);
		});

		it('should have correct placeholder', () => {
			const result = description({ show: {} });
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

		it('should get resource by name via GET', async () => {
			const mockData = { resourceName: 'myResource' };
			(new ApiClient(mockExecuteFunctions) as any).httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpGet).toHaveBeenCalledWith('/webhosting/resource/myResource');
		});

		it('should return resource data wrapped in array', async () => {
			const mockData = { resourceName: 'myResource' };
			(new ApiClient(mockExecuteFunctions) as any).httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const result = (mockExecuteFunctions.helpers.returnJsonArray as jest.Mock).mock.calls[0][0];
			expect(result).toEqual([mockData]);
		});
	});
});