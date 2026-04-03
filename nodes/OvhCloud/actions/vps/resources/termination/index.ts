import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import { descriptionTerminationRequest, executeTerminationRequest } from './request.operation';

export function description(displayOptions?: IDisplayOptions): INodeProperties[] {
	return [
		{
			displayName: 'Termination Operation',
			name: 'terminationOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Request',
					value: 'request',
				},
			],
			default: 'request',
			displayOptions,
		},
		...descriptionTerminationRequest({
			...displayOptions,
			show: { ...displayOptions?.show, terminationOperation: ['request'] },
		}),
	];
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('terminationOperation', 0) as string;

	switch (operation) {
		case 'request':
			return await executeTerminationRequest.call(this);
		default:
			throw new Error(
				`The operation "${operation}" is not supported for the "termination" resource.`,
			);
	}
}
