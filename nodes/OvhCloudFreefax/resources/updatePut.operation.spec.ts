/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './updatePut.operation';

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

describe('updatePut.operation', () => {
	describe('description', () => {
		it('should return serviceName and Freefax edit parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(7);
			expect(result[0]).toMatchObject({
				displayName: 'Freefax Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Fax Max Call',
				name: 'faxMaxCall',
				type: 'number',
				default: 3,
				required: true,
			});
		});

		it('should have list and name modes for the service locator', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(2);
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

		it('should update Freefax via PUT with all parameters', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr12345-ovh';
						case 'faxMaxCall':
							return 3;
						case 'faxQuality':
							return 'best';
						case 'faxTagLine':
							return 'My Custom Fax Header';
						case 'fromEmail':
							return 'sender@email.com';
						case 'fromName':
							return 'Sender Name';
						case 'redirectionEmail':
							return 'admin@email.com, support@email.com';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/freefax/fr12345-ovh', {
				faxMaxCall: 3,
				faxQuality: 'best',
				faxTagLine: 'My Custom Fax Header',
				fromEmail: 'sender@email.com',
				fromName: 'Sender Name',
				redirectionEmail: ['admin@email.com', 'support@email.com'],
			});
			expect(result).toEqual([{ serviceName: 'fr12345-ovh', success: true }]);
		});

		it('should update Freefax via PUT with only required faxMaxCall', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr12345-ovh';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/freefax/fr12345-ovh', {
				faxMaxCall: 3,
			});
		});

		it('should encode special characters in serviceName', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'serviceName') return 'fr 12345-ovh';
					switch (param) {
						case 'serviceName':
							return 'fr 12345-ovh';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/freefax/fr%2012345-ovh', {
				faxMaxCall: 3,
			});
		});
	});
});
