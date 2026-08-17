import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IExecuteFunctions,
	IDisplayOptions,
	IDataObject,
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
			description: 'The PostgreSQL cluster ID',
			displayOptions,
		},
		{
			displayName: 'Extended',
			name: 'extended',
			type: 'boolean',
			default: false,
			description: 'Whether to request extended metrics',
			displayOptions,
		},
	];
}

/**
 * Executes the Get PostgreSQL Metrics operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/metric
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;

	const extended = this.getNodeParameter('extended', _itemIndex ?? 0, false) as boolean | undefined;
	const qs: IDataObject = {
		extended: extended,
	};
	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/database/postgresql/${clusterId}/metric`,
		qs,
	)) as import('n8n-workflow').IDataObject;

	return this.helpers.returnJsonArray([data as INodeExecutionData]);
}
