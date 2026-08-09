import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// Agreement Accept (POST /me/agreements/{id}/accept) - Section 15
// ============================================================

export async function executeAcceptAgreement(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpPost(`/me/agreements/${id}/accept`, {})) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Get Contract Details (GET /me/agreements/{id}/contract) - Section 16
// ============================================================

export async function executeGetContract(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const data = (await client.httpGet(`/me/agreements/${id}/contract`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// Accept Agreement - description function for UI parameter form
// ============================================================

export function descriptionAcceptAgreement(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Agreement ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The agreement contract ID to accept',
			displayOptions,
		},
	];
}

// ============================================================
// Get Contract - description function for UI parameter form
// ============================================================

export function descriptionGetContract(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Agreement/Contract ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The agreement or contract ID to retrieve details for',
			displayOptions,
		},
	];
}
