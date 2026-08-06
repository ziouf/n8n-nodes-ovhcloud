/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './gatewayUpdatePut.operation';

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

describe('region gatewayUpdatePut operation', () => {
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
				if (param === 'id') return 'test-id';
				if (param === 'name') return 'test-name';
				if (param === 'model') return 'test-model';
				return undefined;
			});

			const result = await execute.call(mockExecuteFunctions);
expect(client.httpPut).toHaveBeenCalledWith('/publicCloud/project/12345678-1234-1234-1234-1234567890ab/region/GRA63/gateway/test-id', expect.any(Object));
			expect(result).toBeDefined();
		});
	});
});
