import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeDomainalldomListGet,
	description as descriptionDomainalldomListGet,
} from './domainalldomListGet.operation';
import {
	execute as executeDomainalldomListGet2,
	description as descriptionDomainalldomListGet2,
} from './domainalldomListGet2.operation';
import {
	execute as executeDomainalldomtaskListGet,
	description as descriptionDomainalldomtaskListGet,
} from './domainalldomtaskListGet.operation';
import {
	execute as executeDomainalldomtaskListGet2,
	description as descriptionDomainalldomtaskListGet2,
} from './domainalldomtaskListGet2.operation';
import {
	execute as executeDomainnameListGet,
	description as descriptionDomainnameListGet,
} from './domainnameListGet.operation';
import {
	execute as executeDomainnameListGet2,
	description as descriptionDomainnameListGet2,
} from './domainnameListGet2.operation';
import {
	execute as executeDomainnameUpdatePut,
	description as descriptionDomainnameUpdatePut,
} from './domainnameUpdatePut.operation';
import {
	execute as executeDomainnametaskListGet,
	description as descriptionDomainnametaskListGet,
} from './domainnametaskListGet.operation';
import {
	execute as executeDomainnametaskListGet2,
	description as descriptionDomainnametaskListGet2,
} from './domainnametaskListGet2.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'domainOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List all the AllDom resources',
				value: 'domainalldomListGet',
				action: 'List all the AllDom resources',
			},
			{
				name: 'Get an AllDom resource',
				value: 'domainalldomListGet2',
				action: 'Get an AllDom resource',
			},
			{
				name: 'List tasks related to a managed AllDom resource',
				value: 'domainalldomtaskListGet',
				action: 'List tasks related to a managed AllDom resource',
			},
			{
				name: 'Get a specific task related to a managed AllDom resource',
				value: 'domainalldomtaskListGet2',
				action: 'Get a specific task related to a managed AllDom resource',
			},
			{
				name: 'List all domain name resources',
				value: 'domainnameListGet',
				action: 'List all domain name resources',
			},
			{
				name: 'Get a domain name resource',
				value: 'domainnameListGet2',
				action: 'Get a domain name resource',
			},
			{
				name: 'Update an existing domain name by modifying various configurations through the targetSpec',
				value: 'domainnameUpdatePut',
				action: 'Update an existing domain name by modifying various configurations through the targetSpec',
			},
			{
				name: 'List tasks related to a managed domain name resource',
				value: 'domainnametaskListGet',
				action: 'List tasks related to a managed domain name resource',
			},
			{
				name: 'Get a specific task related to a managed domain name resource',
				value: 'domainnametaskListGet2',
				action: 'Get a specific task related to a managed domain name resource',
			},

			],
			default: 'domainalldomListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionDomainalldomListGet({
			...displayOptions,
			show: { domainOperation: ['domainalldomListGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainalldomListGet2({
			...displayOptions,
			show: { domainOperation: ['domainalldomListGet2'] },
		}) as INodeProperties[]),
		...(descriptionDomainalldomtaskListGet({
			...displayOptions,
			show: { domainOperation: ['domainalldomtaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainalldomtaskListGet2({
			...displayOptions,
			show: { domainOperation: ['domainalldomtaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionDomainnameListGet({
			...displayOptions,
			show: { domainOperation: ['domainnameListGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainnameListGet2({
			...displayOptions,
			show: { domainOperation: ['domainnameListGet2'] },
		}) as INodeProperties[]),
		...(descriptionDomainnameUpdatePut({
			...displayOptions,
			show: { domainOperation: ['domainnameUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionDomainnametaskListGet({
			...displayOptions,
			show: { domainOperation: ['domainnametaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionDomainnametaskListGet2({
			...displayOptions,
			show: { domainOperation: ['domainnametaskListGet2'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('domainOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'domainalldomListGet':
			return executeDomainalldomListGet.call(this, itemIndex);
		case 'domainalldomListGet2':
			return executeDomainalldomListGet2.call(this, itemIndex);
		case 'domainalldomtaskListGet':
			return executeDomainalldomtaskListGet.call(this, itemIndex);
		case 'domainalldomtaskListGet2':
			return executeDomainalldomtaskListGet2.call(this, itemIndex);
		case 'domainnameListGet':
			return executeDomainnameListGet.call(this, itemIndex);
		case 'domainnameListGet2':
			return executeDomainnameListGet2.call(this, itemIndex);
		case 'domainnameUpdatePut':
			return executeDomainnameUpdatePut.call(this, itemIndex);
		case 'domainnametaskListGet':
			return executeDomainnametaskListGet.call(this, itemIndex);
		case 'domainnametaskListGet2':
			return executeDomainnametaskListGet2.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudDomainV2"`);
}
