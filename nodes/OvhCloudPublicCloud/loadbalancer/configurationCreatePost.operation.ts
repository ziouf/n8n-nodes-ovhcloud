import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const loadBalancerId = this.getNodeParameter('loadBalancerId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	const backends = this.getNodeParameter('backends', _itemIndex ?? 0) as IDataObject;
	if (backends) body['backends'] = backends;

	const frontends = this.getNodeParameter('frontends', _itemIndex ?? 0) as IDataObject;
	if (frontends) body['frontends'] = frontends;

	const certificates = this.getNodeParameter('certificates', _itemIndex ?? 0) as IDataObject;
	if (certificates) body['certificates'] = certificates;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/loadbalancer/${loadBalancerId}/configuration`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
