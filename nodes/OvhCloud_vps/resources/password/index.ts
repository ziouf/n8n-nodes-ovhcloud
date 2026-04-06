import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	descriptionPasswordSetRootPassword,
	executePasswordSetRootPassword,
} from './setRootPassword.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Password Operation',
			name: 'passwordOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Set Root Password',
					value: 'setRootPassword',
				},
			],
			default: 'setRootPassword',
			displayOptions,
		},
		...descriptionPasswordSetRootPassword({
			...displayOptions,
			show: { ...displayOptions?.show, passwordOperation: ['setRootPassword'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('passwordOperation', 0) as string;

	switch (operation) {
		case 'setRootPassword':
			return await executePasswordSetRootPassword.call(this);
		default:
			throw new Error(`The operation "${operation}" is not supported for the "password" resource.`);
	}
}
