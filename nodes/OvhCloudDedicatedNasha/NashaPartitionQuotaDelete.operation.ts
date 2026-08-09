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
 * Delete a given quota
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/quota/{uid}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const uid = this.getNodeParameter('uid', _itemIndex) as string;
	const client = new ApiClient(this);
	const data = (await client.httpDelete('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName) + '/quota/' + encodeURIComponent(uid))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
