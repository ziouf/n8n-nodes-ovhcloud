import { createOperationDispatcher } from '../../shared/nodes/createNodeDispatcher';

import { execute as accessPointPostExecute } from './resources/accessPoint/accessPointPost.operation';
import { execute as addChildDomainPostExecute } from './resources/domainTrust/addChildDomainPost.operation';
import { execute as customerNetworkPostExecute } from './resources/customerNetwork/customerNetworkPost.operation';
import { execute as accessPointCustomerNetworkPostExecute } from './resources/accessPoint/accessPointCustomerNetworkPost.operation';
import { execute as customerUserPostExecute } from './resources/dedicatedHorizon/customerUserPost.operation';
import { execute as addDomainControllerPostExecute } from './resources/domainTrust/addDomainControllerPost.operation';
import { execute as domainTrustPostExecute } from './resources/domainTrust/domainTrustPost.operation';
import { execute as addDomainUserOnComposerPostExecute } from './resources/domainTrust/addDomainUserOnComposerPost.operation';
import { execute as changeSessionTimeoutPostExecute } from './resources/accessPoint/changeSessionTimeoutPost.operation';
import { execute as customerUserChangePasswordPostExecute } from './resources/dedicatedHorizon/customerUserChangePasswordPost.operation';
import { execute as changePropertiesPostExecute } from './resources/dedicatedHorizon/changePropertiesPost.operation';
import { execute as changePasswordPostExecute } from './resources/dedicatedHorizon/changePasswordPost.operation';
import { execute as confirmTerminationPostExecute } from './resources/main/confirmTerminationPost.operation';
import { execute as createTrustPostExecute } from './resources/domainTrust/createTrustPost.operation';
import { execute as accessPointDeleteExecute } from './resources/accessPoint/accessPointDelete.operation';
import { execute as customerNetworkDeleteExecute } from './resources/customerNetwork/customerNetworkDelete.operation';
import { execute as accessPointCustomerNetworkDeleteExecute } from './resources/accessPoint/accessPointCustomerNetworkDelete.operation';
import { execute as customerUserDeleteExecute } from './resources/dedicatedHorizon/customerUserDelete.operation';
import { execute as disableStorageAcceleratorPostExecute } from './resources/dedicatedHorizon/disableStorageAcceleratorPost.operation';
import { execute as disableTwoFAPostExecute } from './resources/accessPoint/disableTwoFAPost.operation';
import { execute as disableWindowsUsernameOptionPostExecute } from './resources/accessPoint/disableWindowsUsernameOptionPost.operation';
import { execute as enableStorageAcceleratorPostExecute } from './resources/dedicatedHorizon/enableStorageAcceleratorPost.operation';
import { execute as enableTwoFAPostExecute } from './resources/accessPoint/enableTwoFAPost.operation';
import { execute as enableWindowsUsernameOptionPostExecute } from './resources/accessPoint/enableWindowsUsernameOptionPost.operation';
import { execute as accessPointDetailGetExecute } from './resources/accessPoint/accessPointDetailGet.operation';
import { execute as customerNetworkDetailGetExecute } from './resources/customerNetwork/customerNetworkDetailGet.operation';
import { execute as accessPointCustomerNetworkDetailGetExecute } from './resources/accessPoint/accessPointCustomerNetworkDetailGet.operation';
import { execute as customerUserDetailGetExecute } from './resources/dedicatedHorizon/customerUserDetailGet.operation';
import { execute as dedicatedHorizonGetExecute } from './resources/dedicatedHorizon/dedicatedHorizonGet.operation';
import { execute as taskDetailGetExecute } from './resources/dedicatedHorizon/taskDetailGet.operation';
import { execute as userGetExecute } from './resources/dedicatedHorizon/userGet.operation';
import { execute as domainTrustDetailGetExecute } from './resources/domainTrust/domainTrustDetailGet.operation';
import { execute as getExecute } from './resources/main/get.operation';
import { execute as serviceInfosGetExecute } from './resources/main/serviceInfosGet.operation';
import { execute as accessPointGetExecute } from './resources/accessPoint/accessPointGet.operation';
import { execute as customerNetworkGetExecute } from './resources/customerNetwork/customerNetworkGet.operation';
import { execute as accessPointCustomerNetworkGetExecute } from './resources/accessPoint/accessPointCustomerNetworkGet.operation';
import { execute as customerUserGetExecute } from './resources/dedicatedHorizon/customerUserGet.operation';
import { execute as taskGetExecute } from './resources/dedicatedHorizon/taskGet.operation';
import { execute as domainTrustGetExecute } from './resources/domainTrust/domainTrustGet.operation';
import { execute as listExecute } from './resources/main/list.operation';
import { execute as terminatePostExecute } from './resources/main/terminatePost.operation';

