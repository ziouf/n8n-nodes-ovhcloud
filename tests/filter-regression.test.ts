/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Regression tests for EVERY filter of EVERY operation.
 *
 * For each of the 17 filter sets this verifies:
 * 1. No filter → query string is `undefined`
 * 2. Each filter active → the exact query param is sent to the API
 * 3. Each filter empty → the param is absent (query string is `undefined`)
 * 4. UI wiring → every definition is wired in the generated description
 */

/* ------------------------------------------------------------------ */
/*  Imports — filter sets + execute functions                         */
/* ------------------------------------------------------------------ */

import {
	BILL_FILTERS,
	executeListBills,
	descriptionListBills,
} from '../nodes/OvhCloudMe/operations/billing.operation';
import {
	DEPOSIT_FILTERS,
	executeListDeposits,
	WITHDRAWAL_FILTERS,
	executeListWithdrawals,
	REFUND_FILTERS,
	executeListRefunds,
	REVERSE_BILL_FILTERS,
	executeListReverseBills,
	CORRECTIVE_INVOICE_FILTERS,
	executeListCorrectiveInvoices,
	descriptionListDeposits,
	descriptionListWithdrawals,
	descriptionListRefunds,
	descriptionListReverseBills,
	descriptionListCorrectiveInvoices,
} from '../nodes/OvhCloudMe/operations/financial.operation';
import {
	BANK_ACCOUNT_FILTERS,
	executeListBankAccounts,
	ORDER_FILTERS,
	executeListOrders,
	descriptionListBankAccounts,
	descriptionListOrders,
} from '../nodes/OvhCloudMe/operations/payment.operation';
import {
	TICKET_FILTERS,
	execute as executeListTickets,
	description as descriptionTicketList,
} from '../nodes/OvhCloudSupport/resources/list.operation';
import {
	HOSTING_TASK_FILTERS,
	execute as executeListTasks,
	description as descriptionHostingTasks,
} from '../nodes/OvhCloudHosting/listTasks.operation';
import {
	DOMAIN_NAME_TASK_FILTERS,
	execute as executeDomainNameTaskListGet,
	description as descriptionDomainNameTaskListGet,
} from '../nodes/OvhCloudDomain/resources/name/domainNameTaskListGet.operation';
import {
	IP_FIREWALL_RULE_FILTERS,
	execute as executeIpFirewallRuleListGet,
	description as descriptionIpFirewallRuleListGet,
} from '../nodes/OvhCloudIp/resources/firewall/ipFirewallRuleListGet.operation';
import {
	description as describeVpsList,
	execute as executeVpsList,
	VPS_LIST_FILTERS,
} from '../nodes/OvhCloudVps/list.operation';
import {
	description as describeIamPolicy,
	execute as executeIamPolicy,
	IAM_POLICY_LIST_FILTERS,
} from '../nodes/OvhCloudIam/iampolicyListGet.operation';
// describeSslTasks, describeOutgoing, describeIncoming are unused — their
// operations use parameterPath mode and skip UI wiring tests.
import {
	execute as executeSslTasks,
	SSL_TASKS_LIST_FILTERS,
} from '../nodes/OvhCloudCdn/resources/ssl/sslTasksListGet.operation';
import {
	execute as executeOutgoing,
	OUTGOING_LIST_FILTERS,
} from '../nodes/OvhCloudSms/resources/outgoing/outgoingListGet.operation';
import {
	execute as executeIncoming,
	INCOMING_LIST_FILTERS,
} from '../nodes/OvhCloudSms/resources/incoming/incomingListGet.operation';

import { createMockApiClient } from './helpers/mockClient';
import type { FilterDefinition } from '../shared/nodes/filterOptions';
import { buildFilterQuery } from '../shared/nodes/filterQuery';

/* ------------------------------------------------------------------ */
/*  Mock setup — fresh client each test via getClient factory          */
/* ------------------------------------------------------------------ */

let mockClient: any;

// Factory captures the variable reference, so reassigning mockClient
// in beforeEach makes getClient return the new instance.
jest.mock('../shared/transport/ApiClient', () => ({
	ApiClient: jest.fn(() => mockClient),
	getClient: jest.fn(() => mockClient),
}));

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface RegistryEntry {
	label: string;
	defs: FilterDefinition[];
	execute: (this: any, itemIndex?: number) => Promise<any>;
	buildCtx: (filters: unknown, extraParams?: Record<string, unknown>) => any;
	listEndpoint: string;
}

