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
			displayName: 'Fsname',
			name: 'fsName',
			type: 'string',
			default: '',
			required: true,
			description: 'Fs name',
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
 * Get CephFS filesystem information
 *
 * HTTP method: GET
 * Endpoint: /dedicated/ceph/{serviceName}/cephfs/{fsName}
 */
export async function execute(this: IExecuteFunctions,
	itemIndex: number): Promise<INodeExecutionData[]> {
	const fsName = this.getNodeParameter('fsName', itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpGet('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/cephfs/' + encodeURIComponent(fsName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
