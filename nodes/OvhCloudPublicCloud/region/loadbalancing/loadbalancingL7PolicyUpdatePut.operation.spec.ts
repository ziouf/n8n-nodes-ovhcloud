/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './loadbalancingL7PolicyUpdatePut.operation';

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

describe('region loadbalancingL7PolicyUpdatePut operation', () => {
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
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | number | boolean | undefined => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'regionName') return 'GRA63';
				if (param === 'l7PolicyId') return 'test-l7PolicyId';
				if (param === 'name') return 'test-name';
				if (param === 'action') return 'test-action';
				if (param === 'listenerId') return 'test-listenerId';
				if (param === 'position') return 1;
				if (param === 'redirectUrl') return 'test-redirectUrl';
				if (param === 'redirectPrefix') return 'test-redirectPrefix';
				if (param === 'redirectPoolId') return 'test-redirectPoolId';
				if (param === 'redirectHttpCode') return 1;
				if (param === 'description') return 'test-description';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions);
expect(client.httpPut).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/loadbalancing/l7Policy/test-l7PolicyId', expect.any(Object));
			expect(result).toBeDefined();
		});
	});
});
