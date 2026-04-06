import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create IP Migration Token operation.
 *
 * Generates a migration token for a specific IP block.
 *
 * HTTP method: POST
 * Endpoint: /ip/{ip}/migrationToken
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
			displayName: 'Customer ID',
			name: 'customerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The customer ID for migration',
			displayOptions,
		},
	];
}

/**
 * Executes the Create IP Migration Token operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;
	const customerId = this.getNodeParameter('customerId', 0) as string;
	const data = (await client.httpPost(`/ip/${ipBlock}/migrationToken`, {
		body: { customerId },
	})) as IDataObject;
	return [{ json: data }];
}
