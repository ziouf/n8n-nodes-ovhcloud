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
			displayName: 'KMS ID',
			name: 'kmsId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the VM Encryption KMS',
			displayOptions,
		},
	];
}

/**
 * Executes the Remove VM Encryption KMS Server operation.
 *
 * HTTP method: DELETE
 * Endpoint: /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const kmsId = this.getNodeParameter('kmsId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpDelete(`/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
