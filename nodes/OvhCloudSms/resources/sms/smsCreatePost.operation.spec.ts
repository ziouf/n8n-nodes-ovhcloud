/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './smsCreatePost.operation';

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

describe('smsCreatePost.operation', () => {
	describe('description', () => {
		it('should return serviceName and message parameters', () => {
			const result = description({ show: {} });
			expect(result.length).toBeGreaterThan(0);
			expect(result[0]).toMatchObject({
				displayName: 'Service Name',
				name: 'serviceName',
				type: 'resourceLocator',
				default: { mode: 'list', value: '' },
				required: true,
			});
			expect(result.find((p: any) => p.name === 'message')).toMatchObject({
				displayName: 'Content',
				name: 'message',
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

		it('should send an SMS via POST /sms/{serviceName}/jobs', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({
				ids: [1],
				totalCreditsRemoved: 1,
				validReceivers: ['+33612345678', '+33687654321'],
				invalidReceivers: [],
				tag: 'test',
			});

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'serviceName':
						return 'sms-123';
					case 'receivers':
						return '+33612345678,+33687654321';
					case 'message':
						return 'Hello World';
					case 'sender':
						return '+33600000000';
					case 'tag':
						return 'my-tag';
					case 'charset':
						return 'UTF-8';
					case 'coding':
						return '7bit';
					case 'class':
						return 'phoneDisplay';
					case 'priority':
						return 'high';
					case 'differedPeriod':
						return 0;
					case 'validityPeriod':
						return 0;
					case 'noStopClause':
						return false;
					case 'senderForResponse':
						return false;
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/sms/sms-123/jobs', {
				message: 'Hello World',
				receivers: ['+33612345678', '+33687654321'],
				sender: '+33600000000',
				tag: 'my-tag',
				charset: 'UTF-8',
				coding: '7bit',
				class: 'phoneDisplay',
				priority: 'high',
			});
			expect(result).toEqual([
				{
					ids: [1],
					totalCreditsRemoved: 1,
					validReceivers: ['+33612345678', '+33687654321'],
					invalidReceivers: [],
					tag: 'test',
				},
			]);
		});
	});
});
