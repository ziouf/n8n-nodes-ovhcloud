import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// AllDom operations
import * as list from './resources/allDomListGet.operation';
import * as get from './resources/allDomGetGet.operation';
import * as domainList from './resources/allDomDomainListGet.operation';
import * as domainGet from './resources/allDomDomainGetGet.operation';
import * as serviceInfosGet from './resources/allDomServiceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/allDomServiceInfosUpdatePut.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'allDomOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Get AllDom Domain Properties',
				value: 'domainGet',
				action: 'Get properties of an AllDom domain',
			},
			{
				name: 'Get AllDom Service Information',
				value: 'serviceInfosGet',
				action: 'Get service information of an AllDom service',
			},
			{
				name: 'Get AllDom Service Properties',
				value: 'get',
				action: 'Get properties of an AllDom service',
			},
			{
				name: 'List AllDom Domains',
				value: 'domainList',
				action: 'List all domains attached to an AllDom service',
			},
			{
				name: 'List AllDom Services',
				value: 'list',
				action: 'List all available AllDom services',
			},
			{
				name: 'Update AllDom Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update the service information of an AllDom service',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('allDomOperation', 0) as string;

	switch (operation) {
		case 'domainGet':
			return domainGet.execute.call(this, itemIndex ?? 0);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this, itemIndex ?? 0);
		case 'get':
			return get.execute.call(this, itemIndex ?? 0);
		case 'domainList':
			return domainList.execute.call(this, itemIndex ?? 0);
		case 'list':
			return list.execute.call(this, itemIndex ?? 0);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
