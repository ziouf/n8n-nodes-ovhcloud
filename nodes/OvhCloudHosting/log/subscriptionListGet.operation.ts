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
			displayName: 'Kind Filter',
			name: 'kind',
			type: 'string',
			default: '',
			description: 'Filter on a specific kind (e.g., audit)',
			displayOptions,
		},
	];
}

/**
 * List subscription IDs for a cluster
 *
 * HTTP method: GET
 * Endpoint: /hosting/web/{serviceName}/log/subscription
 */
export async function execute(
	this: IExecuteFunctions,
	itemIndex?: number,
): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex as number) as string;
	const kind = this.getNodeParameter('kind', itemIndex as number, '') as string;

	const qs: IDataObject = {};
	if (kind) {
		qs.kind = kind;
	}

	const data = (await client.httpGet(
		`/hosting/web/${encodeURIComponent(serviceName)}/log/subscription`,
		qs,
	)) as unknown;
	return this.helpers.returnJsonArray(
		Array.isArray(data) ? (data as IDataObject[]) : [data as IDataObject],
	);
}
