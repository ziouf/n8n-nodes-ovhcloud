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

	];
}

/**
 * Executes the Post Create a domain operation.
 *
 * HTTP method: POST
 * Endpoint: /zimbra/platform/{platformId}/domain
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPost('/zimbra/platform/' + platformId + '/domain', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
