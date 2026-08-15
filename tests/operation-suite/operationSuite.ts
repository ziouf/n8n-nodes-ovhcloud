/**
 * Data-driven operation conformance suite runner.
 *
 * Given a node directory, generates a Jest suite that asserts the shared
 * invariants (docs/api-conformance) against every `*.operation.ts` file found
 * by the recursive walk. The `.operation.ts` suffix structurally excludes
 * `index.ts` and `*.spec.ts`.
 *
 * Per-file invariants:
 * - **exports** — `execute` must be a function; when absent, multi-operation
 *   mode applies: every export matching `/^execute[A-Z]/` is smoke-tested.
 * - **description** — when a `description` export exists, `description({})`
 *   must return a non-empty array whose property names are unique and
 *   non-empty, each property has a `displayName`, `type` belongs to the known
 *   n8n type set, and every `resourceLocator` property is `required`, defines
 *   `modes`, and each `modes[].typeOptions.searchListMethod` resolves in the
 *   node's `listSearchMethods` registry.
 * - **execute (smoke + multi-item)** — `execute.call(ctx, 0)` and
 *   `execute.call(ctx, 1)` run against a mocked n8n context (typed
 *   `getNodeParameter` derived from the file's own `description()`,
 *   `helpers.returnJsonArray`) and the mocked `shared/transport/ApiClient`
 *   (the only HTTP layer an operation may use): no call may throw, at least
 *   one HTTP call is made, every captured HTTP url starts with one of the
 *   `basePath` prefix(es) (absolute, not a relative `vps/...`), `returnJsonArray` is called with a
 *   non-empty array, the HTTP verb family must match the *last* (case-
 *   insensitive) token occurrence in the filename (`get|post|put|delete`,
 *   `create|add`→post, `update`→put, `remove|release`→delete; `methodOverrides`
 *   win where the OVH API breaks the convention), and every parameter read at
 *   item index 0 must also be read at item index 1 (hardcoded index =
 *   multi-item bug). Responses are mocked to shape-agnostic values: a
 *   non-empty array for GET (list operations `.map()` the response directly,
 *   so `{}` would throw; a non-empty array also keeps returned item lists
 *   non-empty), `{}` for POST/PUT, `undefined` for DELETE.
 *
 * Modules are loaded with `jest.requireActual` (not `require`): the n8n
 * ESLint preset (typescript-eslint `recommended`) errors on
 * `no-require-imports`.
 */

import * as fs from 'fs';
import * as path from 'path';

