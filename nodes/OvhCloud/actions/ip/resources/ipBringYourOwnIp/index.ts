/**
 * @brief IP Bring Your Own IP sub-resource operations for IP resource
 *
 * Provides operations for managing BYOIP aggregation and slicing.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import {
	execute as executeListAggregation,
	description as descriptionListAggregation,
} from './listAggregation.operation';
import {
	execute as executeAggregate,
	description as descriptionAggregate,
} from './aggregate.operation';
import {
	execute as executeListSlicing,
	description as descriptionListSlicing,
} from './listSlicing.operation';
import { execute as executeSlice, description as descriptionSlice } from './slice.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'IP BYOIP Operation',
			name: 'ipByoipOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List Aggregation Configs',
					value: 'listAggregation',
					action: 'List available aggregation configurations',
				},
				{
					name: 'Aggregate',
					value: 'aggregate',
					action: 'Aggregate sliced BYOIP IPs',
				},
				{
					name: 'List Slicing Configs',
					value: 'listSlicing',
					action: 'List available slicing configurations',
				},
				{
					name: 'Slice',
					value: 'slice',
					action: 'Slice a BYOIP Additional IP',
				},
			],
			default: 'listAggregation',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionListAggregation({
			...displayOptions,
			show: { ...displayOptions?.show, ipByoipOperation: ['listAggregation'] },
		}),
		...descriptionAggregate({
			...displayOptions,
			show: { ...displayOptions?.show, ipByoipOperation: ['aggregate'] },
		}),
		...descriptionListSlicing({
			...displayOptions,
			show: { ...displayOptions?.show, ipByoipOperation: ['listSlicing'] },
		}),
		...descriptionSlice({
			...displayOptions,
			show: { ...displayOptions?.show, ipByoipOperation: ['slice'] },
		}),
	];
}

/**
 * Executes the selected IP BYOIP operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipByoipOperation', 0, { extractValue: true });

	switch (operation) {
		case 'listAggregation':
			return await executeListAggregation.call(this);
		case 'aggregate':
			return await executeAggregate.call(this);
		case 'listSlicing':
			return await executeListSlicing.call(this);
		case 'slice':
			return await executeSlice.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipBringYourOwnIp"`);
}
