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
			displayName: 'service Id',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The serviceId identifier',
		},

	];
}

/**
 * Executes the Post Flush CDN for all websites of the service operation.
 *
 * HTTP method: POST
 * Endpoint: /managedCMS/resource/{serviceId}/flushCDN
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpPost('/managedCMS/resource/' + serviceId + '/flushCDN')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
