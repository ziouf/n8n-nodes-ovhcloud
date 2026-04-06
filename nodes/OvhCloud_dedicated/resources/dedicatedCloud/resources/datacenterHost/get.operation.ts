import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * Description for Get Datacenter Host operation.
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
						searchListMethod: 'getDedicatedCloudServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the datacenter',
			displayOptions,
		},
		{
			displayName: 'Host ID',
			name: 'hostId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the host',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Datacenter Host operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/host/{hostId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const datacenterId = this.getNodeParameter('datacenterId', 0) as string;
	const hostId = this.getNodeParameter('hostId', 0) as string;
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/host/${hostId}`,
	)) as IDataObject;
	return [{ json: data }];
}
