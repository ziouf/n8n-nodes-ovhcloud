import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { getClient } from '../../../shared/transport/ApiClient';
import { serviceNameLocator } from '../../../shared/nodes/locators';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			...serviceNameLocator({
				searchListMethod: 'getDedicatedCloudServices',
				displayName: 'Service Name',
				description: 'The name/ID of the VMware on OVHcloud infrastructure',
				placeholder: '12345678-1234-1234-1234-1234567890ab',
			}),
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
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Filter the value of name property (like)',
			displayOptions,
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'options',
			options: [
				{ name: 'Canceled', value: 'canceled' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'error', value: 'error' },
				{ name: 'Fixing', value: 'fixing' },
				{ name: 'toCancel', value: 'toCancel' },
				{ name: 'toCreate', value: 'toCreate' },
				{ name: 'Todo', value: 'todo' },
				{ name: 'Unknown', value: 'unknown' },
				{ name: 'waitingForChilds', value: 'waitingForChilds' },
				{ name: 'waitingTodo', value: 'waitingTodo' },
			],
			default: 'canceled',
			description: 'Filter the value of state property (=)',
			displayOptions,
		},
		{
			displayName: 'Return All',
			name: 'returnAll',
			type: 'boolean',
			default: false,
			description: 'Whether to return all results or only up to a given limit',
			displayOptions,
		},
		{
			displayName: 'Limit',
			name: 'limit',
			type: 'number',
			typeOptions: {
				minValue: 1,
			},
			default: 50,
			description: 'Max number of results to return',
			displayOptions: {
				show: {
					returnAll: [false],
				},
			},
		},
	];
}

/**
 * Executes the List operations associated to datastore operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/filer/{filerId}/task
 */
export async function execute(
	this: IExecuteFunctions,
	_itemIndex: number,
): Promise<INodeExecutionData[]> {
	const client = getClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const filerId = this.getNodeParameter('filerId', _itemIndex) as string;
	const name = this.getNodeParameter('name', _itemIndex, '') as string;
	const state = this.getNodeParameter('state', _itemIndex, '') as string;
	const qs: IDataObject = {};
	if (name !== '') {
		qs.name = name;
	}
	if (state !== '') {
		qs.state = state;
	}
	const data = (await client.httpGet(
		`/dedicatedCloud/${serviceName}/filer/${filerId}/task`,
		qs,
	)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', _itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', _itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
