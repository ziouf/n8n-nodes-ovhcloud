import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Groupe A : Contacts
// ============================================================

// listContacts
export async function executeListContacts(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/contact')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/contact/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getContact
export function descriptionGetContact(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetContact(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const contactId = this.getNodeParameter('contactId', itemIndex) as string;
	const data = (await client.httpGet(`/me/contact/${contactId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// getContactFields
export function descriptionGetContactFields(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Contact ID',
			name: 'contactId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetContactFields(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const contactId = this.getNodeParameter('contactId', itemIndex) as string;
	const data = (await client.httpGet(`/me/contact/${contactId}/fields`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe B : Documents
// ============================================================

// listDocuments
export async function executeListDocuments(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ids = (await client.httpGet('/me/document')) as string[];
	const results: IDataObject[] = [];
	for (const id of ids) {
		const details = (await client.httpGet(`/me/document/${id}`)) as IDataObject;
		results.push(details);
	}
	return this.helpers.returnJsonArray(results);
}

// getDocument
export function descriptionGetDocument(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Document ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

export async function executeGetDocument(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', itemIndex) as string;
	const data = (await client.httpGet(`/me/document/${id}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Groupe C : Tags
// ============================================================

// listTags
export async function executeListTags(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/tag')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// listAvailableTags
export async function executeListAvailableTags(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const data = (await client.httpGet('/me/tag/available')) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}

// getTag
export function descriptionGetTag(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Tag',
			name: 'tag',
			type: 'string',
			default: '',
			required: true,
			description: 'The tag name',
			displayOptions,
		},
	];
}

export async function executeGetTag(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const tag = this.getNodeParameter('tag', itemIndex) as string;
	const data = (await client.httpGet(`/me/tag/${tag}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
