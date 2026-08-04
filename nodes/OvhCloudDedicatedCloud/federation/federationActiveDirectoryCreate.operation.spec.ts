/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './federationActiveDirectoryCreate.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('federationActiveDirectoryCreate.operation', () => {
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
				if (param === 'baseDnForGroups') return 'value';
				if (param === 'baseDnForUsers') return 'value';
				if (param === 'description') return 'value';
				if (param === 'domainAlias') return 'value';
				if (param === 'domainName') return 'value';
				if (param === 'ip') return 'value';
				if (param === 'ldapHostname') return 'value';
				if (param === 'ldapTcpPort') return 1;
				if (param === 'noSsl') return true;
				if (param === 'password') return 'value';
				if (param === 'sslThumbprint') return 'value';
				if (param === 'username') return 'value';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ id: 12345 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPost).toHaveBeenCalledWith('/dedicatedCloud/pcc-123-456-789/federation/activeDirectory', { baseDnForGroups: 'value', baseDnForUsers: 'value', description: 'value', domainAlias: 'value', domainName: 'value', ip: 'value', ldapHostname: 'value', ldapTcpPort: 1, noSsl: true, password: 'value', sslThumbprint: 'value', username: 'value' });
		});
	});
});
