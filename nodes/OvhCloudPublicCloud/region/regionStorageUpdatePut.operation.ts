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
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const regionName = this.getNodeParameter('regionName', _itemIndex ?? 0) as string;
	const name = this.getNodeParameter('name', _itemIndex ?? 0) as string;
	const encryption = this.getNodeParameter('encryption', _itemIndex ?? 0, '') as string;
	const lifecycle = this.getNodeParameter('lifecycle', _itemIndex ?? 0, '') as string;
	const objectLock = this.getNodeParameter('objectLock', _itemIndex ?? 0, '') as string;
	const replication = this.getNodeParameter('replication', _itemIndex ?? 0, '') as string;
	const versioning = this.getNodeParameter('versioning', _itemIndex ?? 0, '') as string;
	const body: IDataObject = {
		encryption: encryption,
		lifecycle: lifecycle,
		objectLock: objectLock,
		replication: replication,
		versioning: versioning
	};

	const client = getClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const data = (await client.httpPut(
			'/publicCloud/project/'+ projectId+ '/region/'+ regionName+ '/storage/'+ name+ '',
			body as IDataObject
		)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