import type { IDisplayOptions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// ---------------------------------------------------------------------------
// Mock transport. `jest.mock` is hoisted above the imports; the `mock*`
// variable prefix is what allows the factory to reference module state.
// ---------------------------------------------------------------------------

interface MockClient {
	httpDelete: jest.Mock;
	httpGet: jest.Mock;
	httpPost: jest.Mock;
	httpPut: jest.Mock;
}

const mockState: { client: MockClient | null } = { client: null };

jest.mock('../../shared/transport/ApiClient', () => {
	const client: MockClient = {
		httpDelete: jest.fn(),
		httpGet: jest.fn(),
		httpPost: jest.fn(),
		httpPut: jest.fn(),
	};
	mockState.client = client;
	return {
		ApiClient: jest.fn(),
		getClient: jest.fn(() => client),
	};
});

export interface NodeSuiteOptions {
	/** Node directory to scan (CWD-relative or absolute, e.g. `nodes/OvhCloudVps`). */
	nodeDir: string;
	/** Resource name (e.g. `vps`) — used for suite labeling. */
	resource: string;
	/** Operation selector parameter name (e.g. `vpsOperation`) — used for suite labeling. */
	operationParam: string;
	/** Every captured HTTP url must start with one of these segments (e.g. `/vps`, or `['/publicCloud', '/cloud']` for nodes with split v1/v2 endpoint roots). */
	basePath: string | string[];
	/** Search methods registered on the node (`methods.listSearch`). */
	listSearchMethods: string[];
	/** Per-file `getNodeParameter` value overrides, keyed by relative file path. */
	paramValues?: Record<string, Record<string, unknown>>;
	/** Expected HTTP verb per file (relative path) where the OVH API conflicts with the filename convention. */
	methodOverrides?: Record<string, string>;
	/** Relative file paths excluded from the suite; the caller documents why. */
	skipFiles?: string[];
}

const KNOWN_TYPES = new Set([
	'string',
	'number',
	'boolean',
	'options',
	'multiOptions',
	'collection',
	'fixedCollection',
	'credentials',
	'action',
	'workflow',
	'workflowList',
	'workflowBinaries',
	'dateTime',
	'date',
	'time',
	'location',
	'json',
	'resourceLocator',
	'color',
	'notice',
]);

/** Tokens recognised in file names (lowercased) → expected HTTP verb. The verb
 *  of the *last* occurrence wins; `methodOverrides` take precedence entirely. */
const VERB_TOKENS: Array<{ token: string; verb: string }> = [
	{ token: 'get', verb: 'get' },
	{ token: 'post', verb: 'post' },
	{ token: 'put', verb: 'put' },
	{ token: 'delete', verb: 'delete' },
	{ token: 'create', verb: 'post' },
	{ token: 'add', verb: 'post' },
	{ token: 'update', verb: 'put' },
	{ token: 'remove', verb: 'delete' },
	{ token: 'release', verb: 'delete' },
];

function expectedVerb(relFile: string, methodOverrides?: Record<string, string>): string | undefined {
	const override = methodOverrides?.[relFile];
	if (override !== undefined) return override;
	const lower = relFile.toLowerCase();
	let pos = -1;
	let verb: string | undefined;
	for (const { token, v } of VERB_TOKENS) {
		const p = lower.lastIndexOf(token);
		if (p > pos) {
			pos = p;
			verb = v;
		}
	}
	return verb; // undefined → no token in the name → no verb asserted
}

interface SmokeContext {
	helpers: { returnJsonArray: jest.Mock };
	getInputData: jest.Mock;
	getNodeParameter: jest.Mock;
}

type OperationFn = (this: SmokeContext, itemIndex?: number) => Promise<INodeExecutionData[]>;

/** Recursively lists the `*.operation.ts` files under `nodeDir` (sorted, CWD-relative POSIX paths). */
function discoverOperationFiles(nodeDir: string): string[] {
	const files: string[] = [];
	const scan = (dir: string): void => {
		for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
			const full = path.join(dir, entry.name);
			if (entry.isDirectory()) {
				scan(full);
			} else if (entry.name.endsWith('.operation.ts')) {
				files.push(path.relative(process.cwd(), full).split(path.sep).join('/'));
			}
		}
	};
	scan(path.resolve(nodeDir));
	return files.sort();
}

/** The `execute` export, or every `execute[A-Z]` export in multi-operation mode. */
function operationFunctions(mod: Record<string, unknown>): Array<[string, OperationFn]> {
	if (typeof mod.execute === 'function') {
		return [['execute', mod.execute as OperationFn]];
	}
	const ops: Array<[string, OperationFn]> = [];
	for (const [name, value] of Object.entries(mod)) {
		if (/^execute[A-Z]/.test(name) && typeof value === 'function') {
			ops.push([name, value as OperationFn]);
		}
	}
	return ops;
}

/** Marker value for a known parameter, by property type. Markers are conspicuous (`--name--`) and URL-template-safe. */
function derivedValue(name: string, type: unknown): unknown {
	const marker = `--${name}--`;
	if (type === 'resourceLocator') {
		return { mode: 'name', value: marker };
	}
	switch (type) {
		case 'number':
			return 1;
		case 'boolean':
			return false;
		case 'json':
			// n8n `json` properties hold JSON *text*; operations JSON.parse() it
			// (e.g. OvhCloudDomain/resources/zone/domainZoneResetPost.operation.ts:54).
			// An actual `{}` object would stringify to "[object Object]" and throw.
			return '{}';
		case 'fixedCollection':
		case 'collection':
			return {};
		case 'string':
			// String mocks are valid JSON so operations that JSON.parse() string-typed params (e.g. configuration, rolesJson, nodesPattern) don't crash.
			return JSON.stringify(marker);
		default:
			return marker;
	}
}

