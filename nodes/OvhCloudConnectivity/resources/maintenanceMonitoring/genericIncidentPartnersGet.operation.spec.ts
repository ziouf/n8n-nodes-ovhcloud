/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './genericIncidentPartnersGet.operation';

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

describe('genericIncidentPartnersGet.operation', () => {
	describe('description', () => {
		it('should return the correct number of parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				name: 'creationDate',
			});
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
			const mockData = [{ name: 'item-1' }, { name: 'item-2' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'creationDate':
										return 'sample-value';
									case 'endDate':
										return 'sample-value';
									case 'status':
										return "closed";
									default:
										return def ?? undefined;
								}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/connectivity/monitoring/genericIncident/partners', { creationDate: 'sample-value', endDate: 'sample-value', status: 'closed' });
			expect(result).toEqual([{ name: 'item-1' }, { name: 'item-2' }]);
		});

		it('should omit empty optional parameters from the request', async () => {
			const mockData = [{ name: 'item-1' }, { name: 'item-2' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'creationDate':
										return '';
									case 'endDate':
										return '';
									case 'status':
										return '';
									default:
										return def ?? undefined;
								}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/connectivity/monitoring/genericIncident/partners', {});
		});
	});
});