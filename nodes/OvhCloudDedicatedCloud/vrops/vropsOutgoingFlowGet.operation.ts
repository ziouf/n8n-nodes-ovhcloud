import { SERVICE_NAME } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
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
 * Executes the Get Aria Operations Outgoing Flow operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/vrops/outgoingFlow/{outgoingFlowId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const outgoingFlowId = this.getNodeParameter('outgoingFlowId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/vrops/outgoingFlow/${outgoingFlowId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
