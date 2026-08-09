import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Service Name',
			name: 'serviceName',
			type: 'string',
			default: '',
			required: true,
			description: 'Domain of the service',
			displayOptions,
		},
		{
			displayName: 'Datacenter ID',
			name: 'datacenterId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by datacenter ID',
			displayOptions,
		},
		{
			displayName: 'End Date From',
			name: 'endDate.from',
			type: 'string',
			default: '',
			description: 'Filter the tasks by end date (>=)',
			displayOptions,
		},
		{
			displayName: 'End Date To',
			name: 'endDate.to',
			type: 'string',
			default: '',
			description: 'Filter the tasks by end date (<=)',
			displayOptions,
		},
		{
			displayName: 'Execution Date From',
			name: 'executionDate.from',
			type: 'string',
			default: '',
			description: 'Filter the tasks by execution date (>=)',
			displayOptions,
		},
		{
			displayName: 'Execution Date To',
			name: 'executionDate.to',
			type: 'string',
			default: '',
			description: 'Filter the tasks by execution date (<=)',
			displayOptions,
		},
		{
			displayName: 'Filer ID',
			name: 'filerId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by filer ID',
			displayOptions,
		},
		{
			displayName: 'Host ID',
			name: 'hostId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by host ID',
			displayOptions,
		},
		{
			displayName: 'Last Modification Date From',
			name: 'lastModificationDate.from',
			type: 'string',
			default: '',
			description: 'Filter the tasks by last modification date (>=)',
			displayOptions,
		},
		{
			displayName: 'Last Modification Date To',
			name: 'lastModificationDate.to',
			type: 'string',
			default: '',
			description: 'Filter the tasks by last modification date (<=)',
			displayOptions,
		},
		{
			displayName: 'Name',
			name: 'name',
			type: 'string',
			default: '',
			description: 'Filter the tasks by name',
			displayOptions,
		},
		{
			displayName: 'Network Access ID',
			name: 'networkAccessId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by network access ID',
			displayOptions,
		},
		{
			displayName: 'Order ID',
			name: 'orderId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by order ID',
			displayOptions,
		},
		{
			displayName: 'Parent Task ID',
			name: 'parentTaskId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by parent task ID',
			displayOptions,
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'multiOptions',
			options: [
				{ name: 'Canceled', value: 'canceled' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'Error', value: 'error' },
				{ name: 'Fixing', value: 'fixing' },
				{ name: 'To Cancel', value: 'toCancel' },
				{ name: 'To Create', value: 'toCreate' },
				{ name: 'Todo', value: 'todo' },
				{ name: 'Unknown', value: 'unknown' },
				{ name: 'Waiting For Childs', value: 'waitingForChilds' },
				{ name: 'Waiting Todo', value: 'waitingTodo' },
			],
			default: [],
			description: 'Filter the tasks by state',
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by user ID',
			displayOptions,
		},
		{
			displayName: 'vLAN ID',
			name: 'vlanId',
			type: 'number',
			default: 0,
			description: 'Filter the tasks by vlan ID',
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
 * Executes the List Filtered Operations operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/globalTasks
 */
export async function execute(this: IExecuteFunctions, _itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex) as string;
	const qs: IDataObject = {};
	const datacenterId = this.getNodeParameter('datacenterId', _itemIndex) as number; if (datacenterId) { qs.datacenterId = datacenterId; }
	const endDate_from = this.getNodeParameter('endDate.from', _itemIndex, '') as string; if (endDate_from !== '') { qs['endDate.from'] = endDate_from; }
	const endDate_to = this.getNodeParameter('endDate.to', _itemIndex, '') as string; if (endDate_to !== '') { qs['endDate.to'] = endDate_to; }
	const executionDate_from = this.getNodeParameter('executionDate.from', _itemIndex, '') as string; if (executionDate_from !== '') { qs['executionDate.from'] = executionDate_from; }
	const executionDate_to = this.getNodeParameter('executionDate.to', _itemIndex, '') as string; if (executionDate_to !== '') { qs['executionDate.to'] = executionDate_to; }
	const filerId = this.getNodeParameter('filerId', _itemIndex) as number; if (filerId) { qs.filerId = filerId; }
	const hostId = this.getNodeParameter('hostId', _itemIndex) as number; if (hostId) { qs.hostId = hostId; }
	const lastModificationDate_from = this.getNodeParameter('lastModificationDate.from', _itemIndex, '') as string; if (lastModificationDate_from !== '') { qs['lastModificationDate.from'] = lastModificationDate_from; }
	const lastModificationDate_to = this.getNodeParameter('lastModificationDate.to', _itemIndex, '') as string; if (lastModificationDate_to !== '') { qs['lastModificationDate.to'] = lastModificationDate_to; }
	const name = this.getNodeParameter('name', _itemIndex, '') as string; if (name !== '') { qs.name = name; }
	const networkAccessId = this.getNodeParameter('networkAccessId', _itemIndex) as number; if (networkAccessId) { qs.networkAccessId = networkAccessId; }
	const orderId = this.getNodeParameter('orderId', _itemIndex) as number; if (orderId) { qs.orderId = orderId; }
	const parentTaskId = this.getNodeParameter('parentTaskId', _itemIndex) as number; if (parentTaskId) { qs.parentTaskId = parentTaskId; }
	const state = this.getNodeParameter('state', _itemIndex, []) as string[]; if (state.length > 0) { qs.state = state; }
	const userId = this.getNodeParameter('userId', _itemIndex) as number; if (userId) { qs.userId = userId; }
	const vlanId = this.getNodeParameter('vlanId', _itemIndex) as number; if (vlanId) { qs.vlanId = vlanId; }
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/globalTasks`, qs)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', _itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', _itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
