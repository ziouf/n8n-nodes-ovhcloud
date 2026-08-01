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
		},
		{
			displayName: 'Failover',
			name: 'failover',
			type: 'string',
			default: '',
			required: true,
			description: 'The failover identifier',
		},

	];
}

/**
 * Executes the Delete DeleteFailover operation.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ip}/failover/{failover}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;
	const failover = this.getNodeParameter('failover', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/ip/' + ip + '/failover/' + failover)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
