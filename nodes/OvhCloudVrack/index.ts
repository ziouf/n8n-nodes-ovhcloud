import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeVrackListGet,
	description as descriptionVrackListGet,
} from './vrackListGet.operation';
import {
	execute as executeVrackGetGet,
	description as descriptionVrackGetGet,
} from './vrackGetGet.operation';
import {
	execute as executeVrackUpdatePut,
	description as descriptionVrackUpdatePut,
} from './vrackUpdatePut.operation';
import {
	execute as executeVrackDeleteDelete,
	description as descriptionVrackDeleteDelete,
} from './vrackDeleteDelete.operation';
import {
	execute as executeVrackServiceOrderListGet,
	description as descriptionVrackServiceOrderListGet,
} from './vrackServiceOrderListGet.operation';
import {
	execute as executeVrackServiceOrderCreatePost,
	description as descriptionVrackServiceOrderCreatePost,
} from './vrackServiceOrderCreatePost.operation';
import {
	execute as executeIpSubListGet,
	description as descriptionIpSubListGet,
} from './ipSubListGet.operation';
import {
	execute as executeIpSubCreatePost,
	description as descriptionIpSubCreatePost,
} from './ipSubCreatePost.operation';
import {
	execute as executePublicNetworkSubListGet,
	description as descriptionPublicNetworkSubListGet,
} from './publicNetworkSubListGet.operation';
import {
	execute as executePublicNetworkSubCreatePost,
	description as descriptionPublicNetworkSubCreatePost,
} from './publicNetworkSubCreatePost.operation';
import {
	execute as executeVrackSubListGet,
	description as descriptionVrackSubListGet,
} from './vrackSubListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vrackOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List Vrack',
				value: 'vrackListGet',
				action: 'List all vRack networks',
			},
			{
				name: 'Get Vrack',
				value: 'vrackGetGet',
				action: 'Get vRack details',
			},
			{
				name: 'Update Vrack',
				value: 'vrackUpdatePut',
				action: 'Update vRack details',
			},
			{
				name: 'Delete Vrack',
				value: 'vrackDeleteDelete',
				action: 'Delete a vRack network',
			},
			{
				name: 'List Service Orders',
				value: 'vrackServiceOrderListGet',
				action: 'List service orders for a vRack',
			},
			{
				name: 'Create Service Order',
				value: 'vrackServiceOrderCreatePost',
				action: 'Create a service order for a vRack',
			},
			{
				name: 'List IPs on Vrack',
				value: 'ipSubListGet',
				action: 'List IPs attached to a vRack',
			},
			{
				name: 'Add IP to Vrack',
				value: 'ipSubCreatePost',
				action: 'Add an IP to a vRack',
			},
			{
				name: 'List Public Networks',
				value: 'publicNetworkSubListGet',
				action: 'List public networks in a vRack',
			},
			{
				name: 'Add Public Network to Vrack',
				value: 'publicNetworkSubCreatePost',
				action: 'Add a public network to a vRack',
			},
			{
				name: 'List Vrack Services',
				value: 'vrackSubListGet',
				action: 'List services attached to a vRack',
			},

			],
			default: 'vrackListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionVrackListGet({
			...displayOptions,
			show: { vrackOperation: ['vrackListGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackGetGet({
			...displayOptions,
			show: { vrackOperation: ['vrackGetGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackUpdatePut({
			...displayOptions,
			show: { vrackOperation: ['vrackUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionVrackDeleteDelete({
			...displayOptions,
			show: { vrackOperation: ['vrackDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionVrackServiceOrderListGet({
			...displayOptions,
			show: { vrackOperation: ['vrackServiceOrderListGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackServiceOrderCreatePost({
			...displayOptions,
			show: { vrackOperation: ['vrackServiceOrderCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpSubListGet({
			...displayOptions,
			show: { vrackOperation: ['ipSubListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpSubCreatePost({
			...displayOptions,
			show: { vrackOperation: ['ipSubCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionPublicNetworkSubListGet({
			...displayOptions,
			show: { vrackOperation: ['publicNetworkSubListGet'] },
		}) as INodeProperties[]),
		...(descriptionPublicNetworkSubCreatePost({
			...displayOptions,
			show: { vrackOperation: ['publicNetworkSubCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVrackSubListGet({
			...displayOptions,
			show: { vrackOperation: ['vrackSubListGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vrackOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'vrackListGet':
			return executeVrackListGet.call(this, itemIndex);
		case 'vrackGetGet':
			return executeVrackGetGet.call(this, itemIndex);
		case 'vrackUpdatePut':
			return executeVrackUpdatePut.call(this, itemIndex);
		case 'vrackDeleteDelete':
			return executeVrackDeleteDelete.call(this, itemIndex);
		case 'vrackServiceOrderListGet':
			return executeVrackServiceOrderListGet.call(this, itemIndex);
		case 'vrackServiceOrderCreatePost':
			return executeVrackServiceOrderCreatePost.call(this, itemIndex);
		case 'ipSubListGet':
			return executeIpSubListGet.call(this, itemIndex);
		case 'ipSubCreatePost':
			return executeIpSubCreatePost.call(this, itemIndex);
		case 'publicNetworkSubListGet':
			return executePublicNetworkSubListGet.call(this, itemIndex);
		case 'publicNetworkSubCreatePost':
			return executePublicNetworkSubCreatePost.call(this, itemIndex);
		case 'vrackSubListGet':
			return executeVrackSubListGet.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudVrack"`);
}
