import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The clusterId parameter',
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
					description: 'Kind parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Generate a temporary URL to retrieve logs operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}/log/url
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('kind', _itemIndex ?? 0)) body.kind = this.getNodeParameter('kind', _itemIndex ?? 0);

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/m3db/${clusterId}/log/url`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
