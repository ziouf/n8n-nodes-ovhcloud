/**
 * Tests for the VPS index description function.
 *
 * Verifies that the description function returns the correct structure
 * with all expected resources and operations for the new per-node architecture.
 */

import type { INodeProperties } from 'n8n-workflow';
import { description } from '../nodes/OvhCloudVps';

describe('VPS Index - description function', () => {
	let result: INodeProperties[];

	beforeAll(() => {
		result = description({ show: {} });
	});

	it('should return an array of INodeProperties', () => {
		expect(Array.isArray(result)).toBe(true);
		expect(result.length).toBeGreaterThan(0);
	});

	describe('vpsResource options field', () => {
		let vpsResourceField: INodeProperties | undefined;

		beforeAll(() => {
			vpsResourceField = result.find((prop) => prop.name === 'vpsResource');
		});

		it('should contain vpsResource options field', () => {
			expect(vpsResourceField).toBeDefined();
			expect(vpsResourceField?.type).toBe('options');
		});

		it('should have all expected resource options', () => {
			const options = vpsResourceField?.options ?? [];
			const optionValues = options.map((opt) =>
				typeof opt === 'object' && 'value' in opt ? opt.value : opt,
			);

			const expectedResources = [
				'automatedBackup',
				'availableUpgrade',
				'backupftp',
				'confirmTermination',
				'console',
				'contactChange',
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
				'vps',
			];

			for (const resource of expectedResources) {
				expect(optionValues).toContain(resource);
			}
		});

		it('should have correct name and value for each resource option', () => {
			const options = vpsResourceField?.options ?? [];
			for (const opt of options) {
				if (typeof opt === 'object' && 'value' in opt) {
					expect(opt.name).toBeDefined();
					expect(opt.value).toBeDefined();
					expect(typeof opt.name).toBe('string');
					expect(typeof opt.value).toBe('string');
				}
			}
		});
	});

	describe('vpsOperation options field', () => {
		let vpsOperationField: INodeProperties | undefined;

		beforeAll(() => {
			vpsOperationField = result.find((prop) => prop.name === 'vpsOperation');
		});

		it('should contain vpsOperation options field', () => {
			expect(vpsOperationField).toBeDefined();
			expect(vpsOperationField?.type).toBe('options');
		});

		it('should have expected operations for vps resource', () => {
			const options = vpsOperationField?.options ?? [];
			const optionValues = options.map((opt) =>
				typeof opt === 'object' && 'value' in opt ? opt.value : opt,
			);

			expect(optionValues).toContain('abortSnapshot');
			expect(optionValues).toContain('edit');
			expect(optionValues).toContain('get');
			expect(optionValues).toContain('list');
		});
	});

	describe('operation selectors for multi-op resources', () => {
		const expectedSelectors = [
			'vpsDisksOperation',
			'vpsDistributionOperation',
			'vpsIpsOperation',
			'vpsImagesOperation',
			'vpsMigration2020Operation',
			'vpsAutomatedBackupOperation',
			'vpsBackupFtpOperation',
			'vpsConsoleOperation',
			'vpsSnapshotOperation',
			'vpsSecondaryDnsDomainsOperation',
			'vpsServiceInfosOperation',
			'vpsOptionOperation',
			'vpsPowerOperation',
			'vpsVeeamOperation',
			'vpsTemplatesOperation',
			'vpsTasksOperation',
		];

		it.each(expectedSelectors)('should contain %s operation selector', (selectorName) => {
			const field = result.find((prop) => prop.name === selectorName);
			expect(field).toBeDefined();
			expect(field?.type).toBe('options');
		});
	});
});
