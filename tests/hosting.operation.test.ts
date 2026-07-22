/**
 * Non-regression tests for Hosting operations.
 *
 * Verifies that each .operation.ts calls the correct API endpoint (method + path)
 * as defined in docs/api-specs/v1/hosting.json, without testing n8n internals.
 */

import { invokeOperation, loadSpec, type OperationExecuteFn } from './helpers';

// Import execute functions directly from operation files
import { execute as listExecute } from '../nodes/OvhCloudHosting/list.operation';
import { execute as getExecute } from '../nodes/OvhCloudHosting/get.operation';
import { execute as findByDomainExecute } from '../nodes/OvhCloudHosting/findByDomain.operation';
import { execute as getServiceInfosExecute } from '../nodes/OvhCloudHosting/getServiceInfos.operation';
import { execute as getUserListExecute } from '../nodes/OvhCloudHosting/listUsers.operation';
import { execute as userGetExecute } from '../nodes/OvhCloudHosting/getUser.operation';
import { execute as listDatabasesExecute } from '../nodes/OvhCloudHosting/listDatabases.operation';
import { execute as databaseGetExecute } from '../nodes/OvhCloudHosting/getDatabase.operation';
import { execute as emailGetExecute } from '../nodes/OvhCloudHosting/getEmail.operation';
import { execute as listCronsExecute } from '../nodes/OvhCloudHosting/listCrons.operation';
import { execute as cronGetExecute } from '../nodes/OvhCloudHosting/getCron.operation';
import { execute as listTasksExecute } from '../nodes/OvhCloudHosting/listTasks.operation';
import { execute as taskGetExecute } from '../nodes/OvhCloudHosting/getTask.operation';
import { execute as listModulesExecute } from '../nodes/OvhCloudHosting/listModules.operation';
import { execute as moduleGetExecute } from '../nodes/OvhCloudHosting/getModule.operation';
import { execute as getSslExecute } from '../nodes/OvhCloudHosting/getSsl.operation';
import { execute as getRuntimeListExecute } from '../nodes/OvhCloudHosting/listRuntimes.operation';
import { execute as runtimeGetExecute } from '../nodes/OvhCloudHosting/getRuntime.operation';
import { execute as listEnvVarsExecute } from '../nodes/OvhCloudHosting/listEnvVars.operation';
import { execute as envVarGetExecute } from '../nodes/OvhCloudHosting/getEnvVar.operation';
import { execute as listAttachedDomainsExecute } from '../nodes/OvhCloudHosting/listAttachedDomains.operation';

const serviceName = 'test-hosting1234567.ovh.net';