/* ------------------------------------------------------------------ */
/*  Utility — sample value per type                                     */
/* ------------------------------------------------------------------ */

function sampleFor(def: FilterDefinition): unknown {
	switch (def.type) {
		case 'number':
			return 42;
		case 'dateTime':
			return '2026-01-15T10:30:00Z';
		case 'options':
			return def.options?.[0]?.value ?? 'sample';
		case 'json':
			return '{"environment":[{"operator":"EQ","value":"prod"}]}';
		case 'multiOptions':
			return ['alpha', 'beta'];
		case 'string':
		default:
			return def.delimiter ? 'one,two' : 'test-value';
	}
}

function expectedFor(def: FilterDefinition, sample: unknown): unknown {
	switch (def.type) {
		case 'number':
			return 42;
		case 'options':
			return sample;
		case 'json':
			return JSON.parse(String(sample));
		case 'multiOptions':
			return ['alpha', 'beta'];
		case 'string':
			return def.delimiter ? ['one', 'two'] : 'test-value';
		case 'dateTime':
		default:
			return String(sample);
	}
}

function emptyValueFor(def: FilterDefinition): unknown {
	switch (def.type) {
		case 'number':
			return 0;
		case 'string':
		case 'dateTime':
			return '';
		case 'options': {
			const firstOpt = def.options?.[0];
			if (typeof firstOpt?.value === 'boolean') {
				return undefined;
			}
			return '';
		}
		case 'multiOptions':
			return [];
		case 'json':
			return '';
		default:
			return '';
	}
}

/* ------------------------------------------------------------------ */
/*  Registry — 17 filter sets with execute + buildCtx                 */
/* ------------------------------------------------------------------ */

