import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Get Get a service operation.
 *
 * HTTP method: GET
 * Endpoint: /managedCMS/resource/{serviceId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/managedCMS/resource/' + serviceId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
