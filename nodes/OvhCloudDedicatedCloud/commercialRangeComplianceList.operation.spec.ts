/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './commercialRangeComplianceList.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('commercialRangeComplianceList.operation', () => {
	describe('description', () => {
		it('should return the expected parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: unknown[]) => data) },
			};
		});

		it('should list compliant commercial ranges via GET and respect limit', async () => {
			const mockData = [{ name: 'range-01' }, { name: 'range-02' }];
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'returnAll') return false;
				if (param === 'limit') return 1;
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(client.httpGet).toHaveBeenCalledWith(
				'/dedicatedCloud/pcc-123-456-789/commercialRange/compliance',
			);
			expect(result).toMatchObject([{ name: 'range-01' }]);
		});
	});
});
