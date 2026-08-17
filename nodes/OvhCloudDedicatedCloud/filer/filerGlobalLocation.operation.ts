import { SERVICE_NAME_2 } from '../serviceName';
import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...SERVICE_NAME_2,
			displayOptions,
		},
		{
			displayName: 'Filer ID',
			name: 'filerId',
			type: 'number',
			default: 0,
			required: true,
			description: 'ID of the global datastore',
			displayOptions,
		},
		{
			displayName: 'Node',
			name: 'node',
			type: 'options',
			options: [
				{ name: 'Master', value: 'master' },
				{ name: 'Slave', value: 'slave' },
			],
			default: 'master',
			description: 'Filer cluster node used to get location (default value: master)',
			displayOptions,
		},
	];
}

/**
 * Executes the Get datastore location operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/filer/{filerId}/location
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const filerId = this.getNodeParameter('filerId', _itemIndex) as string;
	const node = this.getNodeParameter('node', _itemIndex, '') as string;
	const qs: IDataObject = {};
	if (node !== '') {
		qs.node = node;
	}
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/filer/${filerId}/location`,
		qs,
	)) as IDataObject;
	return this.helpers.returnJsonArray([data]);
}
