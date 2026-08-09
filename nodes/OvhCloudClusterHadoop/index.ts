import type { IExecuteFunctions, INodeExecutionData, INodeProperties } from 'n8n-workflow';

import * as list from './resources/main/list.operation';
import * as orderInformationsGet from './resources/main/orderInformationsGet.operation';
import * as orderableNodeProfilesGet from './resources/main/orderableNodeProfilesGet.operation';
import * as get from './resources/main/get.operation';
import * as consumptionsGet from './resources/main/consumptionsGet.operation';
import * as nodeBillingProfilesGet from './resources/main/nodeBillingProfilesGet.operation';
import * as nodeConsumptionsGet from './resources/main/nodeConsumptionsGet.operation';
import * as orderNewNodeHourlyPost from './resources/main/orderNewNodeHourlyPost.operation';
import * as orderableNodeProfilesDetailGet from './resources/main/orderableNodeProfilesDetailGet.operation';
import * as restartPost from './resources/main/restartPost.operation';
import * as startPost from './resources/main/startPost.operation';
import * as stopPost from './resources/main/stopPost.operation';
import * as terminatePost from './resources/main/terminatePost.operation';
import * as serviceInfosGet from './resources/main/serviceInfosGet.operation';
import * as serviceInfosUpdatePut from './resources/main/serviceInfosUpdatePut.operation';
import * as networkAclGet from './resources/networkAcl/networkAclGet.operation';
import * as networkAclPost from './resources/networkAcl/networkAclPost.operation';
import * as networkAclBlockGet from './resources/networkAcl/networkAclBlockGet.operation';
import * as networkAclBlockPut from './resources/networkAcl/networkAclBlockPut.operation';
import * as networkAclBlockDelete from './resources/networkAcl/networkAclBlockDelete.operation';
import * as nodeGet from './resources/node/nodeGet.operation';
import * as nodeDelete from './resources/node/nodeDelete.operation';
import * as nodeDecommissionPost from './resources/node/nodeDecommissionPost.operation';
import * as nodeRecommissionPost from './resources/node/nodeRecommissionPost.operation';
import * as nodeRoleGet from './resources/node/nodeRoleGet.operation';
import * as nodeRolePost from './resources/node/nodeRolePost.operation';
import * as nodeRoleTypeGet from './resources/node/nodeRoleTypeGet.operation';
import * as nodeRoleTypeDelete from './resources/node/nodeRoleTypeDelete.operation';
import * as nodeRoleTypeRestartPost from './resources/node/nodeRoleTypeRestartPost.operation';
import * as nodeRoleTypeStartPost from './resources/node/nodeRoleTypeStartPost.operation';
import * as nodeRoleTypeStopPost from './resources/node/nodeRoleTypeStopPost.operation';
import * as serviceRestartPost from './resources/service/serviceRestartPost.operation';
import * as serviceStartPost from './resources/service/serviceStartPost.operation';
import * as serviceStopPost from './resources/service/serviceStopPost.operation';
import * as taskGet from './resources/task/taskGet.operation';
import * as taskDetailGet from './resources/task/taskDetailGet.operation';
import * as userGet from './resources/user/userGet.operation';
import * as userPost from './resources/user/userPost.operation';
import * as userUsernameGet from './resources/user/userUsernameGet.operation';
import * as userUsernamePut from './resources/user/userUsernamePut.operation';
import * as userUsernameDelete from './resources/user/userUsernameDelete.operation';
import * as userResetPasswordPost from './resources/user/userResetPasswordPost.operation';

