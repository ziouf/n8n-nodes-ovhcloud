/**
 * @brief HorizonView resource operations for n8n node
 *
 * Provides operations for managing OVH HorizonView services including:
 * - List all HorizonView services for the authenticated account
 * - Get detailed information about a specific HorizonView service
 * - Manage service information, access points, customer networks,
 *   dedicated Horizon settings, domain trusts, and termination
 *
 * Available operations:
 * - `list`: List all HorizonView services
 * - `get`: Get details of a specific HorizonView service
 * - `getServiceInfos`: Get service information
 * - `updateServiceInfos`: Update service information
 * - `listAccessPoints`: List access points (pools)
 * - `getAccessPoint`: Get access point details
 * - `createAccessPoint`: Create a new access point
 * - `deleteAccessPoint`: Delete an access point
 * - `changeSessionTimeout`: Change session timeout on UAG
 * - `disableTwoFA`: Disable two factor authentication
 * - `enableTwoFA`: Enable two factor authentication
 * - `disableWindowsUsernameOption`: Disable Windows username option
 * - `enableWindowsUsernameOption`: Enable Windows username option
 * - `listAccessPointCustomerNetworks`: List customer networks on access point
 * - `getAccessPointCustomerNetwork`: Get customer network details on access point
 * - `createAccessPointCustomerNetwork`: Add customer network to access point
 * - `deleteAccessPointCustomerNetwork`: Delete customer network from access point
 * - `listCustomerNetworks`: List customer networks
 * - `getCustomerNetwork`: Get customer network details
 * - `createCustomerNetwork`: Add a new customer network
 * - `deleteCustomerNetwork`: Delete a customer network
 * - `getDedicatedHorizon`: Get dedicated Horizon properties
 * - `enableStorageAccelerator`: Enable storage accelerator
 * - `disableStorageAccelerator`: Disable storage accelerator
 * - `listDedicatedHorizonCustomerUsers`: List customer users
 * - `getDedicatedHorizonCustomerUser`: Get customer user details
 * - `createDedicatedHorizonCustomerUser`: Create a customer user
 * - `deleteDedicatedHorizonCustomerUser`: Delete a customer user
 * - `changeDedicatedHorizonCustomerUserPassword`: Change customer user password
 * - `listDedicatedHorizonTasks`: List tasks
 * - `getDedicatedHorizonTask`: Get task details
 * - `getDedicatedHorizonUser`: Get user properties
 * - `changeDedicatedHorizonUserPassword`: Change user password
 * - `changeDedicatedHorizonUserProperties`: Change user properties
 * - `listDomainTrusts`: List domain trusts
 * - `getDomainTrust`: Get domain trust details
 * - `createDomainTrust`: Link an Active Directory
 * - `addChildDomain`: Add a child domain
 * - `addDomainController`: Add a domain controller
 * - `addDomainUserOnComposer`: Add a domain user on composer
 * - `createTrust`: Create a trust relationship
 * - `confirmTermination`: Confirm service termination
 * - `terminate`: Request service termination
 *
 * @remarks
 * HorizonView services are managed under `/horizonView` route.
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
import {
	descriptionGetServiceInfos,
	executeGetServiceInfos,
	descriptionUpdateServiceInfos,
	executeUpdateServiceInfos,
} from './resources/serviceInfos';
import {
	descriptionListAccessPoints,
	executeListAccessPoints,
	descriptionGetAccessPoint,
	executeGetAccessPoint,
	descriptionCreateAccessPoint,
	executeCreateAccessPoint,
	descriptionDeleteAccessPoint,
	executeDeleteAccessPoint,
	descriptionChangeSessionTimeout,
	executeChangeSessionTimeout,
	descriptionDisableTwoFA,
	executeDisableTwoFA,
	descriptionEnableTwoFA,
	executeEnableTwoFA,
	descriptionDisableWindowsUsernameOption,
	executeDisableWindowsUsernameOption,
	descriptionEnableWindowsUsernameOption,
	executeEnableWindowsUsernameOption,
} from './resources/accessPoint';
import {
	descriptionListAccessPointCustomerNetworks,
	executeListAccessPointCustomerNetworks,
	descriptionGetAccessPointCustomerNetwork,
	executeGetAccessPointCustomerNetwork,
	descriptionCreateAccessPointCustomerNetwork,
	executeCreateAccessPointCustomerNetwork,
	descriptionDeleteAccessPointCustomerNetwork,
	executeDeleteAccessPointCustomerNetwork,
} from './resources/accessPointCustomerNetwork';
import {
	descriptionListCustomerNetworks,
	executeListCustomerNetworks,
	descriptionGetCustomerNetwork,
	executeGetCustomerNetwork,
	descriptionCreateCustomerNetwork,
	executeCreateCustomerNetwork,
	descriptionDeleteCustomerNetwork,
	executeDeleteCustomerNetwork,
} from './resources/customerNetwork';
import {
	descriptionGetDedicatedHorizon,
	executeGetDedicatedHorizon,
	descriptionEnableStorageAccelerator,
	executeEnableStorageAccelerator,
	descriptionDisableStorageAccelerator,
	executeDisableStorageAccelerator,
} from './resources/dedicatedHorizon';
import {
	descriptionListDedicatedHorizonCustomerUsers,
	executeListDedicatedHorizonCustomerUsers,
	descriptionGetDedicatedHorizonCustomerUser,
	executeGetDedicatedHorizonCustomerUser,
	descriptionCreateDedicatedHorizonCustomerUser,
	executeCreateDedicatedHorizonCustomerUser,
	descriptionDeleteDedicatedHorizonCustomerUser,
	executeDeleteDedicatedHorizonCustomerUser,
	descriptionChangeDedicatedHorizonCustomerUserPassword,
	executeChangeDedicatedHorizonCustomerUserPassword,
} from './resources/dedicatedHorizonCustomerUser';
import {
	descriptionListDedicatedHorizonTasks,
	executeListDedicatedHorizonTasks,
	descriptionGetDedicatedHorizonTask,
	executeGetDedicatedHorizonTask,
} from './resources/dedicatedHorizonTask';
import {
	descriptionGetDedicatedHorizonUser,
	executeGetDedicatedHorizonUser,
	descriptionChangeDedicatedHorizonUserPassword,
	executeChangeDedicatedHorizonUserPassword,
	descriptionChangeDedicatedHorizonUserProperties,
	executeChangeDedicatedHorizonUserProperties,
} from './resources/dedicatedHorizonUser';
import {
	descriptionListDomainTrusts,
	executeListDomainTrusts,
	descriptionGetDomainTrust,
	executeGetDomainTrust,
	descriptionCreateDomainTrust,
	executeCreateDomainTrust,
	descriptionAddChildDomain,
	executeAddChildDomain,
	descriptionAddDomainController,
	executeAddDomainController,
	descriptionAddDomainUserOnComposer,
	executeAddDomainUserOnComposer,
	descriptionCreateTrust,
	executeCreateTrust,
} from './resources/domainTrust';
import {
	descriptionConfirmTermination,
	executeConfirmTermination,
} from './resources/confirmTermination';
import { descriptionTerminate, executeTerminate } from './resources/terminate';

export function description(displayOptions: IDisplayOptions): INodeProperties[] {
	const operationProperties: INodeProperties[] = [
		{
			displayName: 'HorizonView Operation',
			name: 'horizonViewOperation',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'List',
					value: 'list',
					action: 'List all HorizonView services',
				},
				{
					name: 'Get',
					value: 'get',
					action: 'Get details of a HorizonView service',
				},
				{
					name: 'Get Service Infos',
					value: 'getServiceInfos',
					action: 'Get service information',
				},
				{
					name: 'Update Service Infos',
					value: 'updateServiceInfos',
					action: 'Update service information',
				},
				{
					name: 'List Access Points',
					value: 'listAccessPoints',
					action: 'List access points (pools)',
				},
				{
					name: 'Get Access Point',
					value: 'getAccessPoint',
					action: 'Get access point details',
				},
				{
					name: 'Create Access Point',
					value: 'createAccessPoint',
					action: 'Create a new access point',
				},
				{
					name: 'Delete Access Point',
					value: 'deleteAccessPoint',
					action: 'Delete an access point',
				},
				{
					name: 'Change Session Timeout',
					value: 'changeSessionTimeout',
					action: 'Change session timeout on UAG',
				},
				{
					name: 'Disable Two FA',
					value: 'disableTwoFA',
					action: 'Disable two factor authentication',
				},
				{
					name: 'Enable Two FA',
					value: 'enableTwoFA',
					action: 'Enable two factor authentication',
				},
				{
					name: 'Disable Windows Username Option',
					value: 'disableWindowsUsernameOption',
					action: 'Disable Windows username option',
				},
				{
					name: 'Enable Windows Username Option',
					value: 'enableWindowsUsernameOption',
					action: 'Enable Windows username option',
				},
				{
					name: 'List Access Point Customer Networks',
					value: 'listAccessPointCustomerNetworks',
					action: 'List customer networks on access point',
				},
				{
					name: 'Get Access Point Customer Network',
					value: 'getAccessPointCustomerNetwork',
					action: 'Get customer network details on access point',
				},
				{
					name: 'Create Access Point Customer Network',
					value: 'createAccessPointCustomerNetwork',
					action: 'Add customer network to access point',
				},
				{
					name: 'Delete Access Point Customer Network',
					value: 'deleteAccessPointCustomerNetwork',
					action: 'Delete customer network from access point',
				},
				{
					name: 'List Customer Networks',
					value: 'listCustomerNetworks',
					action: 'List customer networks',
				},
				{
					name: 'Get Customer Network',
					value: 'getCustomerNetwork',
					action: 'Get customer network details',
				},
				{
					name: 'Create Customer Network',
					value: 'createCustomerNetwork',
					action: 'Add a new customer network',
				},
				{
					name: 'Delete Customer Network',
					value: 'deleteCustomerNetwork',
					action: 'Delete a customer network',
				},
				{
					name: 'Get Dedicated Horizon',
					value: 'getDedicatedHorizon',
					action: 'Get dedicated Horizon properties',
				},
				{
					name: 'Enable Storage Accelerator',
					value: 'enableStorageAccelerator',
					action: 'Enable storage accelerator',
				},
				{
					name: 'Disable Storage Accelerator',
					value: 'disableStorageAccelerator',
					action: 'Disable storage accelerator',
				},
				{
					name: 'List Dedicated Horizon Customer Users',
					value: 'listDedicatedHorizonCustomerUsers',
					action: 'List customer users',
				},
				{
					name: 'Get Dedicated Horizon Customer User',
					value: 'getDedicatedHorizonCustomerUser',
					action: 'Get customer user details',
				},
				{
					name: 'Create Dedicated Horizon Customer User',
					value: 'createDedicatedHorizonCustomerUser',
					action: 'Create a customer user',
				},
				{
					name: 'Delete Dedicated Horizon Customer User',
					value: 'deleteDedicatedHorizonCustomerUser',
					action: 'Delete a customer user',
				},
				{
					name: 'Change Dedicated Horizon Customer User Password',
					value: 'changeDedicatedHorizonCustomerUserPassword',
					action: 'Change customer user password',
				},
				{
					name: 'List Dedicated Horizon Tasks',
					value: 'listDedicatedHorizonTasks',
					action: 'List tasks',
				},
				{
					name: 'Get Dedicated Horizon Task',
					value: 'getDedicatedHorizonTask',
					action: 'Get task details',
				},
				{
					name: 'Get Dedicated Horizon User',
					value: 'getDedicatedHorizonUser',
					action: 'Get user properties',
				},
				{
					name: 'Change Dedicated Horizon User Password',
					value: 'changeDedicatedHorizonUserPassword',
					action: 'Change user password',
				},
				{
					name: 'Change Dedicated Horizon User Properties',
					value: 'changeDedicatedHorizonUserProperties',
					action: 'Change user properties',
				},
				{
					name: 'List Domain Trusts',
					value: 'listDomainTrusts',
					action: 'List domain trusts',
				},
				{
					name: 'Get Domain Trust',
					value: 'getDomainTrust',
					action: 'Get domain trust details',
				},
				{
					name: 'Create Domain Trust',
					value: 'createDomainTrust',
					action: 'Link an Active Directory',
				},
				{
					name: 'Add Child Domain',
					value: 'addChildDomain',
					action: 'Add a child domain',
				},
				{
					name: 'Add Domain Controller',
					value: 'addDomainController',
					action: 'Add a domain controller',
				},
				{
					name: 'Add Domain User On Composer',
					value: 'addDomainUserOnComposer',
					action: 'Add a domain user on composer',
				},
				{
					name: 'Create Trust',
					value: 'createTrust',
					action: 'Create a trust relationship',
				},
				{
					name: 'Confirm Termination',
					value: 'confirmTermination',
					action: 'Confirm service termination',
				},
				{
					name: 'Terminate',
					value: 'terminate',
					action: 'Request service termination',
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
			show: { ...displayOptions?.show, horizonViewOperation: ['list'] },
		}),
		...descriptionGet({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['get'] },
		}),
		...descriptionGetServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getServiceInfos'] },
		}),
		...descriptionUpdateServiceInfos({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['updateServiceInfos'] },
		}),
		...descriptionListAccessPoints({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['listAccessPoints'] },
		}),
		...descriptionGetAccessPoint({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getAccessPoint'] },
		}),
		...descriptionCreateAccessPoint({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['createAccessPoint'] },
		}),
		...descriptionDeleteAccessPoint({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['deleteAccessPoint'] },
		}),
		...descriptionChangeSessionTimeout({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['changeSessionTimeout'] },
		}),
		...descriptionDisableTwoFA({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['disableTwoFA'] },
		}),
		...descriptionEnableTwoFA({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['enableTwoFA'] },
		}),
		...descriptionDisableWindowsUsernameOption({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['disableWindowsUsernameOption'] },
		}),
		...descriptionEnableWindowsUsernameOption({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['enableWindowsUsernameOption'] },
		}),
		...descriptionListAccessPointCustomerNetworks({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['listAccessPointCustomerNetworks'] },
		}),
		...descriptionGetAccessPointCustomerNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getAccessPointCustomerNetwork'] },
		}),
		...descriptionCreateAccessPointCustomerNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['createAccessPointCustomerNetwork'] },
		}),
		...descriptionDeleteAccessPointCustomerNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['deleteAccessPointCustomerNetwork'] },
		}),
		...descriptionListCustomerNetworks({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['listCustomerNetworks'] },
		}),
		...descriptionGetCustomerNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getCustomerNetwork'] },
		}),
		...descriptionCreateCustomerNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['createCustomerNetwork'] },
		}),
		...descriptionDeleteCustomerNetwork({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['deleteCustomerNetwork'] },
		}),
		...descriptionGetDedicatedHorizon({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getDedicatedHorizon'] },
		}),
		...descriptionEnableStorageAccelerator({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['enableStorageAccelerator'] },
		}),
		...descriptionDisableStorageAccelerator({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['disableStorageAccelerator'] },
		}),
		...descriptionListDedicatedHorizonCustomerUsers({
			...displayOptions,
			show: {
				...displayOptions?.show,
				horizonViewOperation: ['listDedicatedHorizonCustomerUsers'],
			},
		}),
		...descriptionGetDedicatedHorizonCustomerUser({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getDedicatedHorizonCustomerUser'] },
		}),
		...descriptionCreateDedicatedHorizonCustomerUser({
			...displayOptions,
			show: {
				...displayOptions?.show,
				horizonViewOperation: ['createDedicatedHorizonCustomerUser'],
			},
		}),
		...descriptionDeleteDedicatedHorizonCustomerUser({
			...displayOptions,
			show: {
				...displayOptions?.show,
				horizonViewOperation: ['deleteDedicatedHorizonCustomerUser'],
			},
		}),
		...descriptionChangeDedicatedHorizonCustomerUserPassword({
			...displayOptions,
			show: {
				...displayOptions?.show,
				horizonViewOperation: ['changeDedicatedHorizonCustomerUserPassword'],
			},
		}),
		...descriptionListDedicatedHorizonTasks({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['listDedicatedHorizonTasks'] },
		}),
		...descriptionGetDedicatedHorizonTask({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getDedicatedHorizonTask'] },
		}),
		...descriptionGetDedicatedHorizonUser({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getDedicatedHorizonUser'] },
		}),
		...descriptionChangeDedicatedHorizonUserPassword({
			...displayOptions,
			show: {
				...displayOptions?.show,
				horizonViewOperation: ['changeDedicatedHorizonUserPassword'],
			},
		}),
		...descriptionChangeDedicatedHorizonUserProperties({
			...displayOptions,
			show: {
				...displayOptions?.show,
				horizonViewOperation: ['changeDedicatedHorizonUserProperties'],
			},
		}),
		...descriptionListDomainTrusts({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['listDomainTrusts'] },
		}),
		...descriptionGetDomainTrust({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['getDomainTrust'] },
		}),
		...descriptionCreateDomainTrust({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['createDomainTrust'] },
		}),
		...descriptionAddChildDomain({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['addChildDomain'] },
		}),
		...descriptionAddDomainController({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['addDomainController'] },
		}),
		...descriptionAddDomainUserOnComposer({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['addDomainUserOnComposer'] },
		}),
		...descriptionCreateTrust({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['createTrust'] },
		}),
		...descriptionConfirmTermination({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['confirmTermination'] },
		}),
		...descriptionTerminate({
			...displayOptions,
			show: { ...displayOptions?.show, horizonViewOperation: ['terminate'] },
		}),
	];
}

/**
 * Executes the selected HorizonView operation.
 *
 * Routes execution to the appropriate handler based on the selected operation.
 *
 * @param this - The n8n execute function context
 * @returns Array of execution results for the selected operation
 */
