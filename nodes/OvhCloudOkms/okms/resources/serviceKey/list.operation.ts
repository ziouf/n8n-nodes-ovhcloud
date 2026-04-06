import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * List OKMS service keys.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/resource/{okmsId}/serviceKey
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'OKMS ID',
			name: 'okmsId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the OKMS resource',
			displayOptions,
		},
	];
}

/**
 * Executes the List OKMS Service Keys operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const okmsId = this.getNodeParameter('okmsId', 0) as string;
	const data = (await client.httpGet(`/v2/okms/resource/${okmsId}/serviceKey`)) as IDataObject[];
	return this.helpers.returnJsonArray(data);
}
