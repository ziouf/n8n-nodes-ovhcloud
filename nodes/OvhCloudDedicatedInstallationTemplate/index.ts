import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeDedicatedInstallationtemplateTemplateinfosGetGet,
	description as descriptionDedicatedInstallationtemplateTemplateinfosGetGet,
} from './DedicatedInstallationtemplateTemplateinfosGet.operation';

import {
	execute as executeDedicatedInstallationtemplateGetTemplatenameGet,
	description as descriptionDedicatedInstallationtemplateGetTemplatenameGet,
} from './DedicatedInstallationtemplateGetTemplatename.operation';

import {
	execute as executeDedicatedInstallationtemplatePartitionschemeGetSchemenameGet,
	description as descriptionDedicatedInstallationtemplatePartitionschemeGetSchemenameGet,
} from './DedicatedInstallationtemplatePartitionschemeGetSchemename.operation';

import {
	execute as executeInstallationtemplatePartitionschemeHardwareraidGetNameGet,
	description as descriptionInstallationtemplatePartitionschemeHardwareraidGetNameGet,
} from './InstallationtemplatePartitionschemeHardwareraidGetName.operation';

import {
	execute as executeInstallationtemplatePartitionschemePartitionGetMountpointGet,
	description as descriptionInstallationtemplatePartitionschemePartitionGetMountpointGet,
} from './InstallationtemplatePartitionschemePartitionGetMountpoint.operation';

import {
	execute as executeInstallationtemplatePartitionschemeHardwareraidGetGet,
	description as descriptionInstallationtemplatePartitionschemeHardwareraidGetGet,
} from './InstallationtemplatePartitionschemeHardwareraidGet.operation';

import {
	execute as executeDedicatedInstallationtemplateGetGet,
	description as descriptionDedicatedInstallationtemplateGetGet,
} from './DedicatedInstallationtemplateGet.operation';

import {
	execute as executeDedicatedInstallationtemplatePartitionschemeGetGet,
	description as descriptionDedicatedInstallationtemplatePartitionschemeGetGet,
} from './DedicatedInstallationtemplatePartitionschemeGet.operation';

import {
	execute as executeInstallationtemplatePartitionschemePartitionGetGet,
	description as descriptionInstallationtemplatePartitionschemePartitionGetGet,
} from './InstallationtemplatePartitionschemePartitionGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'dedicatedInstallationTemplateOperation',
			type: 'options',
			noDataExpression: true,
			options: [
		{
			name: 'Get Details About Available Distributions For Dedicated Servers',
			value: 'DedicatedInstallationtemplateTemplateinfosGet',
			action: 'Get details about available distributions for dedicated servers',
		},
		{
			name: 'Get This Object Properties',
			value: 'DedicatedInstallationtemplateGetTemplatename',
			action: 'Get this object properties',
		},
		{
			name: 'Hardware Raids Defined In This Partitioning Scheme',
			value: 'InstallationtemplatePartitionschemeHardwareraidGet',
			action: 'Hardware RAIDs defined in this partitioning scheme',
		},
		{
			name: 'Ovh Operating System Installation Templates',
			value: 'DedicatedInstallationtemplateGet',
			action: 'OVH operating system installation templates',
		},
		{
			name: 'Partitioning Schemes Available On This Template',
			value: 'DedicatedInstallationtemplatePartitionschemeGet',
			action: 'Partitioning schemes available on this template',
		},
		{
			name: 'Partitions Defined In This Partitioning Scheme',
			value: 'InstallationtemplatePartitionschemePartitionGet',
			action: 'Partitions defined in this partitioning scheme',
		},
			],
			default: 'DedicatedInstallationtemplateTemplateinfosGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
	...descriptionDedicatedInstallationtemplateTemplateinfosGetGet(),
	...descriptionDedicatedInstallationtemplateGetTemplatenameGet(),
	...descriptionDedicatedInstallationtemplatePartitionschemeGetSchemenameGet(),
	...descriptionInstallationtemplatePartitionschemeHardwareraidGetNameGet(),
	...descriptionInstallationtemplatePartitionschemePartitionGetMountpointGet(),
	...descriptionInstallationtemplatePartitionschemeHardwareraidGetGet(),
	...descriptionDedicatedInstallationtemplateGetGet(),
	...descriptionDedicatedInstallationtemplatePartitionschemeGetGet(),
	...descriptionInstallationtemplatePartitionschemePartitionGetGet(),
	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedInstallationTemplateOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'DedicatedInstallationtemplateTemplateinfosGet':
			return executeDedicatedInstallationtemplateTemplateinfosGetGet.call(this, );
		case 'DedicatedInstallationtemplateGetTemplatename':
			return executeDedicatedInstallationtemplateGetTemplatenameGet.call(this, itemIndex ?? 0);
		case 'DedicatedInstallationtemplatePartitionschemeGetSchemename':
			return executeDedicatedInstallationtemplatePartitionschemeGetSchemenameGet.call(this, itemIndex ?? 0);
		case 'InstallationtemplatePartitionschemeHardwareraidGetName':
			return executeInstallationtemplatePartitionschemeHardwareraidGetNameGet.call(this, itemIndex ?? 0);
		case 'InstallationtemplatePartitionschemePartitionGetMountpoint':
			return executeInstallationtemplatePartitionschemePartitionGetMountpointGet.call(this, itemIndex ?? 0);
		case 'InstallationtemplatePartitionschemeHardwareraidGet':
			return executeInstallationtemplatePartitionschemeHardwareraidGetGet.call(this, itemIndex ?? 0);
		case 'DedicatedInstallationtemplateGet':
			return executeDedicatedInstallationtemplateGetGet.call(this, );
		case 'DedicatedInstallationtemplatePartitionschemeGet':
			return executeDedicatedInstallationtemplatePartitionschemeGetGet.call(this, itemIndex ?? 0);
		case 'InstallationtemplatePartitionschemePartitionGet':
			return executeInstallationtemplatePartitionschemePartitionGetGet.call(this, itemIndex ?? 0);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "/dedicated/installationTemplate"`);
}
