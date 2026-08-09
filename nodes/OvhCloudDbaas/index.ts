import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeOutputOpenSearchAliasIndexCreatePost,
	description as descriptionOutputOpenSearchAliasIndexCreatePost,
} from './outputOpenSearchAlias/outputOpenSearchAliasIndexCreatePost.operation';
import {
	execute as executeOutputOpenSearchAliasStreamCreatePost,
	description as descriptionOutputOpenSearchAliasStreamCreatePost,
} from './outputOpenSearchAlias/outputOpenSearchAliasStreamCreatePost.operation';
import {
	execute as executeServiceChangeContactPost,
	description as descriptionServiceChangeContactPost,
} from './service/serviceChangeContactPost.operation';
import {
	execute as executeServiceUserChangePasswordPost,
	description as descriptionServiceUserChangePasswordPost,
} from './service/serviceUserChangePasswordPost.operation';
import {
	execute as executeRolePermissionAliasCreatePost,
	description as descriptionRolePermissionAliasCreatePost,
} from './role/rolePermissionAliasCreatePost.operation';
import {
	execute as executeRolePermissionDashboardCreatePost,
	description as descriptionRolePermissionDashboardCreatePost,
} from './role/rolePermissionDashboardCreatePost.operation';
import {
	execute as executeEncryptionKeyCreatePost,
	description as descriptionEncryptionKeyCreatePost,
} from './encryptionKey/encryptionKeyCreatePost.operation';
import {
	execute as executeOutputGraylogDashboardCreatePost,
	description as descriptionOutputGraylogDashboardCreatePost,
} from './outputGraylogDashboard/outputGraylogDashboardCreatePost.operation';
import {
	execute as executeOutputGraylogStreamCreatePost,
	description as descriptionOutputGraylogStreamCreatePost,
} from './outputGraylogStream/outputGraylogStreamCreatePost.operation';
import {
	execute as executeRolePermissionIndexCreatePost,
	description as descriptionRolePermissionIndexCreatePost,
} from './role/rolePermissionIndexCreatePost.operation';
import {
	execute as executeInputCreatePost,
	description as descriptionInputCreatePost,
} from './input/inputCreatePost.operation';
import {
	execute as executeOutputOpenSearchAliasCreatePost,
	description as descriptionOutputOpenSearchAliasCreatePost,
} from './outputOpenSearchAlias/outputOpenSearchAliasCreatePost.operation';
import {
	execute as executeOutputOpenSearchOsdCreatePost,
	description as descriptionOutputOpenSearchOsdCreatePost,
} from './outputOpenSearchOsd/outputOpenSearchOsdCreatePost.operation';
import {
	execute as executeOutputOpenSearchIndexCreatePost,
	description as descriptionOutputOpenSearchIndexCreatePost,
} from './outputOpenSearchIndex/outputOpenSearchIndexCreatePost.operation';
import {
	execute as executeRolePermissionOsdCreatePost,
	description as descriptionRolePermissionOsdCreatePost,
} from './role/rolePermissionOsdCreatePost.operation';
import {
	execute as executeRoleCreatePost,
	description as descriptionRoleCreatePost,
} from './role/roleCreatePost.operation';
import {
	execute as executeRoleMemberCreatePost,
	description as descriptionRoleMemberCreatePost,
} from './role/roleMemberCreatePost.operation';
import {
	execute as executeOutputGraylogStreamAlertCreatePost,
	description as descriptionOutputGraylogStreamAlertCreatePost,
} from './outputGraylogStream/outputGraylogStreamAlertCreatePost.operation';
import {
	execute as executeRolePermissionStreamCreatePost,
	description as descriptionRolePermissionStreamCreatePost,
} from './role/rolePermissionStreamCreatePost.operation';
import {
	execute as executeOutputGraylogStreamRuleCreatePost,
	description as descriptionOutputGraylogStreamRuleCreatePost,
} from './outputGraylogStream/outputGraylogStreamRuleCreatePost.operation';
import {
	execute as executeTokenCreatePost,
	description as descriptionTokenCreatePost,
} from './token/tokenCreatePost.operation';
import {
	execute as executeEncryptionKeyDeleteDelete,
	description as descriptionEncryptionKeyDeleteDelete,
} from './encryptionKey/encryptionKeyDeleteDelete.operation';
import {
	execute as executeOutputGraylogDashboardDeleteDelete,
	description as descriptionOutputGraylogDashboardDeleteDelete,
} from './outputGraylogDashboard/outputGraylogDashboardDeleteDelete.operation';
import {
	execute as executeOutputGraylogStreamDeleteDelete,
	description as descriptionOutputGraylogStreamDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamDeleteDelete.operation';
import {
	execute as executeInputDeleteDelete,
	description as descriptionInputDeleteDelete,
} from './input/inputDeleteDelete.operation';
import {
	execute as executeOutputOpenSearchAliasDeleteDelete,
	description as descriptionOutputOpenSearchAliasDeleteDelete,
} from './outputOpenSearchAlias/outputOpenSearchAliasDeleteDelete.operation';
import {
	execute as executeOutputOpenSearchOsdDeleteDelete,
	description as descriptionOutputOpenSearchOsdDeleteDelete,
} from './outputOpenSearchOsd/outputOpenSearchOsdDeleteDelete.operation';
import {
	execute as executeOutputOpenSearchIndexDeleteDelete,
	description as descriptionOutputOpenSearchIndexDeleteDelete,
} from './outputOpenSearchIndex/outputOpenSearchIndexDeleteDelete.operation';
import {
	execute as executeRolePermissionDeleteDelete,
	description as descriptionRolePermissionDeleteDelete,
} from './role/rolePermissionDeleteDelete.operation';
import {
	execute as executeRoleDeleteDelete,
	description as descriptionRoleDeleteDelete,
} from './role/roleDeleteDelete.operation';
import {
	execute as executeRoleMemberDeleteDelete,
	description as descriptionRoleMemberDeleteDelete,
} from './role/roleMemberDeleteDelete.operation';
import {
	execute as executeOutputGraylogStreamAlertDeleteDelete,
	description as descriptionOutputGraylogStreamAlertDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamAlertDeleteDelete.operation';
import {
	execute as executeOutputGraylogStreamRuleDeleteDelete,
	description as descriptionOutputGraylogStreamRuleDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamRuleDeleteDelete.operation';
import {
	execute as executeOutputGraylogStreamSubscriptionDeleteDelete,
	description as descriptionOutputGraylogStreamSubscriptionDeleteDelete,
} from './outputGraylogStream/outputGraylogStreamSubscriptionDeleteDelete.operation';
import {
	execute as executeTokenDeleteDelete,
	description as descriptionTokenDeleteDelete,
} from './token/tokenDeleteDelete.operation';
import {
	execute as executeOutputOpenSearchAliasIndexDeleteDelete,
	description as descriptionOutputOpenSearchAliasIndexDeleteDelete,
} from './outputOpenSearchAlias/outputOpenSearchAliasIndexDeleteDelete.operation';
import {
	execute as executeOutputOpenSearchAliasStreamDeleteDelete,
	description as descriptionOutputOpenSearchAliasStreamDeleteDelete,
} from './outputOpenSearchAlias/outputOpenSearchAliasStreamDeleteDelete.operation';
import {
	execute as executeOutputGraylogDashboardDuplicatePost,
	description as descriptionOutputGraylogDashboardDuplicatePost,
} from './outputGraylogDashboard/outputGraylogDashboardDuplicatePost.operation';
import {
	execute as executeInputEndPost,
	description as descriptionInputEndPost,
} from './input/inputEndPost.operation';
import {
	execute as executeOutputGraylogStreamArchiveUrlPost,
	description as descriptionOutputGraylogStreamArchiveUrlPost,
} from './outputGraylogStream/outputGraylogStreamArchiveUrlPost.operation';
import {
	execute as executeInputLogsUrlPost,
	description as descriptionInputLogsUrlPost,
} from './input/inputLogsUrlPost.operation';
import {
	execute as executeOutputOpenSearchAliasUrlGet,
	description as descriptionOutputOpenSearchAliasUrlGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasUrlGet.operation';
import {
	execute as executeClusterGetGet,
	description as descriptionClusterGetGet,
} from './cluster/clusterGetGet.operation';
import {
	execute as executeClusterRetentionGetGet,
	description as descriptionClusterRetentionGetGet,
} from './cluster/clusterRetentionGetGet.operation';
import {
	execute as executeEncryptionKeyGetGet,
	description as descriptionEncryptionKeyGetGet,
} from './encryptionKey/encryptionKeyGetGet.operation';
import {
	execute as executeInputConfigurationFlowggerGet,
	description as descriptionInputConfigurationFlowggerGet,
} from './input/inputConfigurationFlowggerGet.operation';
import {
	execute as executeOutputGraylogDashboardGetGet,
	description as descriptionOutputGraylogDashboardGetGet,
} from './outputGraylogDashboard/outputGraylogDashboardGetGet.operation';
import {
	execute as executeOutputGraylogDashboardUrlGet,
	description as descriptionOutputGraylogDashboardUrlGet,
} from './outputGraylogDashboard/outputGraylogDashboardUrlGet.operation';
import {
	execute as executeOutputGraylogStreamGetGet,
	description as descriptionOutputGraylogStreamGetGet,
} from './outputGraylogStream/outputGraylogStreamGetGet.operation';
import {
	execute as executeOutputOpenSearchIndexUrlGet,
	description as descriptionOutputOpenSearchIndexUrlGet,
} from './outputOpenSearchIndex/outputOpenSearchIndexUrlGet.operation';
import {
	execute as executeInputGetGet,
	description as descriptionInputGetGet,
} from './input/inputGetGet.operation';
import {
	execute as executeInputConfigtestResultGet,
	description as descriptionInputConfigtestResultGet,
} from './input/inputConfigtestResultGet.operation';
import {
	execute as executeInputEngineGetGet,
	description as descriptionInputEngineGetGet,
} from './input/inputEngineGetGet.operation';
import {
	execute as executeInputEngineHelperGetGet,
	description as descriptionInputEngineHelperGetGet,
} from './input/inputEngineHelperGetGet.operation';
import {
	execute as executeInputUrlGet,
	description as descriptionInputUrlGet,
} from './input/inputUrlGet.operation';
import {
	execute as executeInputConfigurationLogstashGet,
	description as descriptionInputConfigurationLogstashGet,
} from './input/inputConfigurationLogstashGet.operation';
import {
	execute as executeOutputOpenSearchAliasGetGet,
	description as descriptionOutputOpenSearchAliasGetGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasGetGet.operation';
import {
	execute as executeOutputOpenSearchOsdGetGet,
	description as descriptionOutputOpenSearchOsdGetGet,
} from './outputOpenSearchOsd/outputOpenSearchOsdGetGet.operation';
import {
	execute as executeOutputOpenSearchOsdUrlGet,
	description as descriptionOutputOpenSearchOsdUrlGet,
} from './outputOpenSearchOsd/outputOpenSearchOsdUrlGet.operation';
import {
	execute as executeOutputOpenSearchIndexGetGet,
	description as descriptionOutputOpenSearchIndexGetGet,
} from './outputOpenSearchIndex/outputOpenSearchIndexGetGet.operation';
import {
	execute as executeRolePermissionGetGet,
	description as descriptionRolePermissionGetGet,
} from './role/rolePermissionGetGet.operation';
import {
	execute as executeRoleGetGet,
	description as descriptionRoleGetGet,
} from './role/roleGetGet.operation';
import {
	execute as executeRoleMemberGetGet,
	description as descriptionRoleMemberGetGet,
} from './role/roleMemberGetGet.operation';
import {
	execute as executeServiceGetGet,
	description as descriptionServiceGetGet,
} from './service/serviceGetGet.operation';
import {
	execute as executeServiceServiceInfosGet,
	description as descriptionServiceServiceInfosGet,
} from './service/serviceServiceInfosGet.operation';
import {
	execute as executeServiceMetricsGet,
	description as descriptionServiceMetricsGet,
} from './service/serviceMetricsGet.operation';
import {
	execute as executeServiceOperationGetGet,
	description as descriptionServiceOperationGetGet,
} from './service/serviceOperationGetGet.operation';
import {
	execute as executeServiceUrlGet,
	description as descriptionServiceUrlGet,
} from './service/serviceUrlGet.operation';
import {
	execute as executeOutputGraylogStreamAlertGetGet,
	description as descriptionOutputGraylogStreamAlertGetGet,
} from './outputGraylogStream/outputGraylogStreamAlertGetGet.operation';
import {
	execute as executeOutputGraylogStreamArchiveGetGet,
	description as descriptionOutputGraylogStreamArchiveGetGet,
} from './outputGraylogStream/outputGraylogStreamArchiveGetGet.operation';
import {
	execute as executeOutputGraylogStreamRuleGetGet,
	description as descriptionOutputGraylogStreamRuleGetGet,
} from './outputGraylogStream/outputGraylogStreamRuleGetGet.operation';
import {
	execute as executeOutputGraylogStreamSubscriptionGetGet,
	description as descriptionOutputGraylogStreamSubscriptionGetGet,
} from './outputGraylogStream/outputGraylogStreamSubscriptionGetGet.operation';
import {
	execute as executeOutputGraylogStreamUrlGet,
	description as descriptionOutputGraylogStreamUrlGet,
} from './outputGraylogStream/outputGraylogStreamUrlGet.operation';
import {
	execute as executeTokenGetGet,
	description as descriptionTokenGetGet,
} from './token/tokenGetGet.operation';
import {
	execute as executeOutputOpenSearchAliasIndexListGet,
	description as descriptionOutputOpenSearchAliasIndexListGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasIndexListGet.operation';
import {
	execute as executeOutputOpenSearchAliasStreamListGet,
	description as descriptionOutputOpenSearchAliasStreamListGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasStreamListGet.operation';
import {
	execute as executeOutputGraylogStreamArchiveEncryptionKeyListGet,
	description as descriptionOutputGraylogStreamArchiveEncryptionKeyListGet,
} from './outputGraylogStream/outputGraylogStreamArchiveEncryptionKeyListGet.operation';
import {
	execute as executeClusterRetentionListGet,
	description as descriptionClusterRetentionListGet,
} from './cluster/clusterRetentionListGet.operation';
import {
	execute as executeClusterListGet,
	description as descriptionClusterListGet,
} from './cluster/clusterListGet.operation';
import {
	execute as executeEncryptionKeyListGet,
	description as descriptionEncryptionKeyListGet,
} from './encryptionKey/encryptionKeyListGet.operation';
import {
	execute as executeOutputGraylogDashboardListGet,
	description as descriptionOutputGraylogDashboardListGet,
} from './outputGraylogDashboard/outputGraylogDashboardListGet.operation';
import {
	execute as executeOutputGraylogStreamListGet,
	description as descriptionOutputGraylogStreamListGet,
} from './outputGraylogStream/outputGraylogStreamListGet.operation';
import {
	execute as executeInputActionListGet,
	description as descriptionInputActionListGet,
} from './input/inputActionListGet.operation';
import {
	execute as executeInputEngineHelperListGet,
	description as descriptionInputEngineHelperListGet,
} from './input/inputEngineHelperListGet.operation';
import {
	execute as executeInputEngineListGet,
	description as descriptionInputEngineListGet,
} from './input/inputEngineListGet.operation';
import {
	execute as executeInputListGet,
	description as descriptionInputListGet,
} from './input/inputListGet.operation';
import {
	execute as executeOutputOpenSearchAliasListGet,
	description as descriptionOutputOpenSearchAliasListGet,
} from './outputOpenSearchAlias/outputOpenSearchAliasListGet.operation';
import {
	execute as executeOutputOpenSearchOsdListGet,
	description as descriptionOutputOpenSearchOsdListGet,
} from './outputOpenSearchOsd/outputOpenSearchOsdListGet.operation';
import {
	execute as executeOutputOpenSearchIndexListGet,
	description as descriptionOutputOpenSearchIndexListGet,
} from './outputOpenSearchIndex/outputOpenSearchIndexListGet.operation';
import {
	execute as executeRoleMemberListGet,
	description as descriptionRoleMemberListGet,
} from './role/roleMemberListGet.operation';
import {
	execute as executeRolePermissionListGet,
	description as descriptionRolePermissionListGet,
} from './role/rolePermissionListGet.operation';
import {
	execute as executeRoleListGet,
	description as descriptionRoleListGet,
} from './role/roleListGet.operation';
import {
	execute as executeServiceOperationListGet,
	description as descriptionServiceOperationListGet,
} from './service/serviceOperationListGet.operation';
import {
	execute as executeServiceListGet,
	description as descriptionServiceListGet,
} from './service/serviceListGet.operation';
import {
	execute as executeOutputGraylogStreamAlertListGet,
	description as descriptionOutputGraylogStreamAlertListGet,
} from './outputGraylogStream/outputGraylogStreamAlertListGet.operation';
import {
	execute as executeOutputGraylogStreamArchiveListGet,
	description as descriptionOutputGraylogStreamArchiveListGet,
} from './outputGraylogStream/outputGraylogStreamArchiveListGet.operation';
import {
	execute as executeOutputGraylogStreamRuleListGet,
	description as descriptionOutputGraylogStreamRuleListGet,
} from './outputGraylogStream/outputGraylogStreamRuleListGet.operation';
import {
	execute as executeOutputGraylogStreamSubscriptionListGet,
	description as descriptionOutputGraylogStreamSubscriptionListGet,
} from './outputGraylogStream/outputGraylogStreamSubscriptionListGet.operation';
import {
	execute as executeTokenListGet,
	description as descriptionTokenListGet,
} from './token/tokenListGet.operation';
import {
	execute as executeInputRestartPost,
	description as descriptionInputRestartPost,
} from './input/inputRestartPost.operation';
import {
	execute as executeInputStartPost,
	description as descriptionInputStartPost,
} from './input/inputStartPost.operation';
import {
	execute as executeInputConfigtestPost,
	description as descriptionInputConfigtestPost,
} from './input/inputConfigtestPost.operation';
import {
	execute as executeClusterUpdatePut,
	description as descriptionClusterUpdatePut,
} from './cluster/clusterUpdatePut.operation';
import {
	execute as executeInputConfigurationFlowggerUpdatePut,
	description as descriptionInputConfigurationFlowggerUpdatePut,
} from './input/inputConfigurationFlowggerUpdatePut.operation';
import {
	execute as executeOutputGraylogDashboardUpdatePut,
	description as descriptionOutputGraylogDashboardUpdatePut,
} from './outputGraylogDashboard/outputGraylogDashboardUpdatePut.operation';
import {
	execute as executeOutputGraylogStreamUpdatePut,
	description as descriptionOutputGraylogStreamUpdatePut,
} from './outputGraylogStream/outputGraylogStreamUpdatePut.operation';
import {
	execute as executeInputUpdatePut,
	description as descriptionInputUpdatePut,
} from './input/inputUpdatePut.operation';
import {
	execute as executeInputConfigurationLogstashUpdatePut,
	description as descriptionInputConfigurationLogstashUpdatePut,
} from './input/inputConfigurationLogstashUpdatePut.operation';
import {
	execute as executeOutputOpenSearchAliasUpdatePut,
	description as descriptionOutputOpenSearchAliasUpdatePut,
} from './outputOpenSearchAlias/outputOpenSearchAliasUpdatePut.operation';
import {
	execute as executeOutputOpenSearchOsdUpdatePut,
	description as descriptionOutputOpenSearchOsdUpdatePut,
} from './outputOpenSearchOsd/outputOpenSearchOsdUpdatePut.operation';
import {
	execute as executeOutputOpenSearchIndexUpdatePut,
	description as descriptionOutputOpenSearchIndexUpdatePut,
} from './outputOpenSearchIndex/outputOpenSearchIndexUpdatePut.operation';
import {
	execute as executeRoleUpdatePut,
	description as descriptionRoleUpdatePut,
} from './role/roleUpdatePut.operation';
import {
	execute as executeRoleMemberUpdatePut,
	description as descriptionRoleMemberUpdatePut,
} from './role/roleMemberUpdatePut.operation';
import {
	execute as executeServiceUpdatePut,
	description as descriptionServiceUpdatePut,
} from './service/serviceUpdatePut.operation';
import {
	execute as executeServiceServiceInfosUpdatePut,
	description as descriptionServiceServiceInfosUpdatePut,
} from './service/serviceServiceInfosUpdatePut.operation';
import {
	execute as executeOutputGraylogStreamAlertUpdatePut,
	description as descriptionOutputGraylogStreamAlertUpdatePut,
} from './outputGraylogStream/outputGraylogStreamAlertUpdatePut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dbaasOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Attach Index To Alias',
				value: 'outputOpenSearchAliasIndexCreatePost',
				action: 'Attach a OpenSearch index to specified OpenSearch alias',
			},
			{
				name: 'Attach Stream To Alias',
				value: 'outputOpenSearchAliasStreamCreatePost',
				action: 'Attach a Graylog stream to specified OpenSearch alias',
			},
			{
				name: 'Change Service Contact',
				value: 'serviceChangeContactPost',
				action: 'Launch a contact change procedure',
			},
			{
				name: 'Change User Password',
				value: 'serviceUserChangePasswordPost',
				action: 'Initiate a password change procedure.',
			},
			{
				name: 'Create Alias Permission',
				value: 'rolePermissionAliasCreatePost',
				action: 'Append a OpenSearch alias permission to role',
			},
			{
				name: 'Create Dashboard Permission',
				value: 'rolePermissionDashboardCreatePost',
				action: 'Append a graylog dashboard permission to role',
			},
			{
				name: 'Create Encryption Key',
				value: 'encryptionKeyCreatePost',
				action: 'Add a new encryption key',
			},
			{
				name: 'Create Graylog Dashboard',
				value: 'outputGraylogDashboardCreatePost',
				action: 'Register a new graylog dashboard',
			},
			{
				name: 'Create Graylog Stream',
				value: 'outputGraylogStreamCreatePost',
				action: 'Register a new graylog stream',
			},
			{
				name: 'Create Index Permission',
				value: 'rolePermissionIndexCreatePost',
				action: 'Append a OpenSearch index permission to role',
			},
			{
				name: 'Create Input',
				value: 'inputCreatePost',
				action: 'Register a new input object',
			},
			{
				name: 'Create OpenSearch Alias',
				value: 'outputOpenSearchAliasCreatePost',
				action: 'Register a new OpenSearch alias',
			},
			{
				name: 'Create OpenSearch Dashboards',
				value: 'outputOpenSearchOsdCreatePost',
				action: 'Register a new OpenSearch Dashboards instance',
			},
			{
				name: 'Create OpenSearch Index',
				value: 'outputOpenSearchIndexCreatePost',
				action: 'Register a new OpenSearch index',
			},
			{
				name: 'Create Osd Permission',
				value: 'rolePermissionOsdCreatePost',
				action: 'Append a OpenSearch Dashboards permission to role',
			},
			{
				name: 'Create Role',
				value: 'roleCreatePost',
				action: 'Register a new role',
			},
			{
				name: 'Create Role Member',
				value: 'roleMemberCreatePost',
				action: 'Append user into the member list of specified role',
			},
			{
				name: 'Create Stream Alert',
				value: 'outputGraylogStreamAlertCreatePost',
				action: 'Register a new alert on specified graylog stream',
			},
			{
				name: 'Create Stream Permission',
				value: 'rolePermissionStreamCreatePost',
				action: 'Append a graylog stream permission to role',
			},
			{
				name: 'Create Stream Rule',
				value: 'outputGraylogStreamRuleCreatePost',
				action: 'Register a new rule on specified graylog stream',
			},
			{
				name: 'Create Token',
				value: 'tokenCreatePost',
				action: 'Add a new token',
			},
			{
				name: 'Delete Encryption Key',
				value: 'encryptionKeyDeleteDelete',
				action: 'Delete the specified encryption key',
			},
			{
				name: 'Delete Graylog Dashboard',
				value: 'outputGraylogDashboardDeleteDelete',
				action: 'Remove specified graylog dashboard',
			},
			{
				name: 'Delete Graylog Stream',
				value: 'outputGraylogStreamDeleteDelete',
				action: 'Remove specified graylog stream',
			},
			{
				name: 'Delete Input',
				value: 'inputDeleteDelete',
				action: 'Remove the specified input object',
			},
			{
				name: 'Delete OpenSearch Alias',
				value: 'outputOpenSearchAliasDeleteDelete',
				action: 'Remove specified OpenSearch alias',
			},
			{
				name: 'Delete OpenSearch Dashboards',
				value: 'outputOpenSearchOsdDeleteDelete',
				action: 'Remove specified OpenSearch Dashboards instance',
			},
			{
				name: 'Delete OpenSearch Index',
				value: 'outputOpenSearchIndexDeleteDelete',
				action: 'Remove specified OpenSearch index',
			},
			{
				name: 'Delete Permission',
				value: 'rolePermissionDeleteDelete',
				action: 'Remove specified permission',
			},
			{
				name: 'Delete Role',
				value: 'roleDeleteDelete',
				action: 'Remove specified role',
			},
			{
				name: 'Delete Role Member',
				value: 'roleMemberDeleteDelete',
				action: 'Remove user from the member list of specified role',
			},
			{
				name: 'Delete Stream Alert',
				value: 'outputGraylogStreamAlertDeleteDelete',
				action: 'Remove alert from specified graylog stream',
			},
			{
				name: 'Delete Stream Rule',
				value: 'outputGraylogStreamRuleDeleteDelete',
				action: 'Remove specified graylog stream rule',
			},
			{
				name: 'Delete Stream Subscription',
				value: 'outputGraylogStreamSubscriptionDeleteDelete',
				action: 'Delete a specified subscription targeting a specified graylog stream',
			},
			{
				name: 'Delete Token',
				value: 'tokenDeleteDelete',
				action: 'Delete the specified token',
			},
			{
				name: 'Detach Index From Alias',
				value: 'outputOpenSearchAliasIndexDeleteDelete',
				action: 'Detach a OpenSearch index from specified OpenSearch alias',
			},
			{
				name: 'Detach Stream From Alias',
				value: 'outputOpenSearchAliasStreamDeleteDelete',
				action: 'Detach a Graylog stream from specified OpenSearch alias',
			},
			{
				name: 'Duplicate Graylog Dashboard',
				value: 'outputGraylogDashboardDuplicatePost',
				action: 'Copy all widgets from specified dashboard to a new one',
			},
			{
				name: 'End Input',
				value: 'inputEndPost',
				action: 'Schedule the end of specified input',
			},
			{
				name: 'Generate Archive Url',
				value: 'outputGraylogStreamArchiveUrlPost',
				action: 'Get a public temporary URL to access the archive',
			},
			{
				name: 'Generate Input Logs Url',
				value: 'inputLogsUrlPost',
				action: 'Generate a temporary url to retrieve input logs',
			},
			{
				name: 'Get Alias Urls',
				value: 'outputOpenSearchAliasUrlGet',
				action: 'Returns the list of urls of specified alias',
			},
			{
				name: 'Get Cluster',
				value: 'clusterGetGet',
				action: 'Returns details of an allowed cluster',
			},
			{
				name: 'Get Cluster Retention',
				value: 'clusterRetentionGetGet',
				action: 'Returns details of a retention',
			},
			{
				name: 'Get Encryption Key',
				value: 'encryptionKeyGetGet',
				action: 'Return details of an encryption key',
			},
			{
				name: 'Get Flowgger Configuration',
				value: 'inputConfigurationFlowggerGet',
				action: 'Returns the flowgger configuration',
			},
			{
				name: 'Get Graylog Dashboard',
				value: 'outputGraylogDashboardGetGet',
				action: 'Returns details of specified graylog dashboard',
			},
			{
				name: 'Get Graylog Dashboard Urls',
				value: 'outputGraylogDashboardUrlGet',
				action: 'Returns the list of urls of specified graylog dashboard',
			},
			{
				name: 'Get Graylog Stream',
				value: 'outputGraylogStreamGetGet',
				action: 'Returns details of specified graylog stream',
			},
			{
				name: 'Get Index Urls',
				value: 'outputOpenSearchIndexUrlGet',
				action: 'Returns the list of urls of specified index',
			},
			{
				name: 'Get Input',
				value: 'inputGetGet',
				action: 'Returns details of specified input',
			},
			{
				name: 'Get Input Config Test Result',
				value: 'inputConfigtestResultGet',
				action: 'Returns the config test operation result',
			},
			{
				name: 'Get Input Engine',
				value: 'inputEngineGetGet',
				action: 'Returns details of specified input engine',
			},
			{
				name: 'Get Input Engine Helper',
				value: 'inputEngineHelperGetGet',
				action: 'Returns details of specified input engine helper',
			},
			{
				name: 'Get Input Urls',
				value: 'inputUrlGet',
				action: 'Returns the list of urls of specified input',
			},
			{
				name: 'Get Logstash Configuration',
				value: 'inputConfigurationLogstashGet',
				action: 'Returns the logstash configuration',
			},
			{
				name: 'Get OpenSearch Alias',
				value: 'outputOpenSearchAliasGetGet',
				action: 'Returns specified OpenSearch alias',
			},
			{
				name: 'Get OpenSearch Dashboards',
				value: 'outputOpenSearchOsdGetGet',
				action: 'Returns specified OpenSearch Dashboards instance',
			},
			{
				name: 'Get OpenSearch Dashboards Urls',
				value: 'outputOpenSearchOsdUrlGet',
				action: 'Returns the list of urls of specified OpenSearch Dashboards',
			},
			{
				name: 'Get OpenSearch Index',
				value: 'outputOpenSearchIndexGetGet',
				action: 'Returns specified OpenSearch index',
			},
			{
				name: 'Get Permission',
				value: 'rolePermissionGetGet',
				action: 'Returns details of specified permission',
			},
			{
				name: 'Get Role',
				value: 'roleGetGet',
				action: 'Returns details of specified role',
			},
			{
				name: 'Get Role Member',
				value: 'roleMemberGetGet',
				action: 'Returns the member metadata',
			},
			{
				name: 'Get Service',
				value: 'serviceGetGet',
				action: 'Returns the service object of connected identity.',
			},
			{
				name: 'Get Service Infos',
				value: 'serviceServiceInfosGet',
				action: 'Get service information',
			},
			{
				name: 'Get Service Metrics',
				value: 'serviceMetricsGet',
				action: 'Returns Metrics credentials',
			},
			{
				name: 'Get Service Operation',
				value: 'serviceOperationGetGet',
				action: 'Returns details of specified operation',
			},
			{
				name: 'Get Service Urls',
				value: 'serviceUrlGet',
				action: 'Returns platform useful urls',
			},
			{
				name: 'Get Stream Alert',
				value: 'outputGraylogStreamAlertGetGet',
				action: 'Returns details of specified graylog stream alert',
			},
			{
				name: 'Get Stream Archive',
				value: 'outputGraylogStreamArchiveGetGet',
				action: 'Returns details of specified archive',
			},
			{
				name: 'Get Stream Rule',
				value: 'outputGraylogStreamRuleGetGet',
				action: 'Returns details of specified graylog stream rule',
			},
			{
				name: 'Get Stream Subscription',
				value: 'outputGraylogStreamSubscriptionGetGet',
				action: 'Returns details of specified graylog stream subscription',
			},
			{
				name: 'Get Stream Urls',
				value: 'outputGraylogStreamUrlGet',
				action: 'Returns the list of urls of specified graylog stream',
			},
			{
				name: 'Get Token',
				value: 'tokenGetGet',
				action: 'Returns the specified token',
			},
			{
				name: 'List Alias Indexes',
				value: 'outputOpenSearchAliasIndexListGet',
				action: 'Returns the list of OpenSearch indexes attached to specified OpenSearch alias',
			},
			{
				name: 'List Alias Streams',
				value: 'outputOpenSearchAliasStreamListGet',
				action: 'Returns the list of Graylog streams attached to specified OpenSearch alias',
			},
			{
				name: 'List Archive Encryption Keys',
				value: 'outputGraylogStreamArchiveEncryptionKeyListGet',
				action: 'Get the list of encryption keys used to encrypt the archive',
			},
			{
				name: 'List Cluster Retentions',
				value: 'clusterRetentionListGet',
				action: 'List all the retention ID available for a given cluster',
			},
			{
				name: 'List Clusters',
				value: 'clusterListGet',
				action: 'Returns the list of allowed cluster',
			},
			{
				name: 'List Encryption Keys',
				value: 'encryptionKeyListGet',
				action: 'Return the list of registred encryption keys',
			},
			{
				name: 'List Graylog Dashboards',
				value: 'outputGraylogDashboardListGet',
				action: 'Returns the list of graylog dashboards',
			},
			{
				name: 'List Graylog Streams',
				value: 'outputGraylogStreamListGet',
				action: 'Returns the list of graylog streams',
			},
			{
				name: 'List Input Actions',
				value: 'inputActionListGet',
				action: 'Returns actions of specified input',
			},
			{
				name: 'List Input Engine Helpers',
				value: 'inputEngineHelperListGet',
				action: 'Return the list of available helpers for the given input engine',
			},
			{
				name: 'List Input Engines',
				value: 'inputEngineListGet',
				action: 'Returns the list of available input engines',
			},
			{
				name: 'List Inputs',
				value: 'inputListGet',
				action: 'Returns the list of registered input attached to the logged user',
			},
			{
				name: 'List OpenSearch Aliases',
				value: 'outputOpenSearchAliasListGet',
				action: 'Returns the list of alias for connected user',
			},
			{
				name: 'List OpenSearch Dashboards',
				value: 'outputOpenSearchOsdListGet',
				action: 'Returns the list of OpenSearch Dashboards instances',
			},
			{
				name: 'List OpenSearch Indexes',
				value: 'outputOpenSearchIndexListGet',
				action: 'Returns the list of OpenSearch indexes',
			},
			{
				name: 'List Role Members',
				value: 'roleMemberListGet',
				action: 'Returns the member list of specified role',
			},
			{
				name: 'List Role Permissions',
				value: 'rolePermissionListGet',
				action: 'Returns the list of permissions of specified role',
			},
			{
				name: 'List Roles',
				value: 'roleListGet',
				action: 'Returns the list of roles',
			},
			{
				name: 'List Service Operations',
				value: 'serviceOperationListGet',
				action: 'Latest operations',
			},
			{
				name: 'List Services',
				value: 'serviceListGet',
				action: 'List available services',
			},
			{
				name: 'List Stream Alerts',
				value: 'outputGraylogStreamAlertListGet',
				action: 'Returns the list of configured alerts of specified graylog stream',
			},
			{
				name: 'List Stream Archives',
				value: 'outputGraylogStreamArchiveListGet',
				action: 'Returns the list of archives',
			},
			{
				name: 'List Stream Rules',
				value: 'outputGraylogStreamRuleListGet',
				action: 'Returns the list of rules of specified graylog stream',
			},
			{
				name: 'List Stream Subscriptions',
				value: 'outputGraylogStreamSubscriptionListGet',
				action: 'Returns the list of subscriptions targeting a specified graylog stream',
			},
			{
				name: 'List Tokens',
				value: 'tokenListGet',
				action: 'Returns the list of service tokens',
			},
			{
				name: 'Restart Input',
				value: 'inputRestartPost',
				action: 'Schedule the restart of specified input',
			},
			{
				name: 'Start Input',
				value: 'inputStartPost',
				action: 'Schedule the start of specified input',
			},
			{
				name: 'Test Input Configuration',
				value: 'inputConfigtestPost',
				action: 'Validate configuration of specified input',
			},
			{
				name: 'Update Cluster',
				value: 'clusterUpdatePut',
				action: 'Update details of an allowed cluster',
			},
			{
				name: 'Update Flowgger Configuration',
				value: 'inputConfigurationFlowggerUpdatePut',
				action: 'Update the flowgger configuration',
			},
			{
				name: 'Update Graylog Dashboard',
				value: 'outputGraylogDashboardUpdatePut',
				action: 'Update information of specified graylog dashboard',
			},
			{
				name: 'Update Graylog Stream',
				value: 'outputGraylogStreamUpdatePut',
				action: 'Update information of specified graylog stream',
			},
			{
				name: 'Update Input',
				value: 'inputUpdatePut',
				action: 'Update information of specified input object',
			},
			{
				name: 'Update Logstash Configuration',
				value: 'inputConfigurationLogstashUpdatePut',
				action: 'Update the logstash configuration',
			},
			{
				name: 'Update OpenSearch Alias',
				value: 'outputOpenSearchAliasUpdatePut',
				action: 'Update specified OpenSearch alias',
			},
			{
				name: 'Update OpenSearch Dashboards',
				value: 'outputOpenSearchOsdUpdatePut',
				action: 'Update specified OpenSearch Dashboards instance',
			},
			{
				name: 'Update OpenSearch Index',
				value: 'outputOpenSearchIndexUpdatePut',
				action: 'Update specified OpenSearch index',
			},
			{
				name: 'Update Role',
				value: 'roleUpdatePut',
				action: 'Update information of specified role',
			},
			{
				name: 'Update Role Member',
				value: 'roleMemberUpdatePut',
				action: 'Update the member metadata',
			},
			{
				name: 'Update Service',
				value: 'serviceUpdatePut',
				action: 'Update the service properties',
			},
			{
				name: 'Update Service Infos',
				value: 'serviceServiceInfosUpdatePut',
				action: 'Update service information',
			},
			{
				name: 'Update Stream Alert',
				value: 'outputGraylogStreamAlertUpdatePut',
				action: 'Update alert information of specified graylog stream',
			},
			],
			default: 'serviceListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...descriptionOutputOpenSearchAliasIndexCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasIndexCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasStreamCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasStreamCreatePost'] },
		}) as INodeProperties[],
		...descriptionServiceChangeContactPost({
			...displayOptions,
			show: { dbaasOperation: ['serviceChangeContactPost'] },
		}) as INodeProperties[],
		...descriptionServiceUserChangePasswordPost({
			...displayOptions,
			show: { dbaasOperation: ['serviceUserChangePasswordPost'] },
		}) as INodeProperties[],
		...descriptionRolePermissionAliasCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionAliasCreatePost'] },
		}) as INodeProperties[],
		...descriptionRolePermissionDashboardCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionDashboardCreatePost'] },
		}) as INodeProperties[],
		...descriptionEncryptionKeyCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['encryptionKeyCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogDashboardCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogDashboardCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamCreatePost'] },
		}) as INodeProperties[],
		...descriptionRolePermissionIndexCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionIndexCreatePost'] },
		}) as INodeProperties[],
		...descriptionInputCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['inputCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchOsdCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchOsdCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchIndexCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchIndexCreatePost'] },
		}) as INodeProperties[],
		...descriptionRolePermissionOsdCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionOsdCreatePost'] },
		}) as INodeProperties[],
		...descriptionRoleCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['roleCreatePost'] },
		}) as INodeProperties[],
		...descriptionRoleMemberCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['roleMemberCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamAlertCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamAlertCreatePost'] },
		}) as INodeProperties[],
		...descriptionRolePermissionStreamCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionStreamCreatePost'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamRuleCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamRuleCreatePost'] },
		}) as INodeProperties[],
		...descriptionTokenCreatePost({
			...displayOptions,
			show: { dbaasOperation: ['tokenCreatePost'] },
		}) as INodeProperties[],
		...descriptionEncryptionKeyDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['encryptionKeyDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogDashboardDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogDashboardDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionInputDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['inputDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchOsdDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchOsdDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchIndexDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchIndexDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionRolePermissionDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionRoleDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['roleDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionRoleMemberDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['roleMemberDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamAlertDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamAlertDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamRuleDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamRuleDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamSubscriptionDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamSubscriptionDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionTokenDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['tokenDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasIndexDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasIndexDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasStreamDeleteDelete({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasStreamDeleteDelete'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogDashboardDuplicatePost({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogDashboardDuplicatePost'] },
		}) as INodeProperties[],
		...descriptionInputEndPost({
			...displayOptions,
			show: { dbaasOperation: ['inputEndPost'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamArchiveUrlPost({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamArchiveUrlPost'] },
		}) as INodeProperties[],
		...descriptionInputLogsUrlPost({
			...displayOptions,
			show: { dbaasOperation: ['inputLogsUrlPost'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasUrlGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasUrlGet'] },
		}) as INodeProperties[],
		...descriptionClusterGetGet({
			...displayOptions,
			show: { dbaasOperation: ['clusterGetGet'] },
		}) as INodeProperties[],
		...descriptionClusterRetentionGetGet({
			...displayOptions,
			show: { dbaasOperation: ['clusterRetentionGetGet'] },
		}) as INodeProperties[],
		...descriptionEncryptionKeyGetGet({
			...displayOptions,
			show: { dbaasOperation: ['encryptionKeyGetGet'] },
		}) as INodeProperties[],
		...descriptionInputConfigurationFlowggerGet({
			...displayOptions,
			show: { dbaasOperation: ['inputConfigurationFlowggerGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogDashboardGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogDashboardGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogDashboardUrlGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogDashboardUrlGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchIndexUrlGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchIndexUrlGet'] },
		}) as INodeProperties[],
		...descriptionInputGetGet({
			...displayOptions,
			show: { dbaasOperation: ['inputGetGet'] },
		}) as INodeProperties[],
		...descriptionInputConfigtestResultGet({
			...displayOptions,
			show: { dbaasOperation: ['inputConfigtestResultGet'] },
		}) as INodeProperties[],
		...descriptionInputEngineGetGet({
			...displayOptions,
			show: { dbaasOperation: ['inputEngineGetGet'] },
		}) as INodeProperties[],
		...descriptionInputEngineHelperGetGet({
			...displayOptions,
			show: { dbaasOperation: ['inputEngineHelperGetGet'] },
		}) as INodeProperties[],
		...descriptionInputUrlGet({
			...displayOptions,
			show: { dbaasOperation: ['inputUrlGet'] },
		}) as INodeProperties[],
		...descriptionInputConfigurationLogstashGet({
			...displayOptions,
			show: { dbaasOperation: ['inputConfigurationLogstashGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchOsdGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchOsdGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchOsdUrlGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchOsdUrlGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchIndexGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchIndexGetGet'] },
		}) as INodeProperties[],
		...descriptionRolePermissionGetGet({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionGetGet'] },
		}) as INodeProperties[],
		...descriptionRoleGetGet({
			...displayOptions,
			show: { dbaasOperation: ['roleGetGet'] },
		}) as INodeProperties[],
		...descriptionRoleMemberGetGet({
			...displayOptions,
			show: { dbaasOperation: ['roleMemberGetGet'] },
		}) as INodeProperties[],
		...descriptionServiceGetGet({
			...displayOptions,
			show: { dbaasOperation: ['serviceGetGet'] },
		}) as INodeProperties[],
		...descriptionServiceServiceInfosGet({
			...displayOptions,
			show: { dbaasOperation: ['serviceServiceInfosGet'] },
		}) as INodeProperties[],
		...descriptionServiceMetricsGet({
			...displayOptions,
			show: { dbaasOperation: ['serviceMetricsGet'] },
		}) as INodeProperties[],
		...descriptionServiceOperationGetGet({
			...displayOptions,
			show: { dbaasOperation: ['serviceOperationGetGet'] },
		}) as INodeProperties[],
		...descriptionServiceUrlGet({
			...displayOptions,
			show: { dbaasOperation: ['serviceUrlGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamAlertGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamAlertGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamArchiveGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamArchiveGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamRuleGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamRuleGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamSubscriptionGetGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamSubscriptionGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamUrlGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamUrlGet'] },
		}) as INodeProperties[],
		...descriptionTokenGetGet({
			...displayOptions,
			show: { dbaasOperation: ['tokenGetGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasIndexListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasIndexListGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasStreamListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasStreamListGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamArchiveEncryptionKeyListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamArchiveEncryptionKeyListGet'] },
		}) as INodeProperties[],
		...descriptionClusterRetentionListGet({
			...displayOptions,
			show: { dbaasOperation: ['clusterRetentionListGet'] },
		}) as INodeProperties[],
		...descriptionClusterListGet({
			...displayOptions,
			show: { dbaasOperation: ['clusterListGet'] },
		}) as INodeProperties[],
		...descriptionEncryptionKeyListGet({
			...displayOptions,
			show: { dbaasOperation: ['encryptionKeyListGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogDashboardListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogDashboardListGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamListGet'] },
		}) as INodeProperties[],
		...descriptionInputActionListGet({
			...displayOptions,
			show: { dbaasOperation: ['inputActionListGet'] },
		}) as INodeProperties[],
		...descriptionInputEngineHelperListGet({
			...displayOptions,
			show: { dbaasOperation: ['inputEngineHelperListGet'] },
		}) as INodeProperties[],
		...descriptionInputEngineListGet({
			...displayOptions,
			show: { dbaasOperation: ['inputEngineListGet'] },
		}) as INodeProperties[],
		...descriptionInputListGet({
			...displayOptions,
			show: { dbaasOperation: ['inputListGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasListGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchOsdListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchOsdListGet'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchIndexListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchIndexListGet'] },
		}) as INodeProperties[],
		...descriptionRoleMemberListGet({
			...displayOptions,
			show: { dbaasOperation: ['roleMemberListGet'] },
		}) as INodeProperties[],
		...descriptionRolePermissionListGet({
			...displayOptions,
			show: { dbaasOperation: ['rolePermissionListGet'] },
		}) as INodeProperties[],
		...descriptionRoleListGet({
			...displayOptions,
			show: { dbaasOperation: ['roleListGet'] },
		}) as INodeProperties[],
		...descriptionServiceOperationListGet({
			...displayOptions,
			show: { dbaasOperation: ['serviceOperationListGet'] },
		}) as INodeProperties[],
		...descriptionServiceListGet({
			...displayOptions,
			show: { dbaasOperation: ['serviceListGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamAlertListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamAlertListGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamArchiveListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamArchiveListGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamRuleListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamRuleListGet'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamSubscriptionListGet({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamSubscriptionListGet'] },
		}) as INodeProperties[],
		...descriptionTokenListGet({
			...displayOptions,
			show: { dbaasOperation: ['tokenListGet'] },
		}) as INodeProperties[],
		...descriptionInputRestartPost({
			...displayOptions,
			show: { dbaasOperation: ['inputRestartPost'] },
		}) as INodeProperties[],
		...descriptionInputStartPost({
			...displayOptions,
			show: { dbaasOperation: ['inputStartPost'] },
		}) as INodeProperties[],
		...descriptionInputConfigtestPost({
			...displayOptions,
			show: { dbaasOperation: ['inputConfigtestPost'] },
		}) as INodeProperties[],
		...descriptionClusterUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['clusterUpdatePut'] },
		}) as INodeProperties[],
		...descriptionInputConfigurationFlowggerUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['inputConfigurationFlowggerUpdatePut'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogDashboardUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogDashboardUpdatePut'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamUpdatePut'] },
		}) as INodeProperties[],
		...descriptionInputUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['inputUpdatePut'] },
		}) as INodeProperties[],
		...descriptionInputConfigurationLogstashUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['inputConfigurationLogstashUpdatePut'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchAliasUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchAliasUpdatePut'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchOsdUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchOsdUpdatePut'] },
		}) as INodeProperties[],
		...descriptionOutputOpenSearchIndexUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['outputOpenSearchIndexUpdatePut'] },
		}) as INodeProperties[],
		...descriptionRoleUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['roleUpdatePut'] },
		}) as INodeProperties[],
		...descriptionRoleMemberUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['roleMemberUpdatePut'] },
		}) as INodeProperties[],
		...descriptionServiceUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['serviceUpdatePut'] },
		}) as INodeProperties[],
		...descriptionServiceServiceInfosUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['serviceServiceInfosUpdatePut'] },
		}) as INodeProperties[],
		...descriptionOutputGraylogStreamAlertUpdatePut({
			...displayOptions,
			show: { dbaasOperation: ['outputGraylogStreamAlertUpdatePut'] },
		}) as INodeProperties[],
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dbaasOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'outputOpenSearchAliasIndexCreatePost':
			return executeOutputOpenSearchAliasIndexCreatePost.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasStreamCreatePost':
			return executeOutputOpenSearchAliasStreamCreatePost.call(this, itemIndex ?? 0);
		case 'serviceChangeContactPost':
			return executeServiceChangeContactPost.call(this, itemIndex ?? 0);
		case 'serviceUserChangePasswordPost':
			return executeServiceUserChangePasswordPost.call(this, itemIndex ?? 0);
		case 'rolePermissionAliasCreatePost':
			return executeRolePermissionAliasCreatePost.call(this, itemIndex ?? 0);
		case 'rolePermissionDashboardCreatePost':
			return executeRolePermissionDashboardCreatePost.call(this, itemIndex ?? 0);
		case 'encryptionKeyCreatePost':
			return executeEncryptionKeyCreatePost.call(this, itemIndex ?? 0);
		case 'outputGraylogDashboardCreatePost':
			return executeOutputGraylogDashboardCreatePost.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamCreatePost':
			return executeOutputGraylogStreamCreatePost.call(this, itemIndex ?? 0);
		case 'rolePermissionIndexCreatePost':
			return executeRolePermissionIndexCreatePost.call(this, itemIndex ?? 0);
		case 'inputCreatePost':
			return executeInputCreatePost.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasCreatePost':
			return executeOutputOpenSearchAliasCreatePost.call(this, itemIndex ?? 0);
		case 'outputOpenSearchOsdCreatePost':
			return executeOutputOpenSearchOsdCreatePost.call(this, itemIndex ?? 0);
		case 'outputOpenSearchIndexCreatePost':
			return executeOutputOpenSearchIndexCreatePost.call(this, itemIndex ?? 0);
		case 'rolePermissionOsdCreatePost':
			return executeRolePermissionOsdCreatePost.call(this, itemIndex ?? 0);
		case 'roleCreatePost':
			return executeRoleCreatePost.call(this, itemIndex ?? 0);
		case 'roleMemberCreatePost':
			return executeRoleMemberCreatePost.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamAlertCreatePost':
			return executeOutputGraylogStreamAlertCreatePost.call(this, itemIndex ?? 0);
		case 'rolePermissionStreamCreatePost':
			return executeRolePermissionStreamCreatePost.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamRuleCreatePost':
			return executeOutputGraylogStreamRuleCreatePost.call(this, itemIndex ?? 0);
		case 'tokenCreatePost':
			return executeTokenCreatePost.call(this, itemIndex ?? 0);
		case 'encryptionKeyDeleteDelete':
			return executeEncryptionKeyDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputGraylogDashboardDeleteDelete':
			return executeOutputGraylogDashboardDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamDeleteDelete':
			return executeOutputGraylogStreamDeleteDelete.call(this, itemIndex ?? 0);
		case 'inputDeleteDelete':
			return executeInputDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasDeleteDelete':
			return executeOutputOpenSearchAliasDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputOpenSearchOsdDeleteDelete':
			return executeOutputOpenSearchOsdDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputOpenSearchIndexDeleteDelete':
			return executeOutputOpenSearchIndexDeleteDelete.call(this, itemIndex ?? 0);
		case 'rolePermissionDeleteDelete':
			return executeRolePermissionDeleteDelete.call(this, itemIndex ?? 0);
		case 'roleDeleteDelete':
			return executeRoleDeleteDelete.call(this, itemIndex ?? 0);
		case 'roleMemberDeleteDelete':
			return executeRoleMemberDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamAlertDeleteDelete':
			return executeOutputGraylogStreamAlertDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamRuleDeleteDelete':
			return executeOutputGraylogStreamRuleDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamSubscriptionDeleteDelete':
			return executeOutputGraylogStreamSubscriptionDeleteDelete.call(this, itemIndex ?? 0);
		case 'tokenDeleteDelete':
			return executeTokenDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasIndexDeleteDelete':
			return executeOutputOpenSearchAliasIndexDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasStreamDeleteDelete':
			return executeOutputOpenSearchAliasStreamDeleteDelete.call(this, itemIndex ?? 0);
		case 'outputGraylogDashboardDuplicatePost':
			return executeOutputGraylogDashboardDuplicatePost.call(this, itemIndex ?? 0);
		case 'inputEndPost':
			return executeInputEndPost.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamArchiveUrlPost':
			return executeOutputGraylogStreamArchiveUrlPost.call(this, itemIndex ?? 0);
		case 'inputLogsUrlPost':
			return executeInputLogsUrlPost.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasUrlGet':
			return executeOutputOpenSearchAliasUrlGet.call(this, itemIndex ?? 0);
		case 'clusterGetGet':
			return executeClusterGetGet.call(this, itemIndex ?? 0);
		case 'clusterRetentionGetGet':
			return executeClusterRetentionGetGet.call(this, itemIndex ?? 0);
		case 'encryptionKeyGetGet':
			return executeEncryptionKeyGetGet.call(this, itemIndex ?? 0);
		case 'inputConfigurationFlowggerGet':
			return executeInputConfigurationFlowggerGet.call(this, itemIndex ?? 0);
		case 'outputGraylogDashboardGetGet':
			return executeOutputGraylogDashboardGetGet.call(this, itemIndex ?? 0);
		case 'outputGraylogDashboardUrlGet':
			return executeOutputGraylogDashboardUrlGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamGetGet':
			return executeOutputGraylogStreamGetGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchIndexUrlGet':
			return executeOutputOpenSearchIndexUrlGet.call(this, itemIndex ?? 0);
		case 'inputGetGet':
			return executeInputGetGet.call(this, itemIndex ?? 0);
		case 'inputConfigtestResultGet':
			return executeInputConfigtestResultGet.call(this, itemIndex ?? 0);
		case 'inputEngineGetGet':
			return executeInputEngineGetGet.call(this, itemIndex ?? 0);
		case 'inputEngineHelperGetGet':
			return executeInputEngineHelperGetGet.call(this, itemIndex ?? 0);
		case 'inputUrlGet':
			return executeInputUrlGet.call(this, itemIndex ?? 0);
		case 'inputConfigurationLogstashGet':
			return executeInputConfigurationLogstashGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasGetGet':
			return executeOutputOpenSearchAliasGetGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchOsdGetGet':
			return executeOutputOpenSearchOsdGetGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchOsdUrlGet':
			return executeOutputOpenSearchOsdUrlGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchIndexGetGet':
			return executeOutputOpenSearchIndexGetGet.call(this, itemIndex ?? 0);
		case 'rolePermissionGetGet':
			return executeRolePermissionGetGet.call(this, itemIndex ?? 0);
		case 'roleGetGet':
			return executeRoleGetGet.call(this, itemIndex ?? 0);
		case 'roleMemberGetGet':
			return executeRoleMemberGetGet.call(this, itemIndex ?? 0);
		case 'serviceGetGet':
			return executeServiceGetGet.call(this, itemIndex ?? 0);
		case 'serviceServiceInfosGet':
			return executeServiceServiceInfosGet.call(this, itemIndex ?? 0);
		case 'serviceMetricsGet':
			return executeServiceMetricsGet.call(this, itemIndex ?? 0);
		case 'serviceOperationGetGet':
			return executeServiceOperationGetGet.call(this, itemIndex ?? 0);
		case 'serviceUrlGet':
			return executeServiceUrlGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamAlertGetGet':
			return executeOutputGraylogStreamAlertGetGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamArchiveGetGet':
			return executeOutputGraylogStreamArchiveGetGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamRuleGetGet':
			return executeOutputGraylogStreamRuleGetGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamSubscriptionGetGet':
			return executeOutputGraylogStreamSubscriptionGetGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamUrlGet':
			return executeOutputGraylogStreamUrlGet.call(this, itemIndex ?? 0);
		case 'tokenGetGet':
			return executeTokenGetGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasIndexListGet':
			return executeOutputOpenSearchAliasIndexListGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasStreamListGet':
			return executeOutputOpenSearchAliasStreamListGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamArchiveEncryptionKeyListGet':
			return executeOutputGraylogStreamArchiveEncryptionKeyListGet.call(this, itemIndex ?? 0);
		case 'clusterRetentionListGet':
			return executeClusterRetentionListGet.call(this, itemIndex ?? 0);
		case 'clusterListGet':
			return executeClusterListGet.call(this, itemIndex ?? 0);
		case 'encryptionKeyListGet':
			return executeEncryptionKeyListGet.call(this, itemIndex ?? 0);
		case 'outputGraylogDashboardListGet':
			return executeOutputGraylogDashboardListGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamListGet':
			return executeOutputGraylogStreamListGet.call(this, itemIndex ?? 0);
		case 'inputActionListGet':
			return executeInputActionListGet.call(this, itemIndex ?? 0);
		case 'inputEngineHelperListGet':
			return executeInputEngineHelperListGet.call(this, itemIndex ?? 0);
		case 'inputEngineListGet':
			return executeInputEngineListGet.call(this, itemIndex ?? 0);
		case 'inputListGet':
			return executeInputListGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasListGet':
			return executeOutputOpenSearchAliasListGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchOsdListGet':
			return executeOutputOpenSearchOsdListGet.call(this, itemIndex ?? 0);
		case 'outputOpenSearchIndexListGet':
			return executeOutputOpenSearchIndexListGet.call(this, itemIndex ?? 0);
		case 'roleMemberListGet':
			return executeRoleMemberListGet.call(this, itemIndex ?? 0);
		case 'rolePermissionListGet':
			return executeRolePermissionListGet.call(this, itemIndex ?? 0);
		case 'roleListGet':
			return executeRoleListGet.call(this, itemIndex ?? 0);
		case 'serviceOperationListGet':
			return executeServiceOperationListGet.call(this, itemIndex ?? 0);
		case 'serviceListGet':
			return executeServiceListGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamAlertListGet':
			return executeOutputGraylogStreamAlertListGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamArchiveListGet':
			return executeOutputGraylogStreamArchiveListGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamRuleListGet':
			return executeOutputGraylogStreamRuleListGet.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamSubscriptionListGet':
			return executeOutputGraylogStreamSubscriptionListGet.call(this, itemIndex ?? 0);
		case 'tokenListGet':
			return executeTokenListGet.call(this, itemIndex ?? 0);
		case 'inputRestartPost':
			return executeInputRestartPost.call(this, itemIndex ?? 0);
		case 'inputStartPost':
			return executeInputStartPost.call(this, itemIndex ?? 0);
		case 'inputConfigtestPost':
			return executeInputConfigtestPost.call(this, itemIndex ?? 0);
		case 'clusterUpdatePut':
			return executeClusterUpdatePut.call(this, itemIndex ?? 0);
		case 'inputConfigurationFlowggerUpdatePut':
			return executeInputConfigurationFlowggerUpdatePut.call(this, itemIndex ?? 0);
		case 'outputGraylogDashboardUpdatePut':
			return executeOutputGraylogDashboardUpdatePut.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamUpdatePut':
			return executeOutputGraylogStreamUpdatePut.call(this, itemIndex ?? 0);
		case 'inputUpdatePut':
			return executeInputUpdatePut.call(this, itemIndex ?? 0);
		case 'inputConfigurationLogstashUpdatePut':
			return executeInputConfigurationLogstashUpdatePut.call(this, itemIndex ?? 0);
		case 'outputOpenSearchAliasUpdatePut':
			return executeOutputOpenSearchAliasUpdatePut.call(this, itemIndex ?? 0);
		case 'outputOpenSearchOsdUpdatePut':
			return executeOutputOpenSearchOsdUpdatePut.call(this, itemIndex ?? 0);
		case 'outputOpenSearchIndexUpdatePut':
			return executeOutputOpenSearchIndexUpdatePut.call(this, itemIndex ?? 0);
		case 'roleUpdatePut':
			return executeRoleUpdatePut.call(this, itemIndex ?? 0);
		case 'roleMemberUpdatePut':
			return executeRoleMemberUpdatePut.call(this, itemIndex ?? 0);
		case 'serviceUpdatePut':
			return executeServiceUpdatePut.call(this, itemIndex ?? 0);
		case 'serviceServiceInfosUpdatePut':
			return executeServiceServiceInfosUpdatePut.call(this, itemIndex ?? 0);
		case 'outputGraylogStreamAlertUpdatePut':
			return executeOutputGraylogStreamAlertUpdatePut.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudDbaas"`);
}
