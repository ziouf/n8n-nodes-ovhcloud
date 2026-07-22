/**
 * Non-regression tests for Dedicated server operations.
 *
 * Verifies that each .operation.ts calls the correct API endpoint (method + path)
 * as defined in docs/api-specs/v1/dedicated.json, without testing n8n internals.
 */

import { invokeOperation, type OperationExecuteFn } from './helpers';

// Import execute functions directly from operation files
import { execute as listExecute } from '../nodes/OvhCloudDedicated/resources/list.operation';
import { execute as getExecute } from '../nodes/OvhCloudDedicated/resources/get.operation';
import { execute as availabilityRawGetExecute } from '../nodes/OvhCloudDedicated/resources/availabilityRawGet.operation';
import { execute as datacenterAvailabilityListExecute } from '../nodes/OvhCloudDedicated/resources/datacenterAvailabilityList.operation';
import { execute as biosSettingsGetExecute } from '../nodes/OvhCloudDedicated/resources/biosSettingsGet.operation';
import { execute as biosSgxGetExecute } from '../nodes/OvhCloudDedicated/resources/biosSgxGet.operation';
import { execute as bootListGetExecute } from '../nodes/OvhCloudDedicated/resources/bootListGet.operation';
import { execute as backupCloudGetExecute } from '../nodes/OvhCloudDedicated/resources/backupCloudGet.operation';
import { execute as backupFtpGetExecute } from '../nodes/OvhCloudDedicated/resources/backupFtpGet.operation';
import { execute as backupFtpAccessListGetExecute } from '../nodes/OvhCloudDedicated/resources/backupFtpAccessListGet.operation';
import { execute as firewallGetExecute } from '../nodes/OvhCloudDedicated/resources/firewallGet.operation';
import { execute as ipmiGetExecute } from '../nodes/OvhCloudDedicated/resources/ipmiGet.operation';

describe('Dedicated Operations - API Spec Non-Regression', () => {
	const dedicatedName = 'test-dedicated12345678.ip-987-65-432.eu';

	describe.each([
		['list (root)', listExecute, /^\/dedicated\/server$/],
		['get (single server)', getExecute, new RegExp(`^/dedicated/server/${dedicatedName}$`)],
		[
			'availabilityRawGet',
			availabilityRawGetExecute,
			new RegExp(/^\/dedicated\/server\/availabilities\/raw$/),
		],
		[
			'datacenterAvailabilityList',
			datacenterAvailabilityListExecute,
			new RegExp(/^\/dedicated\/server\/datacenter\/availabilities$/),
		],
		[
			'biosSettingsGet',
			biosSettingsGetExecute,
			new RegExp(`^/dedicated/server/${dedicatedName}/biosSettings$`),
		],
		['biosSgxGet', biosSgxGetExecute, new RegExp(`${dedicatedName}/biosSettings/sgx$`)],
		['bootListGet', bootListGetExecute, new RegExp(`^/dedicated/server/${dedicatedName}/boot$`)],
		['backupCloudGet', backupCloudGetExecute, /\/backupCloud$/],
		['backupFtpGet', backupFtpGetExecute, new RegExp(`${dedicatedName}/features/backupFTP$`)],
		['backupFtpAccessListGet', backupFtpAccessListGetExecute, new RegExp(/\/access$/)],
		['firewallGet', firewallGetExecute, /\/features\/firewall$/],
		['ipmiGet', ipmiGetExecute, /\/features\/ipmi$/],
	])('%s', (name: string, executeFn: OperationExecuteFn, expectedUrlPattern: RegExp) => {
		it('should call the correct API endpoint matching spec', async () => {
			const params = name === 'list (root)' ? {} : { serviceName: dedicatedName };

			if (name.includes('biosSgxGet') || name.includes('/backupCloud')) {
				params.bootId = 12345;
			} else if (name.includes('Backup FTP Access List Get')) {
				params.backupFtpIpBlock = '0.0.0.0/0';
			}

			const calls = await invokeOperation(executeFn, params);

			expect(calls.length).toBeGreaterThan(0);
			expect(calls[0].url).toMatch(expectedUrlPattern);

			for (const call of calls) {
				expect(call.method).toBe('GET');
			}
		});
	});
});
