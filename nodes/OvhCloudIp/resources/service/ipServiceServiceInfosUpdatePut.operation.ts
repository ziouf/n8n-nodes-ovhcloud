import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
	{
		displayName: 'Service Name',
		name: 'serviceName',
		type: 'string',
		default: '',
		required: true,
		description: 'The internal name of your IP services',
		displayOptions,
	},
	];
}

/**
 * Executes the Put Update IP Service Infos operation.
 *
 * HTTP method: PUT
 * Endpoint: /ip/service/{serviceName}/serviceInfos
 */

export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;

	const body: IDataObject = {};

	const client = new ApiClient(this);
	const data = (await client.httpPut(`/ip/service/${encodeURIComponent(serviceName)}/serviceInfos`, body)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
