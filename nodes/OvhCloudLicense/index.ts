import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// License operations
import * as list from './resources/list.operation';
import * as orderableVersionsGet from './resources/orderableVersionsGet.operation';
import * as get from './resources/get.operation';
import * as updatePut from './resources/updatePut.operation';
import * as allowedDestinationIpGet from './resources/allowedDestinationIpGet.operation';
import * as canLicenseBeMovedToGet from './resources/canLicenseBeMovedToGet.operation';
import * as changeIpPost from './resources/changeIpPost.operation';
import * as terminatePost from './resources/terminatePost.operation';
import * as confirmTerminationPost from './resources/confirmTerminationPost.operation';
import * as serviceInfosGet from './resources/serviceInfosGet.operation';
import * as serviceInfosPut from './resources/serviceInfosPut.operation';
import * as tasksGet from './resources/tasksGet.operation';
import * as tasksGetTask from './resources/tasksGetTask.operation';

// CloudLinux operations
import * as cloudLinuxListGet from './resources/cloudLinux/GET.operation';
import * as cloudLinuxOrderableVersionsGet from './resources/cloudLinux/OrderableVersionsGET.operation';
import * as cloudLinuxServiceGet from './resources/cloudLinux/serviceGet.operation';
import * as cloudLinuxServiceConfirmTerminationPost from './resources/cloudLinux/serviceConfirmTerminationPost.operation';
import * as cloudLinuxServiceInfosGet from './resources/cloudLinux/serviceInfosGet.operation';
import * as cloudLinuxServiceTasksGet from './resources/cloudLinux/serviceTasksGet.operation';
import * as cloudLinuxServiceTaskGet from './resources/cloudLinux/serviceTaskGet.operation';
import * as cloudLinuxServiceTerminatePost from './resources/cloudLinux/serviceTerminatePost.operation';

// Cpanel operations
import * as cpanelListGet from './resources/cpanel/GET.operation';
import * as cpanelOrderableVersionsGet from './resources/cpanel/OrderableVersionsGET.operation';
import * as cpanelServiceGet from './resources/cpanel/serviceGet.operation';
import * as cpanelServiceAllowedDestinationIpGet from './resources/cpanel/serviceAllowedDestinationIpGet.operation';
import * as cpanelServiceCanLicenseBeMovedToGet from './resources/cpanel/serviceCanLicenseBeMovedToGet.operation';
import * as cpanelServiceChangeIpPost from './resources/cpanel/serviceChangeIpPost.operation';
import * as cpanelServiceConfirmTerminationPost from './resources/cpanel/serviceConfirmTerminationPost.operation';
import * as cpanelServiceInfosGet from './resources/cpanel/serviceInfosGet.operation';
import * as cpanelServiceTasksGet from './resources/cpanel/serviceTasksGet.operation';
import * as cpanelServiceTaskGet from './resources/cpanel/serviceTaskGet.operation';
import * as cpanelServiceTerminatePost from './resources/cpanel/serviceTerminatePost.operation';

// Directadmin operations
import * as directadminListGet from './resources/directadmin/GET.operation';
import * as directadminOrderableVersionsGet from './resources/directadmin/OrderableVersionsGET.operation';
import * as directadminServiceGet from './resources/directadmin/serviceGet.operation';
import * as directadminServiceAllowedDestinationIpGet from './resources/directadmin/serviceAllowedDestinationIpGet.operation';
import * as directadminServiceCanLicenseBeMovedToGet from './resources/directadmin/serviceCanLicenseBeMovedToGet.operation';
import * as directadminServiceChangeIpPost from './resources/directadmin/serviceChangeIpPost.operation';
import * as directadminServiceChangeOsPost from './resources/directadmin/serviceChangeOsPost.operation';
import * as directadminServiceConfirmTerminationPost from './resources/directadmin/serviceConfirmTerminationPost.operation';
import * as directadminServiceInfosGet from './resources/directadmin/serviceInfosGet.operation';
import * as directadminServiceTasksGet from './resources/directadmin/serviceTasksGet.operation';
import * as directadminServiceTaskGet from './resources/directadmin/serviceTaskGet.operation';
import * as directadminServiceTerminatePost from './resources/directadmin/serviceTerminatePost.operation';

// Hycu operations
import * as hycuListGet from './resources/hycu/GET.operation';
import * as hycuServiceGet from './resources/hycu/serviceGet.operation';
import * as hycuServiceConfirmTerminationPost from './resources/hycu/serviceConfirmTerminationPost.operation';
import * as hycuServiceLicenseGet from './resources/hycu/serviceLicenseGet.operation';
import * as hycuServiceInfosGet from './resources/hycu/serviceInfosGet.operation';
import * as hycuServiceTerminatePost from './resources/hycu/serviceTerminatePost.operation';
import * as hycuServicePut from './resources/hycu/servicePut.operation';
import * as hycuServiceActivatePost from './resources/hycu/serviceActivatePost.operation';
import * as hycuServiceRefreshPost from './resources/hycu/serviceRefreshPost.operation';
import * as hycuServiceInfosPut from './resources/hycu/serviceInfosPut.operation';

