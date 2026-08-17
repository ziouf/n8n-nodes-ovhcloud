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
			displayName: 'Secret ID',
			name: 'secretId',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description: 'The secretId parameter',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Secret operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/keymanager/secret/${secretId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const secretId = this.getNodeParameter('secretId', _itemIndex ?? 0) as string;
	const data = (await client.httpDelete(
		`/publicCloud/project/${projectId}/region/${regionName}/keymanager/secret/${secretId}`
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
