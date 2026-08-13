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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Get Get a log kind operation.
 *
 * HTTP method: GET
 * Endpoint: /okms/resource/{okmsId}/log/kind/{name}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpGet('/okms/resource/' + okmsId + '/log/kind/' + name)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
