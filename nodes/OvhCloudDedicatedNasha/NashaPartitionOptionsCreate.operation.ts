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
			displayName: 'Atime',
			name: 'atime',
			type: 'string',
			default: '',
			description: 'Atime setting',
		},
		{
			displayName: 'Partitionname',
			name: 'partitionName',
			type: 'string',
			default: '',
			required: true,
			description: 'The given name of partition',
		},
		{
			displayName: 'Recordsize',
			name: 'recordsize',
			type: 'string',
			default: '',
			description: 'ZFS recordsize',
		},
		{
			...SERVICE_NAME,
		},
		{
			displayName: 'Sync',
			name: 'sync',
			type: 'string',
			default: '',
			description: 'Sync setting',
		},
		{
			displayName: 'Templatename',
			name: 'templateName',
			type: 'string',
			default: '',
			description: 'The name of the usage template to apply for this partition',
		},
	];
}

/**
 * Setup options
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/options
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName) + '/options')) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
