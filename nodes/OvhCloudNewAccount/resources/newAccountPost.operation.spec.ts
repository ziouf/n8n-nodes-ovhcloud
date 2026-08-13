/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './newAccountPost.operation';

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

describe('newAccountPost.operation', () => {
	describe('description', () => {
		it('should return all identifier fields without the action field', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(27);
			expect(result.some((p) => p.name === 'action')).toBe(false);
		});

		it('should mark the required fields as required', () => {
			const result = description({ show: {} });
			const requiredNames = result.filter((p) => p.required).map((p) => p.name);
			expect(requiredNames).toEqual([
				'country',
				'email',
				'legalform',
				'ovhCompany',
				'ovhSubsidiary',
			]);
		});

		it('should include country and legalform fields', () => {
			const result = description({ show: {} });
			const country = result.find((p) => p.name === 'country') as any;
			expect(country).toMatchObject({
				displayName: 'Country',
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

		it('should create a new identifier via POST', async () => {
			const mockData = {
				consumerKey: 'ck',
				ovhIdentifier: 'xx11111-ovh',
			};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					if (param === 'country') return 'FR';
					if (param === 'email') return 'user@example.com';
					if (param === 'legalform') return 'individual';
					if (param === 'ovhCompany') return 'ovh';
					if (param === 'ovhSubsidiary') return 'FR';
					if (param === 'firstname') return 'John';
					if (param === 'name') return 'Doe';
					return def ?? '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/newAccount', {
				country: 'FR',
				email: 'user@example.com',
				legalform: 'individual',
				ovhCompany: 'ovh',
				ovhSubsidiary: 'FR',
				firstname: 'John',
				name: 'Doe',
			});
			expect(result).toEqual([mockData]);
		});

		it('should omit empty optional fields from the body', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ ovhIdentifier: 'xx11111-ovh' });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					if (param === 'country') return 'FR';
					if (param === 'email') return 'user@example.com';
					if (param === 'legalform') return 'individual';
					if (param === 'ovhCompany') return 'ovh';
					if (param === 'ovhSubsidiary') return 'FR';
					return def ?? '';
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/newAccount', {
				country: 'FR',
				email: 'user@example.com',
				legalform: 'individual',
				ovhCompany: 'ovh',
				ovhSubsidiary: 'FR',
			});
		});
	});
});
