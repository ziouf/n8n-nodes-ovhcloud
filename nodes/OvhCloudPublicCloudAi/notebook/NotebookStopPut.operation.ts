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
			displayName: 'Notebook ID',
			name: 'notebookId',
			type: 'string',
			default: '',
			required: true,
			description: 'The notebookId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Stop an AI Solutions notebook operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/ai/notebook/{notebookId}/stop
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const notebookId = this.getNodeParameter('notebookId', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPut('cloud/project' + serviceName + '/ai/notebook/' + notebookId + '/stop')) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
