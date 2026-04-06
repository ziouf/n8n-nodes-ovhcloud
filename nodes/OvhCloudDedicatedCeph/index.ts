/**
 * @brief DedicatedCeph resource operations for n8n node
 *
 * Provides operations for managing OVH Dedicated Ceph services including:
 * - List all Dedicated Ceph services for the authenticated account
 * - Get detailed information about a specific Dedicated Ceph service
 * - Update cluster settings
 * - Manage service info, ACLs, CephFS, pools, users, user-pool permissions, tasks, health
 * - Change contact, terminate, and confirm termination
 *
 * Available operations:
 * - `list`: List all Dedicated Ceph services
 * - `get`: Get details of a specific Dedicated Ceph service
 * - `update`: Update a Dedicated Ceph cluster
 * - `getServiceInfos`: Get service info
 * - `updateServiceInfos`: Update service info
 * - `changeContact`: Change contact
 * - `terminate`: Request termination
 * - `confirmTermination`: Confirm termination
 * - `getHealth`: Get cluster health
 * - `listAcls`: List ACLs
 * - `getAcl`: Get ACL details
 * - `createAcl`: Create ACLs
 * - `deleteAcl`: Delete ACL
 * - `listCephfs`: List CephFS filesystems
 * - `getCephfs`: Get CephFS info
 * - `enableCephfs`: Enable CephFS
 * - `disableCephfs`: Disable CephFS
 * - `deleteCephfs`: Purge CephFS
 * - `listPools`: List pools
 * - `getPool`: Get pool details
 * - `createPool`: Create pool
 * - `deletePool`: Delete pool
 * - `allowPoolDeletion`: Allow pool deletion
 * - `listUsers`: List users
 * - `getUser`: Get user details
 * - `createUser`: Create user
 * - `deleteUser`: Delete user
 * - `listUserPools`: List user-pool permissions
 * - `createUserPool`: Create user-pool permissions
 * - `updateUserPool`: Update user-pool permission
 * - `deleteUserPool`: Clear user-pool permission
 * - `listTasks`: List tasks
 * - `getTask`: Get task details
 *
 * @remarks
 * Dedicated Ceph services are managed under `/dedicated/ceph` route.
 * Service name can be entered manually or selected from dynamic dropdown.
 */
