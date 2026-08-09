import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeDeleteMsServicesserviceNAccountuserPrinMfaDelete,
	description as descriptionDeleteMsServicesserviceNAccountuserPrinMfaDelete,
} from './deleteMsServicesserviceNAccountuserPrinMfaDelete.operation';
import {
	execute as executeDeleteMsServicesserviceNAccountuserPrinSyncDelete,
	description as descriptionDeleteMsServicesserviceNAccountuserPrinSyncDelete,
} from './deleteMsServicesserviceNAccountuserPrinSyncDelete.operation';
import {
	execute as executeDeleteMsServicesserviceNSyncDelete,
	description as descriptionDeleteMsServicesserviceNSyncDelete,
} from './deleteMsServicesserviceNSyncDelete.operation';
import {
	execute as executeDeleteMsServicesserviceNUpnSuffixsuffixDelete,
	description as descriptionDeleteMsServicesserviceNUpnSuffixsuffixDelete,
} from './deleteMsServicesserviceNUpnSuffixsuffixDelete.operation';
import {
	execute as executeGetMsServicesserviceNAccountGet,
	description as descriptionGetMsServicesserviceNAccountGet,
} from './getMsServicesserviceNAccountGet.operation';
import {
	execute as executeGetMsServicesserviceNAccountuserPrinExchangeGet,
	description as descriptionGetMsServicesserviceNAccountuserPrinExchangeGet,
} from './getMsServicesserviceNAccountuserPrinExchangeGet.operation';
import {
	execute as executeGetMsServicesserviceNAccountuserPrinGet,
	description as descriptionGetMsServicesserviceNAccountuserPrinGet,
} from './getMsServicesserviceNAccountuserPrinGet.operation';
import {
	execute as executeGetMsServicesserviceNAccountuserPrinMfaGet,
	description as descriptionGetMsServicesserviceNAccountuserPrinMfaGet,
} from './getMsServicesserviceNAccountuserPrinMfaGet.operation';
import {
	execute as executeGetMsServicesserviceNAccountuserPrinSharepointGet,
	description as descriptionGetMsServicesserviceNAccountuserPrinSharepointGet,
} from './getMsServicesserviceNAccountuserPrinSharepointGet.operation';
import {
	execute as executeGetMsServicesserviceNAccountuserPrinSyncGet,
	description as descriptionGetMsServicesserviceNAccountuserPrinSyncGet,
} from './getMsServicesserviceNAccountuserPrinSyncGet.operation';
import {
	execute as executeGetMsServicesserviceNExchangeBillingMigratedGet,
	description as descriptionGetMsServicesserviceNExchangeBillingMigratedGet,
} from './getMsServicesserviceNExchangeBillingMigratedGet.operation';
import {
	execute as executeGetMsServicesserviceNExchangeGet,
	description as descriptionGetMsServicesserviceNExchangeGet,
} from './getMsServicesserviceNExchangeGet.operation';
import {
	execute as executeGetMsServicesserviceNExchangeTaskGet,
	description as descriptionGetMsServicesserviceNExchangeTaskGet,
} from './getMsServicesserviceNExchangeTaskGet.operation';
import {
	execute as executeGetMsServicesserviceNExchangeTaskidGet,
	description as descriptionGetMsServicesserviceNExchangeTaskidGet,
} from './getMsServicesserviceNExchangeTaskidGet.operation';
import {
	execute as executeGetMsServicesserviceNSharepointBillingMigratedGet,
	description as descriptionGetMsServicesserviceNSharepointBillingMigratedGet,
} from './getMsServicesserviceNSharepointBillingMigratedGet.operation';
import {
	execute as executeGetMsServicesserviceNSharepointGet,
	description as descriptionGetMsServicesserviceNSharepointGet,
} from './getMsServicesserviceNSharepointGet.operation';
import {
	execute as executeGetMsServicesserviceNSharepointLicenseGet,
	description as descriptionGetMsServicesserviceNSharepointLicenseGet,
} from './getMsServicesserviceNSharepointLicenseGet.operation';
import {
	execute as executeGetMsServicesserviceNSharepointTaskGet,
	description as descriptionGetMsServicesserviceNSharepointTaskGet,
} from './getMsServicesserviceNSharepointTaskGet.operation';
import {
	execute as executeGetMsServicesserviceNSharepointTaskidGet,
	description as descriptionGetMsServicesserviceNSharepointTaskidGet,
} from './getMsServicesserviceNSharepointTaskidGet.operation';
import {
	execute as executeGetMsServicesserviceNSyncClientSoftwareURLGet,
	description as descriptionGetMsServicesserviceNSyncClientSoftwareURLGet,
} from './getMsServicesserviceNSyncClientSoftwareURLGet.operation';
import {
	execute as executeGetMsServicesserviceNSyncGet,
	description as descriptionGetMsServicesserviceNSyncGet,
} from './getMsServicesserviceNSyncGet.operation';
import {
	execute as executeGetMsServicesserviceNSyncLicenseGet,
	description as descriptionGetMsServicesserviceNSyncLicenseGet,
} from './getMsServicesserviceNSyncLicenseGet.operation';
import {
	execute as executeGetMsServicesserviceNUpnSuffixGet,
	description as descriptionGetMsServicesserviceNUpnSuffixGet,
} from './getMsServicesserviceNUpnSuffixGet.operation';
import {
	execute as executeGetMsServicesserviceNUpnSuffixsuffixGet,
	description as descriptionGetMsServicesserviceNUpnSuffixsuffixGet,
} from './getMsServicesserviceNUpnSuffixsuffixGet.operation';
import {
	execute as executeGetMsServicesSharepointdomainGet,
	description as descriptionGetMsServicesSharepointdomainGet,
} from './getMsServicesSharepointdomainGet.operation';
import {
	execute as executeGetMsServicesSharepointdomainServiceInfosGet,
	description as descriptionGetMsServicesSharepointdomainServiceInfosGet,
} from './getMsServicesSharepointdomainServiceInfosGet.operation';
import {
	execute as executeGetMsServicesSharepointGet,
	description as descriptionGetMsServicesSharepointGet,
} from './getMsServicesSharepointGet.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinChangePasswordPost,
	description as descriptionPostMsServicesserviceNAccountuserPrinChangePasswordPost,
} from './postMsServicesserviceNAccountuserPrinChangePasswordPost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinExchangeConfigurePost,
	description as descriptionPostMsServicesserviceNAccountuserPrinExchangeConfigurePost,
} from './postMsServicesserviceNAccountuserPrinExchangeConfigurePost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinMfaDisablePost,
	description as descriptionPostMsServicesserviceNAccountuserPrinMfaDisablePost,
} from './postMsServicesserviceNAccountuserPrinMfaDisablePost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinMfaEnablePost,
	description as descriptionPostMsServicesserviceNAccountuserPrinMfaEnablePost,
} from './postMsServicesserviceNAccountuserPrinMfaEnablePost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinMfaPost,
	description as descriptionPostMsServicesserviceNAccountuserPrinMfaPost,
} from './postMsServicesserviceNAccountuserPrinMfaPost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinMfaResetPost,
	description as descriptionPostMsServicesserviceNAccountuserPrinMfaResetPost,
} from './postMsServicesserviceNAccountuserPrinMfaResetPost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinSharepointClearSpacePost,
	description as descriptionPostMsServicesserviceNAccountuserPrinSharepointClearSpacePost,
} from './postMsServicesserviceNAccountuserPrinSharepointClearSpacePost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinSharepointConfigurePost,
	description as descriptionPostMsServicesserviceNAccountuserPrinSharepointConfigurePost,
} from './postMsServicesserviceNAccountuserPrinSharepointConfigurePost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinSyncConfigurePost,
	description as descriptionPostMsServicesserviceNAccountuserPrinSyncConfigurePost,
} from './postMsServicesserviceNAccountuserPrinSyncConfigurePost.operation';
import {
	execute as executePostMsServicesserviceNAccountuserPrinSyncPost,
	description as descriptionPostMsServicesserviceNAccountuserPrinSyncPost,
} from './postMsServicesserviceNAccountuserPrinSyncPost.operation';
import {
	execute as executePostMsServicesserviceNChangeContactPost,
	description as descriptionPostMsServicesserviceNChangeContactPost,
} from './postMsServicesserviceNChangeContactPost.operation';
import {
	execute as executePostMsServicesserviceNCreateMfaOnAllUsersPost,
	description as descriptionPostMsServicesserviceNCreateMfaOnAllUsersPost,
} from './postMsServicesserviceNCreateMfaOnAllUsersPost.operation';
import {
	execute as executePostMsServicesserviceNRemoveMfaOnAllUsersPost,
	description as descriptionPostMsServicesserviceNRemoveMfaOnAllUsersPost,
} from './postMsServicesserviceNRemoveMfaOnAllUsersPost.operation';
import {
	execute as executePostMsServicesserviceNSharepointRestoreAdminRightsPost,
	description as descriptionPostMsServicesserviceNSharepointRestoreAdminRightsPost,
} from './postMsServicesserviceNSharepointRestoreAdminRightsPost.operation';
import {
	execute as executePostMsServicesserviceNSyncChangePasswordPost,
	description as descriptionPostMsServicesserviceNSyncChangePasswordPost,
} from './postMsServicesserviceNSyncChangePasswordPost.operation';
import {
	execute as executePostMsServicesserviceNSyncClientSoftwareURLPost,
	description as descriptionPostMsServicesserviceNSyncClientSoftwareURLPost,
} from './postMsServicesserviceNSyncClientSoftwareURLPost.operation';
import {
	execute as executePostMsServicesserviceNUpnSuffixPost,
	description as descriptionPostMsServicesserviceNUpnSuffixPost,
} from './postMsServicesserviceNUpnSuffixPost.operation';
import {
	execute as executePutMsServicesserviceNAccountuserPrinExchangePut,
	description as descriptionPutMsServicesserviceNAccountuserPrinExchangePut,
} from './putMsServicesserviceNAccountuserPrinExchangePut.operation';
import {
	execute as executePutMsServicesserviceNAccountuserPrinPut,
	description as descriptionPutMsServicesserviceNAccountuserPrinPut,
} from './putMsServicesserviceNAccountuserPrinPut.operation';
import {
	execute as executePutMsServicesserviceNAccountuserPrinSharepointPut,
	description as descriptionPutMsServicesserviceNAccountuserPrinSharepointPut,
} from './putMsServicesserviceNAccountuserPrinSharepointPut.operation';
import {
	execute as executePutMsServicesserviceNExchangePut,
	description as descriptionPutMsServicesserviceNExchangePut,
} from './putMsServicesserviceNExchangePut.operation';
import {
	execute as executePutMsServicesserviceNSharepointPut,
	description as descriptionPutMsServicesserviceNSharepointPut,
} from './putMsServicesserviceNSharepointPut.operation';
import {
	execute as executePutMsServicesSharepointdomainServiceInfosPut,
	description as descriptionPutMsServicesSharepointdomainServiceInfosPut,
} from './putMsServicesSharepointdomainServiceInfosPut.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'msServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName ChangePassword',
					value: 'postMsServicesserviceNAccountuserPrinChangePasswordPost',
					action: 'Change account password',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Exchange Configure',
					value: 'postMsServicesserviceNAccountuserPrinExchangeConfigurePost',
					action: 'Configure mailbox to be operational',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Mfa',
					value: 'postMsServicesserviceNAccountuserPrinMfaPost',
					action: 'Create Multi Factor Authentication for this account',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Mfa Disable',
					value: 'postMsServicesserviceNAccountuserPrinMfaDisablePost',
					action: 'Disable Multi Factor Authentication for a period of time',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Mfa Enable',
					value: 'postMsServicesserviceNAccountuserPrinMfaEnablePost',
					action: 'Enable Mfa (enabled by default when created)',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Mfa Reset',
					value: 'postMsServicesserviceNAccountuserPrinMfaResetPost',
					action: 'Reset Multi Factor Authentication status for this account',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Sharepoint ClearSpace',
					value: 'postMsServicesserviceNAccountuserPrinSharepointClearSpacePost',
					action: 'On-demand MySite clearance',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Sharepoint Configure',
					value: 'postMsServicesserviceNAccountuserPrinSharepointConfigurePost',
					action: 'Configure sharepoint account to be operational',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Sync',
					value: 'postMsServicesserviceNAccountuserPrinSyncPost',
					action: 'Create new sync account',
				},
				{
					name: 'Create MsServices ServiceName Account UserPrincipalName Sync Configure',
					value: 'postMsServicesserviceNAccountuserPrinSyncConfigurePost',
					action: 'Configure sync account to be operational',
				},
				{
					name: 'Create MsServices ServiceName ChangeContact',
					value: 'postMsServicesserviceNChangeContactPost',
					action: 'Launch a contact change procedure',
				},
				{
					name: 'Create MsServices ServiceName CreateMfaOnAllUsers',
					value: 'postMsServicesserviceNCreateMfaOnAllUsersPost',
					action: 'Create Mfa on all accounts.',
				},
				{
					name: 'Create MsServices ServiceName RemoveMfaOnAllUsers',
					value: 'postMsServicesserviceNRemoveMfaOnAllUsersPost',
					action: 'Remove Mfa on all accounts.',
				},
				{
					name: 'Create MsServices ServiceName Sharepoint RestoreAdminRights',
					value: 'postMsServicesserviceNSharepointRestoreAdminRightsPost',
					action: 'Restore administrator rights',
				},
				{
					name: 'Create MsServices ServiceName Sync ChangePassword',
					value: 'postMsServicesserviceNSyncChangePasswordPost',
					action: 'Change account password',
				},
				{
					name: 'Create MsServices ServiceName Sync ClientSoftwareURL',
					value: 'postMsServicesserviceNSyncClientSoftwareURLPost',
					action: 'Generate temporary link to ADSync software executable',
				},
				{
					name: 'Create MsServices ServiceName UpnSuffix',
					value: 'postMsServicesserviceNUpnSuffixPost',
					action: 'Create new UPN suffix',
				},
				{
					name: 'Delete MsServices ServiceName Account UserPrincipalName Mfa',
					value: 'deleteMsServicesserviceNAccountuserPrinMfaDelete',
					action: 'Delete Multi Factor Authentication feature for this account',
				},
				{
					name: 'Delete MsServices ServiceName Account UserPrincipalName Sync',
					value: 'deleteMsServicesserviceNAccountuserPrinSyncDelete',
					action: 'Delete sync account',
				},
				{
					name: 'Delete MsServices ServiceName Sync',
					value: 'deleteMsServicesserviceNSyncDelete',
					action: 'Delete sync service',
				},
				{
					name: 'Delete MsServices ServiceName UpnSuffix Suffix',
					value: 'deleteMsServicesserviceNUpnSuffixsuffixDelete',
					action: 'Delete existing UPN suffix',
				},
				{
					name: 'Get MsServices ServiceName Account',
					value: 'getMsServicesserviceNAccountGet',
					action: 'Accounts associated to this Active Directory service',
				},
				{
					name: 'Get MsServices ServiceName Account UserPrincipalName',
					value: 'getMsServicesserviceNAccountuserPrinGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Account UserPrincipalName Exchange',
					value: 'getMsServicesserviceNAccountuserPrinExchangeGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Account UserPrincipalName Mfa',
					value: 'getMsServicesserviceNAccountuserPrinMfaGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Account UserPrincipalName Sharepoint',
					value: 'getMsServicesserviceNAccountuserPrinSharepointGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Account UserPrincipalName Sync',
					value: 'getMsServicesserviceNAccountuserPrinSyncGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Exchange',
					value: 'getMsServicesserviceNExchangeGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Exchange BillingMigrated',
					value: 'getMsServicesserviceNExchangeBillingMigratedGet',
					action: 'Detects billing transition status for the service',
				},
				{
					name: 'Get MsServices ServiceName Exchange Task',
					value: 'getMsServicesserviceNExchangeTaskGet',
					action: 'Pending actions',
				},
				{
					name: 'Get MsServices ServiceName Exchange Task ID',
					value: 'getMsServicesserviceNExchangeTaskidGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Sharepoint',
					value: 'getMsServicesserviceNSharepointGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Sharepoint BillingMigrated',
					value: 'getMsServicesserviceNSharepointBillingMigratedGet',
					action: 'Detects billing transition status for the service',
				},
				{
					name: 'Get MsServices ServiceName Sharepoint License',
					value: 'getMsServicesserviceNSharepointLicenseGet',
					action: 'Get active licenses for specific period of time',
				},
				{
					name: 'Get MsServices ServiceName Sharepoint Task',
					value: 'getMsServicesserviceNSharepointTaskGet',
					action: 'Pending actions',
				},
				{
					name: 'Get MsServices ServiceName Sharepoint Task ID',
					value: 'getMsServicesserviceNSharepointTaskidGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Sync',
					value: 'getMsServicesserviceNSyncGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Sync ClientSoftwareURL',
					value: 'getMsServicesserviceNSyncClientSoftwareURLGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices ServiceName Sync License',
					value: 'getMsServicesserviceNSyncLicenseGet',
					action: 'Get active licenses for specific period of time',
				},
				{
					name: 'Get MsServices ServiceName UpnSuffix',
					value: 'getMsServicesserviceNUpnSuffixGet',
					action: 'active directory UPN suffix',
				},
				{
					name: 'Get MsServices ServiceName UpnSuffix Suffix',
					value: 'getMsServicesserviceNUpnSuffixsuffixGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices Sharepoint',
					value: 'getMsServicesSharepointGet',
					action: 'List available services',
				},
				{
					name: 'Get MsServices Sharepoint Domain',
					value: 'getMsServicesSharepointdomainGet',
					action: 'Get this object properties',
				},
				{
					name: 'Get MsServices Sharepoint Domain ServiceInfos',
					value: 'getMsServicesSharepointdomainServiceInfosGet',
					action: 'Get service information',
				},
				{
					name: 'Update MsServices ServiceName Account UserPrincipalName',
					value: 'putMsServicesserviceNAccountuserPrinPut',
					action: 'Alter this object properties',
				},
				{
					name: 'Update MsServices ServiceName Account UserPrincipalName Exchange',
					value: 'putMsServicesserviceNAccountuserPrinExchangePut',
					action: 'Alter this object properties',
				},
				{
					name: 'Update MsServices ServiceName Account UserPrincipalName Sharepoint',
					value: 'putMsServicesserviceNAccountuserPrinSharepointPut',
					action: 'Alter this object properties',
				},
				{
					name: 'Update MsServices ServiceName Exchange',
					value: 'putMsServicesserviceNExchangePut',
					action: 'Alter this object properties',
				},
				{
					name: 'Update MsServices ServiceName Sharepoint',
					value: 'putMsServicesserviceNSharepointPut',
					action: 'Alter this object properties',
				},
				{
					name: 'Update MsServices Sharepoint Domain ServiceInfos',
					value: 'putMsServicesSharepointdomainServiceInfosPut',
					action: 'Update service information',
				},
			],
			default: 'deleteMsServicesserviceNAccountuserPrinMfaDelete',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionDeleteMsServicesserviceNAccountuserPrinMfaDelete({
			...displayOptions,
			show: { msServicesOperation: ['deleteMsServicesserviceNAccountuserPrinMfaDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteMsServicesserviceNAccountuserPrinSyncDelete({
			...displayOptions,
			show: { msServicesOperation: ['deleteMsServicesserviceNAccountuserPrinSyncDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteMsServicesserviceNSyncDelete({
			...displayOptions,
			show: { msServicesOperation: ['deleteMsServicesserviceNSyncDelete'] },
		}) as INodeProperties[]),
		...(descriptionDeleteMsServicesserviceNUpnSuffixsuffixDelete({
			...displayOptions,
			show: { msServicesOperation: ['deleteMsServicesserviceNUpnSuffixsuffixDelete'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNAccountGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNAccountGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNAccountuserPrinExchangeGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNAccountuserPrinExchangeGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNAccountuserPrinGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNAccountuserPrinGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNAccountuserPrinMfaGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNAccountuserPrinMfaGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNAccountuserPrinSharepointGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNAccountuserPrinSharepointGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNAccountuserPrinSyncGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNAccountuserPrinSyncGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNExchangeBillingMigratedGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNExchangeBillingMigratedGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNExchangeGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNExchangeGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNExchangeTaskGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNExchangeTaskGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNExchangeTaskidGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNExchangeTaskidGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSharepointBillingMigratedGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSharepointBillingMigratedGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSharepointGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSharepointGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSharepointLicenseGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSharepointLicenseGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSharepointTaskGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSharepointTaskGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSharepointTaskidGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSharepointTaskidGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSyncClientSoftwareURLGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSyncClientSoftwareURLGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSyncGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSyncGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNSyncLicenseGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNSyncLicenseGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNUpnSuffixGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNUpnSuffixGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesserviceNUpnSuffixsuffixGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesserviceNUpnSuffixsuffixGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesSharepointdomainGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesSharepointdomainGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesSharepointdomainServiceInfosGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesSharepointdomainServiceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionGetMsServicesSharepointGet({
			...displayOptions,
			show: { msServicesOperation: ['getMsServicesSharepointGet'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinChangePasswordPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinChangePasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinExchangeConfigurePost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinExchangeConfigurePost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinMfaDisablePost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinMfaDisablePost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinMfaEnablePost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinMfaEnablePost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinMfaPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinMfaPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinMfaResetPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinMfaResetPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinSharepointClearSpacePost({
			...displayOptions,
			show: {
				msServicesOperation: ['postMsServicesserviceNAccountuserPrinSharepointClearSpacePost'],
			},
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinSharepointConfigurePost({
			...displayOptions,
			show: {
				msServicesOperation: ['postMsServicesserviceNAccountuserPrinSharepointConfigurePost'],
			},
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinSyncConfigurePost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinSyncConfigurePost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNAccountuserPrinSyncPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNAccountuserPrinSyncPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNChangeContactPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNChangeContactPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNCreateMfaOnAllUsersPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNCreateMfaOnAllUsersPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNRemoveMfaOnAllUsersPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNRemoveMfaOnAllUsersPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNSharepointRestoreAdminRightsPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNSharepointRestoreAdminRightsPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNSyncChangePasswordPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNSyncChangePasswordPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNSyncClientSoftwareURLPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNSyncClientSoftwareURLPost'] },
		}) as INodeProperties[]),
		...(descriptionPostMsServicesserviceNUpnSuffixPost({
			...displayOptions,
			show: { msServicesOperation: ['postMsServicesserviceNUpnSuffixPost'] },
		}) as INodeProperties[]),
		...(descriptionPutMsServicesserviceNAccountuserPrinExchangePut({
			...displayOptions,
			show: { msServicesOperation: ['putMsServicesserviceNAccountuserPrinExchangePut'] },
		}) as INodeProperties[]),
		...(descriptionPutMsServicesserviceNAccountuserPrinPut({
			...displayOptions,
			show: { msServicesOperation: ['putMsServicesserviceNAccountuserPrinPut'] },
		}) as INodeProperties[]),
		...(descriptionPutMsServicesserviceNAccountuserPrinSharepointPut({
			...displayOptions,
			show: { msServicesOperation: ['putMsServicesserviceNAccountuserPrinSharepointPut'] },
		}) as INodeProperties[]),
		...(descriptionPutMsServicesserviceNExchangePut({
			...displayOptions,
			show: { msServicesOperation: ['putMsServicesserviceNExchangePut'] },
		}) as INodeProperties[]),
		...(descriptionPutMsServicesserviceNSharepointPut({
			...displayOptions,
			show: { msServicesOperation: ['putMsServicesserviceNSharepointPut'] },
		}) as INodeProperties[]),
		...(descriptionPutMsServicesSharepointdomainServiceInfosPut({
			...displayOptions,
			show: { msServicesOperation: ['putMsServicesSharepointdomainServiceInfosPut'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('msServicesOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'deleteMsServicesserviceNAccountuserPrinMfaDelete':
			return await executeDeleteMsServicesserviceNAccountuserPrinMfaDelete.call(this, itemIndex ?? 0);
		case 'deleteMsServicesserviceNAccountuserPrinSyncDelete':
			return await executeDeleteMsServicesserviceNAccountuserPrinSyncDelete.call(this, itemIndex ?? 0);
		case 'deleteMsServicesserviceNSyncDelete':
			return await executeDeleteMsServicesserviceNSyncDelete.call(this, itemIndex ?? 0);
		case 'deleteMsServicesserviceNUpnSuffixsuffixDelete':
			return await executeDeleteMsServicesserviceNUpnSuffixsuffixDelete.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNAccountGet':
			return await executeGetMsServicesserviceNAccountGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNAccountuserPrinExchangeGet':
			return await executeGetMsServicesserviceNAccountuserPrinExchangeGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNAccountuserPrinGet':
			return await executeGetMsServicesserviceNAccountuserPrinGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNAccountuserPrinMfaGet':
			return await executeGetMsServicesserviceNAccountuserPrinMfaGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNAccountuserPrinSharepointGet':
			return await executeGetMsServicesserviceNAccountuserPrinSharepointGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNAccountuserPrinSyncGet':
			return await executeGetMsServicesserviceNAccountuserPrinSyncGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNExchangeBillingMigratedGet':
			return await executeGetMsServicesserviceNExchangeBillingMigratedGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNExchangeGet':
			return await executeGetMsServicesserviceNExchangeGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNExchangeTaskGet':
			return await executeGetMsServicesserviceNExchangeTaskGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNExchangeTaskidGet':
			return await executeGetMsServicesserviceNExchangeTaskidGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSharepointBillingMigratedGet':
			return await executeGetMsServicesserviceNSharepointBillingMigratedGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSharepointGet':
			return await executeGetMsServicesserviceNSharepointGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSharepointLicenseGet':
			return await executeGetMsServicesserviceNSharepointLicenseGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSharepointTaskGet':
			return await executeGetMsServicesserviceNSharepointTaskGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSharepointTaskidGet':
			return await executeGetMsServicesserviceNSharepointTaskidGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSyncClientSoftwareURLGet':
			return await executeGetMsServicesserviceNSyncClientSoftwareURLGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSyncGet':
			return await executeGetMsServicesserviceNSyncGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNSyncLicenseGet':
			return await executeGetMsServicesserviceNSyncLicenseGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNUpnSuffixGet':
			return await executeGetMsServicesserviceNUpnSuffixGet.call(this, itemIndex ?? 0);
		case 'getMsServicesserviceNUpnSuffixsuffixGet':
			return await executeGetMsServicesserviceNUpnSuffixsuffixGet.call(this, itemIndex ?? 0);
		case 'getMsServicesSharepointdomainGet':
			return await executeGetMsServicesSharepointdomainGet.call(this, itemIndex ?? 0);
		case 'getMsServicesSharepointdomainServiceInfosGet':
			return await executeGetMsServicesSharepointdomainServiceInfosGet.call(this, itemIndex ?? 0);
		case 'getMsServicesSharepointGet':
			return await executeGetMsServicesSharepointGet.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNAccountuserPrinChangePasswordPost':
			return await executePostMsServicesserviceNAccountuserPrinChangePasswordPost.call(
				this,
				itemIndex,
			);
		case 'postMsServicesserviceNAccountuserPrinExchangeConfigurePost':
			return await executePostMsServicesserviceNAccountuserPrinExchangeConfigurePost.call(
				this,
				itemIndex,
			);
		case 'postMsServicesserviceNAccountuserPrinMfaDisablePost':
			return await executePostMsServicesserviceNAccountuserPrinMfaDisablePost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNAccountuserPrinMfaEnablePost':
			return await executePostMsServicesserviceNAccountuserPrinMfaEnablePost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNAccountuserPrinMfaPost':
			return await executePostMsServicesserviceNAccountuserPrinMfaPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNAccountuserPrinMfaResetPost':
			return await executePostMsServicesserviceNAccountuserPrinMfaResetPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNAccountuserPrinSharepointClearSpacePost':
			return await executePostMsServicesserviceNAccountuserPrinSharepointClearSpacePost.call(
				this,
				itemIndex,
			);
		case 'postMsServicesserviceNAccountuserPrinSharepointConfigurePost':
			return await executePostMsServicesserviceNAccountuserPrinSharepointConfigurePost.call(
				this,
				itemIndex,
			);
		case 'postMsServicesserviceNAccountuserPrinSyncConfigurePost':
			return await executePostMsServicesserviceNAccountuserPrinSyncConfigurePost.call(
				this,
				itemIndex,
			);
		case 'postMsServicesserviceNAccountuserPrinSyncPost':
			return await executePostMsServicesserviceNAccountuserPrinSyncPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNChangeContactPost':
			return await executePostMsServicesserviceNChangeContactPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNCreateMfaOnAllUsersPost':
			return await executePostMsServicesserviceNCreateMfaOnAllUsersPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNRemoveMfaOnAllUsersPost':
			return await executePostMsServicesserviceNRemoveMfaOnAllUsersPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNSharepointRestoreAdminRightsPost':
			return await executePostMsServicesserviceNSharepointRestoreAdminRightsPost.call(
				this,
				itemIndex,
			);
		case 'postMsServicesserviceNSyncChangePasswordPost':
			return await executePostMsServicesserviceNSyncChangePasswordPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNSyncClientSoftwareURLPost':
			return await executePostMsServicesserviceNSyncClientSoftwareURLPost.call(this, itemIndex ?? 0);
		case 'postMsServicesserviceNUpnSuffixPost':
			return await executePostMsServicesserviceNUpnSuffixPost.call(this, itemIndex ?? 0);
		case 'putMsServicesserviceNAccountuserPrinExchangePut':
			return await executePutMsServicesserviceNAccountuserPrinExchangePut.call(this, itemIndex ?? 0);
		case 'putMsServicesserviceNAccountuserPrinPut':
			return await executePutMsServicesserviceNAccountuserPrinPut.call(this, itemIndex ?? 0);
		case 'putMsServicesserviceNAccountuserPrinSharepointPut':
			return await executePutMsServicesserviceNAccountuserPrinSharepointPut.call(this, itemIndex ?? 0);
		case 'putMsServicesserviceNExchangePut':
			return await executePutMsServicesserviceNExchangePut.call(this, itemIndex ?? 0);
		case 'putMsServicesserviceNSharepointPut':
			return await executePutMsServicesserviceNSharepointPut.call(this, itemIndex ?? 0);
		case 'putMsServicesSharepointdomainServiceInfosPut':
			return await executePutMsServicesSharepointdomainServiceInfosPut.call(this, itemIndex ?? 0);
	}

	throw new Error('Unsupported operation ' + operation);
}
