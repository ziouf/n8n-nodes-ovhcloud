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
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			required: true,
			description: 'Description of the exception',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'IP address or network of the remote service, e.g. 123.100.200.0',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Two Factor Authentication Whitelisted Network operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/twoFAWhitelist
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const body: IDataObject = {};
	body.description = this.getNodeParameter('description', itemIndex) as string;
	body.ip = this.getNodeParameter('ip', itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/twoFAWhitelist`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
