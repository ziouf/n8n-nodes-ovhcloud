import type {
	IDataObject,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../shared/nodes/locators';

export function description(): INodeProperties[] {
	return [
		{
			displayName: 'Ip',
			name: 'ip',
			type: 'string',
			default: '',
			required: true,
			description: 'The ip in root on storage',
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
			...serviceNameLocator({
				searchListMethod: 'getDedicatedNashaServices',
				displayName: 'Servicename',
				description: 'The internal name of your storage',
			}),
		},
	];
}

/**
 * Delete an ACL entry
 *
 * HTTP method: DELETE
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/access/{ip}
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const ip = this.getNodeParameter('ip', _itemIndex) as string;
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const data = (await client.httpDelete('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName) + '/access/' + encodeURIComponent(ip))) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
