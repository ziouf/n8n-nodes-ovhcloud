/**
 * @brief Partner resource operations for n8n node
 *
 * Provides operations for managing OVHcloud partner information including:
 * - Get partner status
 * - Register as a partner
 *
 * Available operations:
 * - `get`: GetPartner - Get partner status
 * - `register`: RegisterPartner - Register as a partner
 *
 * @remarks
 * Partners are managed under `/partner` route.
 * Only 2 endpoints exist: GET /partner and POST /partner.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import {
	execute as executeRegister,
	description as descriptionRegister,
} from './register.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Partner Operation',
			name: 'partnerOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get partner status',
				},
				{
					name: 'Register',
					value: 'register',
					action: 'Register as a partner',
				},
			],
			default: 'get',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, partnerOperation: ['get'] },
		}),
		...descriptionRegister({
			...displayOptions,
			show: { ...displayOptions?.show, partnerOperation: ['register'] },
		}),
	];
}

/**
 * Executes the selected partner operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('partnerOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
		case 'register':
			return await executeRegister.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "partner"`);
}
