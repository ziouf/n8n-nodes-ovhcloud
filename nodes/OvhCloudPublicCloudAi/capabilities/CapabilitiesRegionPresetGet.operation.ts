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
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			description: 'Filter on type of preset image',
			displayOptions,
		},
	];
}

/**
 * Executes the List Presets operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/capabilities/region/{region}/preset
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const region = this.getNodeParameter('region', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;

	const qs: Record<string, string> = {};
	if (type) qs.type = type;

	const client = new ApiClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/capabilities/region/' + region + '/preset', qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
