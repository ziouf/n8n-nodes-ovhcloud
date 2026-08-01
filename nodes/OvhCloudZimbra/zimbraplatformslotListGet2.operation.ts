import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Platform ID',
			name: 'platformId',
			type: 'string',
			default: '',
			required: true,
			description: 'The platformId identifier',
		},
		{
			displayName: 'Slot ID',
			name: 'slotId',
			type: 'string',
			default: '',
			required: true,
			description: 'The slotId identifier',
		},

	];
}

/**
 * Executes the Get Get a platform slot operation.
 *
 * HTTP method: GET
 * Endpoint: /zimbra/platform/{platformId}/slot/{slotId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const slotId = this.getNodeParameter('slotId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/zimbra/platform/' + platformId + '/slot/' + slotId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
