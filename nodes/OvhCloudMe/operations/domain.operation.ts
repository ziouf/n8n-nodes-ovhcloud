import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : DNS Tasks
// ============================================================

// listDnsTasks
export async function executeListDnsTasks(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const results = await client.fetchEachResources(`/me/task/dns`, `/me/task/dns/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getDnsTask
export function descriptionGetDnsTask(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The DNS task ID',
			displayOptions,
		},
	];
}

export async function executeGetDnsTask(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(`/me/task/dns/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Domain Tasks
// ============================================================

// listDomainTasks
export async function executeListDomainTasks(
	this: IExecuteFunctions,
_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const results = await client.fetchEachResources(`/me/task/domain`, `/me/task/domain/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getDomainTask
export function descriptionGetDomainTask(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain task ID',
			displayOptions,
		},
	];
}

export async function executeGetDomainTask(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(`/me/task/domain/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listDomainTaskArguments
export function descriptionListDomainTaskArguments(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain task ID',
			displayOptions,
		},
	];
}

export async function executeListDomainTaskArguments(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const keys = (await client.httpGet(`/me/task/domain/${id}/argument`)) as string[];
	const results: IDataObject[] = [];
	for (const key of keys) {
		const details = (await client.httpGet(`/me/task/domain/${id}/argument/${key}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getDomainTaskArgument
export function descriptionGetDomainTaskArgument(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain task ID',
			displayOptions,
		},
		{
			displayName: 'Argument Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetDomainTaskArgument(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const key = this.getNodeParameter('key', _itemIndex) as string;
	const data = (await client.httpGet(`/me/task/domain/${id}/argument/${key}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getDomainTaskProgress
export function descriptionGetDomainTaskProgress(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain task ID',
			displayOptions,
		},
	];
}

export async function executeGetDomainTaskProgress(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(`/me/task/domain/${id}/progressbar`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listContactChangeTasks
export async function executeListContactChangeTasks(
	this: IExecuteFunctions,
_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const results = await client.fetchEachResources(`/me/task/contactChange`, `/me/task/contactChange/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getContactChangeTask
export function descriptionGetContactChangeTask(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The contact change task ID',
			displayOptions,
		},
	];
}

export async function executeGetContactChangeTask(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(`/me/task/contactChange/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listEmailChangeTasks
export async function executeListEmailChangeTasks(
	this: IExecuteFunctions,
_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const results = await client.fetchEachResources(`/me/task/emailChange`, `/me/task/emailChange/{id}`);
	return this.helpers.returnJsonArray(results);
}

// getEmailChangeTask
export function descriptionGetEmailChangeTask(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The email change task ID',
			displayOptions,
		},
	];
}

export async function executeGetEmailChangeTask(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(`/me/task/emailChange/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : Subscriptions
// ============================================================

// listSubscriptions
export async function executeListSubscriptions(
	this: IExecuteFunctions,
_itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const data = (await client.httpGet('/me/subscription')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// getSubscription
export function descriptionGetSubscription(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Subscription Type',
			name: 'subscriptionType',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetSubscription(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const subscriptionType = this.getNodeParameter('subscriptionType', _itemIndex) as string;
	const data = (await client.httpGet(`/me/subscription/${subscriptionType}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
