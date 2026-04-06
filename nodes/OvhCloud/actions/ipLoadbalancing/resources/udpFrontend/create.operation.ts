import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Add a new UDP frontend on an IP Load Balancer.
 *
 * HTTP method: POST
 * Endpoint: /ipLoadbalancing/{serviceName}/udp/frontend
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
			displayName: 'Port',
			name: 'port',
			type: 'number',
			default: 0,
			required: true,
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
		{
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			description: 'Zone for the frontend',
			displayOptions,
		},
	];
}

/**
 * Executes the Create UDP Frontend operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {};
	body.port = this.getNodeParameter('port', 0) as number;
	const defaultFarmId = this.getNodeParameter('defaultFarmId', 0, 0) as number;
	if (defaultFarmId) body.defaultFarmId = defaultFarmId;
	const allowedSources = this.getNodeParameter('allowedSources', 0, '') as string;
	if (allowedSources) {
		body.allowedSources = allowedSources.split(',').map((s) => s.trim());
	}
	const zone = this.getNodeParameter('zone', 0, '') as string;
	if (zone) body.zone = zone;
	const data = (await client.httpPost(
		`/ipLoadbalancing/${serviceName}/udp/frontend`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
