import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Get a specific web hosting certificate.
 *
 * HTTP method: GET
 * Endpoint: /v2/webhosting/certificate/{certificateId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Certificate ID',
			name: 'certificateId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the certificate',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Web Hosting Certificate operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const certificateId = this.getNodeParameter('certificateId', 0) as string;
	const data = (await client.httpGet(`/v2/webhosting/certificate/${certificateId}`)) as IDataObject;
	return [{ json: data }];
}
