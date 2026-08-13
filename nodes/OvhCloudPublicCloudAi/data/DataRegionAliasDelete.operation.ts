import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
 * Executes the Permanently delete a datastore operation.
 *
 * HTTP method: DELETE
 * Endpoint: /cloud/project/{serviceName}/ai/data/region/{region}/alias/{alias}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
	const alias = this.getNodeParameter('alias', _itemIndex ?? 0) as string;

	const client = getClient(this);
	const data = (await client.httpDelete('cloud/project' + serviceName + '/ai/data/region/' + region + '/alias/' + alias)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
