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
		{
			displayName: 'equilibrium',
			name: 'equilibrium',
			type: 'string',
			default: '',
			required: true,
			description: 'The equilibrium identifier',
		},

	];
}

/**
 * Executes the Get GetEquilibriumDetail operation.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ip}/equilibrium/{equilibrium}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', itemIndex) as string;
	const equilibrium = this.getNodeParameter('equilibrium', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/ip/' + ip + '/equilibrium/' + equilibrium)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
