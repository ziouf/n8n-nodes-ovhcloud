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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Payload',
			name: 'payload',
			type: 'string',
			default: '',
			description: 'The payload parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Secret operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/keymanager/secret
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;

	const body: IDataObject = {};
	if (this.getNodeParameter('name', _itemIndex ?? 0)) {
		body.name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	}
	if (this.getNodeParameter('payload', _itemIndex ?? 0)) {
		body.payload = this.getNodeParameter('payload', _itemIndex ?? 0) as string;
	}
	const data = (await client.httpPost(
		`/publicCloud/project/${projectId}/region/${regionName}/keymanager/secret`, body
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
