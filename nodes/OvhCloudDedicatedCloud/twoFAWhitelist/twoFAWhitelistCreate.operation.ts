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
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	body.description = this.getNodeParameter('description', _itemIndex) as string;
	body.ip = this.getNodeParameter('ip', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/twoFAWhitelist`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
