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
			displayName: 'Member ID',
			name: 'memberId',
			type: 'string',
			default: '',
			required: true,
			description: 'The member UUID',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Pool Member Delete Delete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/pool/${poolIdVal}/member/${memberIdVal}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const poolIdVal = (this.getNodeParameter('poolId', 0) || '') as string;
		const memberIdVal = (this.getNodeParameter('memberId', 0) || '') as string;
		const data = (await client.httpDelete(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/pool/${poolIdVal}/member/${memberIdVal}`,
			)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
