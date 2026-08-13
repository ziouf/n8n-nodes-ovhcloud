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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Human-readable name',
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'string',
			default: '',
			required: true,
			description: 'Action (REDIRECT_TO_URL, REDIRECT_TO_PREFIX, REDIRECT_TO_POOL, REJECT)',
			displayOptions,
		},
		{
			displayName: 'Listener ID',
			name: 'listenerId',
			type: 'string',
			default: '',
			required: true,
			description: 'The listener UUID',
			displayOptions,
		},
		{
			displayName: 'Position',
			name: 'position',
			type: 'number',
			default: 0,

			description: 'Position on the listener (starts at 1)',
			displayOptions,
		},
		{
			displayName: 'Redirect URL',
			name: 'redirectUrl',
			type: 'string',
			default: '',

			description: 'URL for REDIRECT_TO_URL action',
			displayOptions,
		},
		{
			displayName: 'Redirect Prefix',
			name: 'redirectPrefix',
			type: 'string',
			default: '',

			description: 'Prefix for REDIRECT_TO_PREFIX action',
			displayOptions,
		},
		{
			displayName: 'Redirect Pool ID',
			name: 'redirectPoolId',
			type: 'string',
			default: '',

			description: 'Pool ID for REDIRECT_TO_POOL action',
			displayOptions,
		},
		{
			displayName: 'Redirect HTTP Code',
			name: 'redirectHttpCode',
			type: 'number',
			default: 0,

			description: 'HTTP redirect code',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',

			description: 'Human-readable description',
			displayOptions,
		},
	];
}

/**
 * Executes the loadbalancing L7 Policy Create Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/loadbalancing/l7Policy
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

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
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/loadbalancing/l7Policy`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
