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
			displayName: 'Okms ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The okmsId identifier',
			displayOptions,
		},
		{
			displayName: 'Credential ID',
			name: 'credentialId',
			type: 'string',
			default: '',
			required: true,
			description: 'The credentialId identifier',
			displayOptions,
		},

	];
}

/**
 * Executes the Delete Revoke and delete an access credential operation.
 *
 * HTTP method: DELETE
 * Endpoint: /okms/resource/{okmsId}/credential/{credentialId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', _itemIndex) as string;
	const credentialId = this.getNodeParameter('credentialId', _itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpDelete('/okms/resource/' + okmsId + '/credential/' + credentialId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