const REGISTRY: RegistryEntry[] = [
	// 1. Bills
	{
		label: 'BILL_FILTERS',
		defs: BILL_FILTERS,
		execute: executeListBills,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/bill',
	},
	// 2. Deposits
	{
		label: 'DEPOSIT_FILTERS',
		defs: DEPOSIT_FILTERS,
		execute: executeListDeposits,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/deposit',
	},
	// 3. Corrective Invoices
	{
		label: 'CORRECTIVE_INVOICE_FILTERS',
		defs: CORRECTIVE_INVOICE_FILTERS,
		execute: executeListCorrectiveInvoices,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/correctiveInvoice',
	},
	// 4. Refunds
	{
		label: 'REFUND_FILTERS',
		defs: REFUND_FILTERS,
		execute: executeListRefunds,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/refund',
	},
	// 5. Reverse Bills
	{
		label: 'REVERSE_BILL_FILTERS',
		defs: REVERSE_BILL_FILTERS,
		execute: executeListReverseBills,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/reverseBill',
	},
	// 6. Withdrawals
	{
		label: 'WITHDRAWAL_FILTERS',
		defs: WITHDRAWAL_FILTERS,
		execute: executeListWithdrawals,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/withdrawal',
	},
	// 7. Bank Accounts
	{
		label: 'BANK_ACCOUNT_FILTERS',
		defs: BANK_ACCOUNT_FILTERS,
		execute: executeListBankAccounts,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/paymentMean/bankAccount',
	},
	// 8. Orders
	{
		label: 'ORDER_FILTERS',
		defs: ORDER_FILTERS,
		execute: executeListOrders,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/me/order',
	},
	// 9. Support Tickets
	{
		label: 'TICKET_FILTERS',
		defs: TICKET_FILTERS,
		execute: executeListTickets,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/support/tickets',
	},
	// 10. Hosting Tasks
	{
		label: 'HOSTING_TASK_FILTERS',
		defs: HOSTING_TASK_FILTERS,
		execute: executeListTasks,
		buildCtx: (filters: unknown, extra?: Record<string, unknown>) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				if (key === 'serviceName') return extra?.serviceName ?? 'test.ovh';
				return '';
			}),
			getInputData: () => [{ json: {} }],
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/hosting/web/test.ovh/tasks',
	},
	// 11. Domain Name Tasks
	{
		label: 'DOMAIN_NAME_TASK_FILTERS',
		defs: DOMAIN_NAME_TASK_FILTERS,
		execute: executeDomainNameTaskListGet,
		buildCtx: (filters: unknown, extra?: Record<string, unknown>) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				if (key === 'domainName') return extra?.domainName ?? 'example.com';
				return '';
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/domain/name/example.com/task',
	},
	// 12. IP Firewall Rules
	{
		label: 'IP_FIREWALL_RULE_FILTERS',
		defs: IP_FIREWALL_RULE_FILTERS,
		execute: executeIpFirewallRuleListGet,
		buildCtx: (_filters: unknown, extra?: Record<string, unknown>) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return _filters;
				if (key === 'ip') return extra?.ip ?? '1.2.3.4';
				if (key === 'ipOnFirewall') return extra?.ipOnFirewall ?? '5.6.7.8';
				return '';
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/ip/1.2.3.4/firewall/5.6.7.8/rule',
	},
	// 13. VPS List
	{
		label: 'VPS_LIST_FILTERS',
		defs: VPS_LIST_FILTERS,
		execute: executeVpsList,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				if (key === 'returnFullObjects') return false;
				if (key === 'maxItems') return 1000;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/vps',
	},
	// 14. IAM Policy List
	{
		label: 'IAM_POLICY_LIST_FILTERS',
		defs: IAM_POLICY_LIST_FILTERS,
		execute: executeIamPolicy,
		buildCtx: (filters: unknown) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'filters') return filters;
				return {};
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/iam/policy',
	},
	// 15. SSL Tasks (parameterPath mode)
	{
		label: 'SSL_TASKS_LIST_FILTERS',
		defs: SSL_TASKS_LIST_FILTERS,
		execute: executeSslTasks,
		buildCtx: (_filters: unknown, extra?: Record<string, unknown>) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'serviceName') return extra?.serviceName ?? 'test.ovh';
				if (key === 'function') return extra?.function ?? '';
				if (key === 'status') return extra?.status ?? '';
				return '';
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/cdn/dedicated/test.ovh/ssl/tasks',
	},
	// 16. SMS Outgoing (parameterPath mode)
	{
		label: 'OUTGOING_LIST_FILTERS',
		defs: OUTGOING_LIST_FILTERS,
		execute: executeOutgoing,
		buildCtx: (_filters: unknown, extra?: Record<string, unknown>) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'serviceName') return extra?.serviceName ?? 'sms-123456';
				if (key === 'batchID') return extra?.batchID ?? '';
				if (key === 'creationDatetimeFrom') return extra?.creationDatetimeFrom ?? '';
				if (key === 'creationDatetimeTo') return extra?.creationDatetimeTo ?? '';
				if (key === 'deliveryReceipt') return extra?.deliveryReceipt ?? 0;
				if (key === 'differedDelivery') return extra?.differedDelivery ?? 0;
				if (key === 'messageID') return extra?.messageID ?? '';
				if (key === 'ptt') return extra?.ptt ?? 0;
				if (key === 'receiver') return extra?.receiver ?? '';
				if (key === 'sender') return extra?.sender ?? '';
				if (key === 'tag') return extra?.tag ?? '';
				return '';
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/sms/sms-123456/outgoing',
	},
	// 17. SMS Incoming (parameterPath mode)
	{
		label: 'INCOMING_LIST_FILTERS',
		defs: INCOMING_LIST_FILTERS,
		execute: executeIncoming,
		buildCtx: (_filters: unknown, extra?: Record<string, unknown>) => ({
			getNodeParameter: jest.fn((key: string): any => {
				if (key === 'serviceName') return extra?.serviceName ?? 'sms-123456';
				if (key === 'creationDatetimeFrom') return extra?.creationDatetimeFrom ?? '';
				if (key === 'creationDatetimeTo') return extra?.creationDatetimeTo ?? '';
				if (key === 'sender') return extra?.sender ?? '';
				if (key === 'tag') return extra?.tag ?? '';
				return '';
			}),
			helpers: { returnJsonArray: jest.fn((d: any) => d) },
		}),
		listEndpoint: '/sms/sms-123456/incoming',
	},
];

/* ------------------------------------------------------------------ */
/*  Helpers                                                             */
/* ------------------------------------------------------------------ */

/**
 * Build a single-group filters object for one definition.
 * Format: `{ [group]: [{ [name]: value }] }`
 *
 * This is used in tests to activate exactly ONE filter at a time,
 * avoiding collisions when multiple definitions share the same `name`
 * (e.g. IAM all use `name: 'value'`).
 */
function buildSingleFilter(def: FilterDefinition, value: unknown): Record<string, unknown[]> {
	if (def.parameterPath !== undefined) {
		return {};
	}
	return { [def.group]: [{ [def.name]: value }] };
}

function isParameterPath(def: FilterDefinition): boolean {
	return def.parameterPath !== undefined;
}

