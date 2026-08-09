import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

// NewAccount operations
import * as newAccountPost from './resources/newAccountPost.operation';
import * as areaGet from './resources/areaGet.operation';
import * as contractsGet from './resources/contractsGet.operation';
import * as corporationTypeGet from './resources/corporationTypeGet.operation';
import * as countriesGet from './resources/countriesGet.operation';
import * as creationRulesPost from './resources/creationRulesPost.operation';
import * as legalformGet from './resources/legalformGet.operation';
import * as rulesPost from './resources/rulesPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'newAccountOperation',
		type: 'options',
		noDataExpression: true,
		default: 'areaGet',
		options: [
			{
				name: 'Create New Account',
				value: 'newAccountPost',
				action: 'Create a new OVHcloud identifier (nichandle)',
			},
			{
				name: 'Get Areas',
				value: 'areaGet',
				action: 'Retrieve all available areas for a given country',
			},
			{
				name: 'Get Contracts',
				value: 'contractsGet',
				action: 'Retrieve contracts governing identifier creation',
			},
			{
				name: 'Get Corporation Types',
				value: 'corporationTypeGet',
				action: 'Retrieve all available corporation types for a given country',
			},
			{
				name: 'Get Countries',
				value: 'countriesGet',
				action: 'Retrieve all available countries for an OVH company and subsidiary',
			},
			{
				name: 'Get Creation Rules',
				value: 'creationRulesPost',
				action: 'Retrieve creation rules for identifier fields',
			},
			{
				name: 'Get Legal Forms',
				value: 'legalformGet',
				action: 'Retrieve all available legal forms for a given country',
			},
			{
				name: 'Get Rules',
				value: 'rulesPost',
				action: 'Retrieve rules for creating or updating an identifier',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('newAccountOperation', 0) as string;

	switch (operation) {
		case 'newAccountPost':
			return newAccountPost.execute.call(this, itemIndex ?? 0);
		case 'areaGet':
			return areaGet.execute.call(this, itemIndex ?? 0);
		case 'contractsGet':
			return contractsGet.execute.call(this, itemIndex ?? 0);
		case 'corporationTypeGet':
			return corporationTypeGet.execute.call(this, itemIndex ?? 0);
		case 'countriesGet':
			return countriesGet.execute.call(this, itemIndex ?? 0);
		case 'creationRulesPost':
			return creationRulesPost.execute.call(this, itemIndex ?? 0);
		case 'legalformGet':
			return legalformGet.execute.call(this, itemIndex ?? 0);
		case 'rulesPost':
			return rulesPost.execute.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
