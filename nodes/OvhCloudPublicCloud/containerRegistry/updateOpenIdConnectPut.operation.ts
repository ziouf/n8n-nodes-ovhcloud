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
	];
}

/**
 * Executes the Update OpenID Connect operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/containerRegistry/{registryId}/openIdConnect
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const registryId = this.getNodeParameter('registryId', _itemIndex ?? 0) as string;

	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/containerRegistry/${registryId}/openIdConnect`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
