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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Plan',
			name: 'plan',
			type: 'string',
			default: '',
			description: 'Plan parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'Version parameter',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Update a kafkaConnect cluster.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const description = this.getNodeParameter('description', _itemIndex ?? 0, '') as string;
const plan = this.getNodeParameter('plan', _itemIndex ?? 0, '') as string;
const version = this.getNodeParameter('version', _itemIndex ?? 0, '') as string;
const data = (await client.httpPut(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}`, { description: description || undefined, plan: plan || undefined, version: version || undefined })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
