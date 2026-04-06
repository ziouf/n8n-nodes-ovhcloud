import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { descriptionTemplatesList, executeTemplatesList } from './list.operation';
import { descriptionTemplatesGet, executeTemplatesGet } from './get.operation';
import {
	descriptionTemplatesListSoftware,
	executeTemplatesListSoftware,
} from './listSoftware.operation';
import {
	descriptionTemplatesGetSoftware,
	executeTemplatesGetSoftware,
} from './getSoftware.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Templates Operation',
			name: 'templatesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get Software',
					value: 'getSoftware',
				},
				{
					name: 'Get Template',
					value: 'get',
				},
				{
					name: 'List Software',
					value: 'listSoftware',
				},
				{
					name: 'List Templates',
					value: 'list',
				},
			],
			default: 'list',
			displayOptions,
		},
		...descriptionTemplatesList({
			...displayOptions,
			show: { ...displayOptions?.show, templatesOperation: ['list'] },
		}),
		...descriptionTemplatesGet({
			...displayOptions,
			show: { ...displayOptions?.show, templatesOperation: ['get'] },
		}),
		...descriptionTemplatesListSoftware({
			...displayOptions,
			show: { ...displayOptions?.show, templatesOperation: ['listSoftware'] },
		}),
		...descriptionTemplatesGetSoftware({
			...displayOptions,
			show: { ...displayOptions?.show, templatesOperation: ['getSoftware'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('templatesOperation', 0) as string;

	switch (operation) {
		case 'list':
			return await executeTemplatesList.call(this);
		case 'get':
			return await executeTemplatesGet.call(this);
		case 'listSoftware':
			return await executeTemplatesListSoftware.call(this);
		case 'getSoftware':
			return await executeTemplatesGetSoftware.call(this);
		default:
			throw new Error(
				`The operation "${operation}" is not supported for the "templates" resource.`,
			);
	}
}
