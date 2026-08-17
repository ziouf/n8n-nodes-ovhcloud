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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
			description: 'Log kind name',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Load Balancer Log Url Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/loadbalancer/${loadBalancerIdVal}/log/url
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
	const kindVal = (this.getNodeParameter('kind', _itemIndex ?? 0) || '') as string;
	if (kindVal !== '') {
		body.kind = kindVal;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/loadbalancer/${loadBalancerIdVal}/log/url`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
