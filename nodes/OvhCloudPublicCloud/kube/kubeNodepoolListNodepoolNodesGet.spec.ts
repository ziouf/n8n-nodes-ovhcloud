/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './kubeNodepoolListNodepoolNodesGet.operation';

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

describe('kubeNodepoolListNodepoolNodesGet operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(3);
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
			const mockData = [{ id: 'node-1' }, { id: 'node-2' }];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'kubeId':
							return 'test-kube-id';
						case 'nodePoolId':
							return 'np-123';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/kube/test-kube-id/nodepool/np-123/nodes');
			expect(result).toHaveLength(2);
		});

		it('should throw error for missing project ID', async () => {
			mockExecuteFunctions.getNodeParameter.mockReturnValue('');

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow();
		});
	});
});
