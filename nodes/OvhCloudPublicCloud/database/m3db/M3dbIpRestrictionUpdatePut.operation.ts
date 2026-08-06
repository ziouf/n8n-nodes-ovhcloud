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
			displayName: 'Cluster ID',
			name: 'clusterId',
			type: 'string',
			default: '',
			required: true,
			description: 'The clusterId parameter',
			displayOptions,
		},
		{
			displayName: 'Ip Block',
			name: 'ipBlock',
			type: 'string',
			default: '',
			required: true,
			description: 'The ipBlock parameter',
			displayOptions,
		},
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			description: 'Ip parameter',
			displayOptions,
		},
		{
			displayName: 'Description',
			name: 'description',
			type: 'string',
			default: '',
			description: 'Description parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Changes the list of ip restrictions to the m3db operation.
 *
 * HTTP method: PUT
 * Endpoint: /cloud/project/{serviceName}/database/m3db/{clusterId}/ipRestriction/{ipBlock}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
}) as string;
	const clusterId = this.getNodeParameter('clusterId', 0) as string;
	const ipBlock = this.getNodeParameter('ipBlock', 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('ip', 0)) body.ip = this.getNodeParameter('ip', 0);
	if (this.getNodeParameter('description', 0)) body.description = this.getNodeParameter('description', 0);

	const data = (await client.httpPut(`/cloud/project/${serviceName}/database/m3db/${clusterId}/ipRestriction/${ipBlock}`, body as IDataObject)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
