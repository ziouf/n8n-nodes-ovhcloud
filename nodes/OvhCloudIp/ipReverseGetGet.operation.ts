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
 * Executes the Get GetReverse operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/reverse
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/ip/' + ip + '/reverse')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
