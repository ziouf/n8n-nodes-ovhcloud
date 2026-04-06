import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Change account filter activity.
 *
 * HTTP method: POST
 * Endpoint: /email/domain/{domain}/account/{accountName}/filter/{name}/changeActivity
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
			displayName: 'Activity',
			name: 'activity',
			type: 'boolean',
			default: true,
			required: true,
			description: 'Whether the filter should be active',
			displayOptions,
		},
	];
}

/**
 * Executes the Change Account Filter Activity operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const domainParam = this.getNodeParameter('domain', 0, { extractValue: true }) as {
		value: string;
	};
	const accountName = this.getNodeParameter('accountName', 0) as string;
	const filterName = this.getNodeParameter('filterName', 0) as string;
	const activity = this.getNodeParameter('activity', 0) as boolean;
	const data = (await client.httpPost(
		`/email/domain/${domainParam.value}/account/${accountName}/filter/${filterName}/changeActivity`,
		{ activity },
	)) as IDataObject;
	return [{ json: data }];
}
