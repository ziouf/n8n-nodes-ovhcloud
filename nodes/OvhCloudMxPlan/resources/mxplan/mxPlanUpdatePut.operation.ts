import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions) {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The email service name',
			displayOptions,
		},
		{
			displayName: 'Pool ID',
			name: 'poolId',
			type: 'string',
			default: '',
			description: 'The MX pool identifier',
			displayOptions,
		},
	];
}

/**
 * Executes the Update MX Plan operation.
 *
 * HTTP method: PUT
 * Endpoint: /email/mxplan/{serviceName}
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const poolId = (this.getNodeParameter('poolId', 0, '') as string) || undefined;

	const body: IDataObject = {};
	if (poolId) body.poolId = poolId;

	const data = (await client.httpPut(`/email/mxplan/${serviceName}`, body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
