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
			displayName: 'account Id',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
			description: 'The accountId identifier',
		},

	];
}

/**
 * Executes the Delete Delete an account operation.
 *
 * HTTP method: DELETE
 * Endpoint: /zimbra/platform/{platformId}/account/{accountId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const accountId = this.getNodeParameter('accountId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/zimbra/platform/' + platformId + '/account/' + accountId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
