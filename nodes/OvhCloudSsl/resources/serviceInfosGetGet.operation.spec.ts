/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceInfosGetGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('serviceInfosGetGet.operation', () => {
	describe('description', () => {
		it('should return certificate id parameter', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Certificate ID',
				name: 'certificateId',
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

		it('should get SSL service infos via GET', async () => {
			const mockData = { serviceId: 12345 };
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'certificateId') return 'cert-123';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(client.httpGet).toHaveBeenCalledWith('/ssl/cert-123/serviceInfos');
			expect(result).toMatchObject([mockData]);
		});
	});
});
