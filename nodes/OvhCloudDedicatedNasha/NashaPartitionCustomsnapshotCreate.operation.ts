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
			displayName: 'Expiration',
			name: 'expiration',
			type: 'string',
			default: '',
			description: 'Optional expiration date/time, in iso8601 format',
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			required: true,
			description: 'The name of the snapshot',
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
 * Create a new snapshot
 *
 * HTTP method: POST
 * Endpoint: /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
 */
export async function execute(this: IExecuteFunctions,
	_itemIndex: number): Promise<INodeExecutionData[]> {
	const name = this.getNodeParameter('name', _itemIndex) as string;
	const partitionName = this.getNodeParameter('partitionName', _itemIndex) as string;
	const serviceName = this.getNodeParameter('serviceName', _itemIndex, { extractValue: true }) as string;
	const client = getClient(this);
	const body: IDataObject = {};
			body['name'] = name;
	const data = (await client.httpPost('/dedicated/nasha/' + encodeURIComponent(serviceName) + '/partition/' + encodeURIComponent(partitionName) + '/customSnapshot', body)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
