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
		{
			displayName: 'Rule Type',
			name: 'ruleType',
			type: 'string',
			default: '',

			description: 'New rule type',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',

			description: 'New value',
			displayOptions,
		},
		{
			displayName: 'Compare Type',
			name: 'compareType',
			type: 'string',
			default: '',

			description: 'New comparison type',
			displayOptions,
		},
		{
			displayName: 'Invert',
			name: 'invert',
			type: 'boolean',
			default: false,

			description: 'Whether to invert the rule logic',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',

			description: 'New key for COOKIE or HEADER rules',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing L7 Policy L7 Rule Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/l7Policy/${l7PolicyIdVal}/l7Rule/${l7RuleIdVal}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const l7PolicyIdVal = (this.getNodeParameter('l7PolicyId', _itemIndex ?? 0) || '') as string;
	if (l7PolicyIdVal !== '') {
		body.l7PolicyId = l7PolicyIdVal;
	}
	const l7RuleIdVal = (this.getNodeParameter('l7RuleId', _itemIndex ?? 0) || '') as string;
	if (l7RuleIdVal !== '') {
		body.l7RuleId = l7RuleIdVal;
	}
	const ruleTypeVal = (this.getNodeParameter('ruleType', _itemIndex ?? 0) || '') as string;
	if (ruleTypeVal !== '') {
		body.ruleType = ruleTypeVal;
	}
	const valueVal = (this.getNodeParameter('value', _itemIndex ?? 0) || '') as string;
	if (valueVal !== '') {
		body.value = valueVal;
	}
	const compareTypeVal = (this.getNodeParameter('compareType', _itemIndex ?? 0) || '') as string;
	if (compareTypeVal !== '') {
		body.compareType = compareTypeVal;
	}
	const invertBool = this.getNodeParameter('invert', _itemIndex ?? 0) as boolean;
	body.invert = invertBool;
	const keyVal = (this.getNodeParameter('key', _itemIndex ?? 0) || '') as string;
	if (keyVal !== '') {
		body.key = keyVal;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/l7Policy/${l7PolicyIdVal}/l7Rule/${l7RuleIdVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
