/**
 * @brief Delete Dump operation for private database
 *
 * HTTP DELETE request to `/hosting/privateDatabase/{serviceName}/dump/{dumpId}` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

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
			displayName: 'Dump ID',
			name: 'dumpId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the dump to delete',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const dumpId = this.getNodeParameter('dumpId', 0) as string;
	const data = (await client.httpDelete(
		`/hosting/privateDatabase/${serviceName}/dump/${dumpId}`,
	)) as IDataObject;
	return [{ json: data }];
}
