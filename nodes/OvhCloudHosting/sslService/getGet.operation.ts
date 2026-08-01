import type { IExecuteFunctions, IDataObject, INodeExecutionData } from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description() {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Certificate Name',
			name: 'certificateName',
			type: 'string',
			default: '',
			required: true,
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
