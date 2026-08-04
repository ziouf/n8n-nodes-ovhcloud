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
			description: 'The CDN domain to update the option for',
			displayOptions,
		},
		{
			displayName: 'Option Name',
			name: 'optionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The CDN option to update',
			displayOptions,
		},
		{
			displayName: 'Option Value',
			name: 'optionValue',
			type: 'string',
			default: '',
			description: 'The new value for the option',
			displayOptions,
		},
	];
}

/**
 * Update a CDN domain option
 *
 * HTTP method: PUT
 * Endpoint: /hosting/web/cdn/{serviceName}/domain/{domain}/option/{optionName}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const domain = this.getNodeParameter('domain', itemIndex) as string;
	const optionName = this.getNodeParameter('optionName', itemIndex) as string;
	const optionValue = this.getNodeParameter('optionValue', itemIndex) as string;
	const data = (await client.httpPut(
		`/hosting/web/cdn/${serviceName}/domain/${domain}/option/${optionName}`,
		{ value: optionValue },
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
