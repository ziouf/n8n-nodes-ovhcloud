import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
	IDataObject,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

/**
 * Get service information for a metrics service.
 *
 * HTTP method: GET
 * Endpoint: /metrics/{serviceName}/serviceInfos
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
	];
}

/**
 * Executes the Get Service Infos operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const data = (await client.httpGet(`/metrics/${serviceName}/serviceInfos`)) as IDataObject;
	return [{ json: data }];
}
