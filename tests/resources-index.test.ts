/**
 * Tests for the VPS resources barrel exports (resources/index.ts).
 *
 * Verifies that all expected resources are properly exported
 * and each export has the required `description` and `execute` functions.
 */

import * as resources from '../nodes/OvhCloud/actions/vps/resources';

describe('VPS Resources - barrel exports', () => {
	const expectedResources = [
		'automatedBackup',
		'availableUpgrade',
		'backupftp',
		'console',
		'contactChange',
		'confirmTermination',
		'datacenter',
		'disks',
		'distribution',
		'images',
		'ipCountryAvailable',
		'ips',
		'migration2020',
		'models',
		'option',
		'password',
		'power',
		'reinstall',
		'secondaryDnsDomains',
		'serviceInfos',
		'snapshot',
		'status',
		'tasks',
		'templates',
		'termination',
		'veeam',
	];

	it('should export all expected resources', () => {
		for (const resourceName of expectedResources) {
			expect(resources).toHaveProperty(resourceName);
		}
	});

	it('should not export unexpected resources', () => {
		const exportedKeys = Object.keys(resources);
		for (const key of exportedKeys) {
			expect(expectedResources).toContain(key);
		}
	});

	describe.each(expectedResources)('resource: %s', (resourceName) => {
		it('should have a description function', () => {
			const resource = (resources as Record<string, unknown>)[resourceName] as Record<
				string,
				unknown
			>;
			expect(resource.description).toBeDefined();
			expect(typeof resource.description).toBe('function');
		});

		it('should have an execute function', () => {
			const resource = (resources as Record<string, unknown>)[resourceName] as Record<
				string,
				unknown
			>;
			expect(resource.execute).toBeDefined();
			expect(typeof resource.execute).toBe('function');
		});
	});
});
