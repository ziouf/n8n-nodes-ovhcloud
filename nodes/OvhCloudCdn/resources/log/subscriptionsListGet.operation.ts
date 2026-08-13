import type {
	IDataObject,
	IExecuteFunctions,
	IDisplayOptions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../../shared/transport/ApiClient';

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
		{
			displayName: 'Kind',
			name: 'kind',
			type: 'string',
			default: '',
			description: 'Filter on a specific kind (e.g., audit)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get ListLogSubscriptions operation.
 *
 * HTTP method: GET
 * Endpoint: /cdn/dedicated/{serviceName}/log/subscription
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const kind = (this.getNodeParameter('kind', _itemIndex, '') as string) || '';

	const qs: IDataObject = {};
	if (kind) qs.kind = kind;

	const client = getClient(this);
	const data = (await client.httpGet(`/cdn/dedicated/${encodeURIComponent(serviceName)}/log/subscription`, qs)) as IDataObject;

	return this.helpers.returnJsonArray([data]);
}
