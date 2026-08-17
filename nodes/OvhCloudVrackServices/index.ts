import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionVrackServicesreferencecompatibleManagedServiceTypeListGet,
	execute as executeVrackServicesreferencecompatibleManagedServiceTypeListGet,
} from './vrackServicesreferencecompatibleManagedServiceTypeListGet.operation';
import {
	description as descriptionVrackServicesreferenceregionListGet,
	execute as executeVrackServicesreferenceregionListGet,
} from './vrackServicesreferenceregionListGet.operation';
import {
	description as descriptionVrackServicesresourceListGet,
	execute as executeVrackServicesresourceListGet,
} from './vrackServicesresourceListGet.operation';
import {
	description as descriptionVrackServicesresourceListGet2,
	execute as executeVrackServicesresourceListGet2,
} from './vrackServicesresourceListGet2.operation';
import {
	description as descriptionVrackServicesresourceUpdatePut,
	execute as executeVrackServicesresourceUpdatePut,
} from './vrackServicesresourceUpdatePut.operation';
import {
	description as descriptionVrackServicesresourceeligibleManagedServiceListGet,
	execute as executeVrackServicesresourceeligibleManagedServiceListGet,
} from './vrackServicesresourceeligibleManagedServiceListGet.operation';
import {
	description as descriptionVrackServicesresourcetaskListGet,
	execute as executeVrackServicesresourcetaskListGet,
} from './vrackServicesresourcetaskListGet.operation';
import {
	description as descriptionVrackServicesresourcetaskListGet2,
	execute as executeVrackServicesresourcetaskListGet2,
} from './vrackServicesresourcetaskListGet2.operation';

const { description, execute } = createOperationDispatcher(
	'vrackServicesOperation',
	'ovhCloudVrackServices',
	[
	{
		name: 'Get the Task',
		value: 'vrackServicesresourcetaskListGet2',
		action: 'Get the task',
		execute: executeVrackServicesresourcetaskListGet2,
		description: descriptionVrackServicesresourcetaskListGet2,
	},
	{
		name: 'List All Asynchronous Operations Related to the vRack Services',
		value: 'vrackServicesresourcetaskListGet',
		action: 'List all asynchronous operations related to the vRack Services',
		execute: executeVrackServicesresourcetaskListGet,
		description: descriptionVrackServicesresourcetaskListGet,
	},
	{
		name: 'List All Managed Service Types that Are Compatible with vRack Services (IAM Resource Types)',
		value: 'vrackServicesreferencecompatibleManagedServiceTypeListGet',
		action: 'List all managed service types that are compatible with vRack Services (IAM resource types)',
		execute: executeVrackServicesreferencecompatibleManagedServiceTypeListGet,
		description: descriptionVrackServicesreferencecompatibleManagedServiceTypeListGet,
		default: true,
	},
	{
		name: 'List All vRack Services',
		value: 'vrackServicesresourceListGet',
		action: 'List all vRack Services',
		execute: executeVrackServicesresourceListGet,
		description: descriptionVrackServicesresourceListGet,
	},
	{
		name: 'List All vRack Services Regions',
		value: 'vrackServicesreferenceregionListGet',
		action: 'List all vRack Services regions',
		execute: executeVrackServicesreferenceregionListGet,
		description: descriptionVrackServicesreferenceregionListGet,
	},
	{
		name: 'List Every Managed Service Eligible to the Requested vRack Services',
		value: 'vrackServicesresourceeligibleManagedServiceListGet',
		action: 'List every managed service eligible to the requested vRack Services',
		execute: executeVrackServicesresourceeligibleManagedServiceListGet,
		description: descriptionVrackServicesresourceeligibleManagedServiceListGet,
	},
	{
		name: 'Request Updates on the vRack Services Configuration',
		value: 'vrackServicesresourceUpdatePut',
		action: 'Request updates on the vRack Services configuration',
		execute: executeVrackServicesresourceUpdatePut,
		description: descriptionVrackServicesresourceUpdatePut,
	},
	{
		name: 'Retrieve a vRack Services',
		value: 'vrackServicesresourceListGet2',
		action: 'Retrieve a vRack Services',
		execute: executeVrackServicesresourceListGet2,
		description: descriptionVrackServicesresourceListGet2,
	},
	],
);

export { description, execute };
