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
			displayName: 'Partitionname',
			name: 'partitionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The given name of partition',
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
			description: 'The size to set in MB',
		},
		{
			displayName: 'Uid',
			name: 'uid',
			type: 'number',
			default: 0,
			required: true,
			description: 'The uid to set quota on',
		},
	];
}

/**
 * Set a new quota
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/quota
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const size = this.getNodeParameter('size', _itemIndex);
	const uid = this.getNodeParameter('uid', _itemIndex);
	const client = new ApiClient(this);
	const body: IDataObject = {};
			body['size'] = size;
		body['uid'] = uid;
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName) + '/quota', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
