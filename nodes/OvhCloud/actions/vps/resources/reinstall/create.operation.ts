import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

export function descriptionReinstallCreate(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the VPS service to reinstall. This can be set manually or selected from the list of services.',
			type: 'resourceLocator',
			required: true,
			default: {
				mode: 'str',
				value: '',
			},
			modes: [
				{
					displayName: 'By Name',
					name: 'str',
					type: 'string',
				},
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					placeholder: 'Select a VPS service...',
					typeOptions: {
						searchListMethod: 'getVpsServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Template ID',
			name: 'templateId',
			description: 'The ID of the template to use for reinstallation',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Hostname',
			name: 'hostname',
			description: 'The hostname to set for the reinstalled VPS',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Post Installation Script',
			name: 'postInstallationScript',
			description: 'A script to run after reinstallation',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

export async function executeReinstallCreate(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const templateId = this.getNodeParameter('templateId', 0) as string;
	const hostname = this.getNodeParameter('hostname', 0, '') as string;
	const postInstallationScript = this.getNodeParameter('postInstallationScript', 0, '') as string;

	const body: IDataObject = { templateId };
	if (hostname) {
		body.hostname = hostname;
	}
	if (postInstallationScript) {
		body.postInstallationScript = postInstallationScript;
	}

	const response = (await client.httpPost(`/vps/${serviceName}/reinstall`, {
		body,
	})) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
