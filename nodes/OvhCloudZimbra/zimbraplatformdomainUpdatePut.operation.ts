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
			displayName: 'Domain ID',
			name: 'domainId',
			type: 'string',
			default: '',
			required: true,
			description: 'The domainId identifier',
		},

	];
}

/**
 * Executes the Put Modify a domain operation.
 *
 * HTTP method: PUT
 * Endpoint: /zimbra/platform/{platformId}/domain/{domainId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const platformId = this.getNodeParameter('platformId', itemIndex) as string;
	const domainId = this.getNodeParameter('domainId', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut('/zimbra/platform/' + platformId + '/domain/' + domainId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
