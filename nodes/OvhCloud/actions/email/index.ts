import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeEmailList, description as descriptionEmailList } from './list.operation';
import { execute as executeEmailGet, description as descriptionEmailGet } from './get.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'emailOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Domains',
					value: 'list',
					action: 'List email domains',
				},
				{
					name: 'Get Domain',
					value: 'get',
					action: 'Get details of an email domain',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionEmailList({ ...displayOptions, show: { ...displayOptions?.show, emailOperation: ['list'] } }),
		...descriptionEmailGet({ ...displayOptions, show: { ...displayOptions?.show, emailOperation: ['get'] } }),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('emailOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeEmailList.call(this);
		case 'get':
			return await executeEmailGet.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "email"`);
}
