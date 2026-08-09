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
			displayName: 'Force',
			name: 'force',
			type: 'string',
			default: '',
			description: 'Force app deletion by killing it if at a running state',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete an app operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/ai/app/{appId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const appId = this.getNodeParameter('appId', _itemIndex ?? 0) as string;
	const force = this.getNodeParameter('force', _itemIndex ?? 0) as string;

	const qs: Record<string, string> = {};
	if (force) qs.force = force;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('cloud/project' + serviceName + '/ai/app/' + appId, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
