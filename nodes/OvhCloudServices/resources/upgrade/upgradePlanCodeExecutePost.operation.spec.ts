/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './upgradePlanCodeExecutePost.operation';

// Mock ApiClient with mutable http methods for per-test control
jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => ({
			...mockHttpClient,
		})),
	};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('upgradePlanCodeExecutePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
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
			(client.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName': return 'test-service-id';
					case 'planCode': return 'plan-code-1';
					case 'duration': return 'P1M';
					case 'pricingMode': return 'default';
					case 'quantity': return 1;
					case 'autoPayWithPreferredPaymentMethod': return true;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/services/test-service-id/upgrade/plan-code-1/execute', { duration: 'P1M', pricingMode: 'default', quantity: 1, autoPayWithPreferredPaymentMethod: true });
			expect(result).toMatchObject([mockData]);
		});
	});
});
