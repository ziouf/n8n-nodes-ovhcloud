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
			required: true,
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Rules',
			name: 'rules',
			type: 'string',
			default: '',
			description: 'The rules parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT Update S3* compatible storage container lifecycle configuration operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/lifecycle
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const rules = this.getNodeParameter('rules', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		rules: rules
	};

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPut(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/lifecycle',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
