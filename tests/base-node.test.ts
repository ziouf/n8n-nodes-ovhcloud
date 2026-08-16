/**
 * Non-regression tests for executeTemplate in shared/nodes/BaseNode.ts.
 *
 * Verifies the continueOnFail behaviour: preserved input data, binary passthrough,
 * key collision handling, and error re-throw when disabled.
 * Also verifies concurrent execution preserves order and continueOnFail semantics.
 */

import { BaseNode, executeTemplate, classifyOperation } from '../shared/nodes/BaseNode';
import type { OperationClass } from '../shared/nodes/BaseNode';
import type { INodeTypeDescription, IExecuteFunctions, INodeExecutionData } from 'n8n-workflow';
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

	describe('concurrency — concurrent execution preserves order', () => {
		it('should process all items with concurrency > 1 and return them in index order', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([
				{ json: { id: 0 } },
				{ json: { id: 1 } },
				{ json: { id: 2 } },
				{ json: { id: 3 } },
				{ json: { id: 4 } },
			]);

			const executionOrder: number[] = [];
			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					// Simulate variable-latency work so concurrency is exercised.
					await new Promise((r) => setTimeout(r, (5 - i) * 10));
					executionOrder.push(i);
					return [{ json: { index: i, value: `item-${i}` } }];
				},
				{ concurrency: 2 },
			);

			expect(result).toHaveLength(1);
			expect(result[0]).toHaveLength(5);
			// Results must be in index order regardless of execution order.
			for (let i = 0; i < 5; i++) {
				expect(result[0][i].json).toEqual({ index: i, value: `item-${i}` });
			}
			// All items must have been executed.
			expect(executionOrder).toHaveLength(5);
			expect(executionOrder.sort((a, b) => a - b)).toEqual([0, 1, 2, 3, 4]);
		});

		it('should handle batches larger than item count', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([{ json: { id: 0 } }]);

			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					return [{ json: { index: i } }];
				},
				{ concurrency: 10 },
			);

			expect(result[0]).toHaveLength(1);
			expect(result[0][0].json).toEqual({ index: 0 });
		});
	});

	describe('concurrency — continueOnFail with concurrency', () => {
		it('should produce error items and continue processing remaining items', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([
				{ json: { id: 0 } },
				{ json: { id: 1 } },
				{ json: { id: 2 } },
			]);
			ctx.continueOnFail.mockReturnValue(true);

			let callCount = 0;
			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					callCount++;
					if (i === 1) {
						throw new Error(`fail on item ${i}`);
					}
					return [{ json: { index: i, value: `item-${i}` } }];
				},
				{ concurrency: 2 },
			);

			expect(callCount).toBe(3); // all items processed
			expect(result).toHaveLength(1);
			expect(result[0]).toHaveLength(3);

			// Item 0 — success
			expect(result[0][0].json).toEqual({ index: 0, value: 'item-0' });
			// Item 1 — error
			expect(result[0][1].json).toHaveProperty('error', 'fail on item 1');
			expect(result[0][1].pairedItem).toEqual({ item: 1 });
			// Item 2 — success
			expect(result[0][2].json).toEqual({ index: 2, value: 'item-2' });
		});

		describe('concurrency — fatal error stops new work', () => {
			it('should not start items after a fatal error (deterministic with concurrency=1)', async () => {
				// With concurrency=1 there is exactly one worker.  When item 0 fails fatally,
				// the worker sets fatalError and exits before picking up index 1.
				// This is the deterministic way to verify "no new work after fatal error".
				// (With concurrency > 1, a second worker may have already started item 1
				// before item 0's error is recorded, so the test would be non-deterministic.)
				const ctx = createMockCtx();
				ctx.getInputData.mockReturnValue([
					{ json: { id: 0 } },
					{ json: { id: 1 } },
					{ json: { id: 2 } },
				]);
				ctx.continueOnFail.mockReturnValue(false);

				const fn = jest
					.fn<Promise<INodeExecutionData[]>, [number]>()
					.mockImplementation(async (i: number) => {
						if (i === 0) {
							throw new Error('fatal on item 0');
						}
						return [{ json: { index: i } }];
					});

				await expect(executeTemplate.call(ctx, fn, { concurrency: 1 })).rejects.toThrow(
					'fatal on item 0',
				);

				// Only item 0 was executed; items 1 and 2 were never picked up.
				expect(fn).toHaveBeenCalledTimes(1);
				expect(fn).toHaveBeenNthCalledWith(1, 0);
			});

			it('should await all workers after a fatal error (no orphaned requests)', async () => {
				const ctx = createMockCtx();
				ctx.getInputData.mockReturnValue([{ json: { id: 0 } }, { json: { id: 1 } }]);
				ctx.continueOnFail.mockReturnValue(false);

				const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
				const fn = jest
					.fn<Promise<INodeExecutionData[]>, [number]>()
					.mockImplementation(async (i: number) => {
						if (i === 0) {
							await delay(50);
							throw new Error('fatal on item 0');
						}
						await delay(100);
						return [{ json: { index: i } }];
					});

				const start = Date.now();
				let caught: unknown;
				try {
					await executeTemplate.call(ctx, fn, { concurrency: 2 });
				} catch (e) {
					caught = e;
				}

				expect(caught).toBeInstanceOf(NodeApiError);
				expect((caught as NodeApiError).message).toContain('fatal on item 0');

				// Both workers were launched. Worker 0 finishes after ~50ms and sets fatalError.
				// Worker 1 was already running and finishes after ~100ms.
				// Promise.all waits for both, so elapsed ≈ 100ms (not 50ms).
				expect(fn).toHaveBeenCalledTimes(2);
				expect(Date.now() - start).toBeGreaterThanOrEqual(90);
				expect(Date.now() - start).toBeLessThan(200);
			});
		});

		it('should run items in parallel when concurrency > 1', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([
				{ json: { i: 0 } },
				{ json: { i: 1 } },
				{ json: { i: 2 } },
			]);

			const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
			const start = Date.now();
			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					await delay(50);
					return [{ json: { done: i } }];
				},
				{ concurrency: 3 },
			);
			const elapsed = Date.now() - start;

			expect(result).toHaveLength(1);
			expect(result[0]).toHaveLength(3);
			expect(result[0].map((d) => (d.json as { done: number }).done)).toEqual([0, 1, 2]);
			// 3 items × 50ms in parallel ≈ 50ms; sequential would be ≈ 150ms.
			expect(elapsed).toBeLessThan(120);
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
						concurrency: 1,
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
						concurrency: 1,
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
					concurrency: 1,
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
						concurrency: 1,
						errorContext: { resource: 'vps', operationParam: 'vpsOperation' },
					},
				);
			} catch (e) {
				caught = e;
			}

			// Must be the exact same instance — no double-wrapping.
			expect(caught).toBe(originalError);
		});

		it('should throw with resource/operation prefix in concurrent mode', async () => {
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
						concurrency: 2,
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

		it('should enrich json.error in concurrent mode with continueOnFail true', async () => {
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
					concurrency: 2,
					errorContext: { resource: 'vps', operationParam: 'vpsOperation' },
				},
			);

			expect(result[0][1].json.error).toBe('vps/get: item 1 error');
			expect(result[0][0].json).toEqual({ index: 0 });
			expect(result[0][2].json).toEqual({ index: 2 });
		});
	});

	// ─── perItemConcurrency tests ────────────────────────────────────────

	describe('perItemConcurrency', () => {
		/** Mock getNodeParameter that returns operation names mapping to desired classes. */
		function createMockCtxWithClassification(
			classifyImpl: (itemIndex: number) => OperationClass,
		): jest.Mocked<IExecuteFunctions> {
			// Map class → a representative operation keyword that classifyOperation recognizes
			const opForClass: Record<OperationClass, string> = {
				read: 'list',
				write: 'rename',
				destructive: 'delete',
			};
			return {
				...createMockCtx(),
				getNodeParameter: jest
					.fn<
						Parameters<IExecuteFunctions['getNodeParameter']>,
						ReturnType<IExecuteFunctions['getNodeParameter']>
					>()
					.mockImplementation((_name: string, itemIndex: number) => {
						return opForClass[classifyImpl(itemIndex)];
					}),
			} as unknown as jest.Mocked<IExecuteFunctions>;
		}

		it('all read → parallel (faster than sequential), results in input order', async () => {
			const ctx = createMockCtxWithClassification(() => 'read');
			ctx.getInputData.mockReturnValue([
				{ json: { id: 0 } },
				{ json: { id: 1 } },
				{ json: { id: 2 } },
			]);

			const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
			const start = Date.now();

			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					await delay(30);
					return [{ json: { index: i } }];
				},
				{
					perItemConcurrency: {
						classify: (c, idx) =>
							classifyOperation(String(c.getNodeParameter('op', idx, { extractValue: true }))),
					},
				},
			);

			const elapsed = Date.now() - start;

			expect(result[0]).toHaveLength(3);
			for (let i = 0; i < 3; i++) {
				expect(result[0][i].json).toEqual({ index: i });
			}
			// 3 items × 30ms in parallel ≈ 30ms; sequential would be ≈ 90ms.
			expect(elapsed).toBeLessThan(60);
		});

		it('all destructive → strictly sequential (slower than parallel), order preserved', async () => {
			const ctx = createMockCtxWithClassification(() => 'destructive');
			ctx.getInputData.mockReturnValue([
				{ json: { id: 0 } },
				{ json: { id: 1 } },
				{ json: { id: 2 } },
			]);

			const executionOrder: number[] = [];
			const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));
			const start = Date.now();

			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					executionOrder.push(i);
					await delay(20);
					return [{ json: { index: i } }];
				},
				{
					perItemConcurrency: {
						classify: (c, idx) =>
							classifyOperation(String(c.getNodeParameter('op', idx, { extractValue: true }))),
					},
				},
			);

			const elapsed = Date.now() - start;

			expect(result[0]).toHaveLength(3);
			for (let i = 0; i < 3; i++) {
				expect(result[0][i].json).toEqual({ index: i });
			}
			// 3 items × 20ms sequential ≈ 60ms; parallel would be ≈ 20ms.
			expect(elapsed).toBeGreaterThanOrEqual(50);
			expect(executionOrder).toEqual([0, 1, 2]);
		});

		it('mixed reads + destructives: destructive never exceeds 1 in flight', async () => {
			const ctx = createMockCtxWithClassification((idx) => {
				// Even indices → read, odd → destructive
				return idx % 2 === 0 ? 'read' : 'destructive';
			});
			ctx.getInputData.mockReturnValue([
				{ json: { id: 0 } },
				{ json: { id: 1 } },
				{ json: { id: 2 } },
				{ json: { id: 3 } },
				{ json: { id: 4 } },
			]);

			const perClassInFlight: Record<OperationClass, number> = {
				read: 0,
				write: 0,
				destructive: 0,
			};
			const perClassMaxInFlight: Record<OperationClass, number> = {
				read: 0,
				write: 0,
				destructive: 0,
			};
			const delay = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

			await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					const op = String(this.getNodeParameter('op', i, { extractValue: true }));
					const cls = classifyOperation(op);
					perClassInFlight[cls]++;
					perClassMaxInFlight[cls] = Math.max(perClassMaxInFlight[cls], perClassInFlight[cls]);
					await delay(25);
					perClassInFlight[cls]--;
					return [{ json: { index: i } }];
				},
				{
					perItemConcurrency: {
						classify: (c, idx) =>
							classifyOperation(String(c.getNodeParameter('op', idx, { extractValue: true }))),
					},
				},
			);

			expect(perClassMaxInFlight.destructive).toBeLessThanOrEqual(1);
			expect(perClassMaxInFlight.read).toBeGreaterThanOrEqual(2);
		});

		it('classify throwing → falls back to write (no crash)', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([{ json: { id: 0 } }, { json: { id: 1 } }]);

			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					return [{ json: { index: i } }];
				},
				{
					perItemConcurrency: {
						classify: () => {
							throw new Error('classification failed');
						},
					},
				},
			);

			expect(result[0]).toHaveLength(2);
			expect(result[0][0].json).toEqual({ index: 0 });
			expect(result[0][1].json).toEqual({ index: 1 });
		});

		it('legacy concurrency still works without perItemConcurrency', async () => {
			const ctx = createMockCtx();
			ctx.getInputData.mockReturnValue([
				{ json: { id: 0 } },
				{ json: { id: 1 } },
				{ json: { id: 2 } },
			]);

			const result = await executeTemplate.call(
				ctx,
				async function (this: IExecuteFunctions, i: number) {
					return [{ json: { index: i } }];
				},
				{ concurrency: 2 },
			);

			expect(result[0]).toHaveLength(3);
			for (let i = 0; i < 3; i++) {
				expect(result[0][i].json).toEqual({ index: i });
			}
		});
	});
});

