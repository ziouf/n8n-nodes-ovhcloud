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
		it('should return the partner registration fields', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(19);
			expect(result[0]).toMatchObject({
				displayName: 'Account Name',
				name: 'accountName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[7]).toMatchObject({
				displayName: 'Contact Email',
				name: 'contactEmail',
				type: 'string',
				default: '',
				required: true,
			});
		});

		it('should mark only required fields as required', () => {
			const result = description({ show: {} });
			const requiredNames = result.filter((p) => p.required).map((p) => p.name);
			expect(requiredNames).toEqual([
				'accountName',
				'contactEmail',
				'contactFirstName',
				'contactLastName',
				'contactPhone',
				'contactPosition',
			]);
		});

		it('should provide position options', () => {
			const result = description({ show: {} });
			const position = result.find((p) => p.name === 'contactPosition') as any;
			expect(position.options.map((o: any) => o.value)).toContain('BusinessOwner');
			expect(position.options.map((o: any) => o.value)).toContain('Sales');
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

		it('should register a partner via POST with nested body', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					switch (param) {
						case 'accountName':
							return 'ACME Corp';
						case 'accountCity':
							return 'Roubaix';
						case 'accountCountry':
							return 'FR';
						case 'accountCompanyTurnover':
							return 1000000;
						case 'accountNumberOfEmployees':
							return '50To99';
						case 'accountPartnerType':
							return 'consultingCompany';
						case 'accountYearEstablished':
							return '2001';
						case 'contactEmail':
							return 'contact@acme.example';
						case 'contactFirstName':
							return 'Jane';
						case 'contactLastName':
							return 'Doe';
						case 'contactPhone':
							return '+33.612345678';
						case 'contactPosition':
							return 'Sales';
						case 'contactJobTitle':
							return 'Partner Manager';
						case 'partnershipAreaOfExpertise':
							return ['VPS', 'DC'];
						case 'partnershipEmailCommunication':
							return true;
						case 'partnershipPartnersProgramReason':
							return 'Grow our business';
						case 'partnershipSalesGrowthOpportunities':
							return 'Cloud migration';
						case 'partnershipSalesProjection':
							return 250000;
						case 'partnershipSupportAgreementStatement':
							return true;
						default:
							return def;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/partner', {
				account: {
					name: 'ACME Corp',
					city: 'Roubaix',
					country: 'FR',
					companyTurnover: 1000000,
					numberOfEmployees: '50To99',
					partnerType: 'consultingCompany',
					yearEstablished: '2001',
				},
				contact: {
					email: 'contact@acme.example',
					firstName: 'Jane',
					lastName: 'Doe',
					phone: '+33.612345678',
					position: 'Sales',
					jobTitle: 'Partner Manager',
				},
				partnership: {
					areaOfExpertise: ['VPS', 'DC'],
					emailCommunication: true,
					partnersProgramReason: 'Grow our business',
					salesGrowthOpportunities: 'Cloud migration',
					salesProjection: 250000,
					supportAgreementStatement: true,
				},
			});
			expect(result).toEqual([{ success: true }]);
		});

		it('should send only required account and contact fields when optional fields are empty', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					switch (param) {
						case 'accountName':
							return 'ACME Corp';
						case 'contactEmail':
							return 'contact@acme.example';
						case 'contactFirstName':
							return 'Jane';
						case 'contactLastName':
							return 'Doe';
						case 'contactPhone':
							return '+33.612345678';
						case 'contactPosition':
							return 'Sales';
						default:
							return def ?? '';
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/partner', {
				account: { name: 'ACME Corp' },
				contact: {
					email: 'contact@acme.example',
					firstName: 'Jane',
					lastName: 'Doe',
					phone: '+33.612345678',
					position: 'Sales',
				},
			});
		});
	});
});
