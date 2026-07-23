import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { execute as executeList, description as descriptionList } from './resources/list.operation';
import { execute as executeGet, description as descriptionGet } from './resources/get.operation';
import {
	execute as executeExtensionList,
	description as descriptionExtensionList,
} from './resources/extensionList.operation';
import {
	execute as executeExtensionGet,
	description as descriptionExtensionGet,
} from './resources/extensionGet.operation';
import {
	execute as executeExtensionByCategory,
	description as descriptionExtensionByCategory,
} from './resources/extensionByCategory.operation';
import {
	execute as executeRegistryConfigurationsGet,
	description as descriptionRegistryConfigurationsGet,
} from './resources/extensionRegistryConfigurationsGet.operation';
import {
	execute as executeContactList,
	description as descriptionContactList,
} from './resources/contactList.operation';

import {
	execute as executeClaimNotice,
	description as descriptionClaimNotice,
} from './resources/claimNotice.operation';
import {
	execute as executeConfigurationRule,
	description as descriptionConfigurationRule,
} from './resources/configurationRule.operation';
import {
	execute as executeAuthInfoGet,
	description as descriptionAuthInfoGet,
} from './resources/authInfoGet.operation';
import {
	execute as executeDsRecordList,
	description as descriptionDsRecordList,
} from './resources/dsRecordList.operation';
import {
	execute as executeNameServerList,
	description as descriptionNameServerList,
} from './resources/nameServerList.operation';
import {
	execute as executeZoneList,
	description as descriptionZoneList,
} from './resources/zoneList.operation';
import {
	execute as executeServiceInfosGet,
	description as descriptionServiceInfosGet,
} from './resources/serviceInfosGet.operation';
import {
	execute as executeSOGAet,
	description as descriptionSOGAet,
} from './resources/sOAGet.operation';
import {
	execute as executeStatusGet,
	description as descriptionStatusGet,
} from './resources/statusGet.operation';
import {
	execute as executeTaskListGet,
	description as descriptionTaskListGet,
} from './resources/taskListGet.operation';
import {
	execute as executeTaskGet,
	description as descriptionTaskGet,
} from './resources/taskGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'domainOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{ name: 'Auth Info Get', value: 'authInfoGet' },
				{ name: 'Claim Notice', value: 'claimNotice' },
				{ name: 'Configuration Rule', value: 'configurationRule' },
				{ name: 'DS Record List', value: 'dsRecordList' },
				{ name: 'Extension By Category', value: 'extensionByCategory' },
				{ name: 'Get Domain Details', value: 'get' },
				{ name: 'Get Extension Registry Configurations', value: 'registryConfigurationsGet' },
				{ name: 'List Contacts', value: 'contactList' },
				{ name: 'List Domains', value: 'list' },
				{ name: 'Name Server List', value: 'nameServerList' },
				{ name: 'Service Info Get', value: 'serviceInfosGet' },
				{ name: 'SOA Record Get', value: 'sOAGet' },
				{ name: 'Status Get', value: 'statusGet' },
				{ name: 'Task Get', value: 'taskGet' },
				{ name: 'Task List Get', value: 'taskListGet' },
				{ name: 'Zone List', value: 'zoneList' },
			],
			default: 'get',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionGet({
			...displayOptions,
			show: { domainOperation: ['get'] },
		}) as INodeProperties[]),
		...(descriptionList() as INodeProperties[]),
		...(descriptionExtensionList() as INodeProperties[]),
		...(descriptionExtensionGet({
			...displayOptions,
			show: { domainOperation: ['extensionGet'] },
		}) as INodeProperties[]),
		...(descriptionExtensionByCategory({
			...displayOptions,
			show: { domainOperation: ['extensionByCategory'] },
		}) as INodeProperties[]),
		...(descriptionRegistryConfigurationsGet({
			...displayOptions,
			show: { domainOperation: ['registryConfigurationsGet'] },
		}) as INodeProperties[]),
		...(descriptionContactList() as INodeProperties[]),
		...(descriptionClaimNotice({
			...displayOptions,
			show: { domainOperation: ['claimNotice'] },
		}) as INodeProperties[]),
		...(descriptionConfigurationRule({
			...displayOptions,
			show: { domainOperation: ['configurationRule'] },
		}) as INodeProperties[]),
		...(descriptionAuthInfoGet({
			...displayOptions,
			show: { domainOperation: ['authInfoGet'] },
		}) as INodeProperties[]),
		...(descriptionDsRecordList() as INodeProperties[]),
		...(descriptionNameServerList() as INodeProperties[]),
		...(descriptionZoneList() as INodeProperties[]),
		...(descriptionServiceInfosGet({
			...displayOptions,
			show: { domainOperation: ['serviceInfosGet'] },
		}) as INodeProperties[]),
		...(descriptionSOGAet({
			...displayOptions,
			show: { domainOperation: ['sOAGet'] },
		}) as INodeProperties[]),
		...(descriptionStatusGet({
			...displayOptions,
			show: { domainOperation: ['statusGet'] },
		}) as INodeProperties[]),
		...(descriptionTaskListGet() as INodeProperties[]),
		...(descriptionTaskGet({
			...displayOptions,
			show: { domainOperation: ['taskGet'] },
		}) as INodeProperties[]),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainOperation', itemIndex, { extractValue: true });

	switch (operation) {
		case 'list':
			return executeList.call(this);
		case 'get':
			return executeGet.call(this, itemIndex);
		case 'extensionList':
			return executeExtensionList.call(this);
		case 'extensionGet':
			return executeExtensionGet.call(this, itemIndex);
		case 'extensionByCategory':
			return executeExtensionByCategory.call(this);
		case 'registryConfigurationsGet':
			return executeRegistryConfigurationsGet.call(this, itemIndex);
		case 'contactList':
			return executeContactList.call(this);
		case 'claimNotice':
			return executeClaimNotice.call(this);
		case 'configurationRule':
			return executeConfigurationRule.call(this);
		case 'authInfoGet':
			if (itemIndex === undefined) throw new Error('Missing itemIndex');
			return executeAuthInfoGet.call(this, itemIndex);
		case 'dsRecordList':
			if (itemIndex === undefined) throw new Error('Missing itemIndex');
			return executeDsRecordList.call(this, itemIndex);
		case 'nameServerList':
			if (itemIndex === undefined) throw new Error('Missing itemIndex');
			return executeNameServerList.call(this, itemIndex);
		case 'zoneList':
			return executeZoneList.call(this);
		case 'serviceInfosGet':
			return executeServiceInfosGet.call(this, itemIndex);
		case 'sOAGet':
			return executeSOGAet.call(this, itemIndex);
		case 'statusGet':
			return executeStatusGet.call(this, itemIndex);
		case 'taskListGet':
			return executeTaskListGet.call(this);
		case 'taskGet':
			if (itemIndex === undefined) throw new Error('Missing itemIndex');
			return executeTaskGet.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "domain"`);
}
