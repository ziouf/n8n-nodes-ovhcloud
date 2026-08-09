import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

// ============================================================
// GET /adminCredentials - Get current admin credentials
// ============================================================

export function descriptionGet(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Rancher Service ID',
			name: 'rancherServiceId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Rancher service UUID (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudRancherServices' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Get Rancher Admin Credentials operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/{projectId}/rancher/{rancherId}/adminCredentials
 */
export async function executeGet(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const rancherServiceId = this.getNodeParameter('rancherServiceId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/rancher/${rancherServiceId}/adminCredentials`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}

// ============================================================
// POST /adminCredentials - Reset admin password
// ============================================================

export function descriptionPost(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Rancher Service ID',
			name: 'rancherServiceId',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The Rancher service UUID (e.g. a1b2c3d4-e5f6-7890-abcd-ef1234567890)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getPublicCloudRancherServices' },
				},
				{
					displayName: 'By ID',
					name: 'name',
					type: 'string',
					placeholder: 'a1b2c3d4-e5f6-7890-abcd-ef1234567890',
				},
			],
			displayOptions,
		},
	];
}

/**
 * Executes the Reset Rancher Admin Credentials operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/rancher/{rancherId}/adminCredentials
 */
export async function executePost(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const rancherServiceId = this.getNodeParameter('rancherServiceId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;

	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/rancher/${rancherServiceId}/adminCredentials`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