// Office operations
import * as officeListGet from './resources/office/GET.operation';
import * as officeServiceGet from './resources/office/serviceGet.operation';
import * as officeDomainsListGet from './resources/office/domainsListGet.operation';
import * as officeDomainGet from './resources/office/domainGet.operation';
import * as officeTasksListGet from './resources/office/tasksListGet.operation';
import * as officeTaskGet from './resources/office/taskGet.operation';
import * as officeServiceInfosGet from './resources/office/serviceInfosGet.operation';
import * as officeUsageStatisticsGet from './resources/office/usageStatisticsGet.operation';
import * as officeUsersListGet from './resources/office/usersListGet.operation';
import * as officeUserGet from './resources/office/userGet.operation';
import * as officeUserDelete from './resources/office/userDelete.operation';

// OfficePrepaid operations
import * as officePrepaidListGet from './resources/officePrepaid/GET.operation';
import * as officePrepaidServiceGet from './resources/officePrepaid/serviceGet.operation';
import * as officePrepaidServiceConfirmTerminationPost from './resources/officePrepaid/serviceConfirmTerminationPost.operation';
import * as officePrepaidParentTenantGet from './resources/officePrepaid/parentTenantGet.operation';
import * as officePrepaidParentTenantAcceptAgreementPost from './resources/officePrepaid/parentTenantAcceptAgreementPost.operation';
import * as officePrepaidServiceInfosGet from './resources/officePrepaid/serviceInfosGet.operation';
import * as officePrepaidTenantTasksListGet from './resources/officePrepaid/tenantTasksListGet.operation';
import * as officePrepaidTenantTaskGet from './resources/officePrepaid/tenantTaskGet.operation';
import * as officePrepaidTenantUsageStatisticsGet from './resources/officePrepaid/tenantUsageStatisticsGet.operation';
import * as officePrepaidServiceTerminatePost from './resources/officePrepaid/serviceTerminatePost.operation';
import * as officePrepaidServiceUnconfigurePost from './resources/officePrepaid/serviceUnconfigurePost.operation';

// Plesk operations
import * as pleskListGet from './resources/plesk/GET.operation';
import * as pleskOrderableVersionsGet from './resources/plesk/OrderableVersionsGET.operation';
import * as pleskServiceGet from './resources/plesk/serviceGet.operation';
import * as pleskServiceAllowedDestinationIpGet from './resources/plesk/serviceAllowedDestinationIpGet.operation';
import * as pleskServiceCanLicenseBeMovedToGet from './resources/plesk/serviceCanLicenseBeMovedToGet.operation';
import * as pleskServiceChangeIpPost from './resources/plesk/serviceChangeIpPost.operation';
import * as pleskServiceConfirmTerminationPost from './resources/plesk/serviceConfirmTerminationPost.operation';
import * as pleskOptionsListGet from './resources/plesk/optionsListGet.operation';
import * as pleskOptionGet from './resources/plesk/optionGet.operation';
import * as pleskOptionDelete from './resources/plesk/optionDelete.operation';
import * as pleskServiceInfosGet from './resources/plesk/serviceInfosGet.operation';
import * as pleskServiceTasksGet from './resources/plesk/serviceTasksGet.operation';
import * as pleskServiceTaskGet from './resources/plesk/serviceTaskGet.operation';
import * as pleskServiceTerminatePost from './resources/plesk/serviceTerminatePost.operation';

// Redhat operations
import * as redhatListGet from './resources/redhat/GET.operation';
import * as redhatServiceGet from './resources/redhat/serviceGet.operation';
import * as redhatServiceConfirmTerminationPost from './resources/redhat/serviceConfirmTerminationPost.operation';
import * as redhatServiceInfosGet from './resources/redhat/serviceInfosGet.operation';
import * as redhatServiceTasksGet from './resources/redhat/serviceTasksGet.operation';
import * as redhatServiceTaskGet from './resources/redhat/serviceTaskGet.operation';
import * as redhatServiceTerminatePost from './resources/redhat/serviceTerminatePost.operation';

// Sqlserver operations
import * as sqlserverListGet from './resources/sqlserver/GET.operation';
import * as sqlserverOrderableVersionsGet from './resources/sqlserver/OrderableVersionsGET.operation';
import * as sqlserverServiceGet from './resources/sqlserver/serviceGet.operation';
import * as sqlserverServiceConfirmTerminationPost from './resources/sqlserver/serviceConfirmTerminationPost.operation';
import * as sqlserverServiceInfosGet from './resources/sqlserver/serviceInfosGet.operation';
import * as sqlserverServiceTasksGet from './resources/sqlserver/serviceTasksGet.operation';
import * as sqlserverServiceTaskGet from './resources/sqlserver/serviceTaskGet.operation';
import * as sqlserverServiceTerminatePost from './resources/sqlserver/serviceTerminatePost.operation';

