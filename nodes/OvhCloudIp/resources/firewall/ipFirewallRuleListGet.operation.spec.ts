/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute, IP_FIREWALL_RULE_FILTERS } from './ipFirewallRuleListGet.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('ipFirewallRuleListGet.operation', () => {
	describe('description', () => {
		it('should return the required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
			expect(result[0]).toMatchObject({ name: 'ip', type: 'string', required: true });
		});

		it('should include filter collection', () => {
			const result = description({ show: {} });
			const filterParam = result.find((p: any) => p.type === 'fixedCollection');
			expect(filterParam).toBeDefined();
			expect(filterParam?.name).toBe('filters');
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

		it('should call the correct API endpoint without filters (non-regression)', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '1.2.3.4/32';
					case 'ipOnFirewall':
						return '5.6.7.9';
					default:
						return {};
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/ip/1.2.3.4%2F32/firewall/5.6.7.9/rule',
				undefined,
			);
			expect(result).toMatchObject([mockData]);
		});

		it('should call the correct API endpoint with filter state=ok', async () => {
			const mockData = [{ id: 'rule-1' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '1.2.3.4/32';
					case 'ipOnFirewall':
						return '5.6.7.9';
					case 'filters':
						return { status: { value: 'ok' } };
					default:
						return {};
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/ip/1.2.3.4%2F32/firewall/5.6.7.9/rule', {
				state: 'ok',
			});
			expect(result).toMatchObject([mockData]);
		});

		it('should skip filter when state is empty', async () => {
			const mockData = [{ id: 'rule-1' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '1.2.3.4/32';
					case 'ipOnFirewall':
						return '5.6.7.9';
					case 'filters':
						return { status: { value: '' } };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/ip/1.2.3.4%2F32/firewall/5.6.7.9/rule',
				undefined,
			);
		});

		it('should handle multi-items with different itemIndex', async () => {
			const mockData = [{ id: 'rule-1' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'ip':
						return '1.2.3.4/32';
					case 'ipOnFirewall':
						return '5.6.7.9';
					case 'filters':
						return { status: { value: 'ok' } };
					default:
						return {};
				}
			});

			await execute.call(mockExecuteFunctions, 3);
			expect(client.httpGet).toHaveBeenCalledWith('/ip/1.2.3.4%2F32/firewall/5.6.7.9/rule', {
				state: 'ok',
			});
		});
	});

	describe('IP_FIREWALL_RULE_FILTERS', () => {
		it('should export filter definitions', () => {
			expect(IP_FIREWALL_RULE_FILTERS).toHaveLength(1);
			expect(IP_FIREWALL_RULE_FILTERS[0]!.queryParam).toBe('state');
			expect(IP_FIREWALL_RULE_FILTERS[0]!.type).toBe('options');
			expect(IP_FIREWALL_RULE_FILTERS[0]!.options).toHaveLength(3);
		});
	});
});
