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
			displayName: 'Pool ID',
			name: 'poolId',
			type: 'string',
			default: '',
			required: true,
			description: 'The pool UUID',
			displayOptions,
		},
		{
			displayName: 'Members (JSON)',
			name: 'members',
			type: 'string',
			default: '',
			required: true,
			description: 'JSON array of members [{"address": "10.0.0.1", "port": 8080, "name": "member1", "weight": 1}]',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Pool Member Create Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/pool/${poolIdVal}/member
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const poolIdVal = (this.getNodeParameter('poolId', _itemIndex ?? 0) || '') as string;
	if (poolIdVal !== '') {
		body.poolId = poolIdVal;
	}
	const membersVal = (this.getNodeParameter('members', _itemIndex ?? 0) || '') as string;
	if (membersVal !== '') {
		body.members = membersVal;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/pool/${poolIdVal}/member`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
