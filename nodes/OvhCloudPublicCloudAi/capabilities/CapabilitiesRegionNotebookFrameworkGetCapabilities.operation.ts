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
			displayName: 'Framework ID',
			name: 'frameworkId',
			type: 'string',
			default: '',
			required: true,
			description: 'The frameworkId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Get an AI Solutions Notebook framework operation.
 *
 * HTTP method: GET
 * Endpoint: /cloud/project/{serviceName}/ai/capabilities/region/{region}/notebook/framework/{frameworkId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0) as string;
	const region = this.getNodeParameter('region', _itemIndex ?? 0) as string;
	const frameworkId = this.getNodeParameter('frameworkId', _itemIndex ?? 0) as string;

	const client = getClient(this);
	const data = (await client.httpGet('cloud/project' + serviceName + '/ai/capabilities/region/' + region + '/notebook/framework/' + frameworkId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
