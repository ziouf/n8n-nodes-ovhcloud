import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific IAM resource group.
 *
 * HTTP method: GET
 * Endpoint: /v2/iam/resourceGroup/{resourceGroupId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Resource Group ID',
			name: 'resourceGroupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the resource group',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IAM Resource Group operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const resourceGroupId = this.getNodeParameter('resourceGroupId', 0) as string;
	const data = (await client.httpGet(`/v2/iam/resourceGroup/${resourceGroupId}`)) as IDataObject;
	return [{ json: data }];
}
