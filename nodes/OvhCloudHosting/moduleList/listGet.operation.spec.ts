/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listGet.operation';

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

describe('moduleList.listGet.operation', () => {
	describe('description', () => {
		it('should return active, branch and latest parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
			expect(result[0]).toMatchObject({
				displayName: 'Active',
				name: 'active',
				type: 'boolean',
				default: false,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Branch',
				name: 'branch',
				type: 'string',
				default: '',
			});
			expect(result[2]).toMatchObject({
				displayName: 'Latest',
				name: 'latest',
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

		it('should GET the global moduleList endpoint with optional filters', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([1, 2, 3]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'active') return false;
				if (param === 'branch') return 'stable';
				if (param === 'latest') return false;
				return '';
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/moduleList', {
				branch: 'stable',
			});
			expect(result[0]).toMatchObject({ '0': 1, '1': 2, '2': 3 });
		});

		it('should call with empty query when no filters are set', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([1]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'active') return false;
				if (param === 'branch') return '';
				if (param === 'latest') return false;
				return '';
			});

			await execute.call(mockExecuteFunctions, 0);
			expect(client.httpGet).toHaveBeenCalledWith('/hosting/web/moduleList', {});
		});
	});
});
