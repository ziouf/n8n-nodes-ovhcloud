import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Create an account filter.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Account Name',
			name: 'accountName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the email account',
			displayOptions,
		},
		{
			displayName: 'Action',
			name: 'action',
			type: 'options',
			options: [
				{ name: 'Discard', value: 'discard' },
				{ name: 'Keep', value: 'keep' },
				{ name: 'Reject', value: 'reject' },
				{ name: 'File Into', value: 'fileinto' },
			],
			default: 'keep',
			required: true,
			description: 'Action to take when filter matches',
			displayOptions,
		},
		{
			displayName: 'Active',
			name: 'active',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether the filter is active',
			displayOptions,
		},
		{
			displayName: 'Header',
			name: 'header',
			type: 'string',
			default: '',
			required: true,
			description: 'Header to match against',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'Name of the filter',
			displayOptions,
		},
		{
			displayName: 'Operand',
			name: 'operand',
			type: 'options',
			options: [
				{ name: 'Contains', value: 'contains' },
				{ name: 'Is', value: 'is' },
				{ name: 'Matches', value: 'matches' },
				{ name: 'Regex', value: 'regex' },
			],
			default: 'contains',
			required: true,
			description: 'Comparison operator',
			displayOptions,
		},
		{
			displayName: 'Priority',
			name: 'priority',
			type: 'number',
			default: 0,
			required: true,
			description: 'Filter priority',
			displayOptions,
		},
		{
			displayName: 'Value',
			name: 'value',
			type: 'string',
			default: '',
			required: true,
			description: 'Value to match against',
			displayOptions,
		},
	];
}

/**
 * Executes the Create Account Filter operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const body: IDataObject = {
		action: this.getNodeParameter('action', 0),
		active: this.getNodeParameter('active', 0),
		header: this.getNodeParameter('header', 0),
		name: this.getNodeParameter('name', 0),
		operand: this.getNodeParameter('operand', 0),
		priority: this.getNodeParameter('priority', 0),
		value: this.getNodeParameter('value', 0),
	};
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/account/${accountName}/filter`,
		body,
	)) as IDataObject;
	return [{ json: data }];
}
