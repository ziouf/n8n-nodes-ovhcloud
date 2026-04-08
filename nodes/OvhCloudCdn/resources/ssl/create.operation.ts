import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Create CDN SSL operation
 *
 * Adds an SSL certificate to a CDN Dedicated service.
 * Leave certificate, chain, and key empty for Let's Encrypt.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/ssl
 */
export function descriptionSslCreate(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			description:
				'The name of the CDN Dedicated service. This can be set manually or selected from the list of services.',
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
					placeholder: 'Select a CDN service...',
					typeOptions: {
						searchListMethod: 'getCdnServices',
						searchable: true,
					},
				},
			],
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			description: 'The SSL certificate name',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Certificate',
			name: 'certificate',
			description: "The SSL certificate content (leave empty for Let's Encrypt)",
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Chain',
			name: 'chain',
			description: "The SSL certificate chain (leave empty for Let's Encrypt)",
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			description: "The SSL private key (leave empty for Let's Encrypt)",
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Create CDN SSL operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the created SSL details
 */
export async function executeSslCreate(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const certificate = this.getNodeParameter('certificate', 0, '') as string;
	const chain = this.getNodeParameter('chain', 0, '') as string;
	const key = this.getNodeParameter('key', 0, '') as string;

	const body: IDataObject = { name };
	if (certificate) body.certificate = certificate;
	if (chain) body.chain = chain;
	if (key) body.key = key;

	const response = (await client.httpPost(
		`/cdn/dedicated/${serviceName}/ssl`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
