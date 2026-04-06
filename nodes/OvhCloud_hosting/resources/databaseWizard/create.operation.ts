/**
 * @brief Create Database Wizard operation for private database
 *
 * HTTP POST request to `/hosting/privateDatabase/{serviceName}/databaseWizard` endpoint.
 */
import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the private database hosting service',
			displayOptions,
		},
		{
			displayName: 'Database Name',
			name: 'databaseName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the database',
			displayOptions,
		},
		{
			displayName: 'Type',
			name: 'type',
			type: 'string',
			default: '',
			required: true,
			description: 'The type of the database',
			displayOptions,
		},
		{
			displayName: 'Version',
			name: 'version',
			type: 'string',
			default: '',
			description: 'The version of the database',
			displayOptions,
		},
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const databaseName = this.getNodeParameter('databaseName', 0) as string;
	const type = this.getNodeParameter('type', 0) as string;
	const version = this.getNodeParameter('version', 0, '') as string;

	const body: IDataObject = { databaseName, type };
	if (version) body.version = version;

	const data = (await client.httpPost(
		`/hosting/privateDatabase/${serviceName}/databaseWizard`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
