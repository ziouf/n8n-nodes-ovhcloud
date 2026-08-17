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
			displayName: 'Member ID',
			name: 'memberId',
			type: 'string',
			default: '',
			required: true,
			description: 'The member UUID',
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
			displayName: 'Weight',
			name: 'weight',
			type: 'number',
			default: 0,

			description: 'New weight',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Pool Member Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/pool/${poolIdVal}/member/${memberIdVal}
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
	const memberIdVal = (this.getNodeParameter('memberId', _itemIndex ?? 0) || '') as string;
	if (memberIdVal !== '') {
		body.memberId = memberIdVal;
	}
	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const weightNum = this.getNodeParameter('weight', _itemIndex ?? 0) as number;
	if (weightNum !== undefined && weightNum !== 0) {
		body.weight = weightNum;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/pool/${poolIdVal}/member/${memberIdVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
