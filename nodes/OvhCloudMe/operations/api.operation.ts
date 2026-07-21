import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : API Applications & Credentials
// ============================================================

// listApiApplications
export async function executeListApiApplications(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const applicationIds = (await client.httpGet('/me/api/application')) as string[];
	const results: IDataObject[] = [];
	for (const id of applicationIds) {
		const details = (await client.httpGet(`/me/api/application/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getApiApplication
export function descriptionGetApiApplication(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Application ID',
			name: 'applicationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The API application ID',
			displayOptions,
		},
	];
}

export async function executeGetApiApplication(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const applicationId = this.getNodeParameter('applicationId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/api/application/${applicationId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listApiCredentials
export async function executeListApiCredentials(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const credentialIds = (await client.httpGet('/me/api/credential')) as string[];
	const results: IDataObject[] = [];
	for (const id of credentialIds) {
		const details = (await client.httpGet(`/me/api/credential/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getApiCredential
export function descriptionGetApiCredential(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Credential ID',
			name: 'credentialId',
			type: 'string',
			default: '',
			required: true,
			description: 'The API credential ID',
			displayOptions,
		},
	];
}

export async function executeGetApiCredential(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const credentialId = this.getNodeParameter('credentialId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/api/credential/${credentialId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getCredentialApplication
export function descriptionGetCredentialApplication(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Credential ID',
			name: 'credentialId',
			type: 'string',
			default: '',
			required: true,
			description: 'The API credential ID',
			displayOptions,
		},
	];
}

export async function executeGetCredentialApplication(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const credentialId = this.getNodeParameter('credentialId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/api/credential/${credentialId}/application`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : API Logs
// ============================================================

// listApiLogKinds
export async function executeListApiLogKinds(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const names = (await client.httpGet('/me/api/log/kind')) as string[];
	const results: IDataObject[] = [];
	for (const name of names) {
		const details = (await client.httpGet(`/me/api/log/kind/${name}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getApiLogKind
export function descriptionGetApiLogKind(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The log kind name',
			displayOptions,
		},
	];
}

export async function executeGetApiLogKind(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const data = (await client.httpGet(`/me/api/log/kind/${name}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listApiLogSubscriptions
export async function executeListApiLogSubscriptions(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const subscriptionIds = (await client.httpGet('/me/api/log/subscription')) as string[];
	const results: IDataObject[] = [];
	for (const id of subscriptionIds) {
		const details = (await client.httpGet(`/me/api/log/subscription/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getApiLogSubscription
export function descriptionGetApiLogSubscription(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The log subscription ID',
			displayOptions,
		},
	];
}

export async function executeGetApiLogSubscription(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const subscriptionId = this.getNodeParameter('subscriptionId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/api/log/subscription/${subscriptionId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listApiLogsSelf
export async function executeListApiLogsSelf(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const logIds = (await client.httpGet('/me/api/logs/self')) as string[];
	const results: IDataObject[] = [];
	for (const id of logIds) {
		const details = (await client.httpGet(`/me/api/logs/self/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getApiLogSelf
export function descriptionGetApiLogSelf(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Log ID',
			name: 'logId',
			type: 'string',
			default: '',
			required: true,
			description: 'The API call log ID',
			displayOptions,
		},
	];
}

export async function executeGetApiLogSelf(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const logId = this.getNodeParameter('logId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/api/logs/self/${logId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listApiLogsServices
export async function executeListApiLogsServices(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const logIds = (await client.httpGet('/me/api/logs/services')) as string[];
	const results: IDataObject[] = [];
	for (const id of logIds) {
		const details = (await client.httpGet(`/me/api/logs/services/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getApiLogServices
export function descriptionGetApiLogServices(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Log ID',
			name: 'logId',
			type: 'string',
			default: '',
			required: true,
			description: 'The API call log ID',
			displayOptions,
		},
	];
}

export async function executeGetApiLogServices(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const logId = this.getNodeParameter('logId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/api/logs/services/${logId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : OAuth2
// ============================================================

// listOAuth2Clients
export async function executeListOAuth2Clients(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const clientIds = (await client.httpGet('/me/api/oauth2/client')) as string[];
	const results: IDataObject[] = [];
	for (const id of clientIds) {
		const details = (await client.httpGet(`/me/api/oauth2/client/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getOAuth2Client
export function descriptionGetOAuth2Client(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'The OAuth2 client ID',
			displayOptions,
		},
	];
}

export async function executeGetOAuth2Client(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const clientId = this.getNodeParameter('clientId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/api/oauth2/client/${clientId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe D : Audit Logs
// ============================================================

// getAuditLogs
export async function executeGetAuditLogs(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/logs/audit')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// listAuditLogKinds
export async function executeListAuditLogKinds(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const names = (await client.httpGet('/me/logs/audit/log/kind')) as string[];
	const results: IDataObject[] = [];
	for (const name of names) {
		const details = (await client.httpGet(`/me/logs/audit/log/kind/${name}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAuditLogKind
export function descriptionGetAuditLogKind(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The audit log kind name',
			displayOptions,
		},
	];
}

export async function executeGetAuditLogKind(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const data = (await client.httpGet(`/me/logs/audit/log/kind/${name}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listAuditLogSubscriptions
export async function executeListAuditLogSubscriptions(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const subscriptionIds = (await client.httpGet('/me/logs/audit/log/subscription')) as string[];
	const results: IDataObject[] = [];
	for (const id of subscriptionIds) {
		const details = (await client.httpGet(`/me/logs/audit/log/subscription/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAuditLogSubscription
export function descriptionGetAuditLogSubscription(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Subscription ID',
			name: 'subscriptionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The audit subscription ID',
			displayOptions,
		},
	];
}

export async function executeGetAuditLogSubscription(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const subscriptionId = this.getNodeParameter('subscriptionId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/logs/audit/log/subscription/${subscriptionId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
