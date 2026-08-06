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
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const qs = {} as IDataObject;
	const limitVal = Number(this.getNodeParameter('limit', 0)) as number;
	if (limitVal > 0) {
		qs.limit = limitVal;
	}
	const markerVal = this.getNodeParameter('marker', 0) as string;
	if (markerVal !== '') {
		qs.marker = markerVal;
	}
	const subnetIdVal = this.getNodeParameter('subnetId', 0) as string;
	if (subnetIdVal !== '') {
		qs.subnetId = subnetIdVal;
	}
	if (this.getNodeParameter('withSubnets', 0) as boolean) {
		qs.withSubnets = true;
	}

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/region/${regionName}/gateway`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
