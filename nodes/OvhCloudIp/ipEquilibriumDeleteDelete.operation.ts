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
 * Executes the Delete DeleteEquilibrium operation.
 *
 * HTTP method: DELETE
 * Endpoint: /ip/{ip}/equilibrium
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/ip/' + ip + '/equilibrium')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
