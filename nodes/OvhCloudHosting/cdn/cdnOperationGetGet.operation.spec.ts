/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './cdnOperationGetGet.operation';

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

describe('hosting cdnOperationGetGet operation', () => {
	describe('description', () => {
		it('should return serviceName and operationId parameters', () => {
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
				displayName: 'Operation ID',
				name: 'operationId',
				type: 'number',
				default: 0,
				required: true,
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

		it('should GET the CDN operation by id', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({ id: 55, status: 'done' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'myservice.ovh';
				if (param === 'operationId') return 55;
				return 0;
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/myservice.ovh/cdn/operation/55');
			expect(result[0]).toMatchObject({ id: 55, status: 'done' });
		});
	});
});
