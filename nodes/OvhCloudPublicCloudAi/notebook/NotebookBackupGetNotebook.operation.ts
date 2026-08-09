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
		{
			displayName: 'Backup ID',
			name: 'backupId',
			type: 'string',
			default: '',
			required: true,
			description: 'The backupId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Get details for a single AI Solutions notebook backup operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const notebookId = this.getNodeParameter('notebookId', _itemIndex ?? 0) as string;
	const backupId = this.getNodeParameter('backupId', _itemIndex ?? 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/notebook/' + notebookId + '/backup/' + backupId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
