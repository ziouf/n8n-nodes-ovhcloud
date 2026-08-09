import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// root operations
import {
	execute as executedomainListGet,
	description as descriptiondomainListGet,
} from './resources/root/domainListGet.operation';
import {
	execute as executedomainConfigurationRuleListGet,
	description as descriptiondomainConfigurationRuleListGet,
} from './resources/root/domainConfigurationRuleListGet.operation';
import {
	execute as executedomainConfigurationRuleCheckPost,
	description as descriptiondomainConfigurationRuleCheckPost,
} from './resources/root/domainConfigurationRuleCheckPost.operation';
import {
	execute as executedomainContactListGet,
	description as descriptiondomainContactListGet,
} from './resources/root/domainContactListGet.operation';
import {
	execute as executedomainContactCreatePost,
	description as descriptiondomainContactCreatePost,
} from './resources/root/domainContactCreatePost.operation';
import {
	execute as executedomainContactGetGet,
	description as descriptiondomainContactGetGet,
} from './resources/root/domainContactGetGet.operation';
import {
	execute as executedomainContactUpdatePut,
	description as descriptiondomainContactUpdatePut,
} from './resources/root/domainContactUpdatePut.operation';
import {
	execute as executedomainDataClaimNoticeGetGet,
	description as descriptiondomainDataClaimNoticeGetGet,
} from './resources/root/domainDataClaimNoticeGetGet.operation';
import {
	execute as executedomainDataExtensionListGet,
	description as descriptiondomainDataExtensionListGet,
} from './resources/root/domainDataExtensionListGet.operation';
import {
	execute as executedomainDataSmdListGet,
	description as descriptiondomainDataSmdListGet,
} from './resources/root/domainDataSmdListGet.operation';
import {
	execute as executedomainDataSmdCreatePost,
	description as descriptiondomainDataSmdCreatePost,
} from './resources/root/domainDataSmdCreatePost.operation';
import {
	execute as executedomainDataSmdDeleteDelete,
	description as descriptiondomainDataSmdDeleteDelete,
} from './resources/root/domainDataSmdDeleteDelete.operation';
import {
	execute as executedomainDataSmdGetGet,
	description as descriptiondomainDataSmdGetGet,
} from './resources/root/domainDataSmdGetGet.operation';
import {
	execute as executedomainDataSmdUpdatePut,
	description as descriptiondomainDataSmdUpdatePut,
} from './resources/root/domainDataSmdUpdatePut.operation';
import {
	execute as executedomainExtensionsListGet,
	description as descriptiondomainExtensionsListGet,
} from './resources/root/domainExtensionsListGet.operation';
import {
	execute as executedomainExtensionsByCategoryListGet,
	description as descriptiondomainExtensionsByCategoryListGet,
} from './resources/root/domainExtensionsByCategoryListGet.operation';
import {
	execute as executedomainExtensionsHighlightedListGet,
	description as descriptiondomainExtensionsHighlightedListGet,
} from './resources/root/domainExtensionsHighlightedListGet.operation';
import {
	execute as executedomainExtensionsPricingAttributesListGet,
	description as descriptiondomainExtensionsPricingAttributesListGet,
} from './resources/root/domainExtensionsPricingAttributesListGet.operation';
import {
	execute as executedomainExtensionsGetGet,
	description as descriptiondomainExtensionsGetGet,
} from './resources/root/domainExtensionsGetGet.operation';
import {
	execute as executedomainExtensionsRegistryConfigurationsGetGet,
	description as descriptiondomainExtensionsRegistryConfigurationsGetGet,
} from './resources/root/domainExtensionsRegistryConfigurationsGetGet.operation';

