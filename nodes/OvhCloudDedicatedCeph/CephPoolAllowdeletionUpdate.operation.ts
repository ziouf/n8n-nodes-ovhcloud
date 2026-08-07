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
			displayName: 'Poolname',
			name: 'poolName',
			type: 'string',
			default: '',
			required: true,
			description: 'Pool name',
		},
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Service name',
		},
	];
}

/**
 * Open 5 minutes window for deleting single ceph pool
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/ceph/{serviceName}/pool/{poolName}/allowDeletion
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const poolName = this.getNodeParameter('poolName', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpPut('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/pool/' + encodeURIComponent(poolName) + '/allowDeletion')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
