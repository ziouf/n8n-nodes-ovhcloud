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
			displayName: 'Job ID',
			name: 'jobId',
			type: 'string',
			default: '',
			required: true,
			description: 'The jobId parameter',
			displayOptions,
		},
		{
			displayName: 'Force',
			name: 'force',
			type: 'string',
			default: '',
			description: 'Force job deletion by killing it if at a running state',
			displayOptions,
		},
	];
}

/**
 * Executes the Permanently delete a job operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/ai/job/{jobId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const jobId = this.getNodeParameter('jobId', 0) as string;
	const force = this.getNodeParameter('force', 0) as string;

	const qs: Record<string, string> = {};
	if (force) qs.force = force;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('cloud/project' + serviceName + '/ai/job/' + jobId, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
