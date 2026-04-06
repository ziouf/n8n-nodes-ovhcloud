import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete a customer network.
 *
 * HTTP method: DELETE
 * Endpoint: /horizonView/{serviceName}/customerNetwork/{customerNetworkId}
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
 * Executes the Delete Customer Network operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const customerNetworkId = this.getNodeParameter('customerNetworkId', 0) as string;
	const data = (await client.httpDelete(
		`/horizonView/${serviceName}/customerNetwork/${customerNetworkId}`,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
