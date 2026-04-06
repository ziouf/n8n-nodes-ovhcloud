import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for Create Storage Container operation.
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
			displayName: 'Storage ID',
			name: 'storageId',
			type: 'string',
			default: '',
			required: true,
			description: 'ID of the storage',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the container',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'Region for the container',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'options',
			options: [
				{ name: 'Classic', value: 'classic' },
				{ name: 'S3', value: 's3' },
			],
			default: 'classic',
			description: 'Type of the container',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Storage Container operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/storage/{storageId}/container
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const storageId = this.getNodeParameter('storageId', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const region = this.getNodeParameter('region', 0) as string;
	const type = this.getNodeParameter('type', 0, 'classic') as string;

	const body: IDataObject = { name, region, type };
	const data = (await client.httpPost(
		`/cloud/project/${serviceName}/storage/${storageId}/container`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
