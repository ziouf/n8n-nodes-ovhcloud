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
			displayName: 'Alias ID',
			name: 'aliasId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Delete Delete an alias operation.
 *
 * HTTP method: DELETE
 * Endpoint: /zimbra/platform/{platformId}/alias/{aliasId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', _itemIndex) as string;
	const aliasId = this.getNodeParameter('aliasId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpDelete('/zimbra/platform/' + platformId + '/alias/' + aliasId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
