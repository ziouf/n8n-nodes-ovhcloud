/**
 * @brief Dedicated Server resource operations for n8n node
 *
 * Provides comprehensive operations for managing OVH dedicated servers including:
 * - Core server management (list, get, update)
 * - Service information management
 * - Contact change, termination, and reboot
 * - Task management (list, get, cancel)
 * - Hardware, network, and IP specifications
 * - Boot configuration management
 * - Installation templates and status
 * - OS reinstallation
 * - IP address listing
 * - Backup FTP and Backup Cloud management
 * - Firewall, IPMI, and KVM features
 * - Virtual MAC and Virtual Network Interface management
 * - Server options management
 * - Ongoing tasks monitoring
 * - Secondary DNS domain management
 * - Network interface controller management
 * - Intervention history
 * - Burst settings management
 * - BIOS settings and SGX configuration
 *
 * @remarks
 * All operations require specification of a service name.
 * Service names can be entered manually or selected from dynamic dropdown using getDedicatedServerServices.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import * as serviceInfos from './resources/serviceInfos/index';
import * as changeContact from './resources/changeContact/index';
import * as terminate from './resources/terminate/index';
import * as confirmTermination from './resources/confirmTermination/index';
import * as reboot from './resources/reboot/index';
import * as task from './resources/task/index';
import * as specifications from './resources/specifications/index';
import * as boot from './resources/boot/index';
import * as install from './resources/install/index';
import * as reinstall from './resources/reinstall/index';
import * as ips from './resources/ips/index';
import * as backupFtp from './resources/backupFtp/index';
import * as backupCloud from './resources/backupCloud/index';
import * as firewall from './resources/firewall/index';
import * as ipmi from './resources/ipmi/index';
import * as kvm from './resources/kvm/index';
import * as virtualMac from './resources/virtualMac/index';
import * as virtualNetworkInterface from './resources/virtualNetworkInterface/index';
import * as option from './resources/option/index';
import * as ongoing from './resources/ongoing/index';
import * as secondaryDnsDomains from './resources/secondaryDnsDomains/index';
import * as networkInterfaceController from './resources/networkInterfaceController/index';
import * as intervention from './resources/intervention/index';
import * as burst from './resources/burst/index';
import * as biosSettings from './resources/biosSettings/index';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Dedicated Server Operation',
			name: 'dedicatedServerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Cancel Task', value: 'cancelTask', action: 'Cancel a dedicated server task' },
				{
					name: 'Change Backup Cloud Password',
					value: 'changeBackupCloudPassword',
					action: 'Change backup cloud password',
				},
				{
					name: 'Change Backup FTP Password',
					value: 'changeBackupFtpPassword',
					action: 'Change backup FTP password',
				},
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change contact for a dedicated server',
				},
				{ name: 'Configure SGX', value: 'configureSgx', action: 'Configure SGX BIOS settings' },
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a dedicated server',
				},
				{
					name: 'Create Backup Cloud',
					value: 'createBackupCloud',
					action: 'Create backup cloud service',
				},
				{
					name: 'Create Backup FTP',
					value: 'createBackupFtp',
					action: 'Create backup FTP service',
				},
				{
					name: 'Create Backup FTP Access',
					value: 'createBackupFtpAccess',
					action: 'Create backup FTP ACL',
				},
				{
					name: 'Create Secondary DNS Domain',
					value: 'createSecondaryDnsDomain',
					action: 'Add a secondary DNS domain',
				},
				{ name: 'Create Virtual MAC', value: 'createVirtualMac', action: 'Create a virtual MAC' },
				{
					name: 'Delete Backup Cloud',
					value: 'deleteBackupCloud',
					action: 'Deactivate backup cloud service',
				},
				{
					name: 'Delete Backup FTP',
					value: 'deleteBackupFtp',
					action: 'Terminate backup FTP service',
				},
				{
					name: 'Delete Backup FTP Access',
					value: 'deleteBackupFtpAccess',
					action: 'Revoke backup FTP ACL',
				},
				{ name: 'Delete Option', value: 'deleteOption', action: 'Release an option' },
				{
					name: 'Delete Secondary DNS Domain',
					value: 'deleteSecondaryDnsDomain',
					action: 'Remove a secondary DNS domain',
				},
				{ name: 'Get', value: 'get', action: 'Get details of a dedicated server' },
				{
					name: 'Get Backup Cloud',
					value: 'getBackupCloud',
					action: 'Get backup cloud properties',
				},
				{ name: 'Get Backup FTP', value: 'getBackupFtp', action: 'Get backup FTP properties' },
				{
					name: 'Get Backup FTP Access',
					value: 'getBackupFtpAccess',
					action: 'Get backup FTP ACL details',
				},
				{ name: 'Get BIOS Settings', value: 'getBiosSettings', action: 'Get BIOS settings' },
				{ name: 'Get Boot', value: 'getBoot', action: 'Get netboot details' },
				{ name: 'Get Burst', value: 'getBurst', action: 'Get burst settings' },
				{
					name: 'Get Compatible Templates',
					value: 'getCompatibleTemplates',
					action: 'Get compatible installation templates',
				},
				{ name: 'Get Firewall', value: 'getFirewall', action: 'Get firewall properties' },
				{
					name: 'Get Hardware Specs',
					value: 'getHardwareSpecs',
					action: 'Get hardware specifications',
				},
				{
					name: 'Get Install Status',
					value: 'getInstallStatus',
					action: 'Get installation status',
				},
				{ name: 'Get Intervention', value: 'getIntervention', action: 'Get intervention details' },
				{ name: 'Get IP Specs', value: 'getIpSpecs', action: 'Get IP capabilities' },
				{ name: 'Get IPMI', value: 'getIpmi', action: 'Get IPMI properties' },
				{ name: 'Get KVM', value: 'getKvm', action: 'Get KVM properties' },
				{
					name: 'Get Network Interface Controller',
					value: 'getNetworkInterfaceController',
					action: 'Get network interface controller details',
				},
				{
					name: 'Get Network Specs',
					value: 'getNetworkSpecs',
					action: 'Get network specifications',
				},
				{ name: 'Get Ongoing', value: 'getOngoing', action: 'Get ongoing tasks' },
				{ name: 'Get Option', value: 'getOption', action: 'Get option details' },
				{
					name: 'Get Secondary DNS Domain',
					value: 'getSecondaryDnsDomain',
					action: 'Get secondary DNS domain details',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information for a dedicated server',
				},
				{
					name: 'Get SGX BIOS Settings',
					value: 'getSgxBiosSettings',
					action: 'Get SGX BIOS settings',
				},
				{ name: 'Get Task', value: 'getTask', action: 'Get details of a dedicated server task' },
				{ name: 'Get Virtual MAC', value: 'getVirtualMac', action: 'Get virtual MAC details' },
				{
					name: 'Get Virtual Network Interface',
					value: 'getVirtualNetworkInterface',
					action: 'Get virtual network interface details',
				},
				{ name: 'List', value: 'list', action: 'List all dedicated servers' },
				{
					name: 'List Backup FTP Access',
					value: 'listBackupFtpAccess',
					action: 'List backup FTP ACLs',
				},
				{
					name: 'List Backup FTP Authorizable Blocks',
					value: 'listBackupFtpAuthorizableBlocks',
					action: 'List authorizable IP blocks',
				},
				{ name: 'List Boots', value: 'listBoots', action: 'List netboot configurations' },
				{
					name: 'List Interventions',
					value: 'listInterventions',
					action: 'List intervention history',
				},
				{ name: 'List IPs', value: 'listIps', action: 'List all IPs on a dedicated server' },
				{
					name: 'List Network Interface Controllers',
					value: 'listNetworkInterfaceControllers',
					action: 'List network interface controllers',
				},
				{ name: 'List Options', value: 'listOptions', action: 'List server options' },
				{
					name: 'List Secondary DNS Domains',
					value: 'listSecondaryDnsDomains',
					action: 'List secondary DNS domains',
				},
				{ name: 'List Tasks', value: 'listTasks', action: 'List tasks for a dedicated server' },
				{ name: 'List Virtual MACs', value: 'listVirtualMacs', action: 'List virtual MACs' },
				{
					name: 'List Virtual Network Interfaces',
					value: 'listVirtualNetworkInterfaces',
					action: 'List virtual network interfaces',
				},
				{ name: 'Reboot', value: 'reboot', action: 'Hard reboot a dedicated server' },
				{
					name: 'Reinstall',
					value: 'reinstall',
					action: 'Install or reinstall OS on a dedicated server',
				},
				{
					name: 'Reset IPMI Interface',
					value: 'resetIpmiInterface',
					action: 'Reset IPMI interface',
				},
				{ name: 'Reset IPMI Sessions', value: 'resetIpmiSessions', action: 'Reset IPMI sessions' },
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Request termination of a dedicated server',
				},
				{ name: 'Update', value: 'update', action: 'Update dedicated server properties' },
				{
					name: 'Update Backup FTP Access',
					value: 'updateBackupFtpAccess',
					action: 'Update backup FTP ACL',
				},
				{ name: 'Update Burst', value: 'updateBurst', action: 'Update burst settings' },
				{ name: 'Update Firewall', value: 'updateFirewall', action: 'Update firewall properties' },
				{
					name: 'Update Secondary DNS Domain',
					value: 'updateSecondaryDnsDomain',
					action: 'Update secondary DNS domain IP',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information for a dedicated server',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['update'] },
		}),
		...serviceInfos.descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getServiceInfos'] },
		}),
		...serviceInfos.descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['updateServiceInfos'] },
		}),
		...changeContact.descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['changeContact'] },
		}),
		...terminate.descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['terminate'] },
		}),
		...confirmTermination.descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['confirmTermination'] },
		}),
		...reboot.descriptionReboot({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['reboot'] },
		}),
		...task.descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listTasks'] },
		}),
		...task.descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getTask'] },
		}),
		...task.descriptionCancelTask({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['cancelTask'] },
		}),
		...specifications.descriptionGetHardwareSpecs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getHardwareSpecs'] },
		}),
		...specifications.descriptionGetNetworkSpecs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getNetworkSpecs'] },
		}),
		...specifications.descriptionGetIpSpecs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getIpSpecs'] },
		}),
		...boot.descriptionListBoots({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listBoots'] },
		}),
		...boot.descriptionGetBoot({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getBoot'] },
		}),
		...install.descriptionGetCompatibleTemplates({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getCompatibleTemplates'] },
		}),
		...install.descriptionGetInstallStatus({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getInstallStatus'] },
		}),
		...reinstall.descriptionReinstall({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['reinstall'] },
		}),
		...ips.descriptionListIps({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listIps'] },
		}),
		...backupFtp.descriptionGetBackupFtp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getBackupFtp'] },
		}),
		...backupFtp.descriptionCreateBackupFtp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['createBackupFtp'] },
		}),
		...backupFtp.descriptionDeleteBackupFtp({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['deleteBackupFtp'] },
		}),
		...backupFtp.descriptionListBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listBackupFtpAccess'] },
		}),
		...backupFtp.descriptionGetBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getBackupFtpAccess'] },
		}),
		...backupFtp.descriptionCreateBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['createBackupFtpAccess'] },
		}),
		...backupFtp.descriptionUpdateBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['updateBackupFtpAccess'] },
		}),
		...backupFtp.descriptionDeleteBackupFtpAccess({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['deleteBackupFtpAccess'] },
		}),
		...backupFtp.descriptionListBackupFtpAuthorizableBlocks({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedServerOperation: ['listBackupFtpAuthorizableBlocks'],
			},
		}),
		...backupFtp.descriptionChangeBackupFtpPassword({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['changeBackupFtpPassword'] },
		}),
		...backupCloud.descriptionGetBackupCloud({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getBackupCloud'] },
		}),
		...backupCloud.descriptionCreateBackupCloud({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['createBackupCloud'] },
		}),
		...backupCloud.descriptionDeleteBackupCloud({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['deleteBackupCloud'] },
		}),
		...backupCloud.descriptionChangeBackupCloudPassword({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['changeBackupCloudPassword'] },
		}),
		...firewall.descriptionGetFirewall({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getFirewall'] },
		}),
		...firewall.descriptionUpdateFirewall({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['updateFirewall'] },
		}),
		...ipmi.descriptionGetIpmi({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getIpmi'] },
		}),
		...ipmi.descriptionResetIpmiInterface({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['resetIpmiInterface'] },
		}),
		...ipmi.descriptionResetIpmiSessions({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['resetIpmiSessions'] },
		}),
		...kvm.descriptionGetKvm({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getKvm'] },
		}),
		...virtualMac.descriptionListVirtualMacs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listVirtualMacs'] },
		}),
		...virtualMac.descriptionCreateVirtualMac({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['createVirtualMac'] },
		}),
		...virtualMac.descriptionGetVirtualMac({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getVirtualMac'] },
		}),
		...virtualNetworkInterface.descriptionListVirtualNetworkInterfaces({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedServerOperation: ['listVirtualNetworkInterfaces'],
			},
		}),
		...virtualNetworkInterface.descriptionGetVirtualNetworkInterface({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedServerOperation: ['getVirtualNetworkInterface'],
			},
		}),
		...option.descriptionListOptions({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listOptions'] },
		}),
		...option.descriptionGetOption({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getOption'] },
		}),
		...option.descriptionDeleteOption({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['deleteOption'] },
		}),
		...ongoing.descriptionGetOngoing({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getOngoing'] },
		}),
		...secondaryDnsDomains.descriptionListSecondaryDnsDomains({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listSecondaryDnsDomains'] },
		}),
		...secondaryDnsDomains.descriptionCreateSecondaryDnsDomain({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['createSecondaryDnsDomain'] },
		}),
		...secondaryDnsDomains.descriptionGetSecondaryDnsDomain({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getSecondaryDnsDomain'] },
		}),
		...secondaryDnsDomains.descriptionUpdateSecondaryDnsDomain({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['updateSecondaryDnsDomain'] },
		}),
		...secondaryDnsDomains.descriptionDeleteSecondaryDnsDomain({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['deleteSecondaryDnsDomain'] },
		}),
		...networkInterfaceController.descriptionListNetworkInterfaceControllers({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedServerOperation: ['listNetworkInterfaceControllers'],
			},
		}),
		...networkInterfaceController.descriptionGetNetworkInterfaceController({
			...displayOptions,
			show: {
				...displayOptions?.show,
				dedicatedServerOperation: ['getNetworkInterfaceController'],
			},
		}),
		...intervention.descriptionListInterventions({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['listInterventions'] },
		}),
		...intervention.descriptionGetIntervention({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getIntervention'] },
		}),
		...burst.descriptionGetBurst({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getBurst'] },
		}),
		...burst.descriptionUpdateBurst({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['updateBurst'] },
		}),
		...biosSettings.descriptionGetBiosSettings({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getBiosSettings'] },
		}),
		...biosSettings.descriptionGetSgxBiosSettings({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['getSgxBiosSettings'] },
		}),
		...biosSettings.descriptionConfigureSgx({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedServerOperation: ['configureSgx'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Server operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedServerOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'getServiceInfos':
			return await serviceInfos.executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await serviceInfos.executeUpdateServiceInfos.call(this);
		case 'changeContact':
			return await changeContact.executeChangeContact.call(this);
		case 'terminate':
			return await terminate.executeTerminate.call(this);
		case 'confirmTermination':
			return await confirmTermination.executeConfirmTermination.call(this);
		case 'reboot':
			return await reboot.executeReboot.call(this);
		case 'listTasks':
			return await task.executeListTasks.call(this);
		case 'getTask':
			return await task.executeGetTask.call(this);
		case 'cancelTask':
			return await task.executeCancelTask.call(this);
		case 'getHardwareSpecs':
			return await specifications.executeGetHardwareSpecs.call(this);
		case 'getNetworkSpecs':
			return await specifications.executeGetNetworkSpecs.call(this);
		case 'getIpSpecs':
			return await specifications.executeGetIpSpecs.call(this);
		case 'listBoots':
			return await boot.executeListBoots.call(this);
		case 'getBoot':
			return await boot.executeGetBoot.call(this);
		case 'getCompatibleTemplates':
			return await install.executeGetCompatibleTemplates.call(this);
		case 'getInstallStatus':
			return await install.executeGetInstallStatus.call(this);
		case 'reinstall':
			return await reinstall.executeReinstall.call(this);
		case 'listIps':
			return await ips.executeListIps.call(this);
		case 'getBackupFtp':
			return await backupFtp.executeGetBackupFtp.call(this);
		case 'createBackupFtp':
			return await backupFtp.executeCreateBackupFtp.call(this);
		case 'deleteBackupFtp':
			return await backupFtp.executeDeleteBackupFtp.call(this);
		case 'listBackupFtpAccess':
			return await backupFtp.executeListBackupFtpAccess.call(this);
		case 'getBackupFtpAccess':
			return await backupFtp.executeGetBackupFtpAccess.call(this);
		case 'createBackupFtpAccess':
			return await backupFtp.executeCreateBackupFtpAccess.call(this);
		case 'updateBackupFtpAccess':
			return await backupFtp.executeUpdateBackupFtpAccess.call(this);
		case 'deleteBackupFtpAccess':
			return await backupFtp.executeDeleteBackupFtpAccess.call(this);
		case 'listBackupFtpAuthorizableBlocks':
			return await backupFtp.executeListBackupFtpAuthorizableBlocks.call(this);
		case 'changeBackupFtpPassword':
			return await backupFtp.executeChangeBackupFtpPassword.call(this);
		case 'getBackupCloud':
			return await backupCloud.executeGetBackupCloud.call(this);
		case 'createBackupCloud':
			return await backupCloud.executeCreateBackupCloud.call(this);
		case 'deleteBackupCloud':
			return await backupCloud.executeDeleteBackupCloud.call(this);
		case 'changeBackupCloudPassword':
			return await backupCloud.executeChangeBackupCloudPassword.call(this);
		case 'getFirewall':
			return await firewall.executeGetFirewall.call(this);
		case 'updateFirewall':
			return await firewall.executeUpdateFirewall.call(this);
		case 'getIpmi':
			return await ipmi.executeGetIpmi.call(this);
		case 'resetIpmiInterface':
			return await ipmi.executeResetIpmiInterface.call(this);
		case 'resetIpmiSessions':
			return await ipmi.executeResetIpmiSessions.call(this);
		case 'getKvm':
			return await kvm.executeGetKvm.call(this);
		case 'listVirtualMacs':
			return await virtualMac.executeListVirtualMacs.call(this);
		case 'createVirtualMac':
			return await virtualMac.executeCreateVirtualMac.call(this);
		case 'getVirtualMac':
			return await virtualMac.executeGetVirtualMac.call(this);
		case 'listVirtualNetworkInterfaces':
			return await virtualNetworkInterface.executeListVirtualNetworkInterfaces.call(this);
		case 'getVirtualNetworkInterface':
			return await virtualNetworkInterface.executeGetVirtualNetworkInterface.call(this);
		case 'listOptions':
			return await option.executeListOptions.call(this);
		case 'getOption':
			return await option.executeGetOption.call(this);
		case 'deleteOption':
			return await option.executeDeleteOption.call(this);
		case 'getOngoing':
			return await ongoing.executeGetOngoing.call(this);
		case 'listSecondaryDnsDomains':
			return await secondaryDnsDomains.executeListSecondaryDnsDomains.call(this);
		case 'createSecondaryDnsDomain':
			return await secondaryDnsDomains.executeCreateSecondaryDnsDomain.call(this);
		case 'getSecondaryDnsDomain':
			return await secondaryDnsDomains.executeGetSecondaryDnsDomain.call(this);
		case 'updateSecondaryDnsDomain':
			return await secondaryDnsDomains.executeUpdateSecondaryDnsDomain.call(this);
		case 'deleteSecondaryDnsDomain':
			return await secondaryDnsDomains.executeDeleteSecondaryDnsDomain.call(this);
		case 'listNetworkInterfaceControllers':
			return await networkInterfaceController.executeListNetworkInterfaceControllers.call(this);
		case 'getNetworkInterfaceController':
			return await networkInterfaceController.executeGetNetworkInterfaceController.call(this);
		case 'listInterventions':
			return await intervention.executeListInterventions.call(this);
		case 'getIntervention':
			return await intervention.executeGetIntervention.call(this);
		case 'getBurst':
			return await burst.executeGetBurst.call(this);
		case 'updateBurst':
			return await burst.executeUpdateBurst.call(this);
		case 'getBiosSettings':
			return await biosSettings.executeGetBiosSettings.call(this);
		case 'getSgxBiosSettings':
			return await biosSettings.executeGetSgxBiosSettings.call(this);
		case 'configureSgx':
			return await biosSettings.executeConfigureSgx.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedServer"`);
}
