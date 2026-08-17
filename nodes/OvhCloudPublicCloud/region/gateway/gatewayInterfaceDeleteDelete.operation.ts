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
			displayName: 'Interface ID',
			name: 'interfaceId',
			type: 'string',
			default: '',
			required: true,
			description: 'The interface UUID',
			displayOptions,
		},
	];
}

/**
 * Executes the gateway Interface Delete Delete operation.
 *
 * HTTP method: DELETE
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/gateway/${idVal}/interface/${interfaceIdVal}
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const idVal = (this.getNodeParameter('id', _itemIndex ?? 0) || '') as string;
		const interfaceIdVal = (this.getNodeParameter('interfaceId', _itemIndex ?? 0) || '') as string;
		const data = (await client.httpDelete(
		`/publicCloud/project/${projectId}/region/${regionName}/gateway/${idVal}/interface/${interfaceIdVal}`,
			)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
