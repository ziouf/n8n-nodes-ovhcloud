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
	];
}

/**
 * Executes the Update several parts of an app's spec operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/ai/app/{appId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const appId = this.getNodeParameter('appId', 0) as string;

	const body = this.getNodeParameter("body", 0) as IDataObject;

	const client = new ApiClient(this);
	const data = (await client.httpPut('cloud/project' + serviceName + '/ai/app/' + appId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
