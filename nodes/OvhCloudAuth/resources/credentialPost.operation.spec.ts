/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './credentialPost.operation';

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

describe('credentialPost.operation', () => {
	describe('description', () => {
		it('should return accessRules, allowedIPs and redirection parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Access Rules',
				name: 'accessRules',
				type: 'json',
				default: '[]',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Allowed IPs',
				name: 'allowedIPs',
				type: 'json',
				default: '[]',
			});
			expect(result[2]).toMatchObject({
				displayName: 'Redirection',
				name: 'redirection',
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

		it('should request a credential via POST with access rules', async () => {
			const mockData = {
				consumerKey: 'ck',
				state: 'pendingValidation',
				validationUrl: 'https://api.ovh.com/login/?credentialToken=xyz',
			};
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'accessRules':
						return [{ method: 'GET', path: '/me' }];
					case 'allowedIPs':
						return [];
					case 'redirection':
						return '';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/auth/credential', {
				accessRules: [{ method: 'GET', path: '/me' }],
			});
			expect(result).toEqual([mockData]);
		});

		it('should include allowedIPs and redirection when provided', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({ consumerKey: 'ck' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'accessRules':
						return [{ method: 'GET', path: '/me' }];
					case 'allowedIPs':
						return ['192.0.2.0/24'];
					case 'redirection':
						return 'https://example.com/callback';
					default:
						return undefined;
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/auth/credential', {
				accessRules: [{ method: 'GET', path: '/me' }],
				allowedIPs: ['192.0.2.0/24'],
				redirection: 'https://example.com/callback',
			});
		});
	});
});
