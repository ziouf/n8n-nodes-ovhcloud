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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name parameter',
			displayOptions,
		},
		{
			displayName: 'Encryption',
			name: 'encryption',
			type: 'string',
			default: '',
			description: 'The encryption parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Lifecycle',
			name: 'lifecycle',
			type: 'string',
			default: '',
			description: 'The lifecycle parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Object Lock',
			name: 'objectLock',
			type: 'string',
			default: '',
			description: 'The objectLock parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Replication',
			name: 'replication',
			type: 'string',
			default: '',
			description: 'The replication parameter (optional)',
			displayOptions,
		},
		{
			displayName: 'Versioning',
			name: 'versioning',
			type: 'string',
			default: '',
			description: 'The versioning parameter (optional)',
			displayOptions,
		},
	];
}

/**
 * Executes the PUT Update a S3* compatible storage container operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/${projectId}/region/${regionName}/storage/${name}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const encryption = this.getNodeParameter('encryption', 0, '') as string;
	const lifecycle = this.getNodeParameter('lifecycle', 0, '') as string;
	const objectLock = this.getNodeParameter('objectLock', 0, '') as string;
	const replication = this.getNodeParameter('replication', 0, '') as string;
	const versioning = this.getNodeParameter('versioning', 0, '') as string;
	const body: IDataObject = {
		encryption: encryption,
		lifecycle: lifecycle,
		objectLock: objectLock,
		replication: replication,
		versioning: versioning
	};

	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPut(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
