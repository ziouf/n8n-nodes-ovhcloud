import { projectIdLocator } from '../../../shared/nodes/locators';
import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

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
	const client = getClient(this);
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
