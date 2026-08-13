import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
	];
}

/**
 * Executes the PortabilityDocumentGet operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/portability/{id}/document/{documentId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', _itemIndex) as string;
	const id = this.getNodeParameter('id', _itemIndex) as string;

	const client = getClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/portability' + '/' + encodeURIComponent(id) + '/document' + '/' + encodeURIComponent(documentId))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
