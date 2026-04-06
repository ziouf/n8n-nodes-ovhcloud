import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../../../../transport/ApiClient';

/**
 * Get a specific option for a Virtuozzo license.
 *
 * HTTP method: GET
 * Endpoint: /license/virtuozzo/{serviceName}/option/{label}
 */
export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the Virtuozzo license service',
			displayOptions,
		},
		{
			displayName: 'Label',
			name: 'label',
			type: 'string',
			default: '',
			required: true,
			description: 'The option label',
			displayOptions,
		},
	];
}

/**
 * Executes the Get Option operation.
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', 0) as string;
	const label = this.getNodeParameter('label', 0) as string;
	const data = (await client.httpGet(
		`/license/virtuozzo/${serviceName}/option/${label}`,
	)) as IDataObject;
	return [{ json: data }];
}
