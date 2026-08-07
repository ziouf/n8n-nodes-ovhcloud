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
			description: 'The internal name of your storage',
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
	itemIndex: number): Promise<INodeExecutionData[]> {
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const qs: IDataObject = {};
			qs['operation'] = this.getNodeParameter('operation', itemIndex, '') as string;
		qs['status'] = this.getNodeParameter('status', itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/task', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
