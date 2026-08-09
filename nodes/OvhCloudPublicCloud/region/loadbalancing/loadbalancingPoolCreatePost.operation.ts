import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

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
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the pool',
			displayOptions,
		},
		{
			displayName: 'Protocol',
			name: 'protocol',
			type: 'string',
			default: '',
			required: true,
			description: 'Protocol (TCP, HTTP, HTTPS)',
			displayOptions,
		},
		{
			displayName: 'Load Balancer ID',
			name: 'loadbalancerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The load balancer UUID',
			displayOptions,
		},
		{
			displayName: 'Algorithm',
			name: 'algorithm',
			type: 'string',
			default: '',

			description: 'Load balancing algorithm (ROUND_ROBIN, LEAST_CONNECTIONS, etc.)',
			displayOptions,
		},
		{
			displayName: 'Listener ID',
			name: 'listenerId',
			type: 'string',
			default: '',

			description: 'The listener UUID',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Pool Create Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/pool
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const protocolVal = (this.getNodeParameter('protocol', _itemIndex ?? 0) || '') as string;
	if (protocolVal !== '') {
		body.protocol = protocolVal;
	}
	const loadbalancerIdVal = (this.getNodeParameter('loadbalancerId', _itemIndex ?? 0) || '') as string;
	if (loadbalancerIdVal !== '') {
		body.loadbalancerId = loadbalancerIdVal;
	}
	const algorithmVal = (this.getNodeParameter('algorithm', _itemIndex ?? 0) || '') as string;
	if (algorithmVal !== '') {
		body.algorithm = algorithmVal;
	}
	const listenerIdVal = (this.getNodeParameter('listenerId', _itemIndex ?? 0) || '') as string;
	if (listenerIdVal !== '') {
		body.listenerId = listenerIdVal;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/pool`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
