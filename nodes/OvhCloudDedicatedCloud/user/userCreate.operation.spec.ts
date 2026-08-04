/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userCreate.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('userCreate.operation', () => {
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
				if (param === 'canAddRessource') return true;
				if (param === 'canManageRights') return true;
				if (param === 'email') return 'value';
				if (param === 'encryptionRight') return true;
				if (param === 'expirationDate') return 'value';
				if (param === 'firstName') return 'value';
				if (param === 'lastName') return 'value';
				if (param === 'name') return 'value';
				if (param === 'networkRole') return 'value';
				if (param === 'nsxRight') return true;
				if (param === 'password') return 'value';
				if (param === 'phoneNumber') return 'value';
				if (param === 'receiveAlerts') return true;
				if (param === 'right') return 'value';
				if (param === 'tokenValidator') return true;
				if (param === 'vmNetworkRole') return 'value';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 12345 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPost).toHaveBeenCalledWith('/dedicatedCloud/pcc-123-456-789/user', { canAddRessource: true, canManageRights: true, email: "value", encryptionRight: true, expirationDate: "value", firstName: "value", lastName: "value", name: "value", networkRole: "value", nsxRight: true, password: "value", phoneNumber: "value", receiveAlerts: true, right: "value", tokenValidator: true, vmNetworkRole: "value" });
		});
	});
});
