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
 * Enable CephFS filesystem
 *
 * HTTP method: POST
 * Endpoint: /dedicated/ceph/{serviceName}/cephfs/{fsName}/enable
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const fsName = this.getNodeParameter('fsName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const client = getClient(this);
	const data = (await client.httpPost('/dedicated/ceph/' + encodeURIComponent(serviceName) + '/cephfs/' + encodeURIComponent(fsName) + '/enable')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