// zone operations
import {
	execute as executedomainZoneListGet,
	description as descriptiondomainZoneListGet,
} from './resources/zone/domainZoneListGet.operation';
import {
	execute as executedomainZoneGetGet,
	description as descriptiondomainZoneGetGet,
} from './resources/zone/domainZoneGetGet.operation';
import {
	execute as executedomainZoneCapabilitiesGetGet,
	description as descriptiondomainZoneCapabilitiesGetGet,
} from './resources/zone/domainZoneCapabilitiesGetGet.operation';
import {
	execute as executedomainZoneChangeContactPost,
	description as descriptiondomainZoneChangeContactPost,
} from './resources/zone/domainZoneChangeContactPost.operation';
import {
	execute as executedomainZoneConfirmTerminationPost,
	description as descriptiondomainZoneConfirmTerminationPost,
} from './resources/zone/domainZoneConfirmTerminationPost.operation';
import {
	execute as executedomainZoneDnssecDeleteDelete,
	description as descriptiondomainZoneDnssecDeleteDelete,
} from './resources/zone/domainZoneDnssecDeleteDelete.operation';
import {
	execute as executedomainZoneDnssecGetGet,
	description as descriptiondomainZoneDnssecGetGet,
} from './resources/zone/domainZoneDnssecGetGet.operation';
import {
	execute as executedomainZoneDnssecEnablePost,
	description as descriptiondomainZoneDnssecEnablePost,
} from './resources/zone/domainZoneDnssecEnablePost.operation';
import {
	execute as executedomainZoneDynHostLoginListGet,
	description as descriptiondomainZoneDynHostLoginListGet,
} from './resources/zone/domainZoneDynHostLoginListGet.operation';
import {
	execute as executedomainZoneDynHostLoginCreatePost,
	description as descriptiondomainZoneDynHostLoginCreatePost,
} from './resources/zone/domainZoneDynHostLoginCreatePost.operation';
import {
	execute as executedomainZoneDynHostLoginDeleteDelete,
	description as descriptiondomainZoneDynHostLoginDeleteDelete,
} from './resources/zone/domainZoneDynHostLoginDeleteDelete.operation';
import {
	execute as executedomainZoneDynHostLoginGetGet,
	description as descriptiondomainZoneDynHostLoginGetGet,
} from './resources/zone/domainZoneDynHostLoginGetGet.operation';
import {
	execute as executedomainZoneDynHostLoginUpdatePut,
	description as descriptiondomainZoneDynHostLoginUpdatePut,
} from './resources/zone/domainZoneDynHostLoginUpdatePut.operation';
import {
	execute as executedomainZoneDynHostLoginChangeContactPost,
	description as descriptiondomainZoneDynHostLoginChangeContactPost,
} from './resources/zone/domainZoneDynHostLoginChangeContactPost.operation';
import {
	execute as executedomainZoneDynHostRecordListGet,
	description as descriptiondomainZoneDynHostRecordListGet,
} from './resources/zone/domainZoneDynHostRecordListGet.operation';
import {
	execute as executedomainZoneDynHostRecordCreatePost,
	description as descriptiondomainZoneDynHostRecordCreatePost,
} from './resources/zone/domainZoneDynHostRecordCreatePost.operation';
import {
	execute as executedomainZoneDynHostRecordDeleteDelete,
	description as descriptiondomainZoneDynHostRecordDeleteDelete,
} from './resources/zone/domainZoneDynHostRecordDeleteDelete.operation';
import {
	execute as executedomainZoneDynHostRecordGetGet,
	description as descriptiondomainZoneDynHostRecordGetGet,
} from './resources/zone/domainZoneDynHostRecordGetGet.operation';
import {
	execute as executedomainZoneDynHostRecordUpdatePut,
	description as descriptiondomainZoneDynHostRecordUpdatePut,
} from './resources/zone/domainZoneDynHostRecordUpdatePut.operation';
import {
	execute as executedomainZoneExportGetGet,
	description as descriptiondomainZoneExportGetGet,
} from './resources/zone/domainZoneExportGetGet.operation';
import {
	execute as executedomainZoneHistoryListGet,
	description as descriptiondomainZoneHistoryListGet,
} from './resources/zone/domainZoneHistoryListGet.operation';
import {
	execute as executedomainZoneHistoryGetGet,
	description as descriptiondomainZoneHistoryGetGet,
} from './resources/zone/domainZoneHistoryGetGet.operation';
import {
	execute as executedomainZoneHistoryRestorePost,
	description as descriptiondomainZoneHistoryRestorePost,
} from './resources/zone/domainZoneHistoryRestorePost.operation';
import {
	execute as executedomainZoneImportPost,
	description as descriptiondomainZoneImportPost,
} from './resources/zone/domainZoneImportPost.operation';
import {
	execute as executedomainZoneOptionListGet,
	description as descriptiondomainZoneOptionListGet,
} from './resources/zone/domainZoneOptionListGet.operation';
import {
	execute as executedomainZoneOptionGetGet,
	description as descriptiondomainZoneOptionGetGet,
} from './resources/zone/domainZoneOptionGetGet.operation';
import {
	execute as executedomainZoneOptionServiceInfosGetGet,
	description as descriptiondomainZoneOptionServiceInfosGetGet,
} from './resources/zone/domainZoneOptionServiceInfosGetGet.operation';
import {
	execute as executedomainZoneOptionServiceInfosUpdatePut,
	description as descriptiondomainZoneOptionServiceInfosUpdatePut,
} from './resources/zone/domainZoneOptionServiceInfosUpdatePut.operation';
import {
	execute as executedomainZoneRecordListGet,
	description as descriptiondomainZoneRecordListGet,
} from './resources/zone/domainZoneRecordListGet.operation';
import {
	execute as executedomainZoneRecordCreatePost,
	description as descriptiondomainZoneRecordCreatePost,
} from './resources/zone/domainZoneRecordCreatePost.operation';
import {
	execute as executedomainZoneRecordDeleteDelete,
	description as descriptiondomainZoneRecordDeleteDelete,
} from './resources/zone/domainZoneRecordDeleteDelete.operation';
import {
	execute as executedomainZoneRecordGetGet,
	description as descriptiondomainZoneRecordGetGet,
} from './resources/zone/domainZoneRecordGetGet.operation';
import {
	execute as executedomainZoneRecordUpdatePut,
	description as descriptiondomainZoneRecordUpdatePut,
} from './resources/zone/domainZoneRecordUpdatePut.operation';
import {
	execute as executedomainZoneRedirectionListGet,
	description as descriptiondomainZoneRedirectionListGet,
} from './resources/zone/domainZoneRedirectionListGet.operation';
import {
	execute as executedomainZoneRedirectionCreatePost,
	description as descriptiondomainZoneRedirectionCreatePost,
} from './resources/zone/domainZoneRedirectionCreatePost.operation';
import {
	execute as executedomainZoneRedirectionDeleteDelete,
	description as descriptiondomainZoneRedirectionDeleteDelete,
} from './resources/zone/domainZoneRedirectionDeleteDelete.operation';
import {
	execute as executedomainZoneRedirectionGetGet,
	description as descriptiondomainZoneRedirectionGetGet,
} from './resources/zone/domainZoneRedirectionGetGet.operation';
import {
	execute as executedomainZoneRedirectionUpdatePut,
	description as descriptiondomainZoneRedirectionUpdatePut,
} from './resources/zone/domainZoneRedirectionUpdatePut.operation';
import {
	execute as executedomainZoneRefreshPost,
	description as descriptiondomainZoneRefreshPost,
} from './resources/zone/domainZoneRefreshPost.operation';
import {
	execute as executedomainZoneResetPost,
	description as descriptiondomainZoneResetPost,
} from './resources/zone/domainZoneResetPost.operation';
import {
	execute as executedomainZoneServiceInfosGetGet,
	description as descriptiondomainZoneServiceInfosGetGet,
} from './resources/zone/domainZoneServiceInfosGetGet.operation';
import {
	execute as executedomainZoneServiceInfosUpdatePut,
	description as descriptiondomainZoneServiceInfosUpdatePut,
} from './resources/zone/domainZoneServiceInfosUpdatePut.operation';
import {
	execute as executedomainZoneSoaGetGet,
	description as descriptiondomainZoneSoaGetGet,
} from './resources/zone/domainZoneSoaGetGet.operation';
import {
	execute as executedomainZoneSoaUpdatePut,
	description as descriptiondomainZoneSoaUpdatePut,
} from './resources/zone/domainZoneSoaUpdatePut.operation';
import {
	execute as executedomainZoneStatusGetGet,
	description as descriptiondomainZoneStatusGetGet,
} from './resources/zone/domainZoneStatusGetGet.operation';
import {
	execute as executedomainZoneTaskListGet,
	description as descriptiondomainZoneTaskListGet,
} from './resources/zone/domainZoneTaskListGet.operation';
import {
	execute as executedomainZoneTaskGetGet,
	description as descriptiondomainZoneTaskGetGet,
} from './resources/zone/domainZoneTaskGetGet.operation';
import {
	execute as executedomainZoneTaskAcceleratePost,
	description as descriptiondomainZoneTaskAcceleratePost,
} from './resources/zone/domainZoneTaskAcceleratePost.operation';
import {
	execute as executedomainZoneTaskCancelPost,
	description as descriptiondomainZoneTaskCancelPost,
} from './resources/zone/domainZoneTaskCancelPost.operation';
import {
	execute as executedomainZoneTaskRelaunchPost,
	description as descriptiondomainZoneTaskRelaunchPost,
} from './resources/zone/domainZoneTaskRelaunchPost.operation';
import {
	execute as executedomainZoneTerminatePost,
	description as descriptiondomainZoneTerminatePost,
} from './resources/zone/domainZoneTerminatePost.operation';

// service operations
import {
	execute as executedomainGetGet,
	description as descriptiondomainGetGet,
} from './resources/service/domainGetGet.operation';
import {
	execute as executedomainUpdatePut,
	description as descriptiondomainUpdatePut,
} from './resources/service/domainUpdatePut.operation';
import {
	execute as executedomainAuthInfoGetGet,
	description as descriptiondomainAuthInfoGetGet,
} from './resources/service/domainAuthInfoGetGet.operation';
import {
	execute as executedomainChangeContactPost,
	description as descriptiondomainChangeContactPost,
} from './resources/service/domainChangeContactPost.operation';
import {
	execute as executedomainOptionListGet,
	description as descriptiondomainOptionListGet,
} from './resources/service/domainOptionListGet.operation';
import {
	execute as executedomainOptionDeleteDelete,
	description as descriptiondomainOptionDeleteDelete,
} from './resources/service/domainOptionDeleteDelete.operation';
import {
	execute as executedomainOptionGetGet,
	description as descriptiondomainOptionGetGet,
} from './resources/service/domainOptionGetGet.operation';
import {
	execute as executedomainOptionsGetGet,
	description as descriptiondomainOptionsGetGet,
} from './resources/service/domainOptionsGetGet.operation';
import {
	execute as executedomainOutgoingTransferApprovePost,
	description as descriptiondomainOutgoingTransferApprovePost,
} from './resources/service/domainOutgoingTransferApprovePost.operation';
import {
	execute as executedomainRulesEmailsObfuscationGetGet,
	description as descriptiondomainRulesEmailsObfuscationGetGet,
} from './resources/service/domainRulesEmailsObfuscationGetGet.operation';
import {
	execute as executedomainRulesOptinGetGet,
	description as descriptiondomainRulesOptinGetGet,
} from './resources/service/domainRulesOptinGetGet.operation';
import {
	execute as executedomainServiceInfosGetGet,
	description as descriptiondomainServiceInfosGetGet,
} from './resources/service/domainServiceInfosGetGet.operation';
import {
	execute as executedomainServiceInfosUpdatePut,
	description as descriptiondomainServiceInfosUpdatePut,
} from './resources/service/domainServiceInfosUpdatePut.operation';
import {
	execute as executedomainUkOutgoingTransferPost,
	description as descriptiondomainUkOutgoingTransferPost,
} from './resources/service/domainUkOutgoingTransferPost.operation';
import {
	execute as executedomainUkRegistrarsListGet,
	description as descriptiondomainUkRegistrarsListGet,
} from './resources/service/domainUkRegistrarsListGet.operation';

