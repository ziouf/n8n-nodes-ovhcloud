import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
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
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the tag',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Tag operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/tag/{name}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const name = this.getNodeParameter('name', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/tag/${name}`)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
