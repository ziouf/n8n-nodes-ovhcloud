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
		{
			displayName: 'website Id',
			name: 'websiteId',
			type: 'string',
			default: '',
			required: true,
			description: 'The websiteId identifier',
		},

	];
}

/**
 * Executes the Post Reset password of the website\'s database operation.
 *
 * HTTP method: POST
 * Endpoint: /managedCMS/resource/{serviceId}/website/{websiteId}/resetDatabasePassword
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceId = this.getNodeParameter('serviceId', itemIndex) as string;
	const websiteId = this.getNodeParameter('websiteId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpPost('/managedCMS/resource/' + serviceId + '/website/' + websiteId + '/resetDatabasePassword')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
