/**
 * @brief Secret resource operations for n8n node
 *
 * Provides operations for managing OVHcloud secrets including:
 * - Retrieve a secret sent by email
 *
 * Available operations:
 * - `retrieve`: RetrieveSecret - Retrieve a secret sent by email
 *
 * @remarks
 * Secret services are managed under `/secret` route.
 * Only one endpoint exists: POST /secret/retrieve (no authentication required).
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeRetrieve,
	description as descriptionRetrieve,
} from './retrieve.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Secret Operation',
			name: 'secretOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Retrieve',
					value: 'retrieve',
					action: 'Retrieve a secret sent by email',
				},
			],
			default: 'retrieve',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionRetrieve({
			...displayOptions,
			show: { ...displayOptions?.show, secretOperation: ['retrieve'] },
		}),
	];
}

/**
 * Executes the selected secret operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('secretOperation', 0, { extractValue: true });

	switch (operation) {
		case 'retrieve':
			return await executeRetrieve.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "secret"`);
}
