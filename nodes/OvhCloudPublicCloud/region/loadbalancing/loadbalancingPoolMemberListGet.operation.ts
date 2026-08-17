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
	];
}

/**
 * Executes the loadbalancing Pool Member List Get operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/pool/${poolIdVal}/member
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const qs = {} as IDataObject;
	const poolIdVal = this.getNodeParameter('poolId', _itemIndex ?? 0) as string;
	if (poolIdVal !== '') {
		qs.poolId = poolIdVal;
	}

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/pool/${poolIdVal}/member`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
