/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './recordListGet.operation';

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

describe('recordListGet.operation', () => {
	describe('description', () => {
		it('should return domainName parameter', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(1);
			expect(result[0]).toMatchObject({
				displayName: 'Domain Name',
				name: 'domainName',
				type: 'string',
				default: '',
				required: true,
			});
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

		it('should list DNS zone records via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(['record1-id', 'record2-id']);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'domainName') return 'example.com';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/dnsZone/example.com/record');
			expect(result).toEqual([{ recordId: 'record1-id' }, { recordId: 'record2-id' }]);
		});

		it('should handle empty records list', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue([]);

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				if (param === 'domainName') return 'example.com';
				return '';
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(result).toEqual([]);
		});
	});
});
