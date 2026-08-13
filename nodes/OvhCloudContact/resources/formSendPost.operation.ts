import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Form',
			name: 'form',
			type: 'json',
			default: '[]',
			required: true,
			description:
				'Form information as an array of key/value objects (e.g. [{"key": "email", "value": "user@example.com"}])',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description:
				'The type of the form to send (must match a type returned by Get Form Characteristics)',
			displayOptions,
		},
	];
}

/**
 * Send a form according to the characteristics in /contact/form.
 *
 * HTTP method: POST
 * Endpoint: /contact/form/send
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const form = this.getNodeParameter('form', _itemIndex ?? 0) as IDataObject[];
	const type = this.getNodeParameter('type', _itemIndex ?? 0) as string;

	const body: IDataObject = { form, type };
	await client.httpPost('/contact/form/send', body);

	return this.helpers.returnJsonArray([{ success: true }]);
}
