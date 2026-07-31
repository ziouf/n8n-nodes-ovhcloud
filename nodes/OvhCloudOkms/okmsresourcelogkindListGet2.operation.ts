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
			displayName: 'name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name identifier',
		},

	];
}

/**
 * Executes the Get Get a log kind operation.
 *
 * HTTP method: GET
 * Endpoint: /okms/resource/{okmsId}/log/kind/{name}
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const okmsId = this.getNodeParameter('okmsId', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex) as string;


	const client = new ApiClient(this);
	const data = (await client.httpGet('/okms/resource/' + okmsId + '/log/kind/' + name)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
