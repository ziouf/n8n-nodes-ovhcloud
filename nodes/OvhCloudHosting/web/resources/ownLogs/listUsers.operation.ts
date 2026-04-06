/**
 * @brief List Own Logs Users operation for web hosting
 *
 * HTTP GET request to `/hosting/web/{serviceName}/ownLogs/{id}/userLogs` endpoint.
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
			displayName: 'Own Logs ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the own logs',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpGet(
		`/hosting/web/${serviceName}/ownLogs/${id}/userLogs`,
	)) as IDataObject[];
	return data.map((item) => ({ json: item }));
}
