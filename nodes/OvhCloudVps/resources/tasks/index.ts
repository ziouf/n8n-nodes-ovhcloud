import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { descriptionTasksList, executeTasksList } from './list.operation';
import { descriptionTasksGet, executeTasksGet } from './get.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Tasks Operation',
			name: 'tasksOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Task',
					value: 'get',
				},
				{
					name: 'List Tasks',
					value: 'list',
				},
			],
			default: 'list',
			displayOptions,
		},
		...descriptionTasksList({
			...displayOptions,
			show: { ...displayOptions?.show, tasksOperation: ['list'] },
		}),
		...descriptionTasksGet({
			...displayOptions,
			show: { ...displayOptions?.show, tasksOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('tasksOperation', 0) as string;

	switch (operation) {
		case 'list':
			return await executeTasksList.call(this);
		case 'get':
			return await executeTasksGet.call(this);
		default:
			throw new Error(`The operation "${operation}" is not supported for the "tasks" resource.`);
	}
}
