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
	];
}

/**
 * Executes the Get VM Encryption KMS Server operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/vmEncryption/kms/{kmsId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const kmsId = this.getNodeParameter('kmsId', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/vmEncryption/kms/${kmsId}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
