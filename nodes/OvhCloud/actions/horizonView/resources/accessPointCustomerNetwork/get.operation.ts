import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get details of a specific customer network on an access point.
 *
 * HTTP method: GET
 * Endpoint: /horizonView/{serviceName}/accessPoint/{accessPointId}/customerNetwork/{customerNetworkId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the HorizonView service',
			displayOptions,
		},
		{
			displayName: 'Access Point ID',
			name: 'accessPointId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the access point',
			displayOptions,
		},
		{
			displayName: 'Customer Network ID',
			name: 'customerNetworkId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the customer network',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Access Point Customer Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const customerNetworkId = this.getNodeParameter('customerNetworkId', 0) as string;
	const data = (await client.httpGet(
		`/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`,
	)) as IDataObject;
	return [{ json: data }];
}
