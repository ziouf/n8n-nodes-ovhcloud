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
			displayName: 'Book Key',
			name: 'bookKey',
			type: 'string',
			default: '',
			required: true,
			description: 'Identifier of the phonebook',
			displayOptions,
		},
		{
			displayName: 'Document ID',
			name: 'documentId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the /me/document file you want to import',
			displayOptions,
		},
	];
}

/**
 * Executes the PhonebookImportPost operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/{billingAccount}/phonebook/{bookKey}/import
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', itemIndex) as string;
	const bookKey = this.getNodeParameter('bookKey', itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', itemIndex) as string;

	const body: IDataObject = {
		documentId: documentId,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/phonebook' + '/' + encodeURIComponent(bookKey) + '/import', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