const noProps = (): never[] => [];

const { description, execute } = createOperationDispatcher(
	'horizonViewOperation',
	'horizonview',
	[
	{
		name: 'Add Access Point',
		value: 'accessPointPost',
		action: 'Add an access point to a Horizon View service',
		execute: accessPointPostExecute,
		description: noProps,
	},
	{
		name: 'Add Child Domain',
		value: 'addChildDomainPost',
		action: 'Add a child domain to a domain trust',
		execute: addChildDomainPostExecute,
		description: noProps,
	},
	{
		name: 'Add Customer Network',
		value: 'customerNetworkPost',
		action: 'Add a customer network to a Horizon View service',
		execute: customerNetworkPostExecute,
		description: noProps,
	},
	{
		name: 'Add Customer Network to Access Point',
		value: 'accessPointCustomerNetworkPost',
		action: 'Add a customer network to an access point',
		execute: accessPointCustomerNetworkPostExecute,
		description: noProps,
	},
	{
		name: 'Add Customer User',
		value: 'customerUserPost',
		action: 'Add a customer user to the dedicated Horizon component',
		execute: customerUserPostExecute,
		description: noProps,
	},
	{
		name: 'Add Domain Controller',
		value: 'addDomainControllerPost',
		action: 'Add a domain controller to a domain trust',
		execute: addDomainControllerPostExecute,
		description: noProps,
	},
	{
		name: 'Add Domain Trust',
		value: 'domainTrustPost',
		action: 'Add a domain trust to a Horizon View service',
		execute: domainTrustPostExecute,
		description: noProps,
	},
	{
		name: 'Add Domain User on Composer',
		value: 'addDomainUserOnComposerPost',
		action: 'Add a domain user on the composer for a domain trust',
		execute: addDomainUserOnComposerPostExecute,
		description: noProps,
	},
	{
		name: 'Change Access Point Session Timeout',
		value: 'changeSessionTimeoutPost',
		action: 'Change the session timeout of an access point',
		execute: changeSessionTimeoutPostExecute,
		description: noProps,
	},
	{
		name: 'Change Customer User Password',
		value: 'customerUserChangePasswordPost',
		action: 'Change the password of a customer user',
		execute: customerUserChangePasswordPostExecute,
		description: noProps,
	},
	{
		name: 'Change Dedicated Horizon User Properties',
		value: 'changePropertiesPost',
		action: 'Change the properties of the dedicated Horizon user',
		execute: changePropertiesPostExecute,
		description: noProps,
	},
	{
		name: 'Change User Password',
		value: 'changePasswordPost',
		action: 'Change the password of the dedicated Horizon user',
		execute: changePasswordPostExecute,
		description: noProps,
	},
	{
		name: 'Confirm Horizon View Service Termination',
		value: 'confirmTerminationPost',
		action: 'Confirm the termination of a Horizon View service',
		execute: confirmTerminationPostExecute,
		description: noProps,
	},
	{
		name: 'Create Trust',
		value: 'createTrustPost',
		action: 'Create a trust for a domain trust',
		execute: createTrustPostExecute,
		description: noProps,
	},
	{
		name: 'Delete Access Point',
		value: 'accessPointDelete',
		action: 'Delete an access point',
		execute: accessPointDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Customer Network',
		value: 'customerNetworkDelete',
		action: 'Delete a customer network of a Horizon View service',
		execute: customerNetworkDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Customer Network From Access Point',
		value: 'accessPointCustomerNetworkDelete',
		action: 'Delete a customer network from an access point',
		execute: accessPointCustomerNetworkDeleteExecute,
		description: noProps,
	},
	{
		name: 'Delete Customer User',
		value: 'customerUserDelete',
		action: 'Delete a customer user of the dedicated Horizon component',
		execute: customerUserDeleteExecute,
		description: noProps,
	},
	{
		name: 'Disable Storage Accelerator',
		value: 'disableStorageAcceleratorPost',
		action: 'Disable the storage accelerator on the dedicated Horizon component',
		execute: disableStorageAcceleratorPostExecute,
		description: noProps,
	},
	{
		name: 'Disable Two-Factor Authentication',
		value: 'disableTwoFAPost',
		action: 'Disable two-factor authentication on an access point',
		execute: disableTwoFAPostExecute,
		description: noProps,
	},
	{
		name: 'Disable Windows Username Option',
		value: 'disableWindowsUsernameOptionPost',
		action: 'Disable the Windows username option on an access point',
		execute: disableWindowsUsernameOptionPostExecute,
		description: noProps,
	},
	{
		name: 'Enable Storage Accelerator',
		value: 'enableStorageAcceleratorPost',
		action: 'Enable the storage accelerator on the dedicated Horizon component',
		execute: enableStorageAcceleratorPostExecute,
		description: noProps,
	},
	{
		name: 'Enable Two-Factor Authentication',
		value: 'enableTwoFAPost',
		action: 'Enable two-factor authentication on an access point',
		execute: enableTwoFAPostExecute,
		description: noProps,
	},
	{
		name: 'Enable Windows Username Option',
		value: 'enableWindowsUsernameOptionPost',
		action: 'Enable the Windows username option on an access point',
		execute: enableWindowsUsernameOptionPostExecute,
		description: noProps,
	},
	{
		name: 'Get Access Point Properties',
		value: 'accessPointDetailGet',
		action: 'Get the properties of an access point',
		execute: accessPointDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Customer Network Properties',
		value: 'customerNetworkDetailGet',
		action: 'Get the properties of a customer network',
		execute: customerNetworkDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Customer Network Properties From Access Point',
		value: 'accessPointCustomerNetworkDetailGet',
		action: 'Get the properties of a customer network of an access point',
		execute: accessPointCustomerNetworkDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Customer User Properties',
		value: 'customerUserDetailGet',
		action: 'Get the properties of a customer user',
		execute: customerUserDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Dedicated Horizon Properties',
		value: 'dedicatedHorizonGet',
		action: 'Get the properties of the dedicated Horizon component',
		execute: dedicatedHorizonGetExecute,
		description: noProps,
	},
	{
		name: 'Get Dedicated Horizon Task Properties',
		value: 'taskDetailGet',
		action: 'Get the properties of a task of the dedicated Horizon component',
		execute: taskDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Dedicated Horizon User',
		value: 'userGet',
		action: 'Get the customer user of the dedicated Horizon component',
		execute: userGetExecute,
		description: noProps,
	},
	{
		name: 'Get Domain Trust Properties',
		value: 'domainTrustDetailGet',
		action: 'Get the properties of a domain trust',
		execute: domainTrustDetailGetExecute,
		description: noProps,
	},
	{
		name: 'Get Horizon View Service Properties',
		value: 'get',
		action: 'Get the properties of a Horizon View service',
		execute: getExecute,
		description: noProps,
	},
	{
		name: 'Get Service Information',
		value: 'serviceInfosGet',
		action: 'Get the service information of a Horizon View service',
		execute: serviceInfosGetExecute,
		description: noProps,
	},
	{
		name: 'List Access Points',
		value: 'accessPointGet',
		action: 'List access points of a Horizon View service',
		execute: accessPointGetExecute,
		description: noProps,
	},
	{
		name: 'List Customer Networks',
		value: 'customerNetworkGet',
		action: 'List customer networks of a Horizon View service',
		execute: customerNetworkGetExecute,
		description: noProps,
	},
	{
		name: 'List Customer Networks of Access Point',
		value: 'accessPointCustomerNetworkGet',
		action: 'List customer networks of an access point',
		execute: accessPointCustomerNetworkGetExecute,
		description: noProps,
	},
	{
		name: 'List Customer Users',
		value: 'customerUserGet',
		action: 'List customer users of the dedicated Horizon component',
		execute: customerUserGetExecute,
		description: noProps,
	},
	{
		name: 'List Dedicated Horizon Tasks',
		value: 'taskGet',
		action: 'List tasks of the dedicated Horizon component',
		execute: taskGetExecute,
		description: noProps,
	},
	{
		name: 'List Domain Trusts',
		value: 'domainTrustGet',
		action: 'List domain trusts of a Horizon View service',
		execute: domainTrustGetExecute,
		description: noProps,
	},
	{
		name: 'List Horizon View Services',
		value: 'list',
		action: 'List all available Horizon View services',
		execute: listExecute,
		description: noProps,
		default: true,
	},
	{
		name: 'Terminate Horizon View Service',
		value: 'terminatePost',
		action: 'Ask for the termination of a Horizon View service',
		execute: terminatePostExecute,
		description: noProps,
	},
	],

);

export { description, execute };
