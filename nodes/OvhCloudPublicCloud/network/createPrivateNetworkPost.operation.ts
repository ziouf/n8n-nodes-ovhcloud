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
	];
}

/**
 * Executes the Create Private Network operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/network/private
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/network/private`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
