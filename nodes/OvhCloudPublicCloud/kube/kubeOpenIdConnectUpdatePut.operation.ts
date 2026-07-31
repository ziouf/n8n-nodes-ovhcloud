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
			displayName: 'Kube ID',
			name: 'kubeId',
			type: 'string',
			default: '',
			required: true,
			description: 'The Kube cluster ID',
			displayOptions,
		},
		{
			displayName: 'Issuer URL',
			name: 'issuerUrl',
			type: 'string',
			default: '',
			description: 'The OIDC issuer URL',
			displayOptions,
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			description: 'The OIDC client ID',
			displayOptions,
		},
	];
}

/**
 * Executes the Update Kube OpenIdConnect operation.
 *
 * HTTP method: PUT
 * Endpoint: /publicCloud/project/{projectId}/kube/{kubeId}/openIdConnect
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const projectId = this.getNodeParameter('publicCloudProjectId', 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', 0) as string;
	const issuerUrl = (this.getNodeParameter('issuerUrl', 0) || '') as string;
	const clientId = (this.getNodeParameter('clientId', 0) || '') as string;

	const body: IDataObject = {};
	if (issuerUrl) body.issuerUrl = issuerUrl;
	if (clientId) body.clientId = clientId;

	const data = (await client.httpPut(
		`/publicCloud/project/${projectId}/kube/${kubeId}/openIdConnect`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
