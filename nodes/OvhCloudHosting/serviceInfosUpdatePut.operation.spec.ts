/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './serviceInfosUpdatePut.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('serviceInfosUpdatePut.operation', () => {
	describe('description', () => {
		it('should return serviceName and renewAutomatic parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Automatic Renewal',
				name: 'renewAutomatic',
				type: 'boolean',
				default: false,
			});
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				getInputData: jest.fn(() => [{ json: {} }]),
				helpers: { returnJsonArray: jest.fn((data) => data) },
			};
		});

		it('should PUT the serviceInfos endpoint with renewal body', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): any => {
					if (param === 'serviceName') return 'myservice.ovh';
					if (param === 'renewAutomatic') return true;
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPut).toHaveBeenCalledWith('/hosting/web/myservice.ovh/serviceInfos', {
				renew: { automatic: true },
			});
			expect(result).toHaveLength(1);
		});
	});
});
