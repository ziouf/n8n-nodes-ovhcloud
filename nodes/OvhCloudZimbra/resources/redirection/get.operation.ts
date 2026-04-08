import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Zimbra platform redirection.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/platform/{platformId}/redirection/{redirectionId}
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
			displayName: 'Redirection ID',
			name: 'redirectionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the redirection',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Zimbra Platform Redirection operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const platformId = this.getNodeParameter('platformId', 0) as string;
	const redirectionId = this.getNodeParameter('redirectionId', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/platform/${platformId}/redirection/${redirectionId}`)) as IDataObject;
	return [{ json: data }];
}
