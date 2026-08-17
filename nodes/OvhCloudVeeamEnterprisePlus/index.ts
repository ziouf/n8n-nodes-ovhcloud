import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionConfirmTermination,
	execute as executeConfirmTermination,
} from './confirmTermination.operation';
import {
	description as descriptionGet,
	execute as executeGet,
} from './get.operation';
import {
	description as descriptionList,
	execute as executeList,
} from './list.operation';
import {
	description as descriptionRegister,
	execute as executeRegister,
} from './register.operation';
import {
	description as descriptionServiceInfos,
	execute as executeServiceInfos,
} from './serviceInfos.operation';

const { description, execute } = createOperationDispatcher(
	'veeamOperation',
	'veeamEnterprise',
	[
	{
		name: 'Confirm Termination',
		value: 'confirmTermination',
		action: 'Confirm service termination',
		execute: executeConfirmTermination,
		description: descriptionConfirmTermination,
	},
	{
		name: 'Get',
		value: 'get',
		action: 'Get Veeam Enterprise Plus service details',
		execute: executeGet,
		description: descriptionGet,
	},
	{
		name: 'Get Service Infos',
		value: 'serviceInfos',
		action: 'Get detailed service information',
		execute: executeServiceInfos,
		description: descriptionServiceInfos,
	},
	{
		name: 'List',
		value: 'list',
		action: 'List all Veeam Enterprise Plus services',
		execute: executeList,
		description: descriptionList,
		default: true,
	},
	{
		name: 'Register Backup Server',
		value: 'register',
		action: 'Register a Veeam backup server',
		execute: executeRegister,
		description: descriptionRegister,
	},
	],
);

export { description, execute };
