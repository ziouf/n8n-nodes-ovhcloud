import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Register Startup operation for Startup resource
 *
 * Registers a startup:
 * - HTTP POST request to `/startup` endpoint
 * - Requires startup registration body
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Register Startup operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Company Name',
			name: 'companyName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the startup company',
			displayOptions,
		},
		{
			displayName: 'Website',
			name: 'website',
			type: 'string',
			default: '',
			required: true,
			description: 'Startup website URL',
			displayOptions,
		},
	];
}

/**
 * Executes the Register Startup operation.
 *
 * Registers a startup.
 *
 * HTTP method: POST
 * Endpoint: /startup
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const body = {
		companyName: this.getNodeParameter('companyName', 0) as string,
		website: this.getNodeParameter('website', 0) as string,
	};
	const data = (await client.httpPost('/startup', { body })) as IDataObject;
	return [{ json: data }];
}