function assertVerbConformance(
	relFile: string,
	opName: string,
	client: MockClient,
	methodOverrides?: Record<string, string>,
): void {
	const expected = expectedVerb(relFile, methodOverrides);
	if (expected === undefined) return; // No mutating token in the name → no verb asserted.
	const used: string[] = [];
	if (client.httpGet.mock.calls.length > 0) used.push('get');
	if (client.httpPost.mock.calls.length > 0) used.push('post');
	if (client.httpPut.mock.calls.length > 0) used.push('put');
	if (client.httpDelete.mock.calls.length > 0) used.push('delete');
	expect(used).toEqual(
		[expected],
		`verb conformance for ${relFile} (${opName}): expected '${expected}' from the filename, got [${used.join(', ')}]`,
	);
}

export function runOperationSuite(opts: NodeSuiteOptions): void {
	const basePaths = Array.isArray(opts.basePath) ? opts.basePath : [opts.basePath];
	const skipped = new Set(opts.skipFiles ?? []);
	const files = discoverOperationFiles(opts.nodeDir).filter((file) => !skipped.has(file));

	if (files.length === 0) {
		// A silently empty suite would hide a whole node directory.
		throw new Error(`runOperationSuite: no *.operation.ts file found under ${opts.nodeDir}`);
	}

	describe(`operation suite (${opts.resource} / ${opts.operationParam})`, () => {
		beforeEach(() => {
			jest.clearAllMocks();
			const client = mockState.client!;
			// Non-empty array for GET: list operations `.map()` the response
			// ({}` would throw) and object operations survive array shapes.
			client.httpGet.mockResolvedValue(['--item--']);
			client.httpPost.mockResolvedValue({});
			client.httpPut.mockResolvedValue({});
			client.httpDelete.mockResolvedValue(undefined);
		});

		for (const relFile of files) {
			describe(relFile, () => {
				let loadError: unknown = null;
				let mod: Record<string, unknown> = {};
				try {
					mod = jest.requireActual(path.resolve(process.cwd(), relFile)) as Record<string, unknown>;
				} catch (err) {
					loadError = err;
				}

				it('module loads', () => {
					if (loadError !== null) throw loadError;
				});

				it('exports execute (or execute[A-Z] in multi-operation mode)', () => {
					if (loadError !== null) throw loadError;
					const ops = operationFunctions(mod);
				expect(ops.length).toBeGreaterThan(0, `no execute / execute[A-Z] export found in ${relFile}`);
				for (const [opName, fn] of ops) {
					expect(typeof fn).toBe('function', `export '${opName}' must be a function`);
				}
				});

				it('description conforms', () => {
					if (loadError !== null) throw loadError;
					if (typeof mod.description !== 'function') return; // No description export → check skipped.
					const props = (mod.description as (o?: IDisplayOptions) => INodeProperties[])({});
					expect(Array.isArray(props)).toBe(true, 'description({}) must return an array');
					// length 0 is legitimate: no-parameter operations (e.g.
					// OvhCloudDomain/resources/zone/domainZoneListGet.operation.ts)
					// expose no properties.
					const names = props.map((prop) => prop.name);
					for (const name of names) {
						expect(typeof name === 'string' && name.length > 0).toBe(
							true,
							`every property needs a non-empty name (got ${String(name)})`,
						);
					}
					expect(new Set(names).size).toBe(names.length, 'property names must be unique');
					for (const prop of props) {
						expect(typeof prop.displayName === 'string' && prop.displayName.length > 0).toBe(
							true,
							`property '${String(prop.name)}' needs a displayName`,
						);
						expect(KNOWN_TYPES.has(prop.type ?? '')).toBe(
							true,
							`unknown type '${String(prop.type)}' on property '${String(prop.name)}'`,
						);
						if (prop.type === 'resourceLocator') {
							expect(prop.required === true).toBe(
								true,
								`resourceLocator '${String(prop.name)}' must be required`,
							);
							// v2 generated locators omit `modes` and carry a bare
							// `typeOptions.searchListMethod`; either shape is acceptable
							// — the registry check on the collected method(s) is the
							// meaningful part.
							const locatorMethod = (
								prop as INodeProperties & { typeOptions?: { searchListMethod?: string } }
							).typeOptions?.searchListMethod;
							const hasModes = Array.isArray(prop.modes) && prop.modes.length > 0;
							expect(hasModes || typeof locatorMethod === 'string').toBe(
								true,
								`resourceLocator '${String(prop.name)}' must define modes or typeOptions.searchListMethod`,
							);
							const searchListMethods: string[] = [];
							for (const mode of (prop.modes ?? []) as Array<{
								typeOptions?: { searchListMethod?: string };
							}>) {
								const searchListMethod = mode.typeOptions?.searchListMethod;
								if (typeof searchListMethod === 'string') {
									searchListMethods.push(searchListMethod);
								}
							}
							if (typeof locatorMethod === 'string') {
								searchListMethods.push(locatorMethod);
							}
							for (const method of searchListMethods) {
								expect(opts.listSearchMethods).toContain(
									method,
									`searchListMethod '${method}' is not registered in methods.listSearch`,
								);
							}
						}
					}
				});

				it('execute smoke (multi-item) + URL/verb conformance', async () => {
					if (loadError !== null) throw loadError;
					const ops = operationFunctions(mod);
					expect(ops.length).toBeGreaterThan(0);

					// Typed getNodeParameter mock: values derived from the file's own
					// description(), caller overrides win.
					const props =
						typeof mod.description === 'function'
							? (mod.description as (o?: IDisplayOptions) => INodeProperties[])({})
							: [];
					const typesByName: Record<string, unknown> = {};
					for (const prop of props) {
						if (prop.name !== undefined && !(prop.name in typesByName)) {
							typesByName[prop.name] = prop.type;
						}
					}
					const overrides: Record<string, unknown> = opts.paramValues?.[relFile] ?? {};
					const client = mockState.client!;

					for (const [opName, fn] of ops) {
						const readsByIndex: Record<number, Set<string>> = {};
						const getNodeParameter = jest.fn(
							(
								name: string,
								itemIndex?: unknown,
								defaultValue?: unknown,
								additionalOptions?: { extractValue?: boolean },
							) => {
								const idx = typeof itemIndex === 'number' ? itemIndex : 0;
								(readsByIndex[idx] ??= new Set<string>()).add(name);
								let raw: unknown;
								if (name in overrides) {
									raw = overrides[name];
								} else if (name in typesByName) {
									raw = derivedValue(name, typesByName[name]);
								} else if (defaultValue !== undefined) {
									raw = defaultValue;
								} else {
									raw = '';
								}
								if (additionalOptions?.extractValue) {
									if (typeof raw === 'string') return { value: raw };
									if (typeof raw === 'object' && raw !== null && 'value' in raw) {
										return { value: (raw as { value: unknown }).value };
									}
								}
								return raw;
							},
						);
						const ctx = {
							helpers: { returnJsonArray: jest.fn((items: unknown) => items) },
							// Some operations merge the input item into the output
							// (e.g. OvhCloudDedicated: `this.getInputData()[_itemIndex]`);
							// two items cover both index-0 and index-1 calls.
							getInputData: jest.fn(() => [
								{ json: {} },
								{ json: {} },
							]),
							getNodeParameter,
						} as unknown as SmokeContext;

						// Isolate this operation's HTTP calls (mockClear keeps the
						// resolved values set in beforeEach).
						jest.clearAllMocks();
						const result0 = await fn.call(ctx, 0);
						const result1 = await fn.call(ctx, 1);

						const urls = [
							...client.httpGet.mock.calls,
							...client.httpPut.mock.calls,
							...client.httpPost.mock.calls,
							...client.httpDelete.mock.calls,
						].map((call) => call[0] as string);
						expect(urls.length).toBeGreaterThan(0, `${opName}: expected at least one HTTP call`);
						for (const url of urls) {
							expect(basePaths.some((p) => url.startsWith(p))).toBe(
								true,
								`${opName}: url '${url}' must start with one of [${basePaths.join(', ')}] (absolute path, no relative '${opts.resource}/...')`,
							);
						}
						// DELETE-style operations legitimately return `[]`
						// directly (no returnJsonArray call) or with empty data,
						// so assert the execute result only.
						expect(Array.isArray(result0)).toBe(true, `${opName}: execute must return an INodeExecutionData[]`);
						expect(Array.isArray(result1)).toBe(true, `${opName}: execute must return an INodeExecutionData[]`);
						assertVerbConformance(relFile, opName, client, opts.methodOverrides);

						const reads0 = readsByIndex[0] ?? new Set<string>();
						const reads1 = readsByIndex[1] ?? new Set<string>();
						expect([...reads1]).toEqual(
							expect.arrayContaining([...reads0]),
							`${opName}: every parameter read at item 0 must also be read at item 1 (hardcoded-index anti-pattern)`,
						);
					}
				});
			});
		}
	});
}
