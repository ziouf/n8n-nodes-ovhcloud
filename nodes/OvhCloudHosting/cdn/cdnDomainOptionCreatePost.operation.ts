import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
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
			displayOptions,
		},
		{
			displayName: 'Domain',
			name: 'domain',
			type: 'string',
			default: '',
			required: true,
			description: 'The domain name',
			displayOptions,
		},
		{
			displayName: 'Option Name',
			name: 'optionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The option name to enable',
			displayOptions,
		},
		{
			displayName: 'Enabled',
			name: 'enabled',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether to enable or disable the option',
			displayOptions,
		},
		{
			displayName: 'Config',
			name: 'config',
			type: 'json',
			default: '{}',
			description: 'Option configuration',
			displayOptions,
		},
	];
}

/**
 * Add an option to a CDN domain
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/cdn/{serviceName}/domain/{domain}/option
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const optionName = this.getNodeParameter('optionName', itemIndex) as string;
	const enabled = this.getNodeParameter('enabled', itemIndex) as boolean;
	const configRaw = this.getNodeParameter('config', itemIndex, '{}') as string;
	let config: IDataObject | undefined;
	try {
		config = JSON.parse(configRaw || '{}') as IDataObject;
	} catch {
		config = undefined;
	}
	const body: IDataObject = { enabled, name: optionName };
	if (config) body.config = config;
	const data = (await client.httpPost(
		`/hosting/web/cdn/${serviceName}/domain/${domain}/option`,
		body,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
