/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceInfosUpdatePut.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('serviceInfosUpdatePut.operation', () => {
	describe('description', () => {
		it('should return the expected parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
			};
		});

		it('should call the correct endpoint', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'canDeleteAtExpiration') return true;
				if (param === 'contactAdmin') return 'value';
				if (param === 'contactBilling') return 'value';
				if (param === 'contactTech') return 'value';
				if (param === 'domain') return 'value';
				if (param === 'engagedUpTo') return 'value';
				if (param === 'expiration') return 'value';
				if (param === 'renewalType') return 'value';
				if (param === 'status') return 'value';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ id: 12345 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPut).toHaveBeenCalledWith('/storage/netapp/pcc-123-456-789/serviceInfos', { canDeleteAtExpiration: true, contactAdmin: "value", contactBilling: "value", contactTech: "value", domain: "value", engagedUpTo: "value", expiration: "value", renewalType: "value", status: "value" });
		});
	});
});