// service/configurations operations
import {
	execute as executedomainConfigurationsObfuscatedEmailsGetGet,
	description as descriptiondomainConfigurationsObfuscatedEmailsGetGet,
} from './resources/service/configurations/domainConfigurationsObfuscatedEmailsGetGet.operation';
import {
	execute as executedomainConfigurationsObfuscatedEmailsUpdatePut,
	description as descriptiondomainConfigurationsObfuscatedEmailsUpdatePut,
} from './resources/service/configurations/domainConfigurationsObfuscatedEmailsUpdatePut.operation';
import {
	execute as executedomainConfigurationsObfuscatedEmailsRefreshPost,
	description as descriptiondomainConfigurationsObfuscatedEmailsRefreshPost,
} from './resources/service/configurations/domainConfigurationsObfuscatedEmailsRefreshPost.operation';
import {
	execute as executedomainConfigurationsOptinGetGet,
	description as descriptiondomainConfigurationsOptinGetGet,
} from './resources/service/configurations/domainConfigurationsOptinGetGet.operation';
import {
	execute as executedomainConfigurationsOptinUpdatePut,
	description as descriptiondomainConfigurationsOptinUpdatePut,
} from './resources/service/configurations/domainConfigurationsOptinUpdatePut.operation';

// service/dsRecord operations
import {
	execute as executedomainDsRecordListGet,
	description as descriptiondomainDsRecordListGet,
} from './resources/service/dsRecord/domainDsRecordListGet.operation';
import {
	execute as executedomainDsRecordCreatePost,
	description as descriptiondomainDsRecordCreatePost,
} from './resources/service/dsRecord/domainDsRecordCreatePost.operation';
import {
	execute as executedomainDsRecordGetGet,
	description as descriptiondomainDsRecordGetGet,
} from './resources/service/dsRecord/domainDsRecordGetGet.operation';

// service/glueRecord operations
import {
	execute as executedomainGlueRecordListGet,
	description as descriptiondomainGlueRecordListGet,
} from './resources/service/glueRecord/domainGlueRecordListGet.operation';
import {
	execute as executedomainGlueRecordCreatePost,
	description as descriptiondomainGlueRecordCreatePost,
} from './resources/service/glueRecord/domainGlueRecordCreatePost.operation';
import {
	execute as executedomainGlueRecordDeleteDelete,
	description as descriptiondomainGlueRecordDeleteDelete,
} from './resources/service/glueRecord/domainGlueRecordDeleteDelete.operation';
import {
	execute as executedomainGlueRecordGetGet,
	description as descriptiondomainGlueRecordGetGet,
} from './resources/service/glueRecord/domainGlueRecordGetGet.operation';
import {
	execute as executedomainGlueRecordUpdatePost,
	description as descriptiondomainGlueRecordUpdatePost,
} from './resources/service/glueRecord/domainGlueRecordUpdatePost.operation';

// service/nameServer operations
import {
	execute as executedomainNameServerListGet,
	description as descriptiondomainNameServerListGet,
} from './resources/service/nameServer/domainNameServerListGet.operation';
import {
	execute as executedomainNameServerCreatePost,
	description as descriptiondomainNameServerCreatePost,
} from './resources/service/nameServer/domainNameServerCreatePost.operation';
import {
	execute as executedomainNameServerDeleteDelete,
	description as descriptiondomainNameServerDeleteDelete,
} from './resources/service/nameServer/domainNameServerDeleteDelete.operation';
import {
	execute as executedomainNameServerGetGet,
	description as descriptiondomainNameServerGetGet,
} from './resources/service/nameServer/domainNameServerGetGet.operation';
import {
	execute as executedomainNameServerStatusGetGet,
	description as descriptiondomainNameServerStatusGetGet,
} from './resources/service/nameServer/domainNameServerStatusGetGet.operation';
import {
	execute as executedomainNameServersUpdatePost,
	description as descriptiondomainNameServersUpdatePost,
} from './resources/service/nameServer/domainNameServersUpdatePost.operation';

// service/task operations
import {
	execute as executedomainTaskListGet,
	description as descriptiondomainTaskListGet,
} from './resources/service/task/domainTaskListGet.operation';
import {
	execute as executedomainTaskGetGet,
	description as descriptiondomainTaskGetGet,
} from './resources/service/task/domainTaskGetGet.operation';
import {
	execute as executedomainTaskAcceleratePost,
	description as descriptiondomainTaskAcceleratePost,
} from './resources/service/task/domainTaskAcceleratePost.operation';
import {
	execute as executedomainTaskCancelPost,
	description as descriptiondomainTaskCancelPost,
} from './resources/service/task/domainTaskCancelPost.operation';
import {
	execute as executedomainTaskRelaunchPost,
	description as descriptiondomainTaskRelaunchPost,
} from './resources/service/task/domainTaskRelaunchPost.operation';

// alldom (v2) operations
import {
	execute as executedomainAlldomListGet,
	description as descriptiondomainAlldomListGet,
} from './resources/alldom/domainAlldomListGet.operation';
import {
	execute as executedomainAlldomGetGet,
	description as descriptiondomainAlldomGetGet,
} from './resources/alldom/domainAlldomGetGet.operation';
import {
	execute as executedomainAlldomTaskListGet,
	description as descriptiondomainAlldomTaskListGet,
} from './resources/alldom/domainAlldomTaskListGet.operation';
import {
	execute as executedomainAlldomTaskGetGet,
	description as descriptiondomainAlldomTaskGetGet,
} from './resources/alldom/domainAlldomTaskGetGet.operation';

