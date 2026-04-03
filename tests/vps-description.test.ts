/**
 * Tests for the VPS index description function.
 *
 * Verifies that the description function returns the correct structure
 * with all expected resources and operations.
 */

import type { INodeProperties } from 'n8n-workflow';
import { description } from '../nodes/OvhCloud/actions/vps';

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
		it('should contain disks operation selector', () => {
			const disksOpField = result.find((prop) => prop.name === 'vpsDisksOperation');
			expect(disksOpField).toBeDefined();
			expect(disksOpField?.type).toBe('options');
		});

		it('should contain ips operation selector', () => {
			const ipsOpField = result.find((prop) => prop.name === 'vpsIpsOperation');
			expect(ipsOpField).toBeDefined();
			expect(ipsOpField?.type).toBe('options');
		});

		it('should contain distribution operation selector', () => {
			const distributionOpField = result.find((prop) => prop.name === 'vpsDistributionOperation');
			expect(distributionOpField).toBeDefined();
			expect(distributionOpField?.type).toBe('options');
		});

		it('should contain images operation selector', () => {
			const imagesOpField = result.find((prop) => prop.name === 'vpsImagesOperation');
			expect(imagesOpField).toBeDefined();
			expect(imagesOpField?.type).toBe('options');
		});

		it('should contain migration2020 operation selector', () => {
			const migrationOpField = result.find((prop) => prop.name === 'vpsMigration2020Operation');
			expect(migrationOpField).toBeDefined();
			expect(migrationOpField?.type).toBe('options');
		});

		it('should contain automatedBackup operation selector', () => {
			const automatedBackupOpField = result.find(
				(prop) => prop.name === 'vpsAutomatedBackupOperation',
			);
			expect(automatedBackupOpField).toBeDefined();
			expect(automatedBackupOpField?.type).toBe('options');
		});

		it('should contain backupftp operation selector', () => {
			const backupftpOpField = result.find((prop) => prop.name === 'vpsBackupFtpOperation');
			expect(backupftpOpField).toBeDefined();
			expect(backupftpOpField?.type).toBe('options');
		});

		it('should contain snapshot operation selector', () => {
			const snapshotOpField = result.find((prop) => prop.name === 'vpsSnapshotOperation');
			expect(snapshotOpField).toBeDefined();
			expect(snapshotOpField?.type).toBe('options');
		});

		it('should contain power operation selector', () => {
			const powerOpField = result.find((prop) => prop.name === 'vpsPowerOperation');
			expect(powerOpField).toBeDefined();
			expect(powerOpField?.type).toBe('options');
		});

		it('should contain console operation selector', () => {
			const consoleOpField = result.find((prop) => prop.name === 'vpsConsoleOperation');
			expect(consoleOpField).toBeDefined();
			expect(consoleOpField?.type).toBe('options');
		});

		it('should contain secondaryDnsDomains operation selector', () => {
			const secondaryDnsOpField = result.find(
				(prop) => prop.name === 'vpsSecondaryDnsDomainsOperation',
			);
			expect(secondaryDnsOpField).toBeDefined();
			expect(secondaryDnsOpField?.type).toBe('options');
		});

		it('should contain serviceInfos operation selector', () => {
			const serviceInfosOpField = result.find((prop) => prop.name === 'vpsServiceInfosOperation');
			expect(serviceInfosOpField).toBeDefined();
			expect(serviceInfosOpField?.type).toBe('options');
		});

		it('should contain option operation selector', () => {
			const optionOpField = result.find((prop) => prop.name === 'vpsOptionOperation');
			expect(optionOpField).toBeDefined();
			expect(optionOpField?.type).toBe('options');
		});

		it('should contain veeam operation selector', () => {
			const veeamOpField = result.find((prop) => prop.name === 'vpsVeeamOperation');
			expect(veeamOpField).toBeDefined();
			expect(veeamOpField?.type).toBe('options');
		});

		it('should contain templates operation selector', () => {
			const templatesOpField = result.find((prop) => prop.name === 'vpsTemplatesOperation');
			expect(templatesOpField).toBeDefined();
			expect(templatesOpField?.type).toBe('options');
		});

		it('should contain tasks operation selector', () => {
			const tasksOpField = result.find((prop) => prop.name === 'vpsTasksOperation');
			expect(tasksOpField).toBeDefined();
			expect(tasksOpField?.type).toBe('options');
		});
	});
});
