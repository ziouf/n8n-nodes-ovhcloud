import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service ID',
			name: 'serviceId',
			type: 'string',
			default: '',
			required: true,
			description: 'CMS service ID',
			displayOptions,
		},
		{
			displayName: 'Website ID',
			name: 'websiteId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Get Get a website operation.
 *
 * HTTP method: GET
 * Endpoint: /managedCMS/resource/{serviceId}/website/{websiteId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', _itemIndex) as string;
	const websiteId = this.getNodeParameter('websiteId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/managedCMS/resource/' + serviceId + '/website/' + websiteId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
