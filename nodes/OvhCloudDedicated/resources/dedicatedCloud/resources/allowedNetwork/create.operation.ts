import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../shared/transport/ApiClient';

/**
 * Description for Create Allowed Network operation.
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
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'IP address to allow',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description of the allowed network',
			displayOptions,
		},
		{
			displayName: 'Service',
			name: 'service',
			type: 'string',
			default: '',
			description: 'Service associated with the allowed network',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Allowed Network operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicatedCloud/{serviceName}/allowedNetwork
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const description = this.getNodeParameter('description', 0, '') as string;
	const service = this.getNodeParameter('service', 0, '') as string;

	const body: IDataObject = { ip };
	if (description) body.description = description;
	if (service) body.service = service;

	const data = (await client.httpPost(
		`/dedicatedCloud/${serviceName}/allowedNetwork`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
