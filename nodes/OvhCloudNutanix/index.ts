import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import * as list from './resources/list.operation';
import * as availabilitiesGet from './resources/availabilitiesGet.operation';
import * as availabilitiesRawGet from './resources/availabilitiesRawGet.operation';
import * as availableVersionsGet from './resources/availableVersionsGet.operation';
import * as requirementsGet from './resources/requirementsGet.operation';
import * as get from './resources/get.operation';
import * as updatePut from './resources/updatePut.operation';
import * as changeContactPost from './resources/changeContactPost.operation';
import * as confirmTerminationPost from './resources/confirmTerminationPost.operation';
import * as nodesGet from './resources/nodesGet.operation';
import * as nodeGet from './resources/nodeGet.operation';
import * as nodeUpdatePut from './resources/nodeUpdatePut.operation';
import * as nodeDeployPut from './resources/nodeDeployPut.operation';
import * as nodeTerminatePost from './resources/nodeTerminatePost.operation';
import * as serviceInfosGet from './resources/serviceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/serviceInfosUpdatePut.operation';
import * as terminatePost from './resources/terminatePost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'nutanixOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Change Contact',
				value: 'changeContactPost',
				action: 'Launch a contact change procedure for a Nutanix cluster',
			},
			{
				name: 'Confirm Termination',
				value: 'confirmTerminationPost',
				action: 'Confirm the termination of a Nutanix cluster',
			},
			{
				name: 'Deploy Node',
				value: 'nodeDeployPut',
				action: 'Deploy a node in a Nutanix cluster',
			},
			{
				name: 'Fetch Availabilities',
				value: 'availabilitiesGet',
				action: 'Fetch availabilities for a given Nutanix cluster configuration',
			},
			{
				name: 'Fetch Requirements',
				value: 'requirementsGet',
				action: 'Fetch the requirements for a given Nutanix cluster configuration',
			},
			{
				name: 'Get Available Versions',
				value: 'availableVersionsGet',
				action: 'Fetch the available Nutanix versions to install',
			},
			{
				name: 'Get Cluster Nodes',
				value: 'nodesGet',
				action: 'Retrieve a list of all nodes in a specified Nutanix cluster',
			},
			{
				name: 'Get Node Details',
				value: 'nodeGet',
				action: 'Retrieve detailed information about a specific node in a Nutanix cluster',
			},
			{
				name: 'Get Nutanix Cluster',
				value: 'get',
				action: 'Get detailed information about a Nutanix cluster',
			},
			{
				name: 'Get Service Information',
				value: 'serviceInfosGet',
				action: 'Retrieve service information for a Nutanix cluster',
			},
			{
				name: 'List Nutanix Clusters',
				value: 'list',
				action: 'List all owned Nutanix clusters',
			},
			{
				name: 'List Raw Availabilities',
				value: 'availabilitiesRawGet',
				action: 'List raw availability for Nutanix clusters',
			},
			{
				name: 'Reinstall Node',
				value: 'nodeUpdatePut',
				action: 'Reinstall a node in a Nutanix cluster',
			},
			{
				name: 'Terminate Cluster',
				value: 'terminatePost',
				action: 'Initiate the termination of a Nutanix cluster',
			},
			{
				name: 'Terminate Node',
				value: 'nodeTerminatePost',
				action: 'Terminate a node in a Nutanix cluster',
			},
			{
				name: 'Update Nutanix Cluster',
				value: 'updatePut',
				action: 'Update the configuration of a Nutanix cluster',
			},
			{
				name: 'Update Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update the service information for a Nutanix cluster',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('nutanixOperation', 0) as string;

	switch (operation) {
		case 'changeContactPost':
			return changeContactPost.execute.call(this);
		case 'confirmTerminationPost':
			return confirmTerminationPost.execute.call(this);
		case 'nodeDeployPut':
			return nodeDeployPut.execute.call(this);
		case 'availabilitiesGet':
			return availabilitiesGet.execute.call(this);
		case 'requirementsGet':
			return requirementsGet.execute.call(this);
		case 'availableVersionsGet':
			return availableVersionsGet.execute.call(this);
		case 'nodesGet':
			return nodesGet.execute.call(this);
		case 'nodeGet':
			return nodeGet.execute.call(this);
		case 'get':
			return get.execute.call(this);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this);
		case 'list':
			return list.execute.call(this);
		case 'availabilitiesRawGet':
			return availabilitiesRawGet.execute.call(this);
		case 'nodeUpdatePut':
			return nodeUpdatePut.execute.call(this);
		case 'terminatePost':
			return terminatePost.execute.call(this);
		case 'nodeTerminatePost':
			return nodeTerminatePost.execute.call(this);
		case 'updatePut':
			return updatePut.execute.call(this);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
