import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Exchange operations
import * as exchangeExchangeMisc from './misc/exchangeMisc.operation';
import * as exchangeServiceAccountAliasCreate from './account/ServiceAccountAliasCreate.operation';
import * as exchangeServiceAccountAliasDelete from './account/ServiceAccountAliasDelete.operation';
import * as exchangeServiceAccountAliasGet from './account/ServiceAccountAliasGet.operation';
import * as exchangeServiceAccountAliasList from './account/ServiceAccountAliasList.operation';
import * as exchangeServiceAccountArchiveCreate from './account/ServiceAccountArchiveCreate.operation';
import * as exchangeServiceAccountArchiveDelete from './account/ServiceAccountArchiveDelete.operation';
import * as exchangeServiceAccountArchiveList from './account/ServiceAccountArchiveList.operation';
import * as exchangeServiceAccountArchiveUpdate from './account/ServiceAccountArchiveUpdate.operation';
import * as exchangeServiceAccountChangePasswordCreate from './account/ServiceAccountChangePasswordCreate.operation';
import * as exchangeServiceAccountCreate from './account/ServiceAccountCreate.operation';
import * as exchangeServiceAccountDelete from './account/ServiceAccountDelete.operation';
import * as exchangeServiceAccountDiagnosticsCreate from './account/ServiceAccountDiagnosticsCreate.operation';
import * as exchangeServiceAccountDiagnosticsList from './account/ServiceAccountDiagnosticsList.operation';
import * as exchangeServiceAccountExportCreate from './account/ServiceAccountExportCreate.operation';
import * as exchangeServiceAccountExportDelete from './account/ServiceAccountExportDelete.operation';
import * as exchangeServiceAccountExportList from './account/ServiceAccountExportList.operation';
import * as exchangeServiceAccountExportUrlCreate from './account/ServiceAccountExportUrlCreate.operation';
import * as exchangeServiceAccountExportUrlList from './account/ServiceAccountExportUrlList.operation';
import * as exchangeServiceAccountFullAccessCreate from './account/ServiceAccountFullAccessCreate.operation';
import * as exchangeServiceAccountFullAccessDelete from './account/ServiceAccountFullAccessDelete.operation';
import * as exchangeServiceAccountFullAccessGet from './account/ServiceAccountFullAccessGet.operation';
import * as exchangeServiceAccountFullAccessList from './account/ServiceAccountFullAccessList.operation';
import * as exchangeServiceAccountGet from './account/ServiceAccountGet.operation';
import * as exchangeServiceAccountList from './account/ServiceAccountList.operation';
import * as exchangeServiceAccountOutlookUrlCreate from './account/ServiceAccountOutlookUrlCreate.operation';
import * as exchangeServiceAccountOutlookUrlList from './account/ServiceAccountOutlookUrlList.operation';
import * as exchangeServiceAccountProtocolList from './account/ServiceAccountProtocolList.operation';
import * as exchangeServiceAccountProtocolUpdate from './account/ServiceAccountProtocolUpdate.operation';
import * as exchangeServiceAccountSendAsCreate from './account/ServiceAccountSendAsCreate.operation';
import * as exchangeServiceAccountSendAsDelete from './account/ServiceAccountSendAsDelete.operation';
import * as exchangeServiceAccountSendAsGet from './account/ServiceAccountSendAsGet.operation';
import * as exchangeServiceAccountSendAsList from './account/ServiceAccountSendAsList.operation';
import * as exchangeServiceAccountSendOnBehalfToCreate from './account/ServiceAccountSendOnBehalfToCreate.operation';
import * as exchangeServiceAccountSendOnBehalfToDelete from './account/ServiceAccountSendOnBehalfToDelete.operation';
import * as exchangeServiceAccountSendOnBehalfToGet from './account/ServiceAccountSendOnBehalfToGet.operation';
import * as exchangeServiceAccountSendOnBehalfToList from './account/ServiceAccountSendOnBehalfToList.operation';
import * as exchangeServiceAccountTasksGet from './account/ServiceAccountTasksGet.operation';
import * as exchangeServiceAccountTasksList from './account/ServiceAccountTasksList.operation';
import * as exchangeServiceAccountTerminateCreate from './account/ServiceAccountTerminateCreate.operation';
import * as exchangeServiceAccountUpdate from './account/ServiceAccountUpdate.operation';
import * as exchangeServiceActivateSharepointCreate from './activateSharepoint/ServiceActivateSharepointCreate.operation';
import * as exchangeServiceAuthenticationPolicyGet from './authenticationPolicy/ServiceAuthenticationPolicyGet.operation';
import * as exchangeServiceAuthenticationPolicyList from './authenticationPolicy/ServiceAuthenticationPolicyList.operation';
import * as exchangeServiceAuthorizedIpCreate from './authorizedIp/ServiceAuthorizedIpCreate.operation';
import * as exchangeServiceAuthorizedIpIpDelete from './authorizedIp/ServiceAuthorizedIpIpDelete.operation';
import * as exchangeServiceAuthorizedIpIpGet from './authorizedIp/ServiceAuthorizedIpIpGet.operation';
import * as exchangeServiceAuthorizedIpIpUpdate from './authorizedIp/ServiceAuthorizedIpIpUpdate.operation';
import * as exchangeServiceAuthorizedIpList from './authorizedIp/ServiceAuthorizedIpList.operation';
import * as exchangeServiceChangeHostnameCreate from './changeHostname/ServiceChangeHostnameCreate.operation';
import * as exchangeServiceCustomIsolationCreate from './customIsolation/ServiceCustomIsolationCreate.operation';
import * as exchangeServiceCustomIsolationDelete from './customIsolation/ServiceCustomIsolationDelete.operation';
import * as exchangeServiceCustomIsolationGet from './customIsolation/ServiceCustomIsolationGet.operation';
import * as exchangeServiceCustomIsolationList from './customIsolation/ServiceCustomIsolationList.operation';
import * as exchangeServiceDcvEmailsList from './dcvEmails/ServiceDcvEmailsList.operation';
import * as exchangeServiceDeviceClearDeviceCreate from './device/ServiceDeviceClearDeviceCreate.operation';
import * as exchangeServiceDeviceGet from './device/ServiceDeviceGet.operation';
import * as exchangeServiceDeviceList from './device/ServiceDeviceList.operation';
import * as exchangeServiceDeviceUpdate from './device/ServiceDeviceUpdate.operation';
import * as exchangeServiceDomainChangeDefaultSBRUpdate from './domain/ServiceDomainChangeDefaultSBRUpdate.operation';
import * as exchangeServiceDomainCreate from './domain/ServiceDomainCreate.operation';
import * as exchangeServiceDomainDelete from './domain/ServiceDomainDelete.operation';
import * as exchangeServiceDomainDisclaimerAttributeList from './domain/ServiceDomainDisclaimerAttributeList.operation';
import * as exchangeServiceDomainDisclaimerCreate from './domain/ServiceDomainDisclaimerCreate.operation';
import * as exchangeServiceDomainDisclaimerDelete from './domain/ServiceDomainDisclaimerDelete.operation';
import * as exchangeServiceDomainDisclaimerList from './domain/ServiceDomainDisclaimerList.operation';
import * as exchangeServiceDomainDisclaimerUpdate from './domain/ServiceDomainDisclaimerUpdate.operation';
import * as exchangeServiceDomainDkimCreate from './domain/ServiceDomainDkimCreate.operation';
import * as exchangeServiceDomainDkimDelete from './domain/ServiceDomainDkimDelete.operation';
import * as exchangeServiceDomainDkimDisableCreate from './domain/ServiceDomainDkimDisableCreate.operation';
import * as exchangeServiceDomainDkimEnableCreate from './domain/ServiceDomainDkimEnableCreate.operation';
import * as exchangeServiceDomainDkimGet from './domain/ServiceDomainDkimGet.operation';
import * as exchangeServiceDomainDkimList from './domain/ServiceDomainDkimList.operation';
import * as exchangeServiceDomainDkimSelectorList from './domain/ServiceDomainDkimSelectorList.operation';
import * as exchangeServiceDomainGet from './domain/ServiceDomainGet.operation';
import * as exchangeServiceDomainList from './domain/ServiceDomainList.operation';
import * as exchangeServiceDomainUpdate from './domain/ServiceDomainUpdate.operation';
import * as exchangeServiceExternalContactCreate from './externalContact/ServiceExternalContactCreate.operation';
import * as exchangeServiceExternalContactDelete from './externalContact/ServiceExternalContactDelete.operation';
import * as exchangeServiceExternalContactGet from './externalContact/ServiceExternalContactGet.operation';
import * as exchangeServiceExternalContactList from './externalContact/ServiceExternalContactList.operation';
import * as exchangeServiceExternalContactUpdate from './externalContact/ServiceExternalContactUpdate.operation';
import * as exchangeServiceGet from './service/ServiceGet.operation';
import * as exchangeServiceImpersonatedUserChangePasswordCreate from './impersonatedUser/ServiceImpersonatedUserChangePasswordCreate.operation';
import * as exchangeServiceImpersonatedUserCreate from './impersonatedUser/ServiceImpersonatedUserCreate.operation';
import * as exchangeServiceImpersonatedUserDelete from './impersonatedUser/ServiceImpersonatedUserDelete.operation';
import * as exchangeServiceImpersonatedUserList from './impersonatedUser/ServiceImpersonatedUserList.operation';
import * as exchangeServiceImpersonationPasswordPolicyList from './impersonationPasswordPolicy/ServiceImpersonationPasswordPolicyList.operation';
import * as exchangeServiceLicenseList from './license/ServiceLicenseList.operation';
import * as exchangeServiceList from './service/ServiceList.operation';
import * as exchangeServiceLogKindGet from './log/ServiceLogKindGet.operation';
import * as exchangeServiceLogKindList from './log/ServiceLogKindList.operation';
import * as exchangeServiceLogSubscriptionCreate from './log/ServiceLogSubscriptionCreate.operation';
import * as exchangeServiceLogSubscriptionDelete from './log/ServiceLogSubscriptionDelete.operation';
import * as exchangeServiceLogSubscriptionGet from './log/ServiceLogSubscriptionGet.operation';
import * as exchangeServiceLogSubscriptionList from './log/ServiceLogSubscriptionList.operation';
import * as exchangeServiceLogUrlCreate from './log/ServiceLogUrlCreate.operation';
import * as exchangeServiceMailingListAliasCreate from './mailingList/ServiceMailingListAliasCreate.operation';
import * as exchangeServiceMailingListAliasDelete from './mailingList/ServiceMailingListAliasDelete.operation';
import * as exchangeServiceMailingListAliasGet from './mailingList/ServiceMailingListAliasGet.operation';
import * as exchangeServiceMailingListAliasList from './mailingList/ServiceMailingListAliasList.operation';
import * as exchangeServiceMailingListCreate from './mailingList/ServiceMailingListCreate.operation';
import * as exchangeServiceMailingListDelete from './mailingList/ServiceMailingListDelete.operation';
import * as exchangeServiceMailingListGet from './mailingList/ServiceMailingListGet.operation';
import * as exchangeServiceMailingListList from './mailingList/ServiceMailingListList.operation';
import * as exchangeServiceMailingListManagerAccountCreate from './mailingList/ServiceMailingListManagerAccountCreate.operation';
import * as exchangeServiceMailingListManagerAccountList from './mailingList/ServiceMailingListManagerAccountList.operation';
import * as exchangeServiceMailingListManagerAccountManagerAccountIdDelete from './mailingList/ServiceMailingListManagerAccountManagerAccountIdDelete.operation';
import * as exchangeServiceMailingListManagerAccountManagerAccountIdGet from './mailingList/ServiceMailingListManagerAccountManagerAccountIdGet.operation';
import * as exchangeServiceMailingListMemberAccountCreate from './mailingList/ServiceMailingListMemberAccountCreate.operation';
import * as exchangeServiceMailingListMemberAccountList from './mailingList/ServiceMailingListMemberAccountList.operation';
import * as exchangeServiceMailingListMemberAccountMemberAccountIdDelete from './mailingList/ServiceMailingListMemberAccountMemberAccountIdDelete.operation';
import * as exchangeServiceMailingListMemberAccountMemberAccountIdGet from './mailingList/ServiceMailingListMemberAccountMemberAccountIdGet.operation';
import * as exchangeServiceMailingListMemberContactCreate from './mailingList/ServiceMailingListMemberContactCreate.operation';
import * as exchangeServiceMailingListMemberContactList from './mailingList/ServiceMailingListMemberContactList.operation';
import * as exchangeServiceMailingListMemberContactMemberContactIdDelete from './mailingList/ServiceMailingListMemberContactMemberContactIdDelete.operation';
import * as exchangeServiceMailingListMemberContactMemberContactIdGet from './mailingList/ServiceMailingListMemberContactMemberContactIdGet.operation';
import * as exchangeServiceMailingListSendAsCreate from './mailingList/ServiceMailingListSendAsCreate.operation';
import * as exchangeServiceMailingListSendAsDelete from './mailingList/ServiceMailingListSendAsDelete.operation';
import * as exchangeServiceMailingListSendAsGet from './mailingList/ServiceMailingListSendAsGet.operation';
import * as exchangeServiceMailingListSendAsList from './mailingList/ServiceMailingListSendAsList.operation';
import * as exchangeServiceMailingListSendOnBehalfToCreate from './mailingList/ServiceMailingListSendOnBehalfToCreate.operation';
import * as exchangeServiceMailingListSendOnBehalfToDelete from './mailingList/ServiceMailingListSendOnBehalfToDelete.operation';
import * as exchangeServiceMailingListSendOnBehalfToGet from './mailingList/ServiceMailingListSendOnBehalfToGet.operation';
import * as exchangeServiceMailingListSendOnBehalfToList from './mailingList/ServiceMailingListSendOnBehalfToList.operation';
import * as exchangeServiceMailingListUpdate from './mailingList/ServiceMailingListUpdate.operation';
import * as exchangeServiceOutlookAvailabilityList from './outlookAvailability/ServiceOutlookAvailabilityList.operation';
import * as exchangeServiceProtocolActiveSyncMailNotificationCreate from './protocol/ServiceProtocolActiveSyncMailNotificationCreate.operation';
import * as exchangeServiceProtocolActiveSyncMailNotificationList from './protocol/ServiceProtocolActiveSyncMailNotificationList.operation';
import * as exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete from './protocol/ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete.operation';
import * as exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet from './protocol/ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet.operation';
import * as exchangeServiceProtocolList from './protocol/ServiceProtocolList.operation';
import * as exchangeServiceProtocolUpdate from './protocol/ServiceProtocolUpdate.operation';
import * as exchangeServicePublicFolderCreate from './publicFolder/ServicePublicFolderCreate.operation';
import * as exchangeServicePublicFolderDelete from './publicFolder/ServicePublicFolderDelete.operation';
import * as exchangeServicePublicFolderGet from './publicFolder/ServicePublicFolderGet.operation';
import * as exchangeServicePublicFolderList from './publicFolder/ServicePublicFolderList.operation';
import * as exchangeServicePublicFolderPermissionCreate from './publicFolder/ServicePublicFolderPermissionCreate.operation';
import * as exchangeServicePublicFolderPermissionDelete from './publicFolder/ServicePublicFolderPermissionDelete.operation';
import * as exchangeServicePublicFolderPermissionGet from './publicFolder/ServicePublicFolderPermissionGet.operation';
import * as exchangeServicePublicFolderPermissionList from './publicFolder/ServicePublicFolderPermissionList.operation';
import * as exchangeServicePublicFolderPermissionUpdate from './publicFolder/ServicePublicFolderPermissionUpdate.operation';
import * as exchangeServicePublicFolderQuotaList from './publicFolderQuota/ServicePublicFolderQuotaList.operation';
import * as exchangeServicePublicFolderUpdate from './publicFolder/ServicePublicFolderUpdate.operation';
import * as exchangeServiceRemoteMailboxAliasCreate from './remoteMailbox/ServiceRemoteMailboxAliasCreate.operation';
import * as exchangeServiceRemoteMailboxAliasDelete from './remoteMailbox/ServiceRemoteMailboxAliasDelete.operation';
import * as exchangeServiceRemoteMailboxAliasGet from './remoteMailbox/ServiceRemoteMailboxAliasGet.operation';
import * as exchangeServiceRemoteMailboxAliasList from './remoteMailbox/ServiceRemoteMailboxAliasList.operation';
import * as exchangeServiceRemoteMailboxChangePasswordCreate from './remoteMailbox/ServiceRemoteMailboxChangePasswordCreate.operation';
import * as exchangeServiceRemoteMailboxCreate from './remoteMailbox/ServiceRemoteMailboxCreate.operation';
import * as exchangeServiceRemoteMailboxDelete from './remoteMailbox/ServiceRemoteMailboxDelete.operation';
import * as exchangeServiceRemoteMailboxGet from './remoteMailbox/ServiceRemoteMailboxGet.operation';
import * as exchangeServiceRemoteMailboxList from './remoteMailbox/ServiceRemoteMailboxList.operation';
import * as exchangeServiceRemoteMailboxUpdate from './remoteMailbox/ServiceRemoteMailboxUpdate.operation';
import * as exchangeServiceRenewSslCreate from './renewSSL/ServiceRenewSslCreate.operation';
import * as exchangeServiceResourceAccountCreate from './resourceAccount/ServiceResourceAccountCreate.operation';
import * as exchangeServiceResourceAccountDelegateCreate from './resourceAccount/ServiceResourceAccountDelegateCreate.operation';
import * as exchangeServiceResourceAccountDelegateDelete from './resourceAccount/ServiceResourceAccountDelegateDelete.operation';
import * as exchangeServiceResourceAccountDelegateGet from './resourceAccount/ServiceResourceAccountDelegateGet.operation';
import * as exchangeServiceResourceAccountDelegateList from './resourceAccount/ServiceResourceAccountDelegateList.operation';
import * as exchangeServiceResourceAccountDelete from './resourceAccount/ServiceResourceAccountDelete.operation';
import * as exchangeServiceResourceAccountGet from './resourceAccount/ServiceResourceAccountGet.operation';
import * as exchangeServiceResourceAccountList from './resourceAccount/ServiceResourceAccountList.operation';
import * as exchangeServiceResourceAccountUpdate from './resourceAccount/ServiceResourceAccountUpdate.operation';
import * as exchangeServiceSendConnectorChangeAuthenticationCreate from './sendConnector/ServiceSendConnectorChangeAuthenticationCreate.operation';
import * as exchangeServiceSendConnectorCreate from './sendConnector/ServiceSendConnectorCreate.operation';
import * as exchangeServiceSendConnectorDelete from './sendConnector/ServiceSendConnectorDelete.operation';
import * as exchangeServiceSendConnectorGet from './sendConnector/ServiceSendConnectorGet.operation';
import * as exchangeServiceSendConnectorList from './sendConnector/ServiceSendConnectorList.operation';
import * as exchangeServiceSendConnectorUpdate from './sendConnector/ServiceSendConnectorUpdate.operation';
import * as exchangeServiceServerList from './server/ServiceServerList.operation';
import * as exchangeServiceServerUpdate from './server/ServiceServerUpdate.operation';
import * as exchangeServiceServiceInfosList from './serviceInfos/ServiceServiceInfosList.operation';
import * as exchangeServiceServiceInfosUpdate from './serviceInfos/ServiceServiceInfosUpdate.operation';
import * as exchangeServiceSharedAccountAliasCreate from './sharedAccount/ServiceSharedAccountAliasCreate.operation';
import * as exchangeServiceSharedAccountAliasDelete from './sharedAccount/ServiceSharedAccountAliasDelete.operation';
import * as exchangeServiceSharedAccountAliasGet from './sharedAccount/ServiceSharedAccountAliasGet.operation';
import * as exchangeServiceSharedAccountAliasList from './sharedAccount/ServiceSharedAccountAliasList.operation';
import * as exchangeServiceSharedAccountCreate from './sharedAccount/ServiceSharedAccountCreate.operation';
import * as exchangeServiceSharedAccountDelete from './sharedAccount/ServiceSharedAccountDelete.operation';
import * as exchangeServiceSharedAccountFullAccessCreate from './sharedAccount/ServiceSharedAccountFullAccessCreate.operation';
import * as exchangeServiceSharedAccountFullAccessDelete from './sharedAccount/ServiceSharedAccountFullAccessDelete.operation';
import * as exchangeServiceSharedAccountFullAccessGet from './sharedAccount/ServiceSharedAccountFullAccessGet.operation';
import * as exchangeServiceSharedAccountFullAccessList from './sharedAccount/ServiceSharedAccountFullAccessList.operation';
import * as exchangeServiceSharedAccountGet from './sharedAccount/ServiceSharedAccountGet.operation';
import * as exchangeServiceSharedAccountList from './sharedAccount/ServiceSharedAccountList.operation';
import * as exchangeServiceSharedAccountQuotaList from './sharedAccountQuota/ServiceSharedAccountQuotaList.operation';
import * as exchangeServiceSharedAccountSendAsCreate from './sharedAccount/ServiceSharedAccountSendAsCreate.operation';
import * as exchangeServiceSharedAccountSendAsDelete from './sharedAccount/ServiceSharedAccountSendAsDelete.operation';
import * as exchangeServiceSharedAccountSendAsGet from './sharedAccount/ServiceSharedAccountSendAsGet.operation';
import * as exchangeServiceSharedAccountSendAsList from './sharedAccount/ServiceSharedAccountSendAsList.operation';
import * as exchangeServiceSharedAccountSendOnBehalfToCreate from './sharedAccount/ServiceSharedAccountSendOnBehalfToCreate.operation';
import * as exchangeServiceSharedAccountSendOnBehalfToDelete from './sharedAccount/ServiceSharedAccountSendOnBehalfToDelete.operation';
import * as exchangeServiceSharedAccountSendOnBehalfToGet from './sharedAccount/ServiceSharedAccountSendOnBehalfToGet.operation';
import * as exchangeServiceSharedAccountSendOnBehalfToList from './sharedAccount/ServiceSharedAccountSendOnBehalfToList.operation';
import * as exchangeServiceSharedAccountTasksGet from './sharedAccount/ServiceSharedAccountTasksGet.operation';
import * as exchangeServiceSharedAccountTasksList from './sharedAccount/ServiceSharedAccountTasksList.operation';
import * as exchangeServiceSharedAccountUpdate from './sharedAccount/ServiceSharedAccountUpdate.operation';
import * as exchangeServiceTaskGet from './task/ServiceTaskGet.operation';
import * as exchangeServiceTaskList from './task/ServiceTaskList.operation';
import * as exchangeServiceUpdate from './service/ServiceUpdate.operation';
import * as exchangeServiceUpdateDeviceListCreate from './updateDeviceList/ServiceUpdateDeviceListCreate.operation';
import * as exchangeServiceUpdateFlagsOnAllAccountsCreate from './updateFlagsOnAllAccounts/ServiceUpdateFlagsOnAllAccountsCreate.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'exchangeOperation',
		type: 'options',
		noDataExpression: true,
		default: 'exchangeMisc',
		options: [
			{
				displayName: 'List available services',
				name: 'exchangeMisc',
				value: 'exchangeMisc',
			},
			{
				displayName: 'Create new alias',
				name: 'ServiceAccountAliasCreate',
				value: 'ServiceAccountAliasCreate',
			},
			{
				displayName: 'Delete existing alias',
				name: 'ServiceAccountAliasDelete',
				value: 'ServiceAccountAliasDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountAliasGet',
				value: 'ServiceAccountAliasGet',
			},
			{
				displayName: 'Aliases associated to this mailbox',
				name: 'ServiceAccountAliasList',
				value: 'ServiceAccountAliasList',
			},
			{
				displayName: 'Create new archive mailbox',
				name: 'ServiceAccountArchiveCreate',
				value: 'ServiceAccountArchiveCreate',
			},
			{
				displayName: 'Delete existing archive mailbox',
				name: 'ServiceAccountArchiveDelete',
				value: 'ServiceAccountArchiveDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountArchiveList',
				value: 'ServiceAccountArchiveList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceAccountArchiveUpdate',
				value: 'ServiceAccountArchiveUpdate',
			},
			{
				displayName: 'Change mailbox password',
				name: 'ServiceAccountChangePasswordCreate',
				value: 'ServiceAccountChangePasswordCreate',
			},
			{
				displayName: 'Create new mailbox in exchange server',
				name: 'ServiceAccountCreate',
				value: 'ServiceAccountCreate',
			},
			{
				displayName: 'Delete existing mailbox in exchange server',
				name: 'ServiceAccountDelete',
				value: 'ServiceAccountDelete',
			},
			{
				displayName: 'Create new diagnosis request',
				name: 'ServiceAccountDiagnosticsCreate',
				value: 'ServiceAccountDiagnosticsCreate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountDiagnosticsList',
				value: 'ServiceAccountDiagnosticsList',
			},
			{
				displayName: 'Request PST file for the account',
				name: 'ServiceAccountExportCreate',
				value: 'ServiceAccountExportCreate',
			},
			{
				displayName: 'Remove request of PST file',
				name: 'ServiceAccountExportDelete',
				value: 'ServiceAccountExportDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountExportList',
				value: 'ServiceAccountExportList',
			},
			{
				displayName: 'Generate temporary url to PST file',
				name: 'ServiceAccountExportUrlCreate',
				value: 'ServiceAccountExportUrlCreate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountExportUrlList',
				value: 'ServiceAccountExportUrlList',
			},
			{
				displayName: 'Allow full access to a user',
				name: 'ServiceAccountFullAccessCreate',
				value: 'ServiceAccountFullAccessCreate',
			},
			{
				displayName: 'Revoke full access',
				name: 'ServiceAccountFullAccessDelete',
				value: 'ServiceAccountFullAccessDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountFullAccessGet',
				value: 'ServiceAccountFullAccessGet',
			},
			{
				displayName: 'Full access granted users for this mailbox',
				name: 'ServiceAccountFullAccessList',
				value: 'ServiceAccountFullAccessList',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountGet',
				value: 'ServiceAccountGet',
			},
			{
				displayName: 'Accounts associated to this exchange service',
				name: 'ServiceAccountList',
				value: 'ServiceAccountList',
			},
			{
				displayName: 'Generate outlook url',
				name: 'ServiceAccountOutlookUrlCreate',
				value: 'ServiceAccountOutlookUrlCreate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountOutlookUrlList',
				value: 'ServiceAccountOutlookUrlList',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountProtocolList',
				value: 'ServiceAccountProtocolList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceAccountProtocolUpdate',
				value: 'ServiceAccountProtocolUpdate',
			},
			{
				displayName: 'Allow another user to send mails from this mailbox',
				name: 'ServiceAccountSendAsCreate',
				value: 'ServiceAccountSendAsCreate',
			},
			{
				displayName: 'Delete allowed user for sendAs',
				name: 'ServiceAccountSendAsDelete',
				value: 'ServiceAccountSendAsDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountSendAsGet',
				value: 'ServiceAccountSendAsGet',
			},
			{
				displayName: 'Send as granted users for this mailbox',
				name: 'ServiceAccountSendAsList',
				value: 'ServiceAccountSendAsList',
			},
			{
				displayName: 'Allow another user to Send On Behalf To mails from this mailbox',
				name: 'ServiceAccountSendOnBehalfToCreate',
				value: 'ServiceAccountSendOnBehalfToCreate',
			},
			{
				displayName: 'Delete allowed user for SendOnBehalfTo',
				name: 'ServiceAccountSendOnBehalfToDelete',
				value: 'ServiceAccountSendOnBehalfToDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountSendOnBehalfToGet',
				value: 'ServiceAccountSendOnBehalfToGet',
			},
			{
				displayName: 'SendOnBehalfTo granted users for this mailbox',
				name: 'ServiceAccountSendOnBehalfToList',
				value: 'ServiceAccountSendOnBehalfToList',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAccountTasksGet',
				value: 'ServiceAccountTasksGet',
			},
			{
				displayName: 'Pending task for this mailbox',
				name: 'ServiceAccountTasksList',
				value: 'ServiceAccountTasksList',
			},
			{
				displayName: 'Terminate account at expiration date',
				name: 'ServiceAccountTerminateCreate',
				value: 'ServiceAccountTerminateCreate',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceAccountUpdate',
				value: 'ServiceAccountUpdate',
			},
			{
				displayName: 'Activate Sharepoint infra connected to this exchange service',
				name: 'ServiceActivateSharepointCreate',
				value: 'ServiceActivateSharepointCreate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAuthenticationPolicyGet',
				value: 'ServiceAuthenticationPolicyGet',
			},
			{
				displayName: 'Authentication policy for protocols',
				name: 'ServiceAuthenticationPolicyList',
				value: 'ServiceAuthenticationPolicyList',
			},
			{
				displayName: 'Authorize new IP to access the service',
				name: 'ServiceAuthorizedIpCreate',
				value: 'ServiceAuthorizedIpCreate',
			},
			{
				displayName: 'Delete authorized IP',
				name: 'ServiceAuthorizedIpIpDelete',
				value: 'ServiceAuthorizedIpIpDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceAuthorizedIpIpGet',
				value: 'ServiceAuthorizedIpIpGet',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceAuthorizedIpIpUpdate',
				value: 'ServiceAuthorizedIpIpUpdate',
			},
			{
				displayName: 'Authorized IPs for POP(s),IMAP(s), SMTP(s) and HTTP(s)',
				name: 'ServiceAuthorizedIpList',
				value: 'ServiceAuthorizedIpList',
			},
			{
				displayName: 'Setting SSL hostname for Exchange private offer',
				name: 'ServiceChangeHostnameCreate',
				value: 'ServiceChangeHostnameCreate',
			},
			{
				displayName: 'Create new custom isolation for mailbox',
				name: 'ServiceCustomIsolationCreate',
				value: 'ServiceCustomIsolationCreate',
			},
			{
				displayName: 'Delete existing custom isolation for mailbox',
				name: 'ServiceCustomIsolationDelete',
				value: 'ServiceCustomIsolationDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceCustomIsolationGet',
				value: 'ServiceCustomIsolationGet',
			},
			{
				displayName: 'Custom isolation for mailbox',
				name: 'ServiceCustomIsolationList',
				value: 'ServiceCustomIsolationList',
			},
			{
				displayName: 'Get DCV emails if your ssl will expire in next 30 days',
				name: 'ServiceDcvEmailsList',
				value: 'ServiceDcvEmailsList',
			},
			{
				displayName: 'Executes a factory reset on the device',
				name: 'ServiceDeviceClearDeviceCreate',
				value: 'ServiceDeviceClearDeviceCreate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceDeviceGet',
				value: 'ServiceDeviceGet',
			},
			{
				displayName: 'List of your ActiveSync devices registered on this Exchange service',
				name: 'ServiceDeviceList',
				value: 'ServiceDeviceList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceDeviceUpdate',
				value: 'ServiceDeviceUpdate',
			},
			{
				displayName: 'Change default values of SBR used for all new created account on this domain',
				name: 'ServiceDomainChangeDefaultSBRUpdate',
				value: 'ServiceDomainChangeDefaultSBRUpdate',
			},
			{
				displayName: 'Create new domain in exchange services',
				name: 'ServiceDomainCreate',
				value: 'ServiceDomainCreate',
			},
			{
				displayName: 'Delete existing domain in exchange services',
				name: 'ServiceDomainDelete',
				value: 'ServiceDomainDelete',
			},
			{
				displayName: 'Get diclaimer attributes to substitute with Active Directory properties',
				name: 'ServiceDomainDisclaimerAttributeList',
				value: 'ServiceDomainDisclaimerAttributeList',
			},
			{
				displayName: 'Create organization disclaimer of each email',
				name: 'ServiceDomainDisclaimerCreate',
				value: 'ServiceDomainDisclaimerCreate',
			},
			{
				displayName: 'Delete existing organization disclaimer',
				name: 'ServiceDomainDisclaimerDelete',
				value: 'ServiceDomainDisclaimerDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceDomainDisclaimerList',
				value: 'ServiceDomainDisclaimerList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceDomainDisclaimerUpdate',
				value: 'ServiceDomainDisclaimerUpdate',
			},
			{
				displayName: 'Create DKIM selector on this domain',
				name: 'ServiceDomainDkimCreate',
				value: 'ServiceDomainDkimCreate',
			},
			{
				displayName: 'Delete DKIM selector on this domain',
				name: 'ServiceDomainDkimDelete',
				value: 'ServiceDomainDkimDelete',
			},
			{
				displayName: 'Disable dkim signing',
				name: 'ServiceDomainDkimDisableCreate',
				value: 'ServiceDomainDkimDisableCreate',
			},
			{
				displayName: 'Enable dkim signing or switch selector used',
				name: 'ServiceDomainDkimEnableCreate',
				value: 'ServiceDomainDkimEnableCreate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceDomainDkimGet',
				value: 'ServiceDomainDkimGet',
			},
			{
				displayName: 'Dkim associated to this domain',
				name: 'ServiceDomainDkimList',
				value: 'ServiceDomainDkimList',
			},
			{
				displayName: 'Get dkim selector list',
				name: 'ServiceDomainDkimSelectorList',
				value: 'ServiceDomainDkimSelectorList',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceDomainGet',
				value: 'ServiceDomainGet',
			},
			{
				displayName: 'Domains associated to this service',
				name: 'ServiceDomainList',
				value: 'ServiceDomainList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceDomainUpdate',
				value: 'ServiceDomainUpdate',
			},
			{
				displayName: 'Create new external contact',
				name: 'ServiceExternalContactCreate',
				value: 'ServiceExternalContactCreate',
			},
			{
				displayName: 'Delete external contact',
				name: 'ServiceExternalContactDelete',
				value: 'ServiceExternalContactDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceExternalContactGet',
				value: 'ServiceExternalContactGet',
			},
			{
				displayName: 'External contacts for this service',
				name: 'ServiceExternalContactList',
				value: 'ServiceExternalContactList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceExternalContactUpdate',
				value: 'ServiceExternalContactUpdate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceGet',
				value: 'ServiceGet',
			},
			{
				displayName: 'Change user password',
				name: 'ServiceImpersonatedUserChangePasswordCreate',
				value: 'ServiceImpersonatedUserChangePasswordCreate',
			},
			{
				displayName: 'Create user with impersonation right on all mailboxes',
				name: 'ServiceImpersonatedUserCreate',
				value: 'ServiceImpersonatedUserCreate',
			},
			{
				displayName: 'Delete user with impersonation right on all mailboxes',
				name: 'ServiceImpersonatedUserDelete',
				value: 'ServiceImpersonatedUserDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceImpersonatedUserList',
				value: 'ServiceImpersonatedUserList',
			},
			{
				displayName: 'Get configuration of password policy linked to impersonated account',
				name: 'ServiceImpersonationPasswordPolicyList',
				value: 'ServiceImpersonationPasswordPolicyList',
			},
			{
				displayName: 'Get active licenses for specific period of time',
				name: 'ServiceLicenseList',
				value: 'ServiceLicenseList',
			},
			{
				displayName: 'List available services',
				name: 'ServiceList',
				value: 'ServiceList',
			},
			{
				displayName: 'Get a log kind',
				name: 'ServiceLogKindGet',
				value: 'ServiceLogKindGet',
			},
			{
				displayName: 'List available log kinds',
				name: 'ServiceLogKindList',
				value: 'ServiceLogKindList',
			},
			{
				displayName: 'Create a subscription from logs to a pre-existing LDP stream',
				name: 'ServiceLogSubscriptionCreate',
				value: 'ServiceLogSubscriptionCreate',
			},
			{
				displayName: 'Delete a subscription',
				name: 'ServiceLogSubscriptionDelete',
				value: 'ServiceLogSubscriptionDelete',
			},
			{
				displayName: 'Get subscription details',
				name: 'ServiceLogSubscriptionGet',
				value: 'ServiceLogSubscriptionGet',
			},
			{
				displayName: 'List subscription IDs for a cluster',
				name: 'ServiceLogSubscriptionList',
				value: 'ServiceLogSubscriptionList',
			},
			{
				displayName: 'Generate a temporary URL to retrieve logs',
				name: 'ServiceLogUrlCreate',
				value: 'ServiceLogUrlCreate',
			},
			{
				displayName: 'Create new alias',
				name: 'ServiceMailingListAliasCreate',
				value: 'ServiceMailingListAliasCreate',
			},
			{
				displayName: 'Delete existing alias',
				name: 'ServiceMailingListAliasDelete',
				value: 'ServiceMailingListAliasDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceMailingListAliasGet',
				value: 'ServiceMailingListAliasGet',
			},
			{
				displayName: 'Aliases associated to this mailingList',
				name: 'ServiceMailingListAliasList',
				value: 'ServiceMailingListAliasList',
			},
			{
				displayName: 'Add mailing list',
				name: 'ServiceMailingListCreate',
				value: 'ServiceMailingListCreate',
			},
			{
				displayName: 'Delete mailing list',
				name: 'ServiceMailingListDelete',
				value: 'ServiceMailingListDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceMailingListGet',
				value: 'ServiceMailingListGet',
			},
			{
				displayName: 'Mailing list for this service',
				name: 'ServiceMailingListList',
				value: 'ServiceMailingListList',
			},
			{
				displayName: 'Add new mailing list manager',
				name: 'ServiceMailingListManagerAccountCreate',
				value: 'ServiceMailingListManagerAccountCreate',
			},
			{
				displayName: 'Mailing list account manager',
				name: 'ServiceMailingListManagerAccountList',
				value: 'ServiceMailingListManagerAccountList',
			},
			{
				displayName: 'Delete mailing list manager',
				name: 'ServiceMailingListManagerAccountManagerAccountIdDelete',
				value: 'ServiceMailingListManagerAccountManagerAccountIdDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceMailingListManagerAccountManagerAccountIdGet',
				value: 'ServiceMailingListManagerAccountManagerAccountIdGet',
			},
			{
				displayName: 'Add new mailing list member',
				name: 'ServiceMailingListMemberAccountCreate',
				value: 'ServiceMailingListMemberAccountCreate',
			},
			{
				displayName: 'Mailing list account member',
				name: 'ServiceMailingListMemberAccountList',
				value: 'ServiceMailingListMemberAccountList',
			},
			{
				displayName: 'Delete mailing list member',
				name: 'ServiceMailingListMemberAccountMemberAccountIdDelete',
				value: 'ServiceMailingListMemberAccountMemberAccountIdDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceMailingListMemberAccountMemberAccountIdGet',
				value: 'ServiceMailingListMemberAccountMemberAccountIdGet',
			},
			{
				displayName: 'Add new mailing list member',
				name: 'ServiceMailingListMemberContactCreate',
				value: 'ServiceMailingListMemberContactCreate',
			},
			{
				displayName: 'Mailing list contact member',
				name: 'ServiceMailingListMemberContactList',
				value: 'ServiceMailingListMemberContactList',
			},
			{
				displayName: 'Delete mailing list member',
				name: 'ServiceMailingListMemberContactMemberContactIdDelete',
				value: 'ServiceMailingListMemberContactMemberContactIdDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceMailingListMemberContactMemberContactIdGet',
				value: 'ServiceMailingListMemberContactMemberContactIdGet',
			},
			{
				displayName: 'Allow another user to Send aso mails from this mailing list',
				name: 'ServiceMailingListSendAsCreate',
				value: 'ServiceMailingListSendAsCreate',
			},
			{
				displayName: 'Delete allowed user for SendAs',
				name: 'ServiceMailingListSendAsDelete',
				value: 'ServiceMailingListSendAsDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceMailingListSendAsGet',
				value: 'ServiceMailingListSendAsGet',
			},
			{
				displayName: 'SendAs',
				name: 'ServiceMailingListSendAsList',
				value: 'ServiceMailingListSendAsList',
			},
			{
				displayName: 'Allow another user to Send aso mails from this mailing list',
				name: 'ServiceMailingListSendOnBehalfToCreate',
				value: 'ServiceMailingListSendOnBehalfToCreate',
			},
			{
				displayName: 'Delete allowed user for SendOnBehalfTo',
				name: 'ServiceMailingListSendOnBehalfToDelete',
				value: 'ServiceMailingListSendOnBehalfToDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceMailingListSendOnBehalfToGet',
				value: 'ServiceMailingListSendOnBehalfToGet',
			},
			{
				displayName: 'SendOnBehalfTo',
				name: 'ServiceMailingListSendOnBehalfToList',
				value: 'ServiceMailingListSendOnBehalfToList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceMailingListUpdate',
				value: 'ServiceMailingListUpdate',
			},
			{
				displayName: 'Show available outlooks',
				name: 'ServiceOutlookAvailabilityList',
				value: 'ServiceOutlookAvailabilityList',
			},
			{
				displayName: 'Subscribe new address to ActiveSync quarantine notifications',
				name: 'ServiceProtocolActiveSyncMailNotificationCreate',
				value: 'ServiceProtocolActiveSyncMailNotificationCreate',
			},
			{
				displayName: 'Exchange account id subscribed to ActiveSync quarantine notifications',
				name: 'ServiceProtocolActiveSyncMailNotificationList',
				value: 'ServiceProtocolActiveSyncMailNotificationList',
			},
			{
				displayName: 'Unubscribe address from ActiveSync quarantine notifications',
				name: 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete',
				value: 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet',
				value: 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceProtocolList',
				value: 'ServiceProtocolList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceProtocolUpdate',
				value: 'ServiceProtocolUpdate',
			},
			{
				displayName: 'Create organization public folder',
				name: 'ServicePublicFolderCreate',
				value: 'ServicePublicFolderCreate',
			},
			{
				displayName: 'Delete existing organization public folder',
				name: 'ServicePublicFolderDelete',
				value: 'ServicePublicFolderDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServicePublicFolderGet',
				value: 'ServicePublicFolderGet',
			},
			{
				displayName: 'Public folders associated to this service',
				name: 'ServicePublicFolderList',
				value: 'ServicePublicFolderList',
			},
			{
				displayName: 'Create public folder permission',
				name: 'ServicePublicFolderPermissionCreate',
				value: 'ServicePublicFolderPermissionCreate',
			},
			{
				displayName: 'Delete existing permission from public folder',
				name: 'ServicePublicFolderPermissionDelete',
				value: 'ServicePublicFolderPermissionDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServicePublicFolderPermissionGet',
				value: 'ServicePublicFolderPermissionGet',
			},
			{
				displayName: 'Public folder permission',
				name: 'ServicePublicFolderPermissionList',
				value: 'ServicePublicFolderPermissionList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServicePublicFolderPermissionUpdate',
				value: 'ServicePublicFolderPermissionUpdate',
			},
			{
				displayName: 'Get public folder quota usage in total available space',
				name: 'ServicePublicFolderQuotaList',
				value: 'ServicePublicFolderQuotaList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServicePublicFolderUpdate',
				value: 'ServicePublicFolderUpdate',
			},
			{
				displayName: 'Create new alias',
				name: 'ServiceRemoteMailboxAliasCreate',
				value: 'ServiceRemoteMailboxAliasCreate',
			},
			{
				displayName: 'Delete existing alias',
				name: 'ServiceRemoteMailboxAliasDelete',
				value: 'ServiceRemoteMailboxAliasDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceRemoteMailboxAliasGet',
				value: 'ServiceRemoteMailboxAliasGet',
			},
			{
				displayName: 'Aliases associated to this remote mailbox',
				name: 'ServiceRemoteMailboxAliasList',
				value: 'ServiceRemoteMailboxAliasList',
			},
			{
				displayName: 'Change mailbox password',
				name: 'ServiceRemoteMailboxChangePasswordCreate',
				value: 'ServiceRemoteMailboxChangePasswordCreate',
			},
			{
				displayName: 'Create new remote mailbox in exchange server',
				name: 'ServiceRemoteMailboxCreate',
				value: 'ServiceRemoteMailboxCreate',
			},
			{
				displayName: 'Delete existing remote mailbox in exchange server',
				name: 'ServiceRemoteMailboxDelete',
				value: 'ServiceRemoteMailboxDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceRemoteMailboxGet',
				value: 'ServiceRemoteMailboxGet',
			},
			{
				displayName: 'Remote mailboxes associated to this exchange service',
				name: 'ServiceRemoteMailboxList',
				value: 'ServiceRemoteMailboxList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceRemoteMailboxUpdate',
				value: 'ServiceRemoteMailboxUpdate',
			},
			{
				displayName: 'Renew SSL if it will expire in next 30 days',
				name: 'ServiceRenewSslCreate',
				value: 'ServiceRenewSslCreate',
			},
			{
				displayName: 'Create new resource account in exchange server',
				name: 'ServiceResourceAccountCreate',
				value: 'ServiceResourceAccountCreate',
			},
			{
				displayName: 'Add new resource account delegate in exchange server',
				name: 'ServiceResourceAccountDelegateCreate',
				value: 'ServiceResourceAccountDelegateCreate',
			},
			{
				displayName: 'Delete existing resource account delegate in exchange server',
				name: 'ServiceResourceAccountDelegateDelete',
				value: 'ServiceResourceAccountDelegateDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceResourceAccountDelegateGet',
				value: 'ServiceResourceAccountDelegateGet',
			},
			{
				displayName: 'Resource account manager',
				name: 'ServiceResourceAccountDelegateList',
				value: 'ServiceResourceAccountDelegateList',
			},
			{
				displayName: 'Delete existing resource account in exchange server',
				name: 'ServiceResourceAccountDelete',
				value: 'ServiceResourceAccountDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceResourceAccountGet',
				value: 'ServiceResourceAccountGet',
			},
			{
				displayName: 'Resource account associated to this service',
				name: 'ServiceResourceAccountList',
				value: 'ServiceResourceAccountList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceResourceAccountUpdate',
				value: 'ServiceResourceAccountUpdate',
			},
			{
				displayName: 'Change authentication on send connector',
				name: 'ServiceSendConnectorChangeAuthenticationCreate',
				value: 'ServiceSendConnectorChangeAuthenticationCreate',
			},
			{
				displayName: 'Create new send connector',
				name: 'ServiceSendConnectorCreate',
				value: 'ServiceSendConnectorCreate',
			},
			{
				displayName: 'Delete existing send connector',
				name: 'ServiceSendConnectorDelete',
				value: 'ServiceSendConnectorDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceSendConnectorGet',
				value: 'ServiceSendConnectorGet',
			},
			{
				displayName: 'List of your send connectors on this Exchange service',
				name: 'ServiceSendConnectorList',
				value: 'ServiceSendConnectorList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceSendConnectorUpdate',
				value: 'ServiceSendConnectorUpdate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceServerList',
				value: 'ServiceServerList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceServerUpdate',
				value: 'ServiceServerUpdate',
			},
			{
				displayName: 'Get service information',
				name: 'ServiceServiceInfosList',
				value: 'ServiceServiceInfosList',
			},
			{
				displayName: 'Update service information',
				name: 'ServiceServiceInfosUpdate',
				value: 'ServiceServiceInfosUpdate',
			},
			{
				displayName: 'Create new alias',
				name: 'ServiceSharedAccountAliasCreate',
				value: 'ServiceSharedAccountAliasCreate',
			},
			{
				displayName: 'Delete existing alias',
				name: 'ServiceSharedAccountAliasDelete',
				value: 'ServiceSharedAccountAliasDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceSharedAccountAliasGet',
				value: 'ServiceSharedAccountAliasGet',
			},
			{
				displayName: 'Aliases associated to this mailbox',
				name: 'ServiceSharedAccountAliasList',
				value: 'ServiceSharedAccountAliasList',
			},
			{
				displayName: 'Create new shared mailbox in exchange server',
				name: 'ServiceSharedAccountCreate',
				value: 'ServiceSharedAccountCreate',
			},
			{
				displayName: 'Delete existing shared mailbox in exchange server',
				name: 'ServiceSharedAccountDelete',
				value: 'ServiceSharedAccountDelete',
			},
			{
				displayName: 'Allow full access to a user',
				name: 'ServiceSharedAccountFullAccessCreate',
				value: 'ServiceSharedAccountFullAccessCreate',
			},
			{
				displayName: 'Revoke full access',
				name: 'ServiceSharedAccountFullAccessDelete',
				value: 'ServiceSharedAccountFullAccessDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceSharedAccountFullAccessGet',
				value: 'ServiceSharedAccountFullAccessGet',
			},
			{
				displayName: 'Full access granted users for this shared mailbox',
				name: 'ServiceSharedAccountFullAccessList',
				value: 'ServiceSharedAccountFullAccessList',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceSharedAccountGet',
				value: 'ServiceSharedAccountGet',
			},
			{
				displayName: 'Shared accounts associated to this exchange service',
				name: 'ServiceSharedAccountList',
				value: 'ServiceSharedAccountList',
			},
			{
				displayName: 'Get shared account quota usage in total available space',
				name: 'ServiceSharedAccountQuotaList',
				value: 'ServiceSharedAccountQuotaList',
			},
			{
				displayName: 'Allow another user to send mails from this shared mailbox',
				name: 'ServiceSharedAccountSendAsCreate',
				value: 'ServiceSharedAccountSendAsCreate',
			},
			{
				displayName: 'Delete allowed user for sendAs',
				name: 'ServiceSharedAccountSendAsDelete',
				value: 'ServiceSharedAccountSendAsDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceSharedAccountSendAsGet',
				value: 'ServiceSharedAccountSendAsGet',
			},
			{
				displayName: 'Send as granted users for this shared mailbox',
				name: 'ServiceSharedAccountSendAsList',
				value: 'ServiceSharedAccountSendAsList',
			},
			{
				displayName: 'Allow another user to Send On Behalf To mails from this shared mailbox',
				name: 'ServiceSharedAccountSendOnBehalfToCreate',
				value: 'ServiceSharedAccountSendOnBehalfToCreate',
			},
			{
				displayName: 'Delete allowed user for SendOnBehalfTo',
				name: 'ServiceSharedAccountSendOnBehalfToDelete',
				value: 'ServiceSharedAccountSendOnBehalfToDelete',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceSharedAccountSendOnBehalfToGet',
				value: 'ServiceSharedAccountSendOnBehalfToGet',
			},
			{
				displayName: 'SendOnBehalfTo granted users for this shared mailbox',
				name: 'ServiceSharedAccountSendOnBehalfToList',
				value: 'ServiceSharedAccountSendOnBehalfToList',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceSharedAccountTasksGet',
				value: 'ServiceSharedAccountTasksGet',
			},
			{
				displayName: 'Pending task for this mailbox',
				name: 'ServiceSharedAccountTasksList',
				value: 'ServiceSharedAccountTasksList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceSharedAccountUpdate',
				value: 'ServiceSharedAccountUpdate',
			},
			{
				displayName: 'Get this object properties',
				name: 'ServiceTaskGet',
				value: 'ServiceTaskGet',
			},
			{
				displayName: 'Pending actions',
				name: 'ServiceTaskList',
				value: 'ServiceTaskList',
			},
			{
				displayName: 'Alter this object properties',
				name: 'ServiceUpdate',
				value: 'ServiceUpdate',
			},
			{
				displayName: 'Update device list',
				name: 'ServiceUpdateDeviceListCreate',
				value: 'ServiceUpdateDeviceListCreate',
			},
			{
				displayName: 'Update spam and virus flags on all active accounts',
				name: 'ServiceUpdateFlagsOnAllAccountsCreate',
				value: 'ServiceUpdateFlagsOnAllAccountsCreate',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('exchangeOperation', 0) as string;

	switch (operation) {
		case 'exchangeMisc':
			return exchangeExchangeMisc.execute.call(this);
		case 'ServiceAccountAliasCreate':
			return exchangeServiceAccountAliasCreate.execute.call(this);
		case 'ServiceAccountAliasDelete':
			return exchangeServiceAccountAliasDelete.execute.call(this);
		case 'ServiceAccountAliasGet':
			return exchangeServiceAccountAliasGet.execute.call(this);
		case 'ServiceAccountAliasList':
			return exchangeServiceAccountAliasList.execute.call(this);
		case 'ServiceAccountArchiveCreate':
			return exchangeServiceAccountArchiveCreate.execute.call(this);
		case 'ServiceAccountArchiveDelete':
			return exchangeServiceAccountArchiveDelete.execute.call(this);
		case 'ServiceAccountArchiveList':
			return exchangeServiceAccountArchiveList.execute.call(this);
		case 'ServiceAccountArchiveUpdate':
			return exchangeServiceAccountArchiveUpdate.execute.call(this);
		case 'ServiceAccountChangePasswordCreate':
			return exchangeServiceAccountChangePasswordCreate.execute.call(this);
		case 'ServiceAccountCreate':
			return exchangeServiceAccountCreate.execute.call(this);
		case 'ServiceAccountDelete':
			return exchangeServiceAccountDelete.execute.call(this);
		case 'ServiceAccountDiagnosticsCreate':
			return exchangeServiceAccountDiagnosticsCreate.execute.call(this);
		case 'ServiceAccountDiagnosticsList':
			return exchangeServiceAccountDiagnosticsList.execute.call(this);
		case 'ServiceAccountExportCreate':
			return exchangeServiceAccountExportCreate.execute.call(this);
		case 'ServiceAccountExportDelete':
			return exchangeServiceAccountExportDelete.execute.call(this);
		case 'ServiceAccountExportList':
			return exchangeServiceAccountExportList.execute.call(this);
		case 'ServiceAccountExportUrlCreate':
			return exchangeServiceAccountExportUrlCreate.execute.call(this);
		case 'ServiceAccountExportUrlList':
			return exchangeServiceAccountExportUrlList.execute.call(this);
		case 'ServiceAccountFullAccessCreate':
			return exchangeServiceAccountFullAccessCreate.execute.call(this);
		case 'ServiceAccountFullAccessDelete':
			return exchangeServiceAccountFullAccessDelete.execute.call(this);
		case 'ServiceAccountFullAccessGet':
			return exchangeServiceAccountFullAccessGet.execute.call(this);
		case 'ServiceAccountFullAccessList':
			return exchangeServiceAccountFullAccessList.execute.call(this);
		case 'ServiceAccountGet':
			return exchangeServiceAccountGet.execute.call(this);
		case 'ServiceAccountList':
			return exchangeServiceAccountList.execute.call(this);
		case 'ServiceAccountOutlookUrlCreate':
			return exchangeServiceAccountOutlookUrlCreate.execute.call(this);
		case 'ServiceAccountOutlookUrlList':
			return exchangeServiceAccountOutlookUrlList.execute.call(this);
		case 'ServiceAccountProtocolList':
			return exchangeServiceAccountProtocolList.execute.call(this);
		case 'ServiceAccountProtocolUpdate':
			return exchangeServiceAccountProtocolUpdate.execute.call(this);
		case 'ServiceAccountSendAsCreate':
			return exchangeServiceAccountSendAsCreate.execute.call(this);
		case 'ServiceAccountSendAsDelete':
			return exchangeServiceAccountSendAsDelete.execute.call(this);
		case 'ServiceAccountSendAsGet':
			return exchangeServiceAccountSendAsGet.execute.call(this);
		case 'ServiceAccountSendAsList':
			return exchangeServiceAccountSendAsList.execute.call(this);
		case 'ServiceAccountSendOnBehalfToCreate':
			return exchangeServiceAccountSendOnBehalfToCreate.execute.call(this);
		case 'ServiceAccountSendOnBehalfToDelete':
			return exchangeServiceAccountSendOnBehalfToDelete.execute.call(this);
		case 'ServiceAccountSendOnBehalfToGet':
			return exchangeServiceAccountSendOnBehalfToGet.execute.call(this);
		case 'ServiceAccountSendOnBehalfToList':
			return exchangeServiceAccountSendOnBehalfToList.execute.call(this);
		case 'ServiceAccountTasksGet':
			return exchangeServiceAccountTasksGet.execute.call(this);
		case 'ServiceAccountTasksList':
			return exchangeServiceAccountTasksList.execute.call(this);
		case 'ServiceAccountTerminateCreate':
			return exchangeServiceAccountTerminateCreate.execute.call(this);
		case 'ServiceAccountUpdate':
			return exchangeServiceAccountUpdate.execute.call(this);
		case 'ServiceActivateSharepointCreate':
			return exchangeServiceActivateSharepointCreate.execute.call(this);
		case 'ServiceAuthenticationPolicyGet':
			return exchangeServiceAuthenticationPolicyGet.execute.call(this);
		case 'ServiceAuthenticationPolicyList':
			return exchangeServiceAuthenticationPolicyList.execute.call(this);
		case 'ServiceAuthorizedIpCreate':
			return exchangeServiceAuthorizedIpCreate.execute.call(this);
		case 'ServiceAuthorizedIpIpDelete':
			return exchangeServiceAuthorizedIpIpDelete.execute.call(this);
		case 'ServiceAuthorizedIpIpGet':
			return exchangeServiceAuthorizedIpIpGet.execute.call(this);
		case 'ServiceAuthorizedIpIpUpdate':
			return exchangeServiceAuthorizedIpIpUpdate.execute.call(this);
		case 'ServiceAuthorizedIpList':
			return exchangeServiceAuthorizedIpList.execute.call(this);
		case 'ServiceChangeHostnameCreate':
			return exchangeServiceChangeHostnameCreate.execute.call(this);
		case 'ServiceCustomIsolationCreate':
			return exchangeServiceCustomIsolationCreate.execute.call(this);
		case 'ServiceCustomIsolationDelete':
			return exchangeServiceCustomIsolationDelete.execute.call(this);
		case 'ServiceCustomIsolationGet':
			return exchangeServiceCustomIsolationGet.execute.call(this);
		case 'ServiceCustomIsolationList':
			return exchangeServiceCustomIsolationList.execute.call(this);
		case 'ServiceDcvEmailsList':
			return exchangeServiceDcvEmailsList.execute.call(this);
		case 'ServiceDeviceClearDeviceCreate':
			return exchangeServiceDeviceClearDeviceCreate.execute.call(this);
		case 'ServiceDeviceGet':
			return exchangeServiceDeviceGet.execute.call(this);
		case 'ServiceDeviceList':
			return exchangeServiceDeviceList.execute.call(this);
		case 'ServiceDeviceUpdate':
			return exchangeServiceDeviceUpdate.execute.call(this);
		case 'ServiceDomainChangeDefaultSBRUpdate':
			return exchangeServiceDomainChangeDefaultSBRUpdate.execute.call(this);
		case 'ServiceDomainCreate':
			return exchangeServiceDomainCreate.execute.call(this);
		case 'ServiceDomainDelete':
			return exchangeServiceDomainDelete.execute.call(this);
		case 'ServiceDomainDisclaimerAttributeList':
			return exchangeServiceDomainDisclaimerAttributeList.execute.call(this);
		case 'ServiceDomainDisclaimerCreate':
			return exchangeServiceDomainDisclaimerCreate.execute.call(this);
		case 'ServiceDomainDisclaimerDelete':
			return exchangeServiceDomainDisclaimerDelete.execute.call(this);
		case 'ServiceDomainDisclaimerList':
			return exchangeServiceDomainDisclaimerList.execute.call(this);
		case 'ServiceDomainDisclaimerUpdate':
			return exchangeServiceDomainDisclaimerUpdate.execute.call(this);
		case 'ServiceDomainDkimCreate':
			return exchangeServiceDomainDkimCreate.execute.call(this);
		case 'ServiceDomainDkimDelete':
			return exchangeServiceDomainDkimDelete.execute.call(this);
		case 'ServiceDomainDkimDisableCreate':
			return exchangeServiceDomainDkimDisableCreate.execute.call(this);
		case 'ServiceDomainDkimEnableCreate':
			return exchangeServiceDomainDkimEnableCreate.execute.call(this);
		case 'ServiceDomainDkimGet':
			return exchangeServiceDomainDkimGet.execute.call(this);
		case 'ServiceDomainDkimList':
			return exchangeServiceDomainDkimList.execute.call(this);
		case 'ServiceDomainDkimSelectorList':
			return exchangeServiceDomainDkimSelectorList.execute.call(this);
		case 'ServiceDomainGet':
			return exchangeServiceDomainGet.execute.call(this);
		case 'ServiceDomainList':
			return exchangeServiceDomainList.execute.call(this);
		case 'ServiceDomainUpdate':
			return exchangeServiceDomainUpdate.execute.call(this);
		case 'ServiceExternalContactCreate':
			return exchangeServiceExternalContactCreate.execute.call(this);
		case 'ServiceExternalContactDelete':
			return exchangeServiceExternalContactDelete.execute.call(this);
		case 'ServiceExternalContactGet':
			return exchangeServiceExternalContactGet.execute.call(this);
		case 'ServiceExternalContactList':
			return exchangeServiceExternalContactList.execute.call(this);
		case 'ServiceExternalContactUpdate':
			return exchangeServiceExternalContactUpdate.execute.call(this);
		case 'ServiceGet':
			return exchangeServiceGet.execute.call(this);
		case 'ServiceImpersonatedUserChangePasswordCreate':
			return exchangeServiceImpersonatedUserChangePasswordCreate.execute.call(this);
		case 'ServiceImpersonatedUserCreate':
			return exchangeServiceImpersonatedUserCreate.execute.call(this);
		case 'ServiceImpersonatedUserDelete':
			return exchangeServiceImpersonatedUserDelete.execute.call(this);
		case 'ServiceImpersonatedUserList':
			return exchangeServiceImpersonatedUserList.execute.call(this);
		case 'ServiceImpersonationPasswordPolicyList':
			return exchangeServiceImpersonationPasswordPolicyList.execute.call(this);
		case 'ServiceLicenseList':
			return exchangeServiceLicenseList.execute.call(this);
		case 'ServiceList':
			return exchangeServiceList.execute.call(this);
		case 'ServiceLogKindGet':
			return exchangeServiceLogKindGet.execute.call(this);
		case 'ServiceLogKindList':
			return exchangeServiceLogKindList.execute.call(this);
		case 'ServiceLogSubscriptionCreate':
			return exchangeServiceLogSubscriptionCreate.execute.call(this);
		case 'ServiceLogSubscriptionDelete':
			return exchangeServiceLogSubscriptionDelete.execute.call(this);
		case 'ServiceLogSubscriptionGet':
			return exchangeServiceLogSubscriptionGet.execute.call(this);
		case 'ServiceLogSubscriptionList':
			return exchangeServiceLogSubscriptionList.execute.call(this);
		case 'ServiceLogUrlCreate':
			return exchangeServiceLogUrlCreate.execute.call(this);
		case 'ServiceMailingListAliasCreate':
			return exchangeServiceMailingListAliasCreate.execute.call(this);
		case 'ServiceMailingListAliasDelete':
			return exchangeServiceMailingListAliasDelete.execute.call(this);
		case 'ServiceMailingListAliasGet':
			return exchangeServiceMailingListAliasGet.execute.call(this);
		case 'ServiceMailingListAliasList':
			return exchangeServiceMailingListAliasList.execute.call(this);
		case 'ServiceMailingListCreate':
			return exchangeServiceMailingListCreate.execute.call(this);
		case 'ServiceMailingListDelete':
			return exchangeServiceMailingListDelete.execute.call(this);
		case 'ServiceMailingListGet':
			return exchangeServiceMailingListGet.execute.call(this);
		case 'ServiceMailingListList':
			return exchangeServiceMailingListList.execute.call(this);
		case 'ServiceMailingListManagerAccountCreate':
			return exchangeServiceMailingListManagerAccountCreate.execute.call(this);
		case 'ServiceMailingListManagerAccountList':
			return exchangeServiceMailingListManagerAccountList.execute.call(this);
		case 'ServiceMailingListManagerAccountManagerAccountIdDelete':
			return exchangeServiceMailingListManagerAccountManagerAccountIdDelete.execute.call(this);
		case 'ServiceMailingListManagerAccountManagerAccountIdGet':
			return exchangeServiceMailingListManagerAccountManagerAccountIdGet.execute.call(this);
		case 'ServiceMailingListMemberAccountCreate':
			return exchangeServiceMailingListMemberAccountCreate.execute.call(this);
		case 'ServiceMailingListMemberAccountList':
			return exchangeServiceMailingListMemberAccountList.execute.call(this);
		case 'ServiceMailingListMemberAccountMemberAccountIdDelete':
			return exchangeServiceMailingListMemberAccountMemberAccountIdDelete.execute.call(this);
		case 'ServiceMailingListMemberAccountMemberAccountIdGet':
			return exchangeServiceMailingListMemberAccountMemberAccountIdGet.execute.call(this);
		case 'ServiceMailingListMemberContactCreate':
			return exchangeServiceMailingListMemberContactCreate.execute.call(this);
		case 'ServiceMailingListMemberContactList':
			return exchangeServiceMailingListMemberContactList.execute.call(this);
		case 'ServiceMailingListMemberContactMemberContactIdDelete':
			return exchangeServiceMailingListMemberContactMemberContactIdDelete.execute.call(this);
		case 'ServiceMailingListMemberContactMemberContactIdGet':
			return exchangeServiceMailingListMemberContactMemberContactIdGet.execute.call(this);
		case 'ServiceMailingListSendAsCreate':
			return exchangeServiceMailingListSendAsCreate.execute.call(this);
		case 'ServiceMailingListSendAsDelete':
			return exchangeServiceMailingListSendAsDelete.execute.call(this);
		case 'ServiceMailingListSendAsGet':
			return exchangeServiceMailingListSendAsGet.execute.call(this);
		case 'ServiceMailingListSendAsList':
			return exchangeServiceMailingListSendAsList.execute.call(this);
		case 'ServiceMailingListSendOnBehalfToCreate':
			return exchangeServiceMailingListSendOnBehalfToCreate.execute.call(this);
		case 'ServiceMailingListSendOnBehalfToDelete':
			return exchangeServiceMailingListSendOnBehalfToDelete.execute.call(this);
		case 'ServiceMailingListSendOnBehalfToGet':
			return exchangeServiceMailingListSendOnBehalfToGet.execute.call(this);
		case 'ServiceMailingListSendOnBehalfToList':
			return exchangeServiceMailingListSendOnBehalfToList.execute.call(this);
		case 'ServiceMailingListUpdate':
			return exchangeServiceMailingListUpdate.execute.call(this);
		case 'ServiceOutlookAvailabilityList':
			return exchangeServiceOutlookAvailabilityList.execute.call(this);
		case 'ServiceProtocolActiveSyncMailNotificationCreate':
			return exchangeServiceProtocolActiveSyncMailNotificationCreate.execute.call(this);
		case 'ServiceProtocolActiveSyncMailNotificationList':
			return exchangeServiceProtocolActiveSyncMailNotificationList.execute.call(this);
		case 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete':
			return exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdDelete.execute.call(
				this,
			);
		case 'ServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet':
			return exchangeServiceProtocolActiveSyncMailNotificationNotifiedAccountIdGet.execute.call(
				this,
			);
		case 'ServiceProtocolList':
			return exchangeServiceProtocolList.execute.call(this);
		case 'ServiceProtocolUpdate':
			return exchangeServiceProtocolUpdate.execute.call(this);
		case 'ServicePublicFolderCreate':
			return exchangeServicePublicFolderCreate.execute.call(this);
		case 'ServicePublicFolderDelete':
			return exchangeServicePublicFolderDelete.execute.call(this);
		case 'ServicePublicFolderGet':
			return exchangeServicePublicFolderGet.execute.call(this);
		case 'ServicePublicFolderList':
			return exchangeServicePublicFolderList.execute.call(this);
		case 'ServicePublicFolderPermissionCreate':
			return exchangeServicePublicFolderPermissionCreate.execute.call(this);
		case 'ServicePublicFolderPermissionDelete':
			return exchangeServicePublicFolderPermissionDelete.execute.call(this);
		case 'ServicePublicFolderPermissionGet':
			return exchangeServicePublicFolderPermissionGet.execute.call(this);
		case 'ServicePublicFolderPermissionList':
			return exchangeServicePublicFolderPermissionList.execute.call(this);
		case 'ServicePublicFolderPermissionUpdate':
			return exchangeServicePublicFolderPermissionUpdate.execute.call(this);
		case 'ServicePublicFolderQuotaList':
			return exchangeServicePublicFolderQuotaList.execute.call(this);
		case 'ServicePublicFolderUpdate':
			return exchangeServicePublicFolderUpdate.execute.call(this);
		case 'ServiceRemoteMailboxAliasCreate':
			return exchangeServiceRemoteMailboxAliasCreate.execute.call(this);
		case 'ServiceRemoteMailboxAliasDelete':
			return exchangeServiceRemoteMailboxAliasDelete.execute.call(this);
		case 'ServiceRemoteMailboxAliasGet':
			return exchangeServiceRemoteMailboxAliasGet.execute.call(this);
		case 'ServiceRemoteMailboxAliasList':
			return exchangeServiceRemoteMailboxAliasList.execute.call(this);
		case 'ServiceRemoteMailboxChangePasswordCreate':
			return exchangeServiceRemoteMailboxChangePasswordCreate.execute.call(this);
		case 'ServiceRemoteMailboxCreate':
			return exchangeServiceRemoteMailboxCreate.execute.call(this);
		case 'ServiceRemoteMailboxDelete':
			return exchangeServiceRemoteMailboxDelete.execute.call(this);
		case 'ServiceRemoteMailboxGet':
			return exchangeServiceRemoteMailboxGet.execute.call(this);
		case 'ServiceRemoteMailboxList':
			return exchangeServiceRemoteMailboxList.execute.call(this);
		case 'ServiceRemoteMailboxUpdate':
			return exchangeServiceRemoteMailboxUpdate.execute.call(this);
		case 'ServiceRenewSslCreate':
			return exchangeServiceRenewSslCreate.execute.call(this);
		case 'ServiceResourceAccountCreate':
			return exchangeServiceResourceAccountCreate.execute.call(this);
		case 'ServiceResourceAccountDelegateCreate':
			return exchangeServiceResourceAccountDelegateCreate.execute.call(this);
		case 'ServiceResourceAccountDelegateDelete':
			return exchangeServiceResourceAccountDelegateDelete.execute.call(this);
		case 'ServiceResourceAccountDelegateGet':
			return exchangeServiceResourceAccountDelegateGet.execute.call(this);
		case 'ServiceResourceAccountDelegateList':
			return exchangeServiceResourceAccountDelegateList.execute.call(this);
		case 'ServiceResourceAccountDelete':
			return exchangeServiceResourceAccountDelete.execute.call(this);
		case 'ServiceResourceAccountGet':
			return exchangeServiceResourceAccountGet.execute.call(this);
		case 'ServiceResourceAccountList':
			return exchangeServiceResourceAccountList.execute.call(this);
		case 'ServiceResourceAccountUpdate':
			return exchangeServiceResourceAccountUpdate.execute.call(this);
		case 'ServiceSendConnectorChangeAuthenticationCreate':
			return exchangeServiceSendConnectorChangeAuthenticationCreate.execute.call(this);
		case 'ServiceSendConnectorCreate':
			return exchangeServiceSendConnectorCreate.execute.call(this);
		case 'ServiceSendConnectorDelete':
			return exchangeServiceSendConnectorDelete.execute.call(this);
		case 'ServiceSendConnectorGet':
			return exchangeServiceSendConnectorGet.execute.call(this);
		case 'ServiceSendConnectorList':
			return exchangeServiceSendConnectorList.execute.call(this);
		case 'ServiceSendConnectorUpdate':
			return exchangeServiceSendConnectorUpdate.execute.call(this);
		case 'ServiceServerList':
			return exchangeServiceServerList.execute.call(this);
		case 'ServiceServerUpdate':
			return exchangeServiceServerUpdate.execute.call(this);
		case 'ServiceServiceInfosList':
			return exchangeServiceServiceInfosList.execute.call(this);
		case 'ServiceServiceInfosUpdate':
			return exchangeServiceServiceInfosUpdate.execute.call(this);
		case 'ServiceSharedAccountAliasCreate':
			return exchangeServiceSharedAccountAliasCreate.execute.call(this);
		case 'ServiceSharedAccountAliasDelete':
			return exchangeServiceSharedAccountAliasDelete.execute.call(this);
		case 'ServiceSharedAccountAliasGet':
			return exchangeServiceSharedAccountAliasGet.execute.call(this);
		case 'ServiceSharedAccountAliasList':
			return exchangeServiceSharedAccountAliasList.execute.call(this);
		case 'ServiceSharedAccountCreate':
			return exchangeServiceSharedAccountCreate.execute.call(this);
		case 'ServiceSharedAccountDelete':
			return exchangeServiceSharedAccountDelete.execute.call(this);
		case 'ServiceSharedAccountFullAccessCreate':
			return exchangeServiceSharedAccountFullAccessCreate.execute.call(this);
		case 'ServiceSharedAccountFullAccessDelete':
			return exchangeServiceSharedAccountFullAccessDelete.execute.call(this);
		case 'ServiceSharedAccountFullAccessGet':
			return exchangeServiceSharedAccountFullAccessGet.execute.call(this);
		case 'ServiceSharedAccountFullAccessList':
			return exchangeServiceSharedAccountFullAccessList.execute.call(this);
		case 'ServiceSharedAccountGet':
			return exchangeServiceSharedAccountGet.execute.call(this);
		case 'ServiceSharedAccountList':
			return exchangeServiceSharedAccountList.execute.call(this);
		case 'ServiceSharedAccountQuotaList':
			return exchangeServiceSharedAccountQuotaList.execute.call(this);
		case 'ServiceSharedAccountSendAsCreate':
			return exchangeServiceSharedAccountSendAsCreate.execute.call(this);
		case 'ServiceSharedAccountSendAsDelete':
			return exchangeServiceSharedAccountSendAsDelete.execute.call(this);
		case 'ServiceSharedAccountSendAsGet':
			return exchangeServiceSharedAccountSendAsGet.execute.call(this);
		case 'ServiceSharedAccountSendAsList':
			return exchangeServiceSharedAccountSendAsList.execute.call(this);
		case 'ServiceSharedAccountSendOnBehalfToCreate':
			return exchangeServiceSharedAccountSendOnBehalfToCreate.execute.call(this);
		case 'ServiceSharedAccountSendOnBehalfToDelete':
			return exchangeServiceSharedAccountSendOnBehalfToDelete.execute.call(this);
		case 'ServiceSharedAccountSendOnBehalfToGet':
			return exchangeServiceSharedAccountSendOnBehalfToGet.execute.call(this);
		case 'ServiceSharedAccountSendOnBehalfToList':
			return exchangeServiceSharedAccountSendOnBehalfToList.execute.call(this);
		case 'ServiceSharedAccountTasksGet':
			return exchangeServiceSharedAccountTasksGet.execute.call(this);
		case 'ServiceSharedAccountTasksList':
			return exchangeServiceSharedAccountTasksList.execute.call(this);
		case 'ServiceSharedAccountUpdate':
			return exchangeServiceSharedAccountUpdate.execute.call(this);
		case 'ServiceTaskGet':
			return exchangeServiceTaskGet.execute.call(this);
		case 'ServiceTaskList':
			return exchangeServiceTaskList.execute.call(this);
		case 'ServiceUpdate':
			return exchangeServiceUpdate.execute.call(this);
		case 'ServiceUpdateDeviceListCreate':
			return exchangeServiceUpdateDeviceListCreate.execute.call(this);
		case 'ServiceUpdateFlagsOnAllAccountsCreate':
			return exchangeServiceUpdateFlagsOnAllAccountsCreate.execute.call(this);
		default:
			throw new Error('No handler for operation ' + operation);
	}
}
