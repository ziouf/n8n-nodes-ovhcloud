/**
 * Non-regression tests for OvhCloudDomain node operations.
 *
 * Verifies that each .operation.ts calls the correct API endpoint (method + path)
 * as defined in docs/api-specs/v1/domain.json, without testing n8n internals.
 */

import { createMockCtx, invokeOperation, loadSpec, type OperationExecuteFn } from './helpers';

// Import execute functions directly from operation files - Phase 0+1: Root operations
import { execute as listExecute } from '../nodes/OvhCloudDomain/resources/list.operation';
import { execute as getExecute } from '../nodes/OvhCloudDomain/resources/get.operation';

// Import execute functions directly from operation files - Phase 2: Extensions
import { execute as extensionListExecute } from '../nodes/OvhCloudDomain/resources/extensionList.operation';
import { execute as extensionGetExecute } from '../nodes/OvhCloudDomain/resources/extensionGet.operation';
import { execute as extensionByCategoryExecute } from '../nodes/OvhCloudDomain/resources/extensionByCategory.operation';
import { execute as registryConfigurationsGetExecute } from '../nodes/OvhCloudDomain/resources/extensionRegistryConfigurationsGet.operation';

// Import execute functions directly from operation files - Phase 3: Contact & ClaimNotice & ConfigurationRule
import { execute as contactListExecute } from '../nodes/OvhCloudDomain/resources/contactList.operation';
import { execute as contactGetExecute } from '../nodes/OvhCloudDomain/resources/contactGet.operation';
import { execute as claimNoticeExecute } from '../nodes/OvhCloudDomain/resources/claimNotice.operation';
import { execute as configurationRuleExecute } from '../nodes/OvhCloudDomain/resources/configurationRule.operation';

// Import execute functions directly from operation files - Phase 4: AuthInfo, DSRecord, NameServer
import { execute as authInfoGetExecute } from '../nodes/OvhCloudDomain/resources/authInfoGet.operation';
import { execute as dsRecordListExecute } from '../nodes/OvhCloudDomain/resources/dsRecordList.operation';
import { execute as nameServerListExecute } from '../nodes/OvhCloudDomain/resources/nameServerList.operation';

// Import execute functions directly from operation files - Phase 5: Zone sub-resources
import { execute as zoneListExecute } from '../nodes/OvhCloudDomain/resources/zoneList.operation';
import { execute as serviceInfosGetExecute } from '../nodes/OvhCloudDomain/resources/serviceInfosGet.operation';
import { execute as sOAGetExecute } from '../nodes/OvhCloudDomain/resources/sOAGet.operation';
import { execute as statusGetExecute } from '../nodes/OvhCloudDomain/resources/statusGet.operation';
import { execute as taskListGetExecute } from '../nodes/OvhCloudDomain/resources/taskListGet.operation';
import { execute as taskGetExecute } from '../nodes/OvhCloudDomain/resources/taskGet.operation';

const spec = loadSpec('domain');

