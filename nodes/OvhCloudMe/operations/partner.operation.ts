import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Partner & Support Levels
// ============================================================

// getPartnerLevel
export async function executeGetPartnerLevel(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/partnerLevel')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getSupportLevel
export async function executeGetSupportLevel(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/supportLevel')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : SLA
// ============================================================

// listSlas
export async function executeListSlas(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/sla')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/sla/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getSla
export function descriptionGetSla(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'SLA ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetSla(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/sla/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getSlaCanBeApplied
export function descriptionGetSlaCanBeApplied(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'SLA ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetSlaCanBeApplied(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/sla/${id}/canBeApplied`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listSlaServices
export function descriptionListSlaServices(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'SLA ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListSlaServices(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const serviceIds = (await client.httpGet(`/me/sla/${id}/services`)) as string[];
	const results: IDataObject[] = [];
	for (const serviceId of serviceIds) {
		results.push({ serviceId });
	}
	return this.helpers.returnJsonArray(results);
}

// getSlaStatus
export function descriptionGetSlaStatus(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'SLA ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetSlaStatus(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/sla/${id}/status`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : Account Info
// ============================================================

// listAgreements
export async function executeListAgreements(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/agreements')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/agreements/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAgreement
export function descriptionGetAgreement(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Agreement ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetAgreement(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/agreements/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getAgreementContract
export function descriptionGetAgreementContract(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Agreement ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetAgreementContract(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/agreements/${id}/contract`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listCertificates
export async function executeListCertificates(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/certificates')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// getVipStatus
export async function executeGetVipStatus(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/vipStatus')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getInsight
export async function executeGetInsight(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/insight')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getRecommendations
export async function executeGetRecommendations(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/recommendations')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getBringYourOwnIpToken
export async function executeGetBringYourOwnIpToken(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/bringYourOwnIp/token')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe D : Abuse & Carbon
// ============================================================

// listAbuse
export async function executeListAbuse(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/abuse')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/abuse/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAbuse
export function descriptionGetAbuse(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Abuse ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The abuse case ID',
			displayOptions,
		},
	];
}

export async function executeGetAbuse(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/abuse/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getCarbonCalculatorHasInvoice
export async function executeGetCarbonCalculatorHasInvoice(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/carbonCalculator/hasInvoice')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listCarbonCalculatorTasks
export async function executeListCarbonCalculatorTasks(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/carbonCalculator/task')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/carbonCalculator/task/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getCarbonCalculatorTask
export function descriptionGetCarbonCalculatorTask(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'string',
			default: '',
			required: true,
			description: 'The carbon calculator task ID',
			displayOptions,
		},
	];
}

export async function executeGetCarbonCalculatorTask(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const taskId = this.getNodeParameter('taskId', itemIndex) as string;
	const data = (await client.httpGet(`/me/carbonCalculator/task/${taskId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe E : Access Restriction
// ============================================================

// getAccessRestrictionBackupCode
export async function executeGetAccessRestrictionBackupCode(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/accessRestriction/backupCode')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getAccessRestrictionDeveloperMode
export async function executeGetAccessRestrictionDeveloperMode(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/accessRestriction/developerMode')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listAccessRestrictionIps
export async function executeListAccessRestrictionIps(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/accessRestriction/ip')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/accessRestriction/ip/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAccessRestrictionIp
export function descriptionGetAccessRestrictionIp(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'IP Restriction ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetAccessRestrictionIp(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/accessRestriction/ip/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getAccessRestrictionIpDefaultRule
export async function executeGetAccessRestrictionIpDefaultRule(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/accessRestriction/ipDefaultRule')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listAccessRestrictionSms
export async function executeListAccessRestrictionSms(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/accessRestriction/sms')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/accessRestriction/sms/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAccessRestrictionSms
export function descriptionGetAccessRestrictionSms(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'SMS Account ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetAccessRestrictionSms(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/accessRestriction/sms/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listAccessRestrictionTotp
export async function executeListAccessRestrictionTotp(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/accessRestriction/totp')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/accessRestriction/totp/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAccessRestrictionTotp
export function descriptionGetAccessRestrictionTotp(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'TOTP Account ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetAccessRestrictionTotp(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/accessRestriction/totp/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listAccessRestrictionU2f
export async function executeListAccessRestrictionU2f(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/accessRestriction/u2f')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/accessRestriction/u2f/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getAccessRestrictionU2f
export function descriptionGetAccessRestrictionU2f(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'U2F Account ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetAccessRestrictionU2f(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/accessRestriction/u2f/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
