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
			displayName: 'Extended',
			name: 'extended',
			type: 'boolean',
			default: false,
			required: true,
			description: 'Whether to get extended metrics',
			displayOptions,
		},
	];
}

/**
 * Executes the List metrics.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/metric
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const extended = this.getNodeParameter('extended', _itemIndex ?? 0, undefined) as string | undefined;
const data = (await client.httpGet(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/metric`, { extended: extended })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