// name (v2) operations
import {
	execute as executedomainNameListGet,
	description as descriptiondomainNameListGet,
} from './resources/name/domainNameListGet.operation';
import {
	execute as executedomainNameGetGet,
	description as descriptiondomainNameGetGet,
} from './resources/name/domainNameGetGet.operation';
import {
	execute as executedomainNameUpdatePut,
	description as descriptiondomainNameUpdatePut,
} from './resources/name/domainNameUpdatePut.operation';
import {
	execute as executedomainNameTaskListGet,
	description as descriptiondomainNameTaskListGet,
} from './resources/name/domainNameTaskListGet.operation';
import {
	execute as executedomainNameTaskGetGet,
	description as descriptiondomainNameTaskGetGet,
} from './resources/name/domainNameTaskGetGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical)
	props.push({
		displayName: 'Operation',
		name: 'domainOperation',
		type: 'options',
		noDataExpression: true,
		default: 'domainZoneExportGetGet',
		options: [
			{
				name: 'Accelerate a Zone Task',
				value: 'domainZoneTaskAcceleratePost',
				action: 'Accelerate a zone task',
			},
			{
				name: 'Accelerate the Task',
				value: 'domainTaskAcceleratePost',
				action: 'Accelerate the task',
			},
			{
				name: 'Add New Name Server',
				value: 'domainNameServerCreatePost',
				action: 'Add new name server',
			},
			{
				name: 'Alter Login Object Properties',
				value: 'domainZoneDynHostLoginUpdatePut',
				action: 'Alter login object properties',
			},
			{
				name: 'Alter Record Object Properties',
				value: 'domainZoneDynHostRecordUpdatePut',
				action: 'Alter record object properties',
			},
			{
				name: "Alter Record Object Properties (Don't Forget to Refresh the Zone)",
				value: 'domainZoneRecordUpdatePut',
				action: "Alter record object properties (Don't forget to refresh the zone)",
			},
			{
				name: 'Alter Redirection Object Properties',
				value: 'domainZoneRedirectionUpdatePut',
				action: 'Alter redirection object properties',
			},
			{
				name: 'Alter This Object Properties',
				value: 'domainZoneOptionServiceInfosUpdatePut',
				action: 'Alter this object properties',
			},
			{
				name: 'Approve Outgoing Transfer for a Domain',
				value: 'domainOutgoingTransferApprovePost',
				action: 'Approve Outgoing Transfer for a domain',
			},
			{
				name: 'Ask for the Termination of Your Service',
				value: 'domainZoneTerminatePost',
				action: 'Ask for the termination of your service',
			},
			{
				name: 'Cancel a Zone Task',
				value: 'domainZoneTaskCancelPost',
				action: 'Cancel a zone task',
			},
			{ name: 'Cancel the Task', value: 'domainTaskCancelPost', action: 'Cancel the task' },
			{
				name: 'Change Password of the DynHost Login',
				value: 'domainZoneDynHostLoginChangeContactPost',
				action: 'Change password of the DynHost login',
			},
			{
				name: 'Confirm Service Termination',
				value: 'domainZoneConfirmTerminationPost',
				action: 'Confirm service termination',
			},
			{ name: 'Create a Contact', value: 'domainContactCreatePost', action: 'Create a contact' },
			{
				name: 'Create a Glue Record',
				value: 'domainGlueRecordCreatePost',
				action: 'Create a glue record',
			},
			{
				name: 'Create a New Login',
				value: 'domainZoneDynHostLoginCreatePost',
				action: 'Create a new login',
			},
			{
				name: 'Create a New Record',
				value: 'domainZoneDynHostRecordCreatePost',
				action: 'Create a new record',
			},
			{
				name: "Create a New Record (Don't Forget to Refresh the Zone)",
				value: 'domainZoneRecordCreatePost',
				action: "Create a new record (Don't forget to refresh the zone)",
			},
			{
				name: "Create a New Redirection (Don't Forget to Refresh the Zone)",
				value: 'domainZoneRedirectionCreatePost',
				action: "Create a new redirection (Don't forget to refresh the zone)",
			},
			{ name: 'Create a SMD File', value: 'domainDataSmdCreatePost', action: 'Create a SMD file' },
			{
				name: 'Delete a Name Server',
				value: 'domainNameServerDeleteDelete',
				action: 'Delete a name server',
			},
			{
				name: 'Delete a SMD File',
				value: 'domainDataSmdDeleteDelete',
				action: 'Delete a SMD file',
			},
			{
				name: 'Delete Login Object',
				value: 'domainZoneDynHostLoginDeleteDelete',
				action: 'Delete login object',
			},
			{
				name: 'Delete Record Object',
				value: 'domainZoneDynHostRecordDeleteDelete',
				action: 'Delete record object',
			},
			{
				name: "Delete Record Object (Don't Forget to Refresh the Zone)",
				value: 'domainZoneRecordDeleteDelete',
				action: "Delete record object (Don't forget to refresh the zone)",
			},
			{
				name: "Delete Redirection Object (Don't Forget to Refresh the Zone)",
				value: 'domainZoneRedirectionDeleteDelete',
				action: "Delete redirection object (Don't forget to refresh the zone)",
			},
			{
				name: 'Delete the Glue Record',
				value: 'domainGlueRecordDeleteDelete',
				action: 'Delete the glue record',
			},
			{ name: 'Disable DNSSEC', value: 'domainZoneDnssecDeleteDelete', action: 'Disable DNSSEC' },
			{
				name: 'Edit Domain Name Properties',
				value: 'domainUpdatePut',
				action: 'Edit domain name properties',
			},
			{ name: 'Enable DNSSEC', value: 'domainZoneDnssecEnablePost', action: 'Enable DNSSEC' },
			{ name: 'Export DNS Zone', value: 'domainZoneExportGetGet', action: 'Export DNS zone' },
			{ name: 'Get a dnsZone Service', value: 'domainZoneGetGet', action: 'Get a dnsZone service' },
			{
				name: 'Get a Domain Name Resource',
				value: 'domainNameGetGet',
				action: 'Get a domain name resource',
			},
			{
				name: 'Get a Specific Task Related to a Domain Name Resource',
				value: 'domainNameTaskGetGet',
				action: 'Get a specific task related to a domain name resource',
			},
			{
				name: 'Get a Specific Task Related to an AllDom Resource',
				value: 'domainAlldomTaskGetGet',
				action: 'Get a specific task related to an AllDom resource',
			},
			{
				name: 'Get a Zone DNSSEC Status',
				value: 'domainZoneDnssecGetGet',
				action: 'Get a zone DNSSEC status',
			},
			{
				name: 'Get a Zone History',
				value: 'domainZoneHistoryGetGet',
				action: 'Get a zone history',
			},
			{ name: 'Get a Zone Task', value: 'domainZoneTaskGetGet', action: 'Get a zone task' },
			{
				name: 'Get an AllDom Resource',
				value: 'domainAlldomGetGet',
				action: 'Get an AllDom resource',
			},
			{ name: 'Get an Extension', value: 'domainExtensionsGetGet', action: 'Get an extension' },
			{
				name: 'Get Configuration Rule Applied for a Domain in a Given Action',
				value: 'domainConfigurationRuleListGet',
				action: 'Get configuration rule applied for a domain in a given action',
			},
			{
				name: 'Get Details About a Contact',
				value: 'domainContactGetGet',
				action: 'Get details about a contact',
			},
			{
				name: 'Get Details About a Domain Task',
				value: 'domainTaskGetGet',
				action: 'Get details about a domain task',
			},
			{
				name: 'Get Details About a SMD File',
				value: 'domainDataSmdGetGet',
				action: 'Get details about a SMD file',
			},
			{
				name: 'Get Details on This Domain Option',
				value: 'domainOptionGetGet',
				action: 'Get details on this domain option',
			},
			{
				name: 'Get Details on This DS Record',
				value: 'domainDsRecordGetGet',
				action: 'Get details on this DS Record',
			},
			{
				name: 'Get Domain Name Information',
				value: 'domainGetGet',
				action: 'Get domain name information',
			},
			{
				name: 'Get Login Object Properties',
				value: 'domainZoneDynHostLoginGetGet',
				action: 'Get login object properties',
			},
			{
				name: 'Get Name Server Status',
				value: 'domainNameServerStatusGetGet',
				action: 'Get name server status',
			},
			{
				name: 'Get Record Object Properties (DynHost)',
				value: 'domainZoneDynHostRecordGetGet',
				action: 'Get record object properties (DynHost)',
			},
			{
				name: 'Get Record Object Properties (Zone)',
				value: 'domainZoneRecordGetGet',
				action: 'Get record object properties (Zone)',
			},
			{
				name: 'Get Redirection Object Properties',
				value: 'domainZoneRedirectionGetGet',
				action: 'Get redirection object properties',
			},
			{
				name: 'Get Service Information (Service)',
				value: 'domainServiceInfosGetGet',
				action: 'Get service information (Service)',
			},
			{
				name: 'Get Service Information (Zone)',
				value: 'domainZoneServiceInfosGetGet',
				action: 'Get service information (Zone)',
			},
			{
				name: 'Get the List of Managed Domain Names',
				value: 'domainListGet',
				action: 'Get the list of managed domain names',
			},
			{
				name: 'Get This Glue Record',
				value: 'domainGlueRecordGetGet',
				action: 'Get this glue record',
			},
			{
				name: 'Get This Name Server Configuration',
				value: 'domainNameServerGetGet',
				action: 'Get this name server configuration',
			},
			{
				name: 'Get This Object Properties',
				value: 'domainZoneOptionServiceInfosGetGet',
				action: 'Get this object properties',
			},
			{
				name: 'Get Zone Capabilities',
				value: 'domainZoneCapabilitiesGetGet',
				action: 'Get zone capabilities',
			},
			{ name: 'Get Zone Option', value: 'domainZoneOptionGetGet', action: 'Get zone option' },
			{ name: 'Get Zone SOA', value: 'domainZoneSoaGetGet', action: 'Get zone SOA' },
			{ name: 'Get Zone Status', value: 'domainZoneStatusGetGet', action: 'Get zone status' },
			{
				name: 'Import a DNS Zone From a Zone File',
				value: 'domainZoneImportPost',
				action: 'Import a DNS zone from a zone file',
			},
			{
				name: 'Launch a Contact Change Procedure (Service)',
				value: 'domainChangeContactPost',
				action: 'Launch a contact change procedure (Service)',
			},
			{
				name: 'Launch a Contact Change Procedure (Zone)',
				value: 'domainZoneChangeContactPost',
				action: 'Launch a contact change procedure (Zone)',
			},
			{ name: 'List All Contacts', value: 'domainContactListGet', action: 'List all contacts' },
			{
				name: 'List All Domain Name Resources',
				value: 'domainNameListGet',
				action: 'List all domain name resources',
			},
			{
				name: 'List All Domain Tasks',
				value: 'domainTaskListGet',
				action: 'List all domain tasks',
			},
			{
				name: 'List All Extensions',
				value: 'domainExtensionsListGet',
				action: 'List all extensions',
			},
			{ name: 'List All SMD Files', value: 'domainDataSmdListGet', action: 'List all SMD files' },
			{
				name: 'List All the AllDom Resources',
				value: 'domainAlldomListGet',
				action: 'List all the AllDom resources',
			},
			{
				name: 'List All the Extensions for a Specific Country',
				value: 'domainDataExtensionListGet',
				action: 'List all the extensions for a specific country',
			},
			{
				name: 'List dnsZone Services',
				value: 'domainZoneListGet',
				action: 'List dnsZone services',
			},
			{ name: 'List Domain Options', value: 'domainOptionListGet', action: 'List domain options' },
			{
				name: 'List Extensions with Their Pricing Attributes',
				value: 'domainExtensionsPricingAttributesListGet',
				action: 'List extensions with their pricing attributes',
			},
			{
				name: "List Extensions, Grouped by Category Types (Like 'Thematic', 'Geolocalization') and Category Names (Like 'Europe')",
				value: 'domainExtensionsByCategoryListGet',
				action:
					"List extensions, grouped by category types (like 'thematic', 'geolocalization') and category names (like 'europe')",
			},
			{
				name: 'List Highlighted Extensions, Ordered by Decreased Importance',
				value: 'domainExtensionsHighlightedListGet',
				action: 'List highlighted extensions, ordered by decreased importance',
			},
			{ name: 'List Login', value: 'domainZoneDynHostLoginListGet', action: 'List login' },
			{
				name: 'List of Current Name Servers',
				value: 'domainNameServerListGet',
				action: 'List of current name servers',
			},
			{
				name: "List of Domain's DS Records",
				value: 'domainDsRecordListGet',
				action: "List of domain's DS Records",
			},
			{
				name: 'List of Glue Records',
				value: 'domainGlueRecordListGet',
				action: 'List of glue records',
			},
			{
				name: 'List Record (DynHost)',
				value: 'domainZoneDynHostRecordListGet',
				action: 'List record (DynHost)',
			},
			{
				name: 'List Record (Zone)',
				value: 'domainZoneRecordListGet',
				action: 'List record (Zone)',
			},
			{
				name: 'List Redirections',
				value: 'domainZoneRedirectionListGet',
				action: 'List redirections',
			},
			{
				name: 'List Tasks Related to a Domain Name Resource',
				value: 'domainNameTaskListGet',
				action: 'List tasks related to a domain name resource',
			},
			{
				name: 'List Tasks Related to an AllDom Resource',
				value: 'domainAlldomTaskListGet',
				action: 'List tasks related to an AllDom resource',
			},
			{
				name: 'List Zone Histories',
				value: 'domainZoneHistoryListGet',
				action: 'List zone histories',
			},
			{ name: 'List Zone Options', value: 'domainZoneOptionListGet', action: 'List zone options' },
			{ name: 'List Zone Tasks', value: 'domainZoneTaskListGet', action: 'List zone tasks' },
			{ name: 'Refresh a DNS Zone', value: 'domainZoneRefreshPost', action: 'Refresh a DNS zone' },
			{
				name: 'Refresh an Obfuscated Emails Configuration with New Values',
				value: 'domainConfigurationsObfuscatedEmailsRefreshPost',
				action: 'Refresh an obfuscated emails configuration with new values',
			},
			{ name: 'Relaunch the Task', value: 'domainTaskRelaunchPost', action: 'Relaunch the task' },
			{
				name: 'Remove a Given Option',
				value: 'domainOptionDeleteDelete',
				action: 'Remove a given option',
			},
			{ name: 'Reset a DNS Zone', value: 'domainZoneResetPost', action: 'Reset a DNS zone' },
			{
				name: 'Restart a Zone Task',
				value: 'domainZoneTaskRelaunchPost',
				action: 'Restart a zone task',
			},
			{
				name: 'Restore a Backup Point',
				value: 'domainZoneHistoryRestorePost',
				action: 'Restore a backup point',
			},
			{
				name: 'Retrieve Claim Notices Associated to a Domain',
				value: 'domainDataClaimNoticeGetGet',
				action: 'Retrieve claim notices associated to a domain',
			},
			{
				name: 'Retrieve Data About the Options Associated to a Domain',
				value: 'domainOptionsGetGet',
				action: 'Retrieve data about the options associated to a domain',
			},
			{
				name: 'Retrieve Emails Obfuscation Rule',
				value: 'domainRulesEmailsObfuscationGetGet',
				action: 'Retrieve emails obfuscation rule',
			},
			{
				name: 'Retrieve Obfuscated Emails Configuration',
				value: 'domainConfigurationsObfuscatedEmailsGetGet',
				action: 'Retrieve obfuscated emails configuration',
			},
			{
				name: 'Retrieve Optin Configuration',
				value: 'domainConfigurationsOptinGetGet',
				action: 'Retrieve optin configuration',
			},
			{
				name: 'Retrieve Optin Rule',
				value: 'domainRulesOptinGetGet',
				action: 'Retrieve optin rule',
			},
			{
				name: 'Retrieve Registry Configuration for an Extension',
				value: 'domainExtensionsRegistryConfigurationsGetGet',
				action: 'Retrieve registry configuration for an extension',
			},
			{
				name: 'Return authInfo Code if the Domain Is Unlocked',
				value: 'domainAuthInfoGetGet',
				action: 'Return authInfo code if the domain is unlocked',
			},
			{
				name: 'Return the List of All .Uk Registrars',
				value: 'domainUkRegistrarsListGet',
				action: 'Return the list of all .uk registrars',
			},
			{
				name: 'Save a New Obfuscated Emails Configuration',
				value: 'domainConfigurationsObfuscatedEmailsUpdatePut',
				action: 'Save a new obfuscated emails configuration',
			},
			{
				name: 'Save a New Optin Configuration',
				value: 'domainConfigurationsOptinUpdatePut',
				action: 'Save a new optin configuration',
			},
			{
				name: 'Schedule an Outgoing Transfer Task for This Domain (.uk Only)',
				value: 'domainUkOutgoingTransferPost',
				action: 'Schedule an outgoing transfer task for this domain (.uk only)',
			},
			{ name: 'Update a Contact', value: 'domainContactUpdatePut', action: 'Update a contact' },
			{ name: 'Update a SMD File', value: 'domainDataSmdUpdatePut', action: 'Update a SMD file' },
			{
				name: 'Update an Existing Domain Name',
				value: 'domainNameUpdatePut',
				action: 'Update an existing domain name',
			},
			{
				name: 'Update DNS Servers',
				value: 'domainNameServersUpdatePost',
				action: 'Update DNS servers',
			},
			{ name: 'Update DS Records', value: 'domainDsRecordCreatePost', action: 'Update DS records' },
			{
				name: 'Update Service Information (Service)',
				value: 'domainServiceInfosUpdatePut',
				action: 'Update service information (Service)',
			},
			{
				name: 'Update Service Information (Zone)',
				value: 'domainZoneServiceInfosUpdatePut',
				action: 'Update service information (Zone)',
			},
			{
				name: 'Update the Glue Record',
				value: 'domainGlueRecordUpdatePost',
				action: 'Update the glue record',
			},
			{ name: 'Update Zone SOA', value: 'domainZoneSoaUpdatePut', action: 'Update zone SOA' },
			{
				name: 'Validate a Rule Data for a Specified Domain',
				value: 'domainConfigurationRuleCheckPost',
				action: 'Validate a rule data for a specified domain',
			},
		],
	});

	props.push(
		...(descriptiondomainListGet({
			show: {
				domainOperation: ['domainListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainConfigurationRuleListGet({
			show: {
				domainOperation: ['domainConfigurationRuleListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainConfigurationRuleCheckPost({
			show: {
				domainOperation: ['domainConfigurationRuleCheckPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainContactListGet({
			show: {
				domainOperation: ['domainContactListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainContactCreatePost({
			show: {
				domainOperation: ['domainContactCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainContactGetGet({
			show: {
				domainOperation: ['domainContactGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainContactUpdatePut({
			show: {
				domainOperation: ['domainContactUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDataClaimNoticeGetGet({
			show: {
				domainOperation: ['domainDataClaimNoticeGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDataExtensionListGet({
			show: {
				domainOperation: ['domainDataExtensionListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDataSmdListGet({
			show: {
				domainOperation: ['domainDataSmdListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDataSmdCreatePost({
			show: {
				domainOperation: ['domainDataSmdCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDataSmdDeleteDelete({
			show: {
				domainOperation: ['domainDataSmdDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDataSmdGetGet({
			show: {
				domainOperation: ['domainDataSmdGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDataSmdUpdatePut({
			show: {
				domainOperation: ['domainDataSmdUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainExtensionsListGet({
			show: {
				domainOperation: ['domainExtensionsListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainExtensionsByCategoryListGet({
			show: {
				domainOperation: ['domainExtensionsByCategoryListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainExtensionsHighlightedListGet({
			show: {
				domainOperation: ['domainExtensionsHighlightedListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainExtensionsPricingAttributesListGet({
			show: {
				domainOperation: ['domainExtensionsPricingAttributesListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainExtensionsGetGet({
			show: {
				domainOperation: ['domainExtensionsGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainExtensionsRegistryConfigurationsGetGet({
			show: {
				domainOperation: ['domainExtensionsRegistryConfigurationsGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneListGet({
			show: {
				domainOperation: ['domainZoneListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneGetGet({
			show: {
				domainOperation: ['domainZoneGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneCapabilitiesGetGet({
			show: {
				domainOperation: ['domainZoneCapabilitiesGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneChangeContactPost({
			show: {
				domainOperation: ['domainZoneChangeContactPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneConfirmTerminationPost({
			show: {
				domainOperation: ['domainZoneConfirmTerminationPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDnssecDeleteDelete({
			show: {
				domainOperation: ['domainZoneDnssecDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDnssecGetGet({
			show: {
				domainOperation: ['domainZoneDnssecGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDnssecEnablePost({
			show: {
				domainOperation: ['domainZoneDnssecEnablePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostLoginListGet({
			show: {
				domainOperation: ['domainZoneDynHostLoginListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostLoginCreatePost({
			show: {
				domainOperation: ['domainZoneDynHostLoginCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostLoginDeleteDelete({
			show: {
				domainOperation: ['domainZoneDynHostLoginDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostLoginGetGet({
			show: {
				domainOperation: ['domainZoneDynHostLoginGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostLoginUpdatePut({
			show: {
				domainOperation: ['domainZoneDynHostLoginUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostLoginChangeContactPost({
			show: {
				domainOperation: ['domainZoneDynHostLoginChangeContactPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostRecordListGet({
			show: {
				domainOperation: ['domainZoneDynHostRecordListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostRecordCreatePost({
			show: {
				domainOperation: ['domainZoneDynHostRecordCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostRecordDeleteDelete({
			show: {
				domainOperation: ['domainZoneDynHostRecordDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostRecordGetGet({
			show: {
				domainOperation: ['domainZoneDynHostRecordGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneDynHostRecordUpdatePut({
			show: {
				domainOperation: ['domainZoneDynHostRecordUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneExportGetGet({
			show: {
				domainOperation: ['domainZoneExportGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneHistoryListGet({
			show: {
				domainOperation: ['domainZoneHistoryListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneHistoryGetGet({
			show: {
				domainOperation: ['domainZoneHistoryGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneHistoryRestorePost({
			show: {
				domainOperation: ['domainZoneHistoryRestorePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneImportPost({
			show: {
				domainOperation: ['domainZoneImportPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneOptionListGet({
			show: {
				domainOperation: ['domainZoneOptionListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneOptionGetGet({
			show: {
				domainOperation: ['domainZoneOptionGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneOptionServiceInfosGetGet({
			show: {
				domainOperation: ['domainZoneOptionServiceInfosGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneOptionServiceInfosUpdatePut({
			show: {
				domainOperation: ['domainZoneOptionServiceInfosUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRecordListGet({
			show: {
				domainOperation: ['domainZoneRecordListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRecordCreatePost({
			show: {
				domainOperation: ['domainZoneRecordCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRecordDeleteDelete({
			show: {
				domainOperation: ['domainZoneRecordDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRecordGetGet({
			show: {
				domainOperation: ['domainZoneRecordGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRecordUpdatePut({
			show: {
				domainOperation: ['domainZoneRecordUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRedirectionListGet({
			show: {
				domainOperation: ['domainZoneRedirectionListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRedirectionCreatePost({
			show: {
				domainOperation: ['domainZoneRedirectionCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRedirectionDeleteDelete({
			show: {
				domainOperation: ['domainZoneRedirectionDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRedirectionGetGet({
			show: {
				domainOperation: ['domainZoneRedirectionGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRedirectionUpdatePut({
			show: {
				domainOperation: ['domainZoneRedirectionUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneRefreshPost({
			show: {
				domainOperation: ['domainZoneRefreshPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneResetPost({
			show: {
				domainOperation: ['domainZoneResetPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneServiceInfosGetGet({
			show: {
				domainOperation: ['domainZoneServiceInfosGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneServiceInfosUpdatePut({
			show: {
				domainOperation: ['domainZoneServiceInfosUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneSoaGetGet({
			show: {
				domainOperation: ['domainZoneSoaGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneSoaUpdatePut({
			show: {
				domainOperation: ['domainZoneSoaUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneStatusGetGet({
			show: {
				domainOperation: ['domainZoneStatusGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneTaskListGet({
			show: {
				domainOperation: ['domainZoneTaskListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneTaskGetGet({
			show: {
				domainOperation: ['domainZoneTaskGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneTaskAcceleratePost({
			show: {
				domainOperation: ['domainZoneTaskAcceleratePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneTaskCancelPost({
			show: {
				domainOperation: ['domainZoneTaskCancelPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneTaskRelaunchPost({
			show: {
				domainOperation: ['domainZoneTaskRelaunchPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainZoneTerminatePost({
			show: {
				domainOperation: ['domainZoneTerminatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainGetGet({
			show: {
				domainOperation: ['domainGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainUpdatePut({
			show: {
				domainOperation: ['domainUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainAuthInfoGetGet({
			show: {
				domainOperation: ['domainAuthInfoGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainChangeContactPost({
			show: {
				domainOperation: ['domainChangeContactPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainConfigurationsObfuscatedEmailsGetGet({
			show: {
				domainOperation: ['domainConfigurationsObfuscatedEmailsGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainConfigurationsObfuscatedEmailsUpdatePut({
			show: {
				domainOperation: ['domainConfigurationsObfuscatedEmailsUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainConfigurationsObfuscatedEmailsRefreshPost({
			show: {
				domainOperation: ['domainConfigurationsObfuscatedEmailsRefreshPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainConfigurationsOptinGetGet({
			show: {
				domainOperation: ['domainConfigurationsOptinGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainConfigurationsOptinUpdatePut({
			show: {
				domainOperation: ['domainConfigurationsOptinUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDsRecordListGet({
			show: {
				domainOperation: ['domainDsRecordListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDsRecordCreatePost({
			show: {
				domainOperation: ['domainDsRecordCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainDsRecordGetGet({
			show: {
				domainOperation: ['domainDsRecordGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainGlueRecordListGet({
			show: {
				domainOperation: ['domainGlueRecordListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainGlueRecordCreatePost({
			show: {
				domainOperation: ['domainGlueRecordCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainGlueRecordDeleteDelete({
			show: {
				domainOperation: ['domainGlueRecordDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainGlueRecordGetGet({
			show: {
				domainOperation: ['domainGlueRecordGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainGlueRecordUpdatePost({
			show: {
				domainOperation: ['domainGlueRecordUpdatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameServerListGet({
			show: {
				domainOperation: ['domainNameServerListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameServerCreatePost({
			show: {
				domainOperation: ['domainNameServerCreatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameServerDeleteDelete({
			show: {
				domainOperation: ['domainNameServerDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameServerGetGet({
			show: {
				domainOperation: ['domainNameServerGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameServerStatusGetGet({
			show: {
				domainOperation: ['domainNameServerStatusGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameServersUpdatePost({
			show: {
				domainOperation: ['domainNameServersUpdatePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainOptionListGet({
			show: {
				domainOperation: ['domainOptionListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainOptionDeleteDelete({
			show: {
				domainOperation: ['domainOptionDeleteDelete'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainOptionGetGet({
			show: {
				domainOperation: ['domainOptionGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainOptionsGetGet({
			show: {
				domainOperation: ['domainOptionsGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainOutgoingTransferApprovePost({
			show: {
				domainOperation: ['domainOutgoingTransferApprovePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainRulesEmailsObfuscationGetGet({
			show: {
				domainOperation: ['domainRulesEmailsObfuscationGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainRulesOptinGetGet({
			show: {
				domainOperation: ['domainRulesOptinGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainServiceInfosGetGet({
			show: {
				domainOperation: ['domainServiceInfosGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainServiceInfosUpdatePut({
			show: {
				domainOperation: ['domainServiceInfosUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainTaskListGet({
			show: {
				domainOperation: ['domainTaskListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainTaskGetGet({
			show: {
				domainOperation: ['domainTaskGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainTaskAcceleratePost({
			show: {
				domainOperation: ['domainTaskAcceleratePost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainTaskCancelPost({
			show: {
				domainOperation: ['domainTaskCancelPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainTaskRelaunchPost({
			show: {
				domainOperation: ['domainTaskRelaunchPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainUkOutgoingTransferPost({
			show: {
				domainOperation: ['domainUkOutgoingTransferPost'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainUkRegistrarsListGet({
			show: {
				domainOperation: ['domainUkRegistrarsListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainAlldomListGet({
			show: {
				domainOperation: ['domainAlldomListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainAlldomGetGet({
			show: {
				domainOperation: ['domainAlldomGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainAlldomTaskListGet({
			show: {
				domainOperation: ['domainAlldomTaskListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainAlldomTaskGetGet({
			show: {
				domainOperation: ['domainAlldomTaskGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameListGet({
			show: {
				domainOperation: ['domainNameListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameGetGet({
			show: {
				domainOperation: ['domainNameGetGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameUpdatePut({
			show: {
				domainOperation: ['domainNameUpdatePut'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameTaskListGet({
			show: {
				domainOperation: ['domainNameTaskListGet'],
			},
		}) as INodeProperties[]),
		...(descriptiondomainNameTaskGetGet({
			show: {
				domainOperation: ['domainNameTaskGetGet'],
			},
		}) as INodeProperties[]),
	);

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainOperation', 0) as string;

	switch (operation) {
		case 'domainListGet':
			return executedomainListGet.call(this, itemIndex ?? 0);
		case 'domainConfigurationRuleListGet':
			return executedomainConfigurationRuleListGet.call(this, itemIndex ?? 0);
		case 'domainConfigurationRuleCheckPost':
			return executedomainConfigurationRuleCheckPost.call(this, itemIndex ?? 0);
		case 'domainContactListGet':
			return executedomainContactListGet.call(this, itemIndex ?? 0);
		case 'domainContactCreatePost':
			return executedomainContactCreatePost.call(this, itemIndex ?? 0);
		case 'domainContactGetGet':
			return executedomainContactGetGet.call(this, itemIndex ?? 0);
		case 'domainContactUpdatePut':
			return executedomainContactUpdatePut.call(this, itemIndex ?? 0);
		case 'domainDataClaimNoticeGetGet':
			return executedomainDataClaimNoticeGetGet.call(this, itemIndex ?? 0);
		case 'domainDataExtensionListGet':
			return executedomainDataExtensionListGet.call(this, itemIndex ?? 0);
		case 'domainDataSmdListGet':
			return executedomainDataSmdListGet.call(this, itemIndex ?? 0);
		case 'domainDataSmdCreatePost':
			return executedomainDataSmdCreatePost.call(this, itemIndex ?? 0);
		case 'domainDataSmdDeleteDelete':
			return executedomainDataSmdDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainDataSmdGetGet':
			return executedomainDataSmdGetGet.call(this, itemIndex ?? 0);
		case 'domainDataSmdUpdatePut':
			return executedomainDataSmdUpdatePut.call(this, itemIndex ?? 0);
		case 'domainExtensionsListGet':
			return executedomainExtensionsListGet.call(this, itemIndex ?? 0);
		case 'domainExtensionsByCategoryListGet':
			return executedomainExtensionsByCategoryListGet.call(this, itemIndex ?? 0);
		case 'domainExtensionsHighlightedListGet':
			return executedomainExtensionsHighlightedListGet.call(this, itemIndex ?? 0);
		case 'domainExtensionsPricingAttributesListGet':
			return executedomainExtensionsPricingAttributesListGet.call(this, itemIndex ?? 0);
		case 'domainExtensionsGetGet':
			return executedomainExtensionsGetGet.call(this, itemIndex ?? 0);
		case 'domainExtensionsRegistryConfigurationsGetGet':
			return executedomainExtensionsRegistryConfigurationsGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneListGet':
			return executedomainZoneListGet.call(this, itemIndex ?? 0);
		case 'domainZoneGetGet':
			return executedomainZoneGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneCapabilitiesGetGet':
			return executedomainZoneCapabilitiesGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneChangeContactPost':
			return executedomainZoneChangeContactPost.call(this, itemIndex ?? 0);
		case 'domainZoneConfirmTerminationPost':
			return executedomainZoneConfirmTerminationPost.call(this, itemIndex ?? 0);
		case 'domainZoneDnssecDeleteDelete':
			return executedomainZoneDnssecDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainZoneDnssecGetGet':
			return executedomainZoneDnssecGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneDnssecEnablePost':
			return executedomainZoneDnssecEnablePost.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostLoginListGet':
			return executedomainZoneDynHostLoginListGet.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostLoginCreatePost':
			return executedomainZoneDynHostLoginCreatePost.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostLoginDeleteDelete':
			return executedomainZoneDynHostLoginDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostLoginGetGet':
			return executedomainZoneDynHostLoginGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostLoginUpdatePut':
			return executedomainZoneDynHostLoginUpdatePut.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostLoginChangeContactPost':
			return executedomainZoneDynHostLoginChangeContactPost.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostRecordListGet':
			return executedomainZoneDynHostRecordListGet.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostRecordCreatePost':
			return executedomainZoneDynHostRecordCreatePost.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostRecordDeleteDelete':
			return executedomainZoneDynHostRecordDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostRecordGetGet':
			return executedomainZoneDynHostRecordGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneDynHostRecordUpdatePut':
			return executedomainZoneDynHostRecordUpdatePut.call(this, itemIndex ?? 0);
		case 'domainZoneExportGetGet':
			return executedomainZoneExportGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneHistoryListGet':
			return executedomainZoneHistoryListGet.call(this, itemIndex ?? 0);
		case 'domainZoneHistoryGetGet':
			return executedomainZoneHistoryGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneHistoryRestorePost':
			return executedomainZoneHistoryRestorePost.call(this, itemIndex ?? 0);
		case 'domainZoneImportPost':
			return executedomainZoneImportPost.call(this, itemIndex ?? 0);
		case 'domainZoneOptionListGet':
			return executedomainZoneOptionListGet.call(this, itemIndex ?? 0);
		case 'domainZoneOptionGetGet':
			return executedomainZoneOptionGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneOptionServiceInfosGetGet':
			return executedomainZoneOptionServiceInfosGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneOptionServiceInfosUpdatePut':
			return executedomainZoneOptionServiceInfosUpdatePut.call(this, itemIndex ?? 0);
		case 'domainZoneRecordListGet':
			return executedomainZoneRecordListGet.call(this, itemIndex ?? 0);
		case 'domainZoneRecordCreatePost':
			return executedomainZoneRecordCreatePost.call(this, itemIndex ?? 0);
		case 'domainZoneRecordDeleteDelete':
			return executedomainZoneRecordDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainZoneRecordGetGet':
			return executedomainZoneRecordGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneRecordUpdatePut':
			return executedomainZoneRecordUpdatePut.call(this, itemIndex ?? 0);
		case 'domainZoneRedirectionListGet':
			return executedomainZoneRedirectionListGet.call(this, itemIndex ?? 0);
		case 'domainZoneRedirectionCreatePost':
			return executedomainZoneRedirectionCreatePost.call(this, itemIndex ?? 0);
		case 'domainZoneRedirectionDeleteDelete':
			return executedomainZoneRedirectionDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainZoneRedirectionGetGet':
			return executedomainZoneRedirectionGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneRedirectionUpdatePut':
			return executedomainZoneRedirectionUpdatePut.call(this, itemIndex ?? 0);
		case 'domainZoneRefreshPost':
			return executedomainZoneRefreshPost.call(this, itemIndex ?? 0);
		case 'domainZoneResetPost':
			return executedomainZoneResetPost.call(this, itemIndex ?? 0);
		case 'domainZoneServiceInfosGetGet':
			return executedomainZoneServiceInfosGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneServiceInfosUpdatePut':
			return executedomainZoneServiceInfosUpdatePut.call(this, itemIndex ?? 0);
		case 'domainZoneSoaGetGet':
			return executedomainZoneSoaGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneSoaUpdatePut':
			return executedomainZoneSoaUpdatePut.call(this, itemIndex ?? 0);
		case 'domainZoneStatusGetGet':
			return executedomainZoneStatusGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneTaskListGet':
			return executedomainZoneTaskListGet.call(this, itemIndex ?? 0);
		case 'domainZoneTaskGetGet':
			return executedomainZoneTaskGetGet.call(this, itemIndex ?? 0);
		case 'domainZoneTaskAcceleratePost':
			return executedomainZoneTaskAcceleratePost.call(this, itemIndex ?? 0);
		case 'domainZoneTaskCancelPost':
			return executedomainZoneTaskCancelPost.call(this, itemIndex ?? 0);
		case 'domainZoneTaskRelaunchPost':
			return executedomainZoneTaskRelaunchPost.call(this, itemIndex ?? 0);
		case 'domainZoneTerminatePost':
			return executedomainZoneTerminatePost.call(this, itemIndex ?? 0);
		case 'domainGetGet':
			return executedomainGetGet.call(this, itemIndex ?? 0);
		case 'domainUpdatePut':
			return executedomainUpdatePut.call(this, itemIndex ?? 0);
		case 'domainAuthInfoGetGet':
			return executedomainAuthInfoGetGet.call(this, itemIndex ?? 0);
		case 'domainChangeContactPost':
			return executedomainChangeContactPost.call(this, itemIndex ?? 0);
		case 'domainConfigurationsObfuscatedEmailsGetGet':
			return executedomainConfigurationsObfuscatedEmailsGetGet.call(this, itemIndex ?? 0);
		case 'domainConfigurationsObfuscatedEmailsUpdatePut':
			return executedomainConfigurationsObfuscatedEmailsUpdatePut.call(this, itemIndex ?? 0);
		case 'domainConfigurationsObfuscatedEmailsRefreshPost':
			return executedomainConfigurationsObfuscatedEmailsRefreshPost.call(this, itemIndex ?? 0);
		case 'domainConfigurationsOptinGetGet':
			return executedomainConfigurationsOptinGetGet.call(this, itemIndex ?? 0);
		case 'domainConfigurationsOptinUpdatePut':
			return executedomainConfigurationsOptinUpdatePut.call(this, itemIndex ?? 0);
		case 'domainDsRecordListGet':
			return executedomainDsRecordListGet.call(this, itemIndex ?? 0);
		case 'domainDsRecordCreatePost':
			return executedomainDsRecordCreatePost.call(this, itemIndex ?? 0);
		case 'domainDsRecordGetGet':
			return executedomainDsRecordGetGet.call(this, itemIndex ?? 0);
		case 'domainGlueRecordListGet':
			return executedomainGlueRecordListGet.call(this, itemIndex ?? 0);
		case 'domainGlueRecordCreatePost':
			return executedomainGlueRecordCreatePost.call(this, itemIndex ?? 0);
		case 'domainGlueRecordDeleteDelete':
			return executedomainGlueRecordDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainGlueRecordGetGet':
			return executedomainGlueRecordGetGet.call(this, itemIndex ?? 0);
		case 'domainGlueRecordUpdatePost':
			return executedomainGlueRecordUpdatePost.call(this, itemIndex ?? 0);
		case 'domainNameServerListGet':
			return executedomainNameServerListGet.call(this, itemIndex ?? 0);
		case 'domainNameServerCreatePost':
			return executedomainNameServerCreatePost.call(this, itemIndex ?? 0);
		case 'domainNameServerDeleteDelete':
			return executedomainNameServerDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainNameServerGetGet':
			return executedomainNameServerGetGet.call(this, itemIndex ?? 0);
		case 'domainNameServerStatusGetGet':
			return executedomainNameServerStatusGetGet.call(this, itemIndex ?? 0);
		case 'domainNameServersUpdatePost':
			return executedomainNameServersUpdatePost.call(this, itemIndex ?? 0);
		case 'domainOptionListGet':
			return executedomainOptionListGet.call(this, itemIndex ?? 0);
		case 'domainOptionDeleteDelete':
			return executedomainOptionDeleteDelete.call(this, itemIndex ?? 0);
		case 'domainOptionGetGet':
			return executedomainOptionGetGet.call(this, itemIndex ?? 0);
		case 'domainOptionsGetGet':
			return executedomainOptionsGetGet.call(this, itemIndex ?? 0);
		case 'domainOutgoingTransferApprovePost':
			return executedomainOutgoingTransferApprovePost.call(this, itemIndex ?? 0);
		case 'domainRulesEmailsObfuscationGetGet':
			return executedomainRulesEmailsObfuscationGetGet.call(this, itemIndex ?? 0);
		case 'domainRulesOptinGetGet':
			return executedomainRulesOptinGetGet.call(this, itemIndex ?? 0);
		case 'domainServiceInfosGetGet':
			return executedomainServiceInfosGetGet.call(this, itemIndex ?? 0);
		case 'domainServiceInfosUpdatePut':
			return executedomainServiceInfosUpdatePut.call(this, itemIndex ?? 0);
		case 'domainTaskListGet':
			return executedomainTaskListGet.call(this, itemIndex ?? 0);
		case 'domainTaskGetGet':
			return executedomainTaskGetGet.call(this, itemIndex ?? 0);
		case 'domainTaskAcceleratePost':
			return executedomainTaskAcceleratePost.call(this, itemIndex ?? 0);
		case 'domainTaskCancelPost':
			return executedomainTaskCancelPost.call(this, itemIndex ?? 0);
		case 'domainTaskRelaunchPost':
			return executedomainTaskRelaunchPost.call(this, itemIndex ?? 0);
		case 'domainUkOutgoingTransferPost':
			return executedomainUkOutgoingTransferPost.call(this, itemIndex ?? 0);
		case 'domainUkRegistrarsListGet':
			return executedomainUkRegistrarsListGet.call(this, itemIndex ?? 0);
		case 'domainAlldomListGet':
			return executedomainAlldomListGet.call(this, itemIndex ?? 0);
		case 'domainAlldomGetGet':
			return executedomainAlldomGetGet.call(this, itemIndex ?? 0);
		case 'domainAlldomTaskListGet':
			return executedomainAlldomTaskListGet.call(this, itemIndex ?? 0);
		case 'domainAlldomTaskGetGet':
			return executedomainAlldomTaskGetGet.call(this, itemIndex ?? 0);
		case 'domainNameListGet':
			return executedomainNameListGet.call(this, itemIndex ?? 0);
		case 'domainNameGetGet':
			return executedomainNameGetGet.call(this, itemIndex ?? 0);
		case 'domainNameUpdatePut':
			return executedomainNameUpdatePut.call(this, itemIndex ?? 0);
		case 'domainNameTaskListGet':
			return executedomainNameTaskListGet.call(this, itemIndex ?? 0);
		case 'domainNameTaskGetGet':
			return executedomainNameTaskGetGet.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
