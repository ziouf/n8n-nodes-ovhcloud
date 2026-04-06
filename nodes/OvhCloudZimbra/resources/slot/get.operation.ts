import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get a specific Zimbra platform slot.
 *
 * HTTP method: GET
 * Endpoint: /v2/zimbra/platform/{platformId}/slot/{slotId}
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
			displayName: 'Slot ID',
			name: 'slotId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the slot',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Zimbra Platform Slot operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const platformId = this.getNodeParameter('platformId', 0) as string;
	const slotId = this.getNodeParameter('slotId', 0) as string;
	const data = (await client.httpGet(`/v2/zimbra/platform/${platformId}/slot/${slotId}`)) as IDataObject;
	return [{ json: data }];
}
