import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as officePrepaidParentTenantAcceptAgreementPostExecute } from './resources/officePrepaid/parentTenantAcceptAgreementPost.operation';
import { execute as hycuServiceActivatePostExecute } from './resources/hycu/serviceActivatePost.operation';
import { execute as hycuServicePutExecute } from './resources/hycu/servicePut.operation';
import { execute as updatePutExecute } from './resources/updatePut.operation';
import { execute as cloudLinuxServiceTerminatePostExecute } from './resources/cloudLinux/serviceTerminatePost.operation';
import { execute as cpanelServiceTerminatePostExecute } from './resources/cpanel/serviceTerminatePost.operation';
import { execute as directadminServiceTerminatePostExecute } from './resources/directadmin/serviceTerminatePost.operation';
import { execute as hycuServiceTerminatePostExecute } from './resources/hycu/serviceTerminatePost.operation';
import { execute as officePrepaidServiceTerminatePostExecute } from './resources/officePrepaid/serviceTerminatePost.operation';
import { execute as pleskServiceTerminatePostExecute } from './resources/plesk/serviceTerminatePost.operation';
import { execute as redhatServiceTerminatePostExecute } from './resources/redhat/serviceTerminatePost.operation';
import { execute as sqlserverServiceTerminatePostExecute } from './resources/sqlserver/serviceTerminatePost.operation';
import { execute as virtuozzoServiceTerminatePostExecute } from './resources/virtuozzo/serviceTerminatePost.operation';
import { execute as windowsServiceTerminatePostExecute } from './resources/windows/serviceTerminatePost.operation';
import { execute as directadminServiceChangeOsPostExecute } from './resources/directadmin/serviceChangeOsPost.operation';
import { execute as canLicenseBeMovedToGetExecute } from './resources/canLicenseBeMovedToGet.operation';
import { execute as confirmTerminationPostExecute } from './resources/confirmTerminationPost.operation';
import { execute as cloudLinuxServiceConfirmTerminationPostExecute } from './resources/cloudLinux/serviceConfirmTerminationPost.operation';
import { execute as cpanelServiceConfirmTerminationPostExecute } from './resources/cpanel/serviceConfirmTerminationPost.operation';
import { execute as directadminServiceConfirmTerminationPostExecute } from './resources/directadmin/serviceConfirmTerminationPost.operation';
import { execute as hycuServiceConfirmTerminationPostExecute } from './resources/hycu/serviceConfirmTerminationPost.operation';
import { execute as officePrepaidServiceConfirmTerminationPostExecute } from './resources/officePrepaid/serviceConfirmTerminationPost.operation';
import { execute as pleskServiceConfirmTerminationPostExecute } from './resources/plesk/serviceConfirmTerminationPost.operation';
import { execute as redhatServiceConfirmTerminationPostExecute } from './resources/redhat/serviceConfirmTerminationPost.operation';
import { execute as sqlserverServiceConfirmTerminationPostExecute } from './resources/sqlserver/serviceConfirmTerminationPost.operation';
import { execute as virtuozzoServiceConfirmTerminationPostExecute } from './resources/virtuozzo/serviceConfirmTerminationPost.operation';
import { execute as windowsServiceConfirmTerminationPostExecute } from './resources/windows/serviceConfirmTerminationPost.operation';
import { execute as officeUserDeleteExecute } from './resources/office/userDelete.operation';
import { execute as tasksGetTaskExecute } from './resources/tasksGetTask.operation';
import { execute as officeUsersListGetExecute } from './resources/office/usersListGet.operation';
import { execute as allowedDestinationIpGetExecute } from './resources/allowedDestinationIpGet.operation';
import { execute as officeUserGetExecute } from './resources/office/userGet.operation';
import { execute as officeUsageStatisticsGetExecute } from './resources/office/usageStatisticsGet.operation';
import { execute as officePrepaidTenantUsageStatisticsGetExecute } from './resources/officePrepaid/tenantUsageStatisticsGet.operation';
import { execute as pleskOptionsListGetExecute } from './resources/plesk/optionsListGet.operation';
import { execute as virtuozzoOptionsListGetExecute } from './resources/virtuozzo/optionsListGet.operation';
import { execute as windowsOptionsListGetExecute } from './resources/windows/optionsListGet.operation';
import { execute as hycuServiceLicenseGetExecute } from './resources/hycu/serviceLicenseGet.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as officeDomainsListGetExecute } from './resources/office/domainsListGet.operation';
import { execute as cloudLinuxListGetExecute } from './resources/cloudLinux/GET.operation';
import { execute as cpanelListGetExecute } from './resources/cpanel/GET.operation';
import { execute as directadminListGetExecute } from './resources/directadmin/GET.operation';
import { execute as hycuListGetExecute } from './resources/hycu/GET.operation';
import { execute as officeListGetExecute } from './resources/office/GET.operation';
import { execute as officePrepaidListGetExecute } from './resources/officePrepaid/GET.operation';
import { execute as pleskListGetExecute } from './resources/plesk/GET.operation';
import { execute as redhatListGetExecute } from './resources/redhat/GET.operation';
import { execute as sqlserverListGetExecute } from './resources/sqlserver/GET.operation';
import { execute as virtuozzoListGetExecute } from './resources/virtuozzo/GET.operation';
import { execute as windowsListGetExecute } from './resources/windows/GET.operation';
import { execute as officeTasksListGetExecute } from './resources/office/tasksListGet.operation';
import { execute as officePrepaidTenantTasksListGetExecute } from './resources/officePrepaid/tenantTasksListGet.operation';
import { execute as pleskServiceTasksGetExecute } from './resources/plesk/serviceTasksGet.operation';
import { execute as virtuozzoServiceTasksGetExecute } from './resources/virtuozzo/serviceTasksGet.operation';
import { execute as windowsServiceTasksGetExecute } from './resources/windows/serviceTasksGet.operation';
import { execute as orderableVersionsGetExecute } from './resources/orderableVersionsGet.operation';
import { execute as cloudLinuxOrderableVersionsGetExecute } from './resources/cloudLinux/OrderableVersionsGET.operation';
import { execute as cpanelOrderableVersionsGetExecute } from './resources/cpanel/OrderableVersionsGET.operation';
import { execute as directadminOrderableVersionsGetExecute } from './resources/directadmin/OrderableVersionsGET.operation';
import { execute as pleskOrderableVersionsGetExecute } from './resources/plesk/OrderableVersionsGET.operation';
import { execute as sqlserverOrderableVersionsGetExecute } from './resources/sqlserver/OrderableVersionsGET.operation';
import { execute as virtuozzoOrderableVersionsGetExecute } from './resources/virtuozzo/OrderableVersionsGET.operation';
import { execute as windowsOrderableVersionsGetExecute } from './resources/windows/OrderableVersionsGET.operation';
import { execute as serviceInfosGetExecute } from './resources/serviceInfosGet.operation';
import { execute as tasksGetExecute } from './resources/tasksGet.operation';
import { execute as cloudLinuxServiceGetExecute } from './resources/cloudLinux/serviceGet.operation';
import { execute as cpanelServiceGetExecute } from './resources/cpanel/serviceGet.operation';
import { execute as directadminServiceGetExecute } from './resources/directadmin/serviceGet.operation';
import { execute as hycuServiceGetExecute } from './resources/hycu/serviceGet.operation';
import { execute as officeServiceGetExecute } from './resources/office/serviceGet.operation';
import { execute as officePrepaidServiceGetExecute } from './resources/officePrepaid/serviceGet.operation';
import { execute as pleskServiceGetExecute } from './resources/plesk/serviceGet.operation';
import { execute as redhatServiceGetExecute } from './resources/redhat/serviceGet.operation';
import { execute as sqlserverServiceGetExecute } from './resources/sqlserver/serviceGet.operation';
import { execute as virtuozzoServiceGetExecute } from './resources/virtuozzo/serviceGet.operation';
import { execute as windowsServiceGetExecute } from './resources/windows/serviceGet.operation';
import { execute as windowsSqlServerPostExecute } from './resources/windows/sqlServerPost.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as hycuServiceRefreshPostExecute } from './resources/hycu/serviceRefreshPost.operation';
import { execute as changeIpPostExecute } from './resources/changeIpPost.operation';
import { execute as cpanelServiceChangeIpPostExecute } from './resources/cpanel/serviceChangeIpPost.operation';
import { execute as directadminServiceChangeIpPostExecute } from './resources/directadmin/serviceChangeIpPost.operation';
import { execute as pleskServiceChangeIpPostExecute } from './resources/plesk/serviceChangeIpPost.operation';
import { execute as virtuozzoServiceChangeIpPostExecute } from './resources/virtuozzo/serviceChangeIpPost.operation';
import { execute as pleskOptionDeleteExecute } from './resources/plesk/optionDelete.operation';
import { execute as virtuozzoOptionDeleteExecute } from './resources/virtuozzo/optionDelete.operation';
import { execute as windowsOptionDeleteExecute } from './resources/windows/optionDelete.operation';
import { execute as cpanelServiceAllowedDestinationIpGetExecute } from './resources/cpanel/serviceAllowedDestinationIpGet.operation';
import { execute as directadminServiceAllowedDestinationIpGetExecute } from './resources/directadmin/serviceAllowedDestinationIpGet.operation';
import { execute as pleskServiceAllowedDestinationIpGetExecute } from './resources/plesk/serviceAllowedDestinationIpGet.operation';
import { execute as virtuozzoServiceAllowedDestinationIpGetExecute } from './resources/virtuozzo/serviceAllowedDestinationIpGet.operation';
import { execute as cloudLinuxServiceTasksGetExecute } from './resources/cloudLinux/serviceTasksGet.operation';
import { execute as cpanelServiceTasksGetExecute } from './resources/cpanel/serviceTasksGet.operation';
import { execute as directadminServiceTasksGetExecute } from './resources/directadmin/serviceTasksGet.operation';
import { execute as redhatServiceTasksGetExecute } from './resources/redhat/serviceTasksGet.operation';
import { execute as sqlserverServiceTasksGetExecute } from './resources/sqlserver/serviceTasksGet.operation';
import { execute as terminatePostExecute } from './resources/terminatePost.operation';
import { execute as officePrepaidServiceUnconfigurePostExecute } from './resources/officePrepaid/serviceUnconfigurePost.operation';
import { execute as hycuServiceInfosPutExecute } from './resources/hycu/serviceInfosPut.operation';
import { execute as serviceInfosPutExecute } from './resources/serviceInfosPut.operation';
import { execute as cpanelServiceCanLicenseBeMovedToGetExecute } from './resources/cpanel/serviceCanLicenseBeMovedToGet.operation';
import { execute as directadminServiceCanLicenseBeMovedToGetExecute } from './resources/directadmin/serviceCanLicenseBeMovedToGet.operation';
import { execute as pleskServiceCanLicenseBeMovedToGetExecute } from './resources/plesk/serviceCanLicenseBeMovedToGet.operation';
import { execute as virtuozzoServiceCanLicenseBeMovedToGetExecute } from './resources/virtuozzo/serviceCanLicenseBeMovedToGet.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'licenseOperation',
	'license',
	[
	{
		name: 'Accept Agreement (officePrepaid)',
		value: 'officePrepaidParentTenantAcceptAgreementPost',
		action: 'Accept Agreement',
		execute: officePrepaidParentTenantAcceptAgreementPostExecute,
		description: noProps,
	},
	{
		name: 'Activate HYCU License',
		value: 'hycuServiceActivatePost',
		action: 'Activate the HYCU license',
		execute: hycuServiceActivatePostExecute,
		description: noProps,
	},
	{
		name: 'Alter HYCU License Properties',
		value: 'hycuServicePut',
		action: 'Alter HYCU license properties',
		execute: hycuServicePutExecute,
		description: noProps,
	},
	{
		name: 'Alter License Properties',
		value: 'updatePut',
		action: 'Alter the properties of a WorkLight license',
		execute: updatePutExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (cloudLinux)',
		value: 'cloudLinuxServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: cloudLinuxServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Cpanel)',
		value: 'cpanelServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: cpanelServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Directadmin)',
		value: 'directadminServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: directadminServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Hycu)',
		value: 'hycuServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: hycuServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (officePrepaid)',
		value: 'officePrepaidServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: officePrepaidServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Plesk)',
		value: 'pleskServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: pleskServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Redhat)',
		value: 'redhatServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: redhatServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Sqlserver)',
		value: 'sqlserverServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: sqlserverServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Virtuozzo)',
		value: 'virtuozzoServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: virtuozzoServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Ask for the Termination of Your Service (Windows)',
		value: 'windowsServiceTerminatePost',
		action: 'Ask for the termination of your service',
		execute: windowsServiceTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Change the Operating System for a License (Directadmin)',
		value: 'directadminServiceChangeOsPost',
		action: 'Change the Operating System for a license',
		execute: directadminServiceChangeOsPostExecute,
		description: noProps,
	},
	{
		name: 'Check If License Can Be Moved',
		value: 'canLicenseBeMovedToGet',
		action: 'Check if a WorkLight license can be moved to another IP',
		execute: canLicenseBeMovedToGetExecute,
		description: noProps,
	},
	{
		name: 'Confirm License Termination',
		value: 'confirmTerminationPost',
		action: 'Confirm the termination of a WorkLight license',
		execute: confirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (cloudLinux)',
		value: 'cloudLinuxServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: cloudLinuxServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Cpanel)',
		value: 'cpanelServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: cpanelServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Directadmin)',
		value: 'directadminServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: directadminServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Hycu)',
		value: 'hycuServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: hycuServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (officePrepaid)',
		value: 'officePrepaidServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: officePrepaidServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Plesk)',
		value: 'pleskServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: pleskServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Redhat)',
		value: 'redhatServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: redhatServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Sqlserver)',
		value: 'sqlserverServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: sqlserverServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Virtuozzo)',
		value: 'virtuozzoServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: virtuozzoServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Service Termination (Windows)',
		value: 'windowsServiceConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: windowsServiceConfirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Office User (Office)',
		value: 'officeUserDelete',
		action: 'Delete existing office user',
		execute: officeUserDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get a Task for This License (WorkLight)',
		value: 'tasksGetTask',
		action: 'Get a specific task for a WorkLight license',
		execute: tasksGetTaskExecute,
		description: noProps,
	},
	{
		name: 'Get Accounts Associated to This Office Tenant (Office)',
		value: 'officeUsersListGet',
		action: 'Get accounts associated to this office tenant',
		execute: officeUsersListGetExecute,
		description: noProps,
	},
	{
		name: 'Get Allowed Destination IPs',
		value: 'allowedDestinationIpGet',
		action: 'Get the IPs where a WorkLight license can be moved to',
		execute: allowedDestinationIpGetExecute,
		description: noProps,
	},
	{
		name: 'Get an Office User (Office)',
		value: 'officeUserGet',
		action: 'Get an office user',
		execute: officeUserGetExecute,
		description: noProps,
	},
	{
		name: 'Get Day-to-Day Statistics of License Usage and Availability (Office)',
		value: 'officeUsageStatisticsGet',
		action: 'Get day-to-day statistics of license usage and availability',
		execute: officeUsageStatisticsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Day-to-Day Statistics of License Usage and Availability (officePrepaid)',
		value: 'officePrepaidTenantUsageStatisticsGet',
		action: 'Get day-to-day statistics of license usage and availability',
		execute: officePrepaidTenantUsageStatisticsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Day-to-Day Statistics of License Usage and Availability (Plesk)',
		value: 'pleskOptionsListGet',
		action: 'Get day-to-day statistics of license usage and availability',
		execute: pleskOptionsListGetExecute,
		description: noProps,
	},
	{
		name: 'Get Day-to-Day Statistics of License Usage and Availability (Virtuozzo)',
		value: 'virtuozzoOptionsListGet',
		action: 'Get day-to-day statistics of license usage and availability',
		execute: virtuozzoOptionsListGetExecute,
		description: noProps,
	},
	{
		name: 'Get Day-to-Day Statistics of License Usage and Availability (Windows)',
		value: 'windowsOptionsListGet',
		action: 'Get day-to-day statistics of license usage and availability',
		execute: windowsOptionsListGetExecute,
		description: noProps,
	},
	{
		name: 'Get H Y C U License File (Hycu)',
		value: 'hycuServiceLicenseGet',
		action: 'Get the HYCU license file',
		execute: hycuServiceLicenseGetExecute,
		description: noProps,
	},
	{
		name: 'Get License Properties',
		value: 'get',
		action: 'Get the properties of a WorkLight license',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Domains (Office)',
		value: 'officeDomainsListGet',
		action: 'Get list of available domains',
		execute: officeDomainsListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (cloudLinux)',
		value: 'cloudLinuxListGet',
		action: 'List available services',
		execute: cloudLinuxListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Cpanel)',
		value: 'cpanelListGet',
		action: 'List available services',
		execute: cpanelListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Directadmin)',
		value: 'directadminListGet',
		action: 'List available services',
		execute: directadminListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Hycu)',
		value: 'hycuListGet',
		action: 'List available services',
		execute: hycuListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Office)',
		value: 'officeListGet',
		action: 'List available services',
		execute: officeListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (officePrepaid)',
		value: 'officePrepaidListGet',
		action: 'List available services',
		execute: officePrepaidListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Plesk)',
		value: 'pleskListGet',
		action: 'List available services',
		execute: pleskListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Redhat)',
		value: 'redhatListGet',
		action: 'List available services',
		execute: redhatListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Sqlserver)',
		value: 'sqlserverListGet',
		action: 'List available services',
		execute: sqlserverListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Virtuozzo)',
		value: 'virtuozzoListGet',
		action: 'List available services',
		execute: virtuozzoListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Available Services (Windows)',
		value: 'windowsListGet',
		action: 'List available services',
		execute: windowsListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Pending Tasks (Office)',
		value: 'officeTasksListGet',
		action: 'Get list of pending tasks',
		execute: officeTasksListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Pending Tasks (officePrepaid)',
		value: 'officePrepaidTenantTasksListGet',
		action: 'Get list of pending tasks',
		execute: officePrepaidTenantTasksListGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Tasks (Plesk)',
		value: 'pleskServiceTasksGet',
		action: 'Get list of tasks',
		execute: pleskServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Tasks (Virtuozzo)',
		value: 'virtuozzoServiceTasksGet',
		action: 'Get list of tasks',
		execute: virtuozzoServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Get List of Tasks (Windows)',
		value: 'windowsServiceTasksGet',
		action: 'Get list of tasks',
		execute: windowsServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions',
		value: 'orderableVersionsGet',
		action: 'Get the orderable WorkLight license versions',
		execute: orderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions (cloudLinux)',
		value: 'cloudLinuxOrderableVersionsGet',
		action: 'Get the orderable CloudLinux license versions',
		execute: cloudLinuxOrderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions (Cpanel)',
		value: 'cpanelOrderableVersionsGet',
		action: 'Get the orderable CPanel license versions',
		execute: cpanelOrderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions (Directadmin)',
		value: 'directadminOrderableVersionsGet',
		action: 'Get the orderable DirectAdmin license versions',
		execute: directadminOrderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions (Plesk)',
		value: 'pleskOrderableVersionsGet',
		action: 'Get the orderable Plesk license versions',
		execute: pleskOrderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions (Sqlserver)',
		value: 'sqlserverOrderableVersionsGet',
		action: 'Get the orderable SqlServer license versions',
		execute: sqlserverOrderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions (Virtuozzo)',
		value: 'virtuozzoOrderableVersionsGet',
		action: 'Get the orderable Virtuozzo license versions',
		execute: virtuozzoOrderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Versions (Windows)',
		value: 'windowsOrderableVersionsGet',
		action: 'Get the orderable Windows license versions',
		execute: windowsOrderableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information (WorkLight)',
		value: 'serviceInfosGet',
		action: 'Get service information for a WorkLight license',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get Tasks for This License (WorkLight)',
		value: 'tasksGet',
		action: 'Get the list of tasks for a WorkLight license',
		execute: tasksGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (cloudLinux)',
		value: 'cloudLinuxServiceGet',
		action: 'Get this object properties',
		execute: cloudLinuxServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Cpanel)',
		value: 'cpanelServiceGet',
		action: 'Get this object properties',
		execute: cpanelServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Directadmin)',
		value: 'directadminServiceGet',
		action: 'Get this object properties',
		execute: directadminServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Hycu)',
		value: 'hycuServiceGet',
		action: 'Get this object properties',
		execute: hycuServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Office)',
		value: 'officeServiceGet',
		action: 'Get this object properties',
		execute: officeServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (officePrepaid)',
		value: 'officePrepaidServiceGet',
		action: 'Get this object properties',
		execute: officePrepaidServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Plesk)',
		value: 'pleskServiceGet',
		action: 'Get this object properties',
		execute: pleskServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Redhat)',
		value: 'redhatServiceGet',
		action: 'Get this object properties',
		execute: redhatServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Sqlserver)',
		value: 'sqlserverServiceGet',
		action: 'Get this object properties',
		execute: sqlserverServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Virtuozzo)',
		value: 'virtuozzoServiceGet',
		action: 'Get this object properties',
		execute: virtuozzoServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties (Windows)',
		value: 'windowsServiceGet',
		action: 'Get this object properties',
		execute: windowsServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Link Your Own Sql Server License to This Windows License (Windows)',
		value: 'windowsSqlServerPost',
		action: 'Link your own sql server license to this Windows license',
		execute: windowsSqlServerPostExecute,
		description: noProps,
	},
	{
		name: 'List WorkLight Licenses',
		value: 'list',
		action: 'List all available WorkLight licenses',
		execute: listExecute,
		description: noProps,
	},
	{
		name: 'Manually Refresh HYCU License',
		value: 'hycuServiceRefreshPost',
		action: 'Manually refresh the HYCU license',
		execute: hycuServiceRefreshPostExecute,
		description: noProps,
	},
	{
		name: 'Move License to Another IP',
		value: 'changeIpPost',
		action: 'Move a WorkLight license to another IP',
		execute: changeIpPostExecute,
		description: noProps,
	},
	{
		name: 'Move This License to Another Ip (Cpanel)',
		value: 'cpanelServiceChangeIpPost',
		action: 'Move this license to another Ip',
		execute: cpanelServiceChangeIpPostExecute,
		description: noProps,
	},
	{
		name: 'Move This License to Another Ip (Directadmin)',
		value: 'directadminServiceChangeIpPost',
		action: 'Move this license to another Ip',
		execute: directadminServiceChangeIpPostExecute,
		description: noProps,
	},
	{
		name: 'Move This License to Another Ip (Plesk)',
		value: 'pleskServiceChangeIpPost',
		action: 'Move this license to another Ip',
		execute: pleskServiceChangeIpPostExecute,
		description: noProps,
	},
	{
		name: 'Move This License to Another Ip (Virtuozzo)',
		value: 'virtuozzoServiceChangeIpPost',
		action: 'Move this license to another Ip',
		execute: virtuozzoServiceChangeIpPostExecute,
		description: noProps,
	},
	{
		name: 'Release This Option (Plesk)',
		value: 'pleskOptionDelete',
		action: 'release this Option',
		execute: pleskOptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Release This Option (Virtuozzo)',
		value: 'virtuozzoOptionDelete',
		action: 'release this Option',
		execute: virtuozzoOptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Release This Option (Windows)',
		value: 'windowsOptionDelete',
		action: 'release this Option',
		execute: windowsOptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Returns an Array of Ips Where the License Can Be Moved to (Cpanel)',
		value: 'cpanelServiceAllowedDestinationIpGet',
		action: 'Returns an array of ips where the license can be moved to',
		execute: cpanelServiceAllowedDestinationIpGetExecute,
		description: noProps,
	},
	{
		name: 'Returns an Array of Ips Where the License Can Be Moved to (Directadmin)',
		value: 'directadminServiceAllowedDestinationIpGet',
		action: 'Returns an array of ips where the license can be moved to',
		execute: directadminServiceAllowedDestinationIpGetExecute,
		description: noProps,
	},
	{
		name: 'Returns an Array of Ips Where the License Can Be Moved to (Plesk)',
		value: 'pleskServiceAllowedDestinationIpGet',
		action: 'Returns an array of ips where the license can be moved to',
		execute: pleskServiceAllowedDestinationIpGetExecute,
		description: noProps,
	},
	{
		name: 'Returns an Array of Ips Where the License Can Be Moved to (Virtuozzo)',
		value: 'virtuozzoServiceAllowedDestinationIpGet',
		action: 'Returns an array of ips where the license can be moved to',
		execute: virtuozzoServiceAllowedDestinationIpGetExecute,
		description: noProps,
	},
	{
		name: 'Tasks Linked to This License (cloudLinux)',
		value: 'cloudLinuxServiceTasksGet',
		action: 'Tasks linked to this license',
		execute: cloudLinuxServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Tasks Linked to This License (Cpanel)',
		value: 'cpanelServiceTasksGet',
		action: 'tasks linked to this license',
		execute: cpanelServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Tasks Linked to This License (Directadmin)',
		value: 'directadminServiceTasksGet',
		action: 'tasks linked to this license',
		execute: directadminServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Tasks Linked to This License (Redhat)',
		value: 'redhatServiceTasksGet',
		action: 'tasks linked to this license',
		execute: redhatServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Tasks Linked to This License (Sqlserver)',
		value: 'sqlserverServiceTasksGet',
		action: 'Tasks linked to this license',
		execute: sqlserverServiceTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Terminate License',
		value: 'terminatePost',
		action: 'Ask for the termination of a WorkLight license',
		execute: terminatePostExecute,
		description: noProps,
	},
	{
		name: 'Unconfigure the Office User (officePrepaid)',
		value: 'officePrepaidServiceUnconfigurePost',
		action: 'Unconfigure the office user',
		execute: officePrepaidServiceUnconfigurePostExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information (HYCU)',
		value: 'hycuServiceInfosPut',
		action: 'Update service information for a HYCU license',
		execute: hycuServiceInfosPutExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information (WorkLight)',
		value: 'serviceInfosPut',
		action: 'Update service information for a WorkLight license',
		execute: serviceInfosPutExecute,
		description: noProps,
	},
	{
		name: 'Will Tell if the Ip Can Accept the License (Cpanel)',
		value: 'cpanelServiceCanLicenseBeMovedToGet',
		action: 'Will tell if the ip can accept the license',
		execute: cpanelServiceCanLicenseBeMovedToGetExecute,
		description: noProps,
	},
	{
		name: 'Will Tell if the Ip Can Accept the License (Directadmin)',
		value: 'directadminServiceCanLicenseBeMovedToGet',
		action: 'Will tell if the ip can accept the license',
		execute: directadminServiceCanLicenseBeMovedToGetExecute,
		description: noProps,
	},
	{
		name: 'Will Tell if the Ip Can Accept the License (Plesk)',
		value: 'pleskServiceCanLicenseBeMovedToGet',
		action: 'Will tell if the ip can accept the license',
		execute: pleskServiceCanLicenseBeMovedToGetExecute,
		description: noProps,
	},
	{
		name: 'Will Tell if the Ip Can Accept the License (Virtuozzo)',
		value: 'virtuozzoServiceCanLicenseBeMovedToGet',
		action: 'Will tell if the ip can accept the license',
		execute: virtuozzoServiceCanLicenseBeMovedToGetExecute,
		description: noProps,
	},
	],

);

export { description, execute };