export async function execute(this: IExecuteFunctions): Promise<INodeExecutionData[]> {
	const operation = this.getNodeParameter('horizonViewOperation', 0, { extractValue: true });

	switch (operation) {
		case 'list':
			return await executeList.call(this);
		case 'get':
			return await executeGet.call(this);
		case 'getServiceInfos':
			return await executeGetServiceInfos.call(this);
		case 'updateServiceInfos':
			return await executeUpdateServiceInfos.call(this);
		case 'listAccessPoints':
			return await executeListAccessPoints.call(this);
		case 'getAccessPoint':
			return await executeGetAccessPoint.call(this);
		case 'createAccessPoint':
			return await executeCreateAccessPoint.call(this);
		case 'deleteAccessPoint':
			return await executeDeleteAccessPoint.call(this);
		case 'changeSessionTimeout':
			return await executeChangeSessionTimeout.call(this);
		case 'disableTwoFA':
			return await executeDisableTwoFA.call(this);
		case 'enableTwoFA':
			return await executeEnableTwoFA.call(this);
		case 'disableWindowsUsernameOption':
			return await executeDisableWindowsUsernameOption.call(this);
		case 'enableWindowsUsernameOption':
			return await executeEnableWindowsUsernameOption.call(this);
		case 'listAccessPointCustomerNetworks':
			return await executeListAccessPointCustomerNetworks.call(this);
		case 'getAccessPointCustomerNetwork':
			return await executeGetAccessPointCustomerNetwork.call(this);
		case 'createAccessPointCustomerNetwork':
			return await executeCreateAccessPointCustomerNetwork.call(this);
		case 'deleteAccessPointCustomerNetwork':
			return await executeDeleteAccessPointCustomerNetwork.call(this);
		case 'listCustomerNetworks':
			return await executeListCustomerNetworks.call(this);
		case 'getCustomerNetwork':
			return await executeGetCustomerNetwork.call(this);
		case 'createCustomerNetwork':
			return await executeCreateCustomerNetwork.call(this);
		case 'deleteCustomerNetwork':
			return await executeDeleteCustomerNetwork.call(this);
		case 'getDedicatedHorizon':
			return await executeGetDedicatedHorizon.call(this);
		case 'enableStorageAccelerator':
			return await executeEnableStorageAccelerator.call(this);
		case 'disableStorageAccelerator':
			return await executeDisableStorageAccelerator.call(this);
		case 'listDedicatedHorizonCustomerUsers':
			return await executeListDedicatedHorizonCustomerUsers.call(this);
		case 'getDedicatedHorizonCustomerUser':
			return await executeGetDedicatedHorizonCustomerUser.call(this);
		case 'createDedicatedHorizonCustomerUser':
			return await executeCreateDedicatedHorizonCustomerUser.call(this);
		case 'deleteDedicatedHorizonCustomerUser':
			return await executeDeleteDedicatedHorizonCustomerUser.call(this);
		case 'changeDedicatedHorizonCustomerUserPassword':
			return await executeChangeDedicatedHorizonCustomerUserPassword.call(this);
		case 'listDedicatedHorizonTasks':
			return await executeListDedicatedHorizonTasks.call(this);
		case 'getDedicatedHorizonTask':
			return await executeGetDedicatedHorizonTask.call(this);
		case 'getDedicatedHorizonUser':
			return await executeGetDedicatedHorizonUser.call(this);
		case 'changeDedicatedHorizonUserPassword':
			return await executeChangeDedicatedHorizonUserPassword.call(this);
		case 'changeDedicatedHorizonUserProperties':
			return await executeChangeDedicatedHorizonUserProperties.call(this);
		case 'listDomainTrusts':
			return await executeListDomainTrusts.call(this);
		case 'getDomainTrust':
			return await executeGetDomainTrust.call(this);
		case 'createDomainTrust':
			return await executeCreateDomainTrust.call(this);
		case 'addChildDomain':
			return await executeAddChildDomain.call(this);
		case 'addDomainController':
			return await executeAddDomainController.call(this);
		case 'addDomainUserOnComposer':
			return await executeAddDomainUserOnComposer.call(this);
		case 'createTrust':
			return await executeCreateTrust.call(this);
		case 'confirmTermination':
			return await executeConfirmTermination.call(this);
		case 'terminate':
			return await executeTerminate.call(this);
	}

	throw new Error(`Unsupported operation "${operation}" for resource "horizonView"`);
}
