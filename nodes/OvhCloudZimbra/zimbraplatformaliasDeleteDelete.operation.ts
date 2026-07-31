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
			displayName: 'platform Id',
			name: 'platformId',
			type: 'string',
			default: '',
			required: true,
			description: 'The platformId identifier',
		},
		{
			displayName: 'alias Id',
			name: 'aliasId',
			type: 'string',
			default: '',
			required: true,
			description: 'The aliasId identifier',
		},

	];
}

/**
 * Executes the Delete Delete an alias operation.
 *
 * HTTP method: DELETE
 * Endpoint: /zimbra/platform/{platformId}/alias/{aliasId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const aliasId = this.getNodeParameter('aliasId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/zimbra/platform/' + platformId + '/alias/' + aliasId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
