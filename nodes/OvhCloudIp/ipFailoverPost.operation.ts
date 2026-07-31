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
			displayName: 'ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The ip identifier',
		},

	];
}

/**
 * Executes the Post CreateFailover operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/failover
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/ip/' + ip + '/failover', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
