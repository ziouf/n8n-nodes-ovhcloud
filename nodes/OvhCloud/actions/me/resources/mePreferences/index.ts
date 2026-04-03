import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeGet, description as descriptionGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Preferences Operation',
			name: 'mePreferencesOperation',
			type: 'options',
			noDataExpression: true,
			options: [{ name: 'Get', value: 'get', action: 'Get user preferences' }],
			default: 'get',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, mePreferencesOperation: ['get'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('mePreferencesOperation', 0, { extractValue: true });

	switch (operation) {
		case 'get':
			return await executeGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "mePreferences"`);
}
