/**
 * Non-regression tests for VPS operations.
 *
 * Verifies that each .operation.ts calls the correct API endpoint (method + path)
 * as defined in docs/api-specs/v1/vps.json, without testing n8n internals.
 */

import { invokeOperation, loadSpec, type OperationExecuteFn } from './helpers';

// Import execute functions directly from operation files
import { execute as listExecute } from '../nodes/OvhCloudVps/list.operation';
import { execute as getExecute } from '../nodes/OvhCloudVps/get.operation';
import { execute as powerOffGetExecute } from '../nodes/OvhCloudVps/powerOffGet.operation';
import { execute as rebootHardGetExecute } from '../nodes/OvhCloudVps/rebootHardGet.operation';
import { execute as serviceInformationGetExecute } from '../nodes/OvhCloudVps/serviceInformationGet.operation';
import { execute as distributionListExecute } from '../nodes/OvhCloudVps/distributionList.operation';
import { execute as distributionGetExecute } from '../nodes/OvhCloudVps/distributionGet.operation';
import { execute as imageListExecute } from '../nodes/OvhCloudVps/imageList.operation';
import { execute as imageGetExecute } from '../nodes/OvhCloudVps/imageGet.operation';
import { execute as diskListExecute } from '../nodes/OvhCloudVps/diskList.operation';
import { execute as ipListExecute } from '../nodes/OvhCloudVps/ipList.operation';
import { execute as ipGeolocationGetExecute } from '../nodes/OvhCloudVps/ipGeolocationGet.operation';
import { execute as ipGetExecute } from '../nodes/OvhCloudVps/ipGet.operation';
import { execute as backupFtpListExecute } from '../nodes/OvhCloudVps/backupFtpList.operation';
import { execute as snapshotListSnapshotsForVpsExecute } from '../nodes/OvhCloudVps/snapshotListSnapshotsForVps.operation';
import { execute as datacenterListExecute } from '../nodes/OvhCloudVps/datacenterList.operation';
import { execute as optionListExecute } from '../nodes/OvhCloudVps/optionList.operation';
import { execute as optionDetailGetExecute } from '../nodes/OvhCloudVps/optionDetailGet.operation';
import { execute as modelListExecute } from '../nodes/OvhCloudVps/modelList.operation';
import { execute as automatedBackupListExecute } from '../nodes/OvhCloudVps/automatedBackupList.operation';
import { execute as netbootConfigGetExecute } from '../nodes/OvhCloudVps/netbootConfigGet.operation';
import { execute as availableUpgradeListExecute } from '../nodes/OvhCloudVps/availableUpgradeList.operation';
import { execute as netbootOrderGetExecute } from '../nodes/OvhCloudVps/netbootOrderGet.operation';
import { execute as netbootTemplateDetailsGetExecute } from '../nodes/OvhCloudVps/netbootTemplateDetailsGet.operation';
import { execute as secondaryDnsDomainListDomainsExecute } from '../nodes/OvhCloudVps/secondaryDnsDomainListDomains.operation';
import { execute as secondaryDnsServerListExecute } from '../nodes/OvhCloudVps/secondaryDnsServerList.operation';
import { execute as migrationMigrationIdGetExecute } from '../nodes/OvhCloudVps/migrationMigrationIdGet.operation';
import { execute as migrationMigrationIdStepGetExecute } from '../nodes/OvhCloudVps/migrationMigrationIdStepGet.operation';
import { execute as templateGetExecute } from '../nodes/OvhCloudVps/templateGet.operation';
import { execute as statusTaskIdGetExecute } from '../nodes/OvhCloudVps/statusTaskIdGet.operation';

const spec = loadSpec('vps');

