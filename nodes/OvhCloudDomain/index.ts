import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// Domain operations - import all available resources
import * as listAlldoms from './resources/listAlldoms.operation';
import * as getAlldomByServiceName from './resources/getAlldomByServiceName.operation';
import * as listDomains from './resources/listDomains.operation';
import { execute as getDomainByServiceNameExecute } from './resources/getDomainByServiceName.operation';
import { execute as updateDomainByServiceNameExecute } from './resources/updateDomainByServiceName.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical)
	props.push({
		displayName: 'Operation',
		name: 'domainOperation',
		type: 'options',
		noDataExpression: true,
		default: undefined,
		options: [
			{
				displayName: 'Get Alldom By Service Name',
				name: 'getAlldomByServiceName',
				value: 'getAlldomByServiceName',
			},
			{
				displayName: 'Get Domain By Service Name',
				name: 'getDomainByServiceName',
				value: 'getDomainByServiceName',
			},
			{ displayName: 'List Domains', name: 'listDomains', value: 'listDomains' },
			{ displayName: 'List Tasks', name: 'listTasks', value: 'listTasks' },
			{ displayName: 'List All Domains (alldoms)', name: 'searchAlldom', value: 'searchAlldom' },
			{
				displayName: 'Update Domain By Service Name',
				name: 'updateDomainByServiceName',
				value: 'updateDomainByServiceName',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainOperation', 0) as string;

	switch (operation) {
		case 'searchAlldom':
			return listAlldoms.execute.call(this);
		case 'getAlldomByServiceName':
			return getAlldomByServiceName.execute.call(this);
		case 'listDomains':
			return listDomains.execute.call(this);
		case 'getDomainByServiceName':
			return getDomainByServiceNameExecute.call(this);
		case 'updateDomainByServiceName':
			return updateDomainByServiceNameExecute.call(this);
		default: {
			throw new Error(`No handler for operation '${operation}'`);
		}
	}
}
