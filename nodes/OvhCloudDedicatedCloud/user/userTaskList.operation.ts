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
			description: 'The name/ID of the VMware on OVHcloud infrastructure',
			displayOptions,
		},
		{
			displayName: 'User ID',
			name: 'userId',
			type: 'number',
			default: 0,
			required: true,
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
 * Executes the List operations associated to user operation.
 *
 * HTTP method: GET
 * Endpoint: /dedicatedCloud/{serviceName}/user/{userId}/task
 */
export async function execute(this: IExecuteFunctions, itemIndex: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', itemIndex) as string;
	const userId = this.getNodeParameter('userId', itemIndex) as string;
	const name = this.getNodeParameter('name', itemIndex, '') as string;
	const state = this.getNodeParameter('state', itemIndex, '') as string;
	const qs: IDataObject = {};
	if (name !== '') { qs.name = name; }
	if (state !== '') { qs.state = state; }
	const data = (await client.httpGet(`/dedicatedCloud/${serviceName}/user/${userId}/task`, qs)) as IDataObject;
	const returnAll = this.getNodeParameter('returnAll', itemIndex) as boolean;

	if (returnAll) {
		return data as unknown as INodeExecutionData[];
	}

	const limit = this.getNodeParameter('limit', itemIndex) as number;
	return (data as unknown as INodeExecutionData[]).slice(0, limit);
}
