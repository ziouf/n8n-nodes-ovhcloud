/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './usageStatisticsGet.operation';

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

describe('usageStatisticsGet.operation', () => {
	describe('description', () => {
		it('should return serviceName and timePeriod parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Office Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'Time Period',
					name: 'timePeriod',
					type: 'options',
					default: 'lastMonth',
					options: [
						{ name: 'Last Month', value: 'lastMonth' },
						{ name: 'Last Quarter', value: 'lastQuarter' },
						{ name: 'Last Week', value: 'lastWeek' },
						{ name: 'Last Year', value: 'lastYear' },
					],
					required: true,
				}),
			);
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
		});

		it('should offer the four license periods sorted by name', () => {
			const result = description({ show: {} });
			const timePeriodProp = result[1] as any;
			expect(timePeriodProp.options.map((o: any) => o.value)).toEqual([
				'lastMonth',
				'lastQuarter',
				'lastWeek',
				'lastYear',
			]);
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

		it('should get usage statistics via GET with timePeriod query param', async () => {
			const mockData = [
				{ date: '2026-07-01', lines: [{ licenceId: 1, peakCount: 5 }] },
				{ date: '2026-07-02', lines: [{ licenceId: 1, peakCount: 6 }] },
			];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'csp2-12345';
					switch (param) {
						case 'serviceName':
							return 'csp2-12345';
						case 'timePeriod':
							return 'lastMonth';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/saas/csp2/csp2-12345/usageStatistics', {
				timePeriod: 'lastMonth',
			});

			expect(result).toEqual(mockData);
		});

		it('should encode special characters in serviceName', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

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
			expect(client.httpGet).toHaveBeenCalledWith('/saas/csp2/csp%202/usageStatistics', {
				timePeriod: '',
			});
		});
	});
});
