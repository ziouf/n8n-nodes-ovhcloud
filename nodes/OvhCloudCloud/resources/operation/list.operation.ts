import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for List Operations operation.
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'str', value: '' },
			required: true,
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
					placeholder: 'Enter the service name',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select from the list',
					typeOptions: {
						searchListMethod: 'getCloudServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			description: 'Filter operations by instance ID',
			displayOptions,
		},
	];
}

/**
 * Executes the List Operations operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const instanceId = this.getNodeParameter('instanceId', 0, '') as string;

	const qs: IDataObject = {};
	if (instanceId) qs.instanceId = instanceId;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/operation`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
