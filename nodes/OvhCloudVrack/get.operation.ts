import {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

/**
 * @brief Get vRack operation for vRack resource
 *
 * Retrieves detailed information for a specific vRack:
 * - HTTP GET request to `/vrack/{vrackName}` endpoint
 * - vRack name parameter is required
 * - Returns vRack details with name, description, etc.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the Get vRack operation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'vRack Name',
			name: 'vrackName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the vRack',
			displayOptions,
		},
	];
}

/**
 * Executes the Get vRack operation.
 *
 * Retrieves detailed information for a specific vRack.
 *
 * HTTP method: GET
 * Endpoint: /vrack/{vrackName}
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing vRack details
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const vrackName = this.getNodeParameter('vrackName', 0) as string;
	const data = (await client.httpGet(`/vrack/${vrackName}`)) as IDataObject;
	return [{ json: data }];
}
