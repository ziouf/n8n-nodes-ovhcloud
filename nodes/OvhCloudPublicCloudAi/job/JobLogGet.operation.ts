import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions = {} as IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The OVHcloud service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Job ID',
			name: 'jobId',
			type: 'string',
			default: '',
			required: true,
			description: 'The jobId parameter',
			displayOptions,
		},
		{
			displayName: 'Page',
			name: 'page',
			type: 'string',
			default: '',
			description: 'Page of the result set',
			displayOptions,
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'string',
			default: '',
			description: 'Size of the result set',
			displayOptions,
		},
	];
}

/**
 * Executes the Get the logs of a job operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/job/{jobId}/log
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const jobId = this.getNodeParameter('jobId', _itemIndex ?? 0) as string;
	const page = this.getNodeParameter('page', _itemIndex ?? 0) as string;
	const size = this.getNodeParameter('size', _itemIndex ?? 0) as string;

	const qs: Record<string, string> = {};
	if (page) qs.page = page;
	if (size) qs.size = size;

	const client = getClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/job/' + jobId + '/log', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
