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
			displayName: 'Pool ID',
			name: 'poolId',
			type: 'string',
			default: '',
			required: true,
			description: 'The pool UUID',
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
			displayName: 'Algorithm',
			name: 'algorithm',
			type: 'string',
			default: '',

			description: 'New algorithm',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Pool Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/pool/${poolIdVal}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const poolIdVal = (this.getNodeParameter('poolId', 0) || '') as string;
	if (poolIdVal !== '') {
		body.poolId = poolIdVal;
	}
	const nameVal = (this.getNodeParameter('name', 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const algorithmVal = (this.getNodeParameter('algorithm', 0) || '') as string;
	if (algorithmVal !== '') {
		body.algorithm = algorithmVal;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/pool/${poolIdVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
