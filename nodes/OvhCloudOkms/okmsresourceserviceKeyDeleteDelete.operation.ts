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
			displayName: 'okms Id',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The okmsId identifier',
		},
		{
			displayName: 'key Id',
			name: 'keyId',
			type: 'string',
			default: '',
			required: true,
			description: 'The keyId identifier',
		},

	];
}

/**
 * Executes the Delete Delete the given service key operation.
 *
 * HTTP method: DELETE
 * Endpoint: /okms/resource/{okmsId}/serviceKey/{keyId}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;
	const keyId = this.getNodeParameter('keyId', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/okms/resource/' + okmsId + '/serviceKey/' + keyId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
