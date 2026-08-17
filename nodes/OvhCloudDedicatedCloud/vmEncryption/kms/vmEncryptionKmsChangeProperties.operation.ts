import { SERVICE_NAME } from '../../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
			displayOptions,
		},
		{
			displayName: 'KMS ID',
			name: 'kmsId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the VM Encryption KMS',
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
 * Executes the Update VM Encryption KMS Server operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}/changeProperties
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const kmsId = this.getNodeParameter('kmsId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const body: IDataObject = {};
	const description = this.getNodeParameter('description', _itemIndex, '') as string; if (description !== '') { body.description = description; }
	body.sslThumbprint = this.getNodeParameter('sslThumbprint', _itemIndex) as string;
	const data = (await client.httpPost(`/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}/changeProperties`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
