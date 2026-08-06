import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Load Balancer ID',
			name: 'loadBalancerId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Backends',
			name: 'backends',
			type: 'json',
			typeOptions: {
				allowValues: true,
			},
			default: '[]',
			description: 'List of backends for the configuration',
			displayOptions,
		},
		{
			displayName: 'Frontends',
			name: 'frontends',
			type: 'json',
			typeOptions: {
				allowValues: true,
			},
			default: '[]',
			description: 'List of frontends for the configuration',
			displayOptions,
		},
		{
			displayName: 'Certificates',
			name: 'certificates',
			type: 'json',
			typeOptions: {
				allowValues: true,
			},
			default: '[]',
			description: 'List of certificate IDs',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Load Balancer Configuration operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/loadbalancer/{loadBalancerId}/configuration
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const loadBalancerId = this.getNodeParameter('loadBalancerId', 0) as string;

	const body: IDataObject = {};
	const backends = this.getNodeParameter('backends', 0) as IDataObject;
	if (backends) body['backends'] = backends;

	const frontends = this.getNodeParameter('frontends', 0) as IDataObject;
	if (frontends) body['frontends'] = frontends;

	const certificates = this.getNodeParameter('certificates', 0) as IDataObject;
	if (certificates) body['certificates'] = certificates;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/loadbalancer/${loadBalancerId}/configuration`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
