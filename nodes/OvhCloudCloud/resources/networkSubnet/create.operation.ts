import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create Network Subnet operation.
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
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the network',
			displayOptions,
		},
		{
			displayName: 'CIDR',
			name: 'cidr',
			type: 'string',
			default: '',
			required: true,
			description: 'CIDR notation for the subnet',
			displayOptions,
		},
		{
			displayName: 'DHCP',
			name: 'dhcp',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether to enable DHCP',
			displayOptions,
		},
		{
			displayName: 'Enable Gateway IP',
			name: 'enableGatewayIp',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether to enable gateway IP',
			displayOptions,
		},
		{
			displayName: 'IP Version',
			name: 'ipVersion',
			type: 'number',
			default: 4,
			required: true,
			description: 'IP version (4 or 6)',
			displayOptions,
		},
		{
			displayName: 'No Gateway',
			name: 'noGateway',
			type: 'boolean',
			default: false,
			description: 'Whether to disable gateway',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'Region for the subnet',
			displayOptions,
		},
		{
			displayName: 'Start',
			name: 'start',
			type: 'string',
			default: '',
			description: 'Start IP for DHCP pool',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Network Subnet operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/network/{networkId}/subnet
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const networkId = this.getNodeParameter('networkId', 0) as string;
	const cidr = this.getNodeParameter('cidr', 0) as string;
	const dhcp = this.getNodeParameter('dhcp', 0) as boolean;
	const enableGatewayIp = this.getNodeParameter('enableGatewayIp', 0) as boolean;
	const ipVersion = this.getNodeParameter('ipVersion', 0) as number;
	const noGateway = this.getNodeParameter('noGateway', 0, false) as boolean;
	const region = this.getNodeParameter('region', 0) as string;
	const start = this.getNodeParameter('start', 0, '') as string;

	const body: IDataObject = { cidr, dhcp, enableGatewayIp, ipVersion, region };
	if (noGateway) body.noGateway = noGateway;
	if (start) body.start = start;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/network/${networkId}/subnet`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
