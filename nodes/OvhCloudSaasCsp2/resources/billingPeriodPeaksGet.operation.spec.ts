/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './billingPeriodPeaksGet.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('billingPeriodPeaksGet.operation', () => {
	describe('description', () => {
		it('should return serviceName resourceLocator parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Office Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
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

		it('should call the correct API endpoint via GET', async () => {
			const mockData = {
				startDate: '2026-01-01',
				endDate: '2026-01-31',
				lines: [{ licenceId: 1, licenceName: 'Office', peakCount: 5 }],
			};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'csp2-12345';
					switch (param) {
						case 'serviceName':
							return 'csp2-12345';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/saas/csp2/csp2-12345/billingPeriodPeaks');

			expect(result).toEqual([mockData]);
		});

		it('should encode special characters in serviceName', async () => {
			const mockData = { ok: true };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'csp 2';
					switch (param) {
						case 'serviceName':
							return 'csp 2';
						default:
							return undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/saas/csp2/csp%202/billingPeriodPeaks');
		});
	});
});
