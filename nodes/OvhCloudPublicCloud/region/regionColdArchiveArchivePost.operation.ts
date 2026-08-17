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
			displayName: 'Locked Until Days',
			name: 'lockedUntilDays',
			type: 'string',
			default: '',
			description: 'The lockedUntilDays parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the POST Lock a cold archive container for a number of days operation.
 *
 * HTTP method: POST
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/coldArchive/${name}/archive
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const lockedUntilDays = this.getNodeParameter('lockedUntilDays', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		lockedUntilDays: lockedUntilDays
	};

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPost(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/coldArchive/'+ name+ '/archive',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
