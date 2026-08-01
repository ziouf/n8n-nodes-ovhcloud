/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './recordGetGet.operation';

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

describe('recordGetGet.operation', () => {
	describe('description', () => {
		it('should return domainName and recordId parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Domain Name',
				name: 'domainName',
				type: 'string',
				default: '',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Record ID',
				name: 'recordId',
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

		it('should get a DNS zone record via GET', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue({ field: '@', type: 'A', value: '192.168.1.1' });

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

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpGet).toHaveBeenCalledWith('/domain/dnsZone/example.com/record/rec-123');
			expect(result).toEqual([{ field: '@', type: 'A', value: '192.168.1.1' }]);
		});
	});
});
