import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Create a custom isolation for an Email Exchange service.
 *
 * HTTP method: POST
 * Endpoint: /email/exchange/{organizationName}/service/{exchangeService}/customIsolation
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Organization Name',
			name: 'organizationName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the organization',
			displayOptions,
		},
		{
			displayName: 'Exchange Service',
			name: 'exchangeService',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Exchange service',
			displayOptions,
		},
		{
			displayName: 'Isolation Field',
			name: 'isolationField',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Isolation Value',
			name: 'isolationValue',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the custom isolation',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Custom Isolation operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const organizationName = this.getNodeParameter('organizationName', 0) as string;
	const exchangeService = this.getNodeParameter('exchangeService', 0) as string;
	const isolationField = this.getNodeParameter('isolationField', 0) as string;
	const isolationValue = this.getNodeParameter('isolationValue', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;

	const body: IDataObject = { isolationField, isolationValue, name };
	const data = (await client.httpPost(
		`/email/exchange/${organizationName}/service/${exchangeService}/customIsolation`,
		{ body },
	)) as IDataObject;
	return [{ json: data }];
}
