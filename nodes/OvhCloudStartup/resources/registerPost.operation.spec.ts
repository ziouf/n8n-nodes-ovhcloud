/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './registerPost.operation';

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

describe('registerPost.operation', () => {
	describe('description', () => {
		it('should return all startup registration parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(13);
			expect(result[0]).toMatchObject({
				displayName: 'Awareness',
				name: 'awarness',
				type: 'options',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Company Name',
				name: 'companyName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[6]).toMatchObject({
				displayName: 'Product Name',
				name: 'productName',
				type: 'string',
				default: '',
				required: true,
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

		it('should register a startup via POST with all parameters', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					switch (param) {
						case 'awarness':
							return 'InternetSearch';
						case 'eventCode':
							return 'EVENT2026';
						case 'companyName':
							return 'MyStartup';
						case 'societyWebsite':
							return 'https://my-startup.com';
						case 'employeesNumber':
							return '10To19';
						case 'relatedIndustry':
							return 'AI_Wholesale';
						case 'productName':
							return 'MyProduct';
						case 'projectDescription':
							return 'Solving a critical problem';
						case 'businessModel':
							return 'B2B SaaS';
						case 'developmentStage':
							return 'Beta';
						case 'relatedTechnology':
							return '["ArtificialIntelligence", "Big_Data"]';
						case 'lastFundraising':
							return 'Seed';
						case 'plannedFundRaising':
							return 'Series_A';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/startup', {
				awarness: 'InternetSearch',
				eventCode: 'EVENT2026',
				company: {
					name: 'MyStartup',
					societyWebsite: 'https://my-startup.com',
					employeesNumber: '10To19',
					relatedIndustry: 'AI_Wholesale',
				},
				project: {
					productName: 'MyProduct',
					description: 'Solving a critical problem',
					businessModel: 'B2B SaaS',
					developmentStage: 'Beta',
					relatedTechnology: ['ArtificialIntelligence', 'Big_Data'],
				},
				fundRaising: {
					lastFundraising: 'Seed',
					plannedFundRaising: 'Series_A',
				},
			});
			expect(result).toEqual([{ success: true }]);
		});

		it('should register a startup via POST with only required fields', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					switch (param) {
						case 'awarness':
							return 'Partner';
						case 'companyName':
							return 'MyStartup';
						case 'productName':
							return 'MyProduct';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/startup', {
				awarness: 'Partner',
				company: { name: 'MyStartup' },
				project: { productName: 'MyProduct' },
			});
		});
	});
});
