import { SERVICE_NAME_2 } from '../serviceName';
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
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Network',
			name: 'network',
			type: 'string',
			default: '',
			required: true,
			description: 'IP ex: 213.186.33.34/24',
			displayOptions,
		},
		{
			displayName: 'Task ID',
			name: 'taskId',
			type: 'number',
			default: 0,
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Get operation for IP block operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/ip/{network}/task/{taskId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const network = this.getNodeParameter('network', _itemIndex) as string;
	const taskId = this.getNodeParameter('taskId', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/ip/${encodeURIComponent(network)}/task/${taskId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
