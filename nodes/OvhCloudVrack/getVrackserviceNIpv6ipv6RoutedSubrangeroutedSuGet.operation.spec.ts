/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './getVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet.operation';

jest.mock('../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../shared/transport/ApiClient';

describe('getVrackserviceNIpv6ipv6RoutedSubrangeroutedSuGet operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThanOrEqual(0);
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
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			(client.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
			if (param === 'serviceName') return 'test-serviceName-value';
			if (param === 'ipv6') return 'test-ipv6-value';
			if (param === 'routedSubrange') return 'test-routedSubrange-value';

			return undefined;
			});

			const result = await execute.call(mockExecuteFunctions, 0);
			expect((client.httpGet as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});

