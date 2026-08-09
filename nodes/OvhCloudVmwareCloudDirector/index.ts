import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeVmwareCloudDirectorbackupListGet,
	description as descriptionVmwareCloudDirectorbackupListGet,
} from './vmwareCloudDirectorbackupListGet.operation';
import {
	execute as executeVmwareCloudDirectorbackupListGet2,
	description as descriptionVmwareCloudDirectorbackupListGet2,
} from './vmwareCloudDirectorbackupListGet2.operation';
import {
	execute as executeVmwareCloudDirectorbackupUpdatePut,
	description as descriptionVmwareCloudDirectorbackupUpdatePut,
} from './vmwareCloudDirectorbackupUpdatePut.operation';
import {
	execute as executeVmwareCloudDirectorbackuptaskListGet,
	description as descriptionVmwareCloudDirectorbackuptaskListGet,
} from './vmwareCloudDirectorbackuptaskListGet.operation';
import {
	execute as executeVmwareCloudDirectorbackuptaskListGet2,
	description as descriptionVmwareCloudDirectorbackuptaskListGet2,
} from './vmwareCloudDirectorbackuptaskListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationListGet,
	description as descriptionVmwareCloudDirectororganizationListGet,
} from './vmwareCloudDirectororganizationListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationListGet2,
	description as descriptionVmwareCloudDirectororganizationListGet2,
} from './vmwareCloudDirectororganizationListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationUpdatePut,
	description as descriptionVmwareCloudDirectororganizationUpdatePut,
} from './vmwareCloudDirectororganizationUpdatePut.operation';
import {
	execute as executeVmwareCloudDirectororganizationnetworkAclListGet,
	description as descriptionVmwareCloudDirectororganizationnetworkAclListGet,
} from './vmwareCloudDirectororganizationnetworkAclListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationnetworkAclListGet2,
	description as descriptionVmwareCloudDirectororganizationnetworkAclListGet2,
} from './vmwareCloudDirectororganizationnetworkAclListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationnetworkAclUpdatePut,
	description as descriptionVmwareCloudDirectororganizationnetworkAclUpdatePut,
} from './vmwareCloudDirectororganizationnetworkAclUpdatePut.operation';
import {
	execute as executeVmwareCloudDirectororganizationpasswordCreatePost,
	description as descriptionVmwareCloudDirectororganizationpasswordCreatePost,
} from './vmwareCloudDirectororganizationpasswordCreatePost.operation';
import {
	execute as executeVmwareCloudDirectororganizationtaskListGet,
	description as descriptionVmwareCloudDirectororganizationtaskListGet,
} from './vmwareCloudDirectororganizationtaskListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationtaskListGet2,
	description as descriptionVmwareCloudDirectororganizationtaskListGet2,
} from './vmwareCloudDirectororganizationtaskListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCenterListGet,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCenterListGet,
} from './vmwareCloudDirectororganizationvirtualDataCenterListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCenterListGet2,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCenterListGet2,
} from './vmwareCloudDirectororganizationvirtualDataCenterListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCenterUpdatePut,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCenterUpdatePut,
} from './vmwareCloudDirectororganizationvirtualDataCenterUpdatePut.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentercomputeListGet,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentercomputeListGet,
} from './vmwareCloudDirectororganizationvirtualDataCentercomputeListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete,
} from './vmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentercomputeListGet2,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentercomputeListGet2,
} from './vmwareCloudDirectororganizationvirtualDataCentercomputeListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet,
} from './vmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCenterstorageListGet,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCenterstorageListGet,
} from './vmwareCloudDirectororganizationvirtualDataCenterstorageListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCenterstorageListGet2,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCenterstorageListGet2,
} from './vmwareCloudDirectororganizationvirtualDataCenterstorageListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentertaskListGet,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentertaskListGet,
} from './vmwareCloudDirectororganizationvirtualDataCentertaskListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentertaskListGet2,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentertaskListGet2,
} from './vmwareCloudDirectororganizationvirtualDataCentertaskListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet,
} from './vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete,
} from './vmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2,
} from './vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut,
} from './vmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet,
} from './vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet.operation';
import {
	execute as executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2,
	description as descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2,
} from './vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2.operation';
import {
	execute as executeVmwareCloudDirectorreferenceregionListGet,
	description as descriptionVmwareCloudDirectorreferenceregionListGet,
} from './vmwareCloudDirectorreferenceregionListGet.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vcdOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'Delete Compute Resources Associated with an Organization\'s Virtual DataCenter',
				value: 'vmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete',
				action: 'Delete compute resources associated with an organization\'s Virtual DataCenter',
			},
			{
				name: 'Delete VMware Cloud Director Vrack Segment Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete',
				action: 'Delete VMware Cloud Director vrack segment resources',
			},
			{
				name: 'Get a Specific Task Related to the Organization Virtual DataCenter Resource',
				value: 'vmwareCloudDirectororganizationvirtualDataCentertaskListGet2',
				action: 'Get a specific task related to the organization Virtual DataCenter resource',
			},
			{
				name: 'Get a Specific Task Related to the Organization Virtual DataCenter vRack Segment Resource',
				value: 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2',
				action: 'Get a specific task related to the organization Virtual DataCenter vRack segment resource',
			},
			{
				name: 'Get a Specific Task Related to the VMware Cloud Director Backup Service',
				value: 'vmwareCloudDirectorbackuptaskListGet2',
				action: 'Get a specific task related to the VMware Cloud Director backup service',
			},
			{
				name: 'Get a Specific Task Related to the VMware Cloud Director Resources',
				value: 'vmwareCloudDirectororganizationtaskListGet2',
				action: 'Get a specific task related to the VMware Cloud Director resources',
			},
			{
				name: 'Get Organization Network Access Control List Resources',
				value: 'vmwareCloudDirectororganizationnetworkAclListGet2',
				action: 'Get organization network access control list resources',
			},
			{
				name: 'Get Organization Virtual DataCenter Associated Compute Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCentercomputeListGet2',
				action: 'Get organization Virtual DataCenter associated compute resources',
			},
			{
				name: 'Get Organization Virtual DataCenter Associated Storage Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCenterstorageListGet2',
				action: 'Get organization Virtual DataCenter associated storage resources',
			},
			{
				name: 'Get Organization Virtual DataCenter Associated Vrack Segment Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2',
				action: 'Get organization Virtual DataCenter associated vrack segment resources',
			},
			{
				name: 'Get Organization Virtual DataCenter Details',
				value: 'vmwareCloudDirectororganizationvirtualDataCenterListGet2',
				action: 'Get organization Virtual DataCenter details',
			},
			{
				name: 'Get Region Details',
				value: 'vmwareCloudDirectorreferenceregionListGet',
				action: 'Get region details',
			},
			{
				name: 'Get VMware Cloud Director Backup Service',
				value: 'vmwareCloudDirectorbackupListGet2',
				action: 'Get VMware Cloud Director Backup service',
			},
			{
				name: 'Get VMware Cloud Director Organization Details',
				value: 'vmwareCloudDirectororganizationListGet2',
				action: 'Get VMware Cloud Director organization details',
			},
			{
				name: 'List All Asynchronous Operations Related to the Organization Virtual DataCenter Resource',
				value: 'vmwareCloudDirectororganizationvirtualDataCentertaskListGet',
				action: 'List all asynchronous operations related to the organization Virtual DataCenter resource',
			},
			{
				name: 'List All Asynchronous Operations Related to the Organization Virtual DataCenter vRack Segment Resource',
				value: 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet',
				action: 'List all asynchronous operations related to the organization Virtual DataCenter vRack segment resource',
			},
			{
				name: 'List All Asynchronous Operations Related to the VMware Cloud Director Backup Service',
				value: 'vmwareCloudDirectorbackuptaskListGet',
				action: 'List all asynchronous operations related to the VMware Cloud Director backup service',
			},
			{
				name: 'List All Asynchronous Operations Related to the VMware Cloud Director Resources',
				value: 'vmwareCloudDirectororganizationtaskListGet',
				action: 'List all asynchronous operations related to the VMware Cloud Director resources',
			},
			{
				name: 'List All Orderable Resources Related to the Organization Virtual DataCenter',
				value: 'vmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet',
				action: 'List all orderable resources related to the organization Virtual DataCenter',
			},
			{
				name: 'List All Organization Virtual DataCenters',
				value: 'vmwareCloudDirectororganizationvirtualDataCenterListGet',
				action: 'List all organization Virtual DataCenters',
			},
			{
				name: 'List Organization Network Access Control List Resources',
				value: 'vmwareCloudDirectororganizationnetworkAclListGet',
				action: 'List organization network access control list resources',
			},
			{
				name: 'List Organization Virtual DataCenter Associated Compute Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCentercomputeListGet',
				action: 'List organization Virtual DataCenter associated compute resources',
			},
			{
				name: 'List Organization Virtual DataCenter Associated Storage Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCenterstorageListGet',
				action: 'List organization Virtual DataCenter associated storage resources',
			},
			{
				name: 'List Organization Virtual DataCenter Associated Vrack Segment Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet',
				action: 'List organization Virtual DataCenter associated vrack segment resources',
			},
			{
				name: 'List VMware Cloud Director Backup Services',
				value: 'vmwareCloudDirectorbackupListGet',
				action: 'List VMware Cloud Director Backup services',
			},
			{
				name: 'List VMware Cloud Director Organizations',
				value: 'vmwareCloudDirectororganizationListGet',
				action: 'List VMware Cloud Director organizations',
			},
			{
				name: 'Reset the VMware Cloud Director Organization Administrator Password',
				value: 'vmwareCloudDirectororganizationpasswordCreatePost',
				action: 'Reset the VMware Cloud Director organization administrator password',
			},
			{
				name: 'Update Organization Network Access Control List Resources',
				value: 'vmwareCloudDirectororganizationnetworkAclUpdatePut',
				action: 'Update organization network access control list resources',
			},
			{
				name: 'Update Organization Virtual DataCenter Details',
				value: 'vmwareCloudDirectororganizationvirtualDataCenterUpdatePut',
				action: 'Update organization Virtual DataCenter details',
			},
			{
				name: 'Update VMware Cloud Director Backup Service',
				value: 'vmwareCloudDirectorbackupUpdatePut',
				action: 'Update VMware Cloud Director Backup service',
			},
			{
				name: 'Update VMware Cloud Director Organization Details',
				value: 'vmwareCloudDirectororganizationUpdatePut',
				action: 'Update VMware Cloud Director organization details',
			},
			{
				name: 'Update VMware Cloud Director Vrack Segment Resources',
				value: 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut',
				action: 'Update VMware Cloud Director vrack segment resources',
			},
			],
			default: 'vmwareCloudDirectorbackupListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionVmwareCloudDirectorbackupListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectorbackupListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorbackupListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectorbackupListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorbackupUpdatePut({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectorbackupUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorbackuptaskListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectorbackuptaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorbackuptaskListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectorbackuptaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationUpdatePut({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationnetworkAclListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationnetworkAclListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationnetworkAclListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationnetworkAclListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationnetworkAclUpdatePut({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationnetworkAclUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationpasswordCreatePost({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationpasswordCreatePost'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationtaskListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationtaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationtaskListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationtaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCenterListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCenterListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCenterListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCenterListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCenterUpdatePut({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCenterUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentercomputeListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentercomputeListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentercomputeListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentercomputeListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCenterstorageListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCenterstorageListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCenterstorageListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCenterstorageListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentertaskListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentertaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentertaskListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentertaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVmwareCloudDirectorreferenceregionListGet({
			...displayOptions,
			show: { vcdOperation: ['vmwareCloudDirectorreferenceregionListGet'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vcdOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'vmwareCloudDirectorbackupListGet':
			return executeVmwareCloudDirectorbackupListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorbackupListGet2':
			return executeVmwareCloudDirectorbackupListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorbackupUpdatePut':
			return executeVmwareCloudDirectorbackupUpdatePut.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorbackuptaskListGet':
			return executeVmwareCloudDirectorbackuptaskListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorbackuptaskListGet2':
			return executeVmwareCloudDirectorbackuptaskListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationListGet':
			return executeVmwareCloudDirectororganizationListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationListGet2':
			return executeVmwareCloudDirectororganizationListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationUpdatePut':
			return executeVmwareCloudDirectororganizationUpdatePut.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationnetworkAclListGet':
			return executeVmwareCloudDirectororganizationnetworkAclListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationnetworkAclListGet2':
			return executeVmwareCloudDirectororganizationnetworkAclListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationnetworkAclUpdatePut':
			return executeVmwareCloudDirectororganizationnetworkAclUpdatePut.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationpasswordCreatePost':
			return executeVmwareCloudDirectororganizationpasswordCreatePost.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationtaskListGet':
			return executeVmwareCloudDirectororganizationtaskListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationtaskListGet2':
			return executeVmwareCloudDirectororganizationtaskListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCenterListGet':
			return executeVmwareCloudDirectororganizationvirtualDataCenterListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCenterListGet2':
			return executeVmwareCloudDirectororganizationvirtualDataCenterListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCenterUpdatePut':
			return executeVmwareCloudDirectororganizationvirtualDataCenterUpdatePut.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentercomputeListGet':
			return executeVmwareCloudDirectororganizationvirtualDataCentercomputeListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete':
			return executeVmwareCloudDirectororganizationvirtualDataCentercomputeDeleteDelete.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentercomputeListGet2':
			return executeVmwareCloudDirectororganizationvirtualDataCentercomputeListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet':
			return executeVmwareCloudDirectororganizationvirtualDataCenterorderableResourceListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCenterstorageListGet':
			return executeVmwareCloudDirectororganizationvirtualDataCenterstorageListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCenterstorageListGet2':
			return executeVmwareCloudDirectororganizationvirtualDataCenterstorageListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentertaskListGet':
			return executeVmwareCloudDirectororganizationvirtualDataCentertaskListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentertaskListGet2':
			return executeVmwareCloudDirectororganizationvirtualDataCentertaskListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet':
			return executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete':
			return executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentDeleteDelete.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2':
			return executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut':
			return executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmentUpdatePut.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet':
			return executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2':
			return executeVmwareCloudDirectororganizationvirtualDataCentervrackSegmenttaskListGet2.call(this, itemIndex ?? 0);
		case 'vmwareCloudDirectorreferenceregionListGet':
			return executeVmwareCloudDirectorreferenceregionListGet.call(this, itemIndex ?? 0);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudVmwareCloudDirector"`);
}
