import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details of a reverse delegation target.
 *
 * Retrieves information about a specific reverse delegation target.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/delegation/{target}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Delegation operation
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
			description: 'The delegation target',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Delegation operation.
 *
 * Retrieves details of a specific reverse delegation target.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/delegation/{target}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing delegation details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const target = this.getNodeParameter('target', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/delegation/${target}`)) as IDataObject;
	return [{ json: data }];
}
