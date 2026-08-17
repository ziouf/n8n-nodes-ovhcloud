import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';
import { destructiveActionNotice } from '../../../../shared/nodes/notices';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		destructiveActionNotice('This will reset the postgresql. This action is irreversible.', displayOptions),
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
	];
}

/**
 * Executes the Reset PostgreSQL Prometheus Credentials operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/database/postgresql/{clusterId}/prometheus/credentials/reset
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const body: IDataObject = {};
	const data = (await client.httpPost(`/cloud/project/${serviceName}/database/postgresql/prometheus/credentials/reset`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
