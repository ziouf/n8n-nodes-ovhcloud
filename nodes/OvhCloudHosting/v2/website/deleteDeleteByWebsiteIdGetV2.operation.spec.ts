/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './deleteDeleteByWebsiteIdGetV2.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('v2/website/deleteDeleteByWebsiteIdGetV2.operation', () => {
	describe('description', () => {
		it('should return web hosting resource name parameter', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Web Hosting Resource Name',
				name: 'resourceName',
				type: 'string',
				default: '',
				required: true,
			});
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

		it('should delete a website via DELETE on the resource', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'resourceName') return 'myResourceName';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue({});

			const result = await execute.call(mockExecuteFunctions);

			expect(ApiClient).toHaveBeenCalled();
			expect(client.httpDelete).toHaveBeenCalledWith('/webhosting/resource/myResourceName/website');
			expect(result).toMatchObject([{}]);
		});
	});
});
