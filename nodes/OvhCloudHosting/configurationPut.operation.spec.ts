/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './configurationPut.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('configurationPut.operation', () => {
	describe('description', () => {
		it('should return service name and php version parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'PHP Version',
				name: 'phpVersion',
				type: 'options',
				// eslint-disable-next-line n8n-nodes-base/node-param-default-wrong-for-options
				default: '7.4',
			});
		});

		it('should include all PHP version options', () => {
			const result = description({ show: {} });
			const phpOption = result[1] as any;

			expect(phpOption.options).toHaveLength(4);
			const values = phpOption.options.map((o: any) => o.value);
			expect(values).toContain('7.4');
			expect(values).toContain('8.0');
			expect(values).toContain('8.1');
			expect(values).toContain('8.2');
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

		it('should update configuration with PHP version', async () => {
			const mockData = {};
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'phpVersion') return '8.2';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPut).toHaveBeenCalledWith('/hosting/web/myservice.ovh/configuration', {
				phpVersion: '8.2',
			});
			expect(result).toMatchObject([mockData]);
		});

		it('should update configuration without PHP version (empty body)', async () => {
			const mockData = {};
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'phpVersion') return '';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			const client = new ApiClient(mockExecuteFunctions) as any;
			expect(client.httpPut).toHaveBeenCalledWith('/hosting/web/myservice.ovh/configuration', {});
			expect(result).toMatchObject([mockData]);
		});
	});
});
