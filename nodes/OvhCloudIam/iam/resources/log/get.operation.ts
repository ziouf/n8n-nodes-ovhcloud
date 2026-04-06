import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Get a specific IAM log.
 *
 * HTTP method: GET
 * Endpoint: /v2/iam/log/{logId}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Log ID',
			name: 'logId',
			type: 'string',
			default: '',
			required: true,
			description: 'The ID of the log',
			displayOptions,
		},
	];
}

/**
 * Executes the Get IAM Log operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const logId = this.getNodeParameter('logId', 0) as string;
	const data = (await client.httpGet(`/v2/iam/log/${logId}`)) as IDataObject;
	return [{ json: data }];
}
