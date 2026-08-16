import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';

import {
	execute as executeDelegatedAccountFilterChangeActivityCreate,
	description as descriptionDelegatedAccountFilterChangeActivityCreate,
} from './delegatedAccount/DelegatedAccountFilterChangeActivityCreate.operation';
import {
	execute as executeDelegatedAccountFilterChangePriorityCreate,
	description as descriptionDelegatedAccountFilterChangePriorityCreate,
} from './delegatedAccount/DelegatedAccountFilterChangePriorityCreate.operation';
import {
	execute as executeDelegatedAccountFilterCreate,
	description as descriptionDelegatedAccountFilterCreate,
} from './delegatedAccount/DelegatedAccountFilterCreate.operation';
import {
	execute as executeDelegatedAccountFilterDelete,
	description as descriptionDelegatedAccountFilterDelete,
} from './delegatedAccount/DelegatedAccountFilterDelete.operation';
import {
	execute as executeDelegatedAccountFilterGet,
	description as descriptionDelegatedAccountFilterGet,
} from './delegatedAccount/DelegatedAccountFilterGet.operation';
import {
	execute as executeDelegatedAccountFilterList,
	description as descriptionDelegatedAccountFilterList,
} from './delegatedAccount/DelegatedAccountFilterList.operation';
import {
	execute as executeDelegatedAccountFilterRuleDelete,
	description as descriptionDelegatedAccountFilterRuleDelete,
} from './delegatedAccount/DelegatedAccountFilterRuleDelete.operation';
import {
	execute as executeDelegatedAccountFilterRuleGet,
	description as descriptionDelegatedAccountFilterRuleGet,
} from './delegatedAccount/DelegatedAccountFilterRuleGet.operation';
import {
	execute as executeDelegatedAccountGet,
	description as descriptionDelegatedAccountGet,
} from './delegatedAccount/DelegatedAccountGet.operation';
import {
	execute as executeDelegatedAccountGet10,
	description as descriptionDelegatedAccountGet10,
} from './delegatedAccount/DelegatedAccountGet10.operation';
import {
	execute as executeDelegatedAccountGet11,
	description as descriptionDelegatedAccountGet11,
} from './delegatedAccount/DelegatedAccountGet11.operation';
import {
	execute as executeDelegatedAccountGet12,
	description as descriptionDelegatedAccountGet12,
} from './delegatedAccount/DelegatedAccountGet12.operation';
import {
	execute as executeDelegatedAccountGet2,
	description as descriptionDelegatedAccountGet2,
} from './delegatedAccount/DelegatedAccountGet2.operation';
import {
	execute as executeDelegatedAccountGet3,
	description as descriptionDelegatedAccountGet3,
} from './delegatedAccount/DelegatedAccountGet3.operation';
import {
	execute as executeDelegatedAccountGet4,
	description as descriptionDelegatedAccountGet4,
} from './delegatedAccount/DelegatedAccountGet4.operation';
import {
	execute as executeDelegatedAccountGet5,
	description as descriptionDelegatedAccountGet5,
} from './delegatedAccount/DelegatedAccountGet5.operation';
import {
	execute as executeDelegatedAccountGet6,
	description as descriptionDelegatedAccountGet6,
} from './delegatedAccount/DelegatedAccountGet6.operation';
import {
	execute as executeDelegatedAccountGet7,
	description as descriptionDelegatedAccountGet7,
} from './delegatedAccount/DelegatedAccountGet7.operation';
import {
	execute as executeDelegatedAccountGet8,
	description as descriptionDelegatedAccountGet8,
} from './delegatedAccount/DelegatedAccountGet8.operation';
import {
	execute as executeDelegatedAccountGet9,
	description as descriptionDelegatedAccountGet9,
} from './delegatedAccount/DelegatedAccountGet9.operation';
import {
	execute as executeDomainAccountChangePasswordCreate,
	description as descriptionDomainAccountChangePasswordCreate,
} from './domainAccount/DomainAccountChangePasswordCreate.operation';
import {
	execute as executeDomainAccountCreate,
	description as descriptionDomainAccountCreate,
} from './domainAccount/DomainAccountCreate.operation';
import {
	execute as executeDomainAccountDelegationCreate,
	description as descriptionDomainAccountDelegationCreate,
} from './domainAccount/DomainAccountDelegationCreate.operation';
import {
	execute as executeDomainAccountDelegationDelete,
	description as descriptionDomainAccountDelegationDelete,
} from './domainAccount/DomainAccountDelegationDelete.operation';
import {
	execute as executeDomainAccountDelegationGet,
	description as descriptionDomainAccountDelegationGet,
} from './domainAccount/DomainAccountDelegationGet.operation';
import {
	execute as executeDomainAccountDelegationList,
	description as descriptionDomainAccountDelegationList,
} from './domainAccount/DomainAccountDelegationList.operation';
import {
	execute as executeDomainAccountDelete,
	description as descriptionDomainAccountDelete,
} from './domainAccount/DomainAccountDelete.operation';
import {
	execute as executeDomainAccountFilterChangeActivityCreate,
	description as descriptionDomainAccountFilterChangeActivityCreate,
} from './domainAccount/DomainAccountFilterChangeActivityCreate.operation';
import {
	execute as executeDomainAccountFilterChangePriorityCreate,
	description as descriptionDomainAccountFilterChangePriorityCreate,
} from './domainAccount/DomainAccountFilterChangePriorityCreate.operation';
import {
	execute as executeDomainAccountFilterCreate,
	description as descriptionDomainAccountFilterCreate,
} from './domainAccount/DomainAccountFilterCreate.operation';
import {
	execute as executeDomainAccountFilterDelete,
	description as descriptionDomainAccountFilterDelete,
} from './domainAccount/DomainAccountFilterDelete.operation';
import {
	execute as executeDomainAccountFilterGet,
	description as descriptionDomainAccountFilterGet,
} from './domainAccount/DomainAccountFilterGet.operation';
import {
	execute as executeDomainAccountFilterList,
	description as descriptionDomainAccountFilterList,
} from './domainAccount/DomainAccountFilterList.operation';
import {
	execute as executeDomainAccountFilterRuleCreate,
	description as descriptionDomainAccountFilterRuleCreate,
} from './domainAccount/DomainAccountFilterRuleCreate.operation';
import {
	execute as executeDomainAccountFilterRuleDelete,
	description as descriptionDomainAccountFilterRuleDelete,
} from './domainAccount/DomainAccountFilterRuleDelete.operation';
import {
	execute as executeDomainAccountFilterRuleGet,
	description as descriptionDomainAccountFilterRuleGet,
} from './domainAccount/DomainAccountFilterRuleGet.operation';
import {
	execute as executeDomainAccountFilterRuleList,
	description as descriptionDomainAccountFilterRuleList,
} from './domainAccount/DomainAccountFilterRuleList.operation';
import {
	execute as executeDomainAccountGet,
	description as descriptionDomainAccountGet,
} from './domainAccount/DomainAccountGet.operation';
import {
	execute as executeDomainAccountList,
	description as descriptionDomainAccountList,
} from './domainAccount/DomainAccountList.operation';
import {
	execute as executeDomainAccountMigrateCheckGet,
	description as descriptionDomainAccountMigrateCheckGet,
} from './domainAccount/DomainAccountMigrateCheckGet.operation';
import {
	execute as executeDomainAccountMigrateCreate,
	description as descriptionDomainAccountMigrateCreate,
} from './domainAccount/DomainAccountMigrateCreate.operation';
import {
	execute as executeDomainAccountMigrateDestinationEmailGet,
	description as descriptionDomainAccountMigrateDestinationEmailGet,
} from './domainAccount/DomainAccountMigrateDestinationEmailGet.operation';
import {
	execute as executeDomainAccountMigrateDestinationEmailList,
	description as descriptionDomainAccountMigrateDestinationEmailList,
} from './domainAccount/DomainAccountMigrateDestinationEmailList.operation';
import {
	execute as executeDomainAccountMigrateGet,
	description as descriptionDomainAccountMigrateGet,
} from './domainAccount/DomainAccountMigrateGet.operation';
import {
	execute as executeDomainAccountMigrateGet2,
	description as descriptionDomainAccountMigrateGet2,
} from './domainAccount/DomainAccountMigrateGet2.operation';
import {
	execute as executeDomainAccountUpdate,
	description as descriptionDomainAccountUpdate,
} from './domainAccount/DomainAccountUpdate.operation';
import {
	execute as executeDomainAccountUpdateUsagePost,
	description as descriptionDomainAccountUpdateUsagePost,
} from './domainAccount/DomainAccountUpdateUsagePost.operation';
import {
	execute as executeDomainAccountUsageGet,
	description as descriptionDomainAccountUsageGet,
} from './domainAccount/DomainAccountUsageGet.operation';
import {
	execute as executeDomainAclCreate,
	description as descriptionDomainAclCreate,
} from './domainAcl/DomainAclCreate.operation';
import {
	execute as executeDomainAclDelete,
	description as descriptionDomainAclDelete,
} from './domainAcl/DomainAclDelete.operation';
import {
	execute as executeDomainAclGet,
	description as descriptionDomainAclGet,
} from './domainAcl/DomainAclGet.operation';
import {
	execute as executeDomainAclList,
	description as descriptionDomainAclList,
} from './domainAcl/DomainAclList.operation';
import {
	execute as executeDomainChangeContactCreate,
	description as descriptionDomainChangeContactCreate,
} from './domainChangeContact/DomainChangeContactCreate.operation';
import {
	execute as executeDomainChangeDnsMXFilterCreate,
	description as descriptionDomainChangeDnsMXFilterCreate,
} from './domainChangeDnsMXFilter/DomainChangeDnsMXFilterCreate.operation';
import {
	execute as executeDomainConfirmTerminationCreate,
	description as descriptionDomainConfirmTerminationCreate,
} from './domainConfirmTermination/DomainConfirmTerminationCreate.operation';
import {
	execute as executeDomainDkimDisableUpdate,
	description as descriptionDomainDkimDisableUpdate,
} from './domainDkim/DomainDkimDisableUpdate.operation';
import {
	execute as executeDomainDkimEnableUpdate,
	description as descriptionDomainDkimEnableUpdate,
} from './domainDkim/DomainDkimEnableUpdate.operation';
import {
	execute as executeDomainDkimGet,
	description as descriptionDomainDkimGet,
} from './domainDkim/DomainDkimGet.operation';
import {
	execute as executeDomainDnsMXFilterGet,
	description as descriptionDomainDnsMXFilterGet,
} from './domainDnsMXFilter/DomainDnsMXFilterGet.operation';
import {
	execute as executeDomainDnsMXRecordsGet,
	description as descriptionDomainDnsMXRecordsGet,
} from './domainDnsMXRecords/DomainDnsMXRecordsGet.operation';
import {
	execute as executeDomainGet,
	description as descriptionDomainGet,
} from './misc/DomainGet.operation';
import {
	execute as executeDomainList,
	description as descriptionDomainList,
} from './misc/DomainList.operation';
import {
	execute as executeDomainMailingListChangeOptionsCreate,
	description as descriptionDomainMailingListChangeOptionsCreate,
} from './domainMailingList/DomainMailingListChangeOptionsCreate.operation';
import {
	execute as executeDomainMailingListCreate,
	description as descriptionDomainMailingListCreate,
} from './domainMailingList/DomainMailingListCreate.operation';
import {
	execute as executeDomainMailingListDelete,
	description as descriptionDomainMailingListDelete,
} from './domainMailingList/DomainMailingListDelete.operation';
import {
	execute as executeDomainMailingListGet,
	description as descriptionDomainMailingListGet,
} from './domainMailingList/DomainMailingListGet.operation';
import {
	execute as executeDomainMailingListList,
	description as descriptionDomainMailingListList,
} from './domainMailingList/DomainMailingListList.operation';
import {
	execute as executeDomainMailingListModeratorCreate,
	description as descriptionDomainMailingListModeratorCreate,
} from './domainMailingList/DomainMailingListModeratorCreate.operation';
import {
	execute as executeDomainMailingListModeratorDelete,
	description as descriptionDomainMailingListModeratorDelete,
} from './domainMailingList/DomainMailingListModeratorDelete.operation';
import {
	execute as executeDomainMailingListModeratorGet,
	description as descriptionDomainMailingListModeratorGet,
} from './domainMailingList/DomainMailingListModeratorGet.operation';
import {
	execute as executeDomainMailingListModeratorList,
	description as descriptionDomainMailingListModeratorList,
} from './domainMailingList/DomainMailingListModeratorList.operation';
import {
	execute as executeDomainMailingListSendListByEmailCreate,
	description as descriptionDomainMailingListSendListByEmailCreate,
} from './domainMailingList/DomainMailingListSendListByEmailCreate.operation';
import {
	execute as executeDomainMailingListSubscriberCreate,
	description as descriptionDomainMailingListSubscriberCreate,
} from './domainMailingList/DomainMailingListSubscriberCreate.operation';
import {
	execute as executeDomainMailingListSubscriberDelete,
	description as descriptionDomainMailingListSubscriberDelete,
} from './domainMailingList/DomainMailingListSubscriberDelete.operation';
import {
	execute as executeDomainMailingListSubscriberGet,
	description as descriptionDomainMailingListSubscriberGet,
} from './domainMailingList/DomainMailingListSubscriberGet.operation';
import {
	execute as executeDomainMailingListSubscriberList,
	description as descriptionDomainMailingListSubscriberList,
} from './domainMailingList/DomainMailingListSubscriberList.operation';
import {
	execute as executeDomainMailingListUpdate,
	description as descriptionDomainMailingListUpdate,
} from './domainMailingList/DomainMailingListUpdate.operation';
import {
	execute as executeDomainMigrateDelegationV3toV6Create,
	description as descriptionDomainMigrateDelegationV3toV6Create,
} from './domainMigrateDelegation/DomainMigrateDelegationV3toV6Create.operation';
import {
	execute as executeDomainQuotaGet,
	description as descriptionDomainQuotaGet,
} from './domainQuota/DomainQuotaGet.operation';
import {
	execute as executeDomainRecommendedDNSRecordsGet,
	description as descriptionDomainRecommendedDNSRecordsGet,
} from './domainRecommendedDNSRecords/DomainRecommendedDNSRecordsGet.operation';
import {
	execute as executeDomainRedirectionChangeCreate,
	description as descriptionDomainRedirectionChangeCreate,
} from './domainRedirection/DomainRedirectionChangeCreate.operation';
import {
	execute as executeDomainRedirectionCreate,
	description as descriptionDomainRedirectionCreate,
} from './domainRedirection/DomainRedirectionCreate.operation';
import {
	execute as executeDomainRedirectionDelete,
	description as descriptionDomainRedirectionDelete,
} from './domainRedirection/DomainRedirectionDelete.operation';
import {
	execute as executeDomainRedirectionGet,
	description as descriptionDomainRedirectionGet,
} from './domainRedirection/DomainRedirectionGet.operation';
import {
	execute as executeDomainRedirectionList,
	description as descriptionDomainRedirectionList,
} from './domainRedirection/DomainRedirectionList.operation';
import {
	execute as executeDomainResponderCreate,
	description as descriptionDomainResponderCreate,
} from './domainResponder/DomainResponderCreate.operation';
import {
	execute as executeDomainResponderDelete,
	description as descriptionDomainResponderDelete,
} from './domainResponder/DomainResponderDelete.operation';
import {
	execute as executeDomainResponderGet,
	description as descriptionDomainResponderGet,
} from './domainResponder/DomainResponderGet.operation';
import {
	execute as executeDomainResponderList,
	description as descriptionDomainResponderList,
} from './domainResponder/DomainResponderList.operation';
import {
	execute as executeDomainResponderUpdate,
	description as descriptionDomainResponderUpdate,
} from './domainResponder/DomainResponderUpdate.operation';
import {
	execute as executeDomainServiceInfosGet,
	description as descriptionDomainServiceInfosGet,
} from './domainServiceInfos/DomainServiceInfosGet.operation';
import {
	execute as executeDomainServiceInfosUpdate,
	description as descriptionDomainServiceInfosUpdate,
} from './domainServiceInfos/DomainServiceInfosUpdate.operation';
import {
	execute as executeDomainSummaryGet,
	description as descriptionDomainSummaryGet,
} from './domainSummary/DomainSummaryGet.operation';
import {
	execute as executeDomainTaskAccountGet,
	description as descriptionDomainTaskAccountGet,
} from './domainTask/DomainTaskAccountGet.operation';
import {
	execute as executeDomainTaskAccountList,
	description as descriptionDomainTaskAccountList,
} from './domainTask/DomainTaskAccountList.operation';
import {
	execute as executeDomainTaskAllGet,
	description as descriptionDomainTaskAllGet,
} from './domainTask/DomainTaskAllGet.operation';
import {
	execute as executeDomainTaskAllList,
	description as descriptionDomainTaskAllList,
} from './domainTask/DomainTaskAllList.operation';
import {
	execute as executeDomainTaskFilterGet,
	description as descriptionDomainTaskFilterGet,
} from './domainTask/DomainTaskFilterGet.operation';
import {
	execute as executeDomainTaskFilterList,
	description as descriptionDomainTaskFilterList,
} from './domainTask/DomainTaskFilterList.operation';
import {
	execute as executeDomainTaskMailinglistGet,
	description as descriptionDomainTaskMailinglistGet,
} from './domainTask/DomainTaskMailinglistGet.operation';
import {
	execute as executeDomainTaskMailinglistList,
	description as descriptionDomainTaskMailinglistList,
} from './domainTask/DomainTaskMailinglistList.operation';
import {
	execute as executeDomainTaskRedirectionGet,
	description as descriptionDomainTaskRedirectionGet,
} from './domainTask/DomainTaskRedirectionGet.operation';
import {
	execute as executeDomainTaskRedirectionList,
	description as descriptionDomainTaskRedirectionList,
} from './domainTask/DomainTaskRedirectionList.operation';
import {
	execute as executeDomainTaskResponderGet,
	description as descriptionDomainTaskResponderGet,
} from './domainTask/DomainTaskResponderGet.operation';
import {
	execute as executeDomainTaskResponderList,
	description as descriptionDomainTaskResponderList,
} from './domainTask/DomainTaskResponderList.operation';
import {
	execute as executeDomainTerminateCreate,
	description as descriptionDomainTerminateCreate,
} from './domainTerminate/DomainTerminateCreate.operation';
import {
	execute as executeMailingListLimitsGet,
	description as descriptionMailingListLimitsGet,
} from './misc/MailingListLimitsGet.operation';

