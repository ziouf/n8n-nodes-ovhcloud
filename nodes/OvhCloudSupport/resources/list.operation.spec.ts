/* eslint-disable @typescript-eslint/no-explicit-any */
import { description, execute, TICKET_FILTERS } from './list.operation';

// Mock ApiClient with mutable httpGet for per-test control
jest.mock('../../../shared/transport/ApiClient', () => {
	const mockHttpClient = {
		httpGet: jest.fn(),
		httpPost: jest.fn(),
	};
	return {
		ApiClient: jest.fn().mockImplementation(() => ({
			...mockHttpClient,
		})),
		getClient: jest.fn(() => mockHttpClient),
	};
});

import { ApiClient } from '../../../shared/transport/ApiClient';

describe('list.operation', () => {
	describe('description', () => {
		it('should return a fixedCollection with all filter groups', () => {
			const result = description({});

			expect(result).toHaveLength(1);
			expect(result[0].type).toBe('fixedCollection');
			expect(result[0].name).toBe('filters');

			const options = (result[0] as any).options;
			expect(options).toBeDefined();
			expect(Array.isArray(options)).toBe(true);

			const groupNames = options.map((o: any) => o.name);
			expect(groupNames).toContain('dateRange');
			expect(groupNames).toContain('status');
			expect(groupNames).toContain('category');
			expect(groupNames).toContain('search');
			expect(groupNames).toContain('flags');
			expect(groupNames).toContain('pagination');
		});

		it('should expose correct filter definitions', () => {
			const result = description({});

			// Verify TICKET_FILTERS groups match the generated UI
			const groupKeys = Array.from(new Set(TICKET_FILTERS.map((f) => f.group)));
			expect(groupKeys).toEqual([
				'dateRange',
				'status',
				'category',
				'search',
				'flags',
				'pagination',
			]);

			const groupNames = (result[0] as any).options.map((o: any) => o.name);
			expect(groupNames).toEqual(groupKeys);
		});

		it('should return an options array with 6 groups', () => {
			const result = description({});
			expect((result[0] as any).options).toHaveLength(6);
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

		// ── Non-regression: no filters → query is undefined ─────────────
		it('should call httpGet with undefined qs when no filters provided', async () => {
			const mockData = [123456, 789012];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue({});

			await execute.call(mockExecuteFunctions);

			expect(client.httpGet).toHaveBeenCalledWith('/support/tickets', undefined);
		});

		// ── List all tickets (original behavior preserved) ──────────────
		it('should list all support tickets when no filters are set', async () => {
			const mockData = [123456, 789012, 345678];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue({});

			const result = await execute.call(mockExecuteFunctions);

			expect(client.httpGet).toHaveBeenCalledWith('/support/tickets', undefined);
			expect(result).toEqual(mockData);
		});

		// ── Empty array when no tickets ─────────────────────────────────
		it('should return empty array when no tickets', async () => {
			const mockData: number[] = [];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue({});

			const result = await execute.call(mockExecuteFunctions);

			expect(client.httpGet).toHaveBeenCalledWith('/support/tickets', undefined);
			expect(result).toEqual([]);
		});

		// ── With filters applied ────────────────────────────────────────
		it('should pass filter query params to httpGet', async () => {
			const mockData = [123456];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') {
					return {
						status: [{ value: 'open' }],
						dateRange: [{ minCreationDate: '2026-01-01T00:00:00Z' }],
						flags: [{ archived: true }],
					};
				}
				return {};
			});

			await execute.call(mockExecuteFunctions);

			expect(client.httpGet).toHaveBeenCalledWith('/support/tickets', {
				status: 'open',
				minCreationDate: '2026-01-01T00:00:00Z',
				archived: true,
			});
		});

		// ── Multi-item guardrail ────────────────────────────────────────
		it('should pass correct itemIndex to getNodeParameter', async () => {
			const mockData = [123456];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);
			mockExecuteFunctions.getNodeParameter.mockReturnValue({});

			await execute.call(mockExecuteFunctions, 2);

			expect(mockExecuteFunctions.getNodeParameter).toHaveBeenCalledWith('filters', 2, {});
		});

		// ── Boolean filter (false) is included ──────────────────────────
		it('should include boolean false filter values', async () => {
			const mockData: number[] = [];
			const client = new ApiClient(mockExecuteFunctions) as any;
			client.httpGet.mockResolvedValue(mockData);

			mockExecuteFunctions.getNodeParameter.mockImplementation((key: string) => {
				if (key === 'filters') {
					return { flags: [{ archived: false }] };
				}
				return {};
			});

			await execute.call(mockExecuteFunctions);

			expect(client.httpGet).toHaveBeenCalledWith('/support/tickets', {
				archived: false,
			});
		});
	});
});
