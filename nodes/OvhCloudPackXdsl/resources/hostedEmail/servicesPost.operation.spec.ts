/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './servicesPost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('servicesPost.operation', () => {
	describe('description', () => {
		it('should return packName, email and password parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Pack Xdsl Service Name',
				name: 'packName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Email',
				name: 'email',
				type: 'string',
				placeholder: 'name@email.com',
				default: '',
				required: true,
			});
			expect(result[2]).toMatchObject({
				displayName: 'Password',
				name: 'password',
				type: 'string',
				typeOptions: { password: true },
				default: '',
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

		it('should activate a Hosted Email service via POST', async () => {
			const mockData = { taskId: 12345 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'packabcd-ovh';
					switch (param) {
						case 'packName':
							return 'packabcd-ovh';
						case 'email':
							return 'test@example.com';
						case 'password':
							return 'secret123';
						default:
							return def ?? undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/packabcd-ovh/hostedEmail/services', {
				email: 'test@example.com',
				password: 'secret123',
			});
			expect(result).toEqual([mockData]);
		});

		it('should encode special characters in packName', async () => {
			const mockData = { taskId: 67890 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string, _idx?: number, def?: any, opts?: any): any => {
					if (opts?.extractValue && param === 'packName') return 'pack abcd';
					switch (param) {
						case 'packName':
							return 'pack abcd';
						case 'email':
							return 'test@example.com';
						case 'password':
							return 'secret123';
						default:
							return def ?? undefined;
					}
				},
			);

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/pack/xdsl/pack%20abcd/hostedEmail/services', {
				email: 'test@example.com',
				password: 'secret123',
			});
		});
	});
});
