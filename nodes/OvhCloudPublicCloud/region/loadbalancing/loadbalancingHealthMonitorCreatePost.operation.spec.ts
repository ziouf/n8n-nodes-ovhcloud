/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './loadbalancingHealthMonitorCreatePost.operation';

jest.mock('../../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../../shared/transport/ApiClient';

describe('region loadbalancingHealthMonitorCreatePost operation', () => {
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
				if (param === 'monitorType') return 'test-monitorType';
				if (param === 'delay') return 1;
				if (param === 'timeout') return 1;
				if (param === 'maxRetries') return 1;
				if (param === 'maxRetriesDown') return 1;
				if (param === 'httpMethod') return 'test-httpMethod';
				if (param === 'httpPath') return 'test-httpPath';
				if (param === 'httpStatusCode') return 1;
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions);
expect(client.httpPost).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/loadbalancing/healthMonitor', expect.any(Object));
			expect(result).toBeDefined();
		});
	});
});
