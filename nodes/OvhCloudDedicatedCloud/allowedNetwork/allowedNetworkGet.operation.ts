import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'Network Access ID',
			name: 'networkAccessId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get network allowed on infrastructure firewall operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/allowedNetwork/{networkAccessId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const networkAccessId = this.getNodeParameter('networkAccessId', itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/allowedNetwork/${networkAccessId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