import type {
	IDisplayOptions,
	IExecuteFunctions,
	INodeExecutionData,
	INodeProperties,
} from 'n8n-workflow';
import { execute as executeList, description as descriptionList } from './list.operation';
import { execute as executeGet, description as descriptionGet } from './get.operation';
import { execute as executeUpdate, description as descriptionUpdate } from './update.operation';
import * as serviceInfos from './resources/serviceInfos/index';
import * as changeContact from './resources/changeContact/index';
import * as terminate from './resources/terminate/index';
import * as confirmTermination from './resources/confirmTermination/index';
import * as health from './resources/health/index';
import * as acl from './resources/acl/index';
import * as cephfs from './resources/cephfs/index';
import * as pool from './resources/pool/index';
import * as user from './resources/user/index';
import * as userPool from './resources/userPool/index';
import * as task from './resources/task/index';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'DedicatedCeph Operation',
			name: 'dedicatedCephOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'Allow Pool Deletion',
					value: 'allowPoolDeletion',
					action: 'Allow pool deletion (5min window)',
				},
				{
					name: 'Change Contact',
					value: 'changeContact',
					action: 'Change contact for a Dedicated Ceph cluster',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm termination of a Dedicated Ceph cluster',
				},
				{
					name: 'Create ACL',
					value: 'createAcl',
					action: 'Create ACLs for a Dedicated Ceph cluster',
				},
				{
					name: 'Create Pool',
					value: 'createPool',
					action: 'Create a pool for a Dedicated Ceph cluster',
				},
				{
					name: 'Create User',
					value: 'createUser',
					action: 'Create a user for a Dedicated Ceph cluster',
				},
				{
					name: 'Create User Pool',
					value: 'createUserPool',
					action: 'Create user-pool permissions',
				},
				{
					name: 'Delete ACL',
					value: 'deleteAcl',
					action: 'Delete an ACL from a Dedicated Ceph cluster',
				},
				{
					name: 'Delete CephFS',
					value: 'deleteCephfs',
					action: 'Purge a CephFS filesystem',
				},
				{
					name: 'Delete Pool',
					value: 'deletePool',
					action: 'Delete a pool from a Dedicated Ceph cluster',
				},
				{
					name: 'Delete User',
					value: 'deleteUser',
					action: 'Delete a user from a Dedicated Ceph cluster',
				},
				{
					name: 'Delete User Pool',
					value: 'deleteUserPool',
					action: 'Clear user-pool permission',
				},
				{
					name: 'Disable CephFS',
					value: 'disableCephfs',
					action: 'Disable a CephFS filesystem',
				},
				{
					name: 'Enable CephFS',
					value: 'enableCephfs',
					action: 'Enable a CephFS filesystem',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a Dedicated Ceph service',
				},
				{
					name: 'Get ACL',
					value: 'getAcl',
					action: 'Get details of an ACL',
				},
				{
					name: 'Get CephFS',
					value: 'getCephfs',
					action: 'Get info about a CephFS filesystem',
				},
				{
					name: 'Get Health',
					value: 'getHealth',
					action: 'Get health status of a Dedicated Ceph cluster',
				},
				{
					name: 'Get Pool',
					value: 'getPool',
					action: 'Get details of a pool',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service info of a Dedicated Ceph cluster',
				},
				{
					name: 'Get Task',
					value: 'getTask',
					action: 'Get details of a task',
				},
				{
					name: 'Get User',
					value: 'getUser',
					action: 'Get details of a user',
				},
				{
					name: 'List',
					value: 'list',
					action: 'List all Dedicated Ceph services',
				},
				{
					name: 'List ACLs',
					value: 'listAcls',
					action: 'List all ACLs for a Dedicated Ceph cluster',
				},
				{
					name: 'List CephFS',
					value: 'listCephfs',
					action: 'List all CephFS filesystems for a Dedicated Ceph cluster',
				},
				{
					name: 'List Pools',
					value: 'listPools',
					action: 'List all pools for a Dedicated Ceph cluster',
				},
				{
					name: 'List Tasks',
					value: 'listTasks',
					action: 'List all tasks for a Dedicated Ceph cluster',
				},
				{
					name: 'List User Pools',
					value: 'listUserPools',
					action: 'List user-pool permissions for a Dedicated Ceph cluster',
				},
				{
					name: 'List Users',
					value: 'listUsers',
					action: 'List all users for a Dedicated Ceph cluster',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Request termination of a Dedicated Ceph cluster',
				},
				{
					name: 'Update',
					value: 'update',
					action: 'Update a Dedicated Ceph cluster',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service info of a Dedicated Ceph cluster',
				},
				{
					name: 'Update User Pool',
					value: 'updateUserPool',
					action: 'Update user-pool permission',
				},
			],
			default: 'list',
			displayOptions,
		},
	];

	return [
		...operationProperties,
		...descriptionList({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['get'] },
		}),
		...descriptionUpdate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['update'] },
		}),
		...serviceInfos.descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['getServiceInfos'] },
		}),
		...serviceInfos.descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['updateServiceInfos'] },
		}),
		...changeContact.descriptionChangeContact({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['changeContact'] },
		}),
		...terminate.descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['terminate'] },
		}),
		...confirmTermination.descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['confirmTermination'] },
		}),
		...health.descriptionGetHealth({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['getHealth'] },
		}),
		...acl.descriptionListAcls({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['listAcls'] },
		}),
		...acl.descriptionGetAcl({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['getAcl'] },
		}),
		...acl.descriptionCreateAcl({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['createAcl'] },
		}),
		...acl.descriptionDeleteAcl({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['deleteAcl'] },
		}),
		...cephfs.descriptionListCephfs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['listCephfs'] },
		}),
		...cephfs.descriptionGetCephfs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['getCephfs'] },
		}),
		...cephfs.descriptionEnableCephfs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['enableCephfs'] },
		}),
		...cephfs.descriptionDisableCephfs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['disableCephfs'] },
		}),
		...cephfs.descriptionDeleteCephfs({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['deleteCephfs'] },
		}),
		...pool.descriptionListPools({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['listPools'] },
		}),
		...pool.descriptionGetPool({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['getPool'] },
		}),
		...pool.descriptionCreatePool({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['createPool'] },
		}),
		...pool.descriptionDeletePool({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['deletePool'] },
		}),
		...pool.descriptionAllowPoolDeletion({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['allowPoolDeletion'] },
		}),
		...user.descriptionListUsers({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['listUsers'] },
		}),
		...user.descriptionGetUser({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['getUser'] },
		}),
		...user.descriptionCreateUser({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['createUser'] },
		}),
		...user.descriptionDeleteUser({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['deleteUser'] },
		}),
		...userPool.descriptionListUserPools({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['listUserPools'] },
		}),
		...userPool.descriptionCreateUserPool({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['createUserPool'] },
		}),
		...userPool.descriptionUpdateUserPool({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['updateUserPool'] },
		}),
		...userPool.descriptionDeleteUserPool({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['deleteUserPool'] },
		}),
		...task.descriptionListTasks({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['listTasks'] },
		}),
		...task.descriptionGetTask({
			...displayOptions,
			show: { ...displayOptions?.show, dedicatedCephOperation: ['getTask'] },
		}),
	];
}