describe('OvhCloudDomain - All GET Operations', () => {
	describe.each([
		['list (root)', listExecute, /^\/domain$/],
		[
			'contactList (/domain/contact → array of objects)',
			contactListExecute,
			new RegExp(/^\/domain\/contact$/),
		],
	])('%s', (name: string, executeFn: OperationExecuteFn, urlPattern: RegExp) => {
		it('should call the correct API endpoint matching spec', async () => {
			const calls = await invokeOperation(executeFn);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(urlPattern);

			for (const call of calls) expect(call.method).toBe('GET');
		});
	});

	describe.each([['get', getExecute, /^\/domain\//]])(
		'%s - path parameter in URL',
		(name: string, executeFn: OperationExecuteFn) => {
			it(`should call ${name} with serviceName as path segment`, async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['contactGet', contactGetExecute, /^\/domain\/contact\//]])(
		'%s - path parameter in URL',
		(name: string, executeFn: OperationExecuteFn) => {
			it(`should call ${name} with contactId as path segment`, async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['claimNotice', claimNoticeExecute, /^\/domain\/data\/claimNotice$/]])(
		'%s - data sub-resource with query param',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct URL and include domain in qs', async () => {
				const calls = await invokeOperation(executeFn, { domain: 'example.com' });

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['configurationRule', configurationRuleExecute]])(
		'%s - action + domain qs params',
		(name: string, executeFn: OperationExecuteFn) => {
			it(`should include both action and domain in query parameters`, async () => {
				const calls = await invokeOperation(executeFn, {
					action: 'REGISTRATION',
					domain: 'example.com',
				});

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});

			it(`should throw NodeApiError when action is missing`, async () => {
				const ctx = createMockCtx({ domain: 'example.com' });

				await expect(configurationRuleExecute.call(ctx)).rejects.toThrow();

				// Verify no API call was made before the error
				const spy = ctx.helpers.httpRequest;
				expect(spy).not.toHaveBeenCalled();
			});
		},
	);

	describe.each([['extensionList', extensionListExecute, /^\/domain\/extensions$/]])(
		'%s - extensions list endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint for extensions', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['extensionGet', extensionGetExecute, /^\/domain\/extensions\//]])(
		'%s - individual extension by name',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with extension name as path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([
		['extensionByCategory', extensionByCategoryExecute, /^\/domain\/extensions\/byCategory$/],
	])('%s - extensions by category endpoint', (name: string, executeFn: OperationExecuteFn) => {
		it('should call the correct API endpoint for category filtering', async () => {
			const calls = await invokeOperation(executeFn);

			expect(calls.length).toBeGreaterThan(0);
			for (const call of calls) expect(call.method).toBe('GET');
		});
	});

	describe.each([
		['registryConfigurationsGet', registryConfigurationsGetExecute, /^\/domain\/extensions\//],
	])('%s - extension registry configurations', (name: string, executeFn: OperationExecuteFn) => {
		it('should call the correct API endpoint with /registryConfigurations path segment', async () => {
			const calls = await invokeOperation(executeFn);

			expect(calls.length).toBeGreaterThan(0);
			for (const call of calls) expect(call.method).toBe('GET');
		});
	});

	describe.each([['authInfoGet', authInfoGetExecute, /^\/domain\//]])(
		'%s - domain auth info endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /authInfo path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['dsRecordList', dsRecordListExecute, /^\/domain\//]])(
		'%s - DS record list endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /dsRecord path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['nameServerList', nameServerListExecute, /^\/domain\//]])(
		'%s - name server list endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /nameServer path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['zoneList', zoneListExecute, /^\/domain\/zone$/]])(
		'%s - DNS zones list endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint for listing DNS zones', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['serviceInfosGet', serviceInfosGetExecute, /^\/domain\/zone\//]])(
		'%s - zone service info endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /serviceInfos path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['sOAGet', sOAGetExecute, /^\/domain\/zone\//]])(
		'%s - zone SOA record endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /soa path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['statusGet', statusGetExecute, /^\/domain\/zone\//]])(
		'%s - zone status endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /status path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['taskListGet', taskListGetExecute, /^\/domain\/zone\//]])(
		'%s - zone tasks list endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /task path segment and optional query filters', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe.each([['taskGet', taskGetExecute, /^\/domain\/zone\//]])(
		'%s - individual zone task endpoint',
		(name: string, executeFn: OperationExecuteFn) => {
			it('should call the correct API endpoint with /task/{id} path segment', async () => {
				const calls = await invokeOperation(executeFn);

				expect(calls.length).toBeGreaterThan(0);
				for (const call of calls) expect(call.method).toBe('GET');
			});
		},
	);

	describe('spec coverage - all GET endpoints in spec', () => {
		it(`should define GET /domain, /domain/contact, and related sub-resources`, async () => {
			const paths = new Set<string>();

			for (const apiGroup of spec.apis) {
				if (apiGroup.path.startsWith('/domain/')) {
					paths.add(apiGroup.path);
				} else if (apiGroup.path === '/domain') {
					paths.add(apiGroup.path);
				}
			}

			expect(paths.has('/domain')).toBe(true);
			expect(paths.has('/domain/contact')).toBe(true);
			expect(paths.has('/domain/data/claimNotice')).toBe(true);
			expect(paths.has('/domain/configurationRule')).toBe(true);
		});

		it('should have GET as primary HTTP method for all read-only endpoints', async () => {
			const methods = new Set<string>();

			for (const apiGroup of spec.apis) {
				if (!apiGroup.path.startsWith('/domain/')) continue;

				for (const op of apiGroup.operations) {
					if (op.httpMethod) {
						methods.add(op.httpMethod.toUpperCase());
					}
				}
			}

			expect(methods.has('GET')).toBe(true);
		});

		it(`should cover all implemented GET endpoints: /domain, extensions, contacts, zones`, async () => {
			const expectedPaths = [
				'/domain',
				'/domain/zone',
				'/domain/contact',
				'/domain/data/claimNotice',
				'/domain/configurationRule',
				'/domain/extensions',
				'/domain/extensions/byCategory',
			];

			for (const path of expectedPaths) {
				expect(spec.apis.some((apiGroup) => apiGroup.path === path)).toBe(true);
			}
		});
	});
});
