/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './listDomains.operation';

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

describe('listDomains.operation', () => {
	describe('description', () => {
		it('should return parameters array with filter collection', () => {
			const result = description();
			expect(result).toHaveLength(1);
			expect(result[0].name).toBe('filter');
			expect(result[0].type).toBe('collection');
		});

		it('should have projectId and statuses options in filter', () => {
			const result = description() as any;
			const options = result[0].options || [];
			expect(options.some((o: any) => o.name === 'projectId')).toBe(true);
			expect(options.some((o: any) => o.name === 'statuses')).toBe(true);
		});

		it('should have multiple status options', () => {
			const result = description() as any;
			const statusesOption = (result[0].options || []).find((o: any) => o.name === 'statuses');
			expect(statusesOption?.options).toHaveLength(5);
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

		it('should list all domains via GET without filters', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockReturnValue({});
			client.httpGet.mockResolvedValue([{ id: 1, name: 'example.com' }]);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/name');
		});

		it('should list domains with projectId filter', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockReturnValue({ projectId: 'proj-123' });
			client.httpGet.mockResolvedValue([{ id: 1, name: 'example.com' }]);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/name?project_id=proj-123');
		});

		it('should list domains with statuses filter', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockReturnValue({ statuses: ['active'] });
			client.httpGet.mockResolvedValue([{ id: 1, name: 'example.com' }]);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/name?statuses=active');
		});

		it('should list domains with multiple statuses filter', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockReturnValue({
				projectId: 'proj-123',
				statuses: ['active', 'pending'],
			});
			client.httpGet.mockResolvedValue([{ id: 1, name: 'example.com' }]);

			await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith(
				'/domain/name?project_id=proj-123&statuses=active%2Cpending',
			);
		});
	});
});