export function description(displayOptions: IDisplayOptions = {}): INodeProperties[] {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'emailDomainOperation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'DelegatedAccountFilterChangeActivityCreate',
				value: 'DelegatedAccountFilterChangeActivityCreate',
			},
			{
				name: 'DelegatedAccountFilterChangePriorityCreate',
				value: 'DelegatedAccountFilterChangePriorityCreate',
			},
			{
				name: 'DelegatedAccountFilterCreate',
				value: 'DelegatedAccountFilterCreate',
			},
			{
				name: 'DelegatedAccountFilterDelete',
				value: 'DelegatedAccountFilterDelete',
			},
			{
				name: 'DelegatedAccountFilterGet',
				value: 'DelegatedAccountFilterGet',
			},
			{
				name: 'DelegatedAccountFilterList',
				value: 'DelegatedAccountFilterList',
			},
			{
				name: 'DelegatedAccountFilterRuleDelete',
				value: 'DelegatedAccountFilterRuleDelete',
			},
			{
				name: 'DelegatedAccountFilterRuleGet',
				value: 'DelegatedAccountFilterRuleGet',
			},
			{
				name: 'DelegatedAccountGet',
				value: 'DelegatedAccountGet',
			},
			{
				name: 'DelegatedAccountGet10',
				value: 'DelegatedAccountGet10',
			},
			{
				name: 'DelegatedAccountGet11',
				value: 'DelegatedAccountGet11',
			},
			{
				name: 'DelegatedAccountGet12',
				value: 'DelegatedAccountGet12',
			},
			{
				name: 'DelegatedAccountGet2',
				value: 'DelegatedAccountGet2',
			},
			{
				name: 'DelegatedAccountGet3',
				value: 'DelegatedAccountGet3',
			},
			{
				name: 'DelegatedAccountGet4',
				value: 'DelegatedAccountGet4',
			},
			{
				name: 'DelegatedAccountGet5',
				value: 'DelegatedAccountGet5',
			},
			{
				name: 'DelegatedAccountGet6',
				value: 'DelegatedAccountGet6',
			},
			{
				name: 'DelegatedAccountGet7',
				value: 'DelegatedAccountGet7',
			},
			{
				name: 'DelegatedAccountGet8',
				value: 'DelegatedAccountGet8',
			},
			{
				name: 'DelegatedAccountGet9',
				value: 'DelegatedAccountGet9',
			},
			{
				name: 'DomainAccountChangePasswordCreate',
				value: 'DomainAccountChangePasswordCreate',
			},
			{
				name: 'DomainAccountCreate',
				value: 'DomainAccountCreate',
			},
			{
				name: 'DomainAccountDelegationCreate',
				value: 'DomainAccountDelegationCreate',
			},
			{
				name: 'DomainAccountDelegationDelete',
				value: 'DomainAccountDelegationDelete',
			},
			{
				name: 'DomainAccountDelegationGet',
				value: 'DomainAccountDelegationGet',
			},
			{
				name: 'DomainAccountDelegationList',
				value: 'DomainAccountDelegationList',
			},
			{
				name: 'DomainAccountDelete',
				value: 'DomainAccountDelete',
			},
			{
				name: 'DomainAccountFilterChangeActivityCreate',
				value: 'DomainAccountFilterChangeActivityCreate',
			},
			{
				name: 'DomainAccountFilterChangePriorityCreate',
				value: 'DomainAccountFilterChangePriorityCreate',
			},
			{
				name: 'DomainAccountFilterCreate',
				value: 'DomainAccountFilterCreate',
			},
			{
				name: 'DomainAccountFilterDelete',
				value: 'DomainAccountFilterDelete',
			},
			{
				name: 'DomainAccountFilterGet',
				value: 'DomainAccountFilterGet',
			},
			{
				name: 'DomainAccountFilterList',
				value: 'DomainAccountFilterList',
			},
			{
				name: 'DomainAccountFilterRuleCreate',
				value: 'DomainAccountFilterRuleCreate',
			},
			{
				name: 'DomainAccountFilterRuleDelete',
				value: 'DomainAccountFilterRuleDelete',
			},
			{
				name: 'DomainAccountFilterRuleGet',
				value: 'DomainAccountFilterRuleGet',
			},
			{
				name: 'DomainAccountFilterRuleList',
				value: 'DomainAccountFilterRuleList',
			},
			{
				name: 'DomainAccountGet',
				value: 'DomainAccountGet',
			},
			{
				name: 'DomainAccountList',
				value: 'DomainAccountList',
			},
			{
				name: 'DomainAccountMigrateCheckGet',
				value: 'DomainAccountMigrateCheckGet',
			},
			{
				name: 'DomainAccountMigrateCreate',
				value: 'DomainAccountMigrateCreate',
			},
			{
				name: 'DomainAccountMigrateDestinationEmailGet',
				value: 'DomainAccountMigrateDestinationEmailGet',
			},
			{
				name: 'DomainAccountMigrateDestinationEmailList',
				value: 'DomainAccountMigrateDestinationEmailList',
			},
			{
				name: 'DomainAccountMigrateGet',
				value: 'DomainAccountMigrateGet',
			},
			{
				name: 'DomainAccountMigrateGet2',
				value: 'DomainAccountMigrateGet2',
			},
			{
				name: 'DomainAccountUpdate',
				value: 'DomainAccountUpdate',
			},
			{
				name: 'DomainAccountUpdateUsagePost',
				value: 'DomainAccountUpdateUsagePost',
			},
			{
				name: 'DomainAccountUsageGet',
				value: 'DomainAccountUsageGet',
			},
			{
				name: 'DomainAclCreate',
				value: 'DomainAclCreate',
			},
			{
				name: 'DomainAclDelete',
				value: 'DomainAclDelete',
			},
			{
				name: 'DomainAclGet',
				value: 'DomainAclGet',
			},
			{
				name: 'DomainAclList',
				value: 'DomainAclList',
			},
			{
				name: 'DomainChangeContactCreate',
				value: 'DomainChangeContactCreate',
			},
			{
				name: 'DomainChangeDnsMXFilterCreate',
				value: 'DomainChangeDnsMXFilterCreate',
			},
			{
				name: 'DomainConfirmTerminationCreate',
				value: 'DomainConfirmTerminationCreate',
			},
			{
				name: 'DomainDkimDisableUpdate',
				value: 'DomainDkimDisableUpdate',
			},
			{
				name: 'DomainDkimEnableUpdate',
				value: 'DomainDkimEnableUpdate',
			},
			{
				name: 'DomainDkimGet',
				value: 'DomainDkimGet',
			},
			{
				name: 'DomainDnsMXFilterGet',
				value: 'DomainDnsMXFilterGet',
			},
			{
				name: 'DomainDnsMXRecordsGet',
				value: 'DomainDnsMXRecordsGet',
			},
			{
				name: 'DomainGet',
				value: 'DomainGet',
			},
			{
				name: 'DomainList',
				value: 'DomainList',
			},
			{
				name: 'DomainMailingListChangeOptionsCreate',
				value: 'DomainMailingListChangeOptionsCreate',
			},
			{
				name: 'DomainMailingListCreate',
				value: 'DomainMailingListCreate',
			},
			{
				name: 'DomainMailingListDelete',
				value: 'DomainMailingListDelete',
			},
			{
				name: 'DomainMailingListGet',
				value: 'DomainMailingListGet',
			},
			{
				name: 'DomainMailingListList',
				value: 'DomainMailingListList',
			},
			{
				name: 'DomainMailingListModeratorCreate',
				value: 'DomainMailingListModeratorCreate',
			},
			{
				name: 'DomainMailingListModeratorDelete',
				value: 'DomainMailingListModeratorDelete',
			},
			{
				name: 'DomainMailingListModeratorGet',
				value: 'DomainMailingListModeratorGet',
			},
			{
				name: 'DomainMailingListModeratorList',
				value: 'DomainMailingListModeratorList',
			},
			{
				name: 'DomainMailingListSendListByEmailCreate',
				value: 'DomainMailingListSendListByEmailCreate',
			},
			{
				name: 'DomainMailingListSubscriberCreate',
				value: 'DomainMailingListSubscriberCreate',
			},
			{
				name: 'DomainMailingListSubscriberDelete',
				value: 'DomainMailingListSubscriberDelete',
			},
			{
				name: 'DomainMailingListSubscriberGet',
				value: 'DomainMailingListSubscriberGet',
			},
			{
				name: 'DomainMailingListSubscriberList',
				value: 'DomainMailingListSubscriberList',
			},
			{
				name: 'DomainMailingListUpdate',
				value: 'DomainMailingListUpdate',
			},
			{
				name: 'DomainMigrateDelegationV3toV6Create',
				value: 'DomainMigrateDelegationV3toV6Create',
			},
			{
				name: 'DomainQuotaGet',
				value: 'DomainQuotaGet',
			},
			{
				name: 'DomainRecommendedDNSRecordsGet',
				value: 'DomainRecommendedDNSRecordsGet',
			},
			{
				name: 'DomainRedirectionChangeCreate',
				value: 'DomainRedirectionChangeCreate',
			},
			{
				name: 'DomainRedirectionCreate',
				value: 'DomainRedirectionCreate',
			},
			{
				name: 'DomainRedirectionDelete',
				value: 'DomainRedirectionDelete',
			},
			{
				name: 'DomainRedirectionGet',
				value: 'DomainRedirectionGet',
			},
			{
				name: 'DomainRedirectionList',
				value: 'DomainRedirectionList',
			},
			{
				name: 'DomainResponderCreate',
				value: 'DomainResponderCreate',
			},
			{
				name: 'DomainResponderDelete',
				value: 'DomainResponderDelete',
			},
			{
				name: 'DomainResponderGet',
				value: 'DomainResponderGet',
			},
			{
				name: 'DomainResponderList',
				value: 'DomainResponderList',
			},
			{
				name: 'DomainResponderUpdate',
				value: 'DomainResponderUpdate',
			},
			{
				name: 'DomainServiceInfosGet',
				value: 'DomainServiceInfosGet',
			},
			{
				name: 'DomainServiceInfosUpdate',
				value: 'DomainServiceInfosUpdate',
			},
			{
				name: 'DomainSummaryGet',
				value: 'DomainSummaryGet',
			},
			{
				name: 'DomainTaskAccountGet',
				value: 'DomainTaskAccountGet',
			},
			{
				name: 'DomainTaskAccountList',
				value: 'DomainTaskAccountList',
			},
			{
				name: 'DomainTaskAllGet',
				value: 'DomainTaskAllGet',
			},
			{
				name: 'DomainTaskAllList',
				value: 'DomainTaskAllList',
			},
			{
				name: 'DomainTaskFilterGet',
				value: 'DomainTaskFilterGet',
			},
			{
				name: 'DomainTaskFilterList',
				value: 'DomainTaskFilterList',
			},
			{
				name: 'DomainTaskMailinglistGet',
				value: 'DomainTaskMailinglistGet',
			},
			{
				name: 'DomainTaskMailinglistList',
				value: 'DomainTaskMailinglistList',
			},
			{
				name: 'DomainTaskRedirectionGet',
				value: 'DomainTaskRedirectionGet',
			},
			{
				name: 'DomainTaskRedirectionList',
				value: 'DomainTaskRedirectionList',
			},
			{
				name: 'DomainTaskResponderGet',
				value: 'DomainTaskResponderGet',
			},
			{
				name: 'DomainTaskResponderList',
				value: 'DomainTaskResponderList',
			},
			{
				name: 'DomainTerminateCreate',
				value: 'DomainTerminateCreate',
			},
			{
				name: 'MailingListLimitsGet',
				value: 'MailingListLimitsGet',
			},
		],
		default: 'DomainTaskFilterGet',
		displayOptions,
	});

	const properties: INodeProperties[] = [
		...props,
		...descriptionDelegatedAccountFilterChangeActivityCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DelegatedAccountFilterChangeActivityCreate'],
			},
		}),
		...descriptionDelegatedAccountFilterChangePriorityCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DelegatedAccountFilterChangePriorityCreate'],
			},
		}),
		...descriptionDelegatedAccountFilterCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountFilterCreate'] },
		}),
		...descriptionDelegatedAccountFilterDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountFilterDelete'] },
		}),
		...descriptionDelegatedAccountFilterGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountFilterGet'] },
		}),
		...descriptionDelegatedAccountFilterList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountFilterList'] },
		}),
		...descriptionDelegatedAccountFilterRuleDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountFilterRuleDelete'] },
		}),
		...descriptionDelegatedAccountFilterRuleGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountFilterRuleGet'] },
		}),
		...descriptionDelegatedAccountGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet'] },
		}),
		...descriptionDelegatedAccountGet10({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet10'] },
		}),
		...descriptionDelegatedAccountGet11({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet11'] },
		}),
		...descriptionDelegatedAccountGet12({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet12'] },
		}),
		...descriptionDelegatedAccountGet2({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet2'] },
		}),
		...descriptionDelegatedAccountGet3({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet3'] },
		}),
		...descriptionDelegatedAccountGet4({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet4'] },
		}),
		...descriptionDelegatedAccountGet5({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet5'] },
		}),
		...descriptionDelegatedAccountGet6({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet6'] },
		}),
		...descriptionDelegatedAccountGet7({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet7'] },
		}),
		...descriptionDelegatedAccountGet8({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet8'] },
		}),
		...descriptionDelegatedAccountGet9({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DelegatedAccountGet9'] },
		}),
		...descriptionDomainAccountChangePasswordCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainAccountChangePasswordCreate'],
			},
		}),
		...descriptionDomainAccountCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountCreate'] },
		}),
		...descriptionDomainAccountDelegationCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountDelegationCreate'] },
		}),
		...descriptionDomainAccountDelegationDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountDelegationDelete'] },
		}),
		...descriptionDomainAccountDelegationGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountDelegationGet'] },
		}),
		...descriptionDomainAccountDelegationList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountDelegationList'] },
		}),
		...descriptionDomainAccountDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountDelete'] },
		}),
		...descriptionDomainAccountFilterChangeActivityCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainAccountFilterChangeActivityCreate'],
			},
		}),
		...descriptionDomainAccountFilterChangePriorityCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainAccountFilterChangePriorityCreate'],
			},
		}),
		...descriptionDomainAccountFilterCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterCreate'] },
		}),
		...descriptionDomainAccountFilterDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterDelete'] },
		}),
		...descriptionDomainAccountFilterGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterGet'] },
		}),
		...descriptionDomainAccountFilterList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterList'] },
		}),
		...descriptionDomainAccountFilterRuleCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterRuleCreate'] },
		}),
		...descriptionDomainAccountFilterRuleDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterRuleDelete'] },
		}),
		...descriptionDomainAccountFilterRuleGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterRuleGet'] },
		}),
		...descriptionDomainAccountFilterRuleList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountFilterRuleList'] },
		}),
		...descriptionDomainAccountGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountGet'] },
		}),
		...descriptionDomainAccountList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountList'] },
		}),
		...descriptionDomainAccountMigrateCheckGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountMigrateCheckGet'] },
		}),
		...descriptionDomainAccountMigrateCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountMigrateCreate'] },
		}),
		...descriptionDomainAccountMigrateDestinationEmailGet({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainAccountMigrateDestinationEmailGet'],
			},
		}),
		...descriptionDomainAccountMigrateDestinationEmailList({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainAccountMigrateDestinationEmailList'],
			},
		}),
		...descriptionDomainAccountMigrateGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountMigrateGet'] },
		}),
		...descriptionDomainAccountMigrateGet2({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountMigrateGet2'] },
		}),
		...descriptionDomainAccountUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountUpdate'] },
		}),
		...descriptionDomainAccountUpdateUsagePost({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountUpdateUsagePost'] },
		}),
		...descriptionDomainAccountUsageGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAccountUsageGet'] },
		}),
		...descriptionDomainAclCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAclCreate'] },
		}),
		...descriptionDomainAclDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAclDelete'] },
		}),
		...descriptionDomainAclGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAclGet'] },
		}),
		...descriptionDomainAclList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainAclList'] },
		}),
		...descriptionDomainChangeContactCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainChangeContactCreate'] },
		}),
		...descriptionDomainChangeDnsMXFilterCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainChangeDnsMXFilterCreate'] },
		}),
		...descriptionDomainConfirmTerminationCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainConfirmTerminationCreate'] },
		}),
		...descriptionDomainDkimDisableUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainDkimDisableUpdate'] },
		}),
		...descriptionDomainDkimEnableUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainDkimEnableUpdate'] },
		}),
		...descriptionDomainDkimGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainDkimGet'] },
		}),
		...descriptionDomainDnsMXFilterGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainDnsMXFilterGet'] },
		}),
		...descriptionDomainDnsMXRecordsGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainDnsMXRecordsGet'] },
		}),
		...descriptionDomainGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainGet'] },
		}),
		...descriptionDomainList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainList'] },
		}),
		...descriptionDomainMailingListChangeOptionsCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainMailingListChangeOptionsCreate'],
			},
		}),
		...descriptionDomainMailingListCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListCreate'] },
		}),
		...descriptionDomainMailingListDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListDelete'] },
		}),
		...descriptionDomainMailingListGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListGet'] },
		}),
		...descriptionDomainMailingListList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListList'] },
		}),
		...descriptionDomainMailingListModeratorCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListModeratorCreate'] },
		}),
		...descriptionDomainMailingListModeratorDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListModeratorDelete'] },
		}),
		...descriptionDomainMailingListModeratorGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListModeratorGet'] },
		}),
		...descriptionDomainMailingListModeratorList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListModeratorList'] },
		}),
		...descriptionDomainMailingListSendListByEmailCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainMailingListSendListByEmailCreate'],
			},
		}),
		...descriptionDomainMailingListSubscriberCreate({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainMailingListSubscriberCreate'],
			},
		}),
		...descriptionDomainMailingListSubscriberDelete({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainMailingListSubscriberDelete'],
			},
		}),
		...descriptionDomainMailingListSubscriberGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListSubscriberGet'] },
		}),
		...descriptionDomainMailingListSubscriberList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListSubscriberList'] },
		}),
		...descriptionDomainMailingListUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainMailingListUpdate'] },
		}),
		...descriptionDomainMigrateDelegationV3toV6Create({
			...displayOptions,
			show: {
				...displayOptions?.show,
				emailDomainOperation: ['DomainMigrateDelegationV3toV6Create'],
			},
		}),
		...descriptionDomainQuotaGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainQuotaGet'] },
		}),
		...descriptionDomainRecommendedDNSRecordsGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainRecommendedDNSRecordsGet'] },
		}),
		...descriptionDomainRedirectionChangeCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainRedirectionChangeCreate'] },
		}),
		...descriptionDomainRedirectionCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainRedirectionCreate'] },
		}),
		...descriptionDomainRedirectionDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainRedirectionDelete'] },
		}),
		...descriptionDomainRedirectionGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainRedirectionGet'] },
		}),
		...descriptionDomainRedirectionList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainRedirectionList'] },
		}),
		...descriptionDomainResponderCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainResponderCreate'] },
		}),
		...descriptionDomainResponderDelete({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainResponderDelete'] },
		}),
		...descriptionDomainResponderGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainResponderGet'] },
		}),
		...descriptionDomainResponderList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainResponderList'] },
		}),
		...descriptionDomainResponderUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainResponderUpdate'] },
		}),
		...descriptionDomainServiceInfosGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainServiceInfosGet'] },
		}),
		...descriptionDomainServiceInfosUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainServiceInfosUpdate'] },
		}),
		...descriptionDomainSummaryGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainSummaryGet'] },
		}),
		...descriptionDomainTaskAccountGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskAccountGet'] },
		}),
		...descriptionDomainTaskAccountList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskAccountList'] },
		}),
		...descriptionDomainTaskAllGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskAllGet'] },
		}),
		...descriptionDomainTaskAllList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskAllList'] },
		}),
		...descriptionDomainTaskFilterGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskFilterGet'] },
		}),
		...descriptionDomainTaskFilterList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskFilterList'] },
		}),
		...descriptionDomainTaskMailinglistGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskMailinglistGet'] },
		}),
		...descriptionDomainTaskMailinglistList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskMailinglistList'] },
		}),
		...descriptionDomainTaskRedirectionGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskRedirectionGet'] },
		}),
		...descriptionDomainTaskRedirectionList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskRedirectionList'] },
		}),
		...descriptionDomainTaskResponderGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskResponderGet'] },
		}),
		...descriptionDomainTaskResponderList({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTaskResponderList'] },
		}),
		...descriptionDomainTerminateCreate({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['DomainTerminateCreate'] },
		}),
		...descriptionMailingListLimitsGet({
			...displayOptions,
			show: { ...displayOptions?.show, emailDomainOperation: ['MailingListLimitsGet'] },
		}),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('emailDomainOperation', itemIndex ?? 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'DelegatedAccountFilterChangeActivityCreate':
			return executeDelegatedAccountFilterChangeActivityCreate.call(this, itemIndex ?? 0);
		case 'DelegatedAccountFilterChangePriorityCreate':
			return executeDelegatedAccountFilterChangePriorityCreate.call(this, itemIndex ?? 0);
		case 'DelegatedAccountFilterCreate':
			return executeDelegatedAccountFilterCreate.call(this, itemIndex ?? 0);
		case 'DelegatedAccountFilterDelete':
			return executeDelegatedAccountFilterDelete.call(this, itemIndex ?? 0);
		case 'DelegatedAccountFilterGet':
			return executeDelegatedAccountFilterGet.call(this, itemIndex ?? 0);
		case 'DelegatedAccountFilterList':
			return executeDelegatedAccountFilterList.call(this, itemIndex ?? 0);
		case 'DelegatedAccountFilterRuleDelete':
			return executeDelegatedAccountFilterRuleDelete.call(this, itemIndex ?? 0);
		case 'DelegatedAccountFilterRuleGet':
			return executeDelegatedAccountFilterRuleGet.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet':
			return executeDelegatedAccountGet.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet10':
			return executeDelegatedAccountGet10.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet11':
			return executeDelegatedAccountGet11.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet12':
			return executeDelegatedAccountGet12.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet2':
			return executeDelegatedAccountGet2.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet3':
			return executeDelegatedAccountGet3.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet4':
			return executeDelegatedAccountGet4.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet5':
			return executeDelegatedAccountGet5.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet6':
			return executeDelegatedAccountGet6.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet7':
			return executeDelegatedAccountGet7.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet8':
			return executeDelegatedAccountGet8.call(this, itemIndex ?? 0);
		case 'DelegatedAccountGet9':
			return executeDelegatedAccountGet9.call(this, itemIndex ?? 0);
		case 'DomainAccountChangePasswordCreate':
			return executeDomainAccountChangePasswordCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountCreate':
			return executeDomainAccountCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountDelegationCreate':
			return executeDomainAccountDelegationCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountDelegationDelete':
			return executeDomainAccountDelegationDelete.call(this, itemIndex ?? 0);
		case 'DomainAccountDelegationGet':
			return executeDomainAccountDelegationGet.call(this, itemIndex ?? 0);
		case 'DomainAccountDelegationList':
			return executeDomainAccountDelegationList.call(this, itemIndex ?? 0);
		case 'DomainAccountDelete':
			return executeDomainAccountDelete.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterChangeActivityCreate':
			return executeDomainAccountFilterChangeActivityCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterChangePriorityCreate':
			return executeDomainAccountFilterChangePriorityCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterCreate':
			return executeDomainAccountFilterCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterDelete':
			return executeDomainAccountFilterDelete.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterGet':
			return executeDomainAccountFilterGet.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterList':
			return executeDomainAccountFilterList.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterRuleCreate':
			return executeDomainAccountFilterRuleCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterRuleDelete':
			return executeDomainAccountFilterRuleDelete.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterRuleGet':
			return executeDomainAccountFilterRuleGet.call(this, itemIndex ?? 0);
		case 'DomainAccountFilterRuleList':
			return executeDomainAccountFilterRuleList.call(this, itemIndex ?? 0);
		case 'DomainAccountGet':
			return executeDomainAccountGet.call(this, itemIndex ?? 0);
		case 'DomainAccountList':
			return executeDomainAccountList.call(this, itemIndex ?? 0);
		case 'DomainAccountMigrateCheckGet':
			return executeDomainAccountMigrateCheckGet.call(this, itemIndex ?? 0);
		case 'DomainAccountMigrateCreate':
			return executeDomainAccountMigrateCreate.call(this, itemIndex ?? 0);
		case 'DomainAccountMigrateDestinationEmailGet':
			return executeDomainAccountMigrateDestinationEmailGet.call(this, itemIndex ?? 0);
		case 'DomainAccountMigrateDestinationEmailList':
			return executeDomainAccountMigrateDestinationEmailList.call(this, itemIndex ?? 0);
		case 'DomainAccountMigrateGet':
			return executeDomainAccountMigrateGet.call(this, itemIndex ?? 0);
		case 'DomainAccountMigrateGet2':
			return executeDomainAccountMigrateGet2.call(this, itemIndex ?? 0);
		case 'DomainAccountUpdate':
			return executeDomainAccountUpdate.call(this, itemIndex ?? 0);
		case 'DomainAccountUpdateUsagePost':
			return executeDomainAccountUpdateUsagePost.call(this, itemIndex ?? 0);
		case 'DomainAccountUsageGet':
			return executeDomainAccountUsageGet.call(this, itemIndex ?? 0);
		case 'DomainAclCreate':
			return executeDomainAclCreate.call(this, itemIndex ?? 0);
		case 'DomainAclDelete':
			return executeDomainAclDelete.call(this, itemIndex ?? 0);
		case 'DomainAclGet':
			return executeDomainAclGet.call(this, itemIndex ?? 0);
		case 'DomainAclList':
			return executeDomainAclList.call(this, itemIndex ?? 0);
		case 'DomainChangeContactCreate':
			return executeDomainChangeContactCreate.call(this, itemIndex ?? 0);
		case 'DomainChangeDnsMXFilterCreate':
			return executeDomainChangeDnsMXFilterCreate.call(this, itemIndex ?? 0);
		case 'DomainConfirmTerminationCreate':
			return executeDomainConfirmTerminationCreate.call(this, itemIndex ?? 0);
		case 'DomainDkimDisableUpdate':
			return executeDomainDkimDisableUpdate.call(this, itemIndex ?? 0);
		case 'DomainDkimEnableUpdate':
			return executeDomainDkimEnableUpdate.call(this, itemIndex ?? 0);
		case 'DomainDkimGet':
			return executeDomainDkimGet.call(this, itemIndex ?? 0);
		case 'DomainDnsMXFilterGet':
			return executeDomainDnsMXFilterGet.call(this, itemIndex ?? 0);
		case 'DomainDnsMXRecordsGet':
			return executeDomainDnsMXRecordsGet.call(this, itemIndex ?? 0);
		case 'DomainGet':
			return executeDomainGet.call(this, itemIndex ?? 0);
		case 'DomainList':
			return executeDomainList.call(this, itemIndex ?? 0);
		case 'DomainMailingListChangeOptionsCreate':
			return executeDomainMailingListChangeOptionsCreate.call(this, itemIndex ?? 0);
		case 'DomainMailingListCreate':
			return executeDomainMailingListCreate.call(this, itemIndex ?? 0);
		case 'DomainMailingListDelete':
			return executeDomainMailingListDelete.call(this, itemIndex ?? 0);
		case 'DomainMailingListGet':
			return executeDomainMailingListGet.call(this, itemIndex ?? 0);
		case 'DomainMailingListList':
			return executeDomainMailingListList.call(this, itemIndex ?? 0);
		case 'DomainMailingListModeratorCreate':
			return executeDomainMailingListModeratorCreate.call(this, itemIndex ?? 0);
		case 'DomainMailingListModeratorDelete':
			return executeDomainMailingListModeratorDelete.call(this, itemIndex ?? 0);
		case 'DomainMailingListModeratorGet':
			return executeDomainMailingListModeratorGet.call(this, itemIndex ?? 0);
		case 'DomainMailingListModeratorList':
			return executeDomainMailingListModeratorList.call(this, itemIndex ?? 0);
		case 'DomainMailingListSendListByEmailCreate':
			return executeDomainMailingListSendListByEmailCreate.call(this, itemIndex ?? 0);
		case 'DomainMailingListSubscriberCreate':
			return executeDomainMailingListSubscriberCreate.call(this, itemIndex ?? 0);
		case 'DomainMailingListSubscriberDelete':
			return executeDomainMailingListSubscriberDelete.call(this, itemIndex ?? 0);
		case 'DomainMailingListSubscriberGet':
			return executeDomainMailingListSubscriberGet.call(this, itemIndex ?? 0);
		case 'DomainMailingListSubscriberList':
			return executeDomainMailingListSubscriberList.call(this, itemIndex ?? 0);
		case 'DomainMailingListUpdate':
			return executeDomainMailingListUpdate.call(this, itemIndex ?? 0);
		case 'DomainMigrateDelegationV3toV6Create':
			return executeDomainMigrateDelegationV3toV6Create.call(this, itemIndex ?? 0);
		case 'DomainQuotaGet':
			return executeDomainQuotaGet.call(this, itemIndex ?? 0);
		case 'DomainRecommendedDNSRecordsGet':
			return executeDomainRecommendedDNSRecordsGet.call(this, itemIndex ?? 0);
		case 'DomainRedirectionChangeCreate':
			return executeDomainRedirectionChangeCreate.call(this, itemIndex ?? 0);
		case 'DomainRedirectionCreate':
			return executeDomainRedirectionCreate.call(this, itemIndex ?? 0);
		case 'DomainRedirectionDelete':
			return executeDomainRedirectionDelete.call(this, itemIndex ?? 0);
		case 'DomainRedirectionGet':
			return executeDomainRedirectionGet.call(this, itemIndex ?? 0);
		case 'DomainRedirectionList':
			return executeDomainRedirectionList.call(this, itemIndex ?? 0);
		case 'DomainResponderCreate':
			return executeDomainResponderCreate.call(this, itemIndex ?? 0);
		case 'DomainResponderDelete':
			return executeDomainResponderDelete.call(this, itemIndex ?? 0);
		case 'DomainResponderGet':
			return executeDomainResponderGet.call(this, itemIndex ?? 0);
		case 'DomainResponderList':
			return executeDomainResponderList.call(this, itemIndex ?? 0);
		case 'DomainResponderUpdate':
			return executeDomainResponderUpdate.call(this, itemIndex ?? 0);
		case 'DomainServiceInfosGet':
			return executeDomainServiceInfosGet.call(this, itemIndex ?? 0);
		case 'DomainServiceInfosUpdate':
			return executeDomainServiceInfosUpdate.call(this, itemIndex ?? 0);
		case 'DomainSummaryGet':
			return executeDomainSummaryGet.call(this, itemIndex ?? 0);
		case 'DomainTaskAccountGet':
			return executeDomainTaskAccountGet.call(this, itemIndex ?? 0);
		case 'DomainTaskAccountList':
			return executeDomainTaskAccountList.call(this, itemIndex ?? 0);
		case 'DomainTaskAllGet':
			return executeDomainTaskAllGet.call(this, itemIndex ?? 0);
		case 'DomainTaskAllList':
			return executeDomainTaskAllList.call(this, itemIndex ?? 0);
		case 'DomainTaskFilterGet':
			return executeDomainTaskFilterGet.call(this, itemIndex ?? 0);
		case 'DomainTaskFilterList':
			return executeDomainTaskFilterList.call(this, itemIndex ?? 0);
		case 'DomainTaskMailinglistGet':
			return executeDomainTaskMailinglistGet.call(this, itemIndex ?? 0);
		case 'DomainTaskMailinglistList':
			return executeDomainTaskMailinglistList.call(this, itemIndex ?? 0);
		case 'DomainTaskRedirectionGet':
			return executeDomainTaskRedirectionGet.call(this, itemIndex ?? 0);
		case 'DomainTaskRedirectionList':
			return executeDomainTaskRedirectionList.call(this, itemIndex ?? 0);
		case 'DomainTaskResponderGet':
			return executeDomainTaskResponderGet.call(this, itemIndex ?? 0);
		case 'DomainTaskResponderList':
			return executeDomainTaskResponderList.call(this, itemIndex ?? 0);
		case 'DomainTerminateCreate':
			return executeDomainTerminateCreate.call(this, itemIndex ?? 0);
		case 'MailingListLimitsGet':
			return executeMailingListLimitsGet.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "emailDomain"`);
}
