import type {
	IExecuteFunctions,
	INodeExecutionData,
	IDataObject,
	INodeProperties,
	IDisplayOptions,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * List CDN domain options
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/cdn/{serviceName}/domain/option
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const data = (await client.httpGet(
		`/hosting/web/cdn/${serviceName}/domain/option`,
	)) as IDataObject;
	const inputData = this.getInputData()[itemIndex];
	return this.helpers.returnJsonArray([{ ...inputData.json, ...data }]);
}
