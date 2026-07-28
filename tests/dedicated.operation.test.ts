/**
 * Non-regression tests for Dedicated server operations.
 *
 * Verifies that each .operation.ts calls the correct API endpoint (method + path)
 * as defined in docs/api-specs/v1/dedicated.json, without testing n8n internals.
 */

import { invokeOperation, type OperationExecuteFn } from './helpers';

// Import execute functions directly from operation files — GET operations
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

// Import execute functions for new POST/PUT/PATCH/DELETE operations
import { execute as authSecretGetExecute } from '../nodes/OvhCloudDedicated/resources/authSecretGet.operation';
import { execute as burstUpdateExecute } from '../nodes/OvhCloudDedicated/resources/burstUpdate.operation';
import { execute as changeContactCreateExecute } from '../nodes/OvhCloudDedicated/resources/changeContactCreate.operation';
import { execute as confirmTerminationCreateExecute } from '../nodes/OvhCloudDedicated/resources/confirmTerminationCreate.operation';
import { execute as backupCloudOfferDetailsCreateExecute } from '../nodes/OvhCloudDedicated/resources/backupCloudOfferDetailsCreate.operation';
import { execute as backupFtpPostExecute } from '../nodes/OvhCloudDedicated/resources/backupFtpPost.operation';
import { execute as backupFtpDeleteExecute } from '../nodes/OvhCloudDedicated/resources/backupFtpDelete.operation';
import { execute as backupFtpAccessPostExecute } from '../nodes/OvhCloudDedicated/resources/backupFtpAccessPost.operation';
import { execute as firewallUpdateExecute } from '../nodes/OvhCloudDedicated/resources/firewallUpdate.operation';
import { execute as optionDeleteExecute } from '../nodes/OvhCloudDedicated/resources/optionDelete.operation';
import { execute as serverUpdateExecute } from '../nodes/OvhCloudDedicated/resources/serverUpdate.operation';

describe('Dedicated Operations - API Spec Non-Regression', () => {
	const dedicatedName = 'test-dedicated12345678.ip-987-65-432.eu';

	describe.each([
		// Existing GET operations
		['list (root)', listExecute, /^\/dedicated\/server$/, ['GET']],
		[
			'get (single server)',
			getExecute,
			new RegExp(`^/dedicated/server/${dedicatedName}$`),
			['GET'],
		],
		[
			'availabilityRawGet',
			availabilityRawGetExecute,
			new RegExp(/^\/dedicated\/server\/availabilities\/raw$/),
			['GET'],
		],
		[
			'datacenterAvailabilityList',
			datacenterAvailabilityListExecute,
			new RegExp(/^\/dedicated\/server\/datacenter\/availabilities$/),
			['GET'],
		],
		[
			'biosSettingsGet',
			biosSettingsGetExecute,
			new RegExp(`^/dedicated/server/${dedicatedName}/biosSettings$`),
			['GET'],
		],
		['biosSgxGet', biosSgxGetExecute, new RegExp(`${dedicatedName}/biosSettings/sgx$`), ['GET']],
		[
			'bootListGet',
			bootListGetExecute,
			new RegExp(`^/dedicated/server/${dedicatedName}/boot$`),
			['GET'],
		],
		['backupCloudGet', backupCloudGetExecute, /\/backupCloud$/, ['GET']],
		[
			'backupFtpGet',
			backupFtpGetExecute,
			new RegExp(`${dedicatedName}/features/backupFTP$`),
			['GET'],
		],
		['backupFtpAccessListGet', backupFtpAccessListGetExecute, new RegExp(/\/access$/), ['GET']],
		['firewallGet', firewallGetExecute, /\/features\/firewall$/, ['GET']],
		['ipmiGet', ipmiGetExecute, /\/features\/ipmi$/, ['GET']],

		// New POST/PUT/PATCH/DELETE operations
		[
			'authSecretGet (POST)',
			authSecretGetExecute,
			new RegExp(`${dedicatedName}/authenticationSecret$`),
			['POST'],
		],
		[
			'burstUpdate (PUT)',
			burstUpdateExecute,
			new RegExp(`^/dedicated/server/${dedicatedName}/burst$`),
			['PUT'],
		],
		[
			'changeContactCreate (POST)',
			changeContactCreateExecute,
			new RegExp(`${dedicatedName}/changeContact$`),
			['POST'],
		],
		[
			'confirmTerminationCreate (POST)',
			confirmTerminationCreateExecute,
			new RegExp(`${dedicatedName}/confirmTermination$`),
			['POST'],
		],
		[
			'backupCloudOfferDetailsCreate (POST)',
			backupCloudOfferDetailsCreateExecute,
			new RegExp(`/dedicated/server/${dedicatedName}/features/backupCloud$`),
			['POST'],
		],
		[
			'backupFtpPost (POST)',
			backupFtpPostExecute,
			new RegExp(`/dedicated/server/${dedicatedName}/features/backupFTP$`),
			['POST'],
		],
		[
			'backupFtpDelete (DELETE)',
			backupFtpDeleteExecute,
			new RegExp(`/dedicated/server/${dedicatedName}/features/backupFTP$`),
			['DELETE'],
		],
		[
			'backupFtpAccessPost (POST)',
			backupFtpAccessPostExecute,
			new RegExp(`${dedicatedName}/features/backupFTP/access$`),
			['POST'],
		],
		[
			'serverUpdate (PUT)',
			serverUpdateExecute,
			new RegExp(`^/dedicated/server/${dedicatedName}$`),
			['PUT'],
		],
		[
			'firewallUpdate (PUT)',
			firewallUpdateExecute,
			new RegExp(`/dedicated/server/${dedicatedName}/features/firewall$`),
			['PUT'],
		],
		[
			'optionDelete (DELETE)',
			optionDeleteExecute,
			new RegExp(`${dedicatedName}/option/\\w+$`),
			['DELETE'],
		],
	])(
		'%s',
		(
			name: string,
			executeFn: OperationExecuteFn,
			expectedUrlPattern: RegExp,
			allowedMethods: string[],
		) => {
			it('should call the correct API endpoint matching spec', async () => {
				const params = name === 'list (root)' ? {} : { serviceName: dedicatedName };

				if (name.includes('biosSgxGet') || name.includes('/backupCloud')) {
					params.bootId = 12345;
				} else if (name.includes('Backup FTP Access List Get')) {
					params.backupFtpIpBlock = '0.0.0.0/0';
				} else if (name === 'optionDelete (DELETE)') {
					params.option = 'monitoring';
				}

				const calls = await invokeOperation(executeFn, params);

				expect(calls.length).toBeGreaterThan(0);
				expect(calls[0].url).toMatch(expectedUrlPattern);

				for (const call of calls) {
					expect(allowedMethods).toContain(call.method);
				}
			});
		},
	);
});
