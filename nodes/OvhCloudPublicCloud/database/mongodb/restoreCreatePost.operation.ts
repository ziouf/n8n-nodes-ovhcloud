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
			displayName: 'Point In Time',
			name: 'pointInTime',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}
/**
 * Executes the Restore MongoDB Cluster operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/mongodb/{clusterId}/restore
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
	const pointInTime = this.getNodeParameter('pointInTime', _itemIndex ?? 0, '') as string;

	const body: IDataObject = {
    pointInTime: pointInTime || undefined
  };
	const client = getClient(this);
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/mongodb/${clusterId}/restore`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
