/**
 * @brief Startup resource operations for n8n node
 *
 * Provides operations for managing OVHcloud startup services including:
 * - Get startup status
 * - Register a startup
 *
 * Available operations:
 * - `get`: GetStartup - Get startup status
 * - `register`: RegisterStartup - Register a startup
 *
 * @remarks
 * Startup services are managed under `/startup` route.
 * Only 2 endpoints exist: GET /startup and POST /startup.
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
			displayName: 'Startup Operation',
			name: 'startupOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get',
					value: 'get',
					action: 'Get startup status',
				},
				{
					name: 'Register',
					value: 'register',
					action: 'Register a startup',
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
			show: { ...displayOptions?.show, startupOperation: ['get'] },
		}),
		...descriptionRegister({
			...displayOptions,
			show: { ...displayOptions?.show, startupOperation: ['register'] },
		}),
	];
}

/**
 * Executes the selected startup operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('startupOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
		case 'register':
			return await executeRegister.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "startup"`);
}
