import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Email Pro operations
import * as listServices from './resources/list.operation';
import * as getServiceByName from './resources/getByServiceNameGet.operation';
import * as updateSuspendStatusByServiceNamePut from './resources/updateSuspendStatusByServiceNamePut.operation';
import * as taskGetGet from './resources/taskGetGet.operation';
import * as taskListGet from './resources/taskListGet.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'emailProOperation',
		type: 'options',
		noDataExpression: true,
		default: 'getServiceByName',
		options: [
			{ displayName: 'Get Email Pro Task', name: 'emailProGetTask', value: 'emailProGetTask' },
			{
				displayName: 'List Email Pro Tasks',
				name: 'emailProListTasks',
				value: 'emailProListTasks',
			},
			{ displayName: 'Get Service By Name', name: 'getServiceByName', value: 'getServiceByName' },
			{ displayName: 'List Services', name: 'listServices', value: 'listServices' },
			{
				displayName: 'Update Suspend Status By Service Name',
				name: 'updateSuspendStatusByServiceName',
				value: 'updateSuspendStatusByServiceName',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('emailProOperation', 0) as string;

	switch (operation) {
		case 'emailProGetTask':
			return taskGetGet.execute.call(this, itemIndex ?? 0);
		case 'listServices':
			return listServices.execute.call(this, itemIndex ?? 0);
		case 'emailProListTasks':
			return taskListGet.execute.call(this, itemIndex ?? 0);
		case 'getServiceByName':
			return getServiceByName.execute.call(this, itemIndex ?? 0);
		case 'updateSuspendStatusByServiceName':
			return updateSuspendStatusByServiceNamePut.execute.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
