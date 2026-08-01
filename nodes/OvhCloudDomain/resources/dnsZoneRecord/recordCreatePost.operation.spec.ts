/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './recordCreatePost.operation';

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

describe('recordCreatePost.operation', () => {
	describe('description', () => {
		it('should return domainName, field, type, value parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(5);
			expect(result[0]).toMatchObject({
				displayName: 'Domain Name',
				name: 'domainName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Field',
				name: 'field',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[3]).toMatchObject({
				displayName: 'Type',
				name: 'type',
				type: 'options',
				default: '',
				required: true,
			});
			expect(result[4]).toMatchObject({
				displayName: 'Value',
				name: 'value',
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

		it('should create a DNS zone record via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue('new-record-id');

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'field':
						return '@';
					case 'subdomain':
						return '';
					case 'type':
						return 'A';
					case 'value':
						return '192.168.1.1';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/domain/dnsZone/example.com/record', {
				field: '@',
				type: 'A',
				value: '192.168.1.1',
			});
			expect(result).toEqual([{ recordId: 'new-record-id' }]);
		});

		it('should include subdomain when provided', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue('new-record-id');

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'domainName':
						return 'example.com';
					case 'field':
						return 'www';
					case 'subdomain':
						return 'sub';
					case 'type':
						return 'CNAME';
					case 'value':
						return 'target.example.com';
					default:
						return '';
				}
			});

			await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/domain/dnsZone/example.com/record', {
				field: 'www',
				subdomain: 'sub',
				type: 'CNAME',
				value: 'target.example.com',
			});
		});
	});
});
