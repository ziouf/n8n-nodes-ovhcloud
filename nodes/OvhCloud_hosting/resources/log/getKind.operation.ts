/**
 * @brief Get Log Kind operation for private database
 *
 * HTTP GET request to `/hosting/privateDatabase/{serviceName}/log/kind/{name}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
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
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'Kind Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the log kind',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const data = (await client.httpGet(
		`/hosting/privateDatabase/${serviceName}/log/kind/${name}`,
	)) as IDataObject;
	return [{ json: data }];
}
