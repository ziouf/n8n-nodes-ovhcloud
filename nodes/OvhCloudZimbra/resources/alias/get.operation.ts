import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Zimbra platform alias.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/platform/{platformId}/alias/{aliasId}
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
			displayName: 'Alias ID',
			name: 'aliasId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the alias',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Zimbra Platform Alias operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const platformId = this.getNodeParameter('platformId', 0) as string;
	const aliasId = this.getNodeParameter('aliasId', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/platform/${platformId}/alias/${aliasId}`)) as IDataObject;
	return [{ json: data }];
}
