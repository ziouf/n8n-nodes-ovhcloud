/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Conformance tests for filter definitions against OVHcloud OpenAPI specs.
 *
 * For every exported `*_FILTERS` array this verifies:
 * 1. Each `queryParam` exists as a query-parameter on the corresponding GET
 *    endpoint in the OpenAPI spec (merged from api-level and operation-level).
 * 2. Declared params are `required: false` in the spec.
 * 3. Enum options (`type === 'options'`) are a subset of the spec's model enum.
 */

import * as fs from 'fs';
import * as path from 'path';

// ── Imports ────────────────────────────────────────────────────────────────

import { BILL_FILTERS } from '../nodes/OvhCloudMe/operations/billing.operation';
import { DEPOSIT_FILTERS } from '../nodes/OvhCloudMe/operations/financial.operation';
import { BANK_ACCOUNT_FILTERS } from '../nodes/OvhCloudMe/operations/payment.operation';
import { TICKET_FILTERS } from '../nodes/OvhCloudSupport/resources/list.operation';
import { HOSTING_TASK_FILTERS } from '../nodes/OvhCloudHosting/listTasks.operation';
import { DOMAIN_NAME_TASK_FILTERS } from '../nodes/OvhCloudDomain/resources/name/domainNameTaskListGet.operation';

// ── Types ──────────────────────────────────────────────────────────────────

interface SpecQueryParameter {
	name: string;
	dataType: string;
	paramType: string;
	required: boolean;
}

interface FilterEntry {
	label: string;
	defs: Array<{
		group: string;
		groupDisplayName: string;
		name: string;
		displayName: string;
		queryParam: string;
		type: string;
		description?: string;
		default?: any;
		options?: Array<{ name: string; value: string | boolean }>;
		placeholder?: string;
		parameterPath?: string;
	}>;
	specFile: string;
	version: string;
	endpoint: string;
}

// ── Registry ───────────────────────────────────────────────────────────────

const REGISTRY: FilterEntry[] = [
	{
		label: 'BILL_FILTERS',
		defs: BILL_FILTERS,
		specFile: 'me.json',
		version: 'v1',
		endpoint: '/me/bill',
	},
	{
		label: 'DEPOSIT_FILTERS',
		defs: DEPOSIT_FILTERS,
		specFile: 'me.json',
		version: 'v1',
		endpoint: '/me/deposit',
	},
	{
		label: 'BANK_ACCOUNT_FILTERS',
		defs: BANK_ACCOUNT_FILTERS,
		specFile: 'me.json',
		version: 'v1',
		endpoint: '/me/paymentMean/bankAccount',
	},
	{
		label: 'TICKET_FILTERS',
		defs: TICKET_FILTERS,
		specFile: 'support.json',
		version: 'v1',
		endpoint: '/support/tickets',
	},
	{
		label: 'HOSTING_TASK_FILTERS',
		defs: HOSTING_TASK_FILTERS,
		specFile: 'hosting.json',
		version: 'v1',
		endpoint: '/hosting/web/{serviceName}/tasks',
	},
	{
		label: 'DOMAIN_NAME_TASK_FILTERS',
		defs: DOMAIN_NAME_TASK_FILTERS,
		specFile: 'domain.json',
		version: 'v1',
		endpoint: '/domain/{serviceName}/task',
	},
];

// ── Helpers ────────────────────────────────────────────────────────────────

/**
 * Load and parse an OpenAPI spec JSON file.
 */
function loadSpec(version: string, specFile: string): any {
	const filePath = path.join(__dirname, '..', 'docs', 'api-specs', version, specFile);
	const raw = fs.readFileSync(filePath, 'utf8');
	return JSON.parse(raw);
}

/**
 * Extract all query parameters for a given endpoint from the spec.
 *
 * Merges `api.parameters` (api-level) with `operation.parameters` from
 * every GET operation (`httpMethod === 'GET'`).  Only params with
 * `paramType === 'query'` are included.  Duplicates are resolved by name
 * (first occurrence wins).
 */
function getQueryParams(spec: any, endpoint: string): Map<string, SpecQueryParameter> {
	const apiEntry = spec.apis?.find((a: any) => a.path === endpoint);

	if (!apiEntry) {
		throw new Error(
			`Endpoint "${endpoint}" not found in spec. Available paths: ${spec.apis?.map((a: any) => a.path).join(', ')}`,
		);
	}

	const result = new Map<string, SpecQueryParameter>();

	// 1. api-level parameters (if present)
	if (Array.isArray(apiEntry.parameters)) {
		for (const param of apiEntry.parameters) {
			if (param.paramType === 'query') {
				result.set(param.name, param);
			}
		}
	}

	// 2. operation-level parameters from GET operations
	if (Array.isArray(apiEntry.operations)) {
		for (const op of apiEntry.operations) {
			if (op.httpMethod !== 'GET') continue;
			if (!Array.isArray(op.parameters)) continue;

			for (const param of op.parameters) {
				if (param.paramType === 'query') {
					// Deduplicate: first occurrence wins
					if (!result.has(param.name)) {
						result.set(param.name, param);
					}
				}
			}
		}
	}

	return result;
}

