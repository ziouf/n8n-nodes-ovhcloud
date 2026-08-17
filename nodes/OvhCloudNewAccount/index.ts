import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as newAccountPostExecute } from './resources/newAccountPost.operation';
import { execute as areaGetExecute } from './resources/areaGet.operation';
import { execute as contractsGetExecute } from './resources/contractsGet.operation';
import { execute as corporationTypeGetExecute } from './resources/corporationTypeGet.operation';
import { execute as countriesGetExecute } from './resources/countriesGet.operation';
import { execute as creationRulesPostExecute } from './resources/creationRulesPost.operation';
import { execute as legalformGetExecute } from './resources/legalformGet.operation';
import { execute as rulesPostExecute } from './resources/rulesPost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'newAccountOperation',
	'newaccount',
	[
	{
		name: 'Create New Account',
		value: 'newAccountPost',
		action: 'Create a new OVHcloud identifier (nichandle)',
		execute: newAccountPostExecute,
		description: noProps,
	},
	{
		name: 'Get Areas',
		value: 'areaGet',
		action: 'Retrieve all available areas for a given country',
		execute: areaGetExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Get Contracts',
		value: 'contractsGet',
		action: 'Retrieve contracts governing identifier creation',
		execute: contractsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Corporation Types',
		value: 'corporationTypeGet',
		action: 'Retrieve all available corporation types for a given country',
		execute: corporationTypeGetExecute,
		description: noProps,
	},
	{
		name: 'Get Countries',
		value: 'countriesGet',
		action: 'Retrieve all available countries for an OVH company and subsidiary',
		execute: countriesGetExecute,
		description: noProps,
	},
	{
		name: 'Get Creation Rules',
		value: 'creationRulesPost',
		action: 'Retrieve creation rules for identifier fields',
		execute: creationRulesPostExecute,
		description: noProps,
	},
	{
		name: 'Get Legal Forms',
		value: 'legalformGet',
		action: 'Retrieve all available legal forms for a given country',
		execute: legalformGetExecute,
		description: noProps,
	},
	{
		name: 'Get Rules',
		value: 'rulesPost',
		action: 'Retrieve rules for creating or updating an identifier',
		execute: rulesPostExecute,
		description: noProps,
	},
	],

);

export { description, execute };
