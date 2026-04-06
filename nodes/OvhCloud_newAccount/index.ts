/**
 * @brief New Account resource operations for n8n node
 *
 * Provides operations for managing OVH New Account services including:
 * - Create account, get areas, contracts, corporation types, countries,
 *   creation rules, legal forms, and rules validation.
 *
 * Available operations:
 * - `createAccount`: Create a new OVH account
 * - `getAreas`: Get available areas
 * - `getContracts`: Get available contracts
 * - `getCorporationTypes`: Get corporation types
 * - `getCountries`: Get available countries
 * - `getCreationRules`: Get creation rules
 * - `getLegalForms`: Get legal forms
 * - `getRules`: Get rules by providing account details
 *
 * @remarks
 * New Account operations are managed under `/newAccount` route.
 * No authentication required for these endpoints.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	descriptionCreateAccount,
	executeCreateAccount,
} from './resources/createAccount';
import { descriptionGetAreas, executeGetAreas } from './resources/area';
import { descriptionGetContracts, executeGetContracts } from './resources/contracts';
import {
	descriptionGetCorporationTypes,
	executeGetCorporationTypes,
} from './resources/corporationType';
import { descriptionGetCountries, executeGetCountries } from './resources/countries';
import { descriptionGetCreationRules, executeGetCreationRules } from './resources/creationRules';
import { descriptionGetLegalForms, executeGetLegalForms } from './resources/legalform';
import { descriptionGetRules, executeGetRules } from './resources/rules';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'operation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create Account',
					value: 'createAccount',
					action: 'Create a new OVH account',
				},
				{
					name: 'Get Areas',
					value: 'getAreas',
					action: 'Get available areas',
				},
				{
					name: 'Get Contracts',
					value: 'getContracts',
					action: 'Get available contracts',
				},
				{
					name: 'Get Corporation Types',
					value: 'getCorporationTypes',
					action: 'Get corporation types',
				},
				{
					name: 'Get Countries',
					value: 'getCountries',
					action: 'Get available countries',
				},
				{
					name: 'Get Creation Rules',
					value: 'getCreationRules',
					action: 'Get creation rules',
				},
				{
					name: 'Get Legal Forms',
					value: 'getLegalForms',
					action: 'Get legal forms',
				},
				{
					name: 'Get Rules',
					value: 'getRules',
					action: 'Get rules by providing account details',
				},
			],
			default: 'createAccount',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionCreateAccount({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['createAccount'] },
		}),
		...descriptionGetAreas({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['getAreas'] },
		}),
		...descriptionGetContracts({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['getContracts'] },
		}),
		...descriptionGetCorporationTypes({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['getCorporationTypes'] },
		}),
		...descriptionGetCountries({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['getCountries'] },
		}),
		...descriptionGetCreationRules({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['getCreationRules'] },
		}),
		...descriptionGetLegalForms({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['getLegalForms'] },
		}),
		...descriptionGetRules({
			...displayOptions,
			show: { ...displayOptions?.show, operation: ['getRules'] },
		}),
	];
}

/**
 * Executes the selected New Account operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('operation', 0, { extractValue: true });

	switch (operation) {
		case 'createAccount':
			return await executeCreateAccount.call(this);
		case 'getAreas':
			return await executeGetAreas.call(this);
		case 'getContracts':
			return await executeGetContracts.call(this);
		case 'getCorporationTypes':
			return await executeGetCorporationTypes.call(this);
		case 'getCountries':
			return await executeGetCountries.call(this);
		case 'getCreationRules':
			return await executeGetCreationRules.call(this);
		case 'getLegalForms':
			return await executeGetLegalForms.call(this);
		case 'getRules':
			return await executeGetRules.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "newAccount"`);
}
