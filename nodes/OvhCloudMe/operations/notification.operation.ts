import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Notifications
// ============================================================

// listEmailHistory
export async function executeListEmailHistory(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/notification/email/history')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/notification/email/history/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getEmail
export function descriptionGetEmail(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Email ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The email history ID',
			displayOptions,
		},
	];
}

export async function executeGetEmail(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/notification/email/history/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Marketing & Mailing
// ============================================================

// getMarketing
export async function executeGetMarketing(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/marketing')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listAvailableMailingLists
export async function executeListAvailableMailingLists(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/mailingList/availableLists')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// ============================================================
// Groupe C : Consumption
// ============================================================

// getCurrentConsumption
export async function executeGetCurrentConsumption(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/consumption/usage/current')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// getForecastConsumption
export async function executeGetForecastConsumption(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/consumption/usage/forecast')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// getConsumptionHistory
export async function executeGetConsumptionHistory(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/consumption/usage/history')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// ============================================================
// Groupe D : Migration
// ============================================================

// listMigrations
export async function executeListMigrations(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/migration')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/migration/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getMigration
export function descriptionGetMigration(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Migration ID',
			name: 'migrationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetMigration(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const migrationId = this.getNodeParameter('migrationId', itemIndex) as string;
	const data = (await client.httpGet(`/me/migration/${migrationId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listMigrationContracts
export function descriptionListMigrationContracts(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Migration ID',
			name: 'migrationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeListMigrationContracts(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const migrationId = this.getNodeParameter('migrationId', itemIndex) as string;
	const ids = (await client.httpGet(`/me/migration/${migrationId}/contract`)) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(
			`/me/migration/${migrationId}/contract/${id}`,
		)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getMigrationContract
export function descriptionGetMigrationContract(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Migration ID',
			name: 'migrationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Contract ID',
			name: 'contractId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetMigrationContract(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const migrationId = this.getNodeParameter('migrationId', itemIndex) as string;
	const contractId = this.getNodeParameter('contractId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/migration/${migrationId}/contract/${contractId}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getMigrationAgreement
export function descriptionGetMigrationAgreement(
	displayOptions: IDisplayOptions,
): INodeProperties[] {
	return [
		{
			displayName: 'Migration ID',
			name: 'migrationId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Contract ID',
			name: 'contractId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetMigrationAgreement(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const migrationId = this.getNodeParameter('migrationId', itemIndex) as string;
	const contractId = this.getNodeParameter('contractId', itemIndex) as string;
	const data = (await client.httpGet(
		`/me/migration/${migrationId}/contract/${contractId}/agreement`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe E : Fidelity & IP Organisation
// ============================================================

// getFidelityAccount
export async function executeGetFidelityAccount(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/fidelityAccount')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listFidelityMovements
export async function executeListFidelityMovements(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/fidelityAccount/movements')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/fidelityAccount/movements/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getFidelityMovement
export function descriptionGetFidelityMovement(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Movement ID',
			name: 'movementId',
			type: 'string',
			default: '',
			required: true,
			description: 'The fidelity movement ID',
			displayOptions,
		},
	];
}

export async function executeGetFidelityMovement(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const movementId = this.getNodeParameter('movementId', itemIndex) as string;
	const data = (await client.httpGet(`/me/fidelityAccount/movements/${movementId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// listIpOrganisations
export async function executeListIpOrganisations(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/ipOrganisation')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// getIpOrganisation
export function descriptionGetIpOrganisation(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organisation ID',
			name: 'organisationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP organisation ID',
			displayOptions,
		},
	];
}

export async function executeGetIpOrganisation(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organisationId = this.getNodeParameter('organisationId', itemIndex) as string;
	const data = (await client.httpGet(`/me/ipOrganisation/${organisationId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
