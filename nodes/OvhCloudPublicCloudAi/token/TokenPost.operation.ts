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
	];
}

/**
 * Executes the Create a new application token operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/ai/token
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;

	const body = this.getNodeParameter("body", 0) as IDataObject;

	const client = new ApiClient(this);
	const data = (await client.httpPost('cloud/project' + serviceName + '/ai/token', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
