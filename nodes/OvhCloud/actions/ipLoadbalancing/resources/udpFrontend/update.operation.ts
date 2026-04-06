import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Update a UDP frontend's properties.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/frontend/{frontendId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The service name of the IP Load Balancer',
			displayOptions,
		},
		{
			displayName: 'Frontend ID',
			name: 'frontendId',
			type: 'number',
			default: 0,
			required: true,
			description: 'The ID of the UDP frontend',
			displayOptions,
		},
		{
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 0,
			description: 'Frontend port',
			displayOptions,
		},
		{
			displayName: 'Default Farm ID',
			name: 'defaultFarmId',
			type: 'number',
			default: 0,
			displayOptions,
		},
		{
			displayName: 'Allowed Sources',
			name: 'allowedSources',
			type: 'string',
			default: '',
			description: 'Comma-separated list of allowed source IPs',
			displayOptions,
		},
	];
}

/**
 * Executes the Update UDP Frontend operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const frontendId = this.getNodeParameter('frontendId', 0) as number;
	const body: IDataObject = {};
	const port = this.getNodeParameter('port', 0, 0) as number;
	if (port) body.port = port;
	const defaultFarmId = this.getNodeParameter('defaultFarmId', 0, 0) as number;
	if (defaultFarmId) body.defaultFarmId = defaultFarmId;
	const allowedSources = this.getNodeParameter('allowedSources', 0, '') as string;
	if (allowedSources) {
		body.allowedSources = allowedSources.split(',').map((s) => s.trim());
	}
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/udp/frontend/${frontendId}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
