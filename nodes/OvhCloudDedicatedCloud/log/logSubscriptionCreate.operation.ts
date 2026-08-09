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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
			description: 'Log kind name of the subscription',
			displayOptions,
		},
		{
			displayName: 'Stream ID',
			name: 'streamId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the destination log stream',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Log Subscription operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.kind = this.getNodeParameter('kind', _itemIndex) as string;
	body.streamId = this.getNodeParameter('streamId', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/log/subscription`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
