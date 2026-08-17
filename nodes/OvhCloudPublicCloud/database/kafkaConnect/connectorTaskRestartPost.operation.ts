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
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'ClusterId ID',
			displayOptions,
		},
		{
			displayName: 'Connectorid',
			name: 'connectorId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'ConnectorId ID',
			displayOptions,
		},
		{
			displayName: 'Taskid',
			name: 'taskId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'TaskId ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Restart a connector task.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/connector/{connectorId}/task/{taskId}/restart
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const connectorId = this.getNodeParameter('connectorId', _itemIndex ?? 0) as string;
const taskId = this.getNodeParameter('taskId', _itemIndex ?? 0) as string;
const data = (await client.httpPost(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/connector/${connectorId}/task/${taskId}/restart`)) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
