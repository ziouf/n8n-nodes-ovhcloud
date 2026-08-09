import type {
	IDataObject,
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { ApiClient } from '../../../../shared/transport/ApiClient';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Horizon View Service Name',
			name: 'serviceName',
			type: 'resourceLocator',
			default: { mode: 'list', value: '' },
			required: true,
			description: 'The domain of the Horizon View service (e.g. service1)',
			modes: [
				{
					displayName: 'From List',
					name: 'list',
					type: 'list',
					typeOptions: { searchListMethod: 'getHorizonViewServices', searchable: true },
				},
				{
					displayName: 'By Name',
					name: 'name',
					type: 'string',
					placeholder: 'service1',
				},
			],
			displayOptions,
		},
		{
			displayName: 'State',
			name: 'state',
			type: 'options',
			default: 'canceled',
			noDataExpression: true,
			options: [
				{ name: 'Canceled', value: 'canceled' },
				{ name: 'Doing', value: 'doing' },
				{ name: 'Done', value: 'done' },
				{ name: 'Error', value: 'error' },
				{ name: 'Fixing', value: 'fixing' },
				{ name: 'To Cancel', value: 'toCancel' },
				{ name: 'To Create', value: 'toCreate' },
				{ name: 'To Do', value: 'todo' },
				{ name: 'Unknown', value: 'unknown' },
				{ name: 'Waiting For Childs', value: 'waitingForChilds' },
				{ name: 'Waiting To Do', value: 'waitingTodo' },
			],
			description: 'Filter the value of the state property',
			displayOptions,
		},
	];
}

/**
 * List tasks of the dedicated Horizon component.
 *
 * HTTP method: GET
 * Endpoint: /horizonView/{serviceName}/dedicatedHorizon/task
 */
export async function execute(this: IExecuteFunctions, _itemIndex?: number): Promise<INodeExecutionData[]> {
	const client = new ApiClient(this);
	const serviceName = this.getNodeParameter('serviceName', _itemIndex ?? 0, '', { extractValue: true }) as string;

	const state = (this.getNodeParameter('state', _itemIndex ?? 0, '') as string) || '';
	const qs: IDataObject = state ? { state } : {};

	const data = (await client.httpGet(
		`/horizonView/${encodeURIComponent(serviceName)}/dedicatedHorizon/task`,
		qs,
	)) as unknown[];
	const items = data.map((item) =>
		typeof item === 'number' ? { taskId: item } : (item as IDataObject),
	) as IDataObject[];
	return this.helpers.returnJsonArray(items);
}
