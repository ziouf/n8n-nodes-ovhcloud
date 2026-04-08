import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific OKMS log kind.
 *
 * HTTP method: GET
 * Endpoint: /v2/okms/resource/{okmsId}/log/kind/{name}
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
		{
			displayName: 'Kind Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the log kind',
			displayOptions,
		},
	];
}

/**
 * Executes the Get OKMS Log Kind operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const okmsId = this.getNodeParameter('okmsId', 0) as string;
	const name = this.getNodeParameter('name', 0) as string;
	const data = (await client.httpGet(`/v2/okms/resource/${okmsId}/log/kind/${name}`)) as IDataObject;
	return [{ json: data }];
}
