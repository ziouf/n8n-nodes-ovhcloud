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
		it('should return recipients and content parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Recipients',
				name: 'recipients',
				type: 'string',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Content',
				name: 'content',
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

		it('should send an SMS via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue('task-123');

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'recipients':
						return '+33612345678,+33687654321';
					case 'content':
						return 'Hello World';
					default:
						return '';
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/sms', {
				recipients: ['+33612345678', '+33687654321'],
				content: 'Hello World',
			});
			expect(result).toEqual([{ taskName: 'task-123' }]);
		});
	});
});
