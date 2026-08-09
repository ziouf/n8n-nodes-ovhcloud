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
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Network ID',
			name: 'networkId',
			type: 'string',
			default: '',
			required: true,
			description: 'The networkId parameter',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			required: true,
			description: 'The subnetId parameter',
			displayOptions,
		},
		{
			displayName: 'Gateway Ip',
			name: 'gatewayIp',
			type: 'string',
			default: '',
			description: 'The gatewayIp parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Set Subnet Gateway operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/network/${networkId}/subnet/${subnetId}/gateway
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const networkId = this.getNodeParameter('networkId', _itemIndex ?? 0) as string;
	const subnetId = this.getNodeParameter('subnetId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('gatewayIp', _itemIndex ?? 0)) {
		body.gatewayIp = this.getNodeParameter('gatewayIp', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/network/${networkId}/subnet/${subnetId}/gateway`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
