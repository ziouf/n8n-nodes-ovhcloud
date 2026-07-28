/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './templateApplyPost.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('templateApplyPost.operation', () => {
	describe('description', () => {
		it('should return serviceName and template parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({ displayName: 'VPS Service Name' });
			expect(result[1]).toMatchObject({ name: 'template' });
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

		it('should apply netboot template via POST', async () => {
			const mockData = {};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string =>
				param === 'serviceName' ? 'vps1234567.ovh.net' : param === 'template' ? 'centos' : '',
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/vps/vps1234567.ovh.net/netboot/order/applyTemplate',
				{ template: 'centos' },
			);
		});
	});
});
