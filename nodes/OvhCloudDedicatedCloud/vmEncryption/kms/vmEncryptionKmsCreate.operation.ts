import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			description: 'Description of your option access network',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'IP address of the remote service, e.g. 123.100.200.0',
			displayOptions,
		},
		{
			displayName: 'SSL Thumbprint',
			name: 'sslThumbprint',
			type: 'string',
			default: '',
			required: true,
			description: 'SSL thumbprint of the remote service, e.g. A7:61:68:...:61:91:2F',
			displayOptions,
		},
	];
}

/**
 * Executes the Create VM Encryption KMS Server operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/vmEncryption/kms
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string; if (description !== '') { body.description = description; }
	body.ip = this.getNodeParameter('ip', _itemIndex) as string;
	body.sslThumbprint = this.getNodeParameter('sslThumbprint', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/vmEncryption/kms`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
