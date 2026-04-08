/**
 * @brief VPS resource operations for n8n node
 *
 * Provides comprehensive operations for managing OVH Virtual Private Servers including:
 * - VPS instances: List, get, edit, and abort snapshot
 * - Disks: List, get, update, monitoring, and usage details
 * - Snapshot management: Create, get, update, delete, revert, and download snapshots
 * - Datacenter information: Get specific datacenter or list by country
 * - Service information: Get service status, models, distribution, options
 * - Network resources: IPs, secondary DNS domains
 * - Images: List available, get current, and get details (BETA)
 * - Migration 2020: Get status, cancel, request, and update migration
 * - Console: Get console URL and open VNC access
 * - Contact Change: Change admin, billing, or tech contact
 * - Confirm Termination: Confirm VPS termination
 * - Power Management: Start, stop, and reboot VPS
 * - Veeam Backup: Manage Veeam backups and restore points
 * - Templates: List and get VPS templates and software
 * - Tasks: List and get VPS tasks
 * - Password: Set root password
 * - Reinstall: Reinstall VPS with a template
 * - Termination: Request VPS termination
 *
 * @remarks
 * All VPS operations require specification of a service name.
 * Service names can be entered manually or selected from dynamic dropdown using getVpsServices.
 *
 * @example
 * // Configure in n8n node
 * Resource: VPS
 * Operation: List VPS
 * Output: Array of VPS details with plan, state, IP addresses, etc.
 *
 * @example
 * // Create snapshot for a VPS
 * // Resource: VPS -> Snapshot
 * // snapshotOperation = "Create"
 * // serviceName = "vps1234567" (or from dynamic list)
 * // Output: Snapshot details with id, description, status, etc.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	automatedBackup,
	availableUpgrade,
	backupftp,
	console as vpsConsole,
	contactChange,
	confirmTermination,
	datacenter,
	distribution,
	images,
	ipCountryAvailable,
	ips,
	migration2020,
	models,
	option,
	password,
	power,
	reinstall,
	secondaryDnsDomains,
	serviceInfos,
	snapshot,
	status,
	tasks,
	templates,
	termination,
	veeam,
} from './resources';
import { description as descriptionVpsGet, execute as executeVpsGet } from './get.operation';
import { description as descriptionVpsList, execute as executeVpsList } from './list.operation';
import { description as descriptionVpsEdit, execute as executeVpsEdit } from './edit.operation';
import {
	description as descriptionVpsAbortSnapshot,
	execute as executeVpsAbortSnapshot,
} from './abortSnapshot.operation';
import {
	description as descriptionDisksGet,
	execute as executeDisksGet,
} from './resources/disks/get.operation';
import { descriptionDisksList, executeDisksList } from './resources/disks/list.operation';
import { descriptionDisksUpdate, executeDisksUpdate } from './resources/disks/update.operation';
import {
	descriptionDisksGetMonitoring,
	executeDisksGetMonitoring,
} from './resources/disks/getMonitoring.operation';
import {
	descriptionDisksGetUsage,
	executeDisksGetUsage,
} from './resources/disks/getUsage.operation';
import {
	descriptionDistributionListSoftware,
	executeDistributionListSoftware,
} from './resources/distribution/listSoftware.operation';
import {
	descriptionDistributionGetSoftware,
	executeDistributionGetSoftware,
} from './resources/distribution/getSoftware.operation';
import { descriptionIpsGet, executeIpsGet } from './resources/ips/get.operation';
import { descriptionIpsRelease, executeIpsRelease } from './resources/ips/release.operation';
import { descriptionIpsUpdate, executeIpsUpdate } from './resources/ips/update.operation';
import {
	descriptionAutomatedBackupListAttached,
	executeAutomatedBackupListAttached,
} from './resources/automatedBackup/listAttached.operation';
import {
	descriptionAutomatedBackupDetach,
	executeAutomatedBackupDetach,
} from './resources/automatedBackup/detach.operation';
import {
	descriptionAutomatedBackupReschedule,
	executeAutomatedBackupReschedule,
} from './resources/automatedBackup/reschedule.operation';
import {
	descriptionAutomatedBackupRestore,
	executeAutomatedBackupRestore,
} from './resources/automatedBackup/restore.operation';
import {
	descriptionAutomatedBackupListRestorePoints,
	executeAutomatedBackupListRestorePoints,
} from './resources/automatedBackup/listRestorePoints.operation';
import {
	descriptionBackupFtpListAcls,
	executeBackupFtpListAcls,
} from './resources/backupftp/listAcls.operation';
import {
	descriptionBackupFtpCreateAcl,
	executeBackupFtpCreateAcl,
} from './resources/backupftp/createAcl.operation';
import {
	descriptionBackupFtpDeleteAcl,
	executeBackupFtpDeleteAcl,
} from './resources/backupftp/deleteAcl.operation';
import {
	descriptionBackupFtpListAuthorizableBlocks,
	executeBackupFtpListAuthorizableBlocks,
} from './resources/backupftp/listAuthorizableBlocks.operation';
import {
	descriptionBackupFtpSetPassword,
	executeBackupFtpSetPassword,
} from './resources/backupftp/setPassword.operation';
import {
	descriptionBackupFtpGetAcl,
	executeBackupFtpGetAcl,
} from './resources/backupftp/getAcl.operation';
import {
	descriptionBackupFtpUpdateAcl,
	executeBackupFtpUpdateAcl,
} from './resources/backupftp/updateAcl.operation';
import {
	descriptionMigration2020Request,
	executeMigration2020Request,
} from './resources/migration2020/request.operation';
import {
	descriptionMigration2020Update,
	executeMigration2020Update,
} from './resources/migration2020/update.operation';
import {
	descriptionOptionGetOption,
	executeOptionGetOption,
} from './resources/option/getOption.operation';
import {
	descriptionServiceInfosUpdate,
	executeServiceInfosUpdate,
} from './resources/serviceInfos/update.operation';
import {
	descriptionSecondaryDnsDomainsCreateDomain,
	executeSecondaryDnsDomainsCreateDomain,
} from './resources/secondaryDnsDomains/createDomain.operation';
import {
	descriptionSecondaryDnsDomainsGetDomain,
	executeSecondaryDnsDomainsGetDomain,
} from './resources/secondaryDnsDomains/getDomain.operation';
import {
	descriptionSecondaryDnsDomainsDeleteDomain,
	executeSecondaryDnsDomainsDeleteDomain,
} from './resources/secondaryDnsDomains/deleteDomain.operation';
import {
	descriptionSecondaryDnsDomainsGetNameServer,
	executeSecondaryDnsDomainsGetNameServer,
} from './resources/secondaryDnsDomains/getNameServer.operation';
import {
	descriptionSecondaryDnsDomainsGetAvailableNameServer,
	executeSecondaryDnsDomainsGetAvailableNameServer,
} from './resources/secondaryDnsDomains/getAvailableNameServer.operation';
import {
	descriptionConsoleOpenAccess,
	executeConsoleOpenAccess,
} from './resources/console/openAccess.operation';
import { descriptionPowerStart, executePowerStart } from './resources/power/start.operation';
import { descriptionPowerStop, executePowerStop } from './resources/power/stop.operation';
import { descriptionPowerReboot, executePowerReboot } from './resources/power/reboot.operation';
import { descriptionVeeamGet, executeVeeamGet } from './resources/veeam/get.operation';
import {
	descriptionVeeamListRestorePoints,
	executeVeeamListRestorePoints,
} from './resources/veeam/listRestorePoints.operation';
import {
	descriptionVeeamGetRestorePoint,
	executeVeeamGetRestorePoint,
} from './resources/veeam/getRestorePoint.operation';
import {
	descriptionVeeamRestoreRestorePoint,
	executeVeeamRestoreRestorePoint,
} from './resources/veeam/restoreRestorePoint.operation';
import {
	descriptionVeeamGetRestoredBackup,
	executeVeeamGetRestoredBackup,
} from './resources/veeam/getRestoredBackup.operation';
import {
	descriptionVeeamDeleteRestoredBackup,
	executeVeeamDeleteRestoredBackup,
} from './resources/veeam/deleteRestoredBackup.operation';
import {
	descriptionTemplatesList,
	executeTemplatesList,
} from './resources/templates/list.operation';
import { descriptionTemplatesGet, executeTemplatesGet } from './resources/templates/get.operation';
import {
	descriptionTemplatesListSoftware,
	executeTemplatesListSoftware,
} from './resources/templates/listSoftware.operation';
import {
	descriptionTemplatesGetSoftware,
	executeTemplatesGetSoftware,
} from './resources/templates/getSoftware.operation';
import { descriptionTasksList, executeTasksList } from './resources/tasks/list.operation';
import { descriptionTasksGet, executeTasksGet } from './resources/tasks/get.operation';
import { executeTerminationRequest } from './resources/termination/request.operation';
import {
	descriptionSnapshotUpdate,
	executeSnapshotUpdate,
} from './resources/snapshot/update.operation';
import {
	descriptionSnapshotDelete,
	executeSnapshotDelete,
} from './resources/snapshot/delete.operation';
import {
	descriptionSnapshotRevert,
	executeSnapshotRevert,
} from './resources/snapshot/revert.operation';
import {
	descriptionSnapshotDownload,
	executeSnapshotDownload,
} from './resources/snapshot/download.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const description: INodeProperties[] = [
		{
			displayName: 'VPS Resource',
			name: 'vpsResource',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Automated Backup',
					value: 'automatedBackup',
				},
				{
					name: 'Available Upgrade',
					value: 'availableUpgrade',
				},
				{
					name: 'Backup FTP',
					value: 'backupftp',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
				},
				{
					name: 'Console',
					value: 'console',
				},
				{
					name: 'Contact Change',
					value: 'contactChange',
				},
				{
					name: 'Datacenter',
					value: 'datacenter',
				},
				{
					name: 'Disks',
					value: 'disks',
				},
				{
					name: 'Distribution',
					value: 'distribution',
				},
				{
					name: 'Images',
					value: 'images',
				},
				{
					name: 'IP Country Available',
					value: 'ipCountryAvailable',
				},
				{
					name: 'IPs',
					value: 'ips',
				},
				{
					name: 'Migration 2020',
					value: 'migration2020',
				},
				{
					name: 'Models',
					value: 'models',
				},
				{
					name: 'Option',
					value: 'option',
				},
				{
					name: 'Password',
					value: 'password',
				},
				{
					name: 'Power',
					value: 'power',
				},
				{
					name: 'Reinstall',
					value: 'reinstall',
				},
				{
					name: 'Secondary DNS Domains',
					value: 'secondaryDnsDomains',
				},
				{
					name: 'Service Infos',
					value: 'serviceInfos',
				},
				{
					name: 'Snapshot',
					value: 'snapshot',
				},
				{
					name: 'Status',
					value: 'status',
				},
				{
					name: 'Tasks',
					value: 'tasks',
				},
				{
					name: 'Templates',
					value: 'templates',
				},
				{
					name: 'Termination',
					value: 'termination',
				},
				{
					name: 'Veeam Backup',
					value: 'veeam',
				},
				{
					name: 'VPS',
					value: 'vps',
				},
			],
			default: 'vps',
			displayOptions,
		},
		{
			displayName: 'VPS Operation',
			name: 'vpsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Abort Snapshot',
					value: 'abortSnapshot',
					action: 'Abort a pending snapshot for a VPS',
				},
				{
					name: 'Edit',
					value: 'edit',
					action: 'Edit VPS service details',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a VPS service',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all VPS services',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['vps'],
				},
			},
		},
		{
			displayName: 'Disks Operation',
			name: 'vpsDisksOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Disk',
					value: 'get',
					action: 'Get details of a disk of a VPS',
				},
				{
					name: 'Get Disk Monitoring',
					value: 'getMonitoring',
					action: 'Get monitoring metrics for a disk',
				},
				{
					name: 'Get Disk Usage',
					value: 'getUsage',
					action: 'Get usage metrics for a disk',
				},
				{
					name: 'List Disks',
					value: 'list',
					action: 'Get all disks of a VPS',
				},
				{
					name: 'Update Disk',
					value: 'update',
					action: 'Update disk properties',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['disks'],
				},
			},
		},
		{
			displayName: 'Distribution Operation',
			name: 'vpsDistributionOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Distribution',
					value: 'get',
					action: 'Get available distributions for a VPS',
				},
				{
					name: 'Get Software',
					value: 'getSoftware',
					action: 'Get details of a specific software distribution',
				},
				{
					name: 'List Software',
					value: 'listSoftware',
					action: 'List available software distributions for a VPS',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['distribution'],
				},
			},
		},
		{
			displayName: 'IPs Operation',
			name: 'vpsIpsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get IP',
					value: 'get',
					action: 'Get details of an IP address',
				},
				{
					name: 'List IPs',
					value: 'list',
					action: 'List all IP addresses of a VPS',
				},
				{
					name: 'Release IP',
					value: 'release',
					action: 'Release an IP address from a VPS',
				},
				{
					name: 'Update IP',
					value: 'update',
					action: 'Update IP address properties',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['ips'],
				},
			},
		},
		{
			displayName: 'Images Operation',
			name: 'vpsImagesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Current Image',
					value: 'getCurrent',
					action: 'Get the current image of a VPS',
				},
				{
					name: 'Get Image Details',
					value: 'getDetails',
					action: 'Get details of a specific available image',
				},
				{
					name: 'List Available Images',
					value: 'listAvailable',
					action: 'List available images for a VPS',
				},
			],
			default: 'getCurrent',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['images'],
				},
			},
		},
		{
			displayName: 'Migration 2020 Operation',
			name: 'vpsMigration2020Operation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Cancel Migration',
					value: 'cancel',
					action: 'Cancel a pending VPS migration',
				},
				{
					name: 'Get Migration Status',
					value: 'get',
					action: 'Get migration status for a VPS',
				},
				{
					name: 'Request Migration',
					value: 'request',
					action: 'Request a VPS migration to 2020 infrastructure',
				},
				{
					name: 'Update Migration',
					value: 'update',
					action: 'Update migration settings',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['migration2020'],
				},
			},
		},
		{
			displayName: 'Automated Backup Operation',
			name: 'vpsAutomatedBackupOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Detach Backup',
					value: 'detach',
					action: 'Detach a restored backup from this VPS',
				},
				{
					name: 'Get Automated Backup',
					value: 'get',
					action: 'Get automated backup configuration',
				},
				{
					name: 'List Attached Backups',
					value: 'listAttached',
					action: 'List backups attached to this VPS',
				},
				{
					name: 'List Restore Points',
					value: 'listRestorePoints',
					action: 'List automated backup restore points',
				},
				{
					name: 'Reschedule Backup',
					value: 'reschedule',
					action: 'Reschedule the automated backup time',
				},
				{
					name: 'Restore From Backup',
					value: 'restore',
					action: 'Restore VPS from an automated backup',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['automatedBackup'],
				},
			},
		},
		{
			displayName: 'Backup FTP Operation',
			name: 'vpsBackupFtpOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create ACL',
					value: 'createAcl',
					action: 'Create a new backup FTP ACL entry',
				},
				{
					name: 'Delete ACL',
					value: 'deleteAcl',
					action: 'Delete a backup FTP ACL entry',
				},
				{
					name: 'Get ACL',
					value: 'getAcl',
					action: 'Get details of a backup FTP ACL entry',
				},
				{
					name: 'Get Backup FTP',
					value: 'get',
					action: 'Get backup FTP configuration',
				},
				{
					name: 'List ACLs',
					value: 'listAcls',
					action: 'List backup FTP ACL entries',
				},
				{
					name: 'List Authorizable Blocks',
					value: 'listAuthorizableBlocks',
					action: 'List IP blocks that can be authorized',
				},
				{
					name: 'Set Password',
					value: 'setPassword',
					action: 'Set the backup FTP password',
				},
				{
					name: 'Update ACL',
					value: 'updateAcl',
					action: 'Update a backup FTP ACL entry',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['backupftp'],
				},
			},
		},
		{
			displayName: 'Console Operation',
			name: 'vpsConsoleOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Console URL',
					value: 'getUrl',
					action: 'Get the console URL for a VPS',
				},
				{
					name: 'Open Console Access',
					value: 'openAccess',
					action: 'Open VNC console access for a VPS',
				},
			],
			default: 'getUrl',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['console'],
				},
			},
		},
		{
			displayName: 'Snapshot Operation',
			name: 'vpsSnapshotOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create',
					value: 'create',
					action: 'Create a snapshot of this VPS',
				},
				{
					name: 'Delete',
					value: 'delete',
					action: 'Delete the VPS snapshot',
				},
				{
					name: 'Download',
					value: 'download',
					action: 'Generate a download URL for the VPS snapshot',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get information about the current VPS snapshot',
				},
				{
					name: 'Revert',
					value: 'revert',
					action: 'Revert this VPS to the specified snapshot',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update the VPS snapshot properties',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['snapshot'],
				},
			},
		},
		{
			displayName: 'Secondary DNS Domains Operation',
			name: 'vpsSecondaryDnsDomainsOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create Domain',
					value: 'createDomain',
					action: 'Add a secondary DNS domain',
				},
				{
					name: 'Delete Domain',
					value: 'deleteDomain',
					action: 'Remove a secondary DNS domain',
				},
				{
					name: 'Get Available Name Server',
					value: 'getAvailableNameServer',
					action: 'Get available name servers',
				},
				{
					name: 'Get Domain',
					value: 'getDomain',
					action: 'Get details of a secondary DNS domain',
				},
				{
					name: 'Get Name Server',
					value: 'getNameServer',
					action: 'Get DNS server for a domain',
				},
				{
					name: 'List Domains',
					value: 'list',
					action: 'List secondary DNS domains',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['secondaryDnsDomains'],
				},
			},
		},
		{
			displayName: 'Service Infos Operation',
			name: 'vpsServiceInfosOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Service Infos',
					value: 'get',
					action: 'Get service information for a VPS',
				},
				{
					name: 'Update Service Infos',
					value: 'update',
					action: 'Update service information for a VPS',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['serviceInfos'],
				},
			},
		},
		{
			displayName: 'Option Operation',
			name: 'vpsOptionOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Option',
					value: 'getOption',
					action: 'Get details of a specific option',
				},
				{
					name: 'List Options',
					value: 'get',
					action: 'List options attached to this VPS',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['option'],
				},
			},
		},
		{
			displayName: 'Power Operation',
			name: 'vpsPowerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Reboot',
					value: 'reboot',
					action: 'Reboot a VPS',
				},
				{
					name: 'Start',
					value: 'start',
					action: 'Start a VPS',
				},
				{
					name: 'Stop',
					value: 'stop',
					action: 'Stop a VPS',
				},
			],
			default: 'start',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['power'],
				},
			},
		},
		{
			displayName: 'Veeam Operation',
			name: 'vpsVeeamOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Delete Restored Backup',
					value: 'deleteRestoredBackup',
					action: 'Delete a restored Veeam backup',
				},
				{
					name: 'Get Restore Point',
					value: 'getRestorePoint',
					action: 'Get details of a Veeam restore point',
				},
				{
					name: 'Get Restored Backup',
					value: 'getRestoredBackup',
					action: 'Get restored Veeam backup information',
				},
				{
					name: 'Get Veeam',
					value: 'get',
					action: 'Get Veeam backup configuration',
				},
				{
					name: 'List Restore Points',
					value: 'listRestorePoints',
					action: 'List Veeam restore points',
				},
				{
					name: 'Restore Restore Point',
					value: 'restoreRestorePoint',
					action: 'Restore from a Veeam restore point',
				},
			],
			default: 'get',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['veeam'],
				},
			},
		},
		{
			displayName: 'Templates Operation',
			name: 'vpsTemplatesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Software',
					value: 'getSoftware',
					action: 'Get details of specific template software',
				},
				{
					name: 'Get Template',
					value: 'get',
					action: 'Get details of a specific template',
				},
				{
					name: 'List Software',
					value: 'listSoftware',
					action: 'List software for a template',
				},
				{
					name: 'List Templates',
					value: 'list',
					action: 'List available templates',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['templates'],
				},
			},
		},
		{
			displayName: 'Tasks Operation',
			name: 'vpsTasksOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Task',
					value: 'get',
					action: 'Get details of a specific task',
				},
				{
					name: 'List Tasks',
					value: 'list',
					action: 'List all tasks for a VPS',
				},
			],
			default: 'list',
			displayOptions: {
				...displayOptions,
				show: {
					...displayOptions?.show,
					vpsResource: ['tasks'],
				},
			},
		},
	];

	return [
		...description,
		...descriptionVpsGet({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['vps'], vpsOperation: ['get'] },
		}),
		...descriptionVpsList({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['vps'], vpsOperation: ['list'] },
		}),
		...descriptionVpsEdit({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['vps'], vpsOperation: ['edit'] },
		}),
		...descriptionVpsAbortSnapshot({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['vps'], vpsOperation: ['abortSnapshot'] },
		}),
		...automatedBackup.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['automatedBackup'],
				vpsAutomatedBackupOperation: ['get'],
			},
		}),
		...descriptionAutomatedBackupListAttached({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['automatedBackup'],
				vpsAutomatedBackupOperation: ['listAttached'],
			},
		}),
		...descriptionAutomatedBackupDetach({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['automatedBackup'],
				vpsAutomatedBackupOperation: ['detach'],
			},
		}),
		...descriptionAutomatedBackupReschedule({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['automatedBackup'],
				vpsAutomatedBackupOperation: ['reschedule'],
			},
		}),
		...descriptionAutomatedBackupRestore({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['automatedBackup'],
				vpsAutomatedBackupOperation: ['restore'],
			},
		}),
		...descriptionAutomatedBackupListRestorePoints({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['automatedBackup'],
				vpsAutomatedBackupOperation: ['listRestorePoints'],
			},
		}),
		...availableUpgrade.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['availableUpgrade'] },
		}),
		...backupftp.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['backupftp'], vpsBackupFtpOperation: ['get'] },
		}),
		...descriptionBackupFtpListAcls({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['backupftp'],
				vpsBackupFtpOperation: ['listAcls'],
			},
		}),
		...descriptionBackupFtpCreateAcl({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['backupftp'],
				vpsBackupFtpOperation: ['createAcl'],
			},
		}),
		...descriptionBackupFtpDeleteAcl({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['backupftp'],
				vpsBackupFtpOperation: ['deleteAcl'],
			},
		}),
		...descriptionBackupFtpListAuthorizableBlocks({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['backupftp'],
				vpsBackupFtpOperation: ['listAuthorizableBlocks'],
			},
		}),
		...descriptionBackupFtpSetPassword({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['backupftp'],
				vpsBackupFtpOperation: ['setPassword'],
			},
		}),
		...descriptionBackupFtpGetAcl({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['backupftp'],
				vpsBackupFtpOperation: ['getAcl'],
			},
		}),
		...descriptionBackupFtpUpdateAcl({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['backupftp'],
				vpsBackupFtpOperation: ['updateAcl'],
			},
		}),
		...vpsConsole.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['console'],
				vpsConsoleOperation: ['getUrl'],
			},
		}),
		...descriptionConsoleOpenAccess({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['console'],
				vpsConsoleOperation: ['openAccess'],
			},
		}),
		...contactChange.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['contactChange'] },
		}),
		...confirmTermination.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['confirmTermination'] },
		}),
		...datacenter.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['datacenter'] },
		}),
		...descriptionDisksGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['disks'],
				vpsDisksOperation: ['get'],
			},
		}),
		...descriptionDisksList({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['disks'],
				vpsDisksOperation: ['list'],
			},
		}),
		...descriptionDisksUpdate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['disks'],
				vpsDisksOperation: ['update'],
			},
		}),
		...descriptionDisksGetMonitoring({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['disks'],
				vpsDisksOperation: ['getMonitoring'],
			},
		}),
		...descriptionDisksGetUsage({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['disks'],
				vpsDisksOperation: ['getUsage'],
			},
		}),
		...distribution.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['distribution'] },
		}),
		...descriptionDistributionListSoftware({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['distribution'],
				vpsDistributionOperation: ['listSoftware'],
			},
		}),
		...descriptionDistributionGetSoftware({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['distribution'],
				vpsDistributionOperation: ['getSoftware'],
			},
		}),
		...ipCountryAvailable.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['ipCountryAvailable'] },
		}),
		...ips.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['ips'] },
		}),
		...descriptionIpsGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['ips'],
				vpsIpsOperation: ['get'],
			},
		}),
		...descriptionIpsRelease({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['ips'],
				vpsIpsOperation: ['release'],
			},
		}),
		...descriptionIpsUpdate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['ips'],
				vpsIpsOperation: ['update'],
			},
		}),
		...images.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['images'] },
		}),
		...migration2020.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['migration2020'],
				vpsMigration2020Operation: ['get'],
			},
		}),
		...descriptionMigration2020Request({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['migration2020'],
				vpsMigration2020Operation: ['request'],
			},
		}),
		...descriptionMigration2020Update({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['migration2020'],
				vpsMigration2020Operation: ['update'],
			},
		}),
		...migration2020.descriptionMigration2020Cancel({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['migration2020'],
				vpsMigration2020Operation: ['cancel'],
			},
		}),
		...models.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['models'] },
		}),
		...option.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['option'],
				vpsOptionOperation: ['get'],
			},
		}),
		...descriptionOptionGetOption({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['option'],
				vpsOptionOperation: ['getOption'],
			},
		}),
		...password.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['password'] },
		}),
		...power.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['power'],
				vpsPowerOperation: ['start'],
			},
		}),
		...descriptionPowerStart({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['power'],
				vpsPowerOperation: ['start'],
			},
		}),
		...descriptionPowerStop({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['power'],
				vpsPowerOperation: ['stop'],
			},
		}),
		...descriptionPowerReboot({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['power'],
				vpsPowerOperation: ['reboot'],
			},
		}),
		...reinstall.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['reinstall'] },
		}),
		...secondaryDnsDomains.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['secondaryDnsDomains'],
				vpsSecondaryDnsDomainsOperation: ['list'],
			},
		}),
		...descriptionSecondaryDnsDomainsCreateDomain({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['secondaryDnsDomains'],
				vpsSecondaryDnsDomainsOperation: ['createDomain'],
			},
		}),
		...descriptionSecondaryDnsDomainsGetDomain({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['secondaryDnsDomains'],
				vpsSecondaryDnsDomainsOperation: ['getDomain'],
			},
		}),
		...descriptionSecondaryDnsDomainsDeleteDomain({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['secondaryDnsDomains'],
				vpsSecondaryDnsDomainsOperation: ['deleteDomain'],
			},
		}),
		...descriptionSecondaryDnsDomainsGetNameServer({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['secondaryDnsDomains'],
				vpsSecondaryDnsDomainsOperation: ['getNameServer'],
			},
		}),
		...descriptionSecondaryDnsDomainsGetAvailableNameServer({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['secondaryDnsDomains'],
				vpsSecondaryDnsDomainsOperation: ['getAvailableNameServer'],
			},
		}),
		...serviceInfos.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['serviceInfos'],
				vpsServiceInfosOperation: ['get'],
			},
		}),
		...descriptionServiceInfosUpdate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['serviceInfos'],
				vpsServiceInfosOperation: ['update'],
			},
		}),
		...snapshot.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['snapshot'],
				vpsSnapshotOperation: ['create'],
			},
		}),
		...descriptionSnapshotUpdate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['snapshot'],
				vpsSnapshotOperation: ['update'],
			},
		}),
		...descriptionSnapshotDelete({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['snapshot'],
				vpsSnapshotOperation: ['delete'],
			},
		}),
		...descriptionSnapshotRevert({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['snapshot'],
				vpsSnapshotOperation: ['revert'],
			},
		}),
		...descriptionSnapshotDownload({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['snapshot'],
				vpsSnapshotOperation: ['download'],
			},
		}),
		...status.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['status'] },
		}),
		...tasks.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['tasks'],
				vpsTasksOperation: ['list'],
			},
		}),
		...descriptionTasksList({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['tasks'],
				vpsTasksOperation: ['list'],
			},
		}),
		...descriptionTasksGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['tasks'],
				vpsTasksOperation: ['get'],
			},
		}),
		...templates.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['templates'],
				vpsTemplatesOperation: ['list'],
			},
		}),
		...descriptionTemplatesList({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['templates'],
				vpsTemplatesOperation: ['list'],
			},
		}),
		...descriptionTemplatesGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['templates'],
				vpsTemplatesOperation: ['get'],
			},
		}),
		...descriptionTemplatesListSoftware({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['templates'],
				vpsTemplatesOperation: ['listSoftware'],
			},
		}),
		...descriptionTemplatesGetSoftware({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['templates'],
				vpsTemplatesOperation: ['getSoftware'],
			},
		}),
		...termination.description({
			...displayOptions,
			show: { ...displayOptions?.show, vpsResource: ['termination'] },
		}),
		...veeam.description({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['veeam'],
				vpsVeeamOperation: ['get'],
			},
		}),
		...descriptionVeeamGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['veeam'],
				vpsVeeamOperation: ['get'],
			},
		}),
		...descriptionVeeamListRestorePoints({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['veeam'],
				vpsVeeamOperation: ['listRestorePoints'],
			},
		}),
		...descriptionVeeamGetRestorePoint({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['veeam'],
				vpsVeeamOperation: ['getRestorePoint'],
			},
		}),
		...descriptionVeeamRestoreRestorePoint({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['veeam'],
				vpsVeeamOperation: ['restoreRestorePoint'],
			},
		}),
		...descriptionVeeamGetRestoredBackup({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['veeam'],
				vpsVeeamOperation: ['getRestoredBackup'],
			},
		}),
		...descriptionVeeamDeleteRestoredBackup({
			...displayOptions,
			show: {
				...displayOptions?.show,
				vpsResource: ['veeam'],
				vpsVeeamOperation: ['deleteRestoredBackup'],
			},
		}),
	];
}

/**
 * Executes the selected VPS resource operation.
 *
 * Routes execution to the appropriate handler based on the selected resource.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const resource = this.getNodeParameter('vpsResource', 0, { extractValue: true }) as string;

	switch (resource) {
		case 'vps': {
			const operation = this.getNodeParameter('vpsOperation', 0, { extractValue: true }) as string;
			switch (operation) {
				case 'get':
					return await executeVpsGet.call(this);
				case 'list':
					return await executeVpsList.call(this);
				case 'edit':
					return await executeVpsEdit.call(this);
				case 'abortSnapshot':
					return await executeVpsAbortSnapshot.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "vps"`);
			}
		}
		case 'automatedBackup': {
			const operation = this.getNodeParameter('vpsAutomatedBackupOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await automatedBackup.execute.call(this);
				case 'listAttached':
					return await executeAutomatedBackupListAttached.call(this);
				case 'detach':
					return await executeAutomatedBackupDetach.call(this);
				case 'reschedule':
					return await executeAutomatedBackupReschedule.call(this);
				case 'restore':
					return await executeAutomatedBackupRestore.call(this);
				case 'listRestorePoints':
					return await executeAutomatedBackupListRestorePoints.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "automatedBackup"`);
			}
		}
		case 'availableUpgrade':
			return await availableUpgrade.execute.call(this);
		case 'backupftp': {
			const operation = this.getNodeParameter('vpsBackupFtpOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await backupftp.execute.call(this);
				case 'listAcls':
					return await executeBackupFtpListAcls.call(this);
				case 'createAcl':
					return await executeBackupFtpCreateAcl.call(this);
				case 'deleteAcl':
					return await executeBackupFtpDeleteAcl.call(this);
				case 'listAuthorizableBlocks':
					return await executeBackupFtpListAuthorizableBlocks.call(this);
				case 'setPassword':
					return await executeBackupFtpSetPassword.call(this);
				case 'getAcl':
					return await executeBackupFtpGetAcl.call(this);
				case 'updateAcl':
					return await executeBackupFtpUpdateAcl.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "backupftp"`);
			}
		}
		case 'console': {
			const operation = this.getNodeParameter('vpsConsoleOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'getUrl':
					return await vpsConsole.execute.call(this);
				case 'openAccess':
					return await executeConsoleOpenAccess.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "console"`);
			}
		}
		case 'contactChange':
			return await contactChange.execute.call(this);
		case 'confirmTermination':
			return await confirmTermination.execute.call(this);
		case 'datacenter':
			return await datacenter.execute.call(this);
		case 'disks': {
			const operation = this.getNodeParameter('vpsDisksOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await executeDisksGet.call(this);
				case 'list':
					return await executeDisksList.call(this);
				case 'update':
					return await executeDisksUpdate.call(this);
				case 'getMonitoring':
					return await executeDisksGetMonitoring.call(this);
				case 'getUsage':
					return await executeDisksGetUsage.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "disks"`);
			}
		}
		case 'distribution': {
			const operation = this.getNodeParameter('vpsDistributionOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await distribution.execute.call(this);
				case 'listSoftware':
					return await executeDistributionListSoftware.call(this);
				case 'getSoftware':
					return await executeDistributionGetSoftware.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "distribution"`);
			}
		}
		case 'images':
			return await images.execute.call(this);
		case 'ipCountryAvailable':
			return await ipCountryAvailable.execute.call(this);
		case 'ips': {
			const operation = this.getNodeParameter('vpsIpsOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'list':
					return await ips.execute.call(this);
				case 'get':
					return await executeIpsGet.call(this);
				case 'release':
					return await executeIpsRelease.call(this);
				case 'update':
					return await executeIpsUpdate.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "ips"`);
			}
		}
		case 'migration2020': {
			const operation = this.getNodeParameter('vpsMigration2020Operation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await migration2020.execute.call(this);
				case 'cancel':
					return await migration2020.executeMigration2020Cancel.call(this);
				case 'request':
					return await executeMigration2020Request.call(this);
				case 'update':
					return await executeMigration2020Update.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "migration2020"`);
			}
		}
		case 'models':
			return await models.execute.call(this);
		case 'option': {
			const operation = this.getNodeParameter('vpsOptionOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await option.execute.call(this);
				case 'getOption':
					return await executeOptionGetOption.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "option"`);
			}
		}
		case 'password':
			return await password.execute.call(this);
		case 'power': {
			const operation = this.getNodeParameter('vpsPowerOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'start':
					return await executePowerStart.call(this);
				case 'stop':
					return await executePowerStop.call(this);
				case 'reboot':
					return await executePowerReboot.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "power"`);
			}
		}
		case 'reinstall':
			return await reinstall.execute.call(this);
		case 'secondaryDnsDomains': {
			const operation = this.getNodeParameter('vpsSecondaryDnsDomainsOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'list':
					return await secondaryDnsDomains.execute.call(this);
				case 'createDomain':
					return await executeSecondaryDnsDomainsCreateDomain.call(this);
				case 'getDomain':
					return await executeSecondaryDnsDomainsGetDomain.call(this);
				case 'deleteDomain':
					return await executeSecondaryDnsDomainsDeleteDomain.call(this);
				case 'getNameServer':
					return await executeSecondaryDnsDomainsGetNameServer.call(this);
				case 'getAvailableNameServer':
					return await executeSecondaryDnsDomainsGetAvailableNameServer.call(this);
				default:
					throw new Error(
						`Unsupported operation "${operation}" for resource "secondaryDnsDomains"`,
					);
			}
		}
		case 'serviceInfos': {
			const operation = this.getNodeParameter('vpsServiceInfosOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await serviceInfos.execute.call(this);
				case 'update':
					return await executeServiceInfosUpdate.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "serviceInfos"`);
			}
		}
		case 'snapshot': {
			const operation = this.getNodeParameter('vpsSnapshotOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'create':
					return await snapshot.execute.call(this);
				case 'update':
					return await executeSnapshotUpdate.call(this);
				case 'delete':
					return await executeSnapshotDelete.call(this);
				case 'revert':
					return await executeSnapshotRevert.call(this);
				case 'download':
					return await executeSnapshotDownload.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "snapshot"`);
			}
		}
		case 'status':
			return await status.execute.call(this);
		case 'tasks': {
			const operation = this.getNodeParameter('vpsTasksOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'list':
					return await executeTasksList.call(this);
				case 'get':
					return await executeTasksGet.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "tasks"`);
			}
		}
		case 'templates': {
			const operation = this.getNodeParameter('vpsTemplatesOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'list':
					return await executeTemplatesList.call(this);
				case 'get':
					return await executeTemplatesGet.call(this);
				case 'listSoftware':
					return await executeTemplatesListSoftware.call(this);
				case 'getSoftware':
					return await executeTemplatesGetSoftware.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "templates"`);
			}
		}
		case 'termination':
			return await executeTerminationRequest.call(this);
		case 'veeam': {
			const operation = this.getNodeParameter('vpsVeeamOperation', 0, {
				extractValue: true,
			}) as string;
			switch (operation) {
				case 'get':
					return await executeVeeamGet.call(this);
				case 'listRestorePoints':
					return await executeVeeamListRestorePoints.call(this);
				case 'getRestorePoint':
					return await executeVeeamGetRestorePoint.call(this);
				case 'restoreRestorePoint':
					return await executeVeeamRestoreRestorePoint.call(this);
				case 'getRestoredBackup':
					return await executeVeeamGetRestoredBackup.call(this);
				case 'deleteRestoredBackup':
					return await executeVeeamDeleteRestoredBackup.call(this);
				default:
					throw new Error(`Unsupported operation "${operation}" for resource "veeam"`);
			}
		}
	}

	throw new Error(`Unsupported resource "${resource}" for VPS operations`);
}
