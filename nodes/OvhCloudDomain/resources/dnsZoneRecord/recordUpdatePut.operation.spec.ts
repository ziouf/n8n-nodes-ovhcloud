/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './recordUpdatePut.operation';

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

describe('recordUpdatePut.operation', () => {
	describe('description', () => {
		it('should return domainName, recordId, and optional update fields', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(6);
			expect(result[0]).toMatchObject({
				displayName: 'Domain Name',
				name: 'domainName',
				type: 'string',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Record ID',
				name: 'recordId',
				type: 'string',
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

		it('should update a DNS zone record via PUT', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ field: '@', type: 'A', value: '10.0.0.1' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'recordId':
						return 'rec-123';
					case 'field':
						return '@';
					case 'type':
						return 'A';
					case 'value':
						return '10.0.0.1';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/domain/dnsZone/example.com/record/rec-123', {
				field: '@',
				type: 'A',
				value: '10.0.0.1',
			});
			expect(result).toEqual([{ field: '@', type: 'A', value: '10.0.0.1' }]);
		});

		it('should only send non-empty fields', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPut.mockResolvedValue({ value: '10.0.0.1' });

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'recordId':
						return 'rec-123';
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPut).toHaveBeenCalledWith('/domain/dnsZone/example.com/record/rec-123', {});
		});
	});
});
