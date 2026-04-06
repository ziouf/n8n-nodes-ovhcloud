import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Description for Create Network operation.
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
			description: 'Name of the network',
			displayOptions,
		},
		{
			displayName: 'Regions',
			name: 'regions',
			type: 'string',
			default: '',
			required: true,
			description: 'Comma-separated list of regions',
			displayOptions,
		},
		{
			displayName: 'VLAN ID',
			name: 'vlanId',
			type: 'number',
			default: undefined,
			description: 'VLAN ID for the network',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Network operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/network
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const regionsStr = this.getNodeParameter('regions', 0) as string;
	const vlanId = this.getNodeParameter('vlanId', 0, undefined) as number | undefined;

	const regions = regionsStr.split(',').map((r) => r.trim());
	const body: IDataObject = { name, regions };
	if (vlanId !== undefined) body.vlanId = vlanId;

	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/network`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
