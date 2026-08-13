/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userChangeProperties.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient, getClient } from '../../../shared/transport/ApiClient';

describe('userChangeProperties.operation', () => {
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
				if (param === 'userId') return 1;
				if (param === 'canManageIpFailOvers') return true;
				if (param === 'canManageNetwork') return true;
				if (param === 'canManageRights') return true;
				if (param === 'email') return 'value';
				if (param === 'encryptionRight') return true;
				if (param === 'firstName') return 'value';
				if (param === 'fullAdminRo') return true;
				if (param === 'lastName') return 'value';
				if (param === 'nsxRight') return true;
				if (param === 'phoneNumber') return 'value';
				if (param === 'receiveAlerts') return true;
				if (param === 'tokenValidator') return true;
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 12345 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(getClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPost).toHaveBeenCalledWith('/dedicatedCloud/pcc-123-456-789/user/1/changeProperties', { canManageIpFailOvers: true, canManageNetwork: true, canManageRights: true, email: "value", encryptionRight: true, firstName: "value", fullAdminRo: true, lastName: "value", nsxRight: true, phoneNumber: "value", receiveAlerts: true, tokenValidator: true });
		});
	});
});
