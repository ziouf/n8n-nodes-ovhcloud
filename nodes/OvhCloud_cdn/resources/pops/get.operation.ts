import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Get CDN PoP operation
 *
 * Retrieves details of a specific Point of Presence (PoP).
 * This is a global endpoint that does not require a service name.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/pops/{name}
 */
export function descriptionPopsGet(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'PoP Name',
			name: 'name',
			description: 'The name of the PoP to retrieve',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Get CDN PoP operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing PoP details
 */
export async function executePopsGet(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', 0) as string;

	const response = (await client.httpGet(`/cdn/dedicated/pops/${name}`)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
