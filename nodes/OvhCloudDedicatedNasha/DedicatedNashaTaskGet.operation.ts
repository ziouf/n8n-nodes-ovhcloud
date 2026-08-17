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
 * View task list
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/task
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const qs: IDataObject = {};
			qs['operation'] = this.getNodeParameter('operation', _itemIndex, '') as string;
		qs['status'] = this.getNodeParameter('status', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/task', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
