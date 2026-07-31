/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './kubeIpRestrictionsUpdatePut.operation';

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

describe('kubeIpRestrictionsUpdatePut operation', () => {
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
			const mockData = { ips: ['192.168.1.1'] };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
					if (param === 'kubeId') return 'test-kube-id';
					return '';
				},
			);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/kube/test-kube-id/ipRestrictions', {});
			expect(result).toMatchObject([mockData]);
		});

		it('should throw error for missing project ID', async () => {
			mockExecuteFunctions.getNodeParameter.mockReturnValue('');

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow();
		});
	});
});
