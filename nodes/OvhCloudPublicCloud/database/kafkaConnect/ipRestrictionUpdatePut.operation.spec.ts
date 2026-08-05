/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './ipRestrictionUpdatePut.operation';

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

describe('Iprestrictionupdate operation', () => {
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

		it('should call the correct API endpoint, with body', async () => {
			const mockData = { id: 'test-id' };
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | number | boolean | undefined => {
				if (param === 'publicCloudProjectId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'clusterId') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'ipBlock') return '12345678-1234-1234-1234-1234567890ab';
				if (param === 'ip') return 'test-value';
				if (param === 'description') return 'test-value';
				return undefined;
			},
		);

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/cloud/project/12345678-1234-1234-1234-1234567890ab/database/kafkaConnect/12345678-1234-1234-1234-1234567890ab/ipRestriction/12345678-1234-1234-1234-1234567890ab', { ip: "test-value", description: "test-value" });
			expect(result).toMatchObject([mockData]);
		});
	});
})
