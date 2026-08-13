/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute } from './create.operation';

// Mock ApiClient
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => mockHttpClient),
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('create.operation', () => {
	describe('description', () => {
		it('should return all required parameters', () => {
			const result = description({ show: {} });

			expect(result).toHaveLength(5);
			expect(result[0]).toEqual(
				expect.objectContaining({
					displayName: 'Subject',
					name: 'subject',
					type: 'string',
					default: '',
					required: true,
				}),
			);
			expect(result[1]).toEqual(
				expect.objectContaining({
					displayName: 'Body',
					name: 'body',
					type: 'string',
					default: '',
				}),
			);
			expect(result[2]).toEqual(
				expect.objectContaining({
					displayName: 'Category',
					name: 'category',
					type: 'options',
					default: 'assistance', // eslint-disable-line n8n-nodes-base/node-param-default-wrong-for-options
				}),
			);
			expect(result[3]).toEqual(
				expect.objectContaining({
					displayName: 'Product',
					name: 'product',
					type: 'options',
					default: 'hosting', // eslint-disable-line n8n-nodes-base/node-param-default-wrong-for-options
				}),
			);
			expect(result[4]).toEqual(
				expect.objectContaining({
					displayName: 'Service Name',
					name: 'serviceName',
					type: 'resourceLocator',
					default: { mode: 'list', value: '' },
				}),
			);
		});

		it('should include correct category options', () => {
			const result = description({ show: {} });

			expect(result[2].options).toEqual(
				expect.arrayContaining([
					expect.objectContaining({ name: 'Assistance', value: 'assistance' }),
					expect.objectContaining({ name: 'Billing', value: 'billing' }),
					expect.objectContaining({ name: 'Incident', value: 'incident' }),
				]),
			);
		});

		it('should include correct product options (19 items)', () => {
			const result = description({ show: {} });
			const productOption = result[3];

			expect(productOption.options).toHaveLength(19);
			expect(productOption.options).toEqual(
				expect.arrayContaining([
					expect.objectContaining({ name: 'ADSL / SDSL', value: 'adsl' }),
					expect.objectContaining({ name: 'CDN', value: 'cdn' }),
					expect.objectContaining({ name: 'Public Cloud', value: 'publicCloud' }),
				]),
			);
		});
	});

	describe('execute', () => {
		let mockExecuteFunctions: any;

		beforeEach(() => {
			mockExecuteFunctions = {
				getNodeParameter: jest.fn(),
				helpers: {
					returnJsonArray: jest.fn((data: any) => data),
				},
			};
		});

		it('should create a new support ticket', async () => {
			const mockData = { ticketId: 123456, messageId: 789 };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'subject':
							return 'Test Subject';
						case 'body':
							return 'Test Body';
						case 'category':
							return 'assistance';
						case 'product':
							return 'hosting';
						case 'serviceName':
							return 'my-service';
						default:
							return undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/support/tickets/create', {
				subject: 'Test Subject',
				body: 'Test Body',
				category: 'assistance',
				product: 'hosting',
				serviceName: 'my-service',
			});
			expect(result).toEqual([mockData]);
		});

		it('should create ticket with default values (empty body/service)', async () => {
			const mockData = { ticketId: 123456 };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'subject':
							return 'Test Subject';
						case 'body':
							return '';
						case 'category':
							return 'assistance';
						case 'product':
							return 'hosting';
						case 'serviceName':
							return '';
						default:
							return undefined;
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(mockClient.httpPost).toHaveBeenCalledWith('/support/tickets/create', {
				subject: 'Test Subject',
				body: '',
				category: 'assistance',
				product: 'hosting',
				serviceName: undefined,
			});
			expect(result).toEqual([mockData]);
		});

		it('should create ticket with minimal parameters (subject only)', async () => {
			const mockData = { ticketId: 999 };
			const mockClient = new ApiClient(mockExecuteFunctions) as any;
			(mockClient.httpPost as jest.Mock).mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation(
				(param: string): string | undefined => {
					switch (param) {
						case 'subject':
							return 'Minimal Ticket';
						default:
							return '';
					}
				},
			);

			const result = await execute.call(mockExecuteFunctions, 0);

			expect(result).toEqual([mockData]);
		});
	});
});
