import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../shared/transport/ApiClient';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your Housing bay',
		},
	];
}

/**
 * View task list
 *
 * HTTP method: GET
 * Endpoint: /dedicated/housing/{serviceName}/task
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = new ApiClient(this);
	const qs: IDataObject = {};
			qs['function'] = this.getNodeParameter('function', _itemIndex, '') as string;
		qs['status'] = this.getNodeParameter('status', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/housing/' + encodeURIComponent(serviceName) + '/task', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
