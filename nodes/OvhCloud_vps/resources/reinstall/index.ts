import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { descriptionReinstallCreate, executeReinstallCreate } from './create.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Reinstall Operation',
			name: 'reinstallOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Create',
					value: 'create',
				},
			],
			default: 'create',
			displayOptions,
		},
		...descriptionReinstallCreate({
			...displayOptions,
			show: { ...displayOptions?.show, reinstallOperation: ['create'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('reinstallOperation', 0) as string;

	switch (operation) {
		case 'create':
			return await executeReinstallCreate.call(this);
		default:
			throw new Error(
				`The operation "${operation}" is not supported for the "reinstall" resource.`,
			);
	}
}
