/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './getAlldomByServiceName.operation';

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

describe('getAlldomByServiceName.operation', () => {
	describe('description', () => {
		it('should return parameters array with serviceName resourceLocator', () => {
			const result = description();
			expect(result).toHaveLength(1);
			expect(result[0].name).toBe('serviceName');
			expect(result[0].type).toBe('resourceLocator');
		});

		it('should have list mode with searchListMethod', () => {
			const result = description() as any;
			const modes = result[0].modes || [];
			expect(modes.length).toBeGreaterThanOrEqual(1);
			expect(modes.find((m: any) => m.name === 'list')?.typeOptions?.searchListMethod).toBe(
				'searchAlldom',
			);
		});

		it('should have name mode for By Name', () => {
			const result = description() as any;
			const modes = result[0].modes || [];
			expect(modes.find((m: any) => m.name === 'name')?.type).toBe('string');
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

		it('should get alldom details by service name via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockReturnValue({ value: 'alldom1.ovh.net' });
			client.httpGet.mockResolvedValue({ id: 1, alldomName: 'alldom1.ovh.net' });

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/alldom/alldom1.ovh.net');
		});

		it('should encode service name in URL', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockReturnValue({ value: 'example.com' });
			client.httpGet.mockResolvedValue({ id: 1, alldomName: 'example.com' });

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/alldom/example.com');
		});
	});
});
