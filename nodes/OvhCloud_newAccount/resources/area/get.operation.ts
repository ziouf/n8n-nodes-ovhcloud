import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get available areas for account creation.
 *
 * HTTP method: GET
 * Endpoint: /newAccount/area
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Country',
			name: 'country',
			type: 'string',
			default: '',
			required: true,
			description: 'Country code (e.g., FR, US, GB)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Areas operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const country = this.getNodeParameter('country', 0) as string;
	const data = (await client.httpGet('/newAccount/area', { qs: { country } })) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
