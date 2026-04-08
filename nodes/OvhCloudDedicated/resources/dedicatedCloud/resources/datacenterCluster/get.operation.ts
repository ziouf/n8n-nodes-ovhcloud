import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * Description for Get Datacenter Cluster operation.
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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the cluster',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Datacenter Cluster operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter/{datacenterId}/cluster/{clusterId}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const datacenterId = this.getNodeParameter('datacenterId', 0) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/datacenter/${datacenterId}/cluster/${clusterId}`,
	)) as IDataObject;
	return [{ json: data }];
}
