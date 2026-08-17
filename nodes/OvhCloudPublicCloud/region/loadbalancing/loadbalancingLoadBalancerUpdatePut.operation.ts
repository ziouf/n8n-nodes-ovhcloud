import { projectIdLocator } from '../../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...projectIdLocator(),
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
			displayName: 'Load Balancer ID',
			name: 'loadBalancerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The load balancer UUID',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',

			description: 'New name',
			displayOptions,
		},
		{
			displayName: 'Flavor ID',
			name: 'flavorId',
			type: 'string',
			default: '',

			description: 'New flavor ID',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',

			description: 'New description',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Load Balancer Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/loadbalancer/${loadBalancerIdVal}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const loadBalancerIdVal = (this.getNodeParameter('loadBalancerId', _itemIndex ?? 0) || '') as string;
	if (loadBalancerIdVal !== '') {
		body.loadBalancerId = loadBalancerIdVal;
	}
	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const flavorIdVal = (this.getNodeParameter('flavorId', _itemIndex ?? 0) || '') as string;
	if (flavorIdVal !== '') {
		body.flavorId = flavorIdVal;
	}
	const descriptionVal = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;
	if (descriptionVal !== '') {
		body.description = descriptionVal;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/loadbalancer/${loadBalancerIdVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
