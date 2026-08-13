/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './ipFirewallRuleDeleteDelete.operation';

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

describe('ipFirewallRuleDeleteDelete.operation', () => {
	describe('description', () => {
		it('should return the required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
			expect(result[0]).toMatchObject({ name: 'ip', type: 'string', required: true });
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
			client.httpDelete.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | boolean => {
				switch (param) {
					case 'ip':
						return '1.2.3.4/32';
					case 'ipOnFirewall':
						return '5.6.7.9';
					case 'sequence':
						return '5';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpDelete).toHaveBeenCalledWith('/ip/1.2.3.4%2F32/firewall/5.6.7.9/rule/5');
			expect(result).toMatchObject([mockData]);
		});
	});
});
