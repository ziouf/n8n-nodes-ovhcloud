/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceActivatePost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('hycu serviceActivatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
		});
		it('should have serviceName and licenseRequest parameters', () => {
			const result = description({ show: {} });
			const names = result.map((p: any) => p.name);
			expect(names).toContain('serviceName');
			expect(names).toContain('licenseRequest');
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
			(client.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (param === 'serviceName') {
						if (opts?.extractValue) return 'test-hycu';
						return 'test-hycu';
					}
					if (param === 'licenseRequest') return 'b64-encoded-license';
					return def ?? '';
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpPost as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toEqual([{ serviceName: 'test-hycu', success: true }]);
		});
	});
});
