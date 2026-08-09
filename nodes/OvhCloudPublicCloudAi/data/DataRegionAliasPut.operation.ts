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
			displayName: 'Alias',
			name: 'alias',
			type: 'string',
			default: '',
			required: true,
			description: 'The alias parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Update a datastore operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
	const alias = this.getNodeParameter('alias', _itemIndex ?? 0) as string;

	const body = this.getNodeParameter('body', _itemIndex ?? 0) as IDataObject;

	const client = new ApiClient(this);
	const data = (await client.httpPut('cloud/project' + serviceName + '/ai/data/region/' + region + '/alias/' + alias, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
