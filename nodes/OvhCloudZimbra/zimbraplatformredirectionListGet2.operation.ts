import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Platform ID',
			name: 'platformId',
			type: 'string',
			default: '',
			required: true,
			description: 'Zimbra platform ID',
			displayOptions,
		},
		{
			displayName: 'Redirection ID',
			name: 'redirectionId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Get Get a platform redirection operation.
 *
 * HTTP method: GET
 * Endpoint: /zimbra/platform/{platformId}/redirection/{redirectionId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', _itemIndex) as string;
	const redirectionId = this.getNodeParameter('redirectionId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/zimbra/platform/' + platformId + '/redirection/' + redirectionId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
