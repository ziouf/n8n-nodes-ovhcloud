import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Delete a customer network from an access point.
 *
 * HTTP method: DELETE
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
			description: 'The ID of the customer network to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Access Point Customer Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const accessPointId = this.getNodeParameter('accessPointId', 0) as string;
	const customerNetworkId = this.getNodeParameter('customerNetworkId', 0) as string;
	const data = (await client.httpDelete(
		`/horizonView/${serviceName}/accessPoint/${accessPointId}/customerNetwork/${customerNetworkId}`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
