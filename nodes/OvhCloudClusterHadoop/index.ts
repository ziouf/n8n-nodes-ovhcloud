import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as userPostExecute } from './resources/user/userPost.operation';
import { execute as networkAclPostExecute } from './resources/networkAcl/networkAclPost.operation';
import { execute as nodeRolePostExecute } from './resources/node/nodeRolePost.operation';
import { execute as nodeDecommissionPostExecute } from './resources/node/nodeDecommissionPost.operation';
import { execute as userUsernameDeleteExecute } from './resources/user/userUsernameDelete.operation';
import { execute as networkAclBlockDeleteExecute } from './resources/networkAcl/networkAclBlockDelete.operation';
import { execute as nodeDeleteExecute } from './resources/node/nodeDelete.operation';
import { execute as nodeRoleTypeDeleteExecute } from './resources/node/nodeRoleTypeDelete.operation';
import { execute as getExecute } from './resources/main/get.operation';
import { execute as consumptionsGetExecute } from './resources/main/consumptionsGet.operation';
import { execute as orderInformationsGetExecute } from './resources/main/orderInformationsGet.operation';
import { execute as networkAclBlockGetExecute } from './resources/networkAcl/networkAclBlockGet.operation';
import { execute as nodeBillingProfilesGetExecute } from './resources/main/nodeBillingProfilesGet.operation';
import { execute as nodeConsumptionsGetExecute } from './resources/main/nodeConsumptionsGet.operation';
import { execute as nodeGetExecute } from './resources/node/nodeGet.operation';
import { execute as nodeRoleTypeGetExecute } from './resources/node/nodeRoleTypeGet.operation';
import { execute as orderableNodeProfilesGetExecute } from './resources/main/orderableNodeProfilesGet.operation';
import { execute as orderableNodeProfilesDetailGetExecute } from './resources/main/orderableNodeProfilesDetailGet.operation';
import { execute as serviceInfosGetExecute } from './resources/main/serviceInfosGet.operation';
import { execute as taskDetailGetExecute } from './resources/task/taskDetailGet.operation';
import { execute as userUsernameGetExecute } from './resources/user/userUsernameGet.operation';
import { execute as nodeRoleGetExecute } from './resources/node/nodeRoleGet.operation';
import { execute as taskGetExecute } from './resources/task/taskGet.operation';
import { execute as userGetExecute } from './resources/user/userGet.operation';
import { execute as listExecute } from './resources/main/list.operation';
import { execute as networkAclGetExecute } from './resources/networkAcl/networkAclGet.operation';
import { execute as orderNewNodeHourlyPostExecute } from './resources/main/orderNewNodeHourlyPost.operation';
import { execute as nodeRecommissionPostExecute } from './resources/node/nodeRecommissionPost.operation';
import { execute as userResetPasswordPostExecute } from './resources/user/userResetPasswordPost.operation';
import { execute as restartPostExecute } from './resources/main/restartPost.operation';
import { execute as nodeRoleTypeRestartPostExecute } from './resources/node/nodeRoleTypeRestartPost.operation';
import { execute as serviceRestartPostExecute } from './resources/service/serviceRestartPost.operation';
import { execute as startPostExecute } from './resources/main/startPost.operation';
import { execute as nodeRoleTypeStartPostExecute } from './resources/node/nodeRoleTypeStartPost.operation';
import { execute as serviceStartPostExecute } from './resources/service/serviceStartPost.operation';
import { execute as stopPostExecute } from './resources/main/stopPost.operation';
import { execute as nodeRoleTypeStopPostExecute } from './resources/node/nodeRoleTypeStopPost.operation';
import { execute as serviceStopPostExecute } from './resources/service/serviceStopPost.operation';
import { execute as terminatePostExecute } from './resources/main/terminatePost.operation';
import { execute as networkAclBlockPutExecute } from './resources/networkAcl/networkAclBlockPut.operation';
import { execute as serviceInfosUpdatePutExecute } from './resources/main/serviceInfosUpdatePut.operation';
import { execute as userUsernamePutExecute } from './resources/user/userUsernamePut.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'clusterHadoopOperation',
	'clusterhadoop',
	[
	{
		name: 'Add Cluster User',
		value: 'userPost',
		action: 'Add a user to the Hadoop cluster',
		execute: userPostExecute,
		description: noProps,
	},
	{
		name: 'Add Network ACL',
		value: 'networkAclPost',
		action: 'Add a network ACL to the Hadoop cluster',
		execute: networkAclPostExecute,
		description: noProps,
	},
	{
		name: 'Add Node Role',
		value: 'nodeRolePost',
		action: 'Add a role to a node of the Hadoop cluster',
		execute: nodeRolePostExecute,
		description: noProps,
	},
	{
		name: 'Decommission Node',
		value: 'nodeDecommissionPost',
		action: 'Decommission a node and all the services on it',
		execute: nodeDecommissionPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Cluster User',
		value: 'userUsernameDelete',
		action: 'Remove a user from the Hadoop cluster',
		execute: userUsernameDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Network ACL',
		value: 'networkAclBlockDelete',
		action: 'Remove a network ACL from the Hadoop cluster',
		execute: networkAclBlockDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Node',
		value: 'nodeDelete',
		action: 'Remove a node from the Hadoop cluster',
		execute: nodeDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Node Role',
		value: 'nodeRoleTypeDelete',
		action: 'Remove a role from a node of the Hadoop cluster',
		execute: nodeRoleTypeDeleteExecute,
		description: noProps,
	},
	{
		name: 'Get Cluster',
		value: 'get',
		action: 'Get the properties of a Hadoop cluster',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get Cluster Consumptions',
		value: 'consumptionsGet',
		action: 'Get the current consumptions billed on the next bill',
		execute: consumptionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Cluster Order Information',
		value: 'orderInformationsGet',
		action: 'Get information about the order of a Hadoop cluster',
		execute: orderInformationsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Network ACL',
		value: 'networkAclBlockGet',
		action: 'Get the properties of a network ACL',
		execute: networkAclBlockGetExecute,
		description: noProps,
	},
	{
		name: 'Get Node Billing Profiles',
		value: 'nodeBillingProfilesGet',
		action: 'Get the detailed description of each node billing profile',
		execute: nodeBillingProfilesGetExecute,
		description: noProps,
	},
	{
		name: 'Get Node Consumptions',
		value: 'nodeConsumptionsGet',
		action: 'Get the current node consumptions billed on the next bill',
		execute: nodeConsumptionsGetExecute,
		description: noProps,
	},
	{
		name: 'Get Node Properties',
		value: 'nodeGet',
		action: 'Get the properties of a node of the Hadoop cluster',
		execute: nodeGetExecute,
		description: noProps,
	},
	{
		name: 'Get Node Role Properties',
		value: 'nodeRoleTypeGet',
		action: 'Get the properties of a node role',
		execute: nodeRoleTypeGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Node Profiles',
		value: 'orderableNodeProfilesGet',
		action: 'Get the orderable node profiles and their characteristics',
		execute: orderableNodeProfilesGetExecute,
		description: noProps,
	},
	{
		name: 'Get Orderable Node Profiles For Cluster',
		value: 'orderableNodeProfilesDetailGet',
		action: 'List the orderable node profiles for a Hadoop cluster',
		execute: orderableNodeProfilesDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Get the service information of a Hadoop cluster',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'Get Task',
		value: 'taskDetailGet',
		action: 'Get the properties of a task of the Hadoop cluster',
		execute: taskDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get User Properties',
		value: 'userUsernameGet',
		action: 'Get the properties of a Hadoop cluster user',
		execute: userUsernameGetExecute,
		description: noProps,
	},
	{
		name: 'List Cluster Nodes Roles',
		value: 'nodeRoleGet',
		action: 'List the roles of a node of the Hadoop cluster',
		execute: nodeRoleGetExecute,
		description: noProps,
	},
	{
		name: 'List Cluster Tasks',
		value: 'taskGet',
		action: 'List the tasks associated with the Hadoop cluster',
		execute: taskGetExecute,
		description: noProps,
	},
	{
		name: 'List Cluster Users',
		value: 'userGet',
		action: 'List the users associated with the Hadoop cluster',
		execute: userGetExecute,
		description: noProps,
	},
	{
		name: 'List Hadoop Clusters',
		value: 'list',
		action: 'List the available Hadoop clusters',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'List Network ACLs',
		value: 'networkAclGet',
		action: 'List the network ACLs associated with the Hadoop cluster',
		execute: networkAclGetExecute,
		description: noProps,
	},
	{
		name: 'Order New Node Hourly',
		value: 'orderNewNodeHourlyPost',
		action: 'Order a new node in the Hadoop cluster',
		execute: orderNewNodeHourlyPostExecute,
		description: noProps,
	},
	{
		name: 'Recommission Node',
		value: 'nodeRecommissionPost',
		action: 'Recommission a node and all the services on it',
		execute: nodeRecommissionPostExecute,
		description: noProps,
	},
	{
		name: 'Reset User Password',
		value: 'userResetPasswordPost',
		action: 'Reset the password for a Hadoop cluster user',
		execute: userResetPasswordPostExecute,
		description: noProps,
	},
	{
		name: 'Restart Cluster',
		value: 'restartPost',
		action: 'Restart the Cloudera Manager Hadoop Cluster',
		execute: restartPostExecute,
		description: noProps,
	},
	{
		name: 'Restart Node Role',
		value: 'nodeRoleTypeRestartPost',
		action: 'Restart a role on a node',
		execute: nodeRoleTypeRestartPostExecute,
		description: noProps,
	},
	{
		name: 'Restart Service',
		value: 'serviceRestartPost',
		action: 'Restart a Cloudera Manager service',
		execute: serviceRestartPostExecute,
		description: noProps,
	},
	{
		name: 'Start Cluster',
		value: 'startPost',
		action: 'Start the Cloudera Manager Hadoop Cluster',
		execute: startPostExecute,
		description: noProps,
	},
	{
		name: 'Start Node Role',
		value: 'nodeRoleTypeStartPost',
		action: 'Start a role on a node',
		execute: nodeRoleTypeStartPostExecute,
		description: noProps,
	},
	{
		name: 'Start Service',
		value: 'serviceStartPost',
		action: 'Start a Cloudera Manager service',
		execute: serviceStartPostExecute,
		description: noProps,
	},
	{
		name: 'Stop Cluster',
		value: 'stopPost',
		action: 'Stop a Cloudera Manager Hadoop Cluster',
		execute: stopPostExecute,
		description: noProps,
	},
	{
		name: 'Stop Node Role',
		value: 'nodeRoleTypeStopPost',
		action: 'Stop a role on a node',
		execute: nodeRoleTypeStopPostExecute,
		description: noProps,
	},
	{
		name: 'Stop Service',
		value: 'serviceStopPost',
		action: 'Stop a Cloudera Manager service',
		execute: serviceStopPostExecute,
		description: noProps,
	},
	{
		name: 'Terminate Cluster',
		value: 'terminatePost',
		action: 'Terminate your Hadoop cluster service',
		execute: terminatePostExecute,
		description: noProps,
	},
	{
		name: 'Update Network ACL',
		value: 'networkAclBlockPut',
		action: 'Update the properties of a network ACL',
		execute: networkAclBlockPutExecute,
		description: noProps,
	},
	{
		name: 'Update Service Information',
		value: 'serviceInfosUpdatePut',
		action: 'Update the service information of a Hadoop cluster',
		execute: serviceInfosUpdatePutExecute,
		description: noProps,
	},
	{
		name: 'Update User',
		value: 'userUsernamePut',
		action: 'Update the properties of a Hadoop cluster user',
		execute: userUsernamePutExecute,
		description: noProps,
	},
	],

);

export { description, execute };
