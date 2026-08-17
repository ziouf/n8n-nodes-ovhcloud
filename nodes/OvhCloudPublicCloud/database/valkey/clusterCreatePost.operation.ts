import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(_displayOptions: IDisplayOptions): INodeProperties[] {
	void _displayOptions;
	return [
	{
		...projectIdLocator(),
	}
	];
}

/**
 * Executes the Create Valkey cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/cloud/database/valkey
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const body = {} as IDataObject;

	const data = (await client.httpPost(`/publicCloud/project/${projectId}/cloud/database/valkey`, body)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
