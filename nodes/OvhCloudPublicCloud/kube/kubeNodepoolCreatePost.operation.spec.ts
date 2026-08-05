/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './kubeNodepoolCreatePost.operation';

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

describe('kubeNodepoolCreatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
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
			const mockData = { id: 'np-123', name: 'my-nodepool', size: 2 };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | number | undefined => {
					switch (param) {
						case 'publicCloudProjectId':
							return '12345678-1234-1234-1234-1234567890ab';
						case 'kubeId':
							return 'test-kube-id';
						case 'name':
							return 'my-nodepool';
						case 'flavorName':
							return 'standard';
						case 'size':
							return 2;
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith(
				'/cloud/project/12345678-1234-1234-1234-1234567890ab/kube/test-kube-id/nodepool',
				{ name: 'my-nodepool', flavorName: 'standard', size: 2 },
			);
			expect(result).toMatchObject([mockData]);
		});

		it('should throw error when name is missing', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'kubeId') return 'test-kube-id';
					if (param === 'name') return '';
					return '';
				},
			);

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow(
				'Name is required to create a nodepool',
			);
		});

		it('should throw error when flavor name is missing', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'kubeId') return 'test-kube-id';
					if (param === 'name') return 'my-nodepool';
					if (param === 'flavorName') return '';
					return '';
				},
			);

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow(
				'Flavor name is required to create a nodepool',
			);
		});
	});
});
