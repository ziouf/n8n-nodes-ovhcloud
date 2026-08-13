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
 * Executes the Delete DeleteEquilibrium operation.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ip}/equilibrium
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpDelete('/ip/' + ip + '/equilibrium')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
