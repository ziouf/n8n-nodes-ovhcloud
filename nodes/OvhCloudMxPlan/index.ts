import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionMxPlanGet,
	execute as executeMxPlanGet,
} from './misc/MxPlanGet.operation';
import {
	description as descriptionMxPlanList,
	execute as executeMxPlanList,
} from './misc/MxPlanList.operation';
import {
	description as descriptionMxPlanPut,
	execute as executeMxPlanPut,
} from './misc/MxPlanPut.operation';
import {
	description as descriptionMxPlanAccountAliasCreate,
	execute as executeMxPlanAccountAliasCreate,
} from './mxplanAccount/MxPlanAccountAliasCreate.operation';
import {
	description as descriptionMxPlanAccountAliasDelete,
	execute as executeMxPlanAccountAliasDelete,
} from './mxplanAccount/MxPlanAccountAliasDelete.operation';
import {
	description as descriptionMxPlanAccountAliasGet,
	execute as executeMxPlanAccountAliasGet,
} from './mxplanAccount/MxPlanAccountAliasGet.operation';
import {
	description as descriptionMxPlanAccountAliasList,
	execute as executeMxPlanAccountAliasList,
} from './mxplanAccount/MxPlanAccountAliasList.operation';
import {
	description as descriptionMxPlanAccountCapabilitiesGet,
	execute as executeMxPlanAccountCapabilitiesGet,
} from './mxplanAccount/MxPlanAccountCapabilitiesGet.operation';
import {
	description as descriptionMxPlanAccountChangePasswordCreate,
	execute as executeMxPlanAccountChangePasswordCreate,
} from './mxplanAccount/MxPlanAccountChangePasswordCreate.operation';
import {
	description as descriptionMxPlanAccountDelete,
	execute as executeMxPlanAccountDelete,
} from './mxplanAccount/MxPlanAccountDelete.operation';
import {
	description as descriptionMxPlanAccountDiagnosticCreate,
	execute as executeMxPlanAccountDiagnosticCreate,
} from './mxplanAccount/MxPlanAccountDiagnosticCreate.operation';
import {
	description as descriptionMxPlanAccountDiagnosticGet,
	execute as executeMxPlanAccountDiagnosticGet,
} from './mxplanAccount/MxPlanAccountDiagnosticGet.operation';
import {
	description as descriptionMxPlanAccountFullAccessCreate,
	execute as executeMxPlanAccountFullAccessCreate,
} from './mxplanAccount/MxPlanAccountFullAccessCreate.operation';
import {
	description as descriptionMxPlanAccountFullAccessDelete,
	execute as executeMxPlanAccountFullAccessDelete,
} from './mxplanAccount/MxPlanAccountFullAccessDelete.operation';
import {
	description as descriptionMxPlanAccountFullAccessGet,
	execute as executeMxPlanAccountFullAccessGet,
} from './mxplanAccount/MxPlanAccountFullAccessGet.operation';
import {
	description as descriptionMxPlanAccountFullAccessList,
	execute as executeMxPlanAccountFullAccessList,
} from './mxplanAccount/MxPlanAccountFullAccessList.operation';
import {
	description as descriptionMxPlanAccountGet,
	execute as executeMxPlanAccountGet,
} from './mxplanAccount/MxPlanAccountGet.operation';
import {
	description as descriptionMxPlanAccountList,
	execute as executeMxPlanAccountList,
} from './mxplanAccount/MxPlanAccountList.operation';
import {
	description as descriptionMxPlanAccountSendAsCreate,
	execute as executeMxPlanAccountSendAsCreate,
} from './mxplanAccount/MxPlanAccountSendAsCreate.operation';
import {
	description as descriptionMxPlanAccountSendAsDelete,
	execute as executeMxPlanAccountSendAsDelete,
} from './mxplanAccount/MxPlanAccountSendAsDelete.operation';
import {
	description as descriptionMxPlanAccountSendAsGet,
	execute as executeMxPlanAccountSendAsGet,
} from './mxplanAccount/MxPlanAccountSendAsGet.operation';
import {
	description as descriptionMxPlanAccountSendAsList,
	execute as executeMxPlanAccountSendAsList,
} from './mxplanAccount/MxPlanAccountSendAsList.operation';
import {
	description as descriptionMxPlanAccountSendOnBehalfToCreate,
	execute as executeMxPlanAccountSendOnBehalfToCreate,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToCreate.operation';
import {
	description as descriptionMxPlanAccountSendOnBehalfToDelete,
	execute as executeMxPlanAccountSendOnBehalfToDelete,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToDelete.operation';
import {
	description as descriptionMxPlanAccountSendOnBehalfToGet,
	execute as executeMxPlanAccountSendOnBehalfToGet,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToGet.operation';
import {
	description as descriptionMxPlanAccountSendOnBehalfToList,
	execute as executeMxPlanAccountSendOnBehalfToList,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToList.operation';
import {
	description as descriptionMxPlanAccountTaskGet,
	execute as executeMxPlanAccountTaskGet,
} from './mxplanAccount/MxPlanAccountTaskGet.operation';
import {
	description as descriptionMxPlanAccountTaskList,
	execute as executeMxPlanAccountTaskList,
} from './mxplanAccount/MxPlanAccountTaskList.operation';
import {
	description as descriptionMxPlanAccountUpdate,
	execute as executeMxPlanAccountUpdate,
} from './mxplanAccount/MxPlanAccountUpdate.operation';
import {
	description as descriptionMxPlanDomainDisclaimerAttributeGet,
	execute as executeMxPlanDomainDisclaimerAttributeGet,
} from './mxplanDomain/MxPlanDomainDisclaimerAttributeGet.operation';
import {
	description as descriptionMxPlanDomainDisclaimerCreate,
	execute as executeMxPlanDomainDisclaimerCreate,
} from './mxplanDomain/MxPlanDomainDisclaimerCreate.operation';
import {
	description as descriptionMxPlanDomainDisclaimerDelete,
	execute as executeMxPlanDomainDisclaimerDelete,
} from './mxplanDomain/MxPlanDomainDisclaimerDelete.operation';
import {
	description as descriptionMxPlanDomainDisclaimerList,
	execute as executeMxPlanDomainDisclaimerList,
} from './mxplanDomain/MxPlanDomainDisclaimerList.operation';
import {
	description as descriptionMxPlanDomainDisclaimerUpdate,
	execute as executeMxPlanDomainDisclaimerUpdate,
} from './mxplanDomain/MxPlanDomainDisclaimerUpdate.operation';
import {
	description as descriptionMxPlanDomainGet,
	execute as executeMxPlanDomainGet,
} from './mxplanDomain/MxPlanDomainGet.operation';
import {
	description as descriptionMxPlanDomainList,
	execute as executeMxPlanDomainList,
} from './mxplanDomain/MxPlanDomainList.operation';
import {
	description as descriptionMxPlanDomainUpdate,
	execute as executeMxPlanDomainUpdate,
} from './mxplanDomain/MxPlanDomainUpdate.operation';
import {
	description as descriptionMxPlanExternalContactCreate,
	execute as executeMxPlanExternalContactCreate,
} from './mxplanExternalContact/MxPlanExternalContactCreate.operation';
import {
	description as descriptionMxPlanExternalContactDelete,
	execute as executeMxPlanExternalContactDelete,
} from './mxplanExternalContact/MxPlanExternalContactDelete.operation';
import {
	description as descriptionMxPlanExternalContactGet,
	execute as executeMxPlanExternalContactGet,
} from './mxplanExternalContact/MxPlanExternalContactGet.operation';
import {
	description as descriptionMxPlanExternalContactList,
	execute as executeMxPlanExternalContactList,
} from './mxplanExternalContact/MxPlanExternalContactList.operation';
import {
	description as descriptionMxPlanExternalContactUpdate,
	execute as executeMxPlanExternalContactUpdate,
} from './mxplanExternalContact/MxPlanExternalContactUpdate.operation';
import {
	description as descriptionMxPlanServerGet,
	execute as executeMxPlanServerGet,
} from './mxplanServer/MxPlanServerGet.operation';
import {
	description as descriptionMxPlanTaskGet,
	execute as executeMxPlanTaskGet,
} from './mxplanTask/MxPlanTaskGet.operation';
import {
	description as descriptionMxPlanTaskList,
	execute as executeMxPlanTaskList,
} from './mxplanTask/MxPlanTaskList.operation';
import {
	description as descriptionMxPlanUpdateFlagsOnAllAccountsCreate,
	execute as executeMxPlanUpdateFlagsOnAllAccountsCreate,
} from './mxplanUpdateFlagsOnAllAccounts/MxPlanUpdateFlagsOnAllAccountsCreate.operation';


const { description, execute } = createOperationDispatcher(
	'mxPlanOperation',
	'emailMxplan',
	[
	{
		name: 'MxPlanAccountAliasCreate',
		value: 'MxPlanAccountAliasCreate',
		action: 'MxPlanAccountAliasCreate',
		execute: executeMxPlanAccountAliasCreate,
		description: descriptionMxPlanAccountAliasCreate,
	},
	{
		name: 'MxPlanAccountAliasDelete',
		value: 'MxPlanAccountAliasDelete',
		action: 'MxPlanAccountAliasDelete',
		execute: executeMxPlanAccountAliasDelete,
		description: descriptionMxPlanAccountAliasDelete,
	},
	{
		name: 'MxPlanAccountAliasGet',
		value: 'MxPlanAccountAliasGet',
		action: 'MxPlanAccountAliasGet',
		execute: executeMxPlanAccountAliasGet,
		description: descriptionMxPlanAccountAliasGet,
		default: true,
	},
	{
		name: 'MxPlanAccountAliasList',
		value: 'MxPlanAccountAliasList',
		action: 'MxPlanAccountAliasList',
		execute: executeMxPlanAccountAliasList,
		description: descriptionMxPlanAccountAliasList,
	},
	{
		name: 'MxPlanAccountCapabilitiesGet',
		value: 'MxPlanAccountCapabilitiesGet',
		action: 'MxPlanAccountCapabilitiesGet',
		execute: executeMxPlanAccountCapabilitiesGet,
		description: descriptionMxPlanAccountCapabilitiesGet,
	},
	{
		name: 'MxPlanAccountChangePasswordCreate',
		value: 'MxPlanAccountChangePasswordCreate',
		action: 'MxPlanAccountChangePasswordCreate',
		execute: executeMxPlanAccountChangePasswordCreate,
		description: descriptionMxPlanAccountChangePasswordCreate,
	},
	{
		name: 'MxPlanAccountDelete',
		value: 'MxPlanAccountDelete',
		action: 'MxPlanAccountDelete',
		execute: executeMxPlanAccountDelete,
		description: descriptionMxPlanAccountDelete,
	},
	{
		name: 'MxPlanAccountDiagnosticCreate',
		value: 'MxPlanAccountDiagnosticCreate',
		action: 'MxPlanAccountDiagnosticCreate',
		execute: executeMxPlanAccountDiagnosticCreate,
		description: descriptionMxPlanAccountDiagnosticCreate,
	},
	{
		name: 'MxPlanAccountDiagnosticGet',
		value: 'MxPlanAccountDiagnosticGet',
		action: 'MxPlanAccountDiagnosticGet',
		execute: executeMxPlanAccountDiagnosticGet,
		description: descriptionMxPlanAccountDiagnosticGet,
	},
	{
		name: 'MxPlanAccountFullAccessCreate',
		value: 'MxPlanAccountFullAccessCreate',
		action: 'MxPlanAccountFullAccessCreate',
		execute: executeMxPlanAccountFullAccessCreate,
		description: descriptionMxPlanAccountFullAccessCreate,
	},
	{
		name: 'MxPlanAccountFullAccessDelete',
		value: 'MxPlanAccountFullAccessDelete',
		action: 'MxPlanAccountFullAccessDelete',
		execute: executeMxPlanAccountFullAccessDelete,
		description: descriptionMxPlanAccountFullAccessDelete,
	},
	{
		name: 'MxPlanAccountFullAccessGet',
		value: 'MxPlanAccountFullAccessGet',
		action: 'MxPlanAccountFullAccessGet',
		execute: executeMxPlanAccountFullAccessGet,
		description: descriptionMxPlanAccountFullAccessGet,
	},
	{
		name: 'MxPlanAccountFullAccessList',
		value: 'MxPlanAccountFullAccessList',
		action: 'MxPlanAccountFullAccessList',
		execute: executeMxPlanAccountFullAccessList,
		description: descriptionMxPlanAccountFullAccessList,
	},
	{
		name: 'MxPlanAccountGet',
		value: 'MxPlanAccountGet',
		action: 'MxPlanAccountGet',
		execute: executeMxPlanAccountGet,
		description: descriptionMxPlanAccountGet,
	},
	{
		name: 'MxPlanAccountList',
		value: 'MxPlanAccountList',
		action: 'MxPlanAccountList',
		execute: executeMxPlanAccountList,
		description: descriptionMxPlanAccountList,
	},
	{
		name: 'MxPlanAccountSendAsCreate',
		value: 'MxPlanAccountSendAsCreate',
		action: 'MxPlanAccountSendAsCreate',
		execute: executeMxPlanAccountSendAsCreate,
		description: descriptionMxPlanAccountSendAsCreate,
	},
	{
		name: 'MxPlanAccountSendAsDelete',
		value: 'MxPlanAccountSendAsDelete',
		action: 'MxPlanAccountSendAsDelete',
		execute: executeMxPlanAccountSendAsDelete,
		description: descriptionMxPlanAccountSendAsDelete,
	},
	{
		name: 'MxPlanAccountSendAsGet',
		value: 'MxPlanAccountSendAsGet',
		action: 'MxPlanAccountSendAsGet',
		execute: executeMxPlanAccountSendAsGet,
		description: descriptionMxPlanAccountSendAsGet,
	},
	{
		name: 'MxPlanAccountSendAsList',
		value: 'MxPlanAccountSendAsList',
		action: 'MxPlanAccountSendAsList',
		execute: executeMxPlanAccountSendAsList,
		description: descriptionMxPlanAccountSendAsList,
	},
	{
		name: 'MxPlanAccountSendOnBehalfToCreate',
		value: 'MxPlanAccountSendOnBehalfToCreate',
		action: 'MxPlanAccountSendOnBehalfToCreate',
		execute: executeMxPlanAccountSendOnBehalfToCreate,
		description: descriptionMxPlanAccountSendOnBehalfToCreate,
	},
	{
		name: 'MxPlanAccountSendOnBehalfToDelete',
		value: 'MxPlanAccountSendOnBehalfToDelete',
		action: 'MxPlanAccountSendOnBehalfToDelete',
		execute: executeMxPlanAccountSendOnBehalfToDelete,
		description: descriptionMxPlanAccountSendOnBehalfToDelete,
	},
	{
		name: 'MxPlanAccountSendOnBehalfToGet',
		value: 'MxPlanAccountSendOnBehalfToGet',
		action: 'MxPlanAccountSendOnBehalfToGet',
		execute: executeMxPlanAccountSendOnBehalfToGet,
		description: descriptionMxPlanAccountSendOnBehalfToGet,
	},
	{
		name: 'MxPlanAccountSendOnBehalfToList',
		value: 'MxPlanAccountSendOnBehalfToList',
		action: 'MxPlanAccountSendOnBehalfToList',
		execute: executeMxPlanAccountSendOnBehalfToList,
		description: descriptionMxPlanAccountSendOnBehalfToList,
	},
	{
		name: 'MxPlanAccountTaskGet',
		value: 'MxPlanAccountTaskGet',
		action: 'MxPlanAccountTaskGet',
		execute: executeMxPlanAccountTaskGet,
		description: descriptionMxPlanAccountTaskGet,
	},
	{
		name: 'MxPlanAccountTaskList',
		value: 'MxPlanAccountTaskList',
		action: 'MxPlanAccountTaskList',
		execute: executeMxPlanAccountTaskList,
		description: descriptionMxPlanAccountTaskList,
	},
	{
		name: 'MxPlanAccountUpdate',
		value: 'MxPlanAccountUpdate',
		action: 'MxPlanAccountUpdate',
		execute: executeMxPlanAccountUpdate,
		description: descriptionMxPlanAccountUpdate,
	},
	{
		name: 'MxPlanDomainDisclaimerAttributeGet',
		value: 'MxPlanDomainDisclaimerAttributeGet',
		action: 'MxPlanDomainDisclaimerAttributeGet',
		execute: executeMxPlanDomainDisclaimerAttributeGet,
		description: descriptionMxPlanDomainDisclaimerAttributeGet,
	},
	{
		name: 'MxPlanDomainDisclaimerCreate',
		value: 'MxPlanDomainDisclaimerCreate',
		action: 'MxPlanDomainDisclaimerCreate',
		execute: executeMxPlanDomainDisclaimerCreate,
		description: descriptionMxPlanDomainDisclaimerCreate,
	},
	{
		name: 'MxPlanDomainDisclaimerDelete',
		value: 'MxPlanDomainDisclaimerDelete',
		action: 'MxPlanDomainDisclaimerDelete',
		execute: executeMxPlanDomainDisclaimerDelete,
		description: descriptionMxPlanDomainDisclaimerDelete,
	},
	{
		name: 'MxPlanDomainDisclaimerList',
		value: 'MxPlanDomainDisclaimerList',
		action: 'MxPlanDomainDisclaimerList',
		execute: executeMxPlanDomainDisclaimerList,
		description: descriptionMxPlanDomainDisclaimerList,
	},
	{
		name: 'MxPlanDomainDisclaimerUpdate',
		value: 'MxPlanDomainDisclaimerUpdate',
		action: 'MxPlanDomainDisclaimerUpdate',
		execute: executeMxPlanDomainDisclaimerUpdate,
		description: descriptionMxPlanDomainDisclaimerUpdate,
	},
	{
		name: 'MxPlanDomainGet',
		value: 'MxPlanDomainGet',
		action: 'MxPlanDomainGet',
		execute: executeMxPlanDomainGet,
		description: descriptionMxPlanDomainGet,
	},
	{
		name: 'MxPlanDomainList',
		value: 'MxPlanDomainList',
		action: 'MxPlanDomainList',
		execute: executeMxPlanDomainList,
		description: descriptionMxPlanDomainList,
	},
	{
		name: 'MxPlanDomainUpdate',
		value: 'MxPlanDomainUpdate',
		action: 'MxPlanDomainUpdate',
		execute: executeMxPlanDomainUpdate,
		description: descriptionMxPlanDomainUpdate,
	},
	{
		name: 'MxPlanExternalContactCreate',
		value: 'MxPlanExternalContactCreate',
		action: 'MxPlanExternalContactCreate',
		execute: executeMxPlanExternalContactCreate,
		description: descriptionMxPlanExternalContactCreate,
	},
	{
		name: 'MxPlanExternalContactDelete',
		value: 'MxPlanExternalContactDelete',
		action: 'MxPlanExternalContactDelete',
		execute: executeMxPlanExternalContactDelete,
		description: descriptionMxPlanExternalContactDelete,
	},
	{
		name: 'MxPlanExternalContactGet',
		value: 'MxPlanExternalContactGet',
		action: 'MxPlanExternalContactGet',
		execute: executeMxPlanExternalContactGet,
		description: descriptionMxPlanExternalContactGet,
	},
	{
		name: 'MxPlanExternalContactList',
		value: 'MxPlanExternalContactList',
		action: 'MxPlanExternalContactList',
		execute: executeMxPlanExternalContactList,
		description: descriptionMxPlanExternalContactList,
	},
	{
		name: 'MxPlanExternalContactUpdate',
		value: 'MxPlanExternalContactUpdate',
		action: 'MxPlanExternalContactUpdate',
		execute: executeMxPlanExternalContactUpdate,
		description: descriptionMxPlanExternalContactUpdate,
	},
	{
		name: 'MxPlanGet',
		value: 'MxPlanGet',
		action: 'MxPlanGet',
		execute: executeMxPlanGet,
		description: descriptionMxPlanGet,
	},
	{
		name: 'MxPlanList',
		value: 'MxPlanList',
		action: 'MxPlanList',
		execute: executeMxPlanList,
		description: descriptionMxPlanList,
	},
	{
		name: 'MxPlanPut',
		value: 'MxPlanPut',
		action: 'MxPlanPut',
		execute: executeMxPlanPut,
		description: descriptionMxPlanPut,
	},
	{
		name: 'MxPlanServerGet',
		value: 'MxPlanServerGet',
		action: 'MxPlanServerGet',
		execute: executeMxPlanServerGet,
		description: descriptionMxPlanServerGet,
	},
	{
		name: 'MxPlanTaskGet',
		value: 'MxPlanTaskGet',
		action: 'MxPlanTaskGet',
		execute: executeMxPlanTaskGet,
		description: descriptionMxPlanTaskGet,
	},
	{
		name: 'MxPlanTaskList',
		value: 'MxPlanTaskList',
		action: 'MxPlanTaskList',
		execute: executeMxPlanTaskList,
		description: descriptionMxPlanTaskList,
	},
	{
		name: 'MxPlanUpdateFlagsOnAllAccountsCreate',
		value: 'MxPlanUpdateFlagsOnAllAccountsCreate',
		action: 'MxPlanUpdateFlagsOnAllAccountsCreate',
		execute: executeMxPlanUpdateFlagsOnAllAccountsCreate,
		description: descriptionMxPlanUpdateFlagsOnAllAccountsCreate,
	},
	],
);

export { description, execute };
