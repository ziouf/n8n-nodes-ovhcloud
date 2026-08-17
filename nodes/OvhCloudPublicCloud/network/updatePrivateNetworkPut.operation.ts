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
			displayName: 'Private Network ID',
			name: 'pnId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Update Private Network operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/network/private/{networkId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const pnId = this.getNodeParameter('pnId', _itemIndex ?? 0) as string;

	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/network/private/${pnId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
