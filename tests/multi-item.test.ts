/**
 * Regression tests for multi-item parameter resolution.
 *
 * Ensures that:
 * 1. executeTemplate resolves parameters per-item (not just item 0).
 * 2. The getItemParameter helper works correctly with and without an explicit index.
 * 3. No operation file uses the anti-pattern `getNodeParameter('x', 0)` (hardcoded index).
 */

import * as fs from 'fs';
import * as path from 'path';

import type { IExecuteFunctions } from 'n8n-workflow';

import { executeTemplate, getItemParameter } from '../shared/nodes';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Build a minimal mock IExecuteFunctions that returns per-item parameter values. */
function createMultiItemCtx(
	itemValues: Record<number, Record<string, unknown>>,
): jest.Mocked<IExecuteFunctions> {
	return {
		getInputData: () =>
			Object.keys(itemValues).map((i) => ({
				json: itemValues[Number(i)],
				index: Number(i),
			})),
		getNodeParameter: (key: string, idx: number, _default?: unknown) => {
			const row = itemValues[idx];
			if (row && key in row) return row[key];
			return _default;
		},
		getFirstCollectionItem: () => ({}) as Record<string, unknown>,
		continueOnFail: jest.fn().mockReturnValue(false),
		helpers: {
			returnJsonArray: (data: unknown[]) => data.map((item) => ({ json: item })),
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

// ---------------------------------------------------------------------------
// Group A – executeTemplate resolves parameters per-item
// ---------------------------------------------------------------------------

describe('executeTemplate — per-item parameter resolution', () => {
	it('resolves getNodeParameter with the correct item index (sequential)', async () => {
		const ctx = createMultiItemCtx({
			0: { value: 'item-0' },
			1: { value: 'item-1' },
			2: { value: 'item-2' },
		});

		const results = await executeTemplate.call(
			ctx,
			async function (this: IExecuteFunctions, itemIndex: number) {
				const v = this.getNodeParameter('value', itemIndex) as string;
				return [{ json: { v } }];
			},
		);

		const flat = results.flat();
		expect(flat).toHaveLength(3);
		expect(flat[0].json.v).toBe('item-0');
		expect(flat[1].json.v).toBe('item-1');
		expect(flat[2].json.v).toBe('item-2');
	});

	it('preserves order with concurrency > 1', async () => {
		const itemCount = 5;
		const ctx = createMultiItemCtx(
			Object.fromEntries(Array.from({ length: itemCount }, (_, i) => [i, { value: `item-${i}` }])),
		);

		const results = await executeTemplate.call(
			ctx,
			async function (this: IExecuteFunctions, itemIndex: number) {
				// Small delay to simulate real async work and increase chance of reordering
				await new Promise((r) => setTimeout(r, 10));
				const v = this.getNodeParameter('value', itemIndex) as string;
				return [{ json: { v } }];
			},
			{ concurrency: 3 },
		);

		const flat = results.flat();
		expect(flat).toHaveLength(itemCount);
		flat.forEach((result, i) => {
			expect(result.json.v).toBe(`item-${i}`);
		});
	});
});

// ---------------------------------------------------------------------------
// Group B – getItemParameter helper
// ---------------------------------------------------------------------------

describe('getItemParameter — helper', () => {
	it('returns the value for the explicit item index', () => {
		const getNodeParamMock = jest.fn((key: string, idx: number) => `value-for-item-${idx}`);
		const ctx = {
			getNodeParameter: getNodeParamMock,
			getInputData: () => [{ json: {} }],
			getFirstCollectionItem: () => ({}),
			continueOnFail: jest.fn().mockReturnValue(false),
			helpers: { returnJsonArray: (d: unknown[]) => d.map((item) => ({ json: item })) },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const result = getItemParameter(ctx, 'value', 2);
		expect(result).toBe('value-for-item-2');
		expect(getNodeParamMock).toHaveBeenCalledWith('value', 2, undefined);
	});

	it('falls back to item 0 when no index is provided', () => {
		const getNodeParamMock = jest.fn((key: string, idx: number) => `value-for-item-${idx}`);
		const ctx = {
			getNodeParameter: getNodeParamMock,
			getInputData: () => [{ json: {} }],
			getFirstCollectionItem: () => ({}),
			continueOnFail: jest.fn().mockReturnValue(false),
			helpers: { returnJsonArray: (d: unknown[]) => d.map((item) => ({ json: item })) },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const result = getItemParameter(ctx, 'value');
		expect(result).toBe('value-for-item-0');
		expect(getNodeParamMock).toHaveBeenCalledWith('value', 0, undefined);
	});

	it('delegates extractValue option to getNodeParameter', () => {
		const getNodeParamMock = jest.fn((_key: string, _idx: number, arg3: unknown) => {
			// getItemParameter passes options as the 3rd argument (not a fallback value)
			if (arg3 && typeof arg3 === 'object' && 'extractValue' in arg3) {
				return 'extracted-val';
			}
			return 'normal-val';
		});
		const ctx = {
			getNodeParameter: getNodeParamMock,
			getInputData: () => [{ json: {} }],
			getFirstCollectionItem: () => ({}),
			continueOnFail: jest.fn().mockReturnValue(false),
			helpers: { returnJsonArray: (d: unknown[]) => d.map((item) => ({ json: item })) },
		} as unknown as jest.Mocked<IExecuteFunctions>;

		const result = getItemParameter(ctx, 'value', 0, { extractValue: true });
		expect(result).toBe('extracted-val');
		expect(getNodeParamMock).toHaveBeenCalledWith('value', 0, { extractValue: true });
	});
});

// ---------------------------------------------------------------------------
// Group C — Static guardrail: no getNodeParameter('x', 0) in operation files
// ---------------------------------------------------------------------------

describe('Static guardrail — no hardcoded getNodeParameter index 0', () => {
	const NODES_ROOT = path.resolve(__dirname, '..', 'nodes');
	// Regex matches: getNodeParameter('xxx', 0) or getNodeParameter('xxx', 0, ...)
	// but NOT getNodeParameter('xxx', itemIndex) or getNodeParameter('xxx', itemIndex ?? 0)
	const HARD_CODED_ZERO_RE = /getNodeParameter\(\s*['"][^'"]+['"]\s*,\s*0\s*[,)]/g;

	/**
	 * Directories intentionally excluded from the guardrail scan.
	 *
	 * All .operation.ts files have been migrated to use `itemIndex ?? 0`.
	 * This list is intentionally empty — any entry here should be removed
	 * once the corresponding files are migrated.
	 */
	const WHITELIST_DIRS: string[] = [];

	/** File-level whitelist: files that legitimately use getNodeParameter('x', 0). */
	const WHITELIST_FILES = new Set<string>();

	function isWhitelisted(filePath: string): boolean {
		const rel = path.relative(NODES_ROOT, filePath);
		if (WHITELIST_FILES.has(rel)) return true;
		return WHITELIST_DIRS.some((dir) => rel.startsWith(dir));
	}

	it('scans all nodes/**/*.operation.ts for hardcoded index 0', () => {
		const violations: string[] = [];

		function walk(dir: string): void {
			let entries: fs.Dirent[];
			try {
				entries = fs.readdirSync(dir, { withFileTypes: true });
			} catch {
				return; // skip unreadable dirs
			}

			for (const entry of entries) {
				const fullPath = path.join(dir, entry.name);
				if (entry.isDirectory()) {
					walk(fullPath);
				} else if (entry.isFile() && entry.name.endsWith('.operation.ts')) {
					if (isWhitelisted(fullPath)) continue;

					let content: string;
					try {
						content = fs.readFileSync(fullPath, 'utf-8');
					} catch {
						continue; // skip unreadable files
					}

					const rel = path.relative(NODES_ROOT, fullPath);
					const matches = content.match(HARD_CODED_ZERO_RE);
					if (matches) {
						violations.push(`${rel}: ${matches.length} occurrence(s)`);
					}
				}
			}
		}

		walk(NODES_ROOT);

		if (violations.length > 0) {
			throw new Error(
				`Found ${violations.length} file(s) with hardcoded getNodeParameter index 0:\n` +
					violations.join('\n') +
					'\n\n' +
					"Fix: replace getNodeParameter('x', 0, ...) with " +
					"getNodeParameter('x', itemIndex ?? 0, ...)",
			);
		}
	});
});
