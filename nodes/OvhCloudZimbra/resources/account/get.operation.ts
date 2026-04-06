import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Zimbra platform account.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/platform/{platformId}/account/{accountId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Platform ID',
			name: 'platformId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the Zimbra platform',
			displayOptions,
		},
		{
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the account',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Zimbra Platform Account operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const platformId = this.getNodeParameter('platformId', 0) as string;
	const accountId = this.getNodeParameter('accountId', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/platform/${platformId}/account/${accountId}`)) as IDataObject;
	return [{ json: data }];
}
