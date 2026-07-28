import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions = {} as IDisplayOptions): INodeProperties[] {
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
			displayName: 'Region Name',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name to query load balancer capabilities (e.g. GRA63)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Load Balancer Capability Details operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/reference/capabilities/loadBalancer/getByRegionName?region={region}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const region = (this.getNodeParameter('region', 0) || '') as string;

	if (!region) {
		throw new Error('Region name is required to get load balancer capabilities');
	}

	const data = (await client.httpGet(
		'/publicCloud/reference/capabilities/loadBalancer/getByRegionName',
		{ region },
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
