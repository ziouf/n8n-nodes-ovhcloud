import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionClusterAvailabilitiesRawGetGet,
	execute as executeClusterAvailabilitiesRawGetGet,
} from './ClusterAvailabilitiesRawGet.operation';
import {
	description as descriptionDedicatedClusterAvailabilitiesGetGet,
	execute as executeDedicatedClusterAvailabilitiesGetGet,
} from './DedicatedClusterAvailabilitiesGet.operation';
import {
	description as descriptionDedicatedClusterChangecontactCreatePost,
	execute as executeDedicatedClusterChangecontactCreatePost,
} from './DedicatedClusterChangecontactCreate.operation';
import {
	description as descriptionDedicatedClusterConfirmterminationCreatePost,
	execute as executeDedicatedClusterConfirmterminationCreatePost,
} from './DedicatedClusterConfirmterminationCreate.operation';
import {
	description as descriptionDedicatedClusterGetGet,
	execute as executeDedicatedClusterGetGet,
} from './DedicatedClusterGet.operation';
import {
	description as descriptionDedicatedClusterGetServicenameGet,
	execute as executeDedicatedClusterGetServicenameGet,
} from './DedicatedClusterGetServicename.operation';
import {
	description as descriptionDedicatedClusterServiceinfosGetGet,
	execute as executeDedicatedClusterServiceinfosGetGet,
} from './DedicatedClusterServiceinfosGet.operation';
import {
	description as descriptionDedicatedClusterServiceinfosUpdatePut,
	execute as executeDedicatedClusterServiceinfosUpdatePut,
} from './DedicatedClusterServiceinfosUpdate.operation';
import {
	description as descriptionDedicatedClusterTerminateCreatePost,
	execute as executeDedicatedClusterTerminateCreatePost,
} from './DedicatedClusterTerminateCreate.operation';


const { description, execute } = createOperationDispatcher(
	'dedicatedClusterOperation',
	'dedicatedcluster',
	[
	{
		name: 'Ask For The Termination Of Your Service',
		value: 'DedicatedClusterTerminateCreate',
		action: 'Ask for the termination of your service',
		execute: executeDedicatedClusterTerminateCreatePost,
		description: descriptionDedicatedClusterTerminateCreatePost,
		show: false,
		default: true,
	},
	{
		name: 'Confirm Service Termination',
		value: 'DedicatedClusterConfirmterminationCreate',
		action: 'Confirm service termination',
		execute: executeDedicatedClusterConfirmterminationCreatePost,
		description: descriptionDedicatedClusterConfirmterminationCreatePost,
		show: false,
	},
	{
		name: 'Fetch The Availabilities For A Given Cluster Configuration',
		value: 'DedicatedClusterAvailabilitiesGet',
		action: 'Fetch the availabilities for a given cluster configuration',
		execute: executeDedicatedClusterAvailabilitiesGetGet,
		description: descriptionDedicatedClusterAvailabilitiesGetGet,
		show: false,
	},
	{
		name: 'Get Cluster Info',
		value: 'DedicatedClusterGetServicename',
		action: 'Get cluster info',
		execute: executeDedicatedClusterGetServicenameGet,
		description: descriptionDedicatedClusterGetServicenameGet,
		show: false,
	},
	{
		name: 'Get Service Information',
		value: 'DedicatedClusterServiceinfosGet',
		action: 'Get service information',
		execute: executeDedicatedClusterServiceinfosGetGet,
		description: descriptionDedicatedClusterServiceinfosGetGet,
		show: false,
	},
	{
		name: 'Launch A Contact Change Procedure',
		value: 'DedicatedClusterChangecontactCreate',
		action: 'Launch a contact change procedure',
		execute: executeDedicatedClusterChangecontactCreatePost,
		description: descriptionDedicatedClusterChangecontactCreatePost,
		show: false,
	},
	{
		name: 'List Dedicated Clusters',
		value: 'DedicatedClusterGet',
		action: 'List dedicated clusters',
		execute: executeDedicatedClusterGetGet,
		description: descriptionDedicatedClusterGetGet,
		show: false,
	},
	{
		name: 'List The Raw Availability For Cluster',
		value: 'ClusterAvailabilitiesRawGet',
		action: 'List the raw availability for cluster',
		execute: executeClusterAvailabilitiesRawGetGet,
		description: descriptionClusterAvailabilitiesRawGetGet,
		show: false,
	},
	{
		name: 'Update Service Information',
		value: 'DedicatedClusterServiceinfosUpdate',
		action: 'Update service information',
		execute: executeDedicatedClusterServiceinfosUpdatePut,
		description: descriptionDedicatedClusterServiceinfosUpdatePut,
		show: false,
	},
	],
);

export { description, execute };
