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
			displayName: 'Partitionname',
			name: 'partitionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The given name of partition',
		},
		{
			...SERVICE_NAME,
		},
	];
}

/**
 * Alter this object properties
 *
 * HTTP method: PUT
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const data = (await client.httpPut('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