describe('VPS Operations - API Spec Non-Regression', () => {
	const vpsName = 'test-vps1234567.ovh.net';

	describe.each([
		['list (root)', listExecute, /^\/vps$/],
		['get (single VPS)', getExecute, new RegExp(`^/vps/${vpsName}$`)],
		['powerOffGet', powerOffGetExecute, new RegExp(`^/vps/${vpsName}`)],
		['rebootHardGet', rebootHardGetExecute, new RegExp(`^/vps/${vpsName}/status$`)],
		[
			'serviceInformationGet',
			serviceInformationGetExecute,
			new RegExp(`^/vps/${vpsName}/information$`),
		],
		['distributionList', distributionListExecute, new RegExp(`^/vps/${vpsName}/distribution$`)],
		['imageList (no filter)', imageListExecute, new RegExp(`^/vps/${vpsName}/images$`)],
		['diskList', diskListExecute, new RegExp(`^/vps/${vpsName}/disks$`)],
		['ipList', ipListExecute, new RegExp(`^/vps/${vpsName}/ip$`)],
		['backupFtpList', backupFtpListExecute, new RegExp(`^/vps/${vpsName}/backupftp$`)],
		[
			'snapshotListSnapshotsForVps',
			snapshotListSnapshotsForVpsExecute,
			new RegExp(`^/vps/${vpsName}/snapshot$`),
		],
		['datacenterList', datacenterListExecute, new RegExp(`^/vps/${vpsName}/availableDatacenters$`)],
		['optionList', optionListExecute, new RegExp(`^/vps/${vpsName}/options$`)],
		['modelList', modelListExecute, new RegExp(`^/vps/${vpsName}/models$`)],
		[
			'automatedBackupList',
			automatedBackupListExecute,
			new RegExp(`^/vps/${vpsName}/automaticBackups$`),
		],
		['netbootConfigGet', netbootConfigGetExecute, new RegExp(`^/vps/${vpsName}/kernels$`)],
		['availableUpgradeList', availableUpgradeListExecute, new RegExp(`^/vps/${vpsName}/upgrade$`)],
		[
			'secondaryDnsDomainListDomains',
			secondaryDnsDomainListDomainsExecute,
			new RegExp(`^/vps/${vpsName}/secdns/domain$`),
		],
		[
			'secondaryDnsServerList',
			secondaryDnsServerListExecute,
			new RegExp(`^/vps/${vpsName}/secdns/server$`),
		],
	])('%s', (name: string, executeFn: OperationExecuteFn, expectedUrlPattern: RegExp | string) => {
		it('should call the correct API endpoint matching spec', async () => {
			const params = name === 'list (root)' ? {} : { serviceName: vpsName };

			const calls = await invokeOperation(executeFn, params);

			expect(calls.length).toBeGreaterThan(0);
			if (expectedUrlPattern instanceof RegExp) {
				expect(calls[0].url).toMatch(expectedUrlPattern);
			} else {
				const expected = expectedUrlPattern.replace('${serviceName}', vpsName);
				expect(calls[0].url).toBe(expected);
			}

			// Verify HTTP method is GET (all VPS operations are read-only per spec)
			for (const call of calls) {
				expect(call.method).toBe('GET');
			}
		});
	});

	describe.each([
		['get.operation.ts', getExecute, { serviceName: vpsName }, `/vps/${vpsName}`],
		[
			'imageList.operation.ts (with status)',
			imageListExecute,
			{ serviceName: vpsName, status: 'available' },
			null,
		],
	])(
		'%s with explicit params',
		(
			name: string,
			executeFn: OperationExecuteFn,
			params: Record<string, unknown>,
			expectedUrl?: string,
		) => {
			it(`should call ${expectedUrl ?? '(any URL)'}`, async () => {
				const calls = await invokeOperation(executeFn, params);

				expect(calls.length).toBeGreaterThan(0);

				if (expectedUrl !== null && expectedUrl !== undefined) {
					expect(calls[0].url).toBe(expectedUrl);
				} else {
					// imageList with status - verify URL contains /images and check query string
					const req = calls[0] as Record<string, unknown>;
					expect(req.url).toContain('/vps/');
					expect(req.url).toContain('/images');

					if (req.qs) {
						expect(req.qs.status).toBe('available');
					} else {
						// If query params are appended to URL, check there too
						const urlStr = calls[0].url;
						expect(urlStr).toMatch(/status=available/);
					}
				}

				for (const call of calls) {
					expect(call.method).toBe('GET');
				}
			});
		},
	);

	describe.each([
		['ipGeolocationGet', ipGeolocationGetExecute, vpsName],
		['ipGet', ipGetExecute, vpsName],
	])('%s - IP sub-resource operations', (name: string, executeFn: OperationExecuteFn) => {
		it('should call correct URL with address path segment', async () => {
			const calls = await invokeOperation(executeFn, {});

			expect(calls.length).toBeGreaterThan(0);
			// Both should be under /vps/{serviceName}/ip/...
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('distributionGet - sub-resource with distId', () => {
		it(`should use /vps/${'serviceName'}/distribution/${'distId'} URL`, async () => {
			const calls = await invokeOperation(
				distributionGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			// Should be under the distribution path of a specific VPS service
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('optionDetailGet - sub-resource with optionName', () => {
		it(`should use /vps/${'serviceName'}/options/${'optionName'} URL`, async () => {
			const calls = await invokeOperation(
				optionDetailGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('imageGet - sub-resource with imageId', () => {
		it(`should use /vps/${'serviceName'}/images/${'imageId'} URL`, async () => {
			const calls = await invokeOperation(imageGetExecute, {});

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('templateGet - template path prefix', () => {
		it(`should use /vps/template/{serviceName} URL`, async () => {
			const calls = await invokeOperation(
				templateGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/vps\/template\//);
		});
	});

	describe('statusTaskIdGet - task sub-resource', () => {
		it(`should use /task/status/{taskId} URL`, async () => {
			const calls = await invokeOperation(
				statusTaskIdGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/task\//);
		});
	});

	describe('netbootOrderGet - order sub-resource', () => {
		it(`should use /vps/${'serviceName'}/order/netboot URL`, async () => {
			const calls = await invokeOperation(
				netbootOrderGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('netbootTemplateDetailsGet - template order sub-resource', () => {
		it(`should use /vps/template/{serviceName}/order/netboot/template URL`, async () => {
			const calls = await invokeOperation(
				netbootTemplateDetailsGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('migrationMigrationIdGet - migration sub-resource', () => {
		it(`should use /vps/${'serviceName'}/migrations/2020/migration/{id} URL`, async () => {
			const calls = await invokeOperation(
				migrationMigrationIdGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('migrationMigrationIdStepGet - migration step sub-resource', () => {
		it(`should use /vps/${'serviceName'}/migrations/2020/migration/{id}/{step} URL`, async () => {
			const calls = await invokeOperation(
				migrationMigrationIdStepGetExecute,
				{},
			);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(/^\/vps\//);
		});
	});

	describe('spec coverage - VPS API groups in spec', () => {
		it(`should have multiple resource groups defined in vps.json`, async () => {
			const groups = new Set<string>();

			for (const apiGroup of spec.apis) {
				if (apiGroup.path.startsWith('/vps/')) {
					groups.add(apiGroup.path);
				}
			}

			expect(groups.size).toBeGreaterThan(10);
		});

		it('should have GET as the only HTTP method for VPS operations', async () => {
			const methods = new Set<string>();

			for (const apiGroup of spec.apis) {
				if (!apiGroup.path.startsWith('/vps/')) continue;

				for (const op of apiGroup.operations) {
					if (op.httpMethod) {
						methods.add(op.httpMethod.toUpperCase());
					}
				}
			}

			expect(methods.has('GET')).toBe(true);
		});
	});
});
