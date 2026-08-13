import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP address',
			displayOptions,
		},

	];
}

/**
 * Executes the Post CreateEquilibrium operation.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/equilibrium
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPost('/ip/' + ip + '/equilibrium', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
