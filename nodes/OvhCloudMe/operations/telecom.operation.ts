import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Fax
// ============================================================

// listFaxCustomDomains
export async function executeListFaxCustomDomains(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/fax/customDomains')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/fax/customDomains/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getFaxCustomDomain
export function descriptionGetFaxCustomDomain(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Custom Domain ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The fax custom domain ID',
			displayOptions,
		},
	];
}

export async function executeGetFaxCustomDomain(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/fax/customDomains/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Telephony
// ============================================================

// listTelephonyDefaultIpRestrictions
export async function executeListTelephonyDefaultIpRestrictions(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/telephony/defaultIpRestriction')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/telephony/defaultIpRestriction/${id}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getTelephonyDefaultIpRestriction
export function descriptionGetTelephonyDefaultIpRestriction(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'IP Restriction ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The SIP IP restriction ID',
			displayOptions,
		},
	];
}

export async function executeGetTelephonyDefaultIpRestriction(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/telephony/defaultIpRestriction/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getTelephonySettings
export async function executeGetTelephonySettings(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/telephony/settings')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : XDSL
// ============================================================

// getXdslSettings
export async function executeGetXdslSettings(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/xdsl/setting')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
