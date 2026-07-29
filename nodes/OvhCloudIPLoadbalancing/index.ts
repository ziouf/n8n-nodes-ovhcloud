import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import {
	execute as executeAvailableFarmProbesList,
	description as descriptionAvailableFarmProbesList,
} from './availableFarmProbesList.operation';
import {
	execute as executeAvailableFarmTypeList,
	description as descriptionAvailableFarmTypeList,
} from './availableFarmTypeList.operation';
import {
	execute as executeAvailableFrontendTypeList,
	description as descriptionAvailableFrontendTypeList,
} from './availableFrontendTypeList.operation';
import {
	execute as executeAvailableRouteActionsList,
	description as descriptionAvailableRouteActionsList,
} from './availableRouteActionsList.operation';
import {
	execute as executeAvailableRouteRulesList,
	description as descriptionAvailableRouteRulesList,
} from './availableRouteRulesList.operation';
import {
	execute as executeChangeContact,
	description as descriptionChangeContact,
} from './changeContact.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'ipLoadbalancingOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change the contact for the service',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get IP Load Balancing service details',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all IP Load Balancing services',
				},
				{
					name: 'List Available Farm Probes',
					value: 'availableFarmProbesList',
					action: 'List available farm probes for health checks',
				},
				{
					name: 'List Available Farm Types',
					value: 'availableFarmTypeList',
					action: 'List available farm types',
				},
				{
					name: 'List Available Frontend Types',
					value: 'availableFrontendTypeList',
					action: 'List available frontend types',
				},
				{
					name: 'List Available Route Actions',
					value: 'availableRouteActionsList',
					action: 'List available route actions',
				},
				{
					name: 'List Available Route Rules',
					value: 'availableRouteRulesList',
					action: 'List available route match rules',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update IP Load Balancing service',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['get'] },
		}),
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['list'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['update'] },
		}),
		...descriptionAvailableFarmProbesList({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['availableFarmProbesList'] },
		}),
		...descriptionAvailableFarmTypeList({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['availableFarmTypeList'] },
		}),
		...descriptionAvailableFrontendTypeList({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['availableFrontendTypeList'] },
		}),
		...descriptionAvailableRouteActionsList({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['availableRouteActionsList'] },
		}),
		...descriptionAvailableRouteRulesList({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['availableRouteRulesList'] },
		}),
		...descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, ipLoadbalancingOperation: ['changeContact'] },
		}),
	];
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipLoadbalancingOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'get':
			return await executeGet.call(this, itemIndex);
		case 'list':
			return await executeList.call(this, itemIndex);
		case 'update':
			return await executeUpdate.call(this, itemIndex);
		case 'availableFarmProbesList':
			return await executeAvailableFarmProbesList.call(this, itemIndex);
		case 'availableFarmTypeList':
			return await executeAvailableFarmTypeList.call(this, itemIndex);
		case 'availableFrontendTypeList':
			return await executeAvailableFrontendTypeList.call(this, itemIndex);
		case 'availableRouteActionsList':
			return await executeAvailableRouteActionsList.call(this, itemIndex);
		case 'availableRouteRulesList':
			return await executeAvailableRouteRulesList.call(this, itemIndex);
		case 'changeContact':
			return await executeChangeContact.call(this, itemIndex);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "ipLoadbalancing"`);
}
