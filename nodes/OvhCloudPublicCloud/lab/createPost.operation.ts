import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

/**
 * Activate a lab on your Cloud Project.
 *
 * Activates the specified lab for the given project.
 *
 * @see https://api.ovh.com/console/#/cloud/project/{serviceName}/lab/{labId#PUT}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Lab ID',
			name: 'labId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the lab to activate',
			displayOptions,
		},
	];
}

/**
 * Executes the Activate Lab operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/lab/{labId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const labId = this.getNodeParameter('labId', _itemIndex ?? 0) as string;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/lab/${labId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
