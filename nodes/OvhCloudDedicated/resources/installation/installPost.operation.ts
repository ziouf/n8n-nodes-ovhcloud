import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Dedicated Server Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The dedicated server service name (e.g. ns123456.ip-123-45-678.eu)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getDedicatedServerServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'ns123456.ip-123-45-678.eu',
				},
			],
			displayOptions,
		},
		{
			displayName: 'Template Name',
			name: 'templateName',
			type: 'string',
			default: '',
			required: true,
			description: 'The installation template name (e.g. ubuntu-jammy, debian-bookworm)',
			placeholder: 'e.g. ubuntu-jammy',
			displayOptions,
		},
		{
			displayName: 'Post Installation Script',
			name: 'postInstallationScript',
			type: 'string',
			typeOptions: { rows: 4 },
			default: '',
			description: 'URL of the post installation script',
			placeholder: 'https://example.com/post-install.sh',
			displayOptions,
		},
		{
			displayName: 'Hostname',
			name: 'hostname',
			type: 'string',
			default: '',
			description: 'Hostname for the server',
			placeholder: 'e.g. my-server.example.com',
			displayOptions,
		},
	];
}

/**
 * Executes the Install Dedicated Server operation.
 *
 * HTTP method: POST
 * Endpoint: /dedicated/server/{serviceName}/install
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const templateName = (this.getNodeParameter('templateName', _itemIndex ?? 0) as string) || '';
	const postInstallationScript =
		(this.getNodeParameter('postInstallationScript', _itemIndex ?? 0, '') as string) || undefined;
	const hostname = (this.getNodeParameter('hostname', _itemIndex ?? 0, '') as string) || undefined;

	const body: IDataObject = { templateName };
	if (postInstallationScript !== undefined && postInstallationScript !== '') {
		body.postInstallationScript = postInstallationScript;
	}
	if (hostname !== undefined && hostname !== '') {
		body.hostname = hostname;
	}

	const data = (await client.httpPost(`/dedicated/server/${serviceName}/install`, body)) as unknown as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
