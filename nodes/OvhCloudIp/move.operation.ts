import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * Move IP Block operation.
 *
 * Moves this IP to another service.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/move
 */
 
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'IP Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The IP block identifier',
			displayOptions,
		},
		{
			displayName: 'To',
			name: 'to',
			type: 'string',
			default: '',
			required: true,
			description: 'The destination service name',
			displayOptions,
		},
	];
}

/**
 * Executes the Move IP Block operation.
 *
 * Moves this IP to another service.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const to = this.getNodeParameter('to', 0) as string;
	const data = (await client.httpPost(`/ip/${ipBlock}/move`, { body: { to } })) as IDataObject;
	return [{ json: data }];
}