// ─── runTemplate tests ───────────────────────────────────────────────────────

describe('runTemplate', () => {
	/** Test subclass exposing the protected `runTemplate` method. */
	class TestNode extends BaseNode implements IExecuteFunctions {
		description = {} as unknown as INodeTypeDescription;
		getInputData: jest.Mocked<IExecuteFunctions['getInputData']>;

		constructor(ctx?: jest.Mocked<IExecuteFunctions>) {
			super();
			this.getInputData = (ctx ?? createMockCtx()).getInputData.bind(
				ctx ?? createMockCtx(),
			);
			Object.assign(this, ctx ?? {});
		}

		public run(
			execute: (this: IExecuteFunctions, itemIndex: number) => Promise<INodeExecutionData[]>,
			options: { resource: string; operationParam: string },
		) {
			return super.runTemplate.call(this, execute, options);
		}
	}

	function createTestNode(ctx?: jest.Mocked<IExecuteFunctions>): TestNode {
		return new TestNode(ctx);
	}

	it('delegates to executeTemplate and calls getNodeParameter with vpsOperation for each itemIndex in order', async () => {
		let callCount = 0;
		const mockCtx = createMockCtxWithGetNodeParameter((name: string, itemIndex: number) => {
			expect(name).toBe('vpsOperation');
			if (callCount === 0) expect(itemIndex).toBe(0);
			else expect(itemIndex).toBe(1);
			callCount++;
			return 'list';
		});

		mockCtx.getInputData.mockReturnValue([{ json: { id: 0 } }, { json: { id: 1 } }]);

		const node = createTestNode(mockCtx);

		const result = await node.run(
			async function (this: IExecuteFunctions, i: number) {
				return [{ json: { index: i } }];
			},
			{ resource: 'vps', operationParam: 'vpsOperation' },
		);

		expect(result).toHaveLength(1);
		expect(result[0]).toHaveLength(2);
		expect(result[0][0].json).toEqual({ index: 0 });
		expect(result[0][1].json).toEqual({ index: 1 });
	});

	it('takes the perItemConcurrency classification path (classifyOperation returns read for list)', async () => {
		const mockCtx = createMockCtxWithGetNodeParameter((_name: string, itemIndex: number) => {
			return itemIndex === 0 ? 'list' : 'rename';
		});

		mockCtx.getInputData.mockReturnValue([{ json: { id: 0 } }, { json: { id: 1 } }]);

		const node = createTestNode(mockCtx);

		const result = await node.run(
			async function (this: IExecuteFunctions, i: number) {
				return [{ json: { index: i } }];
			},
			{ resource: 'vps', operationParam: 'vpsOperation' },
		);

		expect(result[0][0].json).toEqual({ index: 0 });
		expect(result[0][1].json).toEqual({ index: 1 });
	});

	it('enriches error with vps/<op> when continueOnFail is false and execute throws', async () => {
		const mockCtx = createMockCtxWithGetNodeParameter((_name: string, _itemIndex: number) => 'get');
		mockCtx.getInputData.mockReturnValue([{ json: { id: 1 } }]);
		mockCtx.continueOnFail.mockReturnValue(false);

		let caught: unknown;
		try {
			await createTestNode(mockCtx).run(
				async function (this: IExecuteFunctions) {
					throw new Error('api failure');
				},
				{ resource: 'vps', operationParam: 'vpsOperation' },
			);
		} catch (e) {
			caught = e;
		}

		expect(caught).toBeInstanceOf(NodeApiError);
		const err = caught as NodeApiError;
		expect(err.message).toContain('vps/get');
		expect(err.message).toContain('api failure');
	});
});
