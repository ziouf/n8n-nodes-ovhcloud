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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const bookKey = this.getNodeParameter('bookKey', _itemIndex) as string;
	const documentId = this.getNodeParameter('documentId', _itemIndex) as string;

	const body: IDataObject = {
		documentId: documentId,
	};

	const client = getClient(this);
	const data = (await client.httpPost('/telephony/' + encodeURIComponent(billingAccount) + '/phonebook' + '/' + encodeURIComponent(bookKey) + '/import', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
