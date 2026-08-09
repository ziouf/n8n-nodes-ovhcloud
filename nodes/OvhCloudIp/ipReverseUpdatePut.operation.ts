import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The ip identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Put UpdateReverse operation.
 *
 * HTTP method: PUT
 * Endpoint: /ip/{ip}/reverse
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/ip/' + ip + '/reverse', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
