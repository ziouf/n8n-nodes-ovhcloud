import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../../shared/nodes/locators';
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getPublicCloudProjects',
				displayName: 'Service Name',
				description: 'The database service name',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
			displayOptions,
		},
		{
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Create MongoDB Log Subscription operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const kind = this.getNodeParameter('kind', _itemIndex ?? 0, '') as string;
	const streamId = this.getNodeParameter('streamId', _itemIndex ?? 0, '') as string;

	const body: IDataObject = {
    kind: kind || undefined,
    streamId: streamId || undefined
  };
	const client = getClient(this);
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/log/subscription`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
