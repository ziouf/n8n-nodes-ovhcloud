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
 * Executes the Get IP Restrictions Management operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/containerRegistry/{registryId}/ipRestrictions/management
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const registryId = this.getNodeParameter('registryId', _itemIndex ?? 0) as string;

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/containerRegistry/${registryId}/ipRestrictions/management`,
	)) as unknown[];

	if (!Array.isArray(data)) {
		return this.helpers.returnJsonArray([data]);
	}

	return this.helpers.returnJsonArray(data.map((item) => item as INodeExecutionData));
}
