import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Stack operations
import * as list from './resources/list.operation';
import * as get from './resources/get.operation';
import * as serviceInfosGet from './resources/serviceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/serviceInfosUpdatePut.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'stackOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Get Stack Service Information',
				value: 'serviceInfosGet',
				action: 'Get service information of a Stack MIS service',
			},
			{
				name: 'Get Stack Service Properties',
				value: 'get',
				action: 'Get properties of a Stack MIS service',
			},
			{
				name: 'List Stack Services',
				value: 'list',
				action: 'List all available Stack MIS services',
			},
			{
				name: 'Update Stack Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update the service information of a Stack MIS service',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('stackOperation', 0) as string;

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
