import type {
	IExecuteFunctions,
	IDataObject,
	IDisplayOptions,
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
			displayOptions,
		},
		{
			displayName: 'Certificate Name',
			name: 'certificateName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Get SSL certificate details
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ssl/{certificateName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const certificateName = this.getNodeParameter('certificateName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/web/${serviceName}/ssl/${certificateName}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
