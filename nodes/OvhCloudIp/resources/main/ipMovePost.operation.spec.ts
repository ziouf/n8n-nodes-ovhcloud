/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './ipMovePost.operation';

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

describe('ipMovePost.operation', () => {
	describe('description', () => {
		it('should return the required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
			expect(result[0]).toMatchObject({ name: 'ip', type: 'string', required: true });
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;
		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: { returnJsonArray: jest.fn((data: any) => data) },
			};
		});

		it('should call the correct API endpoint', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): string | boolean => {
				switch (param) {
					case 'ip':
						return '1.2.3.4/32';
					case 'to':
						return 'vps-12345';
					case 'nexthop':
						return '5.6.7.8';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect(client.httpPost).toHaveBeenCalledWith('/ip/1.2.3.4%2F32/move', {
				to: 'vps-12345',
				nexthop: '5.6.7.8',
			});
			expect(result).toMatchObject([mockData]);
		});
	});
});
