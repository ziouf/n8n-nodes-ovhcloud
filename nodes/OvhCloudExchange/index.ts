import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as exchangeExchangeMiscExecute } from './misc/exchangeMisc.operation';
import { execute as exchangeServiceAccountAliasCreateExecute } from './account/ServiceAccountAliasCreate.operation';
import { execute as exchangeServiceAccountAliasDeleteExecute } from './account/ServiceAccountAliasDelete.operation';
import { execute as exchangeServiceAccountAliasGetExecute } from './account/ServiceAccountAliasGet.operation';
import { execute as exchangeServiceAccountAliasListExecute } from './account/ServiceAccountAliasList.operation';
import { execute as exchangeServiceAccountArchiveCreateExecute } from './account/ServiceAccountArchiveCreate.operation';
import { execute as exchangeServiceAccountArchiveDeleteExecute } from './account/ServiceAccountArchiveDelete.operation';
import { execute as exchangeServiceAccountArchiveListExecute } from './account/ServiceAccountArchiveList.operation';
import { execute as exchangeServiceAccountArchiveUpdateExecute } from './account/ServiceAccountArchiveUpdate.operation';
import { execute as exchangeServiceAccountChangePasswordCreateExecute } from './account/ServiceAccountChangePasswordCreate.operation';
import { execute as exchangeServiceAccountCreateExecute } from './account/ServiceAccountCreate.operation';
import { execute as exchangeServiceAccountDeleteExecute } from './account/ServiceAccountDelete.operation';
import { execute as exchangeServiceAccountDiagnosticsCreateExecute } from './account/ServiceAccountDiagnosticsCreate.operation';
import { execute as exchangeServiceAccountDiagnosticsListExecute } from './account/ServiceAccountDiagnosticsList.operation';
import { execute as exchangeServiceAccountExportCreateExecute } from './account/ServiceAccountExportCreate.operation';
import { execute as exchangeServiceAccountExportDeleteExecute } from './account/ServiceAccountExportDelete.operation';
import { execute as exchangeServiceAccountExportListExecute } from './account/ServiceAccountExportList.operation';
import { execute as exchangeServiceAccountExportUrlCreateExecute } from './account/ServiceAccountExportUrlCreate.operation';
import { execute as exchangeServiceAccountExportUrlListExecute } from './account/ServiceAccountExportUrlList.operation';
import { execute as exchangeServiceAccountFullAccessCreateExecute } from './account/ServiceAccountFullAccessCreate.operation';
import { execute as exchangeServiceAccountFullAccessDeleteExecute } from './account/ServiceAccountFullAccessDelete.operation';
import { execute as exchangeServiceAccountFullAccessGetExecute } from './account/ServiceAccountFullAccessGet.operation';
import { execute as exchangeServiceAccountFullAccessListExecute } from './account/ServiceAccountFullAccessList.operation';
import { execute as exchangeServiceAccountGetExecute } from './account/ServiceAccountGet.operation';
import { execute as exchangeServiceAccountListExecute } from './account/ServiceAccountList.operation';
import { execute as exchangeServiceAccountOutlookUrlCreateExecute } from './account/ServiceAccountOutlookUrlCreate.operation';
import { execute as exchangeServiceAccountOutlookUrlListExecute } from './account/ServiceAccountOutlookUrlList.operation';
import { execute as exchangeServiceAccountProtocolListExecute } from './account/ServiceAccountProtocolList.operation';
import { execute as exchangeServiceAccountProtocolUpdateExecute } from './account/ServiceAccountProtocolUpdate.operation';
import { execute as exchangeServiceAccountSendAsCreateExecute } from './account/ServiceAccountSendAsCreate.operation';
import { execute as exchangeServiceAccountSendAsDeleteExecute } from './account/ServiceAccountSendAsDelete.operation';
import { execute as exchangeServiceAccountSendAsGetExecute } from './account/ServiceAccountSendAsGet.operation';
import { execute as exchangeServiceAccountSendAsListExecute } from './account/ServiceAccountSendAsList.operation';
import { execute as exchangeServiceAccountSendOnBehalfToCreateExecute } from './account/ServiceAccountSendOnBehalfToCreate.operation';
import { execute as exchangeServiceAccountSendOnBehalfToDeleteExecute } from './account/ServiceAccountSendOnBehalfToDelete.operation';
import { execute as exchangeServiceAccountSendOnBehalfToGetExecute } from './account/ServiceAccountSendOnBehalfToGet.operation';
import { execute as exchangeServiceAccountSendOnBehalfToListExecute } from './account/ServiceAccountSendOnBehalfToList.operation';
import { execute as exchangeServiceAccountTasksGetExecute } from './account/ServiceAccountTasksGet.operation';
import { execute as exchangeServiceAccountTasksListExecute } from './account/ServiceAccountTasksList.operation';
import { execute as exchangeServiceAccountTerminateCreateExecute } from './account/ServiceAccountTerminateCreate.operation';
import { execute as exchangeServiceAccountUpdateExecute } from './account/ServiceAccountUpdate.operation';
import { execute as exchangeServiceActivateSharepointCreateExecute } from './activateSharepoint/ServiceActivateSharepointCreate.operation';
import { execute as exchangeServiceAuthenticationPolicyGetExecute } from './authenticationPolicy/ServiceAuthenticationPolicyGet.operation';
import { execute as exchangeServiceAuthenticationPolicyListExecute } from './authenticationPolicy/ServiceAuthenticationPolicyList.operation';
import { execute as exchangeServiceAuthorizedIpCreateExecute } from './authorizedIp/ServiceAuthorizedIpCreate.operation';
import { execute as exchangeServiceAuthorizedIpIpDeleteExecute } from './authorizedIp/ServiceAuthorizedIpIpDelete.operation';
import { execute as exchangeServiceAuthorizedIpIpGetExecute } from './authorizedIp/ServiceAuthorizedIpIpGet.operation';
import { execute as exchangeServiceAuthorizedIpIpUpdateExecute } from './authorizedIp/ServiceAuthorizedIpIpUpdate.operation';
import { execute as exchangeServiceAuthorizedIpListExecute } from './authorizedIp/ServiceAuthorizedIpList.operation';
import { execute as exchangeServiceChangeHostnameCreateExecute } from './changeHostname/ServiceChangeHostnameCreate.operation';
import { execute as exchangeServiceCustomIsolationCreateExecute } from './customIsolation/ServiceCustomIsolationCreate.operation';
import { execute as exchangeServiceCustomIsolationDeleteExecute } from './customIsolation/ServiceCustomIsolationDelete.operation';
import { execute as exchangeServiceCustomIsolationGetExecute } from './customIsolation/ServiceCustomIsolationGet.operation';
import { execute as exchangeServiceCustomIsolationListExecute } from './customIsolation/ServiceCustomIsolationList.operation';
import { execute as exchangeServiceDcvEmailsListExecute } from './dcvEmails/ServiceDcvEmailsList.operation';
import { execute as exchangeServiceDeviceClearDeviceCreateExecute } from './device/ServiceDeviceClearDeviceCreate.operation';
import { execute as exchangeServiceDeviceGetExecute } from './device/ServiceDeviceGet.operation';
import { execute as exchangeServiceDeviceListExecute } from './device/ServiceDeviceList.operation';
import { execute as exchangeServiceDeviceUpdateExecute } from './device/ServiceDeviceUpdate.operation';
import { execute as exchangeServiceDomainChangeDefaultSBRUpdateExecute } from './domain/ServiceDomainChangeDefaultSBRUpdate.operation';
import { execute as exchangeServiceDomainCreateExecute } from './domain/ServiceDomainCreate.operation';
import { execute as exchangeServiceDomainDeleteExecute } from './domain/ServiceDomainDelete.operation';
import { execute as exchangeServiceDomainDisclaimerAttributeListExecute } from './domain/ServiceDomainDisclaimerAttributeList.operation';
import { execute as exchangeServiceDomainDisclaimerCreateExecute } from './domain/ServiceDomainDisclaimerCreate.operation';
import { execute as exchangeServiceDomainDisclaimerDeleteExecute } from './domain/ServiceDomainDisclaimerDelete.operation';
import { execute as exchangeServiceDomainDisclaimerListExecute } from './domain/ServiceDomainDisclaimerList.operation';
import { execute as exchangeServiceDomainDisclaimerUpdateExecute } from './domain/ServiceDomainDisclaimerUpdate.operation';
import { execute as exchangeServiceDomainDkimCreateExecute } from './domain/ServiceDomainDkimCreate.operation';
import { execute as exchangeServiceDomainDkimDeleteExecute } from './domain/ServiceDomainDkimDelete.operation';
import { execute as exchangeServiceDomainDkimDisableCreateExecute } from './domain/ServiceDomainDkimDisableCreate.operation';
import { execute as exchangeServiceDomainDkimEnableCreateExecute } from './domain/ServiceDomainDkimEnableCreate.operation';
import { execute as exchangeServiceDomainDkimGetExecute } from './domain/ServiceDomainDkimGet.operation';
import { execute as exchangeServiceDomainDkimListExecute } from './domain/ServiceDomainDkimList.operation';
import { execute as exchangeServiceDomainDkimSelectorListExecute } from './domain/ServiceDomainDkimSelectorList.operation';
import { execute as exchangeServiceDomainGetExecute } from './domain/ServiceDomainGet.operation';
import { execute as exchangeServiceDomainListExecute } from './domain/ServiceDomainList.operation';
import { execute as exchangeServiceDomainUpdateExecute } from './domain/ServiceDomainUpdate.operation';
import { execute as exchangeServiceExternalContactCreateExecute } from './externalContact/ServiceExternalContactCreate.operation';
import { execute as exchangeServiceExternalContactDeleteExecute } from './externalContact/ServiceExternalContactDelete.operation';
import { execute as exchangeServiceExternalContactGetExecute } from './externalContact/ServiceExternalContactGet.operation';
import { execute as exchangeServiceExternalContactListExecute } from './externalContact/ServiceExternalContactList.operation';
import { execute as exchangeServiceExternalContactUpdateExecute } from './externalContact/ServiceExternalContactUpdate.operation';
import { execute as exchangeServiceGetExecute } from './service/ServiceGet.operation';
import { execute as exchangeServiceImpersonatedUserChangePasswordCreateExecute } from './impersonatedUser/ServiceImpersonatedUserChangePasswordCreate.operation';
import { execute as exchangeServiceImpersonatedUserCreateExecute } from './impersonatedUser/ServiceImpersonatedUserCreate.operation';
import { execute as exchangeServiceImpersonatedUserDeleteExecute } from './impersonatedUser/ServiceImpersonatedUserDelete.operation';
import { execute as exchangeServiceImpersonatedUserListExecute } from './impersonatedUser/ServiceImpersonatedUserList.operation';
import { execute as exchangeServiceImpersonationPasswordPolicyListExecute } from './impersonationPasswordPolicy/ServiceImpersonationPasswordPolicyList.operation';
import { execute as exchangeServiceLicenseListExecute } from './license/ServiceLicenseList.operation';
import { execute as exchangeServiceListExecute } from './service/ServiceList.operation';
import { execute as exchangeServiceLogKindGetExecute } from './log/ServiceLogKindGet.operation';
import { execute as exchangeServiceLogKindListExecute } from './log/ServiceLogKindList.operation';
import { execute as exchangeServiceLogSubscriptionCreateExecute } from './log/ServiceLogSubscriptionCreate.operation';
import { execute as exchangeServiceLogSubscriptionDeleteExecute } from './log/ServiceLogSubscriptionDelete.operation';
import { execute as exchangeServiceLogSubscriptionGetExecute } from './log/ServiceLogSubscriptionGet.operation';
import { execute as exchangeServiceLogSubscriptionListExecute } from './log/ServiceLogSubscriptionList.operation';
import { execute as exchangeServiceLogUrlCreateExecute } from './log/ServiceLogUrlCreate.operation';
import { execute as exchangeServiceMailingListAliasCreateExecute } from './mailingList/ServiceMailingListAliasCreate.operation';
import { execute as exchangeServiceMailingListAliasDeleteExecute } from './mailingList/ServiceMailingListAliasDelete.operation';
import { execute as exchangeServiceMailingListAliasGetExecute } from './mailingList/ServiceMailingListAliasGet.operation';
import { execute as exchangeServiceMailingListAliasListExecute } from './mailingList/ServiceMailingListAliasList.operation';
import { execute as exchangeServiceMailingListCreateExecute } from './mailingList/ServiceMailingListCreate.operation';
import { execute as exchangeServiceMailingListDeleteExecute } from './mailingList/ServiceMailingListDelete.operation';
import { execute as exchangeServiceMailingListGetExecute } from './mailingList/ServiceMailingListGet.operation';
import { execute as exchangeServiceMailingListListExecute } from './mailingList/ServiceMailingListList.operation';
import { execute as exchangeServiceMailingListManagerAccountCreateExecute } from './mailingList/ServiceMailingListManagerAccountCreate.operation';
import { execute as exchangeServiceMailingListManagerAccountListExecute } from './mailingList/ServiceMailingListManagerAccountList.operation';
import { execute as exchangeServiceMailingListManagerAccountManagerAccountIdDeleteExecute } from './mailingList/ServiceMailingListManagerAccountManagerAccountIdDelete.operation';
import { execute as exchangeServiceMailingListManagerAccountManagerAccountIdGetExecute } from './mailingList/ServiceMailingListManagerAccountManagerAccountIdGet.operation';
import { execute as exchangeServiceMailingListMemberAccountCreateExecute } from './mailingList/ServiceMailingListMemberAccountCreate.operation';
import { execute as exchangeServiceMailingListMemberAccountListExecute } from './mailingList/ServiceMailingListMemberAccountList.operation';
import { execute as exchangeServiceMailingListMemberAccountMemberAccountIdDeleteExecute } from './mailingList/ServiceMailingListMemberAccountMemberAccountIdDelete.operation';
import { execute as exchangeServiceMailingListMemberAccountMemberAccountIdGetExecute } from './mailingList/ServiceMailingListMemberAccountMemberAccountIdGet.operation';
import { execute as exchangeServiceMailingListMemberContactCreateExecute } from './mailingList/ServiceMailingListMemberContactCreate.operation';
import { execute as exchangeServiceMailingListMemberContactListExecute } from './mailingList/ServiceMailingListMemberContactList.operation';
import { execute as exchangeServiceMailingListMemberContactMemberContactIdDeleteExecute } from './mailingList/ServiceMailingListMemberContactMemberContactIdDelete.operation';
import { execute as exchangeServiceMailingListMemberContactMemberContactIdGetExecute } from './mailingList/ServiceMailingListMemberContactMemberContactIdGet.operation';
import { execute as exchangeServiceMailingListSendAsCreateExecute } from './mailingList/ServiceMailingListSendAsCreate.operation';
import { execute as exchangeServiceMailingListSendAsDeleteExecute } from './mailingList/ServiceMailingListSendAsDelete.operation';
import { execute as exchangeServiceMailingListSendAsGetExecute } from './mailingList/ServiceMailingListSendAsGet.operation';
import { execute as exchangeServiceMailingListSendAsListExecute } from './mailingList/ServiceMailingListSendAsList.operation';
import { execute as exchangeServiceMailingListSendOnBehalfToCreateExecute } from './mailingList/ServiceMailingListSendOnBehalfToCreate.operation';
import { execute as exchangeServiceMailingListSendOnBehalfToDeleteExecute } from './mailingList/ServiceMailingListSendOnBehalfToDelete.operation';
import { execute as exchangeServiceMailingListSendOnBehalfToGetExecute } from './mailingList/ServiceMailingListSendOnBehalfToGet.operation';
import { execute as exchangeServiceMailingListSendOnBehalfToListExecute } from './mailingList/ServiceMailingListSendOnBehalfToList.operation';
import { execute as exchangeServiceMailingListUpdateExecute } from './mailingList/ServiceMailingListUpdate.operation';
import { execute as exchangeServiceOutlookAvailabilityListExecute } from './outlookAvailability/ServiceOutlookAvailabilityList.operation';
import { execute as exchangeServiceProtocolActiveSyncMailNotificationCreateExecute } from './protocol/ServiceProtocolActiveSyncMailNotificationCreate.operation';
import { execute as exchangeServiceProtocolActiveSyncMailNotificationListExecute } from './protocol/ServiceProtocolActiveSyncMailNotificationList.operation';
import { execute as exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDeleteExecute } from './protocol/ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete.operation';
import { execute as exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGetExecute } from './protocol/ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet.operation';
import { execute as exchangeServiceProtocolListExecute } from './protocol/ServiceProtocolList.operation';
import { execute as exchangeServiceProtocolUpdateExecute } from './protocol/ServiceProtocolUpdate.operation';
import { execute as exchangeServicePublicFolderCreateExecute } from './publicFolder/ServicePublicFolderCreate.operation';
import { execute as exchangeServicePublicFolderDeleteExecute } from './publicFolder/ServicePublicFolderDelete.operation';
import { execute as exchangeServicePublicFolderGetExecute } from './publicFolder/ServicePublicFolderGet.operation';
import { execute as exchangeServicePublicFolderListExecute } from './publicFolder/ServicePublicFolderList.operation';
import { execute as exchangeServicePublicFolderPermissionCreateExecute } from './publicFolder/ServicePublicFolderPermissionCreate.operation';
import { execute as exchangeServicePublicFolderPermissionDeleteExecute } from './publicFolder/ServicePublicFolderPermissionDelete.operation';
import { execute as exchangeServicePublicFolderPermissionGetExecute } from './publicFolder/ServicePublicFolderPermissionGet.operation';
import { execute as exchangeServicePublicFolderPermissionListExecute } from './publicFolder/ServicePublicFolderPermissionList.operation';
import { execute as exchangeServicePublicFolderPermissionUpdateExecute } from './publicFolder/ServicePublicFolderPermissionUpdate.operation';
import { execute as exchangeServicePublicFolderQuotaListExecute } from './publicFolderQuota/ServicePublicFolderQuotaList.operation';
import { execute as exchangeServicePublicFolderUpdateExecute } from './publicFolder/ServicePublicFolderUpdate.operation';
import { execute as exchangeServiceRemoteMailboxAliasCreateExecute } from './remoteMailbox/ServiceRemoteMailboxAliasCreate.operation';
import { execute as exchangeServiceRemoteMailboxAliasDeleteExecute } from './remoteMailbox/ServiceRemoteMailboxAliasDelete.operation';
import { execute as exchangeServiceRemoteMailboxAliasGetExecute } from './remoteMailbox/ServiceRemoteMailboxAliasGet.operation';
import { execute as exchangeServiceRemoteMailboxAliasListExecute } from './remoteMailbox/ServiceRemoteMailboxAliasList.operation';
import { execute as exchangeServiceRemoteMailboxChangePasswordCreateExecute } from './remoteMailbox/ServiceRemoteMailboxChangePasswordCreate.operation';
import { execute as exchangeServiceRemoteMailboxCreateExecute } from './remoteMailbox/ServiceRemoteMailboxCreate.operation';
import { execute as exchangeServiceRemoteMailboxDeleteExecute } from './remoteMailbox/ServiceRemoteMailboxDelete.operation';
import { execute as exchangeServiceRemoteMailboxGetExecute } from './remoteMailbox/ServiceRemoteMailboxGet.operation';
import { execute as exchangeServiceRemoteMailboxListExecute } from './remoteMailbox/ServiceRemoteMailboxList.operation';
import { execute as exchangeServiceRemoteMailboxUpdateExecute } from './remoteMailbox/ServiceRemoteMailboxUpdate.operation';
import { execute as exchangeServiceRenewSslCreateExecute } from './renewSSL/ServiceRenewSslCreate.operation';
import { execute as exchangeServiceResourceAccountCreateExecute } from './resourceAccount/ServiceResourceAccountCreate.operation';
import { execute as exchangeServiceResourceAccountDelegateCreateExecute } from './resourceAccount/ServiceResourceAccountDelegateCreate.operation';
import { execute as exchangeServiceResourceAccountDelegateDeleteExecute } from './resourceAccount/ServiceResourceAccountDelegateDelete.operation';
import { execute as exchangeServiceResourceAccountDelegateGetExecute } from './resourceAccount/ServiceResourceAccountDelegateGet.operation';
import { execute as exchangeServiceResourceAccountDelegateListExecute } from './resourceAccount/ServiceResourceAccountDelegateList.operation';
import { execute as exchangeServiceResourceAccountDeleteExecute } from './resourceAccount/ServiceResourceAccountDelete.operation';
import { execute as exchangeServiceResourceAccountGetExecute } from './resourceAccount/ServiceResourceAccountGet.operation';
import { execute as exchangeServiceResourceAccountListExecute } from './resourceAccount/ServiceResourceAccountList.operation';
import { execute as exchangeServiceResourceAccountUpdateExecute } from './resourceAccount/ServiceResourceAccountUpdate.operation';
import { execute as exchangeServiceSendConnectorChangeAuthenticationCreateExecute } from './sendConnector/ServiceSendConnectorChangeAuthenticationCreate.operation';
import { execute as exchangeServiceSendConnectorCreateExecute } from './sendConnector/ServiceSendConnectorCreate.operation';
import { execute as exchangeServiceSendConnectorDeleteExecute } from './sendConnector/ServiceSendConnectorDelete.operation';
import { execute as exchangeServiceSendConnectorGetExecute } from './sendConnector/ServiceSendConnectorGet.operation';
import { execute as exchangeServiceSendConnectorListExecute } from './sendConnector/ServiceSendConnectorList.operation';
import { execute as exchangeServiceSendConnectorUpdateExecute } from './sendConnector/ServiceSendConnectorUpdate.operation';
import { execute as exchangeServiceServerListExecute } from './server/ServiceServerList.operation';
import { execute as exchangeServiceServerUpdateExecute } from './server/ServiceServerUpdate.operation';
import { execute as exchangeServiceServiceInfosListExecute } from './serviceInfos/ServiceServiceInfosList.operation';
import { execute as exchangeServiceServiceInfosUpdateExecute } from './serviceInfos/ServiceServiceInfosUpdate.operation';
import { execute as exchangeServiceSharedAccountAliasCreateExecute } from './sharedAccount/ServiceSharedAccountAliasCreate.operation';
import { execute as exchangeServiceSharedAccountAliasDeleteExecute } from './sharedAccount/ServiceSharedAccountAliasDelete.operation';
import { execute as exchangeServiceSharedAccountAliasGetExecute } from './sharedAccount/ServiceSharedAccountAliasGet.operation';
import { execute as exchangeServiceSharedAccountAliasListExecute } from './sharedAccount/ServiceSharedAccountAliasList.operation';
import { execute as exchangeServiceSharedAccountCreateExecute } from './sharedAccount/ServiceSharedAccountCreate.operation';
import { execute as exchangeServiceSharedAccountDeleteExecute } from './sharedAccount/ServiceSharedAccountDelete.operation';
import { execute as exchangeServiceSharedAccountFullAccessCreateExecute } from './sharedAccount/ServiceSharedAccountFullAccessCreate.operation';
import { execute as exchangeServiceSharedAccountFullAccessDeleteExecute } from './sharedAccount/ServiceSharedAccountFullAccessDelete.operation';
import { execute as exchangeServiceSharedAccountFullAccessGetExecute } from './sharedAccount/ServiceSharedAccountFullAccessGet.operation';
import { execute as exchangeServiceSharedAccountFullAccessListExecute } from './sharedAccount/ServiceSharedAccountFullAccessList.operation';
import { execute as exchangeServiceSharedAccountGetExecute } from './sharedAccount/ServiceSharedAccountGet.operation';
import { execute as exchangeServiceSharedAccountListExecute } from './sharedAccount/ServiceSharedAccountList.operation';
import { execute as exchangeServiceSharedAccountQuotaListExecute } from './sharedAccountQuota/ServiceSharedAccountQuotaList.operation';
import { execute as exchangeServiceSharedAccountSendAsCreateExecute } from './sharedAccount/ServiceSharedAccountSendAsCreate.operation';
import { execute as exchangeServiceSharedAccountSendAsDeleteExecute } from './sharedAccount/ServiceSharedAccountSendAsDelete.operation';
import { execute as exchangeServiceSharedAccountSendAsGetExecute } from './sharedAccount/ServiceSharedAccountSendAsGet.operation';
import { execute as exchangeServiceSharedAccountSendAsListExecute } from './sharedAccount/ServiceSharedAccountSendAsList.operation';
import { execute as exchangeServiceSharedAccountSendOnBehalfToCreateExecute } from './sharedAccount/ServiceSharedAccountSendOnBehalfToCreate.operation';
import { execute as exchangeServiceSharedAccountSendOnBehalfToDeleteExecute } from './sharedAccount/ServiceSharedAccountSendOnBehalfToDelete.operation';
import { execute as exchangeServiceSharedAccountSendOnBehalfToGetExecute } from './sharedAccount/ServiceSharedAccountSendOnBehalfToGet.operation';
import { execute as exchangeServiceSharedAccountSendOnBehalfToListExecute } from './sharedAccount/ServiceSharedAccountSendOnBehalfToList.operation';
import { execute as exchangeServiceSharedAccountTasksGetExecute } from './sharedAccount/ServiceSharedAccountTasksGet.operation';
import { execute as exchangeServiceSharedAccountTasksListExecute } from './sharedAccount/ServiceSharedAccountTasksList.operation';
import { execute as exchangeServiceSharedAccountUpdateExecute } from './sharedAccount/ServiceSharedAccountUpdate.operation';
import { execute as exchangeServiceTaskGetExecute } from './task/ServiceTaskGet.operation';
import { execute as exchangeServiceTaskListExecute } from './task/ServiceTaskList.operation';
import { execute as exchangeServiceUpdateExecute } from './service/ServiceUpdate.operation';
import { execute as exchangeServiceUpdateDeviceListCreateExecute } from './updateDeviceList/ServiceUpdateDeviceListCreate.operation';
import { execute as exchangeServiceUpdateFlagsOnAllAccountsCreateExecute } from './updateFlagsOnAllAccounts/ServiceUpdateFlagsOnAllAccountsCreate.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'exchangeOperation',
	'exchange',
	[
	{
		name: 'List Available Services',
		value: 'exchangeMisc',
		action: 'List available services',
		execute: exchangeExchangeMiscExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Create New Alias',
		value: 'ServiceAccountAliasCreate',
		action: 'Create new alias',
		execute: exchangeServiceAccountAliasCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Alias',
		value: 'ServiceAccountAliasDelete',
		action: 'Delete existing alias',
		execute: exchangeServiceAccountAliasDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountAliasGet',
		action: 'Get this object properties',
		execute: exchangeServiceAccountAliasGetExecute,
		description: noProps,
	},
	{
		name: 'Aliases Associated to This Mailbox',
		value: 'ServiceAccountAliasList',
		action: 'Aliases associated to this mailbox',
		execute: exchangeServiceAccountAliasListExecute,
		description: noProps,
	},
	{
		name: 'Create New Archive Mailbox',
		value: 'ServiceAccountArchiveCreate',
		action: 'Create new archive mailbox',
		execute: exchangeServiceAccountArchiveCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Archive Mailbox',
		value: 'ServiceAccountArchiveDelete',
		action: 'Delete existing archive mailbox',
		execute: exchangeServiceAccountArchiveDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountArchiveList',
		action: 'Get this object properties',
		execute: exchangeServiceAccountArchiveListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceAccountArchiveUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceAccountArchiveUpdateExecute,
		description: noProps,
	},
	{
		name: 'Change Mailbox Password',
		value: 'ServiceAccountChangePasswordCreate',
		action: 'Change mailbox password',
		execute: exchangeServiceAccountChangePasswordCreateExecute,
		description: noProps,
	},
	{
		name: 'Create New Mailbox in Exchange Server',
		value: 'ServiceAccountCreate',
		action: 'Create new mailbox in exchange server',
		execute: exchangeServiceAccountCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Mailbox in Exchange Server',
		value: 'ServiceAccountDelete',
		action: 'Delete existing mailbox in exchange server',
		execute: exchangeServiceAccountDeleteExecute,
		description: noProps,
	},
	{
		name: 'Create New Diagnosis Request',
		value: 'ServiceAccountDiagnosticsCreate',
		action: 'Create new diagnosis request',
		execute: exchangeServiceAccountDiagnosticsCreateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountDiagnosticsList',
		action: 'Get this object properties',
		execute: exchangeServiceAccountDiagnosticsListExecute,
		description: noProps,
	},
	{
		name: 'Request PST File for the Account',
		value: 'ServiceAccountExportCreate',
		action: 'Request PST file for the account',
		execute: exchangeServiceAccountExportCreateExecute,
		description: noProps,
	},
	{
		name: 'Remove Request of PST File',
		value: 'ServiceAccountExportDelete',
		action: 'Remove request of PST file',
		execute: exchangeServiceAccountExportDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountExportList',
		action: 'Get this object properties',
		execute: exchangeServiceAccountExportListExecute,
		description: noProps,
	},
	{
		name: 'Generate Temporary Url to PST File',
		value: 'ServiceAccountExportUrlCreate',
		action: 'Generate temporary url to PST file',
		execute: exchangeServiceAccountExportUrlCreateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountExportUrlList',
		action: 'Get this object properties',
		execute: exchangeServiceAccountExportUrlListExecute,
		description: noProps,
	},
	{
		name: 'Allow Full Access to a User',
		value: 'ServiceAccountFullAccessCreate',
		action: 'Allow full access to a user',
		execute: exchangeServiceAccountFullAccessCreateExecute,
		description: noProps,
	},
	{
		name: 'Revoke Full Access',
		value: 'ServiceAccountFullAccessDelete',
		action: 'Revoke full access',
		execute: exchangeServiceAccountFullAccessDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountFullAccessGet',
		action: 'Get this object properties',
		execute: exchangeServiceAccountFullAccessGetExecute,
		description: noProps,
	},
	{
		name: 'Full Access Granted Users for This Mailbox',
		value: 'ServiceAccountFullAccessList',
		action: 'Full access granted users for this mailbox',
		execute: exchangeServiceAccountFullAccessListExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountGet',
		action: 'Get this object properties',
		execute: exchangeServiceAccountGetExecute,
		description: noProps,
	},
	{
		name: 'Accounts Associated to This Exchange Service',
		value: 'ServiceAccountList',
		action: 'Accounts associated to this exchange service',
		execute: exchangeServiceAccountListExecute,
		description: noProps,
	},
	{
		name: 'Generate Outlook Url',
		value: 'ServiceAccountOutlookUrlCreate',
		action: 'Generate outlook url',
		execute: exchangeServiceAccountOutlookUrlCreateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountOutlookUrlList',
		action: 'Get this object properties',
		execute: exchangeServiceAccountOutlookUrlListExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountProtocolList',
		action: 'Get this object properties',
		execute: exchangeServiceAccountProtocolListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceAccountProtocolUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceAccountProtocolUpdateExecute,
		description: noProps,
	},
	{
		name: 'Allow Another User to Send Mails From This Mailbox',
		value: 'ServiceAccountSendAsCreate',
		action: 'Allow another user to send mails from this mailbox',
		execute: exchangeServiceAccountSendAsCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Allowed User for sendAs',
		value: 'ServiceAccountSendAsDelete',
		action: 'Delete allowed user for sendAs',
		execute: exchangeServiceAccountSendAsDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountSendAsGet',
		action: 'Get this object properties',
		execute: exchangeServiceAccountSendAsGetExecute,
		description: noProps,
	},
	{
		name: 'Send as Granted Users for This Mailbox',
		value: 'ServiceAccountSendAsList',
		action: 'Send as granted users for this mailbox',
		execute: exchangeServiceAccountSendAsListExecute,
		description: noProps,
	},
	{
		name: 'Allow Another User to Send On Behalf To Mails From This Mailbox',
		value: 'ServiceAccountSendOnBehalfToCreate',
		action: 'Allow another user to Send On Behalf To mails from this mailbox',
		execute: exchangeServiceAccountSendOnBehalfToCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Allowed User for SendOnBehalfTo',
		value: 'ServiceAccountSendOnBehalfToDelete',
		action: 'Delete allowed user for SendOnBehalfTo',
		execute: exchangeServiceAccountSendOnBehalfToDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountSendOnBehalfToGet',
		action: 'Get this object properties',
		execute: exchangeServiceAccountSendOnBehalfToGetExecute,
		description: noProps,
	},
	{
		name: 'SendOnBehalfTo Granted Users for This Mailbox',
		value: 'ServiceAccountSendOnBehalfToList',
		action: 'SendOnBehalfTo granted users for this mailbox',
		execute: exchangeServiceAccountSendOnBehalfToListExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAccountTasksGet',
		action: 'Get this object properties',
		execute: exchangeServiceAccountTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Pending Task for This Mailbox',
		value: 'ServiceAccountTasksList',
		action: 'Pending task for this mailbox',
		execute: exchangeServiceAccountTasksListExecute,
		description: noProps,
	},
	{
		name: 'Terminate Account at Expiration Date',
		value: 'ServiceAccountTerminateCreate',
		action: 'Terminate account at expiration date',
		execute: exchangeServiceAccountTerminateCreateExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceAccountUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceAccountUpdateExecute,
		description: noProps,
	},
	{
		name: 'Activate Sharepoint Infra Connected to This Exchange Service',
		value: 'ServiceActivateSharepointCreate',
		action: 'Activate Sharepoint infra connected to this exchange service',
		execute: exchangeServiceActivateSharepointCreateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAuthenticationPolicyGet',
		action: 'Get this object properties',
		execute: exchangeServiceAuthenticationPolicyGetExecute,
		description: noProps,
	},
	{
		name: 'Authentication Policy for Protocols',
		value: 'ServiceAuthenticationPolicyList',
		action: 'Authentication policy for protocols',
		execute: exchangeServiceAuthenticationPolicyListExecute,
		description: noProps,
	},
	{
		name: 'Authorize New IP to Access the Service',
		value: 'ServiceAuthorizedIpCreate',
		action: 'Authorize new IP to access the service',
		execute: exchangeServiceAuthorizedIpCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Authorized IP',
		value: 'ServiceAuthorizedIpIpDelete',
		action: 'Delete authorized IP',
		execute: exchangeServiceAuthorizedIpIpDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceAuthorizedIpIpGet',
		action: 'Get this object properties',
		execute: exchangeServiceAuthorizedIpIpGetExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceAuthorizedIpIpUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceAuthorizedIpIpUpdateExecute,
		description: noProps,
	},
	{
		name: 'Authorized IPs for POP(s),IMAP(s), SMTP(s) and HTTP(s)',
		value: 'ServiceAuthorizedIpList',
		action: 'Authorized IPs for POP(s),IMAP(s), SMTP(s) and HTTP(s)',
		execute: exchangeServiceAuthorizedIpListExecute,
		description: noProps,
	},
	{
		name: 'Setting SSL Hostname for Exchange Private Offer',
		value: 'ServiceChangeHostnameCreate',
		action: 'Setting SSL hostname for Exchange private offer',
		execute: exchangeServiceChangeHostnameCreateExecute,
		description: noProps,
	},
	{
		name: 'Create New Custom Isolation for Mailbox',
		value: 'ServiceCustomIsolationCreate',
		action: 'Create new custom isolation for mailbox',
		execute: exchangeServiceCustomIsolationCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Custom Isolation for Mailbox',
		value: 'ServiceCustomIsolationDelete',
		action: 'Delete existing custom isolation for mailbox',
		execute: exchangeServiceCustomIsolationDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceCustomIsolationGet',
		action: 'Get this object properties',
		execute: exchangeServiceCustomIsolationGetExecute,
		description: noProps,
	},
	{
		name: 'Custom Isolation for Mailbox',
		value: 'ServiceCustomIsolationList',
		action: 'Custom isolation for mailbox',
		execute: exchangeServiceCustomIsolationListExecute,
		description: noProps,
	},
	{
		name: 'Get DCV Emails if Your Ssl Will Expire in Next 30 Days',
		value: 'ServiceDcvEmailsList',
		action: 'Get DCV emails if your ssl will expire in next 30 days',
		execute: exchangeServiceDcvEmailsListExecute,
		description: noProps,
	},
	{
		name: 'Executes a Factory Reset on the Device',
		value: 'ServiceDeviceClearDeviceCreate',
		action: 'Executes a factory reset on the device',
		execute: exchangeServiceDeviceClearDeviceCreateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceDeviceGet',
		action: 'Get this object properties',
		execute: exchangeServiceDeviceGetExecute,
		description: noProps,
	},
	{
		name: 'List of Your ActiveSync Devices Registered on This Exchange Service',
		value: 'ServiceDeviceList',
		action: 'List of your ActiveSync devices registered on this Exchange service',
		execute: exchangeServiceDeviceListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceDeviceUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceDeviceUpdateExecute,
		description: noProps,
	},
	{
		name: 'Change Default Values of SBR Used for All New Created Account on This Domain',
		value: 'ServiceDomainChangeDefaultSBRUpdate',
		action: 'Change default values of SBR used for all new created account on this domain',
		execute: exchangeServiceDomainChangeDefaultSBRUpdateExecute,
		description: noProps,
	},
	{
		name: 'Create New Domain in Exchange Services',
		value: 'ServiceDomainCreate',
		action: 'Create new domain in exchange services',
		execute: exchangeServiceDomainCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Domain in Exchange Services',
		value: 'ServiceDomainDelete',
		action: 'Delete existing domain in exchange services',
		execute: exchangeServiceDomainDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Diclaimer Attributes to Substitute with Active Directory Properties',
		value: 'ServiceDomainDisclaimerAttributeList',
		action: 'Get diclaimer attributes to substitute with Active Directory properties',
		execute: exchangeServiceDomainDisclaimerAttributeListExecute,
		description: noProps,
	},
	{
		name: 'Create Organization Disclaimer of Each Email',
		value: 'ServiceDomainDisclaimerCreate',
		action: 'Create organization disclaimer of each email',
		execute: exchangeServiceDomainDisclaimerCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Organization Disclaimer',
		value: 'ServiceDomainDisclaimerDelete',
		action: 'Delete existing organization disclaimer',
		execute: exchangeServiceDomainDisclaimerDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceDomainDisclaimerList',
		action: 'Get this object properties',
		execute: exchangeServiceDomainDisclaimerListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceDomainDisclaimerUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceDomainDisclaimerUpdateExecute,
		description: noProps,
	},
	{
		name: 'Create DKIM Selector on This Domain',
		value: 'ServiceDomainDkimCreate',
		action: 'Create DKIM selector on this domain',
		execute: exchangeServiceDomainDkimCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete DKIM Selector on This Domain',
		value: 'ServiceDomainDkimDelete',
		action: 'Delete DKIM selector on this domain',
		execute: exchangeServiceDomainDkimDeleteExecute,
		description: noProps,
	},
	{
		name: 'Disable Dkim Signing',
		value: 'ServiceDomainDkimDisableCreate',
		action: 'Disable dkim signing',
		execute: exchangeServiceDomainDkimDisableCreateExecute,
		description: noProps,
	},
	{
		name: 'Enable Dkim Signing or Switch Selector Used',
		value: 'ServiceDomainDkimEnableCreate',
		action: 'Enable dkim signing or switch selector used',
		execute: exchangeServiceDomainDkimEnableCreateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceDomainDkimGet',
		action: 'Get this object properties',
		execute: exchangeServiceDomainDkimGetExecute,
		description: noProps,
	},
	{
		name: 'Dkim Associated to This Domain',
		value: 'ServiceDomainDkimList',
		action: 'Dkim associated to this domain',
		execute: exchangeServiceDomainDkimListExecute,
		description: noProps,
	},
	{
		name: 'Get Dkim Selector List',
		value: 'ServiceDomainDkimSelectorList',
		action: 'Get dkim selector list',
		execute: exchangeServiceDomainDkimSelectorListExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceDomainGet',
		action: 'Get this object properties',
		execute: exchangeServiceDomainGetExecute,
		description: noProps,
	},
	{
		name: 'Domains Associated to This Service',
		value: 'ServiceDomainList',
		action: 'Domains associated to this service',
		execute: exchangeServiceDomainListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceDomainUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceDomainUpdateExecute,
		description: noProps,
	},
	{
		name: 'Create New External Contact',
		value: 'ServiceExternalContactCreate',
		action: 'Create new external contact',
		execute: exchangeServiceExternalContactCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete External Contact',
		value: 'ServiceExternalContactDelete',
		action: 'Delete external contact',
		execute: exchangeServiceExternalContactDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceExternalContactGet',
		action: 'Get this object properties',
		execute: exchangeServiceExternalContactGetExecute,
		description: noProps,
	},
	{
		name: 'External Contacts for This Service',
		value: 'ServiceExternalContactList',
		action: 'External contacts for this service',
		execute: exchangeServiceExternalContactListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceExternalContactUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceExternalContactUpdateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceGet',
		action: 'Get this object properties',
		execute: exchangeServiceGetExecute,
		description: noProps,
	},
	{
		name: 'Change User Password',
		value: 'ServiceImpersonatedUserChangePasswordCreate',
		action: 'Change user password',
		execute: exchangeServiceImpersonatedUserChangePasswordCreateExecute,
		description: noProps,
	},
	{
		name: 'Create User with Impersonation Right on All Mailboxes',
		value: 'ServiceImpersonatedUserCreate',
		action: 'Create user with impersonation right on all mailboxes',
		execute: exchangeServiceImpersonatedUserCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete User with Impersonation Right on All Mailboxes',
		value: 'ServiceImpersonatedUserDelete',
		action: 'Delete user with impersonation right on all mailboxes',
		execute: exchangeServiceImpersonatedUserDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceImpersonatedUserList',
		action: 'Get this object properties',
		execute: exchangeServiceImpersonatedUserListExecute,
		description: noProps,
	},
	{
		name: 'Get Configuration of Password Policy Linked to Impersonated Account',
		value: 'ServiceImpersonationPasswordPolicyList',
		action: 'Get configuration of password policy linked to impersonated account',
		execute: exchangeServiceImpersonationPasswordPolicyListExecute,
		description: noProps,
	},
	{
		name: 'Get Active Licenses for Specific Period of Time',
		value: 'ServiceLicenseList',
		action: 'Get active licenses for specific period of time',
		execute: exchangeServiceLicenseListExecute,
		description: noProps,
	},
	{
		name: 'List Available Services',
		value: 'ServiceList',
		action: 'List available services',
		execute: exchangeServiceListExecute,
		description: noProps,
	},
	{
		name: 'Get a Log Kind',
		value: 'ServiceLogKindGet',
		action: 'Get a log kind',
		execute: exchangeServiceLogKindGetExecute,
		description: noProps,
	},
	{
		name: 'List Available Log Kinds',
		value: 'ServiceLogKindList',
		action: 'List available log kinds',
		execute: exchangeServiceLogKindListExecute,
		description: noProps,
	},
	{
		name: 'Create a Subscription From Logs to a Pre-Existing LDP Stream',
		value: 'ServiceLogSubscriptionCreate',
		action: 'Create a subscription from logs to a pre-existing LDP stream',
		execute: exchangeServiceLogSubscriptionCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete a Subscription',
		value: 'ServiceLogSubscriptionDelete',
		action: 'Delete a subscription',
		execute: exchangeServiceLogSubscriptionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Subscription Details',
		value: 'ServiceLogSubscriptionGet',
		action: 'Get subscription details',
		execute: exchangeServiceLogSubscriptionGetExecute,
		description: noProps,
	},
	{
		name: 'List Subscription IDs for a Cluster',
		value: 'ServiceLogSubscriptionList',
		action: 'List subscription IDs for a cluster',
		execute: exchangeServiceLogSubscriptionListExecute,
		description: noProps,
	},
	{
		name: 'Generate a Temporary URL to Retrieve Logs',
		value: 'ServiceLogUrlCreate',
		action: 'Generate a temporary URL to retrieve logs',
		execute: exchangeServiceLogUrlCreateExecute,
		description: noProps,
	},
	{
		name: 'Create New Alias',
		value: 'ServiceMailingListAliasCreate',
		action: 'Create new alias',
		execute: exchangeServiceMailingListAliasCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Alias',
		value: 'ServiceMailingListAliasDelete',
		action: 'Delete existing alias',
		execute: exchangeServiceMailingListAliasDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceMailingListAliasGet',
		action: 'Get this object properties',
		execute: exchangeServiceMailingListAliasGetExecute,
		description: noProps,
	},
	{
		name: 'Aliases Associated to This mailingList',
		value: 'ServiceMailingListAliasList',
		action: 'Aliases associated to this mailingList',
		execute: exchangeServiceMailingListAliasListExecute,
		description: noProps,
	},
	{
		name: 'Add Mailing List',
		value: 'ServiceMailingListCreate',
		action: 'Add mailing list',
		execute: exchangeServiceMailingListCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Mailing List',
		value: 'ServiceMailingListDelete',
		action: 'Delete mailing list',
		execute: exchangeServiceMailingListDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceMailingListGet',
		action: 'Get this object properties',
		execute: exchangeServiceMailingListGetExecute,
		description: noProps,
	},
	{
		name: 'Mailing List for This Service',
		value: 'ServiceMailingListList',
		action: 'Mailing list for this service',
		execute: exchangeServiceMailingListListExecute,
		description: noProps,
	},
	{
		name: 'Add New Mailing List Manager',
		value: 'ServiceMailingListManagerAccountCreate',
		action: 'Add new mailing list manager',
		execute: exchangeServiceMailingListManagerAccountCreateExecute,
		description: noProps,
	},
	{
		name: 'Mailing List Account Manager',
		value: 'ServiceMailingListManagerAccountList',
		action: 'Mailing list account manager',
		execute: exchangeServiceMailingListManagerAccountListExecute,
		description: noProps,
	},
	{
		name: 'Delete Mailing List Manager',
		value: 'ServiceMailingListManagerAccountManagerAccountIdDelete',
		action: 'Delete mailing list manager',
		execute: exchangeServiceMailingListManagerAccountManagerAccountIdDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceMailingListManagerAccountManagerAccountIdGet',
		action: 'Get this object properties',
		execute: exchangeServiceMailingListManagerAccountManagerAccountIdGetExecute,
		description: noProps,
	},
	{
		name: 'Add New Mailing List Member',
		value: 'ServiceMailingListMemberAccountCreate',
		action: 'Add new mailing list member',
		execute: exchangeServiceMailingListMemberAccountCreateExecute,
		description: noProps,
	},
	{
		name: 'Mailing List Account Member',
		value: 'ServiceMailingListMemberAccountList',
		action: 'Mailing list account member',
		execute: exchangeServiceMailingListMemberAccountListExecute,
		description: noProps,
	},
	{
		name: 'Delete Mailing List Member',
		value: 'ServiceMailingListMemberAccountMemberAccountIdDelete',
		action: 'Delete mailing list member',
		execute: exchangeServiceMailingListMemberAccountMemberAccountIdDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceMailingListMemberAccountMemberAccountIdGet',
		action: 'Get this object properties',
		execute: exchangeServiceMailingListMemberAccountMemberAccountIdGetExecute,
		description: noProps,
	},
	{
		name: 'Add New Mailing List Member',
		value: 'ServiceMailingListMemberContactCreate',
		action: 'Add new mailing list member',
		execute: exchangeServiceMailingListMemberContactCreateExecute,
		description: noProps,
	},
	{
		name: 'Mailing List Contact Member',
		value: 'ServiceMailingListMemberContactList',
		action: 'Mailing list contact member',
		execute: exchangeServiceMailingListMemberContactListExecute,
		description: noProps,
	},
	{
		name: 'Delete Mailing List Member',
		value: 'ServiceMailingListMemberContactMemberContactIdDelete',
		action: 'Delete mailing list member',
		execute: exchangeServiceMailingListMemberContactMemberContactIdDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceMailingListMemberContactMemberContactIdGet',
		action: 'Get this object properties',
		execute: exchangeServiceMailingListMemberContactMemberContactIdGetExecute,
		description: noProps,
	},
	{
		name: 'Allow Another User to Send Aso Mails From This Mailing List',
		value: 'ServiceMailingListSendAsCreate',
		action: 'Allow another user to Send aso mails from this mailing list',
		execute: exchangeServiceMailingListSendAsCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Allowed User for SendAs',
		value: 'ServiceMailingListSendAsDelete',
		action: 'Delete allowed user for SendAs',
		execute: exchangeServiceMailingListSendAsDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceMailingListSendAsGet',
		action: 'Get this object properties',
		execute: exchangeServiceMailingListSendAsGetExecute,
		description: noProps,
	},
	{
		name: 'SendAs',
		value: 'ServiceMailingListSendAsList',
		action: 'SendAs',
		execute: exchangeServiceMailingListSendAsListExecute,
		description: noProps,
	},
	{
		name: 'Allow Another User to Send Aso Mails From This Mailing List',
		value: 'ServiceMailingListSendOnBehalfToCreate',
		action: 'Allow another user to Send aso mails from this mailing list',
		execute: exchangeServiceMailingListSendOnBehalfToCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Allowed User for SendOnBehalfTo',
		value: 'ServiceMailingListSendOnBehalfToDelete',
		action: 'Delete allowed user for SendOnBehalfTo',
		execute: exchangeServiceMailingListSendOnBehalfToDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceMailingListSendOnBehalfToGet',
		action: 'Get this object properties',
		execute: exchangeServiceMailingListSendOnBehalfToGetExecute,
		description: noProps,
	},
	{
		name: 'SendOnBehalfTo',
		value: 'ServiceMailingListSendOnBehalfToList',
		action: 'SendOnBehalfTo',
		execute: exchangeServiceMailingListSendOnBehalfToListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceMailingListUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceMailingListUpdateExecute,
		description: noProps,
	},
	{
		name: 'Show Available Outlooks',
		value: 'ServiceOutlookAvailabilityList',
		action: 'Show available outlooks',
		execute: exchangeServiceOutlookAvailabilityListExecute,
		description: noProps,
	},
	{
		name: 'Subscribe New Address to ActiveSync Quarantine Notifications',
		value: 'ServiceProtocolActiveSyncMailNotificationCreate',
		action: 'Subscribe new address to ActiveSync quarantine notifications',
		execute: exchangeServiceProtocolActiveSyncMailNotificationCreateExecute,
		description: noProps,
	},
	{
		name: 'Exchange Account ID Subscribed to ActiveSync Quarantine Notifications',
		value: 'ServiceProtocolActiveSyncMailNotificationList',
		action: 'Exchange account id subscribed to ActiveSync quarantine notifications',
		execute: exchangeServiceProtocolActiveSyncMailNotificationListExecute,
		description: noProps,
	},
	{
		name: 'Unubscribe Address From ActiveSync Quarantine Notifications',
		value: 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete',
		action: 'Unubscribe address from ActiveSync quarantine notifications',
		execute: exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet',
		action: 'Get this object properties',
		execute: exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGetExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceProtocolList',
		action: 'Get this object properties',
		execute: exchangeServiceProtocolListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceProtocolUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceProtocolUpdateExecute,
		description: noProps,
	},
	{
		name: 'Create Organization Public Folder',
		value: 'ServicePublicFolderCreate',
		action: 'Create organization public folder',
		execute: exchangeServicePublicFolderCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Organization Public Folder',
		value: 'ServicePublicFolderDelete',
		action: 'Delete existing organization public folder',
		execute: exchangeServicePublicFolderDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServicePublicFolderGet',
		action: 'Get this object properties',
		execute: exchangeServicePublicFolderGetExecute,
		description: noProps,
	},
	{
		name: 'Public Folders Associated to This Service',
		value: 'ServicePublicFolderList',
		action: 'Public folders associated to this service',
		execute: exchangeServicePublicFolderListExecute,
		description: noProps,
	},
	{
		name: 'Create Public Folder Permission',
		value: 'ServicePublicFolderPermissionCreate',
		action: 'Create public folder permission',
		execute: exchangeServicePublicFolderPermissionCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Permission From Public Folder',
		value: 'ServicePublicFolderPermissionDelete',
		action: 'Delete existing permission from public folder',
		execute: exchangeServicePublicFolderPermissionDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServicePublicFolderPermissionGet',
		action: 'Get this object properties',
		execute: exchangeServicePublicFolderPermissionGetExecute,
		description: noProps,
	},
	{
		name: 'Public Folder Permission',
		value: 'ServicePublicFolderPermissionList',
		action: 'Public folder permission',
		execute: exchangeServicePublicFolderPermissionListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServicePublicFolderPermissionUpdate',
		action: 'Alter this object properties',
		execute: exchangeServicePublicFolderPermissionUpdateExecute,
		description: noProps,
	},
	{
		name: 'Get Public Folder Quota Usage in Total Available Space',
		value: 'ServicePublicFolderQuotaList',
		action: 'Get public folder quota usage in total available space',
		execute: exchangeServicePublicFolderQuotaListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServicePublicFolderUpdate',
		action: 'Alter this object properties',
		execute: exchangeServicePublicFolderUpdateExecute,
		description: noProps,
	},
	{
		name: 'Create New Alias',
		value: 'ServiceRemoteMailboxAliasCreate',
		action: 'Create new alias',
		execute: exchangeServiceRemoteMailboxAliasCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Alias',
		value: 'ServiceRemoteMailboxAliasDelete',
		action: 'Delete existing alias',
		execute: exchangeServiceRemoteMailboxAliasDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceRemoteMailboxAliasGet',
		action: 'Get this object properties',
		execute: exchangeServiceRemoteMailboxAliasGetExecute,
		description: noProps,
	},
	{
		name: 'Aliases Associated to This Remote Mailbox',
		value: 'ServiceRemoteMailboxAliasList',
		action: 'Aliases associated to this remote mailbox',
		execute: exchangeServiceRemoteMailboxAliasListExecute,
		description: noProps,
	},
	{
		name: 'Change Mailbox Password',
		value: 'ServiceRemoteMailboxChangePasswordCreate',
		action: 'Change mailbox password',
		execute: exchangeServiceRemoteMailboxChangePasswordCreateExecute,
		description: noProps,
	},
	{
		name: 'Create New Remote Mailbox in Exchange Server',
		value: 'ServiceRemoteMailboxCreate',
		action: 'Create new remote mailbox in exchange server',
		execute: exchangeServiceRemoteMailboxCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Remote Mailbox in Exchange Server',
		value: 'ServiceRemoteMailboxDelete',
		action: 'Delete existing remote mailbox in exchange server',
		execute: exchangeServiceRemoteMailboxDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceRemoteMailboxGet',
		action: 'Get this object properties',
		execute: exchangeServiceRemoteMailboxGetExecute,
		description: noProps,
	},
	{
		name: 'Remote Mailboxes Associated to This Exchange Service',
		value: 'ServiceRemoteMailboxList',
		action: 'Remote mailboxes associated to this exchange service',
		execute: exchangeServiceRemoteMailboxListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceRemoteMailboxUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceRemoteMailboxUpdateExecute,
		description: noProps,
	},
	{
		name: 'Renew SSL if It Will Expire in Next 30 Days',
		value: 'ServiceRenewSslCreate',
		action: 'Renew SSL if it will expire in next 30 days',
		execute: exchangeServiceRenewSslCreateExecute,
		description: noProps,
	},
	{
		name: 'Create New Resource Account in Exchange Server',
		value: 'ServiceResourceAccountCreate',
		action: 'Create new resource account in exchange server',
		execute: exchangeServiceResourceAccountCreateExecute,
		description: noProps,
	},
	{
		name: 'Add New Resource Account Delegate in Exchange Server',
		value: 'ServiceResourceAccountDelegateCreate',
		action: 'Add new resource account delegate in exchange server',
		execute: exchangeServiceResourceAccountDelegateCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Resource Account Delegate in Exchange Server',
		value: 'ServiceResourceAccountDelegateDelete',
		action: 'Delete existing resource account delegate in exchange server',
		execute: exchangeServiceResourceAccountDelegateDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceResourceAccountDelegateGet',
		action: 'Get this object properties',
		execute: exchangeServiceResourceAccountDelegateGetExecute,
		description: noProps,
	},
	{
		name: 'Resource Account Manager',
		value: 'ServiceResourceAccountDelegateList',
		action: 'Resource account manager',
		execute: exchangeServiceResourceAccountDelegateListExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Resource Account in Exchange Server',
		value: 'ServiceResourceAccountDelete',
		action: 'Delete existing resource account in exchange server',
		execute: exchangeServiceResourceAccountDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceResourceAccountGet',
		action: 'Get this object properties',
		execute: exchangeServiceResourceAccountGetExecute,
		description: noProps,
	},
	{
		name: 'Resource Account Associated to This Service',
		value: 'ServiceResourceAccountList',
		action: 'Resource account associated to this service',
		execute: exchangeServiceResourceAccountListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceResourceAccountUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceResourceAccountUpdateExecute,
		description: noProps,
	},
	{
		name: 'Change authentication on send connector',
		value: 'ServiceSendConnectorChangeAuthenticationCreate',
		action: 'Change authentication on send connector',
		execute: exchangeServiceSendConnectorChangeAuthenticationCreateExecute,
		description: noProps,
	},
	{
		name: 'Create new send connector',
		value: 'ServiceSendConnectorCreate',
		action: 'Create new send connector',
		execute: exchangeServiceSendConnectorCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete existing send connector',
		value: 'ServiceSendConnectorDelete',
		action: 'Delete existing send connector',
		execute: exchangeServiceSendConnectorDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceSendConnectorGet',
		action: 'Get this object properties',
		execute: exchangeServiceSendConnectorGetExecute,
		description: noProps,
	},
	{
		name: 'List of Your Send Connectors on This Exchange Service',
		value: 'ServiceSendConnectorList',
		action: 'List of your send connectors on this Exchange service',
		execute: exchangeServiceSendConnectorListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceSendConnectorUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceSendConnectorUpdateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceServerList',
		action: 'Get this object properties',
		execute: exchangeServiceServerListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceServerUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceServerUpdateExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'ServiceServiceInfosList',
		action: 'Get service information',
		execute: exchangeServiceServiceInfosListExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information',
		value: 'ServiceServiceInfosUpdate',
		action: 'Update service information',
		execute: exchangeServiceServiceInfosUpdateExecute,
		description: noProps,
	},
	{
		name: 'Create New Alias',
		value: 'ServiceSharedAccountAliasCreate',
		action: 'Create new alias',
		execute: exchangeServiceSharedAccountAliasCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Alias',
		value: 'ServiceSharedAccountAliasDelete',
		action: 'Delete existing alias',
		execute: exchangeServiceSharedAccountAliasDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceSharedAccountAliasGet',
		action: 'Get this object properties',
		execute: exchangeServiceSharedAccountAliasGetExecute,
		description: noProps,
	},
	{
		name: 'Aliases Associated to This Mailbox',
		value: 'ServiceSharedAccountAliasList',
		action: 'Aliases associated to this mailbox',
		execute: exchangeServiceSharedAccountAliasListExecute,
		description: noProps,
	},
	{
		name: 'Create New Shared Mailbox in Exchange Server',
		value: 'ServiceSharedAccountCreate',
		action: 'Create new shared mailbox in exchange server',
		execute: exchangeServiceSharedAccountCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Existing Shared Mailbox in Exchange Server',
		value: 'ServiceSharedAccountDelete',
		action: 'Delete existing shared mailbox in exchange server',
		execute: exchangeServiceSharedAccountDeleteExecute,
		description: noProps,
	},
	{
		name: 'Allow Full Access to a User',
		value: 'ServiceSharedAccountFullAccessCreate',
		action: 'Allow full access to a user',
		execute: exchangeServiceSharedAccountFullAccessCreateExecute,
		description: noProps,
	},
	{
		name: 'Revoke Full Access',
		value: 'ServiceSharedAccountFullAccessDelete',
		action: 'Revoke full access',
		execute: exchangeServiceSharedAccountFullAccessDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceSharedAccountFullAccessGet',
		action: 'Get this object properties',
		execute: exchangeServiceSharedAccountFullAccessGetExecute,
		description: noProps,
	},
	{
		name: 'Full Access Granted Users for This Shared Mailbox',
		value: 'ServiceSharedAccountFullAccessList',
		action: 'Full access granted users for this shared mailbox',
		execute: exchangeServiceSharedAccountFullAccessListExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceSharedAccountGet',
		action: 'Get this object properties',
		execute: exchangeServiceSharedAccountGetExecute,
		description: noProps,
	},
	{
		name: 'Shared Accounts Associated to This Exchange Service',
		value: 'ServiceSharedAccountList',
		action: 'Shared accounts associated to this exchange service',
		execute: exchangeServiceSharedAccountListExecute,
		description: noProps,
	},
	{
		name: 'Get Shared Account Quota Usage in Total Available Space',
		value: 'ServiceSharedAccountQuotaList',
		action: 'Get shared account quota usage in total available space',
		execute: exchangeServiceSharedAccountQuotaListExecute,
		description: noProps,
	},
	{
		name: 'Allow Another User to Send Mails From This Shared Mailbox',
		value: 'ServiceSharedAccountSendAsCreate',
		action: 'Allow another user to send mails from this shared mailbox',
		execute: exchangeServiceSharedAccountSendAsCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Allowed User for sendAs',
		value: 'ServiceSharedAccountSendAsDelete',
		action: 'Delete allowed user for sendAs',
		execute: exchangeServiceSharedAccountSendAsDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceSharedAccountSendAsGet',
		action: 'Get this object properties',
		execute: exchangeServiceSharedAccountSendAsGetExecute,
		description: noProps,
	},
	{
		name: 'Send as Granted Users for This Shared Mailbox',
		value: 'ServiceSharedAccountSendAsList',
		action: 'Send as granted users for this shared mailbox',
		execute: exchangeServiceSharedAccountSendAsListExecute,
		description: noProps,
	},
	{
		name: 'Allow Another User to Send On Behalf To Mails From This Shared Mailbox',
		value: 'ServiceSharedAccountSendOnBehalfToCreate',
		action: 'Allow another user to Send On Behalf To mails from this shared mailbox',
		execute: exchangeServiceSharedAccountSendOnBehalfToCreateExecute,
		description: noProps,
	},
	{
		name: 'Delete Allowed User for SendOnBehalfTo',
		value: 'ServiceSharedAccountSendOnBehalfToDelete',
		action: 'Delete allowed user for SendOnBehalfTo',
		execute: exchangeServiceSharedAccountSendOnBehalfToDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceSharedAccountSendOnBehalfToGet',
		action: 'Get this object properties',
		execute: exchangeServiceSharedAccountSendOnBehalfToGetExecute,
		description: noProps,
	},
	{
		name: 'SendOnBehalfTo Granted Users for This Shared Mailbox',
		value: 'ServiceSharedAccountSendOnBehalfToList',
		action: 'SendOnBehalfTo granted users for this shared mailbox',
		execute: exchangeServiceSharedAccountSendOnBehalfToListExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceSharedAccountTasksGet',
		action: 'Get this object properties',
		execute: exchangeServiceSharedAccountTasksGetExecute,
		description: noProps,
	},
	{
		name: 'Pending Task for This Mailbox',
		value: 'ServiceSharedAccountTasksList',
		action: 'Pending task for this mailbox',
		execute: exchangeServiceSharedAccountTasksListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceSharedAccountUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceSharedAccountUpdateExecute,
		description: noProps,
	},
	{
		name: 'Get This Object Properties',
		value: 'ServiceTaskGet',
		action: 'Get this object properties',
		execute: exchangeServiceTaskGetExecute,
		description: noProps,
	},
	{
		name: 'Pending Actions',
		value: 'ServiceTaskList',
		action: 'Pending actions',
		execute: exchangeServiceTaskListExecute,
		description: noProps,
	},
	{
		name: 'Alter This Object Properties',
		value: 'ServiceUpdate',
		action: 'Alter this object properties',
		execute: exchangeServiceUpdateExecute,
		description: noProps,
	},
	{
		name: 'Update Device List',
		value: 'ServiceUpdateDeviceListCreate',
		action: 'Update device list',
		execute: exchangeServiceUpdateDeviceListCreateExecute,
		description: noProps,
	},
	{
		name: 'Update Spam and Virus Flags on All Active Accounts',
		value: 'ServiceUpdateFlagsOnAllAccountsCreate',
		action: 'Update spam and virus flags on all active accounts',
		execute: exchangeServiceUpdateFlagsOnAllAccountsCreateExecute,
		description: noProps,
	},
	],

);

export { description, execute };
