import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Email Pro operations
import * as listServices from './resources/list.operation';
import * as getServiceByName from './resources/getByServiceNameGet.operation';
import * as updateSuspendStatusByServiceNamePut from './resources/updateSuspendStatusByServiceNamePut.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'emailProOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
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

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('emailProOperation', 0) as string;

	switch (operation) {
		case 'listServices':
			return listServices.execute.call(this);
		case 'getServiceByName':
			return getServiceByName.execute.call(this);
		case 'updateSuspendStatusByServiceName':
			return updateSuspendStatusByServiceNamePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
