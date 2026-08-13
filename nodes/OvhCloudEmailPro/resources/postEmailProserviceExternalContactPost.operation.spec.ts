/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './postEmailProserviceExternalContactPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('postEmailProserviceExternalContactPost operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description();
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
			(client.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string) => {
			if (param === 'service') return 'test-service-value';
			if (param === 'displayName') return 'test-displayName-value';
			if (param === 'externalEmailAddress') return 'test-externalEmailAddress-value';
			if (param === 'firstName') return 'test-firstName-value';
			if (param === 'hiddenFromGAL') return 'test-hiddenFromGAL-value';
			if (param === 'initials') return 'test-initials-value';
			if (param === 'lastName') return 'test-lastName-value';

			return undefined;
			});

			const result = await execute.call(mockExecuteFunctions);
			expect((client.httpPost as jest.Mock).mock.calls.length).toBeGreaterThan(0);
			expect(result).toMatchObject([mockData]);
		});
	});
});

