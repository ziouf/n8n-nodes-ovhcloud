import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptiondomainAlldomGetGet,
	execute as executedomainAlldomGetGet,
} from './resources/alldom/domainAlldomGetGet.operation';
import {
	description as descriptiondomainAlldomListGet,
	execute as executedomainAlldomListGet,
} from './resources/alldom/domainAlldomListGet.operation';
import {
	description as descriptiondomainAlldomTaskGetGet,
	execute as executedomainAlldomTaskGetGet,
} from './resources/alldom/domainAlldomTaskGetGet.operation';
import {
	description as descriptiondomainAlldomTaskListGet,
	execute as executedomainAlldomTaskListGet,
} from './resources/alldom/domainAlldomTaskListGet.operation';
import {
	description as descriptiondomainNameGetGet,
	execute as executedomainNameGetGet,
} from './resources/name/domainNameGetGet.operation';
import {
	description as descriptiondomainNameListGet,
	execute as executedomainNameListGet,
} from './resources/name/domainNameListGet.operation';
import {
	description as descriptiondomainNameTaskGetGet,
	execute as executedomainNameTaskGetGet,
} from './resources/name/domainNameTaskGetGet.operation';
import {
	description as descriptiondomainNameTaskListGet,
	execute as executedomainNameTaskListGet,
} from './resources/name/domainNameTaskListGet.operation';
import {
	description as descriptiondomainNameUpdatePut,
	execute as executedomainNameUpdatePut,
} from './resources/name/domainNameUpdatePut.operation';
import {
	description as descriptiondomainConfigurationRuleCheckPost,
	execute as executedomainConfigurationRuleCheckPost,
} from './resources/root/domainConfigurationRuleCheckPost.operation';
import {
	description as descriptiondomainConfigurationRuleListGet,
	execute as executedomainConfigurationRuleListGet,
} from './resources/root/domainConfigurationRuleListGet.operation';
import {
	description as descriptiondomainContactCreatePost,
	execute as executedomainContactCreatePost,
} from './resources/root/domainContactCreatePost.operation';
import {
	description as descriptiondomainContactGetGet,
	execute as executedomainContactGetGet,
} from './resources/root/domainContactGetGet.operation';
import {
	description as descriptiondomainContactListGet,
	execute as executedomainContactListGet,
} from './resources/root/domainContactListGet.operation';
import {
	description as descriptiondomainContactUpdatePut,
	execute as executedomainContactUpdatePut,
} from './resources/root/domainContactUpdatePut.operation';
import {
	description as descriptiondomainDataClaimNoticeGetGet,
	execute as executedomainDataClaimNoticeGetGet,
} from './resources/root/domainDataClaimNoticeGetGet.operation';
import {
	description as descriptiondomainDataExtensionListGet,
	execute as executedomainDataExtensionListGet,
} from './resources/root/domainDataExtensionListGet.operation';
import {
	description as descriptiondomainDataSmdCreatePost,
	execute as executedomainDataSmdCreatePost,
} from './resources/root/domainDataSmdCreatePost.operation';
import {
	description as descriptiondomainDataSmdDeleteDelete,
	execute as executedomainDataSmdDeleteDelete,
} from './resources/root/domainDataSmdDeleteDelete.operation';
import {
	description as descriptiondomainDataSmdGetGet,
	execute as executedomainDataSmdGetGet,
} from './resources/root/domainDataSmdGetGet.operation';
import {
	description as descriptiondomainDataSmdListGet,
	execute as executedomainDataSmdListGet,
} from './resources/root/domainDataSmdListGet.operation';
import {
	description as descriptiondomainDataSmdUpdatePut,
	execute as executedomainDataSmdUpdatePut,
} from './resources/root/domainDataSmdUpdatePut.operation';
import {
	description as descriptiondomainExtensionsGetGet,
	execute as executedomainExtensionsGetGet,
} from './resources/root/domainExtensionsGetGet.operation';
import {
	description as descriptiondomainExtensionsHighlightedListGet,
	execute as executedomainExtensionsHighlightedListGet,
} from './resources/root/domainExtensionsHighlightedListGet.operation';
import {
	description as descriptiondomainExtensionsListGet,
	execute as executedomainExtensionsListGet,
} from './resources/root/domainExtensionsListGet.operation';
import {
	description as descriptiondomainExtensionsPricingAttributesListGet,
	execute as executedomainExtensionsPricingAttributesListGet,
} from './resources/root/domainExtensionsPricingAttributesListGet.operation';
import {
	description as descriptiondomainExtensionsRegistryConfigurationsGetGet,
	execute as executedomainExtensionsRegistryConfigurationsGetGet,
} from './resources/root/domainExtensionsRegistryConfigurationsGetGet.operation';
import {
	description as descriptiondomainListGet,
	execute as executedomainListGet,
} from './resources/root/domainListGet.operation';
import {
	description as descriptiondomainConfigurationsObfuscatedEmailsGetGet,
	execute as executedomainConfigurationsObfuscatedEmailsGetGet,
} from './resources/service/configurations/domainConfigurationsObfuscatedEmailsGetGet.operation';
import {
	description as descriptiondomainConfigurationsObfuscatedEmailsRefreshPost,
	execute as executedomainConfigurationsObfuscatedEmailsRefreshPost,
} from './resources/service/configurations/domainConfigurationsObfuscatedEmailsRefreshPost.operation';
import {
	description as descriptiondomainConfigurationsObfuscatedEmailsUpdatePut,
	execute as executedomainConfigurationsObfuscatedEmailsUpdatePut,
} from './resources/service/configurations/domainConfigurationsObfuscatedEmailsUpdatePut.operation';
import {
	description as descriptiondomainConfigurationsOptinGetGet,
	execute as executedomainConfigurationsOptinGetGet,
} from './resources/service/configurations/domainConfigurationsOptinGetGet.operation';
import {
	description as descriptiondomainConfigurationsOptinUpdatePut,
	execute as executedomainConfigurationsOptinUpdatePut,
} from './resources/service/configurations/domainConfigurationsOptinUpdatePut.operation';
import {
	description as descriptiondomainAuthInfoGetGet,
	execute as executedomainAuthInfoGetGet,
} from './resources/service/domainAuthInfoGetGet.operation';
import {
	description as descriptiondomainChangeContactPost,
	execute as executedomainChangeContactPost,
} from './resources/service/domainChangeContactPost.operation';
import {
	description as descriptiondomainGetGet,
	execute as executedomainGetGet,
} from './resources/service/domainGetGet.operation';
import {
	description as descriptiondomainOptionDeleteDelete,
	execute as executedomainOptionDeleteDelete,
} from './resources/service/domainOptionDeleteDelete.operation';
import {
	description as descriptiondomainOptionGetGet,
	execute as executedomainOptionGetGet,
} from './resources/service/domainOptionGetGet.operation';
import {
	description as descriptiondomainOptionListGet,
	execute as executedomainOptionListGet,
} from './resources/service/domainOptionListGet.operation';
import {
	description as descriptiondomainOptionsGetGet,
	execute as executedomainOptionsGetGet,
} from './resources/service/domainOptionsGetGet.operation';
import {
	description as descriptiondomainOutgoingTransferApprovePost,
	execute as executedomainOutgoingTransferApprovePost,
} from './resources/service/domainOutgoingTransferApprovePost.operation';
import {
	description as descriptiondomainRulesEmailsObfuscationGetGet,
	execute as executedomainRulesEmailsObfuscationGetGet,
} from './resources/service/domainRulesEmailsObfuscationGetGet.operation';
import {
	description as descriptiondomainRulesOptinGetGet,
	execute as executedomainRulesOptinGetGet,
} from './resources/service/domainRulesOptinGetGet.operation';
import {
	description as descriptiondomainServiceInfosGetGet,
	execute as executedomainServiceInfosGetGet,
} from './resources/service/domainServiceInfosGetGet.operation';
import {
	description as descriptiondomainServiceInfosUpdatePut,
	execute as executedomainServiceInfosUpdatePut,
} from './resources/service/domainServiceInfosUpdatePut.operation';
import {
	description as descriptiondomainUkOutgoingTransferPost,
	execute as executedomainUkOutgoingTransferPost,
} from './resources/service/domainUkOutgoingTransferPost.operation';
import {
	description as descriptiondomainUkRegistrarsListGet,
	execute as executedomainUkRegistrarsListGet,
} from './resources/service/domainUkRegistrarsListGet.operation';
import {
	description as descriptiondomainUpdatePut,
	execute as executedomainUpdatePut,
} from './resources/service/domainUpdatePut.operation';
import {
	description as descriptiondomainDsRecordCreatePost,
	execute as executedomainDsRecordCreatePost,
} from './resources/service/dsRecord/domainDsRecordCreatePost.operation';
import {
	description as descriptiondomainDsRecordGetGet,
	execute as executedomainDsRecordGetGet,
} from './resources/service/dsRecord/domainDsRecordGetGet.operation';
import {
	description as descriptiondomainGlueRecordCreatePost,
	execute as executedomainGlueRecordCreatePost,
} from './resources/service/glueRecord/domainGlueRecordCreatePost.operation';
import {
	description as descriptiondomainGlueRecordDeleteDelete,
	execute as executedomainGlueRecordDeleteDelete,
} from './resources/service/glueRecord/domainGlueRecordDeleteDelete.operation';
import {
	description as descriptiondomainGlueRecordGetGet,
	execute as executedomainGlueRecordGetGet,
} from './resources/service/glueRecord/domainGlueRecordGetGet.operation';
import {
	description as descriptiondomainGlueRecordListGet,
	execute as executedomainGlueRecordListGet,
} from './resources/service/glueRecord/domainGlueRecordListGet.operation';
import {
	description as descriptiondomainGlueRecordUpdatePost,
	execute as executedomainGlueRecordUpdatePost,
} from './resources/service/glueRecord/domainGlueRecordUpdatePost.operation';
import {
	description as descriptiondomainNameServerCreatePost,
	execute as executedomainNameServerCreatePost,
} from './resources/service/nameServer/domainNameServerCreatePost.operation';
import {
	description as descriptiondomainNameServerDeleteDelete,
	execute as executedomainNameServerDeleteDelete,
} from './resources/service/nameServer/domainNameServerDeleteDelete.operation';
import {
	description as descriptiondomainNameServerGetGet,
	execute as executedomainNameServerGetGet,
} from './resources/service/nameServer/domainNameServerGetGet.operation';
import {
	description as descriptiondomainNameServerListGet,
	execute as executedomainNameServerListGet,
} from './resources/service/nameServer/domainNameServerListGet.operation';
import {
	description as descriptiondomainNameServerStatusGetGet,
	execute as executedomainNameServerStatusGetGet,
} from './resources/service/nameServer/domainNameServerStatusGetGet.operation';
import {
	description as descriptiondomainNameServersUpdatePost,
	execute as executedomainNameServersUpdatePost,
} from './resources/service/nameServer/domainNameServersUpdatePost.operation';
import {
	description as descriptiondomainTaskAcceleratePost,
	execute as executedomainTaskAcceleratePost,
} from './resources/service/task/domainTaskAcceleratePost.operation';
import {
	description as descriptiondomainTaskCancelPost,
	execute as executedomainTaskCancelPost,
} from './resources/service/task/domainTaskCancelPost.operation';
import {
	description as descriptiondomainTaskGetGet,
	execute as executedomainTaskGetGet,
} from './resources/service/task/domainTaskGetGet.operation';
import {
	description as descriptiondomainTaskListGet,
	execute as executedomainTaskListGet,
} from './resources/service/task/domainTaskListGet.operation';
import {
	description as descriptiondomainTaskRelaunchPost,
	execute as executedomainTaskRelaunchPost,
} from './resources/service/task/domainTaskRelaunchPost.operation';
import {
	description as descriptiondomainZoneCapabilitiesGetGet,
	execute as executedomainZoneCapabilitiesGetGet,
} from './resources/zone/domainZoneCapabilitiesGetGet.operation';
import {
	description as descriptiondomainZoneChangeContactPost,
	execute as executedomainZoneChangeContactPost,
} from './resources/zone/domainZoneChangeContactPost.operation';
import {
	description as descriptiondomainZoneConfirmTerminationPost,
	execute as executedomainZoneConfirmTerminationPost,
} from './resources/zone/domainZoneConfirmTerminationPost.operation';
import {
	description as descriptiondomainZoneDnssecDeleteDelete,
	execute as executedomainZoneDnssecDeleteDelete,
} from './resources/zone/domainZoneDnssecDeleteDelete.operation';
import {
	description as descriptiondomainZoneDnssecEnablePost,
	execute as executedomainZoneDnssecEnablePost,
} from './resources/zone/domainZoneDnssecEnablePost.operation';
import {
	description as descriptiondomainZoneDnssecGetGet,
	execute as executedomainZoneDnssecGetGet,
} from './resources/zone/domainZoneDnssecGetGet.operation';
import {
	description as descriptiondomainZoneDynHostLoginChangeContactPost,
	execute as executedomainZoneDynHostLoginChangeContactPost,
} from './resources/zone/domainZoneDynHostLoginChangeContactPost.operation';
import {
	description as descriptiondomainZoneDynHostLoginCreatePost,
	execute as executedomainZoneDynHostLoginCreatePost,
} from './resources/zone/domainZoneDynHostLoginCreatePost.operation';
import {
	description as descriptiondomainZoneDynHostLoginDeleteDelete,
	execute as executedomainZoneDynHostLoginDeleteDelete,
} from './resources/zone/domainZoneDynHostLoginDeleteDelete.operation';
import {
	description as descriptiondomainZoneDynHostLoginGetGet,
	execute as executedomainZoneDynHostLoginGetGet,
} from './resources/zone/domainZoneDynHostLoginGetGet.operation';
import {
	description as descriptiondomainZoneDynHostLoginListGet,
	execute as executedomainZoneDynHostLoginListGet,
} from './resources/zone/domainZoneDynHostLoginListGet.operation';
import {
	description as descriptiondomainZoneDynHostLoginUpdatePut,
	execute as executedomainZoneDynHostLoginUpdatePut,
} from './resources/zone/domainZoneDynHostLoginUpdatePut.operation';
import {
	description as descriptiondomainZoneDynHostRecordCreatePost,
	execute as executedomainZoneDynHostRecordCreatePost,
} from './resources/zone/domainZoneDynHostRecordCreatePost.operation';
import {
	description as descriptiondomainZoneDynHostRecordDeleteDelete,
	execute as executedomainZoneDynHostRecordDeleteDelete,
} from './resources/zone/domainZoneDynHostRecordDeleteDelete.operation';
import {
	description as descriptiondomainZoneDynHostRecordGetGet,
	execute as executedomainZoneDynHostRecordGetGet,
} from './resources/zone/domainZoneDynHostRecordGetGet.operation';
import {
	description as descriptiondomainZoneDynHostRecordListGet,
	execute as executedomainZoneDynHostRecordListGet,
} from './resources/zone/domainZoneDynHostRecordListGet.operation';
import {
	description as descriptiondomainZoneDynHostRecordUpdatePut,
	execute as executedomainZoneDynHostRecordUpdatePut,
} from './resources/zone/domainZoneDynHostRecordUpdatePut.operation';
import {
	description as descriptiondomainZoneExportGetGet,
	execute as executedomainZoneExportGetGet,
} from './resources/zone/domainZoneExportGetGet.operation';
import {
	description as descriptiondomainZoneGetGet,
	execute as executedomainZoneGetGet,
} from './resources/zone/domainZoneGetGet.operation';
import {
	description as descriptiondomainZoneHistoryGetGet,
	execute as executedomainZoneHistoryGetGet,
} from './resources/zone/domainZoneHistoryGetGet.operation';
import {
	description as descriptiondomainZoneHistoryListGet,
	execute as executedomainZoneHistoryListGet,
} from './resources/zone/domainZoneHistoryListGet.operation';
import {
	description as descriptiondomainZoneHistoryRestorePost,
	execute as executedomainZoneHistoryRestorePost,
} from './resources/zone/domainZoneHistoryRestorePost.operation';
import {
	description as descriptiondomainZoneImportPost,
	execute as executedomainZoneImportPost,
} from './resources/zone/domainZoneImportPost.operation';
import {
	description as descriptiondomainZoneListGet,
	execute as executedomainZoneListGet,
} from './resources/zone/domainZoneListGet.operation';
import {
	description as descriptiondomainZoneOptionGetGet,
	execute as executedomainZoneOptionGetGet,
} from './resources/zone/domainZoneOptionGetGet.operation';
import {
	description as descriptiondomainZoneOptionListGet,
	execute as executedomainZoneOptionListGet,
} from './resources/zone/domainZoneOptionListGet.operation';
import {
	description as descriptiondomainZoneOptionServiceInfosGetGet,
	execute as executedomainZoneOptionServiceInfosGetGet,
} from './resources/zone/domainZoneOptionServiceInfosGetGet.operation';
import {
	description as descriptiondomainZoneOptionServiceInfosUpdatePut,
	execute as executedomainZoneOptionServiceInfosUpdatePut,
} from './resources/zone/domainZoneOptionServiceInfosUpdatePut.operation';
import {
	description as descriptiondomainZoneRecordGetGet,
	execute as executedomainZoneRecordGetGet,
} from './resources/zone/domainZoneRecordGetGet.operation';
import {
	description as descriptiondomainZoneRecordListGet,
	execute as executedomainZoneRecordListGet,
} from './resources/zone/domainZoneRecordListGet.operation';
import {
	description as descriptiondomainZoneRedirectionGetGet,
	execute as executedomainZoneRedirectionGetGet,
} from './resources/zone/domainZoneRedirectionGetGet.operation';
import {
	description as descriptiondomainZoneRedirectionListGet,
	execute as executedomainZoneRedirectionListGet,
} from './resources/zone/domainZoneRedirectionListGet.operation';
import {
	description as descriptiondomainZoneRedirectionUpdatePut,
	execute as executedomainZoneRedirectionUpdatePut,
} from './resources/zone/domainZoneRedirectionUpdatePut.operation';
import {
	description as descriptiondomainZoneRefreshPost,
	execute as executedomainZoneRefreshPost,
} from './resources/zone/domainZoneRefreshPost.operation';
import {
	description as descriptiondomainZoneResetPost,
	execute as executedomainZoneResetPost,
} from './resources/zone/domainZoneResetPost.operation';
import {
	description as descriptiondomainZoneServiceInfosGetGet,
	execute as executedomainZoneServiceInfosGetGet,
} from './resources/zone/domainZoneServiceInfosGetGet.operation';
import {
	description as descriptiondomainZoneServiceInfosUpdatePut,
	execute as executedomainZoneServiceInfosUpdatePut,
} from './resources/zone/domainZoneServiceInfosUpdatePut.operation';
import {
	description as descriptiondomainZoneSoaGetGet,
	execute as executedomainZoneSoaGetGet,
} from './resources/zone/domainZoneSoaGetGet.operation';
import {
	description as descriptiondomainZoneSoaUpdatePut,
	execute as executedomainZoneSoaUpdatePut,
} from './resources/zone/domainZoneSoaUpdatePut.operation';
import {
	description as descriptiondomainZoneStatusGetGet,
	execute as executedomainZoneStatusGetGet,
} from './resources/zone/domainZoneStatusGetGet.operation';
import {
	description as descriptiondomainZoneTaskAcceleratePost,
	execute as executedomainZoneTaskAcceleratePost,
} from './resources/zone/domainZoneTaskAcceleratePost.operation';
import {
	description as descriptiondomainZoneTaskCancelPost,
	execute as executedomainZoneTaskCancelPost,
} from './resources/zone/domainZoneTaskCancelPost.operation';
import {
	description as descriptiondomainZoneTaskGetGet,
	execute as executedomainZoneTaskGetGet,
} from './resources/zone/domainZoneTaskGetGet.operation';
import {
	description as descriptiondomainZoneTaskListGet,
	execute as executedomainZoneTaskListGet,
} from './resources/zone/domainZoneTaskListGet.operation';
import {
	description as descriptiondomainZoneTaskRelaunchPost,
	execute as executedomainZoneTaskRelaunchPost,
} from './resources/zone/domainZoneTaskRelaunchPost.operation';
import {
	description as descriptiondomainZoneTerminatePost,
	execute as executedomainZoneTerminatePost,
} from './resources/zone/domainZoneTerminatePost.operation';

