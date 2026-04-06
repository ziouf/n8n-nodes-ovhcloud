import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete an SSH key.
 *
 * HTTP method: DELETE
 * Endpoint: /me/sshKey/{keyName}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Key Name',
			name: 'keyName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the SSH key to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete SSH Key operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const keyName = this.getNodeParameter('keyName', 0) as string;
	await client.httpDelete(`/me/sshKey/${keyName}`);
	return [{ json: { success: true, keyName } }];
}