/* ------------------------------------------------------------------ */
/*  Direct unit tests for buildFilterQuery (verifies core logic)      */
/* ------------------------------------------------------------------ */

describe('buildFilterQuery (direct)', () => {
	it('returns undefined when no filters are set', () => {
		const ctx = {
			getNodeParameter: jest.fn(() => ({})),
		};
		const result = buildFilterQuery(ctx as any, 0, BILL_FILTERS);
		expect(result).toBeUndefined();
	});

	it('returns query params when filters are set (fixedCollection mode)', () => {
		const filters = { dateRange: [{ from: '2026-01-15T10:30:00Z' }] };
		const ctx = {
			getNodeParameter: jest.fn((key: string) => {
				if (key === 'filters') return filters;
				return {};
			}),
		};
		const result = buildFilterQuery(ctx as any, 0, BILL_FILTERS);
		expect(result).toEqual({ 'date.from': '2026-01-15T10:30:00Z' });
	});

	it('returns query params when parameterPath mode is used', () => {
		const ctx = {
			getNodeParameter: jest.fn((key: string) => {
				if (key === 'function') return 'flush';
				if (key === 'status') return '';
				return '';
			}),
		};
		const result = buildFilterQuery(ctx as any, 0, SSL_TASKS_LIST_FILTERS);
		expect(result).toEqual({ function: 'flush' });
	});

	it('skips empty parameterPath values', () => {
		const ctx = {
			getNodeParameter: jest.fn((_key: string) => ''),
		};
		const result = buildFilterQuery(ctx as any, 0, SSL_TASKS_LIST_FILTERS);
		expect(result).toBeUndefined();
	});

	it('splits delimited strings into arrays', () => {
		const filters = { action: [{ value: 'a1,a2' }] };
		const ctx = {
			getNodeParameter: jest.fn((key: string) => {
				if (key === 'filters') return filters;
				return {};
			}),
		};
		const result = buildFilterQuery(ctx as any, 0, IAM_POLICY_LIST_FILTERS);
		expect(result).toEqual({ action: ['a1', 'a2'] });
	});

	it('skips empty delimited strings', () => {
		const filters = { action: [{ value: '' }] };
		const ctx = {
			getNodeParameter: jest.fn((key: string) => {
				if (key === 'filters') return filters;
				return {};
			}),
		};
		const result = buildFilterQuery(ctx as any, 0, IAM_POLICY_LIST_FILTERS);
		expect(result).toBeUndefined();
	});

	it('parses JSON filter values', () => {
		const filters = { iamTags: [{ value: '{"env":["prod"]}' }] };
		const ctx = {
			getNodeParameter: jest.fn((key: string) => {
				if (key === 'filters') return filters;
				return {};
			}),
		};
		const result = buildFilterQuery(ctx as any, 0, VPS_LIST_FILTERS);
		expect(result).toEqual({ iamTags: { env: ['prod'] } });
	});

	it('keeps boolean option values as-is', () => {
		const filters = { readOnly: [{ value: true }] };
		const ctx = {
			getNodeParameter: jest.fn((key: string) => {
				if (key === 'filters') return filters;
				return {};
			}),
		};
		const result = buildFilterQuery(ctx as any, 0, IAM_POLICY_LIST_FILTERS);
		expect(result).toEqual({ readOnly: true });
	});

	it('handles multiple filters combined', () => {
		const filters = {
			dateRange: [{ from: '2026-01-01' }],
			ids: [{ orderId: 42 }],
		};
		const ctx = {
			getNodeParameter: jest.fn((key: string) => {
				if (key === 'filters') return filters;
				return {};
			}),
		};
		const result = buildFilterQuery(ctx as any, 0, BILL_FILTERS);
		expect(result).toEqual({
			'date.from': '2026-01-01',
			orderId: 42,
		});
	});
});

/* ------------------------------------------------------------------ */
/*  Test suites — one `describe` per registry entry                     */
/* ------------------------------------------------------------------ */

