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
			displayName: 'Flavor ID',
			name: 'flavorId',
			type: 'string',
			default: '',
			required: true,
			description: 'The flavor UUID',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing Flavor Get Get operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/flavor/${flavorIdVal}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const flavorIdVal = this.getNodeParameter('flavorId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/flavor/${flavorIdVal}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
