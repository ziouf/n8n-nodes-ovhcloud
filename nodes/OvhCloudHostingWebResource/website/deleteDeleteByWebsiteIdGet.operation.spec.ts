/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './deleteDeleteByWebsiteIdGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpDelete: jest.fn(), httpGet: jest.fn(), httpPost: jest.fn() };;
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});
import { ApiClient } from '../../../shared/transport/ApiClient';

describe('website/deleteDeleteByWebsiteIdGet.operation', () => {
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
			const result = description({ show: { webResourceOperation: ['updatePutByWebsiteIdGet'] } });
			expect((result[0] as any).displayOptions.show.webResourceOperation).toEqual(['updatePutByWebsiteIdGet']);
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

		it('should delete website via DELETE', async () => {
			(new ApiClient(mockExecuteFunctions) as any).httpDelete.mockResolvedValue({ ok: true });
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpDelete).toHaveBeenCalledWith(
				'/webhosting/resource/myResource/website',
			);
		});

		it('should return empty object wrapped in array after delete', async () => {
			(new ApiClient(mockExecuteFunctions) as any).httpDelete.mockResolvedValue({ ok: true });
			mockExecuteFunctions.getNodeParameter.mockReturnValue('myResource');

			await execute.call(mockExecuteFunctions);

			const result = (mockExecuteFunctions.helpers.returnJsonArray as jest.Mock).mock.calls[0][0];
			expect(result).toEqual([{}]);
		});
	});
});