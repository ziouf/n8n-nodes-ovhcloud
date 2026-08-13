/* eslint-disable @typescript-eslint/no-explicit-any */
import { execute } from './locationServiceInfosUpdatePost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn().mockResolvedValue({}),
		httpPost: jest.fn().mockResolvedValue({}),
		httpPut: jest.fn().mockResolvedValue({}),
		httpDelete: jest.fn().mockResolvedValue({}),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('localSeo.locationServiceInfosUpdatePost.operation', () => {
	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should update the location service infos via POST with the renew body', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'id') return 456;
				if (param === 'renewAutomatic') return true;
				if (param === 'renewDeleteAtExpiration') return false;
				if (param === 'renewForced') return false;
				if (param === 'renewManualPayment') return true;
				if (param === 'renewPeriod') return 12;
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPost).toHaveBeenCalledWith(
				'/hosting/web/myservice.ovh/localSeo/location/456/serviceInfosUpdate',
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
