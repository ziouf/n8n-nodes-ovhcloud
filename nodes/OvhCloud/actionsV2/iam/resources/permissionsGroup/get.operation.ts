import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific IAM permissions group.
 *
 * HTTP method: GET
 * Endpoint: /v2/iam/permissionsGroup/{permissionsGroupId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Permissions Group ID',
			name: 'permissionsGroupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the permissions group',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IAM Permissions Group operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const permissionsGroupId = this.getNodeParameter('permissionsGroupId', 0) as string;
	const data = (await client.httpGet(`/v2/iam/permissionsGroup/${permissionsGroupId}`)) as IDataObject;
	return [{ json: data }];
}