describe('Hosting Operations - API Spec Non-Regression', () => {
	describe.each([
		['list (root)', listExecute, /^\/hosting\/web$/],
		[`get (${serviceName})`, getExecute, new RegExp(`^/hosting/web/${serviceName}$`)],
		[`getServiceInfos (${serviceName})`, getServiceInfosExecute, new RegExp(`/serviceInfos$`)],
		['listUsers', getUserListExecute, new RegExp(`/user$`)],
		['listDatabases', listDatabasesExecute, new RegExp(`/database$`)],
		['listCrons', listCronsExecute, new RegExp(`/cron$`)],
		['listTasks', listTasksExecute, new RegExp(`/tasks$`)],
		['listModules', listModulesExecute, new RegExp(`/module$`)],
		['listEnvVars', listEnvVarsExecute, new RegExp(`/envVar$`)],
		['listAttachedDomains', listAttachedDomainsExecute, new RegExp(`/attachedDomain$`)],
		[`getSsl (${serviceName})`, getSslExecute, new RegExp(`/ssl$`)],
		['listRuntimes', getRuntimeListExecute, new RegExp(`/runtime$`)],
	])('%s (no extra params)', (name: string, executeFn: OperationExecuteFn, urlPattern: RegExp) => {
		it('should call the correct API endpoint matching spec', async () => {
			const calls = await invokeOperation(executeFn, { serviceName });

			expect(calls.length).toBeGreaterThan(0);
			const url = (calls[0] as Record<string, unknown>).url;
			expect(url).toMatch(urlPattern);

			for (const call of calls) expect((call as Record<string, unknown>).method).toBe('GET');
		});
	});

	describe.each([
		[
			'findByDomain',
			findByDomainExecute,
			new RegExp('^/hosting/web/attachedDomain$'),
			{ domain: 'example.com' },
		],
		[
			'getUser (login)',
			userGetExecute,
			new RegExp(`/hosting/web/${serviceName}/user/[a-zA-Z0-9._%-]+`),
			{ login: 'admin', serviceName } as Record<string, unknown>,
		],
		[
			'getDatabase (name)',
			databaseGetExecute,
			new RegExp(`/hosting/web/${serviceName}/database/[a-zA-Z0-9._%-]+`),
			{ databaseName: 'mydb', serviceName } as Record<string, unknown>,
		],
		[
			'getEmail',
			emailGetExecute,
			new RegExp(`^/hosting/web/${serviceName}/email$`),
			{ serviceName },
		],
		[
			'getCron (id)',
			cronGetExecute,
			new RegExp(`/hosting/web/${serviceName}/cron/[0-9]+`),
			{ cronId: 1, serviceName } as Record<string, unknown>,
		],
		[
			'getTask (id)',
			taskGetExecute,
			new RegExp(`/hosting/web/${serviceName}/tasks/[0-9]+`),
			{ taskId: 42, serviceName } as Record<string, unknown>,
		],
		[
			'getModule (id)',
			moduleGetExecute,
			new RegExp(`/hosting/web/${serviceName}/module/[0-9]+`),
			{ moduleId: 5, serviceName } as Record<string, unknown>,
		],
		[
			'getEnvVar',
			envVarGetExecute,
			new RegExp(`/hosting/web/${serviceName}/envVar/[a-zA-Z0-9._%-]+`),
			{ envVarKey: 'MY_VAR', serviceName } as Record<string, unknown>,
		],
		[
			'getRuntime (id)',
			runtimeGetExecute,
			new RegExp(`/hosting/web/${serviceName}/runtime/[0-9]+`),
			{ runtimeId: 7, serviceName } as Record<string, unknown>,
		],
	])(
		'%s - with extra params',
		(
			name: string,
			executeFn: OperationExecuteFn,
			urlPattern: RegExp,
			params: Record<string, unknown>,
		) => {
			it(`should call the correct API endpoint matching spec`, async () => {
				const calls = await invokeOperation(executeFn, params);

				expect(calls.length).toBeGreaterThan(0);
				const url = (calls[0] as Record<string, unknown>).url;
				expect(url).toMatch(urlPattern);

				for (const call of calls) expect((call as Record<string, unknown>).method).toBe('GET');
			});
		},
	);

	describe('spec coverage - Hosting API groups', () => {
		it('should have multiple resource groups defined in hosting.json', async () => {
			const spec = loadSpec('hosting');
			const groups = new Set<string>();

			for (const apiGroup of spec.apis) {
				if (apiGroup.path.startsWith('/hosting/')) {
					groups.add(apiGroup.path);
				}
			}

			expect(groups.size).toBeGreaterThan(5);
		});

		it('should have GET as a primary HTTP method for Hosting operations', async () => {
			const spec = loadSpec('hosting');
			const methods = new Set<string>();

			for (const apiGroup of spec.apis) {
				if (!apiGroup.path.startsWith('/hosting/')) continue;

				for (const op of apiGroup.operations) {
					if (op.httpMethod) {
						methods.add(op.httpMethod.toUpperCase());
					}
				}
			}

			expect(methods.has('GET')).toBe(true);
			expect(methods.size).toBeGreaterThan(1); // Also has POST/PUT/DELETE per earlier check
		});
	});
});
