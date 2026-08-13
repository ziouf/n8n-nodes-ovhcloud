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
	];
}

/**
 * Executes the Update/add an AI Solutions job label operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/ai/job/{jobId}/label
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const jobId = this.getNodeParameter('jobId', _itemIndex ?? 0) as string;

	const body = this.getNodeParameter('body', _itemIndex ?? 0) as IDataObject;

	const client = getClient(this);
	const data = (await client.httpPut('cloud/project' + serviceName + '/ai/job/' + jobId + '/label', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
