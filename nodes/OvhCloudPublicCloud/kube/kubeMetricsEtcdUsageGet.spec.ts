/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './kubeMetricsEtcdUsageGet.operation';

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

describe('kubeMetricsEtcdUsageGet operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
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

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | number | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'kubeId':
							return 'test-kube-id';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalled();
			expect(result).toMatchObject([mockData]);
		});


		it('should return etcd usage metrics', async () => {
			const mockData = { used: 50, total: 100 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'kubeId') return 'test-kube-id';
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/kube/test-kube-id/metrics/etcdUsage');
			expect(result).toMatchObject([mockData]);
		});

		it('should throw error for missing project ID', async () => {
			mockExecuteFunctions.getNodeParameter.mockReturnValue('');

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow();
		});
	});
});
