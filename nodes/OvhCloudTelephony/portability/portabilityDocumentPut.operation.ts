import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Billing Account',
			name: 'billingAccount',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of your billingAccount',
			displayOptions,
		},
		{
			displayName: 'Document ID',
			name: 'documentId',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the document',
			displayOptions,
		},
		{
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the portability',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the document',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Name of the document',
			displayOptions,
		},
	];
}

/**
 * Executes the PortabilityDocumentPut operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/{billingAccount}/portability/{id}/document/{documentId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const description = this.getNodeParameter('description', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;

	const body: IDataObject = {
		description: description,
		name: name,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/telephony/' + encodeURIComponent(billingAccount) + '/portability' + '/' + encodeURIComponent(id) + '/document' + '/' + encodeURIComponent(documentId), body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
