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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description parameter',
			displayOptions,
		},
		{
			displayName: 'Plan',
			name: 'plan',
			type: 'string',
			default: '',
			description: 'Plan parameter',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'Version parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Update an existing m3db cluster operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('description', _itemIndex ?? 0)) body.description = this.getNodeParameter('description', _itemIndex ?? 0);
	if (this.getNodeParameter('plan', _itemIndex ?? 0)) body.plan = this.getNodeParameter('plan', _itemIndex ?? 0);
	if (this.getNodeParameter('version', _itemIndex ?? 0)) body.version = this.getNodeParameter('version', _itemIndex ?? 0);

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/m3db/${clusterId}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
