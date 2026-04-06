/**
 * @brief Delete Website operation for web hosting
 *
 * HTTP DELETE request to `/hosting/web/{serviceName}/website/{id}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../transport/ApiClient';

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
			displayName: 'Website ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the website to delete',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const id = this.getNodeParameter('id', 0) as string;
	const data = (await client.httpDelete(
		`/hosting/web/${serviceName}/website/${id}`,
	)) as IDataObject;
	return [{ json: data }];
}
