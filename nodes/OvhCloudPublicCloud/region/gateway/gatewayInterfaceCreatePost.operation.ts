import { projectIdLocator } from '../../../../shared/nodes/locators';
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
			displayName: 'Gateway ID',
			name: 'id',
			type: 'string',
			default: '',
			required: true,
			description: 'The gateway UUID',
			displayOptions,
		},
		{
			displayName: 'Subnet ID',
			name: 'subnetId',
			type: 'string',
			default: '',
			required: true,
			description: 'The subnet UUID to add',
			displayOptions,
		},
	];
}

/**
 * Executes the gateway Interface Create Post operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/gateway/${idVal}/interface
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const body = {} as import('n8n-workflow').IDataObject;

	const idVal = (this.getNodeParameter('id', _itemIndex ?? 0) || '') as string;
	if (idVal !== '') {
		body.id = idVal;
	}
	const subnetIdVal = (this.getNodeParameter('subnetId', _itemIndex ?? 0) || '') as string;
	if (subnetIdVal !== '') {
		body.subnetId = subnetIdVal;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/gateway/${idVal}/interface`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
