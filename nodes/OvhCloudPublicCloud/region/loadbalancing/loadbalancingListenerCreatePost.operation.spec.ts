/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './loadbalancingListenerCreatePost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('region loadbalancingListenerCreatePost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(1);
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
			const mockData = { id: 'test-id', status: 'active' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | number | boolean | undefined => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'regionName') return 'GRA63';
				if (param === 'name') return 'test-name';
				if (param === 'protocol') return 'test-protocol';
				if (param === 'port') return 1;
				if (param === 'loadbalancerId') return 'test-loadbalancerId';
				if (param === 'defaultPoolId') return 'test-defaultPoolId';
				if (param === 'certificateId') return 'test-certificateId';
				if (param === 'description') return 'test-description';
				if (param === 'timeoutClientData') return 1;
				if (param === 'timeoutMemberData') return 1;
				if (param === 'tlsVersions') return 'test-tlsVersions';
				if (param === 'allowedCidrs') return 'test-allowedCidrs';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions);
expect(client.httpPost).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/loadbalancing/listener', expect.any(Object));
			expect(result).toBeDefined();
		});
	});
});
