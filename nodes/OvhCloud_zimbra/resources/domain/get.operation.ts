import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Zimbra platform domain.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/platform/{platformId}/domain/{domainId}
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
			displayName: 'Domain ID',
			name: 'domainId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the domain',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Zimbra Platform Domain operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const platformId = this.getNodeParameter('platformId', 0) as string;
	const domainId = this.getNodeParameter('domainId', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/platform/${platformId}/domain/${domainId}`)) as IDataObject;
	return [{ json: data }];
}
