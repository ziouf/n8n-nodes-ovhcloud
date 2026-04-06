import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Description for List IP Failovers operation.
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
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			description: 'Filter IP failovers by region',
			displayOptions,
		},
	];
}

/**
 * Executes the List IP Failovers operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ip/failover
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const region = this.getNodeParameter('region', 0, '') as string;

	const qs: IDataObject = {};
	if (region) qs.region = region;

	const data = (await client.httpGet(
		`/cloud/project/${serviceName}/ip/failover`,
		qs,
	)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
