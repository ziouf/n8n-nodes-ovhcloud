import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Module ID',
			name: 'moduleId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the module you want to install',
			displayOptions,
		},
		{
			displayName: 'Admin Name',
			name: 'adminName',
			type: 'string',
			default: '',
			description: 'The login for the admin account (may be a standard string or your email)',
			displayOptions,
		},
		{
			displayName: 'Admin Password',
			name: 'adminPassword',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			description: 'The password for the admin account (at least 8 characters)',
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			description:
				'On which domain the module has to be available (it can be a multidomain or a subdomain) - if not set, the module will be available on your serviceName domain',
			placeholder: 'example.com',
			displayOptions,
		},
		{
			displayName: 'Language',
			name: 'language',
			type: 'options',
			options: [
				{ name: 'Czech (Cz)', value: 'cz' },
				{ name: 'Dutch (Nl)', value: 'nl' },
				{ name: 'English (En)', value: 'en' },
				{ name: 'Finnish (Fi)', value: 'fi' },
				{ name: 'French (Fr)', value: 'fr' },
				{ name: 'German (De)', value: 'de' },
				{ name: 'Italian (It)', value: 'it' },
				{ name: 'Lithuanian (Lt)', value: 'lt' },
				{ name: 'Polish (Pl)', value: 'pl' },
				{ name: 'Portuguese (Pt)', value: 'pt' },
				{ name: 'Spanish (Es)', value: 'es' },
			],
			default: 'en',
			description: 'The language to set to your module',
			displayOptions,
		},
		{
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			description: 'Where to install the module, relative to your home directory',
			displayOptions,
		},
		{
			displayName: 'Dependencies',
			name: 'dependencies',
			type: 'string',
			default: '',
			description:
				'JSON array of dependencies that we have to configure on your module (e.g. [{"type":"mysql","name":"mydb"}])',
			displayOptions,
		},
	];
}

/**
 * Install a module on the hosting
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/module
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const moduleId = this.getNodeParameter('moduleId', itemIndex as number) as number;
	const adminName = this.getNodeParameter('adminName', itemIndex as number, '') as string;
	const adminPassword = this.getNodeParameter('adminPassword', itemIndex as number, '') as string;
	const domain = this.getNodeParameter('domain', itemIndex as number, '') as string;
	const language = this.getNodeParameter('language', itemIndex as number, '') as string;
	const path = this.getNodeParameter('path', itemIndex as number, '') as string;
	const dependencies = this.getNodeParameter('dependencies', itemIndex as number, '') as string;

	const body: IDataObject = { moduleId };
	if (adminName) {
		body.adminName = adminName;
	}
	if (adminPassword) {
		body.adminPassword = adminPassword;
	}
	if (domain) {
		body.domain = domain;
	}
	if (language) {
		body.language = language;
	}
	if (path) {
		body.path = path;
	}
	if (dependencies) {
		try {
			body.dependencies = JSON.parse(dependencies) as IDataObject[];
		} catch {
			body.dependencies = dependencies as unknown as IDataObject[];
		}
	}

	const data = (await client.httpPost(
		`/hosting/web/${encodeURIComponent(serviceName)}/module`,
		body,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
