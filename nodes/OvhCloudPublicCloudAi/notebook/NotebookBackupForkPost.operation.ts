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
 * Executes the Starts a new AI Solutions notebook from a backup operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/ai/notebook/{notebookId}/backup/{backupId}/fork
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const notebookId = this.getNodeParameter('notebookId', _itemIndex ?? 0) as string;
	const backupId = this.getNodeParameter('backupId', _itemIndex ?? 0) as string;

	const body = this.getNodeParameter('body', _itemIndex ?? 0) as IDataObject;

	const client = getClient(this);
	const data = (await client.httpPost('cloud/project' + serviceName + '/ai/notebook/' + notebookId + '/backup/' + backupId + '/fork', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
