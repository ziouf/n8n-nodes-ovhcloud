import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Create SSH Key operation.
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
			description: 'Name of the SSH key',
			displayOptions,
		},
		{
			displayName: 'Public Key',
			name: 'publicKey',
			type: 'string',
			default: '',
			required: true,
			description: 'SSH public key content',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'Region for the SSH key',
			displayOptions,
		},
	];
}

/**
 * Executes the Create SSH Key operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/sshkey
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const publicKey = this.getNodeParameter('publicKey', 0) as string;
	const region = this.getNodeParameter('region', 0, '') as string;

	const body: IDataObject = { name, publicKey };
	if (region) body.region = region;

	const data = (await client.httpPost(`/cloud/project/${serviceName}/sshkey`, body)) as IDataObject;
	return [{ json: data }];
}
