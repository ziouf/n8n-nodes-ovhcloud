/**
 * @brief Create Website operation for web hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/website` endpoint.
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the website',
			displayOptions,
		},
		{
			displayName: 'Alias',
			name: 'alias',
			type: 'string',
			default: '',
			description: 'Alias for the website',
			displayOptions,
		},
		{
			displayName: 'SSL',
			name: 'ssl',
			type: 'boolean',
			default: false,
			description: 'Whether to enable SSL for the website',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const alias = this.getNodeParameter('alias', 0, '') as string;
	const ssl = this.getNodeParameter('ssl', 0, false) as boolean;

	const body: IDataObject = { name };
	if (alias) body.alias = alias;
	body.ssl = ssl;

	const data = (await client.httpPost(`/hosting/web/${serviceName}/website`, {
		body,
	})) as IDataObject;
	return [{ json: data }];
}
