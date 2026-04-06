import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Change account filter priority.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter/{name}/changePriority
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
			description: 'The name of the filter',
			displayOptions,
		},
		{
			displayName: 'Priority',
			name: 'priority',
			type: 'number',
			default: 0,
			required: true,
			description: 'New priority for the filter',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Account Filter Priority operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const filterName = this.getNodeParameter('filterName', 0) as string;
	const priority = this.getNodeParameter('priority', 0) as number;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/account/${accountName}/filter/${filterName}/changePriority`,
		{ priority },
	)) as IDataObject;
	return [{ json: data }];
}
