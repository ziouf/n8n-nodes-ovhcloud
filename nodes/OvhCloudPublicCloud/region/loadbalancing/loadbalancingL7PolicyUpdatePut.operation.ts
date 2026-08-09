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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',

			description: 'New name',
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',

			description: 'New action',
			displayOptions,
		},
		{
			displayName: 'Listener ID',
			name: 'listenerId',
			type: 'string',
			default: '',

			description: 'New listener ID',
			displayOptions,
		},
		{
			displayName: 'Position',
			name: 'position',
			type: 'number',
			default: 0,

			description: 'New position',
			displayOptions,
		},
		{
			displayName: 'Redirect URL',
			name: 'redirectUrl',
			type: 'string',
			default: '',

			description: 'New redirect URL',
			displayOptions,
		},
		{
			displayName: 'Redirect Prefix',
			name: 'redirectPrefix',
			type: 'string',
			default: '',

			description: 'New redirect prefix',
			displayOptions,
		},
		{
			displayName: 'Redirect Pool ID',
			name: 'redirectPoolId',
			type: 'string',
			default: '',

			description: 'New redirect pool ID',
			displayOptions,
		},
		{
			displayName: 'Redirect HTTP Code',
			name: 'redirectHttpCode',
			type: 'number',
			default: 0,

			description: 'New HTTP redirect code',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',

			description: 'New description',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing L7 Policy Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/l7Policy/${l7PolicyIdVal}
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
	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const actionVal = (this.getNodeParameter('action', _itemIndex ?? 0) || '') as string;
	if (actionVal !== '') {
		body.action = actionVal;
	}
	const listenerIdVal = (this.getNodeParameter('listenerId', _itemIndex ?? 0) || '') as string;
	if (listenerIdVal !== '') {
		body.listenerId = listenerIdVal;
	}
	const positionNum = this.getNodeParameter('position', _itemIndex ?? 0) as number;
	if (positionNum !== undefined && positionNum !== 0) {
		body.position = positionNum;
	}
	const redirectUrlVal = (this.getNodeParameter('redirectUrl', _itemIndex ?? 0) || '') as string;
	if (redirectUrlVal !== '') {
		body.redirectUrl = redirectUrlVal;
	}
	const redirectPrefixVal = (this.getNodeParameter('redirectPrefix', _itemIndex ?? 0) || '') as string;
	if (redirectPrefixVal !== '') {
		body.redirectPrefix = redirectPrefixVal;
	}
	const redirectPoolIdVal = (this.getNodeParameter('redirectPoolId', _itemIndex ?? 0) || '') as string;
	if (redirectPoolIdVal !== '') {
		body.redirectPoolId = redirectPoolIdVal;
	}
	const redirectHttpCodeNum = this.getNodeParameter('redirectHttpCode', _itemIndex ?? 0) as number;
	if (redirectHttpCodeNum !== undefined && redirectHttpCodeNum !== 0) {
		body.redirectHttpCode = redirectHttpCodeNum;
	}
	const descriptionVal = (this.getNodeParameter('description', _itemIndex ?? 0) || '') as string;
	if (descriptionVal !== '') {
		body.description = descriptionVal;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/l7Policy/${l7PolicyIdVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
