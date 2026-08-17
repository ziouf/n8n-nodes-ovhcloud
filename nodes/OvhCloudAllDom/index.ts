import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as domainGetExecute } from './resources/allDomDomainGetGet.operation';
import { execute as serviceInfosGetExecute } from './resources/allDomServiceInfosGet.operation';
import { execute as getExecute } from './resources/allDomGetGet.operation';
import { execute as domainListExecute } from './resources/allDomDomainListGet.operation';
import { execute as listExecute } from './resources/allDomListGet.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/allDomServiceInfosUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'allDomOperation',
	'alldom',
	[
	{
		name: 'Get AllDom Domain Properties',
		value: 'domainGet',
		action: 'Get properties of an AllDom domain',
		execute: domainGetExecute,
		description: noProps,
	},
	{
		name: 'Get AllDom Service Information',
		value: 'serviceInfosGet',
		action: 'Get service information of an AllDom service',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get AllDom Service Properties',
		value: 'get',
		action: 'Get properties of an AllDom service',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'List AllDom Domains',
		value: 'domainList',
		action: 'List all domains attached to an AllDom service',
		execute: domainListExecute,
		description: noProps,
	},
	{
		name: 'List AllDom Services',
		value: 'list',
		action: 'List all available AllDom services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Update AllDom Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update the service information of an AllDom service',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
