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
 * Endpoint: /cloud/project/{serviceName}/kube/{kubeId}/openIdConnect
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('publicCloudProjectId', _itemIndex ?? 0, '', {
		extractValue: true,
	}) as string;
	const kubeId = this.getNodeParameter('kubeId', _itemIndex ?? 0) as string;
	const issuerUrl = (this.getNodeParameter('issuerUrl', _itemIndex ?? 0) || '') as string;
	const clientId = (this.getNodeParameter('clientId', _itemIndex ?? 0) || '') as string;

	const body: IDataObject = {};
	if (issuerUrl) body.issuerUrl = issuerUrl;
	if (clientId) body.clientId = clientId;

	const data = (await client.httpPut(
		`/cloud/project/${serviceName}/kube/${kubeId}/openIdConnect`,
		body as IDataObject,
	)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
