import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Group Name',
			name: 'groupName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the instance group (e.g. web-servers)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Instance Group operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/instance/group
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const groupName = (this.getNodeParameter('groupName', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = { groupName };

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/instance/group`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
