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
			displayName: 'Okms ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
		{
			displayName: 'Key ID',
			name: 'keyId',
			type: 'string',
			default: '',
			required: true,
			description: 'Service key ID',
			displayOptions,
		},

	];
}

/**
 * Executes the Get Retrieve a key operation.
 *
 * HTTP method: GET
 * Endpoint: /okms/resource/{okmsId}/serviceKey/{keyId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', _itemIndex) as string;
	const keyId = this.getNodeParameter('keyId', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/okms/resource/' + okmsId + '/serviceKey/' + keyId)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
