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
			displayName: 'Filer ID',
			name: 'filerId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the global datastore',
			displayOptions,
		},
	];
}

/**
 * Executes the Remove datastore operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/filer/{filerId}/remove
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const filerId = this.getNodeParameter('filerId', itemIndex) as string;
	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/filer/${filerId}/remove`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
