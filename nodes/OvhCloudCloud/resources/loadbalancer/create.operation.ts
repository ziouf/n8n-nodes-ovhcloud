import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create Load Balancer operation.
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the load balancer',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'Region for the load balancer',
			displayOptions,
		},
		{
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			description: 'ID of the network',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			description: 'ID of the subnet',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Load Balancer operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/loadbalancer
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const region = this.getNodeParameter('region', 0) as string;
	const networkId = this.getNodeParameter('networkId', 0, '') as string;
	const subnetId = this.getNodeParameter('subnetId', 0, '') as string;

	const body: IDataObject = { name, region };
	if (networkId) body.networkId = networkId;
	if (subnetId) body.subnetId = subnetId;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/loadbalancer`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
