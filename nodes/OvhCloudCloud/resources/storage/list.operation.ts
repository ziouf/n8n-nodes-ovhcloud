import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for List Storages operation.
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
			displayName: 'Include Type',
			name: 'includeType',
			type: 'options',
			options: [
				{ name: 'Classic', value: 'classic' },
				{ name: 'S3', value: 's3' },
			],
			default: 'classic',
			description: 'Filter storages by type',
			displayOptions,
		},
	];
}

/**
 * Executes the List Storages operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/storage
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const includeType = this.getNodeParameter('includeType', 0, 'classic') as string;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/storage`, {
		includeType,
	})) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
