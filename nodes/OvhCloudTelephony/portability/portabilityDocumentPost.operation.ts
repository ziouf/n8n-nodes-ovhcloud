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
			required: true,
			description: 'Document\'s name',
			displayOptions,
		},
	];
}

/**
 * Executes the PortabilityDocumentPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/portability/{id}/document
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const id = this.getNodeParameter('id', itemIndex) as string;
	const description = this.getNodeParameter('description', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex) as string;

	const body: IDataObject = {
		description: description,
		name: name,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/portability' + '/' + encodeURIComponent(id) + '/document', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
