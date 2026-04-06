import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for List Images operation.
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
			displayName: 'Flavor Type',
			name: 'flavorType',
			type: 'string',
			default: '',
			description: 'Filter images by flavor type',
			displayOptions,
		},
		{
			displayName: 'OS Type',
			name: 'osType',
			type: 'string',
			default: '',
			description: 'Filter images by OS type',
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'Filter images by region',
			displayOptions,
		},
	];
}

/**
 * Executes the List Images operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/image
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const flavorType = this.getNodeParameter('flavorType', 0, '') as string;
	const osType = this.getNodeParameter('osType', 0, '') as string;
	const region = this.getNodeParameter('region', 0, '') as string;

	const qs: IDataObject = {};
	if (flavorType) qs.flavorType = flavorType;
	if (osType) qs.osType = osType;
	if (region) qs.region = region;

	const data = (await client.httpGet(`/cloud/project/${serviceName}/image`, qs)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
