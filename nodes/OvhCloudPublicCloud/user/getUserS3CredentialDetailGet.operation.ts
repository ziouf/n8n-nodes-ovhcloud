import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
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
 * Executes the Get S3 Credential operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/user/{userId}/s3Credentials/{access}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;
	const access = this.getNodeParameter('access', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/user/${userId}/s3Credentials/${access}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
