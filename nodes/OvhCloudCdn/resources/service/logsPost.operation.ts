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
			description: 'The internal name of your CDN offer',
			displayOptions,
		},
	];
}

/**
 * Executes the Post GenerateLogsUrl operation.
 *
 * HTTP method: POST
 * Endpoint: /cdn/dedicated/{serviceName}/logs
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;

	const client = new ApiClient(this);
	const data = (await client.httpPost(`/cdn/dedicated/${encodeURIComponent(serviceName)}/logs`, undefined)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
