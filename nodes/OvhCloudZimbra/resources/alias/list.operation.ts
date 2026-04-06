import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * List Zimbra platform aliases.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/platform/{platformId}/alias
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
	];
}

/**
 * Executes the List Zimbra Platform Aliases operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const platformId = this.getNodeParameter('platformId', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/platform/${platformId}/alias`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
