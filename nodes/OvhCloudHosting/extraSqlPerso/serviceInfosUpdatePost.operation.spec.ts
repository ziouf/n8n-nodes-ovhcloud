/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceInfosUpdatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue({}),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('extraSqlPerso.serviceInfosUpdatePost.operation', () => {
	describe('description', () => {
		it('should include the renew fields', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(7);
			expect(result[2]).toMatchObject({ name: 'renewAutomatic', type: 'boolean' });
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

		it('should update the service infos via POST with the renew body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'id') return 12345;
				if (param === 'renewAutomatic') return true;
				if (param === 'renewDeleteAtExpiration') return false;
				if (param === 'renewForced') return false;
				if (param === 'renewManualPayment') return true;
				if (param === 'renewPeriod') return 12;
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/extraSqlPerso/12345/serviceInfosUpdate',
				{
					renew: {
						automatic: true,
						deleteAtExpiration: false,
						forced: false,
						manualPayment: true,
						period: 12,
					},
				},
			);
			expect(result).toMatchObject([{}]);
		});
	});
});
