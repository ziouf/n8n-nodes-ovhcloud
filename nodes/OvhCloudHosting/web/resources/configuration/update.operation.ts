/**
 * @brief Update Configuration operation for web hosting
 *
 * HTTP POST request to `/hosting/web/{serviceName}/configuration` endpoint.
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
			displayName: 'Configuration Name',
			name: 'configurationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the configuration',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			required: true,
			description: 'The configuration value',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const configurationName = this.getNodeParameter('configurationName', 0) as string;
	const value = this.getNodeParameter('value', 0) as string;
	const data = (await client.httpPost(
		`/hosting/web/${serviceName}/configuration`,
		{ body: { configurationName, value } },
	)) as IDataObject;
	return [{ json: data }];
}
