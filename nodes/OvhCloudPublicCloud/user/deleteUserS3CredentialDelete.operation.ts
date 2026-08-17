import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Access Key',
			name: 'access',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Delete S3 Credential operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/user/{userId}/s3Credentials/{access}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const access = this.getNodeParameter('access', _itemIndex ?? 0) as string;

	await client.httpDelete(`/cloud/project/${serviceName}/user/${userId}/s3Credentials/${access}`);

	return this.helpers.returnJsonArray([{ deleted: access }]);
}
