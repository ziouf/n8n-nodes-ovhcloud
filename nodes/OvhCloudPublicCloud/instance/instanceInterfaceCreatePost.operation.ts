import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Public Cloud Project',
			name: 'publicCloudProjectId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Public Cloud project ID (e.g. 12345678-1234-1234-1234-1234567890ab)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: '12345678-1234-1234-1234-1234567890ab',
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
			description: 'The UUID of the network to attach the interface to',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			description: 'The UUID of the subnet (optional)',
			displayOptions,
		},
		{
			displayName: 'IP Address',
			name: 'ipAddress',
			type: 'string',
			default: '',
			description: 'A specific IP address to assign (optional)',
			displayOptions,
		},
		{
			displayName: 'MAC Address',
			name: 'macAddress',
			type: 'string',
			default: '',
			description: 'A specific MAC address to use (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Instance Interface operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/instance/{instanceId}/interface
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const instanceId = this.getNodeParameter('instanceId', 0) as string;
	const networkId = (this.getNodeParameter('networkId', 0) || '') as string;

	const body: IDataObject = { networkId };

	const subnetId = (this.getNodeParameter('subnetId', 0) || '') as string;
	if (subnetId !== '') {
		body.subnetId = subnetId;
	}

	const ipAddress = (this.getNodeParameter('ipAddress', 0) || '') as string;
	if (ipAddress !== '') {
		body.ipAddress = ipAddress;
	}

	const macAddress = (this.getNodeParameter('macAddress', 0) || '') as string;
	if (macAddress !== '') {
		body.macAddress = macAddress;
	}

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/instance/${instanceId}/interface`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
