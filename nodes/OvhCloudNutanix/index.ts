import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as changeContactPostExecute } from './resources/changeContactPost.operation';
import { execute as confirmTerminationPostExecute } from './resources/confirmTerminationPost.operation';
import { execute as nodeDeployPutExecute } from './resources/nodeDeployPut.operation';
import { execute as availabilitiesGetExecute } from './resources/availabilitiesGet.operation';
import { execute as requirementsGetExecute } from './resources/requirementsGet.operation';
import { execute as availableVersionsGetExecute } from './resources/availableVersionsGet.operation';
import { execute as nodesGetExecute } from './resources/nodesGet.operation';
import { execute as nodeGetExecute } from './resources/nodeGet.operation';
import { execute as getExecute } from './resources/get.operation';
import { execute as serviceInfosGetExecute } from './resources/serviceInfosGet.operation';
import { execute as listExecute } from './resources/list.operation';
import { execute as availabilitiesRawGetExecute } from './resources/availabilitiesRawGet.operation';
import { execute as nodeUpdatePutExecute } from './resources/nodeUpdatePut.operation';
import { execute as terminatePostExecute } from './resources/terminatePost.operation';
import { execute as nodeTerminatePostExecute } from './resources/nodeTerminatePost.operation';
import { execute as updatePutExecute } from './resources/updatePut.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/serviceInfosUpdatePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'nutanixOperation',
	'nutanix',
	[
	{
		name: 'Change Contact',
		value: 'changeContactPost',
		action: 'Launch a contact change procedure for a Nutanix cluster',
		execute: changeContactPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Termination',
		value: 'confirmTerminationPost',
		action: 'Confirm the termination of a Nutanix cluster',
		execute: confirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Deploy Node',
		value: 'nodeDeployPut',
		action: 'Deploy a node in a Nutanix cluster',
		execute: nodeDeployPutExecute,
		description: noProps,
	},
	{
		name: 'Fetch Availabilities',
		value: 'availabilitiesGet',
		action: 'Fetch availabilities for a given Nutanix cluster configuration',
		execute: availabilitiesGetExecute,
		description: noProps,
	},
	{
		name: 'Fetch Requirements',
		value: 'requirementsGet',
		action: 'Fetch the requirements for a given Nutanix cluster configuration',
		execute: requirementsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Available Versions',
		value: 'availableVersionsGet',
		action: 'Fetch the available Nutanix versions to install',
		execute: availableVersionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Cluster Nodes',
		value: 'nodesGet',
		action: 'Retrieve a list of all nodes in a specified Nutanix cluster',
		execute: nodesGetExecute,
		description: noProps,
	},
	{
		name: 'Get Node Details',
		value: 'nodeGet',
		action: 'Retrieve detailed information about a specific node in a Nutanix cluster',
		execute: nodeGetExecute,
		description: noProps,
	},
	{
		name: 'Get Nutanix Cluster',
		value: 'get',
		action: 'Get detailed information about a Nutanix cluster',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Retrieve service information for a Nutanix cluster',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'List Nutanix Clusters',
		value: 'list',
		action: 'List all owned Nutanix clusters',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'List Raw Availabilities',
		value: 'availabilitiesRawGet',
		action: 'List raw availability for Nutanix clusters',
		execute: availabilitiesRawGetExecute,
		description: noProps,
	},
	{
		name: 'Reinstall Node',
		value: 'nodeUpdatePut',
		action: 'Reinstall a node in a Nutanix cluster',
		execute: nodeUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'Terminate Cluster',
		value: 'terminatePost',
		action: 'Initiate the termination of a Nutanix cluster',
		execute: terminatePostExecute,
		description: noProps,
	},
	{
		name: 'Terminate Node',
		value: 'nodeTerminatePost',
		action: 'Terminate a node in a Nutanix cluster',
		execute: nodeTerminatePostExecute,
		description: noProps,
	},
	{
		name: 'Update Nutanix Cluster',
		value: 'updatePut',
		action: 'Update the configuration of a Nutanix cluster',
		execute: updatePutExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update the service information for a Nutanix cluster',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
