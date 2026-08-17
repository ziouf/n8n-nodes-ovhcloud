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
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,

			description: 'Max number of results to return',
			displayOptions,
		},
		{
			displayName: 'Marker',
			name: 'marker',
			type: 'string',
			default: '',

			description: 'Pagination marker',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',

			description: 'Filter by subnet ID',
			displayOptions,
		},
		{
			displayName: 'With Subnets',
			name: 'withSubnets',
			type: 'boolean',
			default: false,

			description: 'Whether to include subnet information',
			displayOptions,
		},
	];
}

/**
 * Executes the gateway List Get operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/gateway
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const qs = {} as IDataObject;
	const limitVal = Number(this.getNodeParameter('limit', _itemIndex ?? 0)) as number;
	if (limitVal > 0) {
		qs.limit = limitVal;
	}
	const markerVal = this.getNodeParameter('marker', _itemIndex ?? 0) as string;
	if (markerVal !== '') {
		qs.marker = markerVal;
	}
	const subnetIdVal = this.getNodeParameter('subnetId', _itemIndex ?? 0) as string;
	if (subnetIdVal !== '') {
		qs.subnetId = subnetIdVal;
	}
	if (this.getNodeParameter('withSubnets', _itemIndex ?? 0) as boolean) {
		qs.withSubnets = true;
	}

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/region/${regionName}/gateway`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
