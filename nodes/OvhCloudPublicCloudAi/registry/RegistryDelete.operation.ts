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
			displayName: 'Registry ID',
			name: 'registryId',
			type: 'string',
			default: '',
			required: true,
			description: 'The registryId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete a Docker registry operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/ai/registry/{registryId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const registryId = this.getNodeParameter('registryId', 0) as string;

	const client = new ApiClient(this);
	const data = (await client.httpDelete('cloud/project' + serviceName + '/ai/registry/' + registryId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
