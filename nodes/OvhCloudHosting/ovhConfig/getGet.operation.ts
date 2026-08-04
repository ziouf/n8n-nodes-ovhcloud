import type {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	IDisplayOptions,
	INodeProperties,
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
			description: 'The internal name of your hosting',
			displayOptions,
		},
		{
			displayName: 'Configuration ID',
			name: 'id',
			type: 'number',
			default: 0,
			required: true,
			description: 'Configuration\'s ID',
			displayOptions,
		},
	];
}

/**
 * Get an ovhConfig by id
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/ovhConfig/{id}
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const id = this.getNodeParameter('id', itemIndex as number) as number;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/ovhConfig/${encodeURIComponent(String(id))}`,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
