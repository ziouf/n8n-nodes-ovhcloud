/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './terminate.operation';

// Mock ApiClient
jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
	};
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('terminate.operation', () => {
	describe('description', () => {
		it('should return serviceId param', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(2);
			expect(result[0]).toEqual(
				expect.objectContaining({
					name: 'destructiveActionNotice',
					type: 'notice',
				}),
			);
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'Service ID',
					name: 'serviceId',
					type: 'string',
					default: '',
					required: true,
				}),
			);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: {
					returnJsonArray: jest.fn((data: any) => data),
				},
			};
		});

		it('should terminate a service', async () => {
			const mockData = { id: 123456, status: 'TERMINATED' };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockReturnValue('123456');

			await execute.call(mockExecuteFunctions);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/service/123456/terminate', {
				body: {},
			});
		});
	});
});
