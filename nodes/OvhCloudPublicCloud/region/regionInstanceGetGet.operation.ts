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
			displayName: 'Deleted',
			name: 'deleted',
			type: 'string',
			default: '',
			description: 'The deleted parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'With Backups',
			name: 'withBackups',
			type: 'string',
			default: '',
			description: 'The withBackups parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'With Image',
			name: 'withImage',
			type: 'string',
			default: '',
			description: 'The withImage parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'With Networks',
			name: 'withNetworks',
			type: 'string',
			default: '',
			description: 'The withNetworks parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'With Volumes',
			name: 'withVolumes',
			type: 'string',
			default: '',
			description: 'The withVolumes parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Instance operation.
 *
 * HTTP method: GET
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/instance/${instanceId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const instanceId = this.getNodeParameter('instanceId', _itemIndex ?? 0) as string;

	const qs: IDataObject = {};
	if (this.getNodeParameter('deleted', _itemIndex ?? 0)) {
		qs.deleted = this.getNodeParameter('deleted', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('withBackups', _itemIndex ?? 0)) {
		qs.withBackups = this.getNodeParameter('withBackups', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('withImage', _itemIndex ?? 0)) {
		qs.withImage = this.getNodeParameter('withImage', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('withNetworks', _itemIndex ?? 0)) {
		qs.withNetworks = this.getNodeParameter('withNetworks', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('withVolumes', _itemIndex ?? 0)) {
		qs.withVolumes = this.getNodeParameter('withVolumes', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpGet(
		`/publicCloud/project/${projectId}/region/${regionName}/instance/${instanceId}`, qs
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
