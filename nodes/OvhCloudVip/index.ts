import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// VIP operations
import * as list from './resources/list.operation';
import * as get from './resources/get.operation';
import * as serviceInfosGet from './resources/serviceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/serviceInfosUpdatePut.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'vipOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Get VIP Service Information',
				value: 'serviceInfosGet',
				action: 'Get service information of a VIP service',
			},
			{
				name: 'Get VIP Service Properties',
				value: 'get',
				action: 'Get properties of a VIP service',
			},
			{
				name: 'List VIP Services',
				value: 'list',
				action: 'List all available VIP services',
			},
			{
				name: 'Update VIP Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update the service information of a VIP service',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vipOperation', 0) as string;

	switch (operation) {
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
