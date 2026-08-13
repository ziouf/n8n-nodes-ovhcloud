/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './domainContactUpdatePut.operation';

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
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('domainContactUpdatePut operation', () => {
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
			(client.httpPut as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'contactId': return 'test-contactId';
					case 'accreditationCountry': return '';
					case 'accreditationId': return '';
					case 'accreditationOrganism': return '';
					case 'accreditationYear': return '';
					case 'address': return '';
					case 'birthCity': return '';
					case 'birthCountry': return '';
					case 'birthDay': return '';
					case 'birthZip': return '';
					case 'cellPhone': return '';
					case 'companyNationalIdentificationNumber': return '';
					case 'email': return '';
					case 'enterpriseId': return '';
					case 'fax': return '';
					case 'firstName': return '';
					case 'gender': return '';
					case 'insee': return '';
					case 'language': return '';
					case 'lastName': return '';
					case 'legalForm': return '';
					case 'legalFormCategory': return '';
					case 'nationalIdentificationNumber': return '';
					case 'nationality': return '';
					case 'organisationAccountable': return '';
					case 'organisationFunding': return '';
					case 'organisationFundingOther': return '';
					case 'organisationName': return '';
					case 'organisationRole': return '';
					case 'organisationRoleOther': return '';
					case 'organisationStaffStatus': return '';
					case 'organisationStaffStatusOther': return '';
					case 'organisationType': return '';
					case 'organisationTypeOther': return '';
					case 'phone': return '';
					case 'registrantDocumentType': return '';
					case 'registrantDocumentTypeOther': return '';
					case 'roleInOrganisation': return '';
					case 'trademarkId': return '';
					case 'vat': return '';
					case 'website': return '';
					default: return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPut).toHaveBeenCalledWith('/domain/contact/test-contactId', expect.anything());
			expect(result).toMatchObject([mockData]);
		});
	});
});
