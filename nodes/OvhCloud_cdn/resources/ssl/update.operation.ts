import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * @brief Update CDN SSL operation
 *
 * Updates the SSL certificate for a CDN Dedicated service.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/ssl/update
 */
export function descriptionSslUpdate(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Certificate',
			name: 'certificate',
			description: 'The SSL certificate content',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'Chain',
			name: 'chain',
			description: 'The SSL certificate chain',
			type: 'string',
			default: '',
			displayOptions,
		},
		{
			displayName: 'Key',
			name: 'key',
			description: 'The SSL private key',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the Update CDN SSL operation.
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing the updated SSL details
 */
export async function executeSslUpdate(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const certificate = this.getNodeParameter('certificate', 0) as string;
	const chain = this.getNodeParameter('chain', 0, '') as string;
	const key = this.getNodeParameter('key', 0) as string;

	const body: IDataObject = { certificate, key };
	if (chain) body.chain = chain;

	const response = (await client.httpPost(
		`/cdn/dedicated/${serviceName}/ssl/update`,
		body,
	)) as IDataObject;

	return this.helpers.returnJsonArray(response);
}
