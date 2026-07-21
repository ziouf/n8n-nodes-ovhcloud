import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Account Basics
// ============================================================

export function descriptionGetAccount(): INodeProperties[] {
	return []; // No params needed
}

export async function executeGetAccount(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listOvhAccounts - returns string[] (IDs), need to fetch details
export async function executeListOvhAccounts(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const accountIds = (await client.httpGet('/me/ovhAccount')) as string[];
	const results: IDataObject[] = [];
	for (const id of accountIds) {
		const details = (await client.httpGet(`/me/ovhAccount/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getOvhAccount - path param: ovhAccountId
export function descriptionGetOvhAccount(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OVH Account ID',
			name: 'ovhAccountId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOvhAccount(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ovhAccountId = this.getNodeParameter('ovhAccountId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/ovhAccount/${ovhAccountId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listOvhAccountMovements
export function descriptionListOvhAccountMovements(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'OVH Account ID',
			name: 'ovhAccountId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListOvhAccountMovements(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ovhAccountId = this.getNodeParameter('ovhAccountId', _itemIndex) as string;
	const movementIds = (await client.httpGet(
		`/me/ovhAccount/${ovhAccountId}/movements`,
	)) as string[];
	const results: IDataObject[] = [];
	for (const id of movementIds) {
		const details = (await client.httpGet(
			`/me/ovhAccount/${ovhAccountId}/movements/${id}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getOvhAccountMovement
export function descriptionGetOvhAccountMovement(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'OVH Account ID',
			name: 'ovhAccountId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Movement ID',
			name: 'movementId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetOvhAccountMovement(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ovhAccountId = this.getNodeParameter('ovhAccountId', _itemIndex) as string;
	const movementId = this.getNodeParameter('movementId', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/ovhAccount/${ovhAccountId}/movements/${movementId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listSubAccounts
export async function executeListSubAccounts(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const subAccountIds = (await client.httpGet('/me/subAccount')) as string[];
	const results: IDataObject[] = [];
	for (const id of subAccountIds) {
		const details = (await client.httpGet(`/me/subAccount/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getSubAccount
export function descriptionGetSubAccount(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Sub-Account ID',
			name: 'subAccountId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetSubAccount(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const subAccountId = this.getNodeParameter('subAccountId', _itemIndex) as string;
	const data = (await client.httpGet(`/me/subAccount/${subAccountId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getAutorenew
export async function executeGetAutorenew(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/autorenew')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listAvailablePaymentMeans
export async function executeListAvailablePaymentMeans(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/availableAutomaticPaymentMeans')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Identity IAM
// ============================================================

// getIdentityProvider
export async function executeGetIdentityProvider(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/identity/provider')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listIdentityUsers
export async function executeListIdentityUsers(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const userIds = (await client.httpGet('/me/identity/user')) as string[];
	const results: IDataObject[] = [];
	for (const id of userIds) {
		const details = (await client.httpGet(`/me/identity/user/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getIdentityUser
export function descriptionGetIdentityUser(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
			required: true,
			description: 'The IAM user identifier',
			displayOptions,
		},
	];
}

export async function executeGetIdentityUser(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const user = this.getNodeParameter('user', _itemIndex) as string;
	const data = (await client.httpGet(`/me/identity/user/${user}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listUserTokens
export function descriptionListUserTokens(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
			required: true,
			description: 'The IAM user identifier',
			displayOptions,
		},
	];
}

export async function executeListUserTokens(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const user = this.getNodeParameter('user', _itemIndex) as string;
	const tokenNames = (await client.httpGet(`/me/identity/user/${user}/token`)) as string[];
	const results: IDataObject[] = [];
	for (const name of tokenNames) {
		const details = (await client.httpGet(
			`/me/identity/user/${user}/token/${name}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getUserToken
export function descriptionGetUserToken(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'User',
			name: 'user',
			type: 'string',
			default: '',
			required: true,
			description: 'The IAM user identifier',
			displayOptions,
		},
		{
			displayName: 'Token Name',
			name: 'tokenName',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The personal access token name',
			displayOptions,
		},
	];
}

export async function executeGetUserToken(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const user = this.getNodeParameter('user', _itemIndex) as string;
	const tokenName = this.getNodeParameter('tokenName', _itemIndex) as string;
	const data = (await client.httpGet(
		`/me/identity/user/${user}/token/${tokenName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listIdentityGroups
export async function executeListIdentityGroups(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const groupNames = (await client.httpGet('/me/identity/group')) as string[];
	const results: IDataObject[] = [];
	for (const name of groupNames) {
		const details = (await client.httpGet(`/me/identity/group/${name}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getIdentityGroup
export function descriptionGetIdentityGroup(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Group',
			name: 'group',
			type: 'string',
			default: '',
			required: true,
			description: 'The IAM group identifier',
			displayOptions,
		},
	];
}

export async function executeGetIdentityGroup(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const group = this.getNodeParameter('group', _itemIndex) as string;
	const data = (await client.httpGet(`/me/identity/group/${group}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listGroupUsers
export function descriptionListGroupUsers(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Group',
			name: 'group',
			type: 'string',
			default: '',
			required: true,
			description: 'The IAM group identifier',
			displayOptions,
		},
	];
}

export async function executeListGroupUsers(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const group = this.getNodeParameter('group', _itemIndex) as string;
	const userIds = (await client.httpGet(`/me/identity/group/${group}/user`)) as string[];
	const results: IDataObject[] = [];
	for (const id of userIds) {
		const details = (await client.httpGet(`/me/identity/user/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// ============================================================
// Groupe C : SSH Keys & Consent
// ============================================================

// listSshKeys
export async function executeListSshKeys(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const keyNames = (await client.httpGet('/me/sshKey')) as string[];
	const results: IDataObject[] = [];
	for (const name of keyNames) {
		const details = (await client.httpGet(`/me/sshKey/${name}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getSshKey
export function descriptionGetSshKey(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Key Name',
			name: 'keyName',
			type: 'string',
			default: '',
			required: true,
			description: 'The SSH key name',
			displayOptions,
		},
	];
}

export async function executeGetSshKey(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const keyName = this.getNodeParameter('keyName', _itemIndex) as string;
	const data = (await client.httpGet(`/me/sshKey/${keyName}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listConsentCampaigns
export async function executeListConsentCampaigns(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const campaigns = (await client.httpGet('/me/consent')) as IDataObject[];
	return this.helpers.returnJsonArray(campaigns);
}

// getConsentCampaign
export function descriptionGetConsentCampaign(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Campaign Name',
			name: 'campaignName',
			type: 'string',
			default: '',
			required: true,
			description: 'The consent campaign name',
			displayOptions,
		},
	];
}

export async function executeGetConsentCampaign(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const campaignName = this.getNodeParameter('campaignName', _itemIndex) as string;
	const data = (await client.httpGet(`/me/consent/${campaignName}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getConsentDecision
export function descriptionGetConsentDecision(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Campaign Name',
			name: 'campaignName',
			type: 'string',
			default: '',
			required: true,
			description: 'The consent campaign name',
			displayOptions,
		},
	];
}

export async function executeGetConsentDecision(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const campaignName = this.getNodeParameter('campaignName', _itemIndex) as string;
	const data = (await client.httpGet(`/me/consent/${campaignName}/decision`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
