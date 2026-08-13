/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './ipServiceChangeContactPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('ipServiceChangeContactPost.operation', () => {
	describe('description', () => {
		it('should return the required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
			expect(result[0]).toMatchObject({ name: 'serviceName', type: 'string', required: true });
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: any) => data) },
			};
		});

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | boolean => {
				switch (param) {
					case 'serviceName':
						return 'ip-12345';
					case 'contactAdmin':
						return 'admin-ovh';
					case 'contactBilling':
						return 'billing-ovh';
					case 'contactTech':
						return 'tech-ovh';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/ip/service/ip-12345/changeContact', {
				contactAdmin: 'admin-ovh',
				contactBilling: 'billing-ovh',
				contactTech: 'tech-ovh',
			});
			expect(result).toMatchObject([mockData]);
		});
	});
});
