/**
 * @brief DedicatedInstallationTemplate resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Installation Templates including:
 * - List all Dedicated Installation Templates for the authenticated account
 * - Get detailed information about a specific Dedicated Installation Template
 *
 * Available operations:
 * - `list`: ListDedicatedInstallationTemplates - List all Dedicated Installation Templates
 * - `get`: GetDedicatedInstallationTemplate - Get details of a specific Dedicated Installation Template
 *
 * @remarks
 * Dedicated Installation Templates are managed under `/dedicated/installationTemplate` route.
 * Template name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Dedicated Installation Template Operation',
			name: 'dedicatedInstallationTemplateOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Installation Templates',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Installation Template',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedInstallationTemplateOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedInstallationTemplateOperation: ['get'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Installation Template operation (list, get).
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedInstallationTemplateOperation', 0, {
		extractValue: true,
	});

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(
		`Unsupported operation "${operation}" for resource "dedicatedInstallationTemplate"`,
	);
}
