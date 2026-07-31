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
			displayName: 'domain Id',
			name: 'domainId',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainId identifier',
		},

	];
}

/**
 * Executes the Get Get a domain operation.
 *
 * HTTP method: GET
 * Endpoint: /zimbra/platform/{platformId}/domain/{domainId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const domainId = this.getNodeParameter('domainId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/zimbra/platform/' + platformId + '/domain/' + domainId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
