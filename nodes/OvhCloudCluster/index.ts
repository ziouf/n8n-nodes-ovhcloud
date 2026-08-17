import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import {
	description as descriptionClusterDeleteDelete,
	execute as executeClusterDeleteDelete,
} from './clusterDeleteDelete.operation';
import {
	description as descriptionClusterGetGet,
	execute as executeClusterGetGet,
} from './clusterGetGet.operation';
import {
	description as descriptionClusterListGet,
	execute as executeClusterListGet,
} from './clusterListGet.operation';
import {
	description as descriptionClusterUpdatePut,
	execute as executeClusterUpdatePut,
} from './clusterUpdatePut.operation';
import {
	description as descriptionReinstallPost,
	execute as executeReinstallPost,
} from './reinstallPost.operation';
import {
	description as descriptionServiceInfosGetGet,
	execute as executeServiceInfosGetGet,
} from './serviceInfosGetGet.operation';
import {
	description as descriptionTaskGetGet,
	execute as executeTaskGetGet,
} from './taskGetGet.operation';
import {
	description as descriptionTaskListGet,
	execute as executeTaskListGet,
} from './taskListGet.operation';

const { description, execute } = createOperationDispatcher(
	'clusterOperation',
	'ovhCloudCluster',
	[
	{
		name: 'Delete Cluster',
		value: 'clusterDeleteDelete',
		action: 'Delete a cluster service',
		execute: executeClusterDeleteDelete,
		description: descriptionClusterDeleteDelete,
	},
	{
		name: 'Get Cluster',
		value: 'clusterGetGet',
		action: 'Get cluster details',
		execute: executeClusterGetGet,
		description: descriptionClusterGetGet,
	},
	{
		name: 'Get Service Infos',
		value: 'serviceInfosGetGet',
		action: 'Get service information for a cluster',
		execute: executeServiceInfosGetGet,
		description: descriptionServiceInfosGetGet,
	},
	{
		name: 'Get Task',
		value: 'taskGetGet',
		action: 'Get task details',
		execute: executeTaskGetGet,
		description: descriptionTaskGetGet,
	},
	{
		name: 'List Clusters',
		value: 'clusterListGet',
		action: 'List all cluster services',
		execute: executeClusterListGet,
		description: descriptionClusterListGet,
		default: true,
	},
	{
		name: 'List Tasks',
		value: 'taskListGet',
		action: 'List tasks for a cluster',
		execute: executeTaskListGet,
		description: descriptionTaskListGet,
	},
	{
		name: 'Reinstall Cluster',
		value: 'reinstallPost',
		action: 'Reinstall a cluster service',
		execute: executeReinstallPost,
		description: descriptionReinstallPost,
	},
	{
		name: 'Update Cluster',
		value: 'clusterUpdatePut',
		action: 'Update cluster details',
		execute: executeClusterUpdatePut,
		description: descriptionClusterUpdatePut,
	},
	],
);

export { description, execute };
