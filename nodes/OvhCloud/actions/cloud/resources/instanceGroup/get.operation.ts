import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Get Instance Group operation.
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
			displayName: 'Instance Group ID',
			name: 'instanceGroupId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the instance group',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Instance Group operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/instanceGroup/{instanceGroupId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const instanceGroupId = this.getNodeParameter('instanceGroupId', 0) as string;
	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/instanceGroup/${instanceGroupId}`,
	)) as IDataObject;
	return [{ json: data }];
}
