/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './updateDomainByServiceName.operation';

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

describe('updateDomainByServiceName.operation', () => {
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
			expect(modes.find((m: any) => m.name === 'list')?.typeOptions?.searchListMethod).toBe(
				'searchDomain',
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

		it('should update domain with targetSpec via PUT', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'serviceName') return { value: 'example.com' };
				if (key === 'targetSpec') return { json: { contactsConfiguration: {} } };
				return {};
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/domain/name/example.com', {
				contactsConfiguration: {},
			});
		});

		it('should throw error when targetSpec is empty', async () => {
			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'serviceName') return { value: 'example.com' };
				if (key === 'targetSpec') return {};
				return {};
			});

			await expect(execute.call(mockExecuteFunctions)).rejects.toThrow(
				'A target spec body must be provided for domain update.',
			);
		});
	});
});
