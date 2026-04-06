import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../shared/transport/ApiClient';

/**
 * Check if a Worklight license can be moved to another IP.
 *
 * HTTP method: GET
 * Endpoint: /license/worklight/{serviceName}/canLicenseBeMovedTo
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Worklight license service',
			displayOptions,
		},
		{
			displayName: 'IP',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The destination IP to check',
			displayOptions,
		},
	];
}

/**
 * Executes the Can License Be Moved To operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const ip = this.getNodeParameter('ip', 0) as string;
	const data = (await client.httpGet(
		`/license/worklight/${serviceName}/canLicenseBeMovedTo`,
		{ qs: { ip } },
	)) as IDataObject;
	return [{ json: data }];
}
