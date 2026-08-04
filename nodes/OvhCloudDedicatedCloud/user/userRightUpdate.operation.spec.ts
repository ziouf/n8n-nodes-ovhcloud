/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './userRightUpdate.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = { httpGet: jest.fn(), httpPost: jest.fn(), httpPut: jest.fn(), httpDelete: jest.fn() };
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('userRightUpdate.operation', () => {
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

		it('should call the correct endpoint', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'rightId') return 1;
				if (param === 'serviceName') return 'pcc-123-456-789';
				if (param === 'userId') return 1;
				if (param === 'canAddRessource') return true;
				if (param === 'networkRole') return 'value';
				if (param === 'right') return 'value';
				if (param === 'vmNetworkRole') return 'value';
				return undefined;
			});

			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ id: 12345 });

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(ApiClient).toHaveBeenCalled();
			expect(result).toBeDefined();
			expect(client.httpPut).toHaveBeenCalledWith('/dedicatedCloud/pcc-123-456-789/user/1/right/1', { canAddRessource: true, networkRole: "value", right: "value", vmNetworkRole: "value" });
		});
	});
});
