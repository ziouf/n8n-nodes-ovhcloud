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
			displayName: 'ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'Sound ID',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Sound description',
			displayOptions,
		},
		{
			displayName: 'Filename',
			name: 'filename',
			type: 'string',
			default: '',
			description: 'Sound filename',
			displayOptions,
		},
	];
}

/**
 * Executes the Put Sound Update operation.
 *
 * HTTP method: PUT
 * Endpoint: /telephony/sounds/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const id = this.getNodeParameter('id', _itemIndex) as string;
	const descriptionParam = this.getNodeParameter('description', _itemIndex) as string;
	const filename = this.getNodeParameter('filename', _itemIndex) as string;

	const body: IDataObject = {
		description: descriptionParam,
		filename: filename,
	};

	const client = getClient(this);
	const data = (await client.httpPut(
		'/telephony/sounds/' + encodeURIComponent(id),
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