describe('filter-regression', () => {
	for (const entry of REGISTRY) {
		describe(entry.label, () => {
			let ctx: any;

			beforeEach(() => {
				mockClient = createMockApiClient();
			});

			// ── Series A: No filter → undefined query string ──────────

			it('sends no query params when no filter is set', async () => {
				if (isParameterPath(entry.defs[0])) {
					ctx = entry.buildCtx({}, {});
				} else {
					ctx = entry.buildCtx({});
				}

				mockClient.httpGet.mockResolvedValue([]);
				await entry.execute.call(ctx, 0);

				expect(mockClient.httpGet).toHaveBeenCalledWith(entry.listEndpoint, undefined);
			});

			// ── Series B: Each filter active → exact query param ──────

			for (const def of entry.defs) {
				it(`maps '${def.queryParam}' to the API query string`, async () => {
					const sample = sampleFor(def);
					const expected = expectedFor(def, sample);

					if (isParameterPath(def)) {
						// parameterPath mode: set only this flat param
						const extra: Record<string, unknown> = {
							[def.parameterPath!]: sample,
						};
						ctx = entry.buildCtx({}, extra);
					} else {
						// buildSingleFilter ensures ONLY this group-field pair
						// is set, avoiding collisions when multiple defs share
						// the same name (e.g. IAM all use name='value').
						const filters = buildSingleFilter(def, sample);
						ctx = entry.buildCtx(filters);
					}

					mockClient.httpGet.mockResolvedValue([]);
					await entry.execute.call(ctx, 0);

					expect(mockClient.httpGet).toHaveBeenCalledWith(entry.listEndpoint, {
						[def.queryParam]: expected,
					});
				});
			}

			// ── Series C: Each filter empty → param absent ────────────

			for (const def of entry.defs) {
				it(`skips empty value for '${def.queryParam}'`, async () => {
					const emptyVal = emptyValueFor(def);

					if (isParameterPath(def)) {
						const extra: Record<string, unknown> = {
							[def.parameterPath!]: emptyVal,
						};
						ctx = entry.buildCtx({}, extra);
					} else {
						const filters = buildSingleFilter(def, emptyVal);
						ctx = entry.buildCtx(filters);
					}

					mockClient.httpGet.mockResolvedValue([]);
					await entry.execute.call(ctx, 0);

					expect(mockClient.httpGet).toHaveBeenCalledWith(entry.listEndpoint, undefined);
				});
			}

			// ── Series D: UI wiring (non-parameterPath only) ──────────

			if (!entry.defs.some((d) => isParameterPath(d))) {
				it('all definitions are wired in the description', () => {
					let result: any[];

					switch (entry.label) {
						case 'BILL_FILTERS':
							result = descriptionListBills({ show: {} });
							break;
						case 'DEPOSIT_FILTERS':
							result = descriptionListDeposits({ show: {} });
							break;
						case 'CORRECTIVE_INVOICE_FILTERS':
							result = descriptionListCorrectiveInvoices({ show: {} });
							break;
						case 'REFUND_FILTERS':
							result = descriptionListRefunds({ show: {} });
							break;
						case 'REVERSE_BILL_FILTERS':
							result = descriptionListReverseBills({ show: {} });
							break;
						case 'WITHDRAWAL_FILTERS':
							result = descriptionListWithdrawals({ show: {} });
							break;
						case 'BANK_ACCOUNT_FILTERS':
							result = descriptionListBankAccounts({ show: {} });
							break;
						case 'ORDER_FILTERS':
							result = descriptionListOrders({ show: {} });
							break;
						case 'TICKET_FILTERS':
							result = descriptionTicketList({ show: {} });
							break;
						case 'HOSTING_TASK_FILTERS':
							result = descriptionHostingTasks({ show: {} });
							break;
						case 'DOMAIN_NAME_TASK_FILTERS':
							result = descriptionDomainNameTaskListGet({ show: {} });
							break;
						case 'IP_FIREWALL_RULE_FILTERS':
							result = descriptionIpFirewallRuleListGet({ show: {} });
							break;
						case 'VPS_LIST_FILTERS':
							result = describeVpsList({ show: {} });
							break;
						case 'IAM_POLICY_LIST_FILTERS':
							result = describeIamPolicy({ show: {} });
							break;
						default:
							return;
					}

					const filterParam = result.find((p: any) => p.type === 'fixedCollection');
					expect(filterParam).toBeDefined();
					expect(filterParam?.name).toBe('filters');

					const groupOptions = filterParam?.options as any[];
					const groupsMap = new Map<string, any[]>();
					for (const opt of groupOptions) {
						groupsMap.set(opt.name, opt.values);
					}

					for (const def of entry.defs) {
						const groupValues = groupsMap.get(def.group);
						expect(groupValues).toBeDefined();
						const fieldNames = groupValues.map((v: any) => v.name);
						expect(fieldNames).toContain(def.name);
					}
				});
			}
		});
	}
});