// Virtuozzo operations
import * as virtuozzoListGet from './resources/virtuozzo/GET.operation';
import * as virtuozzoOrderableVersionsGet from './resources/virtuozzo/OrderableVersionsGET.operation';
import * as virtuozzoServiceGet from './resources/virtuozzo/serviceGet.operation';
import * as virtuozzoServiceAllowedDestinationIpGet from './resources/virtuozzo/serviceAllowedDestinationIpGet.operation';
import * as virtuozzoServiceCanLicenseBeMovedToGet from './resources/virtuozzo/serviceCanLicenseBeMovedToGet.operation';
import * as virtuozzoServiceChangeIpPost from './resources/virtuozzo/serviceChangeIpPost.operation';
import * as virtuozzoServiceConfirmTerminationPost from './resources/virtuozzo/serviceConfirmTerminationPost.operation';
import * as virtuozzoOptionsListGet from './resources/virtuozzo/optionsListGet.operation';
import * as virtuozzoOptionGet from './resources/virtuozzo/optionGet.operation';
import * as virtuozzoOptionDelete from './resources/virtuozzo/optionDelete.operation';
import * as virtuozzoServiceInfosGet from './resources/virtuozzo/serviceInfosGet.operation';
import * as virtuozzoServiceTasksGet from './resources/virtuozzo/serviceTasksGet.operation';
import * as virtuozzoServiceTaskGet from './resources/virtuozzo/serviceTaskGet.operation';
import * as virtuozzoServiceTerminatePost from './resources/virtuozzo/serviceTerminatePost.operation';

