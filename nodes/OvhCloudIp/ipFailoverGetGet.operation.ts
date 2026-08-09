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
		{
			displayName: 'Failover',
			name: 'failover',
			type: 'string',
			default: '',
			required: true,
			description: 'The failover identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Get GetFailover operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/failover/{failover}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;
	const failover = this.getNodeParameter('failover', _itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/ip/' + ip + '/failover/' + failover)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
