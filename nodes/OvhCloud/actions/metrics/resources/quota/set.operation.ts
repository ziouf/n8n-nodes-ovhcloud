import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../transport/ApiClient';

/**
 * Set quota for a metrics service.
 *
 * HTTP method: PUT
 * Endpoint: /metrics/{serviceName}/quota
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the metrics service',
			displayOptions,
		},
		{
			displayName: 'Quota',
			name: 'quota',
			type: 'number',
			default: 0,
			required: true,
			description: 'Quota value to set',
			displayOptions,
		},
	];
}

/**
 * Executes the Set Quota operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const body: IDataObject = {
		quota: this.getNodeParameter('quota', 0) as number,
	};
	const data = (await client.httpPut(`/metrics/${serviceName}/quota`, { body })) as IDataObject;
	return [{ json: data }];
}
