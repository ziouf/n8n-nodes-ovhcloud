import { SERVICE_NAME } from './serviceName';
import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			...SERVICE_NAME,
		},
	];
}

/**
 * Return statistics about the nas
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/use
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const qs: IDataObject = {};
			qs['type'] = this.getNodeParameter('type', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/use', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
