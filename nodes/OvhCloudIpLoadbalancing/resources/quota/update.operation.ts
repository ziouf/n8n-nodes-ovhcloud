import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Update quota warning threshold for a specific zone.
 *
 * HTTP method: PUT
 * Endpoint: /ipLoadbalancing/{serviceName}/quota/{zone}
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
			displayName: 'Zone',
			name: 'zone',
			type: 'string',
			default: '',
			required: true,
			description: 'The zone to update quota for',
			displayOptions,
		},
		{
			displayName: 'Warning Threshold',
			name: 'warningThreshold',
			type: 'number',
			default: 0,
			description: 'Warning threshold for the quota',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Quota operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const zone = this.getNodeParameter('zone', 0) as string;
	const body: IDataObject = {};
	const warningThreshold = this.getNodeParameter('warningThreshold', 0, 0) as number;
	if (warningThreshold) body.warningThreshold = warningThreshold;
	const data = (await client.httpPut(
		`/ipLoadbalancing/${serviceName}/quota/${zone}`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
