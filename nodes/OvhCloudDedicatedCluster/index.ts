import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeDedicatedClusterTerminateCreatePost,
	description as descriptionDedicatedClusterTerminateCreatePost,
} from './DedicatedClusterTerminateCreate.operation';

import {
	execute as executeDedicatedClusterConfirmterminationCreatePost,
	description as descriptionDedicatedClusterConfirmterminationCreatePost,
} from './DedicatedClusterConfirmterminationCreate.operation';

import {
	execute as executeDedicatedClusterAvailabilitiesGetGet,
	description as descriptionDedicatedClusterAvailabilitiesGetGet,
} from './DedicatedClusterAvailabilitiesGet.operation';

import {
	execute as executeDedicatedClusterGetServicenameGet,
	description as descriptionDedicatedClusterGetServicenameGet,
} from './DedicatedClusterGetServicename.operation';

import {
	execute as executeDedicatedClusterServiceinfosGetGet,
	description as descriptionDedicatedClusterServiceinfosGetGet,
} from './DedicatedClusterServiceinfosGet.operation';

import {
	execute as executeDedicatedClusterChangecontactCreatePost,
	description as descriptionDedicatedClusterChangecontactCreatePost,
} from './DedicatedClusterChangecontactCreate.operation';

import {
	execute as executeDedicatedClusterGetGet,
	description as descriptionDedicatedClusterGetGet,
} from './DedicatedClusterGet.operation';

import {
	execute as executeClusterAvailabilitiesRawGetGet,
	description as descriptionClusterAvailabilitiesRawGetGet,
} from './ClusterAvailabilitiesRawGet.operation';

import {
	execute as executeDedicatedClusterServiceinfosUpdatePut,
	description as descriptionDedicatedClusterServiceinfosUpdatePut,
} from './DedicatedClusterServiceinfosUpdate.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedClusterOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Ask For The Termination Of Your Service',
					value: 'DedicatedClusterTerminateCreate',
					action: 'Ask for the termination of your service',
				},
				{
					name: 'Confirm Service Termination',
					value: 'DedicatedClusterConfirmterminationCreate',
					action: 'Confirm service termination',
				},
				{
					name: 'Fetch The Availabilities For A Given Cluster Configuration',
					value: 'DedicatedClusterAvailabilitiesGet',
					action: 'Fetch the availabilities for a given cluster configuration',
				},
				{
					name: 'Get Cluster Info',
					value: 'DedicatedClusterGetServicename',
					action: 'Get cluster info',
				},
				{
					name: 'Get Service Information',
					value: 'DedicatedClusterServiceinfosGet',
					action: 'Get service information',
				},
				{
					name: 'Launch A Contact Change Procedure',
					value: 'DedicatedClusterChangecontactCreate',
					action: 'Launch a contact change procedure',
				},
				{
					name: 'List Dedicated Clusters',
					value: 'DedicatedClusterGet',
					action: 'List dedicated clusters',
				},
				{
					name: 'List The Raw Availability For Cluster',
					value: 'ClusterAvailabilitiesRawGet',
					action: 'List the raw availability for cluster',
				},
				{
					name: 'Update Service Information',
					value: 'DedicatedClusterServiceinfosUpdate',
					action: 'Update service information',
				},
			],
			default: 'DedicatedClusterTerminateCreate',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...descriptionDedicatedClusterTerminateCreatePost({}),
		...descriptionDedicatedClusterConfirmterminationCreatePost(),
		...descriptionDedicatedClusterAvailabilitiesGetGet(),
		...descriptionDedicatedClusterGetServicenameGet(),
		...descriptionDedicatedClusterServiceinfosGetGet(),
		...descriptionDedicatedClusterChangecontactCreatePost(),
		...descriptionDedicatedClusterGetGet(),
		...descriptionClusterAvailabilitiesRawGetGet(),
		...descriptionDedicatedClusterServiceinfosUpdatePut(),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedClusterOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'DedicatedClusterTerminateCreate':
			return executeDedicatedClusterTerminateCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedClusterConfirmterminationCreate':
			return executeDedicatedClusterConfirmterminationCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedClusterAvailabilitiesGet':
			return executeDedicatedClusterAvailabilitiesGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedClusterGetServicename':
			return executeDedicatedClusterGetServicenameGet.call(this, itemIndex ?? 0);
		case 'DedicatedClusterServiceinfosGet':
			return executeDedicatedClusterServiceinfosGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedClusterChangecontactCreate':
			return executeDedicatedClusterChangecontactCreatePost.call(this, itemIndex ?? 0);
		case 'DedicatedClusterGet':
			return executeDedicatedClusterGetGet.call(this, itemIndex ?? 0);
		case 'ClusterAvailabilitiesRawGet':
			return executeClusterAvailabilitiesRawGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedClusterServiceinfosUpdate':
			return executeDedicatedClusterServiceinfosUpdatePut.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "/dedicated/cluster"`);
}
