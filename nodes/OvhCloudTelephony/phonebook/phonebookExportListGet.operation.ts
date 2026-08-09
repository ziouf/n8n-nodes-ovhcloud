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
			displayName: 'Format',
			name: 'format',
			type: 'string',
			default: '',
			required: true,
			description: 'Format of the file',
			displayOptions,
		},
	];
}

/**
 * Executes the PhonebookExport List operation.
 *
 * HTTP method: GET
 * Endpoint: /telephony/{billingAccount}/phonebook/{bookKey}/export
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const billingAccount = this.getNodeParameter('billingAccount', _itemIndex) as string;
	const bookKey = this.getNodeParameter('bookKey', _itemIndex) as string;
	const format = this.getNodeParameter('format', _itemIndex) as string;

	const qs: IDataObject = {
		format: format,
	};

	const client = new ApiClient(this);
	const data = (await client.httpGet('/telephony/' + encodeURIComponent(billingAccount) + '/phonebook' + '/' + encodeURIComponent(bookKey) + '/export', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