// Windows operations
import * as windowsListGet from './resources/windows/GET.operation';
import * as windowsOrderableVersionsGet from './resources/windows/OrderableVersionsGET.operation';
import * as windowsServiceGet from './resources/windows/serviceGet.operation';
import * as windowsServiceConfirmTerminationPost from './resources/windows/serviceConfirmTerminationPost.operation';
import * as windowsOptionsListGet from './resources/windows/optionsListGet.operation';
import * as windowsOptionGet from './resources/windows/optionGet.operation';
import * as windowsOptionDelete from './resources/windows/optionDelete.operation';
import * as windowsServiceInfosGet from './resources/windows/serviceInfosGet.operation';
import * as windowsSqlServerPost from './resources/windows/sqlServerPost.operation';
import * as windowsServiceTasksGet from './resources/windows/serviceTasksGet.operation';
import * as windowsServiceTaskGet from './resources/windows/serviceTaskGet.operation';
import * as windowsServiceTerminatePost from './resources/windows/serviceTerminatePost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// License type selector
	props.push({
		displayName: 'License Type',
		name: 'licenseType',
		type: 'options',
		default: 'worklight',
		options: [
			{ name: 'Cloud Linux', value: 'cloudLinux' },
			{ name: 'Cpanel', value: 'cpanel' },
			{ name: 'Directadmin', value: 'directadmin' },
			{ name: 'Hycu', value: 'hycu' },
			{ name: 'Office', value: 'office' },
			{ name: 'Office Prepaid', value: 'officePrepaid' },
			{ name: 'Plesk', value: 'plesk' },
			{ name: 'Redhat', value: 'redhat' },
			{ name: 'Sqlserver', value: 'sqlserver' },
			{ name: 'Virtuozzo', value: 'virtuozzo' },
			{ name: 'Windows', value: 'windows' },
			{ name: 'WorkLight', value: 'worklight' },
		],
	});

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'licenseOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Accept Agreement (officePrepaid)',
				value: 'officePrepaidParentTenantAcceptAgreementPost',
				action: 'Accept Agreement',
			},
			{
				name: 'Activate HYCU License',
				value: 'hycuServiceActivatePost',
				action: 'Activate the HYCU license',
			},
			{
				name: 'Alter HYCU License Properties',
				value: 'hycuServicePut',
				action: 'Alter HYCU license properties',
			},
			{
				name: 'Alter License Properties',
				value: 'updatePut',
				action: 'Alter the properties of a WorkLight license',
			},
			{
				name: 'Ask for the Termination of Your Service (cloudLinux)',
				value: 'cloudLinuxServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Cpanel)',
				value: 'cpanelServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Directadmin)',
				value: 'directadminServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Hycu)',
				value: 'hycuServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (officePrepaid)',
				value: 'officePrepaidServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Plesk)',
				value: 'pleskServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Redhat)',
				value: 'redhatServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Sqlserver)',
				value: 'sqlserverServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Virtuozzo)',
				value: 'virtuozzoServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Ask for the Termination of Your Service (Windows)',
				value: 'windowsServiceTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Change the Operating System for a License (Directadmin)',
				value: 'directadminServiceChangeOsPost',
				action: 'Change the Operating System for a license',
			},
			{
				name: 'Check If License Can Be Moved',
				value: 'canLicenseBeMovedToGet',
				action: 'Check if a WorkLight license can be moved to another IP',
			},
			{
				name: 'Confirm License Termination',
				value: 'confirmTerminationPost',
				action: 'Confirm the termination of a WorkLight license',
			},
			{
				name: 'Confirm Service Termination (cloudLinux)',
				value: 'cloudLinuxServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Cpanel)',
				value: 'cpanelServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Directadmin)',
				value: 'directadminServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Hycu)',
				value: 'hycuServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (officePrepaid)',
				value: 'officePrepaidServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Plesk)',
				value: 'pleskServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Redhat)',
				value: 'redhatServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Sqlserver)',
				value: 'sqlserverServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Virtuozzo)',
				value: 'virtuozzoServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Confirm Service Termination (Windows)',
				value: 'windowsServiceConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{
				name: 'Delete Existing Office User (Office)',
				value: 'officeUserDelete',
				action: 'Delete existing office user',
			},
			{
				name: 'Get a Task for This License (WorkLight)',
				value: 'tasksGetTask',
				action: 'Get a specific task for a WorkLight license',
			},
			{
				name: 'Get Accounts Associated to This Office Tenant (Office)',
				value: 'officeUsersListGet',
				action: 'Get accounts associated to this office tenant',
			},
			{
				name: 'Get Allowed Destination IPs',
				value: 'allowedDestinationIpGet',
				action: 'Get the IPs where a WorkLight license can be moved to',
			},
			{
				name: 'Get an Office User (Office)',
				value: 'officeUserGet',
				action: 'Get an office user',
			},
			{
				name: 'Get Day-to-Day Statistics of License Usage and Availability (Office)',
				value: 'officeUsageStatisticsGet',
				action: 'Get day-to-day statistics of license usage and availability',
			},
			{
				name: 'Get Day-to-Day Statistics of License Usage and Availability (officePrepaid)',
				value: 'officePrepaidTenantUsageStatisticsGet',
				action: 'Get day-to-day statistics of license usage and availability',
			},
			{
				name: 'Get Day-to-Day Statistics of License Usage and Availability (Plesk)',
				value: 'pleskOptionsListGet',
				action: 'Get day-to-day statistics of license usage and availability',
			},
			{
				name: 'Get Day-to-Day Statistics of License Usage and Availability (Virtuozzo)',
				value: 'virtuozzoOptionsListGet',
				action: 'Get day-to-day statistics of license usage and availability',
			},
			{
				name: 'Get Day-to-Day Statistics of License Usage and Availability (Windows)',
				value: 'windowsOptionsListGet',
				action: 'Get day-to-day statistics of license usage and availability',
			},
			{
				name: 'Get H Y C U License File (Hycu)',
				value: 'hycuServiceLicenseGet',
				action: 'Get the HYCU license file',
			},
			{
				name: 'Get License Properties',
				value: 'get',
				action: 'Get the properties of a WorkLight license',
			},
			{
				name: 'Get List of Available Domains (Office)',
				value: 'officeDomainsListGet',
				action: 'Get list of available domains',
			},
			{
				name: 'Get List of Available Services (cloudLinux)',
				value: 'cloudLinuxListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Cpanel)',
				value: 'cpanelListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Directadmin)',
				value: 'directadminListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Hycu)',
				value: 'hycuListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Office)',
				value: 'officeListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (officePrepaid)',
				value: 'officePrepaidListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Plesk)',
				value: 'pleskListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Redhat)',
				value: 'redhatListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Sqlserver)',
				value: 'sqlserverListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Virtuozzo)',
				value: 'virtuozzoListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Available Services (Windows)',
				value: 'windowsListGet',
				action: 'List available services',
			},
			{
				name: 'Get List of Pending Tasks (Office)',
				value: 'officeTasksListGet',
				action: 'Get list of pending tasks',
			},
			{
				name: 'Get List of Pending Tasks (officePrepaid)',
				value: 'officePrepaidTenantTasksListGet',
				action: 'Get list of pending tasks',
			},
			{
				name: 'Get List of Tasks (Plesk)',
				value: 'pleskServiceTasksGet',
				action: 'Get list of tasks',
			},
			{
				name: 'Get List of Tasks (Virtuozzo)',
				value: 'virtuozzoServiceTasksGet',
				action: 'Get list of tasks',
			},
			{
				name: 'Get List of Tasks (Windows)',
				value: 'windowsServiceTasksGet',
				action: 'Get list of tasks',
			},
			{
				name: 'Get Orderable Versions',
				value: 'orderableVersionsGet',
				action: 'Get the orderable WorkLight license versions',
			},
			{
				name: 'Get Orderable Versions (cloudLinux)',
				value: 'cloudLinuxOrderableVersionsGet',
				action: 'Get the orderable CloudLinux license versions',
			},
			{
				name: 'Get Orderable Versions (Cpanel)',
				value: 'cpanelOrderableVersionsGet',
				action: 'Get the orderable CPanel license versions',
			},
			{
				name: 'Get Orderable Versions (Directadmin)',
				value: 'directadminOrderableVersionsGet',
				action: 'Get the orderable DirectAdmin license versions',
			},
			{
				name: 'Get Orderable Versions (Plesk)',
				value: 'pleskOrderableVersionsGet',
				action: 'Get the orderable Plesk license versions',
			},
			{
				name: 'Get Orderable Versions (Sqlserver)',
				value: 'sqlserverOrderableVersionsGet',
				action: 'Get the orderable SqlServer license versions',
			},
			{
				name: 'Get Orderable Versions (Virtuozzo)',
				value: 'virtuozzoOrderableVersionsGet',
				action: 'Get the orderable Virtuozzo license versions',
			},
			{
				name: 'Get Orderable Versions (Windows)',
				value: 'windowsOrderableVersionsGet',
				action: 'Get the orderable Windows license versions',
			},
			{
				name: 'Get Service Information (WorkLight)',
				value: 'serviceInfosGet',
				action: 'Get service information for a WorkLight license',
			},
			{
				name: 'Get Tasks for This License (WorkLight)',
				value: 'tasksGet',
				action: 'Get the list of tasks for a WorkLight license',
			},
			{
				name: 'Get This Object Properties (cloudLinux)',
				value: 'cloudLinuxServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Cpanel)',
				value: 'cpanelServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Directadmin)',
				value: 'directadminServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Hycu)',
				value: 'hycuServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Office)',
				value: 'officeServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (officePrepaid)',
				value: 'officePrepaidServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Plesk)',
				value: 'pleskServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Redhat)',
				value: 'redhatServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Sqlserver)',
				value: 'sqlserverServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Virtuozzo)',
				value: 'virtuozzoServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get This Object Properties (Windows)',
				value: 'windowsServiceGet',
				action: 'Get this object properties',
			},
			{
				name: 'Link Your Own Sql Server License to This Windows License (Windows)',
				value: 'windowsSqlServerPost',
				action: 'Link your own sql server license to this Windows license',
			},
			{
				name: 'List WorkLight Licenses',
				value: 'list',
				action: 'List all available WorkLight licenses',
			},
			{
				name: 'Manually Refresh HYCU License',
				value: 'hycuServiceRefreshPost',
				action: 'Manually refresh the HYCU license',
			},
			{
				name: 'Move License to Another IP',
				value: 'changeIpPost',
				action: 'Move a WorkLight license to another IP',
			},
			{
				name: 'Move This License to Another Ip (Cpanel)',
				value: 'cpanelServiceChangeIpPost',
				action: 'Move this license to another Ip',
			},
			{
				name: 'Move This License to Another Ip (Directadmin)',
				value: 'directadminServiceChangeIpPost',
				action: 'Move this license to another Ip',
			},
			{
				name: 'Move This License to Another Ip (Plesk)',
				value: 'pleskServiceChangeIpPost',
				action: 'Move this license to another Ip',
			},
			{
				name: 'Move This License to Another Ip (Virtuozzo)',
				value: 'virtuozzoServiceChangeIpPost',
				action: 'Move this license to another Ip',
			},
			{
				name: 'Release This Option (Plesk)',
				value: 'pleskOptionDelete',
				action: 'release this Option',
			},
			{
				name: 'Release This Option (Virtuozzo)',
				value: 'virtuozzoOptionDelete',
				action: 'release this Option',
			},
			{
				name: 'Release This Option (Windows)',
				value: 'windowsOptionDelete',
				action: 'release this Option',
			},
			{
				name: 'Returns an Array of Ips Where the License Can Be Moved to (Cpanel)',
				value: 'cpanelServiceAllowedDestinationIpGet',
				action: 'Returns an array of ips where the license can be moved to',
			},
			{
				name: 'Returns an Array of Ips Where the License Can Be Moved to (Directadmin)',
				value: 'directadminServiceAllowedDestinationIpGet',
				action: 'Returns an array of ips where the license can be moved to',
			},
			{
				name: 'Returns an Array of Ips Where the License Can Be Moved to (Plesk)',
				value: 'pleskServiceAllowedDestinationIpGet',
				action: 'Returns an array of ips where the license can be moved to',
			},
			{
				name: 'Returns an Array of Ips Where the License Can Be Moved to (Virtuozzo)',
				value: 'virtuozzoServiceAllowedDestinationIpGet',
				action: 'Returns an array of ips where the license can be moved to',
			},
			{
				name: 'Tasks Linked to This License (cloudLinux)',
				value: 'cloudLinuxServiceTasksGet',
				action: 'Tasks linked to this license',
			},
			{
				name: 'Tasks Linked to This License (Cpanel)',
				value: 'cpanelServiceTasksGet',
				action: 'tasks linked to this license',
			},
			{
				name: 'Tasks Linked to This License (Directadmin)',
				value: 'directadminServiceTasksGet',
				action: 'tasks linked to this license',
			},
			{
				name: 'Tasks Linked to This License (Redhat)',
				value: 'redhatServiceTasksGet',
				action: 'tasks linked to this license',
			},
			{
				name: 'Tasks Linked to This License (Sqlserver)',
				value: 'sqlserverServiceTasksGet',
				action: 'Tasks linked to this license',
			},
			{
				name: 'Terminate License',
				value: 'terminatePost',
				action: 'Ask for the termination of a WorkLight license',
			},
			{
				name: 'Unconfigure the Office User (officePrepaid)',
				value: 'officePrepaidServiceUnconfigurePost',
				action: 'Unconfigure the office user',
			},
			{
				name: 'Update Service Information (HYCU)',
				value: 'hycuServiceInfosPut',
				action: 'Update service information for a HYCU license',
			},
			{
				name: 'Update Service Information (WorkLight)',
				value: 'serviceInfosPut',
				action: 'Update service information for a WorkLight license',
			},
			{
				name: 'Will Tell if the Ip Can Accept the License (Cpanel)',
				value: 'cpanelServiceCanLicenseBeMovedToGet',
				action: 'Will tell if the ip can accept the license',
			},
			{
				name: 'Will Tell if the Ip Can Accept the License (Directadmin)',
				value: 'directadminServiceCanLicenseBeMovedToGet',
				action: 'Will tell if the ip can accept the license',
			},
			{
				name: 'Will Tell if the Ip Can Accept the License (Plesk)',
				value: 'pleskServiceCanLicenseBeMovedToGet',
				action: 'Will tell if the ip can accept the license',
			},
			{
				name: 'Will Tell if the Ip Can Accept the License (Virtuozzo)',
				value: 'virtuozzoServiceCanLicenseBeMovedToGet',
				action: 'Will tell if the ip can accept the license',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('licenseOperation', 0) as string;
	const licenseType = this.getNodeParameter('licenseType', 0, 'worklight') as string;

	if (licenseType === 'worklight') {
		switch (operation) {
			case 'list':
				return list.execute.call(this);
			case 'orderableVersionsGet':
				return orderableVersionsGet.execute.call(this);
			case 'get':
				return get.execute.call(this);
			case 'updatePut':
				return updatePut.execute.call(this);
			case 'allowedDestinationIpGet':
				return allowedDestinationIpGet.execute.call(this);
			case 'canLicenseBeMovedToGet':
				return canLicenseBeMovedToGet.execute.call(this);
			case 'changeIpPost':
				return changeIpPost.execute.call(this);
			case 'terminatePost':
				return terminatePost.execute.call(this);
			case 'confirmTerminationPost':
				return confirmTerminationPost.execute.call(this);
			case 'serviceInfosGet':
				return serviceInfosGet.execute.call(this);
			case 'serviceInfosPut':
				return serviceInfosPut.execute.call(this);
			case 'tasksGet':
				return tasksGet.execute.call(this);
			case 'tasksGetTask':
				return tasksGetTask.execute.call(this);
		}
	}

	if (licenseType === 'cloudLinux') {
		switch (operation) {
			case 'cloudLinuxListGet':
				return cloudLinuxListGet.execute.call(this, 0);
			case 'cloudLinuxOrderableVersionsGet':
				return cloudLinuxOrderableVersionsGet.execute.call(this, 0);
			case 'cloudLinuxServiceGet':
				return cloudLinuxServiceGet.execute.call(this, 0);
			case 'cloudLinuxServiceConfirmTerminationPost':
				return cloudLinuxServiceConfirmTerminationPost.execute.call(this, 0);
			case 'cloudLinuxServiceInfosGet':
				return cloudLinuxServiceInfosGet.execute.call(this, 0);
			case 'cloudLinuxServiceTasksGet':
				return cloudLinuxServiceTasksGet.execute.call(this, 0);
			case 'cloudLinuxServiceTaskGet':
				return cloudLinuxServiceTaskGet.execute.call(this, 0);
			case 'cloudLinuxServiceTerminatePost':
				return cloudLinuxServiceTerminatePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'cpanel') {
		switch (operation) {
			case 'cpanelListGet':
				return cpanelListGet.execute.call(this, 0);
			case 'cpanelOrderableVersionsGet':
				return cpanelOrderableVersionsGet.execute.call(this, 0);
			case 'cpanelServiceGet':
				return cpanelServiceGet.execute.call(this, 0);
			case 'cpanelServiceAllowedDestinationIpGet':
				return cpanelServiceAllowedDestinationIpGet.execute.call(this, 0);
			case 'cpanelServiceCanLicenseBeMovedToGet':
				return cpanelServiceCanLicenseBeMovedToGet.execute.call(this, 0);
			case 'cpanelServiceChangeIpPost':
				return cpanelServiceChangeIpPost.execute.call(this, 0);
			case 'cpanelServiceConfirmTerminationPost':
				return cpanelServiceConfirmTerminationPost.execute.call(this, 0);
			case 'cpanelServiceInfosGet':
				return cpanelServiceInfosGet.execute.call(this, 0);
			case 'cpanelServiceTasksGet':
				return cpanelServiceTasksGet.execute.call(this, 0);
			case 'cpanelServiceTaskGet':
				return cpanelServiceTaskGet.execute.call(this, 0);
			case 'cpanelServiceTerminatePost':
				return cpanelServiceTerminatePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'directadmin') {
		switch (operation) {
			case 'directadminListGet':
				return directadminListGet.execute.call(this, 0);
			case 'directadminOrderableVersionsGet':
				return directadminOrderableVersionsGet.execute.call(this, 0);
			case 'directadminServiceGet':
				return directadminServiceGet.execute.call(this, 0);
			case 'directadminServiceAllowedDestinationIpGet':
				return directadminServiceAllowedDestinationIpGet.execute.call(this, 0);
			case 'directadminServiceCanLicenseBeMovedToGet':
				return directadminServiceCanLicenseBeMovedToGet.execute.call(this, 0);
			case 'directadminServiceChangeIpPost':
				return directadminServiceChangeIpPost.execute.call(this, 0);
			case 'directadminServiceChangeOsPost':
				return directadminServiceChangeOsPost.execute.call(this, 0);
			case 'directadminServiceConfirmTerminationPost':
				return directadminServiceConfirmTerminationPost.execute.call(this, 0);
			case 'directadminServiceInfosGet':
				return directadminServiceInfosGet.execute.call(this, 0);
			case 'directadminServiceTasksGet':
				return directadminServiceTasksGet.execute.call(this, 0);
			case 'directadminServiceTaskGet':
				return directadminServiceTaskGet.execute.call(this, 0);
			case 'directadminServiceTerminatePost':
				return directadminServiceTerminatePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'hycu') {
		switch (operation) {
			case 'hycuListGet':
				return hycuListGet.execute.call(this, 0);
			case 'hycuServiceGet':
				return hycuServiceGet.execute.call(this, 0);
			case 'hycuServiceConfirmTerminationPost':
				return hycuServiceConfirmTerminationPost.execute.call(this, 0);
			case 'hycuServiceLicenseGet':
				return hycuServiceLicenseGet.execute.call(this, 0);
			case 'hycuServiceInfosGet':
				return hycuServiceInfosGet.execute.call(this, 0);
			case 'hycuServiceTerminatePost':
				return hycuServiceTerminatePost.execute.call(this, 0);
			case 'hycuServicePut':
				return hycuServicePut.execute.call(this, 0);
			case 'hycuServiceActivatePost':
				return hycuServiceActivatePost.execute.call(this, 0);
			case 'hycuServiceRefreshPost':
				return hycuServiceRefreshPost.execute.call(this, 0);
			case 'hycuServiceInfosPut':
				return hycuServiceInfosPut.execute.call(this, 0);
		}
	}

	if (licenseType === 'office') {
		switch (operation) {
			case 'officeListGet':
				return officeListGet.execute.call(this, 0);
			case 'officeServiceGet':
				return officeServiceGet.execute.call(this, 0);
			case 'officeDomainsListGet':
				return officeDomainsListGet.execute.call(this, 0);
			case 'officeDomainGet':
				return officeDomainGet.execute.call(this, 0);
			case 'officeTasksListGet':
				return officeTasksListGet.execute.call(this, 0);
			case 'officeTaskGet':
				return officeTaskGet.execute.call(this, 0);
			case 'officeServiceInfosGet':
				return officeServiceInfosGet.execute.call(this, 0);
			case 'officeUsageStatisticsGet':
				return officeUsageStatisticsGet.execute.call(this, 0);
			case 'officeUsersListGet':
				return officeUsersListGet.execute.call(this, 0);
			case 'officeUserGet':
				return officeUserGet.execute.call(this, 0);
			case 'officeUserDelete':
				return officeUserDelete.execute.call(this, 0);
		}
	}

	if (licenseType === 'officePrepaid') {
		switch (operation) {
			case 'officePrepaidListGet':
				return officePrepaidListGet.execute.call(this, 0);
			case 'officePrepaidServiceGet':
				return officePrepaidServiceGet.execute.call(this, 0);
			case 'officePrepaidServiceConfirmTerminationPost':
				return officePrepaidServiceConfirmTerminationPost.execute.call(this, 0);
			case 'officePrepaidParentTenantGet':
				return officePrepaidParentTenantGet.execute.call(this, 0);
			case 'officePrepaidParentTenantAcceptAgreementPost':
				return officePrepaidParentTenantAcceptAgreementPost.execute.call(this, 0);
			case 'officePrepaidServiceInfosGet':
				return officePrepaidServiceInfosGet.execute.call(this, 0);
			case 'officePrepaidTenantTasksListGet':
				return officePrepaidTenantTasksListGet.execute.call(this, 0);
			case 'officePrepaidTenantTaskGet':
				return officePrepaidTenantTaskGet.execute.call(this, 0);
			case 'officePrepaidTenantUsageStatisticsGet':
				return officePrepaidTenantUsageStatisticsGet.execute.call(this, 0);
			case 'officePrepaidServiceTerminatePost':
				return officePrepaidServiceTerminatePost.execute.call(this, 0);
			case 'officePrepaidServiceUnconfigurePost':
				return officePrepaidServiceUnconfigurePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'plesk') {
		switch (operation) {
			case 'pleskListGet':
				return pleskListGet.execute.call(this, 0);
			case 'pleskOrderableVersionsGet':
				return pleskOrderableVersionsGet.execute.call(this, 0);
			case 'pleskServiceGet':
				return pleskServiceGet.execute.call(this, 0);
			case 'pleskServiceAllowedDestinationIpGet':
				return pleskServiceAllowedDestinationIpGet.execute.call(this, 0);
			case 'pleskServiceCanLicenseBeMovedToGet':
				return pleskServiceCanLicenseBeMovedToGet.execute.call(this, 0);
			case 'pleskServiceChangeIpPost':
				return pleskServiceChangeIpPost.execute.call(this, 0);
			case 'pleskServiceConfirmTerminationPost':
				return pleskServiceConfirmTerminationPost.execute.call(this, 0);
			case 'pleskOptionsListGet':
				return pleskOptionsListGet.execute.call(this, 0);
			case 'pleskOptionGet':
				return pleskOptionGet.execute.call(this, 0);
			case 'pleskOptionDelete':
				return pleskOptionDelete.execute.call(this, 0);
			case 'pleskServiceInfosGet':
				return pleskServiceInfosGet.execute.call(this, 0);
			case 'pleskServiceTasksGet':
				return pleskServiceTasksGet.execute.call(this, 0);
			case 'pleskServiceTaskGet':
				return pleskServiceTaskGet.execute.call(this, 0);
			case 'pleskServiceTerminatePost':
				return pleskServiceTerminatePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'redhat') {
		switch (operation) {
			case 'redhatListGet':
				return redhatListGet.execute.call(this, 0);
			case 'redhatServiceGet':
				return redhatServiceGet.execute.call(this, 0);
			case 'redhatServiceConfirmTerminationPost':
				return redhatServiceConfirmTerminationPost.execute.call(this, 0);
			case 'redhatServiceInfosGet':
				return redhatServiceInfosGet.execute.call(this, 0);
			case 'redhatServiceTasksGet':
				return redhatServiceTasksGet.execute.call(this, 0);
			case 'redhatServiceTaskGet':
				return redhatServiceTaskGet.execute.call(this, 0);
			case 'redhatServiceTerminatePost':
				return redhatServiceTerminatePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'sqlserver') {
		switch (operation) {
			case 'sqlserverListGet':
				return sqlserverListGet.execute.call(this, 0);
			case 'sqlserverOrderableVersionsGet':
				return sqlserverOrderableVersionsGet.execute.call(this, 0);
			case 'sqlserverServiceGet':
				return sqlserverServiceGet.execute.call(this, 0);
			case 'sqlserverServiceConfirmTerminationPost':
				return sqlserverServiceConfirmTerminationPost.execute.call(this, 0);
			case 'sqlserverServiceInfosGet':
				return sqlserverServiceInfosGet.execute.call(this, 0);
			case 'sqlserverServiceTasksGet':
				return sqlserverServiceTasksGet.execute.call(this, 0);
			case 'sqlserverServiceTaskGet':
				return sqlserverServiceTaskGet.execute.call(this, 0);
			case 'sqlserverServiceTerminatePost':
				return sqlserverServiceTerminatePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'virtuozzo') {
		switch (operation) {
			case 'virtuozzoListGet':
				return virtuozzoListGet.execute.call(this, 0);
			case 'virtuozzoOrderableVersionsGet':
				return virtuozzoOrderableVersionsGet.execute.call(this, 0);
			case 'virtuozzoServiceGet':
				return virtuozzoServiceGet.execute.call(this, 0);
			case 'virtuozzoServiceAllowedDestinationIpGet':
				return virtuozzoServiceAllowedDestinationIpGet.execute.call(this, 0);
			case 'virtuozzoServiceCanLicenseBeMovedToGet':
				return virtuozzoServiceCanLicenseBeMovedToGet.execute.call(this, 0);
			case 'virtuozzoServiceChangeIpPost':
				return virtuozzoServiceChangeIpPost.execute.call(this, 0);
			case 'virtuozzoServiceConfirmTerminationPost':
				return virtuozzoServiceConfirmTerminationPost.execute.call(this, 0);
			case 'virtuozzoOptionsListGet':
				return virtuozzoOptionsListGet.execute.call(this, 0);
			case 'virtuozzoOptionGet':
				return virtuozzoOptionGet.execute.call(this, 0);
			case 'virtuozzoOptionDelete':
				return virtuozzoOptionDelete.execute.call(this, 0);
			case 'virtuozzoServiceInfosGet':
				return virtuozzoServiceInfosGet.execute.call(this, 0);
			case 'virtuozzoServiceTasksGet':
				return virtuozzoServiceTasksGet.execute.call(this, 0);
			case 'virtuozzoServiceTaskGet':
				return virtuozzoServiceTaskGet.execute.call(this, 0);
			case 'virtuozzoServiceTerminatePost':
				return virtuozzoServiceTerminatePost.execute.call(this, 0);
		}
	}

	if (licenseType === 'windows') {
		switch (operation) {
			case 'windowsListGet':
				return windowsListGet.execute.call(this, 0);
			case 'windowsOrderableVersionsGet':
				return windowsOrderableVersionsGet.execute.call(this, 0);
			case 'windowsServiceGet':
				return windowsServiceGet.execute.call(this, 0);
			case 'windowsServiceConfirmTerminationPost':
				return windowsServiceConfirmTerminationPost.execute.call(this, 0);
			case 'windowsOptionsListGet':
				return windowsOptionsListGet.execute.call(this, 0);
			case 'windowsOptionGet':
				return windowsOptionGet.execute.call(this, 0);
			case 'windowsOptionDelete':
				return windowsOptionDelete.execute.call(this, 0);
			case 'windowsServiceInfosGet':
				return windowsServiceInfosGet.execute.call(this, 0);
			case 'windowsSqlServerPost':
				return windowsSqlServerPost.execute.call(this, 0);
			case 'windowsServiceTasksGet':
				return windowsServiceTasksGet.execute.call(this, 0);
			case 'windowsServiceTaskGet':
				return windowsServiceTaskGet.execute.call(this, 0);
			case 'windowsServiceTerminatePost':
				return windowsServiceTerminatePost.execute.call(this, 0);
		}
	}

	throw new Error(`Unsupported operation "${operation}" for license type "${licenseType}"`);
}
