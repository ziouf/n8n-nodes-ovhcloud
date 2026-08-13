/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './formSendPost.operation';

jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	};
	return { ApiClient: jest.fn().mockImplementation(() => mockHttpClient) , getClient: jest.fn(() => mockHttpClient)};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('formSendPost.operation', () => {
	describe('description', () => {
		it('should return form and type parameters', () => {
			const result = description({ show: {} });
			expect(result).toHaveLength(2);
			expect(result[0]).toMatchObject({
				displayName: 'Form',
				name: 'form',
				type: 'json',
				default: '[]',
				required: true,
			});
			expect(result[1]).toMatchObject({
				displayName: 'Type',
				name: 'type',
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

		it('should send a form via POST', async () => {
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpPost.mockResolvedValue({});

			mockExecuteFunctions.getNodeParameter.mockImplementation((param: string): any => {
				switch (param) {
					case 'form':
						return [{ key: 'email', value: 'user@example.com' }];
					case 'type':
						return 'form';
					default:
						return undefined;
				}
			});

			const result = await execute.call(mockExecuteFunctions);
			expect(client.httpPost).toHaveBeenCalledWith('/contact/form/send', {
				form: [{ key: 'email', value: 'user@example.com' }],
				type: 'form',
			});
			expect(result).toEqual([{ success: true }]);
		});
	});
});
