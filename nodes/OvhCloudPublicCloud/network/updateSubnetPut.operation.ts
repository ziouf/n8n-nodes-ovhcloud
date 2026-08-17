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
			displayName: 'Private Network ID',
			name: 'pnId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Update Subnet operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/network/private/{networkId}/subnet/{subnetId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const pnId = this.getNodeParameter('pnId', _itemIndex ?? 0) as string;
	const subnetId = this.getNodeParameter('subnetId', _itemIndex ?? 0) as string;

	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/network/private/${pnId}/subnet/${subnetId}`,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
