/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './creationRulesPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('creationRulesPost.operation', () => {
	describe('description', () => {
		it('should return all identifier fields including the action field', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(28);
			expect(result[0]).toMatchObject({
				displayName: 'Action',
				name: 'action',
				type: 'string',
				default: '',
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

		it('should retrieve creation rules via GET with query parameters', async () => {
			const mockData = [
				{
					defaultValue: '',
					examples: ['FR'],
					fieldName: 'country',
					mandatory: true,
					regularExpression: '^[A-Z]{2}$',
				},
			];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					if (param === 'action') return 'create';
					if (param === 'country') return 'FR';
					if (param === 'legalform') return 'individual';
					if (param === 'ovhCompany') return 'ovh';
					if (param === 'ovhSubsidiary') return 'FR';
					return def ?? '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/newAccount/creationRules', {
				country: 'FR',
				legalform: 'individual',
				ovhCompany: 'ovh',
				ovhSubsidiary: 'FR',
			});
			expect(result).toEqual(mockData);
		});
	});
});
