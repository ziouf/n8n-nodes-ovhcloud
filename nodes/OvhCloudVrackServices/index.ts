import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';

import {
	execute as executeVrackServicesreferencecompatibleManagedServiceTypeListGet,
	description as descriptionVrackServicesreferencecompatibleManagedServiceTypeListGet,
} from './vrackServicesreferencecompatibleManagedServiceTypeListGet.operation';
import {
	execute as executeVrackServicesreferenceregionListGet,
	description as descriptionVrackServicesreferenceregionListGet,
} from './vrackServicesreferenceregionListGet.operation';
import {
	execute as executeVrackServicesresourceListGet,
	description as descriptionVrackServicesresourceListGet,
} from './vrackServicesresourceListGet.operation';
import {
	execute as executeVrackServicesresourceListGet2,
	description as descriptionVrackServicesresourceListGet2,
} from './vrackServicesresourceListGet2.operation';
import {
	execute as executeVrackServicesresourceUpdatePut,
	description as descriptionVrackServicesresourceUpdatePut,
} from './vrackServicesresourceUpdatePut.operation';
import {
	execute as executeVrackServicesresourceeligibleManagedServiceListGet,
	description as descriptionVrackServicesresourceeligibleManagedServiceListGet,
} from './vrackServicesresourceeligibleManagedServiceListGet.operation';
import {
	execute as executeVrackServicesresourcetaskListGet,
	description as descriptionVrackServicesresourcetaskListGet,
} from './vrackServicesresourcetaskListGet.operation';
import {
	execute as executeVrackServicesresourcetaskListGet2,
	description as descriptionVrackServicesresourcetaskListGet2,
} from './vrackServicesresourcetaskListGet2.operation';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'Operation',
			name: 'vrackServicesOperation',
			type: 'options',
			noDataExpression: true,
			options: [
			{
				name: 'List All Managed Service Types that Are Compatible with vRack Services (IAM Resource Types)',
				value: 'vrackServicesreferencecompatibleManagedServiceTypeListGet',
				action: 'List all managed service types that are compatible with vRack Services (IAM resource types)',
			},
			{
				name: 'List All vRack Services Regions',
				value: 'vrackServicesreferenceregionListGet',
				action: 'List all vRack Services regions',
			},
			{
				name: 'List All vRack Services',
				value: 'vrackServicesresourceListGet',
				action: 'List all vRack Services',
			},
			{
				name: 'Retrieve a vRack Services',
				value: 'vrackServicesresourceListGet2',
				action: 'Retrieve a vRack Services',
			},
			{
				name: 'Request Updates on the vRack Services Configuration',
				value: 'vrackServicesresourceUpdatePut',
				action: 'Request updates on the vRack Services configuration',
			},
			{
				name: 'List Every Managed Service Eligible to the Requested vRack Services',
				value: 'vrackServicesresourceeligibleManagedServiceListGet',
				action: 'List every managed service eligible to the requested vRack Services',
			},
			{
				name: 'List All Asynchronous Operations Related to the vRack Services',
				value: 'vrackServicesresourcetaskListGet',
				action: 'List all asynchronous operations related to the vRack Services',
			},
			{
				name: 'Get the Task',
				value: 'vrackServicesresourcetaskListGet2',
				action: 'Get the task',
			},

			],
			default: 'vrackServicesreferencecompatibleManagedServiceTypeListGet',
			displayOptions,
		},
	];

	const properties: INodeProperties[] = [
		...operationProperties,
		...(descriptionVrackServicesreferencecompatibleManagedServiceTypeListGet({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesreferencecompatibleManagedServiceTypeListGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackServicesreferenceregionListGet({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesreferenceregionListGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackServicesresourceListGet({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesresourceListGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackServicesresourceListGet2({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesresourceListGet2'] },
		}) as INodeProperties[]),
		...(descriptionVrackServicesresourceUpdatePut({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesresourceUpdatePut'] },
		}) as INodeProperties[]),
		...(descriptionVrackServicesresourceeligibleManagedServiceListGet({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesresourceeligibleManagedServiceListGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackServicesresourcetaskListGet({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesresourcetaskListGet'] },
		}) as INodeProperties[]),
		...(descriptionVrackServicesresourcetaskListGet2({
			...displayOptions,
			show: { vrackServicesOperation: ['vrackServicesresourcetaskListGet2'] },
		}) as INodeProperties[]),

	];

	return properties;
}

export async function execute(
	this: IExecuteFunctions,
	itemIndex: number,
): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('vrackServicesOperation', itemIndex, {
		extractValue: true,
	});

	switch (operation) {
		case 'vrackServicesreferencecompatibleManagedServiceTypeListGet':
			return executeVrackServicesreferencecompatibleManagedServiceTypeListGet.call(this, itemIndex);
		case 'vrackServicesreferenceregionListGet':
			return executeVrackServicesreferenceregionListGet.call(this, itemIndex);
		case 'vrackServicesresourceListGet':
			return executeVrackServicesresourceListGet.call(this, itemIndex);
		case 'vrackServicesresourceListGet2':
			return executeVrackServicesresourceListGet2.call(this, itemIndex);
		case 'vrackServicesresourceUpdatePut':
			return executeVrackServicesresourceUpdatePut.call(this, itemIndex);
		case 'vrackServicesresourceeligibleManagedServiceListGet':
			return executeVrackServicesresourceeligibleManagedServiceListGet.call(this, itemIndex);
		case 'vrackServicesresourcetaskListGet':
			return executeVrackServicesresourcetaskListGet.call(this, itemIndex);
		case 'vrackServicesresourcetaskListGet2':
			return executeVrackServicesresourcetaskListGet2.call(this, itemIndex);

	}

	throw new Error(`Unsupported operation "${operation}" for resource "ovhCloudVrackServices"`);
}
