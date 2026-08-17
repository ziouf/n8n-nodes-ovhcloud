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
			displayName: 'Policy',
			name: 'policy',
			type: 'string',
			default: '',
			required: true,
			description: 'Raw storage policy',
			displayOptions,
		},
	];
}

/**
 * Executes the Create User Policy operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/user/{userId}/policy
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const policy = (this.getNodeParameter('policy', _itemIndex ?? 0) || '') as string;
	body['policy'] = policy;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/user/${userId}/policy`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
