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
			displayName: 'Account ID',
			name: 'accountId',
			type: 'string',
			default: '',
			required: true,
			description: 'The accountId identifier',
		},

	];
}

/**
 * Executes the Put Modify an account operation.
 *
 * HTTP method: PUT
 * Endpoint: /zimbra/platform/{platformId}/account/{accountId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const accountId = this.getNodeParameter('accountId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/zimbra/platform/' + platformId + '/account/' + accountId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
