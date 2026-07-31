import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeIpListGet,
	description as descriptionIpListGet,
} from './ipListGet.operation';
import {
	execute as executeIpGetGet,
	description as descriptionIpGetGet,
} from './ipGetGet.operation';
import {
	execute as executeIpReverseGetGet,
	description as descriptionIpReverseGetGet,
} from './ipReverseGetGet.operation';
import {
	execute as executeIpReverseUpdatePut,
	description as descriptionIpReverseUpdatePut,
} from './ipReverseUpdatePut.operation';
import {
	execute as executeIpEquilibriumListGet,
	description as descriptionIpEquilibriumListGet,
} from './ipEquilibriumListGet.operation';
import {
	execute as executeIpEquilibriumCreatePost,
	description as descriptionIpEquilibriumCreatePost,
} from './ipEquilibriumCreatePost.operation';
import {
	execute as executeIpEquilibriumDeleteDelete,
	description as descriptionIpEquilibriumDeleteDelete,
} from './ipEquilibriumDeleteDelete.operation';
import {
	execute as executeIpEquilibriumDetailGet,
	description as descriptionIpEquilibriumDetailGet,
} from './ipEquilibriumDetailGet.operation';
import {
	execute as executeIpEquilibriumUpdatePut,
	description as descriptionIpEquilibriumUpdatePut,
} from './ipEquilibriumUpdatePut.operation';
import {
	execute as executeIpEquilibriumDetailDeleteDelete,
	description as descriptionIpEquilibriumDetailDeleteDelete,
} from './ipEquilibriumDetailDeleteDelete.operation';
import {
	execute as executeIpFailoverPost,
	description as descriptionIpFailoverPost,
} from './ipFailoverPost.operation';
import {
	execute as executeIpFailoverGetGet,
	description as descriptionIpFailoverGetGet,
} from './ipFailoverGetGet.operation';
import {
	execute as executeIpFailoverUpdatePut,
	description as descriptionIpFailoverUpdatePut,
} from './ipFailoverUpdatePut.operation';
import {
	execute as executeIpFailoverDeleteDelete,
	description as descriptionIpFailoverDeleteDelete,
} from './ipFailoverDeleteDelete.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'ipOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List IPs',
				value: 'ipListGet',
				action: 'List all IP addresses',
			},
			{
				name: 'Get IP',
				value: 'ipGetGet',
				action: 'Get details of an IP address',
			},
			{
				name: 'Get Reverse',
				value: 'ipReverseGetGet',
				action: 'Get reverse DNS for an IP',
			},
			{
				name: 'Update Reverse',
				value: 'ipReverseUpdatePut',
				action: 'Update reverse DNS for an IP',
			},
			{
				name: 'List Equilibrium',
				value: 'ipEquilibriumListGet',
				action: 'List equilibrium configs for an IP',
			},
			{
				name: 'Create Equilibrium',
				value: 'ipEquilibriumCreatePost',
				action: 'Create an equilibrium config for an IP',
			},
			{
				name: 'Delete Equilibrium',
				value: 'ipEquilibriumDeleteDelete',
				action: 'Delete an equilibrium config for an IP',
			},
			{
				name: 'Get Equilibrium Detail',
				value: 'ipEquilibriumDetailGet',
				action: 'Get equilibrium detail',
			},
			{
				name: 'Update Equilibrium',
				value: 'ipEquilibriumUpdatePut',
				action: 'Update an equilibrium config',
			},
			{
				name: 'Delete Equilibrium Detail',
				value: 'ipEquilibriumDetailDeleteDelete',
				action: 'Delete an equilibrium config detail',
			},
			{
				name: 'Create Failover',
				value: 'ipFailoverPost',
				action: 'Create a failover config for an IP',
			},
			{
				name: 'Get Failover',
				value: 'ipFailoverGetGet',
				action: 'Get failover details',
			},
			{
				name: 'Update Failover',
				value: 'ipFailoverUpdatePut',
				action: 'Update a failover config',
			},
			{
				name: 'Delete Failover',
				value: 'ipFailoverDeleteDelete',
				action: 'Delete a failover config',
			},

			],
			default: 'ipListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionIpListGet({
			...displayOptions,
			show: { ipOperation: ['ipListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpGetGet({
			...displayOptions,
			show: { ipOperation: ['ipGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpReverseGetGet({
			...displayOptions,
			show: { ipOperation: ['ipReverseGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpReverseUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipReverseUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumListGet({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumListGet'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumCreatePost({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumDetailGet({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumDetailGet'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpEquilibriumDetailDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipEquilibriumDetailDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverPost({
			...displayOptions,
			show: { ipOperation: ['ipFailoverPost'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverGetGet({
			...displayOptions,
			show: { ipOperation: ['ipFailoverGetGet'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverUpdatePut({
			...displayOptions,
			show: { ipOperation: ['ipFailoverUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionIpFailoverDeleteDelete({
			...displayOptions,
			show: { ipOperation: ['ipFailoverDeleteDelete'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('ipOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'ipListGet':
			return executeIpListGet.call(this, itemIndex);
		case 'ipGetGet':
			return executeIpGetGet.call(this, itemIndex);
		case 'ipReverseGetGet':
			return executeIpReverseGetGet.call(this, itemIndex);
		case 'ipReverseUpdatePut':
			return executeIpReverseUpdatePut.call(this, itemIndex);
		case 'ipEquilibriumListGet':
			return executeIpEquilibriumListGet.call(this, itemIndex);
		case 'ipEquilibriumCreatePost':
			return executeIpEquilibriumCreatePost.call(this, itemIndex);
		case 'ipEquilibriumDeleteDelete':
			return executeIpEquilibriumDeleteDelete.call(this, itemIndex);
		case 'ipEquilibriumDetailGet':
			return executeIpEquilibriumDetailGet.call(this, itemIndex);
		case 'ipEquilibriumUpdatePut':
			return executeIpEquilibriumUpdatePut.call(this, itemIndex);
		case 'ipEquilibriumDetailDeleteDelete':
			return executeIpEquilibriumDetailDeleteDelete.call(this, itemIndex);
		case 'ipFailoverPost':
			return executeIpFailoverPost.call(this, itemIndex);
		case 'ipFailoverGetGet':
			return executeIpFailoverGetGet.call(this, itemIndex);
		case 'ipFailoverUpdatePut':
			return executeIpFailoverUpdatePut.call(this, itemIndex);
		case 'ipFailoverDeleteDelete':
			return executeIpFailoverDeleteDelete.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudIp"`);
}
