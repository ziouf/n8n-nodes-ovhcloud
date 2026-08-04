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
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Outgoing Flow ID',
			name: 'outgoingFlowId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the VMware Aria Operations outgoing flow',
			displayOptions,
		},
	];
}

/**
 * Executes the Remove Aria Operations Outgoing Flow operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicatedCloud/{serviceName}/vrops/outgoingFlow/{outgoingFlowId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const outgoingFlowId = this.getNodeParameter('outgoingFlowId', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpDelete(`/dedicatedCloud/${serviceName}/vrops/outgoingFlow/${outgoingFlowId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
