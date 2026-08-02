/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './voicemailChangeRoutingPost.operation';

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

describe('voicemailChangeRoutingPost.operation', () => {
	describe('description', () => {
		it('should return serviceName and routing parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Freefax Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'Routing',
					name: 'routing',
					type: 'options',
					default: 'voicemail',
					options: [
						{ name: 'Fax', value: 'fax' },
						{ name: 'Voicemail', value: 'voicemail' },
					],
					required: true,
				}),
			);
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['list', 'name']);
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

		it('should change voicemail routing via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr12345-ovh';
						case 'routing':
							return 'voicemail';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/freefax/fr12345-ovh/voicemail/changeRouting', {
				routing: 'voicemail',
			});
			expect(result).toEqual([{ serviceName: 'fr12345-ovh', routing: 'voicemail', success: true }]);
		});

		it('should encode special characters in serviceName', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr 12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr 12345-ovh';
						case 'routing':
							return 'fax';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/freefax/fr%2012345-ovh/voicemail/changeRouting',
				{ routing: 'fax' },
			);
		});
	});
});
