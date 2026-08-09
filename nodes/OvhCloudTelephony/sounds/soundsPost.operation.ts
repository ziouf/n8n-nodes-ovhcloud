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
			required: true,
			description: 'Sound filename',
			displayOptions,
		},
	];
}

/**
 * Executes the Post Sound Create operation.
 *
 * HTTP method: POST
 * Endpoint: /telephony/sounds
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const descriptionParam = this.getNodeParameter('description', _itemIndex) as string;
	const filename = this.getNodeParameter('filename', _itemIndex) as string;

	const body: IDataObject = {
		description: descriptionParam,
		filename: filename,
	};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/telephony/sounds', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
