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

	];
}

/**
 * Executes the Post Create an alias operation.
 *
 * HTTP method: POST
 * Endpoint: /zimbra/platform/{platformId}/alias
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', _itemIndex) as string;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPost('/zimbra/platform/' + platformId + '/alias', body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
