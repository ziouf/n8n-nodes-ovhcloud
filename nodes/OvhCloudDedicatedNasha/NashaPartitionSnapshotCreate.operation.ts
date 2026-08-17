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
		{
			displayName: 'Snapshottype',
			name: 'snapshotType',
			type: 'string',
			default: '',
			required: true,
			description: 'Snapshot interval to add',
		},
	];
}

/**
 * Schedule a new snapshot type
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/snapshot
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const snapshotType = this.getNodeParameter('snapshotType', _itemIndex) as string;
	const client = getClient(this);
	const body: IDataObject = {};
			body['snapshotType'] = snapshotType;
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName) + '/snapshot', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
