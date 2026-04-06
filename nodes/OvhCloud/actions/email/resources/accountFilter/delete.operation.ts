import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Delete an account filter.
 *
 * HTTP method: DELETE
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter/{name}
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
			displayName: 'Filter Name',
			name: 'filterName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the filter to delete',
			displayOptions,
		},
	];
}

/**
 * Executes the Delete Account Filter operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const filterName = this.getNodeParameter('filterName', 0) as string;
	const data = (await client.httpDelete(
		`/email/domain/${domainParam.value}/account/${accountName}/filter/${filterName}`,
	)) as IDataObject;
	return [{ json: data }];
}
