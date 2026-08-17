import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionClusterGetGet,
	execute as executeClusterGetGet,
} from './cluster/clusterGetGet.operation';
import {
	description as descriptionClusterListGet,
	execute as executeClusterListGet,
} from './cluster/clusterListGet.operation';
import {
	description as descriptionClusterRetentionGetGet,
	execute as executeClusterRetentionGetGet,
} from './cluster/clusterRetentionGetGet.operation';
import {
	description as descriptionClusterRetentionListGet,
	execute as executeClusterRetentionListGet,
} from './cluster/clusterRetentionListGet.operation';
import {
	description as descriptionClusterUpdatePut,
	execute as executeClusterUpdatePut,
} from './cluster/clusterUpdatePut.operation';
import {
	description as descriptionEncryptionKeyCreatePost,
	execute as executeEncryptionKeyCreatePost,
} from './encryptionKey/encryptionKeyCreatePost.operation';
import {
	description as descriptionEncryptionKeyDeleteDelete,
	execute as executeEncryptionKeyDeleteDelete,
} from './encryptionKey/encryptionKeyDeleteDelete.operation';
import {
	description as descriptionEncryptionKeyGetGet,
	execute as executeEncryptionKeyGetGet,
} from './encryptionKey/encryptionKeyGetGet.operation';
import {
	description as descriptionEncryptionKeyListGet,
	execute as executeEncryptionKeyListGet,
} from './encryptionKey/encryptionKeyListGet.operation';
import {
	description as descriptionInputActionListGet,
	execute as executeInputActionListGet,
} from './input/inputActionListGet.operation';
import {
	description as descriptionInputConfigtestPost,
	execute as executeInputConfigtestPost,
} from './input/inputConfigtestPost.operation';
import {
	description as descriptionInputConfigtestResultGet,
	execute as executeInputConfigtestResultGet,
} from './input/inputConfigtestResultGet.operation';
import {
	description as descriptionInputConfigurationFlowggerGet,
	execute as executeInputConfigurationFlowggerGet,
} from './input/inputConfigurationFlowggerGet.operation';
import {
	description as descriptionInputConfigurationFlowggerUpdatePut,
	execute as executeInputConfigurationFlowggerUpdatePut,
} from './input/inputConfigurationFlowggerUpdatePut.operation';
import {
	description as descriptionInputConfigurationLogstashGet,
	execute as executeInputConfigurationLogstashGet,
} from './input/inputConfigurationLogstashGet.operation';
import {
	description as descriptionInputConfigurationLogstashUpdatePut,
	execute as executeInputConfigurationLogstashUpdatePut,
} from './input/inputConfigurationLogstashUpdatePut.operation';
import {
	description as descriptionInputCreatePost,
	execute as executeInputCreatePost,
} from './input/inputCreatePost.operation';
import {
	description as descriptionInputDeleteDelete,
	execute as executeInputDeleteDelete,
} from './input/inputDeleteDelete.operation';
import {
	description as descriptionInputEndPost,
	execute as executeInputEndPost,
} from './input/inputEndPost.operation';
import {
	description as descriptionInputEngineGetGet,
	execute as executeInputEngineGetGet,
} from './input/inputEngineGetGet.operation';
import {
	description as descriptionInputEngineHelperGetGet,
	execute as executeInputEngineHelperGetGet,
} from './input/inputEngineHelperGetGet.operation';
import {
	description as descriptionInputEngineHelperListGet,
	execute as executeInputEngineHelperListGet,
} from './input/inputEngineHelperListGet.operation';
import {
	description as descriptionInputEngineListGet,
	execute as executeInputEngineListGet,
} from './input/inputEngineListGet.operation';
import {
	description as descriptionInputGetGet,
	execute as executeInputGetGet,
} from './input/inputGetGet.operation';
import {
	description as descriptionInputListGet,
	execute as executeInputListGet,
} from './input/inputListGet.operation';
import {
	description as descriptionInputLogsUrlPost,
	execute as executeInputLogsUrlPost,
} from './input/inputLogsUrlPost.operation';
import {
	description as descriptionInputRestartPost,
	execute as executeInputRestartPost,
} from './input/inputRestartPost.operation';
import {
	description as descriptionInputStartPost,
	execute as executeInputStartPost,
} from './input/inputStartPost.operation';
import {
	description as descriptionInputUpdatePut,
	execute as executeInputUpdatePut,
} from './input/inputUpdatePut.operation';
import {
	description as descriptionInputUrlGet,
	execute as executeInputUrlGet,
} from './input/inputUrlGet.operation';
import {
	description as descriptionOutputGraylogDashboardCreatePost,
	execute as executeOutputGraylogDashboardCreatePost,
} from './outputGraylogDashboard/outputGraylogDashboardCreatePost.operation';
import {
	description as descriptionOutputGraylogDashboardDeleteDelete,
	execute as executeOutputGraylogDashboardDeleteDelete,
} from './outputGraylogDashboard/outputGraylogDashboardDeleteDelete.operation';
import {
	description as descriptionOutputGraylogDashboardDuplicatePost,
	execute as executeOutputGraylogDashboardDuplicatePost,
} from './outputGraylogDashboard/outputGraylogDashboardDuplicatePost.operation';
import {
	description as descriptionOutputGraylogDashboardGetGet,
	execute as executeOutputGraylogDashboardGetGet,
} from './outputGraylogDashboard/outputGraylogDashboardGetGet.operation';
import {
	description as descriptionOutputGraylogDashboardListGet,
	execute as executeOutputGraylogDashboardListGet,
} from './outputGraylogDashboard/outputGraylogDashboardListGet.operation';
import {
	description as descriptionOutputGraylogDashboardUpdatePut,
	execute as executeOutputGraylogDashboardUpdatePut,
} from './outputGraylogDashboard/outputGraylogDashboardUpdatePut.operation';
import {
	description as descriptionOutputGraylogDashboardUrlGet,
	execute as executeOutputGraylogDashboardUrlGet,
} from './outputGraylogDashboard/outputGraylogDashboardUrlGet.operation';
import {
	description as descriptionOutputGraylogStreamAlertCreatePost,
	execute as executeOutputGraylogStreamAlertCreatePost,
} from './outputGraylogStream/outputGraylogStreamAlertCreatePost.operation';
import {
	description as descriptionOutputGraylogStreamAlertDeleteDelete,
	execute as executeOutputGraylogStreamAlertDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamAlertDeleteDelete.operation';
import {
	description as descriptionOutputGraylogStreamAlertGetGet,
	execute as executeOutputGraylogStreamAlertGetGet,
} from './outputGraylogStream/outputGraylogStreamAlertGetGet.operation';
import {
	description as descriptionOutputGraylogStreamAlertListGet,
	execute as executeOutputGraylogStreamAlertListGet,
} from './outputGraylogStream/outputGraylogStreamAlertListGet.operation';
import {
	description as descriptionOutputGraylogStreamAlertUpdatePut,
	execute as executeOutputGraylogStreamAlertUpdatePut,
} from './outputGraylogStream/outputGraylogStreamAlertUpdatePut.operation';
import {
	description as descriptionOutputGraylogStreamArchiveEncryptionKeyListGet,
	execute as executeOutputGraylogStreamArchiveEncryptionKeyListGet,
} from './outputGraylogStream/outputGraylogStreamArchiveEncryptionKeyListGet.operation';
import {
	description as descriptionOutputGraylogStreamArchiveGetGet,
	execute as executeOutputGraylogStreamArchiveGetGet,
} from './outputGraylogStream/outputGraylogStreamArchiveGetGet.operation';
import {
	description as descriptionOutputGraylogStreamArchiveListGet,
	execute as executeOutputGraylogStreamArchiveListGet,
} from './outputGraylogStream/outputGraylogStreamArchiveListGet.operation';
import {
	description as descriptionOutputGraylogStreamArchiveUrlPost,
	execute as executeOutputGraylogStreamArchiveUrlPost,
} from './outputGraylogStream/outputGraylogStreamArchiveUrlPost.operation';
import {
	description as descriptionOutputGraylogStreamCreatePost,
	execute as executeOutputGraylogStreamCreatePost,
} from './outputGraylogStream/outputGraylogStreamCreatePost.operation';
import {
	description as descriptionOutputGraylogStreamDeleteDelete,
	execute as executeOutputGraylogStreamDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamDeleteDelete.operation';
import {
	description as descriptionOutputGraylogStreamGetGet,
	execute as executeOutputGraylogStreamGetGet,
} from './outputGraylogStream/outputGraylogStreamGetGet.operation';
import {
	description as descriptionOutputGraylogStreamListGet,
	execute as executeOutputGraylogStreamListGet,
} from './outputGraylogStream/outputGraylogStreamListGet.operation';
import {
	description as descriptionOutputGraylogStreamRuleCreatePost,
	execute as executeOutputGraylogStreamRuleCreatePost,
} from './outputGraylogStream/outputGraylogStreamRuleCreatePost.operation';
import {
	description as descriptionOutputGraylogStreamRuleDeleteDelete,
	execute as executeOutputGraylogStreamRuleDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamRuleDeleteDelete.operation';
import {
	description as descriptionOutputGraylogStreamRuleGetGet,
	execute as executeOutputGraylogStreamRuleGetGet,
} from './outputGraylogStream/outputGraylogStreamRuleGetGet.operation';
import {
	description as descriptionOutputGraylogStreamRuleListGet,
	execute as executeOutputGraylogStreamRuleListGet,
} from './outputGraylogStream/outputGraylogStreamRuleListGet.operation';
import {
	description as descriptionOutputGraylogStreamSubscriptionDeleteDelete,
	execute as executeOutputGraylogStreamSubscriptionDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamSubscriptionDeleteDelete.operation';
import {
	description as descriptionOutputGraylogStreamSubscriptionGetGet,
	execute as executeOutputGraylogStreamSubscriptionGetGet,
} from './outputGraylogStream/outputGraylogStreamSubscriptionGetGet.operation';
import {
	description as descriptionOutputGraylogStreamSubscriptionListGet,
	execute as executeOutputGraylogStreamSubscriptionListGet,
} from './outputGraylogStream/outputGraylogStreamSubscriptionListGet.operation';
import {
	description as descriptionOutputGraylogStreamUpdatePut,
	execute as executeOutputGraylogStreamUpdatePut,
} from './outputGraylogStream/outputGraylogStreamUpdatePut.operation';
import {
	description as descriptionOutputGraylogStreamUrlGet,
	execute as executeOutputGraylogStreamUrlGet,
} from './outputGraylogStream/outputGraylogStreamUrlGet.operation';
import {
	description as descriptionOutputOpenSearchAliasCreatePost,
	execute as executeOutputOpenSearchAliasCreatePost,
} from './outputOpenSearchAlias/outputOpenSearchAliasCreatePost.operation';
import {
	description as descriptionOutputOpenSearchAliasDeleteDelete,
	execute as executeOutputOpenSearchAliasDeleteDelete,
} from './outputOpenSearchAlias/outputOpenSearchAliasDeleteDelete.operation';
import {
	description as descriptionOutputOpenSearchAliasGetGet,
	execute as executeOutputOpenSearchAliasGetGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasGetGet.operation';
import {
	description as descriptionOutputOpenSearchAliasIndexCreatePost,
	execute as executeOutputOpenSearchAliasIndexCreatePost,
} from './outputOpenSearchAlias/outputOpenSearchAliasIndexCreatePost.operation';
import {
	description as descriptionOutputOpenSearchAliasIndexDeleteDelete,
	execute as executeOutputOpenSearchAliasIndexDeleteDelete,
} from './outputOpenSearchAlias/outputOpenSearchAliasIndexDeleteDelete.operation';
import {
	description as descriptionOutputOpenSearchAliasIndexListGet,
	execute as executeOutputOpenSearchAliasIndexListGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasIndexListGet.operation';
import {
	description as descriptionOutputOpenSearchAliasListGet,
	execute as executeOutputOpenSearchAliasListGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasListGet.operation';
import {
	description as descriptionOutputOpenSearchAliasStreamCreatePost,
	execute as executeOutputOpenSearchAliasStreamCreatePost,
} from './outputOpenSearchAlias/outputOpenSearchAliasStreamCreatePost.operation';
import {
	description as descriptionOutputOpenSearchAliasStreamDeleteDelete,
	execute as executeOutputOpenSearchAliasStreamDeleteDelete,
} from './outputOpenSearchAlias/outputOpenSearchAliasStreamDeleteDelete.operation';
import {
	description as descriptionOutputOpenSearchAliasStreamListGet,
	execute as executeOutputOpenSearchAliasStreamListGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasStreamListGet.operation';
import {
	description as descriptionOutputOpenSearchAliasUpdatePut,
	execute as executeOutputOpenSearchAliasUpdatePut,
} from './outputOpenSearchAlias/outputOpenSearchAliasUpdatePut.operation';
import {
	description as descriptionOutputOpenSearchAliasUrlGet,
	execute as executeOutputOpenSearchAliasUrlGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasUrlGet.operation';
import {
	description as descriptionOutputOpenSearchIndexCreatePost,
	execute as executeOutputOpenSearchIndexCreatePost,
} from './outputOpenSearchIndex/outputOpenSearchIndexCreatePost.operation';
import {
	description as descriptionOutputOpenSearchIndexDeleteDelete,
	execute as executeOutputOpenSearchIndexDeleteDelete,
} from './outputOpenSearchIndex/outputOpenSearchIndexDeleteDelete.operation';
import {
	description as descriptionOutputOpenSearchIndexGetGet,
	execute as executeOutputOpenSearchIndexGetGet,
} from './outputOpenSearchIndex/outputOpenSearchIndexGetGet.operation';
import {
	description as descriptionOutputOpenSearchIndexListGet,
	execute as executeOutputOpenSearchIndexListGet,
} from './outputOpenSearchIndex/outputOpenSearchIndexListGet.operation';
import {
	description as descriptionOutputOpenSearchIndexUpdatePut,
	execute as executeOutputOpenSearchIndexUpdatePut,
} from './outputOpenSearchIndex/outputOpenSearchIndexUpdatePut.operation';
import {
	description as descriptionOutputOpenSearchIndexUrlGet,
	execute as executeOutputOpenSearchIndexUrlGet,
} from './outputOpenSearchIndex/outputOpenSearchIndexUrlGet.operation';
import {
	description as descriptionOutputOpenSearchOsdCreatePost,
	execute as executeOutputOpenSearchOsdCreatePost,
} from './outputOpenSearchOsd/outputOpenSearchOsdCreatePost.operation';
import {
	description as descriptionOutputOpenSearchOsdDeleteDelete,
	execute as executeOutputOpenSearchOsdDeleteDelete,
} from './outputOpenSearchOsd/outputOpenSearchOsdDeleteDelete.operation';
import {
	description as descriptionOutputOpenSearchOsdGetGet,
	execute as executeOutputOpenSearchOsdGetGet,
} from './outputOpenSearchOsd/outputOpenSearchOsdGetGet.operation';
import {
	description as descriptionOutputOpenSearchOsdListGet,
	execute as executeOutputOpenSearchOsdListGet,
} from './outputOpenSearchOsd/outputOpenSearchOsdListGet.operation';
import {
	description as descriptionOutputOpenSearchOsdUpdatePut,
	execute as executeOutputOpenSearchOsdUpdatePut,
} from './outputOpenSearchOsd/outputOpenSearchOsdUpdatePut.operation';
import {
	description as descriptionOutputOpenSearchOsdUrlGet,
	execute as executeOutputOpenSearchOsdUrlGet,
} from './outputOpenSearchOsd/outputOpenSearchOsdUrlGet.operation';
import {
	description as descriptionRoleCreatePost,
	execute as executeRoleCreatePost,
} from './role/roleCreatePost.operation';
import {
	description as descriptionRoleDeleteDelete,
	execute as executeRoleDeleteDelete,
} from './role/roleDeleteDelete.operation';
import {
	description as descriptionRoleGetGet,
	execute as executeRoleGetGet,
} from './role/roleGetGet.operation';
import {
	description as descriptionRoleListGet,
	execute as executeRoleListGet,
} from './role/roleListGet.operation';
import {
	description as descriptionRoleMemberCreatePost,
	execute as executeRoleMemberCreatePost,
} from './role/roleMemberCreatePost.operation';
import {
	description as descriptionRoleMemberDeleteDelete,
	execute as executeRoleMemberDeleteDelete,
} from './role/roleMemberDeleteDelete.operation';
import {
	description as descriptionRoleMemberGetGet,
	execute as executeRoleMemberGetGet,
} from './role/roleMemberGetGet.operation';
import {
	description as descriptionRoleMemberListGet,
	execute as executeRoleMemberListGet,
} from './role/roleMemberListGet.operation';
import {
	description as descriptionRoleMemberUpdatePut,
	execute as executeRoleMemberUpdatePut,
} from './role/roleMemberUpdatePut.operation';
import {
	description as descriptionRolePermissionAliasCreatePost,
	execute as executeRolePermissionAliasCreatePost,
} from './role/rolePermissionAliasCreatePost.operation';
import {
	description as descriptionRolePermissionDashboardCreatePost,
	execute as executeRolePermissionDashboardCreatePost,
} from './role/rolePermissionDashboardCreatePost.operation';
import {
	description as descriptionRolePermissionDeleteDelete,
	execute as executeRolePermissionDeleteDelete,
} from './role/rolePermissionDeleteDelete.operation';
import {
	description as descriptionRolePermissionGetGet,
	execute as executeRolePermissionGetGet,
} from './role/rolePermissionGetGet.operation';
import {
	description as descriptionRolePermissionIndexCreatePost,
	execute as executeRolePermissionIndexCreatePost,
} from './role/rolePermissionIndexCreatePost.operation';
import {
	description as descriptionRolePermissionListGet,
	execute as executeRolePermissionListGet,
} from './role/rolePermissionListGet.operation';
import {
	description as descriptionRolePermissionOsdCreatePost,
	execute as executeRolePermissionOsdCreatePost,
} from './role/rolePermissionOsdCreatePost.operation';
import {
	description as descriptionRolePermissionStreamCreatePost,
	execute as executeRolePermissionStreamCreatePost,
} from './role/rolePermissionStreamCreatePost.operation';
import {
	description as descriptionRoleUpdatePut,
	execute as executeRoleUpdatePut,
} from './role/roleUpdatePut.operation';
import {
	description as descriptionServiceChangeContactPost,
	execute as executeServiceChangeContactPost,
} from './service/serviceChangeContactPost.operation';
import {
	description as descriptionServiceGetGet,
	execute as executeServiceGetGet,
} from './service/serviceGetGet.operation';
import {
	description as descriptionServiceListGet,
	execute as executeServiceListGet,
} from './service/serviceListGet.operation';
import {
	description as descriptionServiceMetricsGet,
	execute as executeServiceMetricsGet,
} from './service/serviceMetricsGet.operation';
import {
	description as descriptionServiceOperationGetGet,
	execute as executeServiceOperationGetGet,
} from './service/serviceOperationGetGet.operation';
import {
	description as descriptionServiceOperationListGet,
	execute as executeServiceOperationListGet,
} from './service/serviceOperationListGet.operation';
import {
	description as descriptionServiceServiceInfosGet,
	execute as executeServiceServiceInfosGet,
} from './service/serviceServiceInfosGet.operation';
import {
	description as descriptionServiceServiceInfosUpdatePut,
	execute as executeServiceServiceInfosUpdatePut,
} from './service/serviceServiceInfosUpdatePut.operation';
import {
	description as descriptionServiceUpdatePut,
	execute as executeServiceUpdatePut,
} from './service/serviceUpdatePut.operation';
import {
	description as descriptionServiceUrlGet,
	execute as executeServiceUrlGet,
} from './service/serviceUrlGet.operation';
import {
	description as descriptionServiceUserChangePasswordPost,
	execute as executeServiceUserChangePasswordPost,
} from './service/serviceUserChangePasswordPost.operation';
import {
	description as descriptionTokenCreatePost,
	execute as executeTokenCreatePost,
} from './token/tokenCreatePost.operation';
import {
	description as descriptionTokenDeleteDelete,
	execute as executeTokenDeleteDelete,
} from './token/tokenDeleteDelete.operation';
import {
	description as descriptionTokenGetGet,
	execute as executeTokenGetGet,
} from './token/tokenGetGet.operation';
import {
	description as descriptionTokenListGet,
	execute as executeTokenListGet,
} from './token/tokenListGet.operation';

const { description, execute } = createOperationDispatcher(
	'dbaasOperation',
	'ovhCloudDbaas',
	[
	{
		name: 'Attach Index To Alias',
		value: 'outputOpenSearchAliasIndexCreatePost',
		action: 'Attach a OpenSearch index to specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasIndexCreatePost,
		description: descriptionOutputOpenSearchAliasIndexCreatePost,
	},
	{
		name: 'Attach Stream To Alias',
		value: 'outputOpenSearchAliasStreamCreatePost',
		action: 'Attach a Graylog stream to specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasStreamCreatePost,
		description: descriptionOutputOpenSearchAliasStreamCreatePost,
	},
	{
		name: 'Change Service Contact',
		value: 'serviceChangeContactPost',
		action: 'Launch a contact change procedure',
		execute: executeServiceChangeContactPost,
		description: descriptionServiceChangeContactPost,
	},
	{
		name: 'Change User Password',
		value: 'serviceUserChangePasswordPost',
		action: 'Initiate a password change procedure.',
		execute: executeServiceUserChangePasswordPost,
		description: descriptionServiceUserChangePasswordPost,
	},
	{
		name: 'Create Alias Permission',
		value: 'rolePermissionAliasCreatePost',
		action: 'Append a OpenSearch alias permission to role',
		execute: executeRolePermissionAliasCreatePost,
		description: descriptionRolePermissionAliasCreatePost,
	},
	{
		name: 'Create Dashboard Permission',
		value: 'rolePermissionDashboardCreatePost',
		action: 'Append a graylog dashboard permission to role',
		execute: executeRolePermissionDashboardCreatePost,
		description: descriptionRolePermissionDashboardCreatePost,
	},
	{
		name: 'Create Encryption Key',
		value: 'encryptionKeyCreatePost',
		action: 'Add a new encryption key',
		execute: executeEncryptionKeyCreatePost,
		description: descriptionEncryptionKeyCreatePost,
	},
	{
		name: 'Create Graylog Dashboard',
		value: 'outputGraylogDashboardCreatePost',
		action: 'Register a new graylog dashboard',
		execute: executeOutputGraylogDashboardCreatePost,
		description: descriptionOutputGraylogDashboardCreatePost,
	},
	{
		name: 'Create Graylog Stream',
		value: 'outputGraylogStreamCreatePost',
		action: 'Register a new graylog stream',
		execute: executeOutputGraylogStreamCreatePost,
		description: descriptionOutputGraylogStreamCreatePost,
	},
	{
		name: 'Create Index Permission',
		value: 'rolePermissionIndexCreatePost',
		action: 'Append a OpenSearch index permission to role',
		execute: executeRolePermissionIndexCreatePost,
		description: descriptionRolePermissionIndexCreatePost,
	},
	{
		name: 'Create Input',
		value: 'inputCreatePost',
		action: 'Register a new input object',
		execute: executeInputCreatePost,
		description: descriptionInputCreatePost,
	},
	{
		name: 'Create OpenSearch Alias',
		value: 'outputOpenSearchAliasCreatePost',
		action: 'Register a new OpenSearch alias',
		execute: executeOutputOpenSearchAliasCreatePost,
		description: descriptionOutputOpenSearchAliasCreatePost,
	},
	{
		name: 'Create OpenSearch Dashboards',
		value: 'outputOpenSearchOsdCreatePost',
		action: 'Register a new OpenSearch Dashboards instance',
		execute: executeOutputOpenSearchOsdCreatePost,
		description: descriptionOutputOpenSearchOsdCreatePost,
	},
	{
		name: 'Create OpenSearch Index',
		value: 'outputOpenSearchIndexCreatePost',
		action: 'Register a new OpenSearch index',
		execute: executeOutputOpenSearchIndexCreatePost,
		description: descriptionOutputOpenSearchIndexCreatePost,
	},
	{
		name: 'Create Osd Permission',
		value: 'rolePermissionOsdCreatePost',
		action: 'Append a OpenSearch Dashboards permission to role',
		execute: executeRolePermissionOsdCreatePost,
		description: descriptionRolePermissionOsdCreatePost,
	},
	{
		name: 'Create Role',
		value: 'roleCreatePost',
		action: 'Register a new role',
		execute: executeRoleCreatePost,
		description: descriptionRoleCreatePost,
	},
	{
		name: 'Create Role Member',
		value: 'roleMemberCreatePost',
		action: 'Append user into the member list of specified role',
		execute: executeRoleMemberCreatePost,
		description: descriptionRoleMemberCreatePost,
	},
	{
		name: 'Create Stream Alert',
		value: 'outputGraylogStreamAlertCreatePost',
		action: 'Register a new alert on specified graylog stream',
		execute: executeOutputGraylogStreamAlertCreatePost,
		description: descriptionOutputGraylogStreamAlertCreatePost,
	},
	{
		name: 'Create Stream Permission',
		value: 'rolePermissionStreamCreatePost',
		action: 'Append a graylog stream permission to role',
		execute: executeRolePermissionStreamCreatePost,
		description: descriptionRolePermissionStreamCreatePost,
	},
	{
		name: 'Create Stream Rule',
		value: 'outputGraylogStreamRuleCreatePost',
		action: 'Register a new rule on specified graylog stream',
		execute: executeOutputGraylogStreamRuleCreatePost,
		description: descriptionOutputGraylogStreamRuleCreatePost,
	},
	{
		name: 'Create Token',
		value: 'tokenCreatePost',
		action: 'Add a new token',
		execute: executeTokenCreatePost,
		description: descriptionTokenCreatePost,
	},
	{
		name: 'Delete Encryption Key',
		value: 'encryptionKeyDeleteDelete',
		action: 'Delete the specified encryption key',
		execute: executeEncryptionKeyDeleteDelete,
		description: descriptionEncryptionKeyDeleteDelete,
	},
	{
		name: 'Delete Graylog Dashboard',
		value: 'outputGraylogDashboardDeleteDelete',
		action: 'Remove specified graylog dashboard',
		execute: executeOutputGraylogDashboardDeleteDelete,
		description: descriptionOutputGraylogDashboardDeleteDelete,
	},
	{
		name: 'Delete Graylog Stream',
		value: 'outputGraylogStreamDeleteDelete',
		action: 'Remove specified graylog stream',
		execute: executeOutputGraylogStreamDeleteDelete,
		description: descriptionOutputGraylogStreamDeleteDelete,
	},
	{
		name: 'Delete Input',
		value: 'inputDeleteDelete',
		action: 'Remove the specified input object',
		execute: executeInputDeleteDelete,
		description: descriptionInputDeleteDelete,
	},
	{
		name: 'Delete OpenSearch Alias',
		value: 'outputOpenSearchAliasDeleteDelete',
		action: 'Remove specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasDeleteDelete,
		description: descriptionOutputOpenSearchAliasDeleteDelete,
	},
	{
		name: 'Delete OpenSearch Dashboards',
		value: 'outputOpenSearchOsdDeleteDelete',
		action: 'Remove specified OpenSearch Dashboards instance',
		execute: executeOutputOpenSearchOsdDeleteDelete,
		description: descriptionOutputOpenSearchOsdDeleteDelete,
	},
	{
		name: 'Delete OpenSearch Index',
		value: 'outputOpenSearchIndexDeleteDelete',
		action: 'Remove specified OpenSearch index',
		execute: executeOutputOpenSearchIndexDeleteDelete,
		description: descriptionOutputOpenSearchIndexDeleteDelete,
	},
	{
		name: 'Delete Permission',
		value: 'rolePermissionDeleteDelete',
		action: 'Remove specified permission',
		execute: executeRolePermissionDeleteDelete,
		description: descriptionRolePermissionDeleteDelete,
	},
	{
		name: 'Delete Role',
		value: 'roleDeleteDelete',
		action: 'Remove specified role',
		execute: executeRoleDeleteDelete,
		description: descriptionRoleDeleteDelete,
	},
	{
		name: 'Delete Role Member',
		value: 'roleMemberDeleteDelete',
		action: 'Remove user from the member list of specified role',
		execute: executeRoleMemberDeleteDelete,
		description: descriptionRoleMemberDeleteDelete,
	},
	{
		name: 'Delete Stream Alert',
		value: 'outputGraylogStreamAlertDeleteDelete',
		action: 'Remove alert from specified graylog stream',
		execute: executeOutputGraylogStreamAlertDeleteDelete,
		description: descriptionOutputGraylogStreamAlertDeleteDelete,
	},
	{
		name: 'Delete Stream Rule',
		value: 'outputGraylogStreamRuleDeleteDelete',
		action: 'Remove specified graylog stream rule',
		execute: executeOutputGraylogStreamRuleDeleteDelete,
		description: descriptionOutputGraylogStreamRuleDeleteDelete,
	},
	{
		name: 'Delete Stream Subscription',
		value: 'outputGraylogStreamSubscriptionDeleteDelete',
		action: 'Delete a specified subscription targeting a specified graylog stream',
		execute: executeOutputGraylogStreamSubscriptionDeleteDelete,
		description: descriptionOutputGraylogStreamSubscriptionDeleteDelete,
	},
	{
		name: 'Delete Token',
		value: 'tokenDeleteDelete',
		action: 'Delete the specified token',
		execute: executeTokenDeleteDelete,
		description: descriptionTokenDeleteDelete,
	},
	{
		name: 'Detach Index From Alias',
		value: 'outputOpenSearchAliasIndexDeleteDelete',
		action: 'Detach a OpenSearch index from specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasIndexDeleteDelete,
		description: descriptionOutputOpenSearchAliasIndexDeleteDelete,
	},
	{
		name: 'Detach Stream From Alias',
		value: 'outputOpenSearchAliasStreamDeleteDelete',
		action: 'Detach a Graylog stream from specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasStreamDeleteDelete,
		description: descriptionOutputOpenSearchAliasStreamDeleteDelete,
	},
	{
		name: 'Duplicate Graylog Dashboard',
		value: 'outputGraylogDashboardDuplicatePost',
		action: 'Copy all widgets from specified dashboard to a new one',
		execute: executeOutputGraylogDashboardDuplicatePost,
		description: descriptionOutputGraylogDashboardDuplicatePost,
	},
	{
		name: 'End Input',
		value: 'inputEndPost',
		action: 'Schedule the end of specified input',
		execute: executeInputEndPost,
		description: descriptionInputEndPost,
	},
	{
		name: 'Generate Archive Url',
		value: 'outputGraylogStreamArchiveUrlPost',
		action: 'Get a public temporary URL to access the archive',
		execute: executeOutputGraylogStreamArchiveUrlPost,
		description: descriptionOutputGraylogStreamArchiveUrlPost,
	},
	{
		name: 'Generate Input Logs Url',
		value: 'inputLogsUrlPost',
		action: 'Generate a temporary url to retrieve input logs',
		execute: executeInputLogsUrlPost,
		description: descriptionInputLogsUrlPost,
	},
	{
		name: 'Get Alias Urls',
		value: 'outputOpenSearchAliasUrlGet',
		action: 'Returns the list of urls of specified alias',
		execute: executeOutputOpenSearchAliasUrlGet,
		description: descriptionOutputOpenSearchAliasUrlGet,
	},
	{
		name: 'Get Cluster',
		value: 'clusterGetGet',
		action: 'Returns details of an allowed cluster',
		execute: executeClusterGetGet,
		description: descriptionClusterGetGet,
	},
	{
		name: 'Get Cluster Retention',
		value: 'clusterRetentionGetGet',
		action: 'Returns details of a retention',
		execute: executeClusterRetentionGetGet,
		description: descriptionClusterRetentionGetGet,
	},
	{
		name: 'Get Encryption Key',
		value: 'encryptionKeyGetGet',
		action: 'Return details of an encryption key',
		execute: executeEncryptionKeyGetGet,
		description: descriptionEncryptionKeyGetGet,
	},
	{
		name: 'Get Flowgger Configuration',
		value: 'inputConfigurationFlowggerGet',
		action: 'Returns the flowgger configuration',
		execute: executeInputConfigurationFlowggerGet,
		description: descriptionInputConfigurationFlowggerGet,
	},
	{
		name: 'Get Graylog Dashboard',
		value: 'outputGraylogDashboardGetGet',
		action: 'Returns details of specified graylog dashboard',
		execute: executeOutputGraylogDashboardGetGet,
		description: descriptionOutputGraylogDashboardGetGet,
	},
	{
		name: 'Get Graylog Dashboard Urls',
		value: 'outputGraylogDashboardUrlGet',
		action: 'Returns the list of urls of specified graylog dashboard',
		execute: executeOutputGraylogDashboardUrlGet,
		description: descriptionOutputGraylogDashboardUrlGet,
	},
	{
		name: 'Get Graylog Stream',
		value: 'outputGraylogStreamGetGet',
		action: 'Returns details of specified graylog stream',
		execute: executeOutputGraylogStreamGetGet,
		description: descriptionOutputGraylogStreamGetGet,
	},
	{
		name: 'Get Index Urls',
		value: 'outputOpenSearchIndexUrlGet',
		action: 'Returns the list of urls of specified index',
		execute: executeOutputOpenSearchIndexUrlGet,
		description: descriptionOutputOpenSearchIndexUrlGet,
	},
	{
		name: 'Get Input',
		value: 'inputGetGet',
		action: 'Returns details of specified input',
		execute: executeInputGetGet,
		description: descriptionInputGetGet,
	},
	{
		name: 'Get Input Config Test Result',
		value: 'inputConfigtestResultGet',
		action: 'Returns the config test operation result',
		execute: executeInputConfigtestResultGet,
		description: descriptionInputConfigtestResultGet,
	},
	{
		name: 'Get Input Engine',
		value: 'inputEngineGetGet',
		action: 'Returns details of specified input engine',
		execute: executeInputEngineGetGet,
		description: descriptionInputEngineGetGet,
	},
	{
		name: 'Get Input Engine Helper',
		value: 'inputEngineHelperGetGet',
		action: 'Returns details of specified input engine helper',
		execute: executeInputEngineHelperGetGet,
		description: descriptionInputEngineHelperGetGet,
	},
	{
		name: 'Get Input Urls',
		value: 'inputUrlGet',
		action: 'Returns the list of urls of specified input',
		execute: executeInputUrlGet,
		description: descriptionInputUrlGet,
	},
	{
		name: 'Get Logstash Configuration',
		value: 'inputConfigurationLogstashGet',
		action: 'Returns the logstash configuration',
		execute: executeInputConfigurationLogstashGet,
		description: descriptionInputConfigurationLogstashGet,
	},
	{
		name: 'Get OpenSearch Alias',
		value: 'outputOpenSearchAliasGetGet',
		action: 'Returns specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasGetGet,
		description: descriptionOutputOpenSearchAliasGetGet,
	},
	{
		name: 'Get OpenSearch Dashboards',
		value: 'outputOpenSearchOsdGetGet',
		action: 'Returns specified OpenSearch Dashboards instance',
		execute: executeOutputOpenSearchOsdGetGet,
		description: descriptionOutputOpenSearchOsdGetGet,
	},
	{
		name: 'Get OpenSearch Dashboards Urls',
		value: 'outputOpenSearchOsdUrlGet',
		action: 'Returns the list of urls of specified OpenSearch Dashboards',
		execute: executeOutputOpenSearchOsdUrlGet,
		description: descriptionOutputOpenSearchOsdUrlGet,
	},
	{
		name: 'Get OpenSearch Index',
		value: 'outputOpenSearchIndexGetGet',
		action: 'Returns specified OpenSearch index',
		execute: executeOutputOpenSearchIndexGetGet,
		description: descriptionOutputOpenSearchIndexGetGet,
	},
	{
		name: 'Get Permission',
		value: 'rolePermissionGetGet',
		action: 'Returns details of specified permission',
		execute: executeRolePermissionGetGet,
		description: descriptionRolePermissionGetGet,
	},
	{
		name: 'Get Role',
		value: 'roleGetGet',
		action: 'Returns details of specified role',
		execute: executeRoleGetGet,
		description: descriptionRoleGetGet,
	},
	{
		name: 'Get Role Member',
		value: 'roleMemberGetGet',
		action: 'Returns the member metadata',
		execute: executeRoleMemberGetGet,
		description: descriptionRoleMemberGetGet,
	},
	{
		name: 'Get Service',
		value: 'serviceGetGet',
		action: 'Returns the service object of connected identity.',
		execute: executeServiceGetGet,
		description: descriptionServiceGetGet,
	},
	{
		name: 'Get Service Infos',
		value: 'serviceServiceInfosGet',
		action: 'Get service information',
		execute: executeServiceServiceInfosGet,
		description: descriptionServiceServiceInfosGet,
	},
	{
		name: 'Get Service Metrics',
		value: 'serviceMetricsGet',
		action: 'Returns Metrics credentials',
		execute: executeServiceMetricsGet,
		description: descriptionServiceMetricsGet,
	},
	{
		name: 'Get Service Operation',
		value: 'serviceOperationGetGet',
		action: 'Returns details of specified operation',
		execute: executeServiceOperationGetGet,
		description: descriptionServiceOperationGetGet,
	},
	{
		name: 'Get Service Urls',
		value: 'serviceUrlGet',
		action: 'Returns platform useful urls',
		execute: executeServiceUrlGet,
		description: descriptionServiceUrlGet,
	},
	{
		name: 'Get Stream Alert',
		value: 'outputGraylogStreamAlertGetGet',
		action: 'Returns details of specified graylog stream alert',
		execute: executeOutputGraylogStreamAlertGetGet,
		description: descriptionOutputGraylogStreamAlertGetGet,
	},
	{
		name: 'Get Stream Archive',
		value: 'outputGraylogStreamArchiveGetGet',
		action: 'Returns details of specified archive',
		execute: executeOutputGraylogStreamArchiveGetGet,
		description: descriptionOutputGraylogStreamArchiveGetGet,
	},
	{
		name: 'Get Stream Rule',
		value: 'outputGraylogStreamRuleGetGet',
		action: 'Returns details of specified graylog stream rule',
		execute: executeOutputGraylogStreamRuleGetGet,
		description: descriptionOutputGraylogStreamRuleGetGet,
	},
	{
		name: 'Get Stream Subscription',
		value: 'outputGraylogStreamSubscriptionGetGet',
		action: 'Returns details of specified graylog stream subscription',
		execute: executeOutputGraylogStreamSubscriptionGetGet,
		description: descriptionOutputGraylogStreamSubscriptionGetGet,
	},
	{
		name: 'Get Stream Urls',
		value: 'outputGraylogStreamUrlGet',
		action: 'Returns the list of urls of specified graylog stream',
		execute: executeOutputGraylogStreamUrlGet,
		description: descriptionOutputGraylogStreamUrlGet,
	},
	{
		name: 'Get Token',
		value: 'tokenGetGet',
		action: 'Returns the specified token',
		execute: executeTokenGetGet,
		description: descriptionTokenGetGet,
	},
	{
		name: 'List Alias Indexes',
		value: 'outputOpenSearchAliasIndexListGet',
		action: 'Returns the list of OpenSearch indexes attached to specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasIndexListGet,
		description: descriptionOutputOpenSearchAliasIndexListGet,
	},
	{
		name: 'List Alias Streams',
		value: 'outputOpenSearchAliasStreamListGet',
		action: 'Returns the list of Graylog streams attached to specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasStreamListGet,
		description: descriptionOutputOpenSearchAliasStreamListGet,
	},
	{
		name: 'List Archive Encryption Keys',
		value: 'outputGraylogStreamArchiveEncryptionKeyListGet',
		action: 'Get the list of encryption keys used to encrypt the archive',
		execute: executeOutputGraylogStreamArchiveEncryptionKeyListGet,
		description: descriptionOutputGraylogStreamArchiveEncryptionKeyListGet,
	},
	{
		name: 'List Cluster Retentions',
		value: 'clusterRetentionListGet',
		action: 'List all the retention ID available for a given cluster',
		execute: executeClusterRetentionListGet,
		description: descriptionClusterRetentionListGet,
	},
	{
		name: 'List Clusters',
		value: 'clusterListGet',
		action: 'Returns the list of allowed cluster',
		execute: executeClusterListGet,
		description: descriptionClusterListGet,
	},
	{
		name: 'List Encryption Keys',
		value: 'encryptionKeyListGet',
		action: 'Return the list of registred encryption keys',
		execute: executeEncryptionKeyListGet,
		description: descriptionEncryptionKeyListGet,
	},
	{
		name: 'List Graylog Dashboards',
		value: 'outputGraylogDashboardListGet',
		action: 'Returns the list of graylog dashboards',
		execute: executeOutputGraylogDashboardListGet,
		description: descriptionOutputGraylogDashboardListGet,
	},
	{
		name: 'List Graylog Streams',
		value: 'outputGraylogStreamListGet',
		action: 'Returns the list of graylog streams',
		execute: executeOutputGraylogStreamListGet,
		description: descriptionOutputGraylogStreamListGet,
	},
	{
		name: 'List Input Actions',
		value: 'inputActionListGet',
		action: 'Returns actions of specified input',
		execute: executeInputActionListGet,
		description: descriptionInputActionListGet,
	},
	{
		name: 'List Input Engine Helpers',
		value: 'inputEngineHelperListGet',
		action: 'Return the list of available helpers for the given input engine',
		execute: executeInputEngineHelperListGet,
		description: descriptionInputEngineHelperListGet,
	},
	{
		name: 'List Input Engines',
		value: 'inputEngineListGet',
		action: 'Returns the list of available input engines',
		execute: executeInputEngineListGet,
		description: descriptionInputEngineListGet,
	},
	{
		name: 'List Inputs',
		value: 'inputListGet',
		action: 'Returns the list of registered input attached to the logged user',
		execute: executeInputListGet,
		description: descriptionInputListGet,
	},
	{
		name: 'List OpenSearch Aliases',
		value: 'outputOpenSearchAliasListGet',
		action: 'Returns the list of alias for connected user',
		execute: executeOutputOpenSearchAliasListGet,
		description: descriptionOutputOpenSearchAliasListGet,
	},
	{
		name: 'List OpenSearch Dashboards',
		value: 'outputOpenSearchOsdListGet',
		action: 'Returns the list of OpenSearch Dashboards instances',
		execute: executeOutputOpenSearchOsdListGet,
		description: descriptionOutputOpenSearchOsdListGet,
	},
	{
		name: 'List OpenSearch Indexes',
		value: 'outputOpenSearchIndexListGet',
		action: 'Returns the list of OpenSearch indexes',
		execute: executeOutputOpenSearchIndexListGet,
		description: descriptionOutputOpenSearchIndexListGet,
	},
	{
		name: 'List Role Members',
		value: 'roleMemberListGet',
		action: 'Returns the member list of specified role',
		execute: executeRoleMemberListGet,
		description: descriptionRoleMemberListGet,
	},
	{
		name: 'List Role Permissions',
		value: 'rolePermissionListGet',
		action: 'Returns the list of permissions of specified role',
		execute: executeRolePermissionListGet,
		description: descriptionRolePermissionListGet,
	},
	{
		name: 'List Roles',
		value: 'roleListGet',
		action: 'Returns the list of roles',
		execute: executeRoleListGet,
		description: descriptionRoleListGet,
	},
	{
		name: 'List Service Operations',
		value: 'serviceOperationListGet',
		action: 'Latest operations',
		execute: executeServiceOperationListGet,
		description: descriptionServiceOperationListGet,
	},
	{
		name: 'List Services',
		value: 'serviceListGet',
		action: 'List available services',
		execute: executeServiceListGet,
		description: descriptionServiceListGet,
		default: true,
	},
	{
		name: 'List Stream Alerts',
		value: 'outputGraylogStreamAlertListGet',
		action: 'Returns the list of configured alerts of specified graylog stream',
		execute: executeOutputGraylogStreamAlertListGet,
		description: descriptionOutputGraylogStreamAlertListGet,
	},
	{
		name: 'List Stream Archives',
		value: 'outputGraylogStreamArchiveListGet',
		action: 'Returns the list of archives',
		execute: executeOutputGraylogStreamArchiveListGet,
		description: descriptionOutputGraylogStreamArchiveListGet,
	},
	{
		name: 'List Stream Rules',
		value: 'outputGraylogStreamRuleListGet',
		action: 'Returns the list of rules of specified graylog stream',
		execute: executeOutputGraylogStreamRuleListGet,
		description: descriptionOutputGraylogStreamRuleListGet,
	},
	{
		name: 'List Stream Subscriptions',
		value: 'outputGraylogStreamSubscriptionListGet',
		action: 'Returns the list of subscriptions targeting a specified graylog stream',
		execute: executeOutputGraylogStreamSubscriptionListGet,
		description: descriptionOutputGraylogStreamSubscriptionListGet,
	},
	{
		name: 'List Tokens',
		value: 'tokenListGet',
		action: 'Returns the list of service tokens',
		execute: executeTokenListGet,
		description: descriptionTokenListGet,
	},
	{
		name: 'Restart Input',
		value: 'inputRestartPost',
		action: 'Schedule the restart of specified input',
		execute: executeInputRestartPost,
		description: descriptionInputRestartPost,
	},
	{
		name: 'Start Input',
		value: 'inputStartPost',
		action: 'Schedule the start of specified input',
		execute: executeInputStartPost,
		description: descriptionInputStartPost,
	},
	{
		name: 'Test Input Configuration',
		value: 'inputConfigtestPost',
		action: 'Validate configuration of specified input',
		execute: executeInputConfigtestPost,
		description: descriptionInputConfigtestPost,
	},
	{
		name: 'Update Cluster',
		value: 'clusterUpdatePut',
		action: 'Update details of an allowed cluster',
		execute: executeClusterUpdatePut,
		description: descriptionClusterUpdatePut,
	},
	{
		name: 'Update Flowgger Configuration',
		value: 'inputConfigurationFlowggerUpdatePut',
		action: 'Update the flowgger configuration',
		execute: executeInputConfigurationFlowggerUpdatePut,
		description: descriptionInputConfigurationFlowggerUpdatePut,
	},
	{
		name: 'Update Graylog Dashboard',
		value: 'outputGraylogDashboardUpdatePut',
		action: 'Update information of specified graylog dashboard',
		execute: executeOutputGraylogDashboardUpdatePut,
		description: descriptionOutputGraylogDashboardUpdatePut,
	},
	{
		name: 'Update Graylog Stream',
		value: 'outputGraylogStreamUpdatePut',
		action: 'Update information of specified graylog stream',
		execute: executeOutputGraylogStreamUpdatePut,
		description: descriptionOutputGraylogStreamUpdatePut,
	},
	{
		name: 'Update Input',
		value: 'inputUpdatePut',
		action: 'Update information of specified input object',
		execute: executeInputUpdatePut,
		description: descriptionInputUpdatePut,
	},
	{
		name: 'Update Logstash Configuration',
		value: 'inputConfigurationLogstashUpdatePut',
		action: 'Update the logstash configuration',
		execute: executeInputConfigurationLogstashUpdatePut,
		description: descriptionInputConfigurationLogstashUpdatePut,
	},
	{
		name: 'Update OpenSearch Alias',
		value: 'outputOpenSearchAliasUpdatePut',
		action: 'Update specified OpenSearch alias',
		execute: executeOutputOpenSearchAliasUpdatePut,
		description: descriptionOutputOpenSearchAliasUpdatePut,
	},
	{
		name: 'Update OpenSearch Dashboards',
		value: 'outputOpenSearchOsdUpdatePut',
		action: 'Update specified OpenSearch Dashboards instance',
		execute: executeOutputOpenSearchOsdUpdatePut,
		description: descriptionOutputOpenSearchOsdUpdatePut,
	},
	{
		name: 'Update OpenSearch Index',
		value: 'outputOpenSearchIndexUpdatePut',
		action: 'Update specified OpenSearch index',
		execute: executeOutputOpenSearchIndexUpdatePut,
		description: descriptionOutputOpenSearchIndexUpdatePut,
	},
	{
		name: 'Update Role',
		value: 'roleUpdatePut',
		action: 'Update information of specified role',
		execute: executeRoleUpdatePut,
		description: descriptionRoleUpdatePut,
	},
	{
		name: 'Update Role Member',
		value: 'roleMemberUpdatePut',
		action: 'Update the member metadata',
		execute: executeRoleMemberUpdatePut,
		description: descriptionRoleMemberUpdatePut,
	},
	{
		name: 'Update Service',
		value: 'serviceUpdatePut',
		action: 'Update the service properties',
		execute: executeServiceUpdatePut,
		description: descriptionServiceUpdatePut,
	},
	{
		name: 'Update Service Infos',
		value: 'serviceServiceInfosUpdatePut',
		action: 'Update service information',
		execute: executeServiceServiceInfosUpdatePut,
		description: descriptionServiceServiceInfosUpdatePut,
	},
	{
		name: 'Update Stream Alert',
		value: 'outputGraylogStreamAlertUpdatePut',
		action: 'Update alert information of specified graylog stream',
		execute: executeOutputGraylogStreamAlertUpdatePut,
		description: descriptionOutputGraylogStreamAlertUpdatePut,
	},
	],
);

export { description, execute };
