/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceAllowedDestinationIpGet.operation';

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

describe('directadmin {serviceName}AllowedDestinationIpGET operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
		});
		it('should have a serviceName resourceLocator parameter', () => {
			const result = description({ show: {} });
			const serviceNameProp = result.find((p: any) => p.name === 'serviceName')!
			expect(serviceNameProp).toBeDefined();
			expect(serviceNameProp.type).toBe('resourceLocator');
			expect(serviceNameProp.required).toBe(true);
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

		it('should call the correct API endpoint', async () => {
			const mockData = { success: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string, _idx?: number, def?: any, opts?: any): any => {
				if (param === 'serviceName') {
					if (opts?.extractValue) return 'test-license';
					return 'test-license';
				}
				return def ?? '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpGet as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toEqual([mockData]);
		});
	});
});
