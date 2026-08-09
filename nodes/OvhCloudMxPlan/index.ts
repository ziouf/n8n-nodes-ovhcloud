import type {
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';

import {
	execute as executeMxPlanAccountAliasCreate,
	description as descriptionMxPlanAccountAliasCreate,
} from './mxplanAccount/MxPlanAccountAliasCreate.operation';
import {
	execute as executeMxPlanAccountAliasDelete,
	description as descriptionMxPlanAccountAliasDelete,
} from './mxplanAccount/MxPlanAccountAliasDelete.operation';
import {
	execute as executeMxPlanAccountAliasGet,
	description as descriptionMxPlanAccountAliasGet,
} from './mxplanAccount/MxPlanAccountAliasGet.operation';
import {
	execute as executeMxPlanAccountAliasList,
	description as descriptionMxPlanAccountAliasList,
} from './mxplanAccount/MxPlanAccountAliasList.operation';
import {
	execute as executeMxPlanAccountCapabilitiesGet,
	description as descriptionMxPlanAccountCapabilitiesGet,
} from './mxplanAccount/MxPlanAccountCapabilitiesGet.operation';
import {
	execute as executeMxPlanAccountChangePasswordCreate,
	description as descriptionMxPlanAccountChangePasswordCreate,
} from './mxplanAccount/MxPlanAccountChangePasswordCreate.operation';
import {
	execute as executeMxPlanAccountDelete,
	description as descriptionMxPlanAccountDelete,
} from './mxplanAccount/MxPlanAccountDelete.operation';
import {
	execute as executeMxPlanAccountDiagnosticCreate,
	description as descriptionMxPlanAccountDiagnosticCreate,
} from './mxplanAccount/MxPlanAccountDiagnosticCreate.operation';
import {
	execute as executeMxPlanAccountDiagnosticGet,
	description as descriptionMxPlanAccountDiagnosticGet,
} from './mxplanAccount/MxPlanAccountDiagnosticGet.operation';
import {
	execute as executeMxPlanAccountFullAccessCreate,
	description as descriptionMxPlanAccountFullAccessCreate,
} from './mxplanAccount/MxPlanAccountFullAccessCreate.operation';
import {
	execute as executeMxPlanAccountFullAccessDelete,
	description as descriptionMxPlanAccountFullAccessDelete,
} from './mxplanAccount/MxPlanAccountFullAccessDelete.operation';
import {
	execute as executeMxPlanAccountFullAccessGet,
	description as descriptionMxPlanAccountFullAccessGet,
} from './mxplanAccount/MxPlanAccountFullAccessGet.operation';
import {
	execute as executeMxPlanAccountFullAccessList,
	description as descriptionMxPlanAccountFullAccessList,
} from './mxplanAccount/MxPlanAccountFullAccessList.operation';
import {
	execute as executeMxPlanAccountGet,
	description as descriptionMxPlanAccountGet,
} from './mxplanAccount/MxPlanAccountGet.operation';
import {
	execute as executeMxPlanAccountList,
	description as descriptionMxPlanAccountList,
} from './mxplanAccount/MxPlanAccountList.operation';
import {
	execute as executeMxPlanAccountSendAsCreate,
	description as descriptionMxPlanAccountSendAsCreate,
} from './mxplanAccount/MxPlanAccountSendAsCreate.operation';
import {
	execute as executeMxPlanAccountSendAsDelete,
	description as descriptionMxPlanAccountSendAsDelete,
} from './mxplanAccount/MxPlanAccountSendAsDelete.operation';
import {
	execute as executeMxPlanAccountSendAsGet,
	description as descriptionMxPlanAccountSendAsGet,
} from './mxplanAccount/MxPlanAccountSendAsGet.operation';
import {
	execute as executeMxPlanAccountSendAsList,
	description as descriptionMxPlanAccountSendAsList,
} from './mxplanAccount/MxPlanAccountSendAsList.operation';
import {
	execute as executeMxPlanAccountSendOnBehalfToCreate,
	description as descriptionMxPlanAccountSendOnBehalfToCreate,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToCreate.operation';
import {
	execute as executeMxPlanAccountSendOnBehalfToDelete,
	description as descriptionMxPlanAccountSendOnBehalfToDelete,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToDelete.operation';
import {
	execute as executeMxPlanAccountSendOnBehalfToGet,
	description as descriptionMxPlanAccountSendOnBehalfToGet,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToGet.operation';
import {
	execute as executeMxPlanAccountSendOnBehalfToList,
	description as descriptionMxPlanAccountSendOnBehalfToList,
} from './mxplanAccount/MxPlanAccountSendOnBehalfToList.operation';
import {
	execute as executeMxPlanAccountTaskGet,
	description as descriptionMxPlanAccountTaskGet,
} from './mxplanAccount/MxPlanAccountTaskGet.operation';
import {
	execute as executeMxPlanAccountTaskList,
	description as descriptionMxPlanAccountTaskList,
} from './mxplanAccount/MxPlanAccountTaskList.operation';
import {
	execute as executeMxPlanAccountUpdate,
	description as descriptionMxPlanAccountUpdate,
} from './mxplanAccount/MxPlanAccountUpdate.operation';
import {
	execute as executeMxPlanDomainDisclaimerAttributeGet,
	description as descriptionMxPlanDomainDisclaimerAttributeGet,
} from './mxplanDomain/MxPlanDomainDisclaimerAttributeGet.operation';
import {
	execute as executeMxPlanDomainDisclaimerCreate,
	description as descriptionMxPlanDomainDisclaimerCreate,
} from './mxplanDomain/MxPlanDomainDisclaimerCreate.operation';
import {
	execute as executeMxPlanDomainDisclaimerDelete,
	description as descriptionMxPlanDomainDisclaimerDelete,
} from './mxplanDomain/MxPlanDomainDisclaimerDelete.operation';
import {
	execute as executeMxPlanDomainDisclaimerList,
	description as descriptionMxPlanDomainDisclaimerList,
} from './mxplanDomain/MxPlanDomainDisclaimerList.operation';
import {
	execute as executeMxPlanDomainDisclaimerUpdate,
	description as descriptionMxPlanDomainDisclaimerUpdate,
} from './mxplanDomain/MxPlanDomainDisclaimerUpdate.operation';
import {
	execute as executeMxPlanDomainGet,
	description as descriptionMxPlanDomainGet,
} from './mxplanDomain/MxPlanDomainGet.operation';
import {
	execute as executeMxPlanDomainList,
	description as descriptionMxPlanDomainList,
} from './mxplanDomain/MxPlanDomainList.operation';
import {
	execute as executeMxPlanDomainUpdate,
	description as descriptionMxPlanDomainUpdate,
} from './mxplanDomain/MxPlanDomainUpdate.operation';
import {
	execute as executeMxPlanExternalContactCreate,
	description as descriptionMxPlanExternalContactCreate,
} from './mxplanExternalContact/MxPlanExternalContactCreate.operation';
import {
	execute as executeMxPlanExternalContactDelete,
	description as descriptionMxPlanExternalContactDelete,
} from './mxplanExternalContact/MxPlanExternalContactDelete.operation';
import {
	execute as executeMxPlanExternalContactGet,
	description as descriptionMxPlanExternalContactGet,
} from './mxplanExternalContact/MxPlanExternalContactGet.operation';
import {
	execute as executeMxPlanExternalContactList,
	description as descriptionMxPlanExternalContactList,
} from './mxplanExternalContact/MxPlanExternalContactList.operation';
import {
	execute as executeMxPlanExternalContactUpdate,
	description as descriptionMxPlanExternalContactUpdate,
} from './mxplanExternalContact/MxPlanExternalContactUpdate.operation';
import {
	execute as executeMxPlanGet,
	description as descriptionMxPlanGet,
} from './misc/MxPlanGet.operation';
import {
	execute as executeMxPlanList,
	description as descriptionMxPlanList,
} from './misc/MxPlanList.operation';
import {
	execute as executeMxPlanPut,
	description as descriptionMxPlanPut,
} from './misc/MxPlanPut.operation';
import {
	execute as executeMxPlanServerGet,
	description as descriptionMxPlanServerGet,
} from './mxplanServer/MxPlanServerGet.operation';
import {
	execute as executeMxPlanTaskGet,
	description as descriptionMxPlanTaskGet,
} from './mxplanTask/MxPlanTaskGet.operation';
import {
	execute as executeMxPlanTaskList,
	description as descriptionMxPlanTaskList,
} from './mxplanTask/MxPlanTaskList.operation';
import {
	execute as executeMxPlanUpdateFlagsOnAllAccountsCreate,
	description as descriptionMxPlanUpdateFlagsOnAllAccountsCreate,
} from './mxplanUpdateFlagsOnAllAccounts/MxPlanUpdateFlagsOnAllAccountsCreate.operation';

export function description(displayOptions: IDisplayOptions = {}): INodeProperties[] {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'mxPlanOperation',
		type: 'options',
		noDataExpression: true,
		options: [
			{
				name: 'MxPlanAccountAliasCreate',
				value: 'MxPlanAccountAliasCreate',
			},
			{
				name: 'MxPlanAccountAliasDelete',
				value: 'MxPlanAccountAliasDelete',
			},
			{
				name: 'MxPlanAccountAliasGet',
				value: 'MxPlanAccountAliasGet',
			},
			{
				name: 'MxPlanAccountAliasList',
				value: 'MxPlanAccountAliasList',
			},
			{
				name: 'MxPlanAccountCapabilitiesGet',
				value: 'MxPlanAccountCapabilitiesGet',
			},
			{
				name: 'MxPlanAccountChangePasswordCreate',
				value: 'MxPlanAccountChangePasswordCreate',
			},
			{
				name: 'MxPlanAccountDelete',
				value: 'MxPlanAccountDelete',
			},
			{
				name: 'MxPlanAccountDiagnosticCreate',
				value: 'MxPlanAccountDiagnosticCreate',
			},
			{
				name: 'MxPlanAccountDiagnosticGet',
				value: 'MxPlanAccountDiagnosticGet',
			},
			{
				name: 'MxPlanAccountFullAccessCreate',
				value: 'MxPlanAccountFullAccessCreate',
			},
			{
				name: 'MxPlanAccountFullAccessDelete',
				value: 'MxPlanAccountFullAccessDelete',
			},
			{
				name: 'MxPlanAccountFullAccessGet',
				value: 'MxPlanAccountFullAccessGet',
			},
			{
				name: 'MxPlanAccountFullAccessList',
				value: 'MxPlanAccountFullAccessList',
			},
			{
				name: 'MxPlanAccountGet',
				value: 'MxPlanAccountGet',
			},
			{
				name: 'MxPlanAccountList',
				value: 'MxPlanAccountList',
			},
			{
				name: 'MxPlanAccountSendAsCreate',
				value: 'MxPlanAccountSendAsCreate',
			},
			{
				name: 'MxPlanAccountSendAsDelete',
				value: 'MxPlanAccountSendAsDelete',
			},
			{
				name: 'MxPlanAccountSendAsGet',
				value: 'MxPlanAccountSendAsGet',
			},
			{
				name: 'MxPlanAccountSendAsList',
				value: 'MxPlanAccountSendAsList',
			},
			{
				name: 'MxPlanAccountSendOnBehalfToCreate',
				value: 'MxPlanAccountSendOnBehalfToCreate',
			},
			{
				name: 'MxPlanAccountSendOnBehalfToDelete',
				value: 'MxPlanAccountSendOnBehalfToDelete',
			},
			{
				name: 'MxPlanAccountSendOnBehalfToGet',
				value: 'MxPlanAccountSendOnBehalfToGet',
			},
			{
				name: 'MxPlanAccountSendOnBehalfToList',
				value: 'MxPlanAccountSendOnBehalfToList',
			},
			{
				name: 'MxPlanAccountTaskGet',
				value: 'MxPlanAccountTaskGet',
			},
			{
				name: 'MxPlanAccountTaskList',
				value: 'MxPlanAccountTaskList',
			},
			{
				name: 'MxPlanAccountUpdate',
				value: 'MxPlanAccountUpdate',
			},
			{
				name: 'MxPlanDomainDisclaimerAttributeGet',
				value: 'MxPlanDomainDisclaimerAttributeGet',
			},
			{
				name: 'MxPlanDomainDisclaimerCreate',
				value: 'MxPlanDomainDisclaimerCreate',
			},
			{
				name: 'MxPlanDomainDisclaimerDelete',
				value: 'MxPlanDomainDisclaimerDelete',
			},
			{
				name: 'MxPlanDomainDisclaimerList',
				value: 'MxPlanDomainDisclaimerList',
			},
			{
				name: 'MxPlanDomainDisclaimerUpdate',
				value: 'MxPlanDomainDisclaimerUpdate',
			},
			{
				name: 'MxPlanDomainGet',
				value: 'MxPlanDomainGet',
			},
			{
				name: 'MxPlanDomainList',
				value: 'MxPlanDomainList',
			},
			{
				name: 'MxPlanDomainUpdate',
				value: 'MxPlanDomainUpdate',
			},
			{
				name: 'MxPlanExternalContactCreate',
				value: 'MxPlanExternalContactCreate',
			},
			{
				name: 'MxPlanExternalContactDelete',
				value: 'MxPlanExternalContactDelete',
			},
			{
				name: 'MxPlanExternalContactGet',
				value: 'MxPlanExternalContactGet',
			},
			{
				name: 'MxPlanExternalContactList',
				value: 'MxPlanExternalContactList',
			},
			{
				name: 'MxPlanExternalContactUpdate',
				value: 'MxPlanExternalContactUpdate',
			},
			{
				name: 'MxPlanGet',
				value: 'MxPlanGet',
			},
			{
				name: 'MxPlanList',
				value: 'MxPlanList',
			},
			{
				name: 'MxPlanPut',
				value: 'MxPlanPut',
			},
			{
				name: 'MxPlanServerGet',
				value: 'MxPlanServerGet',
			},
			{
				name: 'MxPlanTaskGet',
				value: 'MxPlanTaskGet',
			},
			{
				name: 'MxPlanTaskList',
				value: 'MxPlanTaskList',
			},
			{
				name: 'MxPlanUpdateFlagsOnAllAccountsCreate',
				value: 'MxPlanUpdateFlagsOnAllAccountsCreate',
			},
		],
		default: 'MxPlanAccountAliasGet',
		displayOptions,
	});

	const properties: INodeProperties[] = [
		...props,
		...descriptionMxPlanAccountAliasCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountAliasCreate'] },
		}),
		...descriptionMxPlanAccountAliasDelete({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountAliasDelete'] },
		}),
		...descriptionMxPlanAccountAliasGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountAliasGet'] },
		}),
		...descriptionMxPlanAccountAliasList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountAliasList'] },
		}),
		...descriptionMxPlanAccountCapabilitiesGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountCapabilitiesGet'] },
		}),
		...descriptionMxPlanAccountChangePasswordCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountChangePasswordCreate'] },
		}),
		...descriptionMxPlanAccountDelete({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountDelete'] },
		}),
		...descriptionMxPlanAccountDiagnosticCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountDiagnosticCreate'] },
		}),
		...descriptionMxPlanAccountDiagnosticGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountDiagnosticGet'] },
		}),
		...descriptionMxPlanAccountFullAccessCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountFullAccessCreate'] },
		}),
		...descriptionMxPlanAccountFullAccessDelete({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountFullAccessDelete'] },
		}),
		...descriptionMxPlanAccountFullAccessGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountFullAccessGet'] },
		}),
		...descriptionMxPlanAccountFullAccessList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountFullAccessList'] },
		}),
		...descriptionMxPlanAccountGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountGet'] },
		}),
		...descriptionMxPlanAccountList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountList'] },
		}),
		...descriptionMxPlanAccountSendAsCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendAsCreate'] },
		}),
		...descriptionMxPlanAccountSendAsDelete({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendAsDelete'] },
		}),
		...descriptionMxPlanAccountSendAsGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendAsGet'] },
		}),
		...descriptionMxPlanAccountSendAsList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendAsList'] },
		}),
		...descriptionMxPlanAccountSendOnBehalfToCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendOnBehalfToCreate'] },
		}),
		...descriptionMxPlanAccountSendOnBehalfToDelete({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendOnBehalfToDelete'] },
		}),
		...descriptionMxPlanAccountSendOnBehalfToGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendOnBehalfToGet'] },
		}),
		...descriptionMxPlanAccountSendOnBehalfToList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountSendOnBehalfToList'] },
		}),
		...descriptionMxPlanAccountTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountTaskGet'] },
		}),
		...descriptionMxPlanAccountTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountTaskList'] },
		}),
		...descriptionMxPlanAccountUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanAccountUpdate'] },
		}),
		...descriptionMxPlanDomainDisclaimerAttributeGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainDisclaimerAttributeGet'] },
		}),
		...descriptionMxPlanDomainDisclaimerCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainDisclaimerCreate'] },
		}),
		...descriptionMxPlanDomainDisclaimerDelete({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainDisclaimerDelete'] },
		}),
		...descriptionMxPlanDomainDisclaimerList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainDisclaimerList'] },
		}),
		...descriptionMxPlanDomainDisclaimerUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainDisclaimerUpdate'] },
		}),
		...descriptionMxPlanDomainGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainGet'] },
		}),
		...descriptionMxPlanDomainList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainList'] },
		}),
		...descriptionMxPlanDomainUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanDomainUpdate'] },
		}),
		...descriptionMxPlanExternalContactCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanExternalContactCreate'] },
		}),
		...descriptionMxPlanExternalContactDelete({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanExternalContactDelete'] },
		}),
		...descriptionMxPlanExternalContactGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanExternalContactGet'] },
		}),
		...descriptionMxPlanExternalContactList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanExternalContactList'] },
		}),
		...descriptionMxPlanExternalContactUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanExternalContactUpdate'] },
		}),
		...descriptionMxPlanGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanGet'] },
		}),
		...descriptionMxPlanList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanList'] },
		}),
		...descriptionMxPlanPut({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanPut'] },
		}),
		...descriptionMxPlanServerGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanServerGet'] },
		}),
		...descriptionMxPlanTaskGet({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanTaskGet'] },
		}),
		...descriptionMxPlanTaskList({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanTaskList'] },
		}),
		...descriptionMxPlanUpdateFlagsOnAllAccountsCreate({
			...displayOptions,
			show: { ...displayOptions?.show, mxPlanOperation: ['MxPlanUpdateFlagsOnAllAccountsCreate'] },
		}),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('mxPlanOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'MxPlanAccountAliasCreate':
			return executeMxPlanAccountAliasCreate.call(this, itemIndex ?? 0);
		case 'MxPlanAccountAliasDelete':
			return executeMxPlanAccountAliasDelete.call(this, itemIndex ?? 0);
		case 'MxPlanAccountAliasGet':
			return executeMxPlanAccountAliasGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountAliasList':
			return executeMxPlanAccountAliasList.call(this, itemIndex ?? 0);
		case 'MxPlanAccountCapabilitiesGet':
			return executeMxPlanAccountCapabilitiesGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountChangePasswordCreate':
			return executeMxPlanAccountChangePasswordCreate.call(this, itemIndex ?? 0);
		case 'MxPlanAccountDelete':
			return executeMxPlanAccountDelete.call(this, itemIndex ?? 0);
		case 'MxPlanAccountDiagnosticCreate':
			return executeMxPlanAccountDiagnosticCreate.call(this, itemIndex ?? 0);
		case 'MxPlanAccountDiagnosticGet':
			return executeMxPlanAccountDiagnosticGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountFullAccessCreate':
			return executeMxPlanAccountFullAccessCreate.call(this, itemIndex ?? 0);
		case 'MxPlanAccountFullAccessDelete':
			return executeMxPlanAccountFullAccessDelete.call(this, itemIndex ?? 0);
		case 'MxPlanAccountFullAccessGet':
			return executeMxPlanAccountFullAccessGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountFullAccessList':
			return executeMxPlanAccountFullAccessList.call(this, itemIndex ?? 0);
		case 'MxPlanAccountGet':
			return executeMxPlanAccountGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountList':
			return executeMxPlanAccountList.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendAsCreate':
			return executeMxPlanAccountSendAsCreate.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendAsDelete':
			return executeMxPlanAccountSendAsDelete.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendAsGet':
			return executeMxPlanAccountSendAsGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendAsList':
			return executeMxPlanAccountSendAsList.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendOnBehalfToCreate':
			return executeMxPlanAccountSendOnBehalfToCreate.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendOnBehalfToDelete':
			return executeMxPlanAccountSendOnBehalfToDelete.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendOnBehalfToGet':
			return executeMxPlanAccountSendOnBehalfToGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountSendOnBehalfToList':
			return executeMxPlanAccountSendOnBehalfToList.call(this, itemIndex ?? 0);
		case 'MxPlanAccountTaskGet':
			return executeMxPlanAccountTaskGet.call(this, itemIndex ?? 0);
		case 'MxPlanAccountTaskList':
			return executeMxPlanAccountTaskList.call(this, itemIndex ?? 0);
		case 'MxPlanAccountUpdate':
			return executeMxPlanAccountUpdate.call(this, itemIndex ?? 0);
		case 'MxPlanDomainDisclaimerAttributeGet':
			return executeMxPlanDomainDisclaimerAttributeGet.call(this, itemIndex ?? 0);
		case 'MxPlanDomainDisclaimerCreate':
			return executeMxPlanDomainDisclaimerCreate.call(this, itemIndex ?? 0);
		case 'MxPlanDomainDisclaimerDelete':
			return executeMxPlanDomainDisclaimerDelete.call(this, itemIndex ?? 0);
		case 'MxPlanDomainDisclaimerList':
			return executeMxPlanDomainDisclaimerList.call(this, itemIndex ?? 0);
		case 'MxPlanDomainDisclaimerUpdate':
			return executeMxPlanDomainDisclaimerUpdate.call(this, itemIndex ?? 0);
		case 'MxPlanDomainGet':
			return executeMxPlanDomainGet.call(this, itemIndex ?? 0);
		case 'MxPlanDomainList':
			return executeMxPlanDomainList.call(this, itemIndex ?? 0);
		case 'MxPlanDomainUpdate':
			return executeMxPlanDomainUpdate.call(this, itemIndex ?? 0);
		case 'MxPlanExternalContactCreate':
			return executeMxPlanExternalContactCreate.call(this, itemIndex ?? 0);
		case 'MxPlanExternalContactDelete':
			return executeMxPlanExternalContactDelete.call(this, itemIndex ?? 0);
		case 'MxPlanExternalContactGet':
			return executeMxPlanExternalContactGet.call(this, itemIndex ?? 0);
		case 'MxPlanExternalContactList':
			return executeMxPlanExternalContactList.call(this, itemIndex ?? 0);
		case 'MxPlanExternalContactUpdate':
			return executeMxPlanExternalContactUpdate.call(this, itemIndex ?? 0);
		case 'MxPlanGet':
			return executeMxPlanGet.call(this, itemIndex ?? 0);
		case 'MxPlanList':
			return executeMxPlanList.call(this, itemIndex ?? 0);
		case 'MxPlanPut':
			return executeMxPlanPut.call(this, itemIndex ?? 0);
		case 'MxPlanServerGet':
			return executeMxPlanServerGet.call(this, itemIndex ?? 0);
		case 'MxPlanTaskGet':
			return executeMxPlanTaskGet.call(this, itemIndex ?? 0);
		case 'MxPlanTaskList':
			return executeMxPlanTaskList.call(this, itemIndex ?? 0);
		case 'MxPlanUpdateFlagsOnAllAccountsCreate':
			return executeMxPlanUpdateFlagsOnAllAccountsCreate.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "emailMxplan"`);
}
