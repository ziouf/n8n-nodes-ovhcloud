import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
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
			description: 'The serviceName identifier',
			displayOptions,
		},
		{
			displayName: 'Iam Tags',
			name: 'iamTags',
			type: 'json',
			default: '',
			description: 'Filter resources on IAM tags',
			displayOptions,
		},
		{
			displayName: 'Title Pattern',
			name: 'titlePattern',
			type: 'string',
			default: '',
			description: 'Filter by title (like)',
			displayOptions,
		},
	];
}

/**
 * Executes the GET outputGraylogDashboardListGet operation.
 *
 * HTTP method: GET
 * Endpoint: /dbaas/logs/{serviceName}/output/graylog/dashboard
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	const iamTags = (this.getNodeParameter('iamTags', _itemIndex, '') as string) || '';
	if (iamTags) {
		qs.iamTags = JSON.parse(iamTags);
	}
	const titlePattern = (this.getNodeParameter('titlePattern', _itemIndex, '') as string) || '';
	if (titlePattern) {
		qs.titlePattern = titlePattern;
	}
	const client = new ApiClient(this);
	const data = (await client.httpGet(`/dbaas/logs/${encodeURIComponent(serviceName)}/output/graylog/dashboard`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
