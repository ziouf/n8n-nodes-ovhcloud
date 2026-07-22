/**
 * Shared test helpers for verifying .operation.ts files call the correct API
 * endpoint (method + URL path) as defined in docs/api-specs/v1/*.json.
 */

import type { IExecuteFunctions } from 'n8n-workflow';
import * as fs from 'fs';
import * as path from 'path';

/** Captured HTTP request details returned to tests. */
export interface CapturedRequest {
	method: string;
	url: string;
	qs?: Record<string, unknown>;
}

/** Build a minimal mock IExecuteFunctions for operation testing. */
export function createMockCtx(
	params: Record<string, unknown> = {},
): jest.Mocked<IExecuteFunctions> {
	const httpRequestSpy = jest.fn().mockResolvedValue({ data: {} });

	return {
		getCredentials: jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		}),
		getNodeParameter: (
			keyOrObj?: string | Record<string, unknown>,
			_idx?: number,
			_default?: string,
			opts?: Record<string, unknown>,
		) => {
			if (typeof keyOrObj === 'string') {
				return params[keyOrObj] ?? (_default as string);
			}
			const keys = Object.keys(keyOrObj || {});
			if (!keys.length) return '';

			if (opts?.extractValue && typeof opts.extractValue === 'boolean' && opts.extractValue) {
				const key = keys[0];
				return params[key] ?? (_default as string);
			}
			return params[keys[0]] ?? (_default as string);
		},
		getFirstCollectionItem: () => ({ ...params }) as Record<string, unknown>,
		getInputData: () => [{ json: {}, index: 0 }],
		continueOnFail: jest.fn().mockReturnValue(false),
		helpers: {
			httpRequest: httpRequestSpy as unknown as IExecuteFunctions['helpers']['httpRequest'],
			returnJsonArray: (data: unknown[]) => data.map((item) => ({ json: item })),
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;
}

/** Type for operation execute functions used in tests. */
export type OperationExecuteFn = (this: IExecuteFunctions, ...args: unknown[]) => Promise<unknown>;

/** Invoke an operation execute function with a bound mock context. */
export async function invokeOperation(
	fn: OperationExecuteFn,
	params: Record<string, unknown> = {},
): Promise<CapturedRequest[]> {
	const ctx = createMockCtx(params);

	try {
		await fn.call(ctx);
	} catch (error) {
		// Operations may throw if required params are missing. We still return any calls made before the error.
		void error;
	}

	const spy = ctx.helpers.httpRequest;
	return spy.mock.calls.map((call: [unknown]) => {
		const args = call[0] as Record<string, unknown>;
		const result: CapturedRequest = {
			method: (args.method ?? 'UNKNOWN') as string,
			url: (args.url ?? '') as string,
		};

		if (args.qs && typeof args.qs === 'object' && !Array.isArray(args.qs)) {
			result.qs = args.qs as Record<string, unknown>;
		}

		return result;
	});
}

const SPEC_DIR = path.resolve(__dirname, '..', 'docs', 'api-specs', 'v1');

/** Load and parse a spec JSON file by name (e.g., "vps", "dedicated"). */
export function loadSpec(name: string) {
	const filePath = path.join(SPEC_DIR, `${name}.json`);
	return JSON.parse(fs.readFileSync(filePath, 'utf-8')) as {
		apis: Array<{ path: string; operations: Array<{ httpMethod?: string }> }>;
	};
}

/** Build a map of resource group prefix → expected methods from spec. */
export function buildSpecMap(name: string): Map<string, Set<string>> {
	const spec = loadSpec(name);
	const result = new Map<string, Set<string>>();

	for (const apiGroup of spec.apis) {
		const normalizedPath = apiGroup.path.endsWith('/') ? apiGroup.path : `${apiGroup.path}/`;

		if (!result.has(normalizedPath)) {
			result.set(normalizedPath, new Set());
		}

		for (const op of apiGroup.operations) {
			if (op.httpMethod) {
				result.get(normalizedPath)!.add(op.httpMethod.toUpperCase());
			}
		}
	}

	return result;
}

/** Check whether a request URL matches any spec resource group. */
export function assertUrlMatchesSpecGroup(
	url: string,
	specMap: Map<string, Set<string>>,
): { groupPrefix: string | null; methods: string[] } {
	const stripped = stripPathParams(url);

	for (const [groupPrefix] of specMap) {
		if (stripped.startsWith(groupPrefix)) {
			return {
				groupPrefix: groupPrefix.slice(0, -1),
				methods: [...specMap.get(groupPrefix)!].sort(),
			};
		}
	}

	// Try exact match without normalization
	for (const [groupPrefix] of specMap.keys()) {
		if (url === groupPrefix || url.endsWith(groupPrefix)) {
			return { groupPrefix, methods: [...specMap.get(groupPrefix)!].sort() };
		}
	}

	throw new Error(`URL "${url}" does not match any spec resource group for the loaded spec`);
}

/** Remove path parameters (UUID-like segments) from a URL to find its prefix. */
function stripPathParams(url: string): string {
	return url.replace(/\/[a-zA-Z0-9][\w.\-/]+(?=\/|$)/g, '');
}
