import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a reverse delegation target for an IPv6 subnet.
 *
 * Creates a new reverse delegation target.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/delegation
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Create Delegation operation
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
			displayName: 'Target',
			name: 'target',
			type: 'string',
			default: '',
			required: true,
			description: 'The delegation target to add',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Delegation operation.
 *
 * Adds a new reverse delegation target.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ipBlock}/delegation
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const target = this.getNodeParameter('target', 0) as string;
	const data = (await client.httpPost(`/ip/${ipBlock}/delegation`, {
		body: { target },
	})) as IDataObject;
	return [{ json: data }];
}
