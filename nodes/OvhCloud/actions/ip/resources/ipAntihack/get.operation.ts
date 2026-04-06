import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details of a blocked IP in Anti-Hack.
 *
 * Retrieves information about a specific IP blocked by Anti-Hack.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/antihack/{ipBlocked}
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get Antihack operation
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
			displayName: 'IP Blocked',
			name: 'ipBlocked',
			type: 'string',
			default: '',
			required: true,
			description: 'The blocked IP address',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Antihack operation.
 *
 * Retrieves details of a specific blocked IP in Anti-Hack.
 *
 * HTTP method: GET
 * Endpoint: /ip/{ipBlock}/antihack/{ipBlocked}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing blocked IP details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const ipBlocked = this.getNodeParameter('ipBlocked', 0) as string;
	const data = (await client.httpGet(`/ip/${ipBlock}/antihack/${ipBlocked}`)) as IDataObject;
	return [{ json: data }];
}
