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
			displayOptions,
		},
		{
			displayName: 'Redirection ID',
			name: 'redirectionId',
			type: 'string',
			default: '',
			required: true,
			description: 'The redirectionId identifier',
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
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const redirectionId = this.getNodeParameter('redirectionId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/zimbra/platform/' + platformId + '/redirection/' + redirectionId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
