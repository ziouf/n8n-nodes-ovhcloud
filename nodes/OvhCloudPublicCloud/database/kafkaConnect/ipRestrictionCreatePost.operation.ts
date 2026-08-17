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
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Ip parameter',
			required: true,
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
	];
}

/**
 * Executes the Create an IP restriction.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/ipRestriction
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const ip = this.getNodeParameter('ip', _itemIndex ?? 0, '') as string;
const description = this.getNodeParameter('description', _itemIndex ?? 0, '') as string;
const data = (await client.httpPost(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/ipRestriction`, { ip: ip || undefined, description: description || undefined })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
