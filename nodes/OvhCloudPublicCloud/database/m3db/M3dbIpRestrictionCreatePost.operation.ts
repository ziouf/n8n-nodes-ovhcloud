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
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Ip parameter',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Add ip restrictions to the m3db operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}/ipRestriction
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('ip', _itemIndex ?? 0)) body.ip = this.getNodeParameter('ip', _itemIndex ?? 0);
	if (this.getNodeParameter('description', _itemIndex ?? 0)) body.description = this.getNodeParameter('description', _itemIndex ?? 0);

	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/m3db/${clusterId}/ipRestriction`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
