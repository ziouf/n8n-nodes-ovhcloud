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
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			required: true,
			description: 'Log kind name',
			displayOptions,
		},
	];
}

/**
 * Generate a temporary URL to retrieve logs
 *
 * HTTP method: POST
 * Endpoint: /hosting/web/{serviceName}/log/url
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const kind = this.getNodeParameter('kind', itemIndex as number) as string;
	const data = (await client.httpPost(`/hosting/web/${encodeURIComponent(serviceName)}/log/url`, {
		kind,
	} as IDataObject)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
