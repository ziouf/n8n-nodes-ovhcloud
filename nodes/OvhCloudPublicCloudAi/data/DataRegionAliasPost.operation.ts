import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions = {} as IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The OVHcloud service name',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudProjects' },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Region',
			name: 'region',
			type: 'string',
			default: '',
			required: true,
			description: 'The region parameter',
			displayOptions,
		},
		{
			displayName: 'Skip Data Store Connection Check',
			name: 'skipDataStoreConnectionCheck',
			type: 'string',
			default: '',
			description: 'If set to true, it will skip the data store connection check',
			displayOptions,
		},
	];
}

/**
 * Executes the Create a new datastore operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{serviceName}/ai/data/region/{region}/alias
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
	const skipDataStoreConnectionCheck = this.getNodeParameter('skipDataStoreConnectionCheck', _itemIndex ?? 0) as string;

	const qs: Record<string, string> = {};
	if (skipDataStoreConnectionCheck) qs.skipDataStoreConnectionCheck = skipDataStoreConnectionCheck;

	const body = this.getNodeParameter('body', _itemIndex ?? 0) as IDataObject;

	const client = new ApiClient(this);
	const data = (await client.httpPost('cloud/project' + serviceName + '/ai/data/region/' + region + '/alias', body, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
