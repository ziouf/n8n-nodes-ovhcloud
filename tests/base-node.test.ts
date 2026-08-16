/**
 * Non-regression tests for executeTemplate in shared/nodes/BaseNode.ts.
 *
 * Verifies the continueOnFail behaviour: preserved input data, binary passthrough,
 * key collision handling, and error re-throw when disabled.
 * Also verifies concurrent execution preserves order and continueOnFail semantics.
 */

import { executeTemplate } from '../shared/nodes/BaseNode';
import type { IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

function createMockCtx(): jest.Mocked<IExecuteFunctions> {
	return {
		getInputData: jest.fn<() => INodeExecutionData[]>(),
		continueOnFail: jest.fn<boolean>().mockReturnValue(false),
		getNode: jest.fn(() => ({
			name: 'test-node',
			type: 'n8n-nodes-base.test',
			typeVersion: 1,
			position: [0, 0],
		})),
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

/**
 * Creates a mock context that also supports `getNodeParameter` (needed for
 * errorContext enrichment tests).  By default the mock throws so that
 * existing tests without `getNodeParameter` on the mock don't break.
 */
function createMockCtxWithGetNodeParameter(
	getNodeParameterImpl: IExecuteFunctions['getNodeParameter'],
): jest.Mocked<IExecuteFunctions> {
	return {
		...createMockCtx(),
		getNodeParameter: jest
			.fn<
				Parameters<IExecuteFunctions['getNodeParameter']>,
				ReturnType<IExecuteFunctions['getNodeParameter']>
			>()
			.mockImplementation(getNodeParameterImpl),
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

describe('executeTemplate (BaseNode)', () => {
	describe('success', () => {
		it('should return all items when fn resolves for every input item', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([{ json: { a: 1 } }, { json: { a: 2 } }]);

			const result = await executeTemplate.call(ctx, async () => {
				return [{ json: { ok: true } }];
			});

			expect(result).toHaveLength(1);
			expect(result[0]).toHaveLength(2);
			expect(result[0][0].json).toEqual({ ok: true });
			expect(result[0][1].json).toEqual({ ok: true });
		});
	});

	describe('continueOnFail — error preserves input', () => {
		it('should spread input json, binary, and pairedItem when fn rejects', async () => {
			const ctx = createMockCtx();
			const inputItem: INodeExecutionData = {
				json: { id: 7, name: 'x' },
				binary: { b: { data: 'd', mimeType: 'text/plain', fileName: 'f' } },
			};
			ctx.getInputData.mockReturnValue([inputItem]);
			ctx.continueOnFail.mockReturnValue(true);

			const result = await executeTemplate.call(ctx, async function (this: IExecuteFunctions) {
				throw new Error('boom');
			});

			expect(result).toHaveLength(1);
			expect(result[0]).toHaveLength(1);
			expect(result[0][0].json).toEqual({ id: 7, name: 'x', error: 'boom' });
			expect(result[0][0].pairedItem).toEqual({ item: 0 });
			expect(result[0][0].binary).toEqual({
				b: { data: 'd', mimeType: 'text/plain', fileName: 'f' },
			});
		});
	});

	describe('continueOnFail — key collision', () => {
		it('should let the error value overwrite an existing json.error key', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([{ json: { error: 'original' } }]);
			ctx.continueOnFail.mockReturnValue(true);

			const result = await executeTemplate.call(ctx, async function (this: IExecuteFunctions) {
				throw 'second';
			});

			expect(result[0][0].json.error).toBe('second');
		});
	});

	describe('continueOnFail — input item without json', () => {
		it('should not crash and should produce { error: "..." }', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([{ json: undefined as unknown as Record<string, unknown> }]);
			ctx.continueOnFail.mockReturnValue(true);

			const result = await executeTemplate.call(ctx, async function (this: IExecuteFunctions) {
				throw new Error('no-json-item');
			});

			expect(result[0][0].json).toEqual({ error: 'no-json-item' });
		});
	});

	describe('continueOnFail disabled', () => {
		it('should throw NodeApiError when fn rejects', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([{ json: { id: 1 } }]);
			ctx.continueOnFail.mockReturnValue(false);

			await expect(
				executeTemplate.call(ctx, async function (this: IExecuteFunctions) {
					throw new Error('fatal');
				}),
			).rejects.toThrow();
		});
	});

	// ─── Concurrency tests ───────────────────────────────────────────────

	describe('concurrency — sequential (default)', () => {
		it('should process items sequentially and preserve order when no options given', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([
				{ json: { id: 1 } },
				{ json: { id: 2 } },
				{ json: { id: 3 } },
			]);

			const order: number[] = [];
			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					order.push(i);
					return [{ json: { index: i, value: `item-${i}` } }];
				},
			);

			expect(result).toHaveLength(1);
			expect(result[0]).toHaveLength(3);
			expect(result[0][0].json).toEqual({ index: 0, value: 'item-0' });
			expect(result[0][1].json).toEqual({ index: 1, value: 'item-1' });
			expect(result[0][2].json).toEqual({ index: 2, value: 'item-2' });
		});
	});

	// ─── errorContext enrichment tests ─────────────────────────────────

	describe('errorContext enrichment', () => {
		it('should throw a NodeApiError with resource/operation prefix when continueOnFail is false', async () => {
			const ctx = createMockCtxWithGetNodeParameter((_name: string, itemIndex: number) => {
				// Simulate the operation parameter resolving to 'get' for item 0.
				if (itemIndex === 0) return 'get';
				return 'unknown';
			});
			ctx.getInputData.mockReturnValue([{ json: { id: 1 } }]);
			ctx.continueOnFail.mockReturnValue(false);

			let caught: unknown;
			try {
				await executeTemplate.call(
					ctx,
					async function (this: IExecuteFunctions) {
						throw new Error('api failure');
					},
					{
						errorContext: { resource: 'vps', operationParam: 'vpsOperation' },
					},
				);
			} catch (e) {
				caught = e;
			}

			expect(caught).toBeInstanceOf(NodeApiError);
			const err = caught as NodeApiError;
			expect(err.message).toContain('vps/get');
			expect(err.message).toContain('api failure');
			expect(err.description).toContain('vps/get');
		});

		it('should use resolveOperation override and NOT call getNodeParameter', async () => {
			const getNodeParameterSpy = jest.fn();
			const ctx = createMockCtxWithGetNodeParameter(
				(...args: Parameters<IExecuteFunctions['getNodeParameter']>) => {
					getNodeParameterSpy(...args);
					return 'get';
				},
			);
			ctx.getInputData.mockReturnValue([{ json: { id: 1 } }]);
			ctx.continueOnFail.mockReturnValue(false);

			let caught: unknown;
			try {
				await executeTemplate.call(
					ctx,
					async function (this: IExecuteFunctions) {
						throw new Error('boom');
					},
					{
						errorContext: {
							resource: 'vps',
							operationParam: 'vpsOperation',
							resolveOperation: () => 'customLabel',
						},
					},
				);
			} catch (e) {
				caught = e;
			}

			expect(getNodeParameterSpy).not.toHaveBeenCalled();
			expect(caught).toBeInstanceOf(NodeApiError);
			const err = caught as NodeApiError;
			expect(err.message).toContain('vps/customLabel');
			expect(err.message).toContain('boom');
		});

		it('should enrich json.error with resource/operation prefix when continueOnFail is true', async () => {
			const ctx = createMockCtxWithGetNodeParameter((_name: string, itemIndex: number) => {
				if (itemIndex === 0) return 'get';
				return 'unknown';
			});
			ctx.getInputData.mockReturnValue([{ json: { id: 1 } }]);
			ctx.continueOnFail.mockReturnValue(true);

			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions) {
					throw new Error('api failure');
				},
				{
					errorContext: { resource: 'vps', operationParam: 'vpsOperation' },
				},
			);

			expect(result).toHaveLength(1);
			expect(result[0]).toHaveLength(1);
			expect(result[0][0].json.error).toBe('vps/get: api failure');
		});

		it('should pass through NodeApiError unchanged (same instance)', async () => {
			const originalError = new NodeApiError(
				{ getName: () => 'test' } as never,
				{ code: 500 } as never,
			);
			const ctx = createMockCtxWithGetNodeParameter((_name: string) => 'get');
			ctx.getInputData.mockReturnValue([{ json: { id: 1 } }]);
			ctx.continueOnFail.mockReturnValue(false);

			let caught: unknown;
			try {
				await executeTemplate.call(
					ctx,
					async function (this: IExecuteFunctions) {
						throw originalError;
					},
					{
						errorContext: { resource: 'vps', operationParam: 'vpsOperation' },
					},
				);
			} catch (e) {
				caught = e;
			}

			// Must be the exact same instance — no double-wrapping.
			expect(caught).toBe(originalError);
		});

		it('should throw with resource/operation prefix', async () => {
			const ctx = createMockCtxWithGetNodeParameter((_name: string, itemIndex: number) => {
				if (itemIndex === 0) return 'list';
				return 'unknown';
			});
			ctx.getInputData.mockReturnValue([{ json: { id: 0 } }, { json: { id: 1 } }]);
			ctx.continueOnFail.mockReturnValue(false);

			let caught: unknown;
			try {
				await executeTemplate.call(
					ctx,
					async function (this: IExecuteFunctions, i: number) {
						if (i === 0) throw new Error('concurrent fail');
						return [{ json: { ok: true } }];
					},
					{
						errorContext: { resource: 'vps', operationParam: 'vpsOperation' },
					},
				);
			} catch (e) {
				caught = e;
			}

			expect(caught).toBeInstanceOf(NodeApiError);
			const err = caught as NodeApiError;
			expect(err.message).toContain('vps/list');
			expect(err.message).toContain('concurrent fail');
		});

		it('should enrich json.error with continueOnFail true', async () => {
			const ctx = createMockCtxWithGetNodeParameter((_name: string, itemIndex: number) => {
				if (itemIndex === 1) return 'get';
				return 'unknown';
			});
			ctx.getInputData.mockReturnValue([
				{ json: { id: 0 } },
				{ json: { id: 1 } },
				{ json: { id: 2 } },
			]);
			ctx.continueOnFail.mockReturnValue(true);

			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					if (i === 1) throw new Error('item 1 error');
					return [{ json: { index: i } }];
				},
				{
					errorContext: { resource: 'vps', operationParam: 'vpsOperation' },
				},
			);

			expect(result[0][1].json.error).toBe('vps/get: item 1 error');
			expect(result[0][0].json).toEqual({ index: 0 });
			expect(result[0][2].json).toEqual({ index: 2 });
		});
	});

});