export function description() {
	const props: INodeProperties[] = [];

	// Operation picker (alphabetical by name)
	props.push({
		displayName: 'Operation',
		name: 'clusterHadoopOperation',
		type: 'options',
		noDataExpression: true,
		default: 'list',
		options: [
			{
				name: 'Add Cluster User',
				value: 'userPost',
				action: 'Add a user to the Hadoop cluster',
			},
			{
				name: 'Add Network ACL',
				value: 'networkAclPost',
				action: 'Add a network ACL to the Hadoop cluster',
			},
			{
				name: 'Add Node Role',
				value: 'nodeRolePost',
				action: 'Add a role to a node of the Hadoop cluster',
			},
			{
				name: 'Decommission Node',
				value: 'nodeDecommissionPost',
				action: 'Decommission a node and all the services on it',
			},
			{
				name: 'Delete Cluster User',
				value: 'userUsernameDelete',
				action: 'Remove a user from the Hadoop cluster',
			},
			{
				name: 'Delete Network ACL',
				value: 'networkAclBlockDelete',
				action: 'Remove a network ACL from the Hadoop cluster',
			},
			{
				name: 'Delete Node',
				value: 'nodeDelete',
				action: 'Remove a node from the Hadoop cluster',
			},
			{
				name: 'Delete Node Role',
				value: 'nodeRoleTypeDelete',
				action: 'Remove a role from a node of the Hadoop cluster',
			},
			{
				name: 'Get Cluster',
				value: 'get',
				action: 'Get the properties of a Hadoop cluster',
			},
			{
				name: 'Get Cluster Consumptions',
				value: 'consumptionsGet',
				action: 'Get the current consumptions billed on the next bill',
			},
			{
				name: 'Get Cluster Order Information',
				value: 'orderInformationsGet',
				action: 'Get information about the order of a Hadoop cluster',
			},
			{
				name: 'Get Network ACL',
				value: 'networkAclBlockGet',
				action: 'Get the properties of a network ACL',
			},
			{
				name: 'Get Node Billing Profiles',
				value: 'nodeBillingProfilesGet',
				action: 'Get the detailed description of each node billing profile',
			},
			{
				name: 'Get Node Consumptions',
				value: 'nodeConsumptionsGet',
				action: 'Get the current node consumptions billed on the next bill',
			},
			{
				name: 'Get Node Properties',
				value: 'nodeGet',
				action: 'Get the properties of a node of the Hadoop cluster',
			},
			{
				name: 'Get Node Role Properties',
				value: 'nodeRoleTypeGet',
				action: 'Get the properties of a node role',
			},
			{
				name: 'Get Orderable Node Profiles',
				value: 'orderableNodeProfilesGet',
				action: 'Get the orderable node profiles and their characteristics',
			},
			{
				name: 'Get Orderable Node Profiles For Cluster',
				value: 'orderableNodeProfilesDetailGet',
				action: 'List the orderable node profiles for a Hadoop cluster',
			},
			{
				name: 'Get Service Information',
				value: 'serviceInfosGet',
				action: 'Get the service information of a Hadoop cluster',
			},
			{
				name: 'Get Task',
				value: 'taskDetailGet',
				action: 'Get the properties of a task of the Hadoop cluster',
			},
			{
				name: 'Get User Properties',
				value: 'userUsernameGet',
				action: 'Get the properties of a Hadoop cluster user',
			},
			{
				name: 'List Cluster Nodes Roles',
				value: 'nodeRoleGet',
				action: 'List the roles of a node of the Hadoop cluster',
			},
			{
				name: 'List Cluster Tasks',
				value: 'taskGet',
				action: 'List the tasks associated with the Hadoop cluster',
			},
			{
				name: 'List Cluster Users',
				value: 'userGet',
				action: 'List the users associated with the Hadoop cluster',
			},
			{
				name: 'List Hadoop Clusters',
				value: 'list',
				action: 'List the available Hadoop clusters',
			},
			{
				name: 'List Network ACLs',
				value: 'networkAclGet',
				action: 'List the network ACLs associated with the Hadoop cluster',
			},
			{
				name: 'Order New Node Hourly',
				value: 'orderNewNodeHourlyPost',
				action: 'Order a new node in the Hadoop cluster',
			},
			{
				name: 'Recommission Node',
				value: 'nodeRecommissionPost',
				action: 'Recommission a node and all the services on it',
			},
			{
				name: 'Reset User Password',
				value: 'userResetPasswordPost',
				action: 'Reset the password for a Hadoop cluster user',
			},
			{
				name: 'Restart Cluster',
				value: 'restartPost',
				action: 'Restart the Cloudera Manager Hadoop Cluster',
			},
			{
				name: 'Restart Node Role',
				value: 'nodeRoleTypeRestartPost',
				action: 'Restart a role on a node',
			},
			{
				name: 'Restart Service',
				value: 'serviceRestartPost',
				action: 'Restart a Cloudera Manager service',
			},
			{
				name: 'Start Cluster',
				value: 'startPost',
				action: 'Start the Cloudera Manager Hadoop Cluster',
			},
			{
				name: 'Start Node Role',
				value: 'nodeRoleTypeStartPost',
				action: 'Start a role on a node',
			},
			{
				name: 'Start Service',
				value: 'serviceStartPost',
				action: 'Start a Cloudera Manager service',
			},
			{
				name: 'Stop Cluster',
				value: 'stopPost',
				action: 'Stop a Cloudera Manager Hadoop Cluster',
			},
			{
				name: 'Stop Node Role',
				value: 'nodeRoleTypeStopPost',
				action: 'Stop a role on a node',
			},
			{
				name: 'Stop Service',
				value: 'serviceStopPost',
				action: 'Stop a Cloudera Manager service',
			},
			{
				name: 'Terminate Cluster',
				value: 'terminatePost',
				action: 'Terminate your Hadoop cluster service',
			},
			{
				name: 'Update Network ACL',
				value: 'networkAclBlockPut',
				action: 'Update the properties of a network ACL',
			},
			{
				name: 'Update Service Information',
				value: 'serviceInfosUpdatePut',
				action: 'Update the service information of a Hadoop cluster',
			},
			{
				name: 'Update User',
				value: 'userUsernamePut',
				action: 'Update the properties of a Hadoop cluster user',
			},
		],
	});

	return props;
}

