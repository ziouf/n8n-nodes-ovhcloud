import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Failover IP ID',
			name: 'failoverIpId',
			type: 'string',
			default: '',
			required: true,
			description: 'The failover IP identifier',
			displayOptions,
		},
		{
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The instance ID to attach the failover IP to',
			displayOptions,
		},
	];
}

/**
 * Executes the Attach Failover IP operation.
 *
 * HTTP method: POST
 * Endpoint: /cloud/project/{projectId}/ip/failover/{id}/attach
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const failoverIpId = this.getNodeParameter('failoverIpId', _itemIndex ?? 0) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	body['instanceId'] = instanceId;

	const data = (await client.httpPost(
		`/cloud/project/${projectId}/ip/failover/${failoverIpId}/attach`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
