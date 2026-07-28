import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// alldom operations
import * as listAlldom from './resources/alldom/listAlldom.operation';
import * as getAlldomByServiceName from './resources/alldom/getAlldomByServiceName.operation';

// domain operations
import * as listDomains from './resources/domain/listDomains.operation';
import * as getDomainByServiceName from './resources/domain/getDomainByServiceName.operation';
import * as updateDomainByServiceName from './resources/domain/updateDomainByServiceName.operation';

// task operations
import * as listTasksByResourceTypeAndName from './resources/task/listTasksByResourceTypeAndName.operation';
import * as getTaskByResourceTypeNameAndId from './resources/task/getTaskByResourceTypeNameAndId.operation';

export function description(): INodeProperties[] {
	const props: INodeProperties[] = [
		{
			displayName: 'Resource Type',
			name: 'domainOperation',
			type: 'options',
			default: 'searchAlldom',
			options: [
				{
					name: 'All Domains (Alldom)',
					value: 'searchAlldom',
					description: 'List all alldoms for the account',
				},
				{
					name: 'Get Alldom Details',
					value: 'getAlldomByServiceName',
					description: 'Get details of an specific alldom service',
				},
				{
					name: 'Get Domain Details',
					value: 'getDomainByServiceName',
					description: 'Get details of an specific domain service',
				},
				{
					name: 'List Domains (Name)',
					value: 'listDomains',
					description: 'List all domains for the account',
				},
				{
					name: 'Update Domain',
					value: 'updateDomainByServiceName',
					description: 'Update a specific domain with new configuration',
				},
			],
		},
	];

	// alldom operations params (only show when resourceType === 'alldom')
	props.push(...listAlldom.description());
	props.push(...getAlldomByServiceName.description());

	// domain operations params (only show when resourceType === 'name')
	props.push(...listDomains.description(), ...getDomainByServiceName.description());

	// task operations params (always shown since they have their own resourceType selector)
	props.push(...listTasksByResourceTypeAndName.description());
	props.push(...getTaskByResourceTypeNameAndId.description());

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainOperation', 0) as string;

	switch (operation) {
		case 'searchAlldom':
			return listAlldom.execute.call(this);
		case 'getAlldomByServiceName':
			return getAlldomByServiceName.execute.call(this);
		case 'listDomains':
			return listDomains.execute.call(this);
		case 'getDomainByServiceName':
			return getDomainByServiceName.execute.call(this);
		case 'updateDomainByServiceName':
			return updateDomainByServiceName.execute.call(this);
		default: {
			throw new Error(`No handler for operation '${operation}'`);
		}
	}
}
