import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Returns the UI property definitions for the List CDN Cache Rules operation.
 *
 * @param displayOptions - Controls when these properties should be displayed
 * @returns Array of node properties for the List Cache Rules operation
 */
export function descriptionCacheRulesList(displayOptions: IDisplayOptions): INodeProperties[] {
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
			displayName: 'Domain',
			name: 'domain',
			description: 'The domain name',
			type: 'string',
			required: true,
			default: '',
			displayOptions,
		},
		{
			displayName: 'File Match',
			name: 'fileMatch',
			description: 'Optional file match filter',
			type: 'string',
			default: '',
			displayOptions,
		},
	];
}

/**
 * Executes the List CDN Cache Rules operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/domains/{domain}/cacheRules
 *
 * @param this - n8n IExecuteFunctions context
 * @returns Array of execution results containing cache rule IDs
 */
export async function executeCacheRulesList(
	this: IExecuteFunctions,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0, { extractValue: true }) as string;
	const domain = this.getNodeParameter('domain', 0) as string;
	const fileMatch = this.getNodeParameter('fileMatch', 0, '') as string;

	const qs: IDataObject = {};
	if (fileMatch) {
		qs.fileMatch = fileMatch;
	}

	const response = (await client.httpGet(
		`/cdn/dedicated/${serviceName}/domains/${domain}/cacheRules`,
		qs,
	)) as IDataObject[];

	return this.helpers.returnJsonArray(response);
}
