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
			displayName: 'Path',
			name: 'path',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},

	];
}

/**
 * Executes the Delete Delete a secret and all its versions operation.
 *
 * HTTP method: DELETE
 * Endpoint: /okms/resource/{okmsId}/secret/{path}
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', _itemIndex) as string;
	const path = this.getNodeParameter('path', _itemIndex) as string;


	const client = getClient(this);
	const data = (await client.httpDelete('/okms/resource/' + okmsId + '/secret/' + path)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
