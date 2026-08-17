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
			displayName: 'L7 Policy ID',
			name: 'l7PolicyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The L7 policy UUID',
			displayOptions,
		},
		{
			displayName: 'L7 Rule ID',
			name: 'l7RuleId',
			type: 'string',
			default: '',
			required: true,
			description: 'The L7 rule UUID',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing L7 Policy L7 Rule Get Get operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/l7Policy/${l7PolicyIdVal}/l7Rule/${l7RuleIdVal}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const l7PolicyIdVal = this.getNodeParameter('l7PolicyId', _itemIndex ?? 0) as string;
	const l7RuleIdVal = this.getNodeParameter('l7RuleId', _itemIndex ?? 0) as string;
	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/l7Policy/${l7PolicyIdVal}/l7Rule/${l7RuleIdVal}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
