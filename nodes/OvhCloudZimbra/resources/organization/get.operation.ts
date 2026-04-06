import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Zimbra platform organization.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/platform/{platformId}/organization/{organizationId}
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
			displayName: 'Organization ID',
			name: 'organizationId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the organization',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Zimbra Platform Organization operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const platformId = this.getNodeParameter('platformId', 0) as string;
	const organizationId = this.getNodeParameter('organizationId', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/platform/${platformId}/organization/${organizationId}`)) as IDataObject;
	return [{ json: data }];
}
