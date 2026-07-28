/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './domainUpdate.operation';

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

describe('domainUpdate.operation', () => {
	describe('description', () => {
		it('should return service name parameter only', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Domain Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: {},
				required: true,
			});
		});

		it('should have only name mode for service locator (no list method)', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			expect(serviceNameProp.modes).toHaveLength(1);
			expect(serviceNameProp.modes.map((m: any) => m.name)).toEqual(['name']);
		});

		it('should have correct placeholder', () => {
			const result = description({ show: {} });
			const serviceNameProp = result[0] as any;
			const nameMode = serviceNameProp.modes.find((m: any) => m.name === 'name');
			expect(nameMode.placeholder).toBe('example.com');
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

		it('should update domain via PUT', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ ok: true });

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'serviceName':
							return 'example.com';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/domain/example.com', {});
			expect(result).toMatchObject([{ ok: true }]);
		});
	});
});