const { description, execute } = createOperationDispatcher(
	'domainOperation',
	'domain',
	[
	{
		name: 'Accelerate a Zone Task',
		value: 'domainZoneTaskAcceleratePost',
		action: 'Accelerate a zone task',
		execute: executedomainZoneTaskAcceleratePost,
		description: descriptiondomainZoneTaskAcceleratePost,
	},
	{
		name: 'Accelerate the Task',
		value: 'domainTaskAcceleratePost',
		action: 'Accelerate the task',
		execute: executedomainTaskAcceleratePost,
		description: descriptiondomainTaskAcceleratePost,
	},
	{
		name: 'Add New Name Server',
		value: 'domainNameServerCreatePost',
		action: 'Add new name server',
		execute: executedomainNameServerCreatePost,
		description: descriptiondomainNameServerCreatePost,
	},
	{
		name: 'Alter Login Object Properties',
		value: 'domainZoneDynHostLoginUpdatePut',
		action: 'Alter login object properties',
		execute: executedomainZoneDynHostLoginUpdatePut,
		description: descriptiondomainZoneDynHostLoginUpdatePut,
	},
	{
		name: 'Alter Record Object Properties',
		value: 'domainZoneDynHostRecordUpdatePut',
		action: 'Alter record object properties',
		execute: executedomainZoneDynHostRecordUpdatePut,
		description: descriptiondomainZoneDynHostRecordUpdatePut,
	},
	{
		name: 'Alter Redirection Object Properties',
		value: 'domainZoneRedirectionUpdatePut',
		action: 'Alter redirection object properties',
		execute: executedomainZoneRedirectionUpdatePut,
		description: descriptiondomainZoneRedirectionUpdatePut,
	},
	{
		name: 'Alter This Object Properties',
		value: 'domainZoneOptionServiceInfosUpdatePut',
		action: 'Alter this object properties',
		execute: executedomainZoneOptionServiceInfosUpdatePut,
		description: descriptiondomainZoneOptionServiceInfosUpdatePut,
	},
	{
		name: 'Approve Outgoing Transfer for a Domain',
		value: 'domainOutgoingTransferApprovePost',
		action: 'Approve Outgoing Transfer for a domain',
		execute: executedomainOutgoingTransferApprovePost,
		description: descriptiondomainOutgoingTransferApprovePost,
	},
	{
		name: 'Ask for the Termination of Your Service',
		value: 'domainZoneTerminatePost',
		action: 'Ask for the termination of your service',
		execute: executedomainZoneTerminatePost,
		description: descriptiondomainZoneTerminatePost,
	},
	{
		name: 'Cancel a Zone Task',
		value: 'domainZoneTaskCancelPost',
		action: 'Cancel a zone task',
		execute: executedomainZoneTaskCancelPost,
		description: descriptiondomainZoneTaskCancelPost,
	},
	{
		name: 'Cancel the Task',
		value: 'domainTaskCancelPost',
		action: 'Cancel the task',
		execute: executedomainTaskCancelPost,
		description: descriptiondomainTaskCancelPost,
	},
	{
		name: 'Change Password of the DynHost Login',
		value: 'domainZoneDynHostLoginChangeContactPost',
		action: 'Change password of the DynHost login',
		execute: executedomainZoneDynHostLoginChangeContactPost,
		description: descriptiondomainZoneDynHostLoginChangeContactPost,
	},
	{
		name: 'Confirm Service Termination',
		value: 'domainZoneConfirmTerminationPost',
		action: 'Confirm service termination',
		execute: executedomainZoneConfirmTerminationPost,
		description: descriptiondomainZoneConfirmTerminationPost,
	},
	{
		name: 'Create a Contact',
		value: 'domainContactCreatePost',
		action: 'Create a contact',
		execute: executedomainContactCreatePost,
		description: descriptiondomainContactCreatePost,
	},
	{
		name: 'Create a Glue Record',
		value: 'domainGlueRecordCreatePost',
		action: 'Create a glue record',
		execute: executedomainGlueRecordCreatePost,
		description: descriptiondomainGlueRecordCreatePost,
	},
	{
		name: 'Create a New Login',
		value: 'domainZoneDynHostLoginCreatePost',
		action: 'Create a new login',
		execute: executedomainZoneDynHostLoginCreatePost,
		description: descriptiondomainZoneDynHostLoginCreatePost,
	},
	{
		name: 'Create a New Record',
		value: 'domainZoneDynHostRecordCreatePost',
		action: 'Create a new record',
		execute: executedomainZoneDynHostRecordCreatePost,
		description: descriptiondomainZoneDynHostRecordCreatePost,
	},
	{
		name: 'Create a SMD File',
		value: 'domainDataSmdCreatePost',
		action: 'Create a SMD file',
		execute: executedomainDataSmdCreatePost,
		description: descriptiondomainDataSmdCreatePost,
	},
	{
		name: 'Delete a Name Server',
		value: 'domainNameServerDeleteDelete',
		action: 'Delete a name server',
		execute: executedomainNameServerDeleteDelete,
		description: descriptiondomainNameServerDeleteDelete,
	},
	{
		name: 'Delete a SMD File',
		value: 'domainDataSmdDeleteDelete',
		action: 'Delete a SMD file',
		execute: executedomainDataSmdDeleteDelete,
		description: descriptiondomainDataSmdDeleteDelete,
	},
	{
		name: 'Delete Login Object',
		value: 'domainZoneDynHostLoginDeleteDelete',
		action: 'Delete login object',
		execute: executedomainZoneDynHostLoginDeleteDelete,
		description: descriptiondomainZoneDynHostLoginDeleteDelete,
	},
	{
		name: 'Delete Record Object',
		value: 'domainZoneDynHostRecordDeleteDelete',
		action: 'Delete record object',
		execute: executedomainZoneDynHostRecordDeleteDelete,
		description: descriptiondomainZoneDynHostRecordDeleteDelete,
	},
	{
		name: 'Delete the Glue Record',
		value: 'domainGlueRecordDeleteDelete',
		action: 'Delete the glue record',
		execute: executedomainGlueRecordDeleteDelete,
		description: descriptiondomainGlueRecordDeleteDelete,
	},
	{
		name: 'Disable DNSSEC',
		value: 'domainZoneDnssecDeleteDelete',
		action: 'Disable DNSSEC',
		execute: executedomainZoneDnssecDeleteDelete,
		description: descriptiondomainZoneDnssecDeleteDelete,
	},
	{
		name: 'Edit Domain Name Properties',
		value: 'domainUpdatePut',
		action: 'Edit domain name properties',
		execute: executedomainUpdatePut,
		description: descriptiondomainUpdatePut,
	},
	{
		name: 'Enable DNSSEC',
		value: 'domainZoneDnssecEnablePost',
		action: 'Enable DNSSEC',
		execute: executedomainZoneDnssecEnablePost,
		description: descriptiondomainZoneDnssecEnablePost,
	},
	{
		name: 'Export DNS Zone',
		value: 'domainZoneExportGetGet',
		action: 'Export DNS zone',
		execute: executedomainZoneExportGetGet,
		description: descriptiondomainZoneExportGetGet,
		default: true,
	},
	{
		name: 'Get a dnsZone Service',
		value: 'domainZoneGetGet',
		action: 'Get a dnsZone service',
		execute: executedomainZoneGetGet,
		description: descriptiondomainZoneGetGet,
	},
	{
		name: 'Get a Domain Name Resource',
		value: 'domainNameGetGet',
		action: 'Get a domain name resource',
		execute: executedomainNameGetGet,
		description: descriptiondomainNameGetGet,
	},
	{
		name: 'Get a Specific Task Related to a Domain Name Resource',
		value: 'domainNameTaskGetGet',
		action: 'Get a specific task related to a domain name resource',
		execute: executedomainNameTaskGetGet,
		description: descriptiondomainNameTaskGetGet,
	},
	{
		name: 'Get a Specific Task Related to an AllDom Resource',
		value: 'domainAlldomTaskGetGet',
		action: 'Get a specific task related to an AllDom resource',
		execute: executedomainAlldomTaskGetGet,
		description: descriptiondomainAlldomTaskGetGet,
	},
	{
		name: 'Get a Zone DNSSEC Status',
		value: 'domainZoneDnssecGetGet',
		action: 'Get a zone DNSSEC status',
		execute: executedomainZoneDnssecGetGet,
		description: descriptiondomainZoneDnssecGetGet,
	},
	{
		name: 'Get a Zone History',
		value: 'domainZoneHistoryGetGet',
		action: 'Get a zone history',
		execute: executedomainZoneHistoryGetGet,
		description: descriptiondomainZoneHistoryGetGet,
	},
	{
		name: 'Get a Zone Task',
		value: 'domainZoneTaskGetGet',
		action: 'Get a zone task',
		execute: executedomainZoneTaskGetGet,
		description: descriptiondomainZoneTaskGetGet,
	},
	{
		name: 'Get an AllDom Resource',
		value: 'domainAlldomGetGet',
		action: 'Get an AllDom resource',
		execute: executedomainAlldomGetGet,
		description: descriptiondomainAlldomGetGet,
	},
	{
		name: 'Get an Extension',
		value: 'domainExtensionsGetGet',
		action: 'Get an extension',
		execute: executedomainExtensionsGetGet,
		description: descriptiondomainExtensionsGetGet,
	},
	{
		name: 'Get Configuration Rule Applied for a Domain in a Given Action',
		value: 'domainConfigurationRuleListGet',
		action: 'Get configuration rule applied for a domain in a given action',
		execute: executedomainConfigurationRuleListGet,
		description: descriptiondomainConfigurationRuleListGet,
	},
	{
		name: 'Get Details About a Contact',
		value: 'domainContactGetGet',
		action: 'Get details about a contact',
		execute: executedomainContactGetGet,
		description: descriptiondomainContactGetGet,
	},
	{
		name: 'Get Details About a Domain Task',
		value: 'domainTaskGetGet',
		action: 'Get details about a domain task',
		execute: executedomainTaskGetGet,
		description: descriptiondomainTaskGetGet,
	},
	{
		name: 'Get Details About a SMD File',
		value: 'domainDataSmdGetGet',
		action: 'Get details about a SMD file',
		execute: executedomainDataSmdGetGet,
		description: descriptiondomainDataSmdGetGet,
	},
	{
		name: 'Get Details on This Domain Option',
		value: 'domainOptionGetGet',
		action: 'Get details on this domain option',
		execute: executedomainOptionGetGet,
		description: descriptiondomainOptionGetGet,
	},
	{
		name: 'Get Details on This DS Record',
		value: 'domainDsRecordGetGet',
		action: 'Get details on this DS Record',
		execute: executedomainDsRecordGetGet,
		description: descriptiondomainDsRecordGetGet,
	},
	{
		name: 'Get Domain Name Information',
		value: 'domainGetGet',
		action: 'Get domain name information',
		execute: executedomainGetGet,
		description: descriptiondomainGetGet,
	},
	{
		name: 'Get Login Object Properties',
		value: 'domainZoneDynHostLoginGetGet',
		action: 'Get login object properties',
		execute: executedomainZoneDynHostLoginGetGet,
		description: descriptiondomainZoneDynHostLoginGetGet,
	},
	{
		name: 'Get Name Server Status',
		value: 'domainNameServerStatusGetGet',
		action: 'Get name server status',
		execute: executedomainNameServerStatusGetGet,
		description: descriptiondomainNameServerStatusGetGet,
	},
	{
		name: 'Get Record Object Properties (DynHost)',
		value: 'domainZoneDynHostRecordGetGet',
		action: 'Get record object properties (DynHost)',
		execute: executedomainZoneDynHostRecordGetGet,
		description: descriptiondomainZoneDynHostRecordGetGet,
	},
	{
		name: 'Get Record Object Properties (Zone)',
		value: 'domainZoneRecordGetGet',
		action: 'Get record object properties (Zone)',
		execute: executedomainZoneRecordGetGet,
		description: descriptiondomainZoneRecordGetGet,
	},
	{
		name: 'Get Redirection Object Properties',
		value: 'domainZoneRedirectionGetGet',
		action: 'Get redirection object properties',
		execute: executedomainZoneRedirectionGetGet,
		description: descriptiondomainZoneRedirectionGetGet,
	},
	{
		name: 'Get Service Information (Service)',
		value: 'domainServiceInfosGetGet',
		action: 'Get service information (Service)',
		execute: executedomainServiceInfosGetGet,
		description: descriptiondomainServiceInfosGetGet,
	},
	{
		name: 'Get Service Information (Zone)',
		value: 'domainZoneServiceInfosGetGet',
		action: 'Get service information (Zone)',
		execute: executedomainZoneServiceInfosGetGet,
		description: descriptiondomainZoneServiceInfosGetGet,
	},
	{
		name: 'Get the List of Managed Domain Names',
		value: 'domainListGet',
		action: 'Get the list of managed domain names',
		execute: executedomainListGet,
		description: descriptiondomainListGet,
	},
	{
		name: 'Get This Glue Record',
		value: 'domainGlueRecordGetGet',
		action: 'Get this glue record',
		execute: executedomainGlueRecordGetGet,
		description: descriptiondomainGlueRecordGetGet,
	},
	{
		name: 'Get This Name Server Configuration',
		value: 'domainNameServerGetGet',
		action: 'Get this name server configuration',
		execute: executedomainNameServerGetGet,
		description: descriptiondomainNameServerGetGet,
	},
	{
		name: 'Get This Object Properties',
		value: 'domainZoneOptionServiceInfosGetGet',
		action: 'Get this object properties',
		execute: executedomainZoneOptionServiceInfosGetGet,
		description: descriptiondomainZoneOptionServiceInfosGetGet,
	},
	{
		name: 'Get Zone Capabilities',
		value: 'domainZoneCapabilitiesGetGet',
		action: 'Get zone capabilities',
		execute: executedomainZoneCapabilitiesGetGet,
		description: descriptiondomainZoneCapabilitiesGetGet,
	},
	{
		name: 'Get Zone Option',
		value: 'domainZoneOptionGetGet',
		action: 'Get zone option',
		execute: executedomainZoneOptionGetGet,
		description: descriptiondomainZoneOptionGetGet,
	},
	{
		name: 'Get Zone SOA',
		value: 'domainZoneSoaGetGet',
		action: 'Get zone SOA',
		execute: executedomainZoneSoaGetGet,
		description: descriptiondomainZoneSoaGetGet,
	},
	{
		name: 'Get Zone Status',
		value: 'domainZoneStatusGetGet',
		action: 'Get zone status',
		execute: executedomainZoneStatusGetGet,
		description: descriptiondomainZoneStatusGetGet,
	},
	{
		name: 'Import a DNS Zone From a Zone File',
		value: 'domainZoneImportPost',
		action: 'Import a DNS zone from a zone file',
		execute: executedomainZoneImportPost,
		description: descriptiondomainZoneImportPost,
	},
	{
		name: 'Launch a Contact Change Procedure (Service)',
		value: 'domainChangeContactPost',
		action: 'Launch a contact change procedure (Service)',
		execute: executedomainChangeContactPost,
		description: descriptiondomainChangeContactPost,
	},
	{
		name: 'Launch a Contact Change Procedure (Zone)',
		value: 'domainZoneChangeContactPost',
		action: 'Launch a contact change procedure (Zone)',
		execute: executedomainZoneChangeContactPost,
		description: descriptiondomainZoneChangeContactPost,
	},
	{
		name: 'List All Contacts',
		value: 'domainContactListGet',
		action: 'List all contacts',
		execute: executedomainContactListGet,
		description: descriptiondomainContactListGet,
	},
	{
		name: 'List All Domain Name Resources',
		value: 'domainNameListGet',
		action: 'List all domain name resources',
		execute: executedomainNameListGet,
		description: descriptiondomainNameListGet,
	},
	{
		name: 'List All Domain Tasks',
		value: 'domainTaskListGet',
		action: 'List all domain tasks',
		execute: executedomainTaskListGet,
		description: descriptiondomainTaskListGet,
	},
	{
		name: 'List All Extensions',
		value: 'domainExtensionsListGet',
		action: 'List all extensions',
		execute: executedomainExtensionsListGet,
		description: descriptiondomainExtensionsListGet,
	},
	{
		name: 'List All SMD Files',
		value: 'domainDataSmdListGet',
		action: 'List all SMD files',
		execute: executedomainDataSmdListGet,
		description: descriptiondomainDataSmdListGet,
	},
	{
		name: 'List All the AllDom Resources',
		value: 'domainAlldomListGet',
		action: 'List all the AllDom resources',
		execute: executedomainAlldomListGet,
		description: descriptiondomainAlldomListGet,
	},
	{
		name: 'List All the Extensions for a Specific Country',
		value: 'domainDataExtensionListGet',
		action: 'List all the extensions for a specific country',
		execute: executedomainDataExtensionListGet,
		description: descriptiondomainDataExtensionListGet,
	},
	{
		name: 'List dnsZone Services',
		value: 'domainZoneListGet',
		action: 'List dnsZone services',
		execute: executedomainZoneListGet,
		description: descriptiondomainZoneListGet,
	},
	{
		name: 'List Domain Options',
		value: 'domainOptionListGet',
		action: 'List domain options',
		execute: executedomainOptionListGet,
		description: descriptiondomainOptionListGet,
	},
	{
		name: 'List Extensions with Their Pricing Attributes',
		value: 'domainExtensionsPricingAttributesListGet',
		action: 'List extensions with their pricing attributes',
		execute: executedomainExtensionsPricingAttributesListGet,
		description: descriptiondomainExtensionsPricingAttributesListGet,
	},
	{
		name: 'List Highlighted Extensions, Ordered by Decreased Importance',
		value: 'domainExtensionsHighlightedListGet',
		action: 'List highlighted extensions, ordered by decreased importance',
		execute: executedomainExtensionsHighlightedListGet,
		description: descriptiondomainExtensionsHighlightedListGet,
	},
	{
		name: 'List Login',
		value: 'domainZoneDynHostLoginListGet',
		action: 'List login',
		execute: executedomainZoneDynHostLoginListGet,
		description: descriptiondomainZoneDynHostLoginListGet,
	},
	{
		name: 'List of Current Name Servers',
		value: 'domainNameServerListGet',
		action: 'List of current name servers',
		execute: executedomainNameServerListGet,
		description: descriptiondomainNameServerListGet,
	},
	{
		name: 'List of Glue Records',
		value: 'domainGlueRecordListGet',
		action: 'List of glue records',
		execute: executedomainGlueRecordListGet,
		description: descriptiondomainGlueRecordListGet,
	},
	{
		name: 'List Record (DynHost)',
		value: 'domainZoneDynHostRecordListGet',
		action: 'List record (DynHost)',
		execute: executedomainZoneDynHostRecordListGet,
		description: descriptiondomainZoneDynHostRecordListGet,
	},
	{
		name: 'List Record (Zone)',
		value: 'domainZoneRecordListGet',
		action: 'List record (Zone)',
		execute: executedomainZoneRecordListGet,
		description: descriptiondomainZoneRecordListGet,
	},
	{
		name: 'List Redirections',
		value: 'domainZoneRedirectionListGet',
		action: 'List redirections',
		execute: executedomainZoneRedirectionListGet,
		description: descriptiondomainZoneRedirectionListGet,
	},
	{
		name: 'List Tasks Related to a Domain Name Resource',
		value: 'domainNameTaskListGet',
		action: 'List tasks related to a domain name resource',
		execute: executedomainNameTaskListGet,
		description: descriptiondomainNameTaskListGet,
	},
	{
		name: 'List Tasks Related to an AllDom Resource',
		value: 'domainAlldomTaskListGet',
		action: 'List tasks related to an AllDom resource',
		execute: executedomainAlldomTaskListGet,
		description: descriptiondomainAlldomTaskListGet,
	},
	{
		name: 'List Zone Histories',
		value: 'domainZoneHistoryListGet',
		action: 'List zone histories',
		execute: executedomainZoneHistoryListGet,
		description: descriptiondomainZoneHistoryListGet,
	},
	{
		name: 'List Zone Options',
		value: 'domainZoneOptionListGet',
		action: 'List zone options',
		execute: executedomainZoneOptionListGet,
		description: descriptiondomainZoneOptionListGet,
	},
	{
		name: 'List Zone Tasks',
		value: 'domainZoneTaskListGet',
		action: 'List zone tasks',
		execute: executedomainZoneTaskListGet,
		description: descriptiondomainZoneTaskListGet,
	},
	{
		name: 'Refresh a DNS Zone',
		value: 'domainZoneRefreshPost',
		action: 'Refresh a DNS zone',
		execute: executedomainZoneRefreshPost,
		description: descriptiondomainZoneRefreshPost,
	},
	{
		name: 'Refresh an Obfuscated Emails Configuration with New Values',
		value: 'domainConfigurationsObfuscatedEmailsRefreshPost',
		action: 'Refresh an obfuscated emails configuration with new values',
		execute: executedomainConfigurationsObfuscatedEmailsRefreshPost,
		description: descriptiondomainConfigurationsObfuscatedEmailsRefreshPost,
	},
	{
		name: 'Relaunch the Task',
		value: 'domainTaskRelaunchPost',
		action: 'Relaunch the task',
		execute: executedomainTaskRelaunchPost,
		description: descriptiondomainTaskRelaunchPost,
	},
	{
		name: 'Remove a Given Option',
		value: 'domainOptionDeleteDelete',
		action: 'Remove a given option',
		execute: executedomainOptionDeleteDelete,
		description: descriptiondomainOptionDeleteDelete,
	},
	{
		name: 'Reset a DNS Zone',
		value: 'domainZoneResetPost',
		action: 'Reset a DNS zone',
		execute: executedomainZoneResetPost,
		description: descriptiondomainZoneResetPost,
	},
	{
		name: 'Restart a Zone Task',
		value: 'domainZoneTaskRelaunchPost',
		action: 'Restart a zone task',
		execute: executedomainZoneTaskRelaunchPost,
		description: descriptiondomainZoneTaskRelaunchPost,
	},
	{
		name: 'Restore a Backup Point',
		value: 'domainZoneHistoryRestorePost',
		action: 'Restore a backup point',
		execute: executedomainZoneHistoryRestorePost,
		description: descriptiondomainZoneHistoryRestorePost,
	},
	{
		name: 'Retrieve Claim Notices Associated to a Domain',
		value: 'domainDataClaimNoticeGetGet',
		action: 'Retrieve claim notices associated to a domain',
		execute: executedomainDataClaimNoticeGetGet,
		description: descriptiondomainDataClaimNoticeGetGet,
	},
	{
		name: 'Retrieve Data About the Options Associated to a Domain',
		value: 'domainOptionsGetGet',
		action: 'Retrieve data about the options associated to a domain',
		execute: executedomainOptionsGetGet,
		description: descriptiondomainOptionsGetGet,
	},
	{
		name: 'Retrieve Emails Obfuscation Rule',
		value: 'domainRulesEmailsObfuscationGetGet',
		action: 'Retrieve emails obfuscation rule',
		execute: executedomainRulesEmailsObfuscationGetGet,
		description: descriptiondomainRulesEmailsObfuscationGetGet,
	},
	{
		name: 'Retrieve Obfuscated Emails Configuration',
		value: 'domainConfigurationsObfuscatedEmailsGetGet',
		action: 'Retrieve obfuscated emails configuration',
		execute: executedomainConfigurationsObfuscatedEmailsGetGet,
		description: descriptiondomainConfigurationsObfuscatedEmailsGetGet,
	},
	{
		name: 'Retrieve Optin Configuration',
		value: 'domainConfigurationsOptinGetGet',
		action: 'Retrieve optin configuration',
		execute: executedomainConfigurationsOptinGetGet,
		description: descriptiondomainConfigurationsOptinGetGet,
	},
	{
		name: 'Retrieve Optin Rule',
		value: 'domainRulesOptinGetGet',
		action: 'Retrieve optin rule',
		execute: executedomainRulesOptinGetGet,
		description: descriptiondomainRulesOptinGetGet,
	},
	{
		name: 'Retrieve Registry Configuration for an Extension',
		value: 'domainExtensionsRegistryConfigurationsGetGet',
		action: 'Retrieve registry configuration for an extension',
		execute: executedomainExtensionsRegistryConfigurationsGetGet,
		description: descriptiondomainExtensionsRegistryConfigurationsGetGet,
	},
	{
		name: 'Return authInfo Code if the Domain Is Unlocked',
		value: 'domainAuthInfoGetGet',
		action: 'Return authInfo code if the domain is unlocked',
		execute: executedomainAuthInfoGetGet,
		description: descriptiondomainAuthInfoGetGet,
	},
	{
		name: 'Return the List of All .Uk Registrars',
		value: 'domainUkRegistrarsListGet',
		action: 'Return the list of all .uk registrars',
		execute: executedomainUkRegistrarsListGet,
		description: descriptiondomainUkRegistrarsListGet,
	},
	{
		name: 'Save a New Obfuscated Emails Configuration',
		value: 'domainConfigurationsObfuscatedEmailsUpdatePut',
		action: 'Save a new obfuscated emails configuration',
		execute: executedomainConfigurationsObfuscatedEmailsUpdatePut,
		description: descriptiondomainConfigurationsObfuscatedEmailsUpdatePut,
	},
	{
		name: 'Save a New Optin Configuration',
		value: 'domainConfigurationsOptinUpdatePut',
		action: 'Save a new optin configuration',
		execute: executedomainConfigurationsOptinUpdatePut,
		description: descriptiondomainConfigurationsOptinUpdatePut,
	},
	{
		name: 'Schedule an Outgoing Transfer Task for This Domain (.uk Only)',
		value: 'domainUkOutgoingTransferPost',
		action: 'Schedule an outgoing transfer task for this domain (.uk only)',
		execute: executedomainUkOutgoingTransferPost,
		description: descriptiondomainUkOutgoingTransferPost,
	},
	{
		name: 'Update a Contact',
		value: 'domainContactUpdatePut',
		action: 'Update a contact',
		execute: executedomainContactUpdatePut,
		description: descriptiondomainContactUpdatePut,
	},
	{
		name: 'Update a SMD File',
		value: 'domainDataSmdUpdatePut',
		action: 'Update a SMD file',
		execute: executedomainDataSmdUpdatePut,
		description: descriptiondomainDataSmdUpdatePut,
	},
	{
		name: 'Update an Existing Domain Name',
		value: 'domainNameUpdatePut',
		action: 'Update an existing domain name',
		execute: executedomainNameUpdatePut,
		description: descriptiondomainNameUpdatePut,
	},
	{
		name: 'Update DNS Servers',
		value: 'domainNameServersUpdatePost',
		action: 'Update DNS servers',
		execute: executedomainNameServersUpdatePost,
		description: descriptiondomainNameServersUpdatePost,
	},
	{
		name: 'Update DS Records',
		value: 'domainDsRecordCreatePost',
		action: 'Update DS records',
		execute: executedomainDsRecordCreatePost,
		description: descriptiondomainDsRecordCreatePost,
	},
	{
		name: 'Update Service Information (Service)',
		value: 'domainServiceInfosUpdatePut',
		action: 'Update service information (Service)',
		execute: executedomainServiceInfosUpdatePut,
		description: descriptiondomainServiceInfosUpdatePut,
	},
	{
		name: 'Update Service Information (Zone)',
		value: 'domainZoneServiceInfosUpdatePut',
		action: 'Update service information (Zone)',
		execute: executedomainZoneServiceInfosUpdatePut,
		description: descriptiondomainZoneServiceInfosUpdatePut,
	},
	{
		name: 'Update the Glue Record',
		value: 'domainGlueRecordUpdatePost',
		action: 'Update the glue record',
		execute: executedomainGlueRecordUpdatePost,
		description: descriptiondomainGlueRecordUpdatePost,
	},
	{
		name: 'Update Zone SOA',
		value: 'domainZoneSoaUpdatePut',
		action: 'Update zone SOA',
		execute: executedomainZoneSoaUpdatePut,
		description: descriptiondomainZoneSoaUpdatePut,
	},
	{
		name: 'Validate a Rule Data for a Specified Domain',
		value: 'domainConfigurationRuleCheckPost',
		action: 'Validate a rule data for a specified domain',
		execute: executedomainConfigurationRuleCheckPost,
		description: descriptiondomainConfigurationRuleCheckPost,
	},
	],
);

export { description, execute };
