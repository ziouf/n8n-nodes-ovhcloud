import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Certificate ID',
			name: 'certificateId',
			type: 'string',
			default: '',
			required: true,
			displayOptions,
		},
	];
}

/**
 * List SSL certificate tasks
 *
 * HTTP method: GET
 * Endpoint: /ssl/{serviceName}/tasks
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const certificateId = this.getNodeParameter('certificateId', _itemIndex) as string;
	const data = (await client.httpGet(`/ssl/${certificateId}/tasks`)) as string[];
	return this.helpers.returnJsonArray(data.map((taskId) => ({ taskId })));
}
