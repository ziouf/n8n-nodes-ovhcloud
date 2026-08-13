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
			displayName: 'Clusterid',
			name: 'clusterId',
			type: 'string',
			default: '' ,
			required: true,
			description: 'ClusterId ID',
			displayOptions,
		},
		{
			displayName: 'Ipblock',
			name: 'ipBlock',
			type: 'string',
			default: '' ,
			required: true,
			description: 'IpBlock ID',
			displayOptions,
		},
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Ip parameter',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description parameter',
			required: true,
			displayOptions,
		},
	];
}

/**
 * Executes the Update an IP restriction.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/kafkaConnect/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
const client = getClient(this);
const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
	extractValue: true,
}) as string;
const clusterId = this.getNodeParameter('clusterId', _itemIndex ?? 0) as string;
const ipBlock = this.getNodeParameter('ipBlock', _itemIndex ?? 0) as string;
const ip = this.getNodeParameter('ip', _itemIndex ?? 0, '') as string;
const description = this.getNodeParameter('description', _itemIndex ?? 0, '') as string;
const data = (await client.httpPut(`/cloud/project/${serviceName}/database/kafkaConnect/${clusterId}/ipRestriction/${ipBlock}`, { ip: ip || undefined, description: description || undefined })) as IDataObject;
return this.helpers.returnJsonArray([data]);
}
