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
			displayName: 'User ID',
			name: 'userId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
		{
			displayName: 'Right ID',
			name: 'rightId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get user datacenter right operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/right/{rightId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userId = this.getNodeParameter('userId', itemIndex) as string;
	const rightId = this.getNodeParameter('rightId', itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/user/${userId}/right/${rightId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
