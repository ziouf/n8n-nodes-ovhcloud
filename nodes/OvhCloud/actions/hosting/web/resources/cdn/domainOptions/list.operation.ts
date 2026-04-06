/**
 * @brief List CDN Domain Options operation for web hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/cdn/domain/{domainName}/option` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

 
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
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			required: true,
			description: 'The CDN domain name',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const domainName = this.getNodeParameter('domainName', 0) as string;
	const data = (await client.httpGet(
		`/hosting/web/${serviceName}/cdn/domain/${domainName}/option`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
