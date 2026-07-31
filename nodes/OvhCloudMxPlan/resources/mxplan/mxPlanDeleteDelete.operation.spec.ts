/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './mxPlanDeleteDelete.operation';

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

describe('mxPlanDeleteDelete.operation', () => {
	describe('description', () => {
		it('should return serviceName parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
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

		it('should delete an MX plan via DELETE', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpDelete.mockResolvedValue(undefined);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'serviceName') return 'email123';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpDelete).toHaveBeenCalledWith('/email/mxplan/email123');
			expect(result).toEqual([{ serviceName: 'email123', deleted: true }]);
		});
	});
});
