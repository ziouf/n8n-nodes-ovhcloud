import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * Description for Create Datacenter operation.
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
			displayName: 'Datacenter Name',
			name: 'datacenterName',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the datacenter',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the datacenter',
			displayOptions,
		},
		{
			displayName: 'Location',
			name: 'location',
			type: 'string',
			default: '',
			description: 'Location of the datacenter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Datacenter operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/datacenter
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const datacenterName = this.getNodeParameter('datacenterName', 0) as string;
	const description = this.getNodeParameter('description', 0, '') as string;
	const location = this.getNodeParameter('location', 0, '') as string;

	const body: IDataObject = { datacenterName };
	if (description) body.description = description;
	if (location) body.location = location;

	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/datacenter`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