/**
 * Executes the selected Dedicated Ceph operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('dedicatedCephOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'update':
			return await executeUpdate.call(this);
		case 'getServiceInfos':
			return await serviceInfos.executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await serviceInfos.executeUpdateServiceInfos.call(this);
		case 'changeContact':
			return await changeContact.executeChangeContact.call(this);
		case 'terminate':
			return await terminate.executeTerminate.call(this);
		case 'confirmTermination':
			return await confirmTermination.executeConfirmTermination.call(this);
		case 'getHealth':
			return await health.executeGetHealth.call(this);
		case 'listAcls':
			return await acl.executeListAcls.call(this);
		case 'getAcl':
			return await acl.executeGetAcl.call(this);
		case 'createAcl':
			return await acl.executeCreateAcl.call(this);
		case 'deleteAcl':
			return await acl.executeDeleteAcl.call(this);
		case 'listCephfs':
			return await cephfs.executeListCephfs.call(this);
		case 'getCephfs':
			return await cephfs.executeGetCephfs.call(this);
		case 'enableCephfs':
			return await cephfs.executeEnableCephfs.call(this);
		case 'disableCephfs':
			return await cephfs.executeDisableCephfs.call(this);
		case 'deleteCephfs':
			return await cephfs.executeDeleteCephfs.call(this);
		case 'listPools':
			return await pool.executeListPools.call(this);
		case 'getPool':
			return await pool.executeGetPool.call(this);
		case 'createPool':
			return await pool.executeCreatePool.call(this);
		case 'deletePool':
			return await pool.executeDeletePool.call(this);
		case 'allowPoolDeletion':
			return await pool.executeAllowPoolDeletion.call(this);
		case 'listUsers':
			return await user.executeListUsers.call(this);
		case 'getUser':
			return await user.executeGetUser.call(this);
		case 'createUser':
			return await user.executeCreateUser.call(this);
		case 'deleteUser':
			return await user.executeDeleteUser.call(this);
		case 'listUserPools':
			return await userPool.executeListUserPools.call(this);
		case 'createUserPool':
			return await userPool.executeCreateUserPool.call(this);
		case 'updateUserPool':
			return await userPool.executeUpdateUserPool.call(this);
		case 'deleteUserPool':
			return await userPool.executeDeleteUserPool.call(this);
		case 'listTasks':
			return await task.executeListTasks.call(this);
		case 'getTask':
			return await task.executeGetTask.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "dedicatedCeph"`);
}
