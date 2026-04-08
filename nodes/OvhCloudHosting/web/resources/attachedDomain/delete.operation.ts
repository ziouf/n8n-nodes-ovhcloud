/**
 * @brief Delete Attached Domain operation for web hosting
 *
 * HTTP DELETE request to `/hosting/web/{serviceName}/attachedDomain/{domain}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the web hosting service',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain to delete',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const data = (await client.httpDelete(
		`/hosting/web/${serviceName}/attachedDomain/${domain}`,
	)) as IDataObject;
	return [{ json: data }];
}
