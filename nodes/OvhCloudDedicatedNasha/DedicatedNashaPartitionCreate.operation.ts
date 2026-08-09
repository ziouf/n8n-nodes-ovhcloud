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
			displayName: 'Partitiondescription',
			name: 'partitionDescription',
			type: 'string',
			default: '',
			description: 'Partition description',
		},
		{
			displayName: 'Partitionname',
			name: 'partitionName',
			type: 'string',
			default: '',
			required: true,
			description: 'Partition name',
		},
		{
			displayName: 'Protocol',
			name: 'protocol',
			type: 'string',
			default: '',
			required: true,
			description: 'NFS|CIFS|NFS_CIFS',
		},
		{
			displayName: 'Servicename',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'The internal name of your storage',
		},
		{
			displayName: 'Size',
			name: 'size',
			type: 'number',
			default: 0,
			required: true,
			description: 'Partition size',
		},
	];
}

/**
 * Create a new partition
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const protocol = this.getNodeParameter('protocol', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const size = this.getNodeParameter('size', _itemIndex);
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['partitionName'] = partitionName;
		body['protocol'] = protocol;
		body['size'] = size;
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
