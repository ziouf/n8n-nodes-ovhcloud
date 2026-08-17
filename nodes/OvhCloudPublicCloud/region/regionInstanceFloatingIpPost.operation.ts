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
			displayName: 'Instance ID',
			name: 'instanceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The instanceId parameter',
			displayOptions,
		},
		{
			displayName: 'Floating Ip',
			name: 'floatingIp',
			type: 'string',
			default: '',
			description: 'The floatingIp parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Associate Floating IP to Instance operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/instance/${instanceId}/floatingIp
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('floatingIp', _itemIndex ?? 0)) {
		body.floatingIp = this.getNodeParameter('floatingIp', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/instance/${instanceId}/floatingIp`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
