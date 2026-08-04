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
	];
}

/**
 * List mail services linked to the webhosting
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/emailOption
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/emailOption`,
	)) as unknown;
	return this.helpers.returnJsonArray(
		Array.isArray(data) ? (data as IDataObject[]) : [data as IDataObject],
	);
}
