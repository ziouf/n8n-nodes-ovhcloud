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
 * Return statistics about the partition
 *
 * HTTP method: GET
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/use
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const qs: IDataObject = {};
			qs['type'] = this.getNodeParameter('type', _itemIndex, '') as string;
	const data = (await client.httpGet('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName) + '/use', qs)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
