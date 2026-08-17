import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as changeContactPostExecute } from './resources/changeContactPost.operation';
import { execute as confirmTerminationPostExecute } from './resources/confirmTerminationPost.operation';
import { execute as tokenCreatePostExecute } from './resources/tokenCreatePost.operation';
import { execute as tokenDeleteExecute } from './resources/tokenDelete.operation';
import { execute as updatePutExecute } from './resources/updatePut.operation';
import { execute as tokenUpdatePutExecute } from './resources/tokenUpdatePut.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as consumptionGetExecute } from './resources/consumptionGet.operation';
import { execute as quotaGetExecute } from './resources/quotaGet.operation';
import { execute as tokenDetailGetExecute } from './resources/tokenDetailGet.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as tokenGetExecute } from './resources/tokenGet.operation';
import { execute as quotaSetPutExecute } from './resources/quotaSetPut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'metricsOperation',
	'metrics',
	[
	{
		name: 'Change Metrics Contact',
		value: 'changeContactPost',
		action: 'Launch a contact change procedure for a Metrics service',
		execute: changeContactPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Metrics Service Termination',
		value: 'confirmTerminationPost',
		action: 'Confirm termination of a Metrics service',
		execute: confirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Create Metrics Token',
		value: 'tokenCreatePost',
		action: 'Create a new token for a Metrics service',
		execute: tokenCreatePostExecute,
		description: noProps,
	},
	{
		name: 'Delete Metrics Token',
		value: 'tokenDelete',
		action: 'Revoke a Metrics token',
		execute: tokenDeleteExecute,
		description: noProps,
	},
	{
		name: 'Edit Metrics Service',
		value: 'updatePut',
		action: 'Modify the description of a Metrics service',
		execute: updatePutExecute,
		description: noProps,
	},
	{
		name: 'Edit Metrics Token',
		value: 'tokenUpdatePut',
		action: 'Modify a Metrics token',
		execute: tokenUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'Get Metrics Service',
		value: 'get',
		action: 'Get properties of a Metrics service',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get Metrics Service Consumption',
		value: 'consumptionGet',
		action: 'Get consumption for a Metrics service',
		execute: consumptionGetExecute,
		description: noProps,
	},
	{
		name: 'Get Metrics Service Quota',
		value: 'quotaGet',
		action: 'Get the quota of a Metrics service',
		execute: quotaGetExecute,
		description: noProps,
	},
	{
		name: 'Get Metrics Token',
		value: 'tokenDetailGet',
		action: 'Get details of a specific Metrics token',
		execute: tokenDetailGetExecute,
		description: noProps,
	},
	{
		name: 'List Metrics Services',
		value: 'list',
		action: 'List all available Metrics services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'List Metrics Tokens',
		value: 'tokenGet',
		action: 'List all tokens of a Metrics service',
		execute: tokenGetExecute,
		description: noProps,
	},
	{
		name: 'Set Metrics Service Quota',
		value: 'quotaSetPut',
		action: 'Set the overquota of a Metrics service',
		execute: quotaSetPutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
