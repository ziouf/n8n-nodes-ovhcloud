import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Get Instance Interface operation.
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
			required: true,
			description: 'ID of the instance',
			displayOptions,
		},
		{
			displayName: 'Interface ID',
			name: 'interfaceId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the interface',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Instance Interface operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/instance/{instanceId}/interface/{interfaceId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const interfaceId = this.getNodeParameter('interfaceId', 0) as string;
	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/instance/${instanceId}/interface/${interfaceId}`,
	)) as IDataObject;
	return [{ json: data }];
}
