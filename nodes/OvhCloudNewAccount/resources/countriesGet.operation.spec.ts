/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './countriesGet.operation';

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

describe('countriesGet.operation', () => {
	describe('description', () => {
		it('should return ovhCompany and ovhSubsidiary parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'OVH Company',
				name: 'ovhCompany',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'OVH Subsidiary',
				name: 'ovhSubsidiary',
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

		it('should get countries for an OVH company and subsidiary via GET', async () => {
			const mockData = ['FR', 'GB', 'DE'];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any): any => {
					if (param === 'ovhCompany') return 'ovh';
					if (param === 'ovhSubsidiary') return 'FR';
					return def ?? '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/newAccount/countries', {
				ovhCompany: 'ovh',
				ovhSubsidiary: 'FR',
			});
			expect(result).toEqual(mockData);
		});
	});
});
