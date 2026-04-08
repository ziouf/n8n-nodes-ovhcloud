/**
 * Tests for the Domain index module (description + execute).
 *
 * Verifies that the Domain node correctly:
 * - Returns the expected description structure with operations
 * - Routes to the correct handler based on the selected operation
 *
 * Uses the new per-node architecture: nodes/OvhCloudDomain/index.ts
 */

import type {
	IExecuteFunctions,
	INodeProperties,
	INodeExecutionData,
	IDataObject,
} from 'n8n-workflow';

// ─── Mock ApiClient ──────────────────────────────────────────────────────────

const mockHttpGet = jest.fn();

jest.mock('../shared/transport/ApiClientImpl', () => ({
	ApiClient: jest.fn().mockImplementation(() => ({
		httpGet: mockHttpGet,
		httpPost: jest.fn(),
		httpPut: jest.fn(),
		httpDelete: jest.fn(),
	})),
}));

import { description, execute } from '../nodes/OvhCloudDomain';

function createMockExecuteFunctions(
	params: Record<string, unknown> = {},
): jest.Mocked<IExecuteFunctions> {
	const returnJsonArray = jest.fn((data: unknown): INodeExecutionData[] => {
		const arr = Array.isArray(data) ? data : [data];
		return arr.map((item) => ({ json: item as IDataObject }));
	});

	return {
		getNodeParameter: jest.fn((param: string, _itemIndex: number, opts?: unknown) => {
			const value = params[param];
			if (
				typeof opts === 'object' &&
				opts !== null &&
				'extractValue' in opts &&
				(opts as { extractValue?: boolean }).extractValue &&
				typeof value === 'object' &&
				value !== null &&
				'value' in value
			) {
				return (value as { value: unknown }).value;
			}
			return value;
		}),
		getNode: jest.fn(() => ({ name: 'OVH Cloud Domain', type: 'ovhCloudDomain' })),
		helpers: {
			returnJsonArray,
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

describe('Domain Index', () => {
	describe('description()', () => {
		let result: INodeProperties[];

		beforeAll(() => {
			result = description({ show: {} });
		});

		it('should return an array of INodeProperties', () => {
			expect(Array.isArray(result)).toBe(true);
			expect(result.length).toBeGreaterThan(0);
		});

		it('should contain domainOperation options field', () => {
			const opField = result.find((prop) => prop.name === 'domainOperation');
			expect(opField).toBeDefined();
			expect(opField?.type).toBe('options');
		});

		it('should have list and get operations', () => {
			const opField = result.find((prop) => prop.name === 'domainOperation');
			const optionValues = (opField?.options ?? []).map((opt) =>
				typeof opt === 'object' && 'value' in opt ? opt.value : opt,
			);
			expect(optionValues).toContain('list');
			expect(optionValues).toContain('get');
		});
	});

	describe('execute()', () => {
		beforeEach(() => {
			jest.clearAllMocks();
		});

		it('should route list operation to httpGet /domain', async () => {
			mockHttpGet.mockResolvedValue(['example.com', 'test.org']);
			const mockCtx = createMockExecuteFunctions({
				domainOperation: 'list',
				domainWithDetails: false,
			});

			const result = await execute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/domain');
			expect(result).toHaveLength(2);
		});

		it('should route get operation to httpGet /domain/{domainName}', async () => {
			mockHttpGet.mockResolvedValue({ name: 'example.com', status: 'ok' });
			const mockCtx = createMockExecuteFunctions({
				domainOperation: 'get',
				domainName: 'example.com',
			});

			const result = await execute.call(mockCtx);

			expect(mockHttpGet).toHaveBeenCalledWith('/domain/example.com');
			expect(result).toHaveLength(1);
			expect(result[0]).toEqual({ json: { name: 'example.com', status: 'ok' } });
		});

		it('should throw error for unsupported operation', async () => {
			const mockCtx = createMockExecuteFunctions({
				domainOperation: 'nonexistent',
			});

			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistent" for resource "domain"',
			);
		});
	});
});
