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
 * Executes the Put Update a service key operation.
 *
 * HTTP method: PUT
 * Endpoint: /okms/resource/{okmsId}/serviceKey/{keyId}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', _itemIndex) as string;
	const keyId = this.getNodeParameter('keyId', _itemIndex) as string;

	const body: IDataObject = {};

	const client = getClient(this);
	const data = (await client.httpPut('/okms/resource/' + okmsId + '/serviceKey/' + keyId, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
