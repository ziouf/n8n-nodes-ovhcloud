import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

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
			displayName: 'Region Name',
			name: 'regionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The region name (e.g. GRA63, BHS62)',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			type: 'string',
			default: '',
			required: true,
			description: 'The key parameter',
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
			displayName: 'Legal Hold',
			name: 'legalHold',
			type: 'string',
			default: '',
			description: 'The legalHold parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Retention',
			name: 'retention',
			type: 'string',
			default: '',
			description: 'The retention parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Restore',
			name: 'restore',
			type: 'string',
			default: '',
			description: 'The restore parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT Update S3* compatible storage container object operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}/object/${key}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const key = this.getNodeParameter('key', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const legalHold = this.getNodeParameter('legalHold', 0, '') as string;
	const retention = this.getNodeParameter('retention', 0, '') as string;
	const restore = this.getNodeParameter('restore', 0, '') as string;
	const body: IDataObject = {
		legalHold: legalHold,
		retention: retention,
		restore: restore
	};

	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPut(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '/object/'+ key+ '',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
