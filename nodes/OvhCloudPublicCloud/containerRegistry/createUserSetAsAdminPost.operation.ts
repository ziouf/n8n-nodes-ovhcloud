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
			displayName: 'Container Registry ID',
			name: 'registryId',
			type: 'string',
			default: '',
			required: true,
			description: 'The registry ID',
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
	];
}

/**
 * Executes the Set User As Admin operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/containerRegistry/{registryId}/users/{userId}/setAsAdmin
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const registryId = this.getNodeParameter('registryId', _itemIndex ?? 0) as string;
	const userId = this.getNodeParameter('userId', _itemIndex ?? 0) as string;

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/containerRegistry/${registryId}/users/${userId}/setAsAdmin`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
