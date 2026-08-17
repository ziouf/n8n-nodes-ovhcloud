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
			displayName: 'Gateway Name',
			name: 'name',
			type: 'string',
			default: '',

			description: 'The new name of the gateway',
			displayOptions,
		},
		{
			displayName: 'Model',
			name: 'model',
			type: 'string',
			default: '',

			description: 'The new gateway model',
			displayOptions,
		},
	];
}

/**
 * Executes the gateway Update Put operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/region/{regionName}/gateway/${idVal}
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
	const nameVal = (this.getNodeParameter('name', _itemIndex ?? 0) || '') as string;
	if (nameVal !== '') {
		body.name = nameVal;
	}
	const modelVal = (this.getNodeParameter('model', _itemIndex ?? 0) || '') as string;
	if (modelVal !== '') {
		body.model = modelVal;
	}
	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/region/${regionName}/gateway/${idVal}`,
		body as IDataObject,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