export async function execute(this: IExecuteFunctions, itemIndex?: number): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('clusterHadoopOperation', 0) as string;

	switch (operation) {
		case 'userPost':
			return userPost.execute.call(this, itemIndex ?? 0);
		case 'networkAclPost':
			return networkAclPost.execute.call(this, itemIndex ?? 0);
		case 'nodeRolePost':
			return nodeRolePost.execute.call(this, itemIndex ?? 0);
		case 'nodeDecommissionPost':
			return nodeDecommissionPost.execute.call(this, itemIndex ?? 0);
		case 'userUsernameDelete':
			return userUsernameDelete.execute.call(this, itemIndex ?? 0);
		case 'networkAclBlockDelete':
			return networkAclBlockDelete.execute.call(this, itemIndex ?? 0);
		case 'nodeDelete':
			return nodeDelete.execute.call(this, itemIndex ?? 0);
		case 'nodeRoleTypeDelete':
			return nodeRoleTypeDelete.execute.call(this, itemIndex ?? 0);
		case 'get':
			return get.execute.call(this, itemIndex ?? 0);
		case 'consumptionsGet':
			return consumptionsGet.execute.call(this, itemIndex ?? 0);
		case 'orderInformationsGet':
			return orderInformationsGet.execute.call(this, itemIndex ?? 0);
		case 'networkAclBlockGet':
			return networkAclBlockGet.execute.call(this, itemIndex ?? 0);
		case 'nodeBillingProfilesGet':
			return nodeBillingProfilesGet.execute.call(this, itemIndex ?? 0);
		case 'nodeConsumptionsGet':
			return nodeConsumptionsGet.execute.call(this, itemIndex ?? 0);
		case 'nodeGet':
			return nodeGet.execute.call(this, itemIndex ?? 0);
		case 'nodeRoleTypeGet':
			return nodeRoleTypeGet.execute.call(this, itemIndex ?? 0);
		case 'orderableNodeProfilesGet':
			return orderableNodeProfilesGet.execute.call(this, itemIndex ?? 0);
		case 'orderableNodeProfilesDetailGet':
			return orderableNodeProfilesDetailGet.execute.call(this, itemIndex ?? 0);
		case 'serviceInfosGet':
			return serviceInfosGet.execute.call(this, itemIndex ?? 0);
		case 'taskDetailGet':
			return taskDetailGet.execute.call(this, itemIndex ?? 0);
		case 'userUsernameGet':
			return userUsernameGet.execute.call(this, itemIndex ?? 0);
		case 'nodeRoleGet':
			return nodeRoleGet.execute.call(this, itemIndex ?? 0);
		case 'taskGet':
			return taskGet.execute.call(this, itemIndex ?? 0);
		case 'userGet':
			return userGet.execute.call(this, itemIndex ?? 0);
		case 'list':
			return list.execute.call(this, itemIndex ?? 0);
		case 'networkAclGet':
			return networkAclGet.execute.call(this, itemIndex ?? 0);
		case 'orderNewNodeHourlyPost':
			return orderNewNodeHourlyPost.execute.call(this, itemIndex ?? 0);
		case 'nodeRecommissionPost':
			return nodeRecommissionPost.execute.call(this, itemIndex ?? 0);
		case 'userResetPasswordPost':
			return userResetPasswordPost.execute.call(this, itemIndex ?? 0);
		case 'restartPost':
			return restartPost.execute.call(this, itemIndex ?? 0);
		case 'nodeRoleTypeRestartPost':
			return nodeRoleTypeRestartPost.execute.call(this, itemIndex ?? 0);
		case 'serviceRestartPost':
			return serviceRestartPost.execute.call(this, itemIndex ?? 0);
		case 'startPost':
			return startPost.execute.call(this, itemIndex ?? 0);
		case 'nodeRoleTypeStartPost':
			return nodeRoleTypeStartPost.execute.call(this, itemIndex ?? 0);
		case 'serviceStartPost':
			return serviceStartPost.execute.call(this, itemIndex ?? 0);
		case 'stopPost':
			return stopPost.execute.call(this, itemIndex ?? 0);
		case 'nodeRoleTypeStopPost':
			return nodeRoleTypeStopPost.execute.call(this, itemIndex ?? 0);
		case 'serviceStopPost':
			return serviceStopPost.execute.call(this, itemIndex ?? 0);
		case 'terminatePost':
			return terminatePost.execute.call(this, itemIndex ?? 0);
		case 'networkAclBlockPut':
			return networkAclBlockPut.execute.call(this, itemIndex ?? 0);
		case 'serviceInfosUpdatePut':
			return serviceInfosUpdatePut.execute.call(this, itemIndex ?? 0);
		case 'userUsernamePut':
			return userUsernamePut.execute.call(this, itemIndex ?? 0);
		default:
			throw new Error(`No handler for operation '${operation}'`);
	}
}
