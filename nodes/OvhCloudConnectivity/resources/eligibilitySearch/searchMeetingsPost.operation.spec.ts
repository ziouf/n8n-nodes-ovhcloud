/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './searchMeetingsPost.operation';

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

describe('searchMeetingsPost.operation', () => {
	describe('description', () => {
		it('should return the correct number of parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(9);
			expect(result[0]).toMatchObject({
				name: 'eligibilityReference',
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

		it('should call the correct API endpoint via POST', async () => {
			const mockData = { id: 'resp-1', status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'eligibilityReference':
										return 'sample-value';
									case 'installationType':
										return "activate";
									case 'otp':
										return 'sample-value';
									case 'planCode':
										return 'sample-value';
									case 'productCode':
										return 'sample-value';
									case 'siteCompanyName':
										return 'sample-value';
									case 'technicalVisit':
										return "complex";
									case 'type':
										return "ADSL";
									case 'unbundlingType':
										return "full";
									default:
										return def ?? undefined;
								}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/connectivity/eligibility/search/meetings', { eligibilityReference: 'sample-value', installationType: 'activate', otp: 'sample-value', planCode: 'sample-value', productCode: 'sample-value', siteCompanyName: 'sample-value', technicalVisit: 'complex', type: 'ADSL', unbundlingType: 'full' });
			expect(result).toEqual([mockData]);
		});

		it('should omit empty optional parameters from the request', async () => {
			const mockData = { id: 'resp-2', status: 'ok' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
								if (opts?.extractValue && param === 'serviceName') return undefined;
								switch (param) {
									case 'eligibilityReference':
										return '';
									case 'installationType':
										return '';
									case 'otp':
										return '';
									case 'planCode':
										return '';
									case 'productCode':
										return '';
									case 'siteCompanyName':
										return '';
									case 'technicalVisit':
										return '';
									case 'type':
										return '';
									case 'unbundlingType':
										return '';
									default:
										return def ?? undefined;
								}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/connectivity/eligibility/search/meetings', {});
		});
	});
});