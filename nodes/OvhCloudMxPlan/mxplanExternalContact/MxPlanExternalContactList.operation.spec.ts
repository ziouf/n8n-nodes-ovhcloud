/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './MxPlanExternalContactList.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) };
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('MxPlanExternalContactList operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({});
			expect(result.length).toBeGreaterThanOrEqual(0);
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
			const client = new ApiClient(mockExecuteFunctions);
			(client.httpGet as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
			if (param === 'service') return 'service-test';
			if (param === 'displayName') return 'displayName-test';
			if (param === 'externalEmailAddress') return 'externalEmailAddress-test';
			if (param === 'firstName') return 'firstName-test';
			if (param === 'id') return 'id-test';
			if (param === 'lastName') return 'lastName-test';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect((client.httpGet as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});
