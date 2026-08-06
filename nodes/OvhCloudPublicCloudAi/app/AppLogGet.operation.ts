import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'App ID',
			name: 'appId',
			type: 'string',
			default: '',
			required: true,
			description: 'The appId parameter',
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
			displayName: 'Replica',
			name: 'replica',
			type: 'string',
			default: '',
			description: 'Only show logs from this replica',
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
 * Executes the Get the logs of an app operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/app/{appId}/log
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const appId = this.getNodeParameter('appId', 0) as string;
	const page = this.getNodeParameter('page', 0) as string;
	const replica = this.getNodeParameter('replica', 0) as string;
	const size = this.getNodeParameter('size', 0) as string;

	const qs: Record<string, string> = {};
	if (page) qs.page = page;
	if (replica) qs.replica = replica;
	if (size) qs.size = size;

	const client = new ApiClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/app/' + appId + '/log', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
