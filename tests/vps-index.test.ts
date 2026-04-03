/**
 * Tests for the VPS index router (execute function).
 *
 * Verifies that the execute function properly routes to the correct
 * operation handler based on resource and operation parameters.
 */

import type { IExecuteFunctions } from 'n8n-workflow';

// Mock all operation handlers before importing the module under test
jest.mock('../nodes/OvhCloud/actions/vps/get.operation', () => ({
	description: jest.fn(),
	execute: jest.fn().mockResolvedValue([{ json: { result: 'vps-get' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/list.operation', () => ({
	description: jest.fn(),
	execute: jest.fn().mockResolvedValue([{ json: { result: 'vps-list' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/edit.operation', () => ({
	description: jest.fn(),
	execute: jest.fn().mockResolvedValue([{ json: { result: 'vps-edit' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/abortSnapshot.operation', () => ({
	description: jest.fn(),
	execute: jest.fn().mockResolvedValue([{ json: { result: 'vps-abortSnapshot' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/disks/get.operation', () => ({
	description: jest.fn(),
	execute: jest.fn().mockResolvedValue([{ json: { result: 'disks-get' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/disks/list.operation', () => ({
	descriptionDisksList: jest.fn(),
	executeDisksList: jest.fn().mockResolvedValue([{ json: { result: 'disks-list' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/disks/update.operation', () => ({
	descriptionDisksUpdate: jest.fn(),
	executeDisksUpdate: jest.fn().mockResolvedValue([{ json: { result: 'disks-update' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/disks/getMonitoring.operation', () => ({
	descriptionDisksGetMonitoring: jest.fn(),
	executeDisksGetMonitoring: jest
		.fn()
		.mockResolvedValue([{ json: { result: 'disks-getMonitoring' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/disks/getUsage.operation', () => ({
	descriptionDisksGetUsage: jest.fn(),
	executeDisksGetUsage: jest.fn().mockResolvedValue([{ json: { result: 'disks-getUsage' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/ips/get.operation', () => ({
	descriptionIpsGet: jest.fn(),
	executeIpsGet: jest.fn().mockResolvedValue([{ json: { result: 'ips-get' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/ips/release.operation', () => ({
	descriptionIpsRelease: jest.fn(),
	executeIpsRelease: jest.fn().mockResolvedValue([{ json: { result: 'ips-release' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/ips/update.operation', () => ({
	descriptionIpsUpdate: jest.fn(),
	executeIpsUpdate: jest.fn().mockResolvedValue([{ json: { result: 'ips-update' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/automatedBackup/listAttached.operation', () => ({
	descriptionAutomatedBackupListAttached: jest.fn(),
	executeAutomatedBackupListAttached: jest
		.fn()
		.mockResolvedValue([{ json: { result: 'automatedBackup-listAttached' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/backupftp/listAcls.operation', () => ({
	descriptionBackupFtpListAcls: jest.fn(),
	executeBackupFtpListAcls: jest
		.fn()
		.mockResolvedValue([{ json: { result: 'backupftp-listAcls' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/snapshot/update.operation', () => ({
	descriptionSnapshotUpdate: jest.fn(),
	executeSnapshotUpdate: jest.fn().mockResolvedValue([{ json: { result: 'snapshot-update' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/snapshot/delete.operation', () => ({
	descriptionSnapshotDelete: jest.fn(),
	executeSnapshotDelete: jest.fn().mockResolvedValue([{ json: { result: 'snapshot-delete' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/snapshot/revert.operation', () => ({
	descriptionSnapshotRevert: jest.fn(),
	executeSnapshotRevert: jest.fn().mockResolvedValue([{ json: { result: 'snapshot-revert' } }]),
}));

jest.mock('../nodes/OvhCloud/actions/vps/resources/snapshot/download.operation', () => ({
	descriptionSnapshotDownload: jest.fn(),
	executeSnapshotDownload: jest.fn().mockResolvedValue([{ json: { result: 'snapshot-download' } }]),
}));

// Import the mocked handlers
import { execute as executeVpsGet } from '../nodes/OvhCloud/actions/vps/get.operation';
import { execute as executeVpsList } from '../nodes/OvhCloud/actions/vps/list.operation';
import { execute as executeVpsEdit } from '../nodes/OvhCloud/actions/vps/edit.operation';
import { execute as executeVpsAbortSnapshot } from '../nodes/OvhCloud/actions/vps/abortSnapshot.operation';
import { execute as executeDisksGet } from '../nodes/OvhCloud/actions/vps/resources/disks/get.operation';
import { executeDisksList } from '../nodes/OvhCloud/actions/vps/resources/disks/list.operation';
import { executeDisksUpdate } from '../nodes/OvhCloud/actions/vps/resources/disks/update.operation';
import { executeDisksGetMonitoring } from '../nodes/OvhCloud/actions/vps/resources/disks/getMonitoring.operation';
import { executeDisksGetUsage } from '../nodes/OvhCloud/actions/vps/resources/disks/getUsage.operation';
import { executeIpsGet } from '../nodes/OvhCloud/actions/vps/resources/ips/get.operation';
import { executeIpsRelease } from '../nodes/OvhCloud/actions/vps/resources/ips/release.operation';
import { executeIpsUpdate } from '../nodes/OvhCloud/actions/vps/resources/ips/update.operation';
import { executeAutomatedBackupListAttached } from '../nodes/OvhCloud/actions/vps/resources/automatedBackup/listAttached.operation';
import { executeBackupFtpListAcls } from '../nodes/OvhCloud/actions/vps/resources/backupftp/listAcls.operation';
import { executeSnapshotUpdate } from '../nodes/OvhCloud/actions/vps/resources/snapshot/update.operation';
import { executeSnapshotDelete } from '../nodes/OvhCloud/actions/vps/resources/snapshot/delete.operation';
import { executeSnapshotRevert } from '../nodes/OvhCloud/actions/vps/resources/snapshot/revert.operation';
import { executeSnapshotDownload } from '../nodes/OvhCloud/actions/vps/resources/snapshot/download.operation';

// Import the module under test after mocks are set up
import { execute } from '../nodes/OvhCloud/actions/vps';

function createMockExecuteFunctions(
	resource: string,
	operation?: string,
): jest.Mocked<IExecuteFunctions> {
	const mockFn = {
		getNodeParameter: jest.fn((paramName: string) => {
			if (paramName === 'vpsResource') return resource;
			if (paramName === 'vpsOperation') return operation;
			if (paramName === 'vpsDisksOperation') return operation;
			if (paramName === 'vpsIpsOperation') return operation;
			if (paramName === 'vpsAutomatedBackupOperation') return operation;
			if (paramName === 'vpsBackupFtpOperation') return operation;
			if (paramName === 'vpsSnapshotOperation') return operation;
			if (paramName === 'vpsPowerOperation') return operation;
			if (paramName === 'snapshotOperation') return operation;
			if (paramName === 'powerOperation') return operation;
			if (paramName === 'ipsOperation') return operation;
			return undefined;
		}),
		getCredentials: jest.fn().mockResolvedValue({
			endpoint: 'eu.api.ovh.com/1.0',
			appKey: 'test-app-key',
			appSecret: 'test-app-secret',
			consumerKey: 'test-consumer-key',
		}),
		helpers: {
			httpRequest: jest.fn().mockResolvedValue({ data: 'mocked-response' }),
			returnJsonArray: jest.fn((data) => [{ json: data }]),
		},
	} as unknown as jest.Mocked<IExecuteFunctions>;

	return mockFn;
}

describe('VPS Index - execute function routing', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	describe('VPS resource operations', () => {
		it('should call executeVpsGet for resource "vps" with operation "get"', async () => {
			const mockCtx = createMockExecuteFunctions('vps', 'get');
			await execute.call(mockCtx);
			expect(executeVpsGet).toHaveBeenCalled();
		});

		it('should call executeVpsList for resource "vps" with operation "list"', async () => {
			const mockCtx = createMockExecuteFunctions('vps', 'list');
			await execute.call(mockCtx);
			expect(executeVpsList).toHaveBeenCalled();
		});

		it('should call executeVpsEdit for resource "vps" with operation "edit"', async () => {
			const mockCtx = createMockExecuteFunctions('vps', 'edit');
			await execute.call(mockCtx);
			expect(executeVpsEdit).toHaveBeenCalled();
		});

		it('should call executeVpsAbortSnapshot for resource "vps" with operation "abortSnapshot"', async () => {
			const mockCtx = createMockExecuteFunctions('vps', 'abortSnapshot');
			await execute.call(mockCtx);
			expect(executeVpsAbortSnapshot).toHaveBeenCalled();
		});
	});

	describe('Power resource operations', () => {
		it('should call power.execute for resource "power" with operation "start"', async () => {
			const mockCtx = createMockExecuteFunctions('power', 'start');
			const result = await execute.call(mockCtx);
			expect(result).toBeDefined();
		});

		it('should call power.execute for resource "power" with operation "stop"', async () => {
			const mockCtx = createMockExecuteFunctions('power', 'stop');
			const result = await execute.call(mockCtx);
			expect(result).toBeDefined();
		});

		it('should call power.execute for resource "power" with operation "reboot"', async () => {
			const mockCtx = createMockExecuteFunctions('power', 'reboot');
			const result = await execute.call(mockCtx);
			expect(result).toBeDefined();
		});
	});

	describe('Disks resource operations', () => {
		it('should call executeDisksGet for resource "disks" with operation "get"', async () => {
			const mockCtx = createMockExecuteFunctions('disks', 'get');
			await execute.call(mockCtx);
			expect(executeDisksGet).toHaveBeenCalled();
		});

		it('should call executeDisksList for resource "disks" with operation "list"', async () => {
			const mockCtx = createMockExecuteFunctions('disks', 'list');
			await execute.call(mockCtx);
			expect(executeDisksList).toHaveBeenCalled();
		});

		it('should call executeDisksUpdate for resource "disks" with operation "update"', async () => {
			const mockCtx = createMockExecuteFunctions('disks', 'update');
			await execute.call(mockCtx);
			expect(executeDisksUpdate).toHaveBeenCalled();
		});

		it('should call executeDisksGetMonitoring for resource "disks" with operation "getMonitoring"', async () => {
			const mockCtx = createMockExecuteFunctions('disks', 'getMonitoring');
			await execute.call(mockCtx);
			expect(executeDisksGetMonitoring).toHaveBeenCalled();
		});

		it('should call executeDisksGetUsage for resource "disks" with operation "getUsage"', async () => {
			const mockCtx = createMockExecuteFunctions('disks', 'getUsage');
			await execute.call(mockCtx);
			expect(executeDisksGetUsage).toHaveBeenCalled();
		});
	});

	describe('IPs resource operations', () => {
		it('should call ips.execute for resource "ips" with operation "list"', async () => {
			const mockCtx = createMockExecuteFunctions('ips', 'list');
			const result = await execute.call(mockCtx);
			expect(result).toBeDefined();
		});

		it('should call executeIpsGet for resource "ips" with operation "get"', async () => {
			const mockCtx = createMockExecuteFunctions('ips', 'get');
			await execute.call(mockCtx);
			expect(executeIpsGet).toHaveBeenCalled();
		});

		it('should call executeIpsRelease for resource "ips" with operation "release"', async () => {
			const mockCtx = createMockExecuteFunctions('ips', 'release');
			await execute.call(mockCtx);
			expect(executeIpsRelease).toHaveBeenCalled();
		});

		it('should call executeIpsUpdate for resource "ips" with operation "update"', async () => {
			const mockCtx = createMockExecuteFunctions('ips', 'update');
			await execute.call(mockCtx);
			expect(executeIpsUpdate).toHaveBeenCalled();
		});
	});

	describe('Automated Backup resource operations', () => {
		it('should call automatedBackup.execute for resource "automatedBackup" with operation "get"', async () => {
			const mockCtx = createMockExecuteFunctions('automatedBackup', 'get');
			const result = await execute.call(mockCtx);
			expect(result).toBeDefined();
		});

		it('should call executeAutomatedBackupListAttached for resource "automatedBackup" with operation "listAttached"', async () => {
			const mockCtx = createMockExecuteFunctions('automatedBackup', 'listAttached');
			await execute.call(mockCtx);
			expect(executeAutomatedBackupListAttached).toHaveBeenCalled();
		});
	});

	describe('Backup FTP resource operations', () => {
		it('should call backupftp.execute for resource "backupftp" with operation "get"', async () => {
			const mockCtx = createMockExecuteFunctions('backupftp', 'get');
			const result = await execute.call(mockCtx);
			expect(result).toBeDefined();
		});

		it('should call executeBackupFtpListAcls for resource "backupftp" with operation "listAcls"', async () => {
			const mockCtx = createMockExecuteFunctions('backupftp', 'listAcls');
			await execute.call(mockCtx);
			expect(executeBackupFtpListAcls).toHaveBeenCalled();
		});
	});

	describe('Snapshot resource operations', () => {
		it('should call snapshot.execute for resource "snapshot" with operation "create"', async () => {
			const mockCtx = createMockExecuteFunctions('snapshot', 'create');
			const result = await execute.call(mockCtx);
			expect(result).toBeDefined();
		});

		it('should call executeSnapshotUpdate for resource "snapshot" with operation "update"', async () => {
			const mockCtx = createMockExecuteFunctions('snapshot', 'update');
			await execute.call(mockCtx);
			expect(executeSnapshotUpdate).toHaveBeenCalled();
		});

		it('should call executeSnapshotDelete for resource "snapshot" with operation "delete"', async () => {
			const mockCtx = createMockExecuteFunctions('snapshot', 'delete');
			await execute.call(mockCtx);
			expect(executeSnapshotDelete).toHaveBeenCalled();
		});

		it('should call executeSnapshotRevert for resource "snapshot" with operation "revert"', async () => {
			const mockCtx = createMockExecuteFunctions('snapshot', 'revert');
			await execute.call(mockCtx);
			expect(executeSnapshotRevert).toHaveBeenCalled();
		});

		it('should call executeSnapshotDownload for resource "snapshot" with operation "download"', async () => {
			const mockCtx = createMockExecuteFunctions('snapshot', 'download');
			await execute.call(mockCtx);
			expect(executeSnapshotDownload).toHaveBeenCalled();
		});
	});

	describe('Error handling', () => {
		it('should throw error for unsupported resource', async () => {
			const mockCtx = createMockExecuteFunctions('nonexistentResource');
			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported resource "nonexistentResource" for VPS operations',
			);
		});

		it('should throw error for unsupported operation on vps resource', async () => {
			const mockCtx = createMockExecuteFunctions('vps', 'nonexistentOperation');
			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "vps"',
			);
		});

		it('should throw error for unsupported operation on disks resource', async () => {
			const mockCtx = createMockExecuteFunctions('disks', 'nonexistentOperation');
			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "disks"',
			);
		});

		it('should throw error for unsupported operation on ips resource', async () => {
			const mockCtx = createMockExecuteFunctions('ips', 'nonexistentOperation');
			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "ips"',
			);
		});

		it('should throw error for unsupported operation on snapshot resource', async () => {
			const mockCtx = createMockExecuteFunctions('snapshot', 'nonexistentOperation');
			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "snapshot"',
			);
		});

		it('should throw error for unsupported operation on power resource', async () => {
			const mockCtx = createMockExecuteFunctions('power', 'nonexistentOperation');
			await expect(execute.call(mockCtx)).rejects.toThrow(
				'Unsupported operation "nonexistentOperation" for resource "power"',
			);
		});
	});
});
