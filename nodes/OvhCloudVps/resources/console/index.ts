import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	description as descriptionConsoleGetUrl,
	execute as executeConsoleGetUrl,
} from './getUrl.operation';
import { descriptionConsoleOpenAccess, executeConsoleOpenAccess } from './openAccess.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Console Operation',
			name: 'consoleOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Get URL',
					value: 'getUrl',
				},
				{
					name: 'Open Access',
					value: 'openAccess',
				},
			],
			default: 'getUrl',
			displayOptions,
		},
		...descriptionConsoleGetUrl({
			...displayOptions,
			show: { ...displayOptions?.show, consoleOperation: ['getUrl'] },
		}),
		...descriptionConsoleOpenAccess({
			...displayOptions,
			show: { ...displayOptions?.show, consoleOperation: ['openAccess'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('consoleOperation', 0) as string;

	switch (operation) {
		case 'getUrl':
			return await executeConsoleGetUrl.call(this);
		case 'openAccess':
			return await executeConsoleOpenAccess.call(this);
		default:
			throw new Error(`The operation "${operation}" is not supported for the "console" resource.`);
	}
}