/**
 * Resolve a dataType string to the spec model that defines it.
 *
 * Examples:
 *   "boolean"      → null (primitive, no model)
 *   "string"       → null (primitive, no model)
 *   "datetime"     → null (primitive, no model)
 *   "long"         → null (primitive, no model)
 *   "billing.CategoryEnum"    → spec.models["billing.CategoryEnum"]
 *   "support.TicketStatusEnum" → spec.models["support.TicketStatusEnum"]
 */
function resolveModel(spec: any, dataType: string): any {
	// Primitives have no model
	const primitives = new Set([
		'string',
		'boolean',
		'long',
		'datetime',
		'integer',
		'float',
		'double',
	]);
	if (primitives.has(dataType)) return null;

	// Try direct lookup first
	if (spec.models && spec.models[dataType]) {
		return spec.models[dataType];
	}

	// Try namespace-qualified name
	const parts = dataType.split('.');
	if (parts.length === 2) {
		const name = parts[1];
		if (spec.models && spec.models[name]) {
			return spec.models[name];
		}
	}

	return null;
}

// ── Test factory (avoids let-closure bug in nested loops) ─────────────────

function registerTests(entry: FilterEntry): void {
	const spec = loadSpec(entry.version, entry.specFile);
	const queryParams = getQueryParams(spec, entry.endpoint);

	describe(entry.label, () => {
		// ── 1. queryParam existence ────────────────────────────────

		for (const def of entry.defs) {
			// Skip legacy-mode definitions (parameterPath set).
			if (def.parameterPath !== undefined) continue;

			it(`query param '${def.queryParam}' exists on GET ${entry.endpoint}`, () => {
				expect(queryParams.has(def.queryParam)).toBe(true);
			});
		}

		// ── 2. required === false ──────────────────────────────────

		for (const def of entry.defs) {
			if (def.parameterPath !== undefined) continue;
			if (!queryParams.has(def.queryParam)) continue; // already reported above

			it(`query param '${def.queryParam}' is not required in spec`, () => {
				const param = queryParams.get(def.queryParam)!;
				expect(param.required).toBe(false);
			});
		}

		// ── 3. Enum subsetting ─────────────────────────────────────

		for (const def of entry.defs) {
			if (def.parameterPath !== undefined) continue;
			if (def.type !== 'options') continue;
			if (!def.options || def.options.length === 0) continue;
			if (!queryParams.has(def.queryParam)) continue; // already reported above

			const param = queryParams.get(def.queryParam)!;
			const model = resolveModel(spec, param.dataType);

			it(`options for '${def.queryParam}' are subset of spec enum (${param.dataType})`, () => {
				// Boolean flags: just verify values are booleans and dataType is 'boolean'
				if (param.dataType === 'boolean') {
					const allBoolean = def.options.every((o) => typeof o.value === 'boolean');
					expect(allBoolean).toBe(true);
					return;
				}

				// Named enum model: check subset
				expect(model).not.toBeNull();

				if (!model) return; // already failed above

				expect(Array.isArray(model.enum)).toBe(true);

				if (!model.enum) return; // already failed above

				const specEnum = new Set(model.enum);
				const defValues = def.options
					.filter((o) => typeof o.value === 'string')
					.map((o) => o.value as string);

				for (const val of defValues) {
					expect(specEnum.has(val)).toBe(true);
				}

				// Also verify that ALL spec enum values are covered (no missing options)
				for (const specVal of model.enum) {
					expect(defValues.includes(specVal)).toBe(true);
				}
			});
		}
	});
}

// ── Tests ──────────────────────────────────────────────────────────────────

describe('filter-conformance', () => {
	for (const entry of REGISTRY) {
		registerTests(entry);
	}

	// ── Sanity check: registry completeness ────────────────────────────

	it('registry covers at least 6 filter sets', () => {
		expect(REGISTRY.length).toBeGreaterThanOrEqual(6);

		const expectedLabels = [
			'BILL_FILTERS',
			'DEPOSIT_FILTERS',
			'BANK_ACCOUNT_FILTERS',
			'TICKET_FILTERS',
			'HOSTING_TASK_FILTERS',
			'DOMAIN_NAME_TASK_FILTERS',
		];

		const actualLabels = REGISTRY.map((e) => e.label);
		for (const label of expectedLabels) {
			expect(actualLabels).toContain(label);
		}
	});
});
